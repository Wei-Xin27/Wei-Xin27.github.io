function getRadioSelection(RadioByName) {
    // How to: var CalendarInput = getRadioButtonChange(document.getElementsByName('InputCal'));
    for (var i = 0, length = RadioByName.length; i < length; i++) {
        if (RadioByName[i].checked) {
            return RadioByName[i].value;
            break;
        }
    }
}  // end function getRadioSelection


function getCheckboxStatus(el){
  var ElementStatus=document.getElementById(el);
  if (ElementStatus.checked) return true; else return false;
}  // end function getCheckboxStatus



function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}  // end function zeroPad


function reverseStr(s) {
  var o = [];
  for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
    o[j] = s[i];
  return o.join('');
}  // end function reversestr


function removeHTMLTagOptions(obj) {
    //How to: removeHTMLTagOptions(document.getElementById('myselect'));
    if (obj == null) return;
    if (obj.options == null) return;
    obj.options.length = 0;  // That's it!
} // end function removeHTMLTagOptions


var JSArrayTool = {
    /* http://stackoverflow.com/questions/18478284/querying-array-of-objects-using-javascript-helper-functions
       Say you have an array of Employees in a Json Format like this

        var employeesArray =  [{"Id":1,"Name":"tom","Age":15},{"Id":2,"Name":"Harry","Age":17}];
        and you want to retrieve employee by his Age not only ID (as common) , you can simply call

        JSArrayTool.getItemFromArray(employeesArray,"Age",15)
    */
    removeItemFromArray: function (myObjects, prop, valu) {
        return myObjects.filter(function (item) {
            return item[prop] !== valu;
        });

    },
    isExistInArray: function (myObjects, prop, valu) {
        var i = myObjects.length;
        while (i--) {
            if (myObjects[i][prop] == valu) {
                return true;
            }
        }
        return false;
    },
    getItemFromArray: function (myObjects, prop, valu) {
        var i = myObjects.length;
        while (i--) {
            if (myObjects[i][prop] == valu) {
                return myObjects[i];
            }
        }
        return "";
    },
    sumItemInArray: function (myObjects, prop) {
        var summation = 0;
        myObjects.forEach(function (item) {
            summation += parseFloat(item[prop]);
        });
        return summation;
    }
}  // end var JSTool

function Array2UnorderedList(StrArray, subject, CSS){
    var InputStyle;
    if(CSS===undefined) InputStyle=""; else InputStyle=CSS;

    for(var i=0; i<StrArray.length; i++){
        if (StrArray[i] != "" || typeof StrArray[i] != 'undefined') {
            StrArray[i] = '<li '+ InputStyle +'>' + StrArray[i] + '</li>'; 
			//if (CSS != "" || typeof CSS != 'undefined') StrArray[i] = '<li '+ CSS +'>' + StrArray[i] + '</li>'; else StrArray[i] = "<li>" + StrArray[i] + "</li>";
		}
    }
	StrArray.unshift("<ul>");
    StrArray.push("</ul>");

	if(subject!="" || typeof StrArray[i] != 'undefined') StrArray.unshift(subject);

    return StrArray.join("");
}  // end function Array2UnorderedList


function Array2ULConstructor(StrArray, CSSclass, ULHeader){
    // StrArray is string array of contents to put as UL
    // CSSclass CSS Class name of the UL
    // ULHeader is optional string as the header of the ordered list in HTML format
    
    var CSSstring;
    CSSstring = (CSSclass===undefined)? "" : 'class = "' + CSSclass + '"';
    
    for(var i=0; i<StrArray.length; i++){
        if (StrArray[i] != "" || typeof StrArray[i] != 'undefined') {
            StrArray[i] = '<li '+ InputStyle +'>' + StrArray[i] + '</li>'; 
		} // end if
    } // end for
	StrArray.unshift('<ul' + CSSstring + '>');
    StrArray.push("</ul>");
    
    if(ULHeader!="" || typeof StrArray[i] != 'undefined') StrArray.unshift(ULHeader);
    return StrArray.join("");
} // end function Array2ULConstructor


