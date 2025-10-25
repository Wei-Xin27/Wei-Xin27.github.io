/**
 * Javascript SCORM API wrapper (v2.0)
 * 
 * This wrapper is designed to QuizCreator 3.0 and support SCORM 2004.
 * 
 * Copyright (c) 2009 Wondershare e-Learning
 * 
 * Created By Oscar Woo, 2009-07-25
 *
 * 修改说明:
 * 
 * 修复了API查找失败的问题，主要更新和新增了2个函数: getAPI()、ScanParentsForApi() 。
 *
 * 已经在 www.scorm.com 上测试通过。
 *
 * Created By Fengxb, 2010.2.24
 *
 **/

var g_bShowApiErrors = false;
var g_bInitializeOnLoad = true;
var g_strAPINotFound      = "Management system interface not found.";
var g_strAPITooDeep       = "Cannot find API - too deeply nested.";
var g_strAPIInitFailed    = "Found API but LMSInitialize failed.";
var g_strAPISetError      = "Trying to set value but API not available.";
var g_strFSAPIError       = 'LMS API adapter returned error code: "%1"\nWhen FScommand called API.%2\nwith "%3"';
var g_strDisableErrorMsgs = "Select cancel to disable future warnings.";
var g_bSetCompletedAutomatically = false;
var g_nFindAPITries = 0;
var g_objAPI = null;
var g_bInitDone = false;
var g_bFinishDone = false;
var g_bSCOBrowse = false;
var g_dtmInitialized = new Date();
var g_varInterval = "";
var g_intIntervalSecs = 3;
var g_intPollSecs = 0.25;
var g_intCurrentTime = new Date().getTime();
var MAX_PARENTS_TO_SEARCH = 500;

var sameshow = {};									//sameshow 'namespace' helps ensure no conflicts with possible other "SCORM" variables
sameshow.utils = {};
sameshow.debug = { isActive: true }; 				//Enable (true) or disable (false) for debug mode
sameshow.SCORM = {									//Define the SCORM object
    version:    null,               				
    session: {},									//Create session child object
    data: {},										//Create data child object
    support: {}										//Create support child object
};

function AlertUserOfAPIError(strText) {
	if (g_bShowApiErrors) {
		var s = strText + "\n\n" + g_strDisableErrorMsgs;
		if (!confirm(s)) {
			g_bShowApiErrors = false;
		}
	}
}

function ExpandString(s) {
	var re = new RegExp("%", "g");
	for (i = arguments.length - 1; i > 0; i--) {
		s2 = "%" + i;
		if (s.indexOf(s2) > -1) {
			re.compile(s2, "g");
			s = s.replace(re, arguments[i]);
		}
	}
	return s;
}

function ScanParentsForApi(win) 
{ 	  
      var nParentsSearched = 0;
      while ( (win.API_1484_11 == null) && 

                  (win.parent != null) && (win.parent != win) && 

                  (nParentsSearched <= MAX_PARENTS_TO_SEARCH) 

              )

      { 
            nParentsSearched++; 
            win = win.parent;

      } 
      return win.API_1484_11; 
}  

function getAPI() 
{ 
      var API = null; 
      if ((window.parent != null) && (window.parent != window)) 
      { 
            API = ScanParentsForApi(window.parent); 
      } 
      if ((API == null) && (window.top.opener != null))
      { 
            API = ScanParentsForApi(window.top.opener); 

      }	  
      return API;
}

function hasAPI() {
	return ((typeof (g_objAPI) != "undefined") && (g_objAPI != null));
}

function SCOInitialize() {
	var err = true;
	if (!g_bInitDone) {
		g_bInitDone = true;
		g_objAPI = getAPI();	
		
		if (!hasAPI()) {
			AlertUserOfAPIError(g_strAPINotFound);
			err = false;
		}
		else {
			err = g_objAPI.Initialize("");
			if (err == "true") {
				g_bSCOBrowse = (g_objAPI.GetValue("cmi.mode") == "browse");
				if (!g_bSCOBrowse) {
					g_objAPI.SetValue("cmi.exit", "suspend");
					if (g_objAPI.GetValue("cmi.completion_status") == "not attempted") {
						err = g_objAPI.SetValue("cmi.completion_status", "incomplete");
					}
				}
			}
			else {
				AlertUserOfAPIError(g_strAPIInitFailed);
			}
		}
		if (typeof (SCOInitData) != "undefined") {
			SCOInitData();
		}
		g_dtmInitialized = new Date();
	}
	
	return (err + "");
}

function SCOFinish() {
	if ((hasAPI()) && (g_bFinishDone == false)) {
		SCOReportSessionTime();
		if (g_bSetCompletedAutomatically) {
			SCOSetStatusCompleted();
		}
		if (typeof (SCOSaveData) != "undefined") {
			SCOSaveData();
		}
		g_bFinishDone = (g_objAPI.Terminate("") == "true");
	}
	return (g_bFinishDone + "");
}

function SCOGetValue(nam) {
	return ((hasAPI()) ? g_objAPI.GetValue(nam.toString()) : "");
}

function SCOCommit() {
	return ((hasAPI()) ? g_objAPI.Commit("") : "false");
}

function SCOGetLastError() {
	return ((hasAPI()) ? g_objAPI.GetLastError() : "-1");
}

function SCOGetErrorString(n) {
	return ((hasAPI()) ? g_objAPI.GetErrorString(n) : "No API");
}

function SCOGetDiagnostic(p) {
	return ((hasAPI()) ? g_objAPI.GetDiagnostic(p) : "No API");
}

function SCOSetValue(nam, val) {
	if (!hasAPI()) {
		AlertUserOfAPIError(g_strAPISetError + "\n" + nam + "\n" + val);
		return "false";
	}

  return g_objAPI.SetValue(nam, val.toString());
}

function MillisecondsToCMIDuration(n) {
	var hms = "";
	var dtm = new Date();
	dtm.setTime(n);
	var h = "000" + Math.floor(n / 3600000);
	var m = "0" + dtm.getMinutes();
	var s = "0" + dtm.getSeconds();
	var cs = "0" + Math.round(dtm.getMilliseconds() / 10);
	hms = "PT" + h.substr(h.length - 4) + "H" + m.substr(m.length - 2) + "M";
	hms += s.substr(s.length - 2) + "S";
	return hms;
}

function SCOReportSessionTime() {
	var dtm = new Date();
	var n = dtm.getTime() - g_dtmInitialized.getTime();
	return SCOSetValue("cmi.session_time", MillisecondsToCMIDuration(n));
}

function SCOSetStatusCompleted() {
	if (!g_bSCOBrowse) {
		g_objAPI.SetValue("cmi.exit", "normal");
  	return SCOSetValue("cmi.completion_status", "completed");
	}
}

function SCOSetObjectiveData(id, elem, v) {
	var result = "false";
	var i = SCOGetObjectiveIndex(id);
	if (isNaN(i)) {
		i = parseInt(SCOGetValue("cmi.objectives._count"));
		if (isNaN(i)) {
			i = 0;
		}
		if (SCOSetValue("cmi.objectives." + i + ".id", id) == "true") {
			result = SCOSetValue("cmi.objectives." + i + "." + elem, v);
		}
	}
	else {
		result = SCOSetValue("cmi.objectives." + i + "." + elem, v);
		if (result != "true") {
			i = parseInt(SCOGetValue("cmi.objectives._count"));
			if (!isNaN(i)) {
				if (SCOSetValue("cmi.objectives." + i + ".id", id) == "true") {
					result = SCOSetValue("cmi.objectives." + i + "." + elem, v);
				}
			}
		}
	}
	return result;
}

function SCOGetObjectiveData(id, elem) {
	var i = SCOGetObjectiveIndex(id);
	if (!isNaN(i)) {
		return SCOGetValue("cmi.objectives." + i + "." + elem);
	}
	return "";
}

function SCOGetObjectiveIndex(id) {
	var i = -1;
	var nCount = parseInt(SCOGetValue("cmi.objectives._count"));
	if (!isNaN(nCount)) {
		for (i = nCount - 1; i >= 0; i--) {
			if (SCOGetValue("cmi.objectives." + i + ".id") == id) {
				return i;
			}
		}
	}
	return NaN;
}