function ArryToTable(dataarry, TableProperties){
    /*
    var ArryTblProp = {
        "Caption": true, //with caption
        "CaptionStr": "MyTable",
        "CaptionCSS": ".TableCaption",
        "TableTitle": "",
        "RowHeight": 24, //px
        "ColumnWidth": [100, 100, 100, 100, 100], //width for each column
        "HighligtedRow": [],
        "HighligtedCSS": "",
        "FirstRowIsTitle": true,
        "FirstColIsTitle": true,
        "RowTitleCSS": "",
        "ColTitleCSS": ""
    };
    
        var data = [
            ['Name', 'Age', 'Email],
            ['John Doe', '27', 'john@doe.com'],
            ['Jane Doe', '29', 'jane@doe.com']
        ];
    */
    var defaultCaptionCSS = 'style="caption-side:top; text-align:left; font:bold 18px KaiTi; color:#6600CC"';
    if (TableProperties.CaptionCSS == "default") TableProperties.CaptionCSS = defaultCaptionCSS;

    var TableCaption = '<caption ' +TableProperties.CaptionCSS +'>' + TableProperties.CaptionStr +'</caption>';
    var TableHeader = '<table style="text-align: left;" title="' + TableProperties.TableTitle + '" border="1" cellpadding="0" cellspacing="0">';

    var TableArray = [];
    var rowdata;
    TableArray.push(TableHeader);
    if(TableProperties.Caption) TableArray.push(TableCaption);
    TableArray.push("<tbody>"); //Table body start here

    for(var i=0; i<dataarry.length; i++){
        rowdata = dataarry[i].slice(0);
        rowdataarry = rowdata.split(",");
        TableArray.push("<tr>"); // add table row tag
        for (var j = 0; j < rowdataarry.length; j++){
            var horizontalalignment = (j == 0) ? "left" : "center";
            var rowtabledata='<td style="vertical-align: middle; height: '+TableProperties.RowHeight+'px; width: '+TableProperties.ColumnWidth[j]+'px; text-align: '+horizontalalignment+';">'+rowdataarry[j]+'</td>'
            TableArray.push(rowtabledata);
        }
        TableArray.push("</tr>");  // close table row tag
    }
    TableArray.push("</tbody>"); 
    TableArray.push("</table>");
    //TableArray.push("<p>");

    return TableArray.join("");
}  // end function ArryToTable


function ArrayToSelect(SelBoxId, SelElement) {
    var eleSelBox = document.getElementById(SelBoxId);
    for(var i=0; i<SelElement.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = SelElement[i];
        opt.value = SelElement[i];
        eleSelBox.appendChild(opt);
    } // end for i
} // end function ArrayToSelect


function SpliceColumnFromArray(SourceArray, ColumnOffset, NulltoExclude){
    // NulltoExclude: "Yes", "No"
    var rowdata, tempdata;
    var ExtractedColumn=[];
    
    for (var i=0; i<SourceArray.length; i++){
        rowdata = SourceArray[i].slice(0);
        rowdata.splice(0, ColumnOffset);
        tempdata = rowdata.toString();
        if (tempdata!="") ExtractedColumn.push(tempdata);
        if (tempdata=="" && NulltoExclude=="No") ExtractedColumn.push(tempdata);
    }
    return ExtractedColumn;
}  // end function SpliceColumnFromArray


function ArraySubset(array1, array2) {
    // test if array 2 a subset of array 1, all element in array 2 must contain inside arrray 1
    var AllIn = true;
    var IamIn;
    for(var i=0; i<array2.length; i++){
        var arrayele = array2[i];
        IamIn = (array1.indexOf(arrayele) >=0);
        AllIn = AllIn && IamIn;
    } // end for i
    
    return AllIn;
} // end function ArraySubset



function RemoveColumnFromArray(SourceArray, ColumnOffset){
    //this is to remove particular column from at array and return the reform array
    //ReformArray= RemoveColumnFromArray(OriginalArray, 5); this remove column 5 from the Original array and return the reform array

    var rowdata;
    var ReformArray=[];

    for (var i=0; i<SourceArray.length; i++){
        rowdata = SourceArray[i].slice(0); //duplicate each row of data
        if(_.isNumber(ColumnOffset) && ColumnOffset!="" && (typeof ColumnOffset!== "undefined") && ColumnOffset>=0 && (ColumnOffset<rowdata.length)) rowdata.splice(ColumnOffset,1);
        ReformArray.push(rowdata.toString());
    }
    return ReformArray;
}  // end function RemoveColumnFromArray


function SumArrayByColumn(Array2Sum, ColOneIsTitle, RowOneIsTitle, ColRightOffset, NumberPrecision, DecPoint){
    //sample data=[[ColTitle1, ColTitle2, ColTitle3,ColTitle4], [RowTitle1, 1,2,3], [RowTitle2, 4,5,6]]
    // ColRightOffSet: to off set the unwanted column from the right of table
    // NumberPrecision: "fixed" or "precision", DecPoint: Number of decimal points

    var RowOne=Array2Sum[0] // take the 1st row to get the number of column per row
    var ColumnNum = RowOne.length-ColRightOffset;
    var RowNum = Array2Sum.length;
    var SumArray = [];

    var ColStart=(ColOneIsTitle)?1:0 ; //offset 1 if column 1 is title
    var RowStart=(RowOneIsTitle)?1:0 ; //offset 1 if row 1 is title

    for(var i=ColStart; i<ColumnNum; i++){
        var ColTotal = 0;
        for (var j = RowStart; j < RowNum; j++) {
            if(Array2Sum[j][i] === undefined || isNaN(Array2Sum[j][i])) ArryEle = 0; else ArryEle=Number(Array2Sum[j][i]);
            //console.log(i + "-" + j + " : "+ ArryEle);
            ColTotal = ColTotal+ArryEle;
        } // end for j, row
        //console.log(i + ":" + ColTotal);
        var SubTotal;
        switch(NumberPrecision){
            case "fixed":
                SubTotal = ColTotal.toFixed(DecPoint);
                break;
            case "precision":
                SubTotal = ColTotal.toPrecision(DecPoint);
                break;
            default:
                alert(NumberPrecision+": Number precision for SumArrayByColumn fuction is wrong, either 'fixed' or 'precision'")
                SubTotal = ColTotal.toPrecision(DecPoint);
        }
        SumArray.push(SubTotal);
    } // end for j, column
    return SumArray;
}  // function SumArrayByColumn


function VerticalString(InputStr, ClassName){
    var vStr = [];
    for(var i=0; i<InputStr.length;i++){
        CSSClassName = "vStr" + ClassName;
        vStr.push('<span class="'+CSSClassName+'">'+InputStr.substr(i,1)+'</span>'+'<br>');
    }
    return vStr.join("");
} // end function VerticalString



function sortArrOfObjectsByParam(arrToSort /* array */, strObjParamToSortBy /* string */, sortAscending /* bool(optional, defaults to true) */) {

/* Example:
    Sorts an array of objects (note: sorts the original array and returns nothing)
        var arrOfObj = [
            { "Name": "Zak", "Age": 25 },
            { "Name": "Adel", "Age": 38},
            { "Name": "Yori", "Age": 28}
            ];

            sortArrOfObjectsByParam(arrOfObj, "Name");
            alert("ASCENDING: " + arrOfObj[0].Name + ", " + arrOfObj[1].Name + ", " + arrOfObj[2].Name);

            sortArrOfObjectsByParam(arrOfObj, "Name", false);
            alert("DECENDING: " + arrOfObj[0].Name + ", " + arrOfObj[1].Name + ", " + arrOfObj[2].Name);

*/

    if(sortAscending == undefined) sortAscending = true;  // default to true
    
    if(sortAscending) {
        arrToSort.sort(function (a, b) {
            return a[strObjParamToSortBy] > b[strObjParamToSortBy];
        });
    }
    else {
        arrToSort.sort(function (a, b) {
            return a[strObjParamToSortBy] < b[strObjParamToSortBy];
        });
    }
}  // end function sortArrOfObjectsByParam


function ObjArry2PanelGrp(ObjArr, GrpName, DataOpt){
    //ObjArr: The array of object
    //GrpName: Panel Group Name
    //DataOpt: User data opt no.  This to use to retrieve respective data element base on given ObjArr
    
    var PnlGrp = [];
    var DataParentName="#"+GrpName;
    var dtName, hrefName, RowName, RowData;

    PnlGrp.push('<div class="panel-group" id="'+ GrpName +'">');

    for(var i=0; i<ObjArr.length; i++){
        
        switch(DataOpt){
            case "神煞":
                RowName=ObjArr[i].神煞;
                hrefName="#col-"+RowName;
                dtName="col-"+RowName;
                RowData = ObjArr[i].神煞註解;
                break;
            case "經典":
                RowName=ObjArr[i].經典;
                hrefName="#col-"+RowName;
                dtName="col-"+RowName;
                RowData = ObjArr[i].經典註解;
                break;
        } // end switch
        //console.log(RowData);

        PnlGrp.push('<div class="panel panel-default">');
        PnlGrp.push('<div class="panel-heading">');
        PnlGrp.push('<h4 class="panel-title">');
        PnlGrp.push('<a data-toggle="collapse" data-parent="' + DataParentName + '" href="' + hrefName+ '">' + RowName + '</a>');
        PnlGrp.push('</h4>');
        PnlGrp.push('</div>');
        PnlGrp.push('<div id="' + dtName + '" class="panel-collapse collapse">');
        PnlGrp.push('<div class="panel-body">');
        PnlGrp.push(RowData);
        PnlGrp.push('</div>');
        PnlGrp.push('</div>');
        PnlGrp.push('</div>');
    } // end for
    
    return PnlGrp.join("");
}  // end function ObjArry2PanelGrp