function AICCTokenToSCORMToken(strList, strTest) {
	var a = strList.split(",");
	var c = strTest.substr(0, 1).toLowerCase();
	for (i = 0; i < a.length; i++) {
		if (c == a[i].substr(0, 1)) {
			return a[i];
		}
	}
	return strTest;
}

function normalizeStatus(status) {
	return AICCTokenToSCORMToken("completed,incomplete,not attempted,failed,passed", status);
}

function normalizeInteractionType(theType) {
	return AICCTokenToSCORMToken("true-false,choice,fill-in,matching,performance,sequencing,likert,numeric", theType);
}

function normalizeInteractionResult(result) {
	var strInteractionResult = AICCTokenToSCORMToken("correct,wrong,unanticipated,neutral", result);
	strInteractionResult = (strInteractionResult == "wrong" ? "incorrect" : strInteractionResult);
	return strInteractionResult;
}

function checkInteractionResponse(response_str) {
	var result_str = "";
	for (var char_int = 0; char_int < response_str.length; char_int++) {
		if (response_str.substr(char_int, 1) == "." || response_str.substr(char_int, 1) == ",") {
			if (response_str.substr(char_int - 1, 1) != "[" && response_str.substr(char_int + 1, 1) != "]") {
				result_str += "[" + response_str.substr(char_int, 1) + "]";
			}
			else {
				result_str += response_str.substr(char_int, 1);
			}
		}
		else {
			result_str += response_str.substr(char_int, 1);
		}
	}
	result_str = (result_str == "" ? "0" : result_str);
	return result_str;
}

function formatTimestamp(time_var) {
	return formatDate() + "T" + formatTime(time_var, undefined, undefined, 2);
}

function formatTime(time_var, minutes_str, seconds_str, typeFormat_int) {
	var days_str, hours_str, formattedTime_str;
	days_str = "0";
	if (time_var == undefined) {
		var time_obj = new Date();
		hours_str = time_obj.getHours();
		minutes_str = time_obj.getMinutes();
		seconds_str = time_obj.getSeconds();
	}
	else if (typeof (time_var) == "string" && time_var.indexOf(":") > -1) {
		var time_obj = time_var.split(":");
		hours_str = time_obj[0];
		minutes_str = time_obj[1];
		seconds_str = time_obj[2];
	}
	else {
		days_str = "0";
		seconds_str = "0";
		minutes_str = "0";
		hours_str = "0";
		seconds_str = Math.round(time_var);
		if (seconds_str > 59) {
			minutes_str = Math.round(seconds_str / 60);
			seconds_str = seconds_str - (minutes_str * 60);
		}
		if (minutes_str > 59) {
			hours_str = Math.round(minutes_str / 60);
			minutes_str = minutes_str - (hours_str * 60);
		}
		if (hours_str > 23) {
			days_str = Math.round(hours_str / 24);
			hours_str = hours_str - (days_str * 24);
		}
	}
	if (typeFormat_int == undefined || typeFormat_int == 1) {
		formattedTime_str = "P";
		if (days_str != "0") {
			formattedTime_str += days_str + "D";
		}
		formattedTime_str += "T" + hours_str + "H" + minutes_str + "M" + seconds_str + "S";
	}
	else {
		formattedTime_str = formatNum(hours_str, 2) + ":" + formatNum(minutes_str, 2) + ":" + formatNum(seconds_str, 2);
	}
	return formattedTime_str;
}

function formatDate(date_var, day_str, year_str) {
	if (date_var == undefined) {
		var date_obj = new Date();
		date_var = formatNum((date_obj.getMonth() + 1), 2);
		day_str = formatNum((date_obj.getDate()), 2);
		year_str = (date_obj.getFullYear());
	}
	else if (typeof (date_var) == "string" && date_var.indexOf("/") > -1) {
		var date_obj = date_var.split("/");
		date_var = formatNum(date_obj[0], 2);
		day_str = formatNum(date_obj[1], 2);
		year_str = formatNum(date_obj[2], 4);
	}
	var formattedDate_str = (year_str + "-" + date_var + "-" + day_str);
	return formattedDate_str;
}