function DataArrytoPanelGrp(ObjArr, GrpName){
    //ObjArr: The array of object
    //GrpName: Panel Group Name

    //console.log(ObjArr);
    var PnlGrp = [];
    var DataParentName="#"+GrpName;
    var dtName, hrefName, RowName, RowData;

    PnlGrp.push('<div class="panel-group" id="'+ GrpName +'">');

    for(var i=0; i<ObjArr.length; i++){
        RowName=ObjArr[i].SubGroupName;  //name of the sub-panel ground
        hrefName="#col-"+RowName;
        dtName="col-"+RowName;
        RowData = ObjArr[i].ContentDisplay;  //content

        PnlGrp.push('<div class="panel panel-default">');
        PnlGrp.push('<div class="panel-heading">');
        PnlGrp.push('<h4 class="panel-title">');
        PnlGrp.push('<a data-toggle="collapse" data-parent="' + DataParentName + '" href="' + hrefName+ '">' + RowName + '</a>');
        PnlGrp.push('</h4>');
        PnlGrp.push('</div>');
        PnlGrp.push('<div id="' + dtName + '" class="panel-collapse collapse">');
        PnlGrp.push('<div class="panel-body">');
        PnlGrp.push(RowData);
        PnlGrp.push('</div>');
        PnlGrp.push('</div>');
        PnlGrp.push('</div>');
    } // end for
    
    return PnlGrp.join("");
} // end function ObjArry2PanelGrp


function getIP() {
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 
    xmlhttp.open("GET"," http://api.hostip.info/get_html.php ",false);
    xmlhttp.send();
 
    hostipInfo = xmlhttp.responseText.split("n");
 
    for (i=0; hostipInfo.length >= i; i++) {
        ipAddress = hostipInfo[i].split(":");
        if ( ipAddress[0] == "IP" ) return ipAddress[1];
    }
 
    return false;
}  // end function getIP

//********************* *****************************************************

jQuery.fn.selectText = function(){
   //select all text by element
   var doc = document;
   var element = this[0];
   console.log(this, element);
   if (doc.body.createTextRange) {
       var range = document.body.createTextRange();
       range.moveToElementText(element);
       range.select();
   } else if (window.getSelection) {
       var selection = window.getSelection();        
       var range = document.createRange();
       range.selectNodeContents(element);
       selection.removeAllRanges();
       selection.addRange(range);
   }

   /* Example:
    $("button").click(function() {
        $("#editable").selectText();
    });​
   */
};

 function momentDateDiff(date1, date2, measurement, round) {
    //date1 should be bigger than date2, else return negative no.
    //diffunit, the unit of different, default is 'days'
    //Supported measurements: years, months, weeks, days, hours, minutes, and seconds
    //required moment library
    
    if(date1==undefined) console.log("Input Date 1 is undefined");
    if(date2==undefined) console.log("Input Date 2 is undefined");

    var year1=date1.getFullYear();
    var month1=date1.getMonth();
    var day1=date1.getDate();
    var year2=date2.getFullYear();
    var month2=date2.getMonth();
    var day2=date2.getDate();

    var mdate1 = moment([year1, month1, day1]);
    var mdate2 = moment([year2, month2, day2]);
    if(measurement == undefined) measurement = 'days';  // default to true
    if(round == undefined || round == false) return mdate1.diff(mdate2, measurement); else return mdate1.diff(mdate2, measurement, true);
    //return Math.abs(mdate1.diff(mdate2, measurement));
 }  //function momentDateDiff
 
// ******************** Canvas JS Chart ***************************8