function formatNum(initialValue_var, numToPad_int) {
	var paddedValue_str = "";
	var i = 0;
	var initialValue_str = initialValue_var.toString();
	if (initialValue_str.length > numToPad_int) {

	}
	else {
		for (var i = 1; i <= (numToPad_int - initialValue_str.length); i++) {
			paddedValue_str = paddedValue_str + "0";
		}
	}
	paddedValue_str = paddedValue_str + initialValue_var;
	return paddedValue_str;
}

var g_bIsIE = navigator.appName.indexOf("Microsoft") != -1;
function sf_DoFSCommand(command, args) {
	var loaderObj = g_bIsIE ? sf : document.sf;
	var myArgs = new String(args);
	var cmd = new String(command);
	var v = "";
	var err = "true";
	var arg1, arg2, n, s, i;
	var sep = myArgs.indexOf(",");
	if (sep > -1) {
		arg1 = myArgs.substr(0, sep);
		arg2 = myArgs.substr(sep + 1);
	}
	else {
		arg1 = myArgs;
	}

  if (cmd.substring(0, 3) == "LMS") {
		if (cmd == "LMSInitialize") {
			err = SCOInitialize();
		}
		else if (cmd == "LMSSetValue") {
			//alert('LMSSetValue: \r\rArg1: ' + arg1 + '\rArg2: ' + arg2);
			err = SCOSetValue(arg1, arg2);
		}
		else if (cmd == "LMSFinish") {
			err = SCOFinish();
		}
		else if (cmd == "LMSComplete") {
			err = SCOSetStatusCompleted();
		}
		else if (cmd == "LMSCommit") {
			err = SCOCommit();
		}
		else if (cmd == "LMSFlush") {

		}
		else if ((arg2) && (arg2.length > 0)) {
			if (cmd == "LMSGetValue") {
				//alert('LMSSetValue: \r\rArg1: ' + arg1 + '\rArg2: ' + arg2);
				loaderObj.SetVariable(arg2, SCOGetValue(arg1));
			}
			else if (cmd == "LMSGetLastError") {
				loaderObj.SetVariable(arg2, SCOGetLastError(arg1));
			}
			else if (cmd == "LMSGetErrorString") {
				loaderObj.SetVariable(arg2, SCOGetErrorString(arg1));
			}
			else if (cmd == "LMSGetDiagnostic") {
				loaderObj.SetVariable(arg2, SCOGetDiagnostic(arg1));
			}
			else {
				v = eval('g_objAPI.' + cmd + '(\"' + arg1 + '\")');
				loaderObj.SetVariable(arg2, v);
			}
		}
		else if (cmd.substring(0, 3) == "LMSGet") {
			err = "-2: No Flash variable specified";
		}
	}
	if ((g_bShowApiErrors) && (err != "true")) {
		AlertUserOfAPIError(ExpandString(g_strFSAPIError, err, cmd, args));
	}
	return err;
}

sameshow.SCORM.isAvailable = function(){
	return true;     
};

sameshow.SCORM.session.initialize = function (){
	return SCOInitialize();
}
sameshow.SCORM.session.terminate = function (){
	return SCOFinish();
}
sameshow.SCORM.data.commit = function (){
	return SCOCommit();
}
sameshow.SCORM.data.get = function(parameter){
	return SCOGetValue(parameter);
}
sameshow.SCORM.data.set = function(parameter, value){
	return SCOSetValue(parameter, value);
}
sameshow.SCORM.support.getLastError = function (){
	return SCOGetLastError();	
}
sameshow.SCORM.support.getErrorString = function(errorCode){
	return SCOGetErrorString(errorCode);
}
sameshow.SCORM.support.getDiagnostic = function(errorCode){
	return SCOGetDiagnostic(errorCode);
}

/* -------------------------------------------------------------------------
   sameshow.utils.trace()
   Displays error messages when in debug mode.

   Parameters: msg (string)  
   Return:     None
---------------------------------------------------------------------------- */

sameshow.utils.trace = function(msg){
     if(sameshow.debug.isActive){
     
		//Firefox users can use the 'Firebug' extension's console.
		if(window.console && window.console.firebug){
			console.log(msg);
		} else {
			//alert(msg);
		}
		
     }
};