function 五行十神圖表(ChartProp, wxDataObj) {
    
    var StartPortion=wxDataObj[0].x;    
    var CalcAngle;
    if(StartPortion<=50) CalcAngle=180+(1.80*(50-StartPortion));
    if(StartPortion>50) CalcAngle=180-(1.80*(StartPortion-50));
        
    var chart = new CanvasJS.Chart(ChartProp.Container,
       {
            title:{
                text: "五行分佈", //ChartProp.Title,
                fontSize: 24,
                fontFamily: '"kaiti", "Trebuchet", "calibri", "arial", "tahoma"', //default calibri
                horizontalAlign: "center", // left, center ,right 
                verticalAlign: "top"  // top, center, bottom
                
            },
            legend: {
                fontSize: 15,
                fontFamily: '"kaiti", "calibri", "arial", "tahoma"', //default calibri
                horizontalAlign: "center", // left, center ,right 
                verticalAlign: "bottom"  // top, center, bottom
            },

            toolTip:{
                enabled: true, //default true
                //content: //default to datapoints' tooltipcontent
                fontSize: 15,
                fontStyle: "normal",
                fontFamily: '"Trebuchet", "kaiti", "calibri", "arial", "tahoma"' //default calibri
            },
        
            animationEnabled: false, //default true
            theme: "theme2",
            backgroundColor: ChartProp.bgColor,
            data: [
            {   
                
                type: "doughnut",
                indexLabel: "", //"{label}",  // indexLabel: "{x}, {y}"
                indexLabelFontFamily: "Garamond",       
                indexLabelFontSize: 20,
                indexLabelPlacement: "inside", //default is "outside"
                startAngle:CalcAngle,
                indexLabelFontColor: "dimgrey",       
                indexLabelLineColor: "darkgrey", 
                showInLegend: true, 

                dataPoints: wxDataObj
            }
            ]
        });

        chart.render();
}

function cjsBarChart(ChartProp, wxDataObj) {
    //wxDataObj2=
    var chart = new CanvasJS.Chart(ChartProp.Container,
       {
            title:{
                text: ChartProp.Title,
                fontSize: 18,
                fontFamily: '"kaiti", "Trebuchet", "calibri", "arial", "tahoma"', //default calibri
                horizontalAlign: "center", // left, center ,right 
                verticalAlign: "bottom"  // top, center, bottom
                
            },
            axisX: {
                //title: "十神",
                //titleFontFamily: '"kaiti", "Trebuchet", "calibri", "arial", "tahoma"', //default calibri
                titleFontColor: "#2E9AFE",
                labelFontFamily: '"kaiti", "Trebuchet", "calibri", "arial", "tahoma"', //default calibri
                labelFontColor: "black",
                labelFontSize: 18,
                labelFontWeight: "bold",
                tickThickness: 0,
                lineThickness: 2,
                valueFormatString: " ",
                gridThickness: 0                
            },
        
            axisY: {
               //title: "axisY Title",
                //interlacedColor: "#F8F1E4",
                gridThickness: 0,  //how thick is the interlace line
                gridDashType: "dash",
                tickLength: 10
                
            },
        
            legend: {
                fontSize: 15,
                fontFamily: '"kaiti", "calibri", "arial", "tahoma"', //default calibri
                horizontalAlign: "center", // left, center ,right 
                verticalAlign: "top"  // top, center, bottom
            },

            toolTip:{
                enabled: true  //default true
                //content: //default to datapoints' tooltipcontent
                //fontSize: 15,
                //fontFamily: '"kaiti", "Trebuchet", "calibri", "arial", "tahoma"' //default calibri
            },
        
            animationEnabled: false,
            //theme: "theme2",
            backgroundColor: ChartProp.bgColor,
            data: [
            {     
                type: "bar",
                axisYType: "primary",
                color: "#014D65",               
                dataPoints: wxDataObj
            }
            ]
        });

        chart.render();
}


/*
function pwdReader(HashPassword){
    var codeseq = [6,17,5,7,16,4,8,15,3,9,14,2,10,13,1,11,12,0];
    var recoveredhash = "";
    var hashdecode = {
        "recovered": "",
        "password": ""
    } // end var hashdecode
    
    if(HashPassword.length !=18 || HashPassword===undefined) return hashdecode;
    for(var i=0; i< codeseq.length; i++) recoveredhash = recoveredhash + HashPassword.substr(codeseq[i],1);
    hashdecode.recovered = recoveredhash;
    hashdecode.password = recoveredhash.substr(2, Number(recoveredhash.substr(0,2)));
    console.log(hashdecode);
    return hashdecode;
    // = HashPassword.substr(
} // end fuction pwdReader

*/

/*
function LoginAuthentication(HashCode, Hashpwd, pwd){
    //HashCode: progid
    //Hashpwd: pwd record in user db
    //pwd: user entered password
    //var ImgCode = ImgCodeReader(系統.版本.HeaderImg);
    var recode = pwdReader(Hashpwd);
    
    var 認證 = {
        "intid": GetUid(HashCode),
        "expiry": GetExpiry(HashCode),
        "alive": false,
        "pwdOK": false,
        "passed": false,
        "remark": ""
    };
    
    //console.log(認證);
    
    if(recode.password == pwd) 認證.pwdOK = true;
    if(認證.expiry > new Date()) 認證.alive = true;
    if(認證.pwdOK && 認證.alive) 認證.passed = true;
    
    return 認證;
} //end function LoginAuthentication

*/






// ***********************