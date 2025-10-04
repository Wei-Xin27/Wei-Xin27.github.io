// init
$(function() {
	$("input[name=mp-輸入曆法]:radio").change(function () {
        var 輸入曆法=getRadioSelection(document.getElementsByName('mp-輸入曆法'));

        switch(輸入曆法){
            case "西曆":
                $("#mp-btn-disp-text").html("排盤");
                $("#mp-干支生日輸入").hide();
                $("#mp-chk-disp-輸入月-閏月").hide();
                $("#mp-數字生日輸入").show();
                break;
            case "農曆":
                $("#mp-btn-disp-text").html("排盤");
                $("#mp-干支生日輸入").hide();
                $("#mp-數字生日輸入").show();
                $("#mp-chk-disp-輸入月-閏月").show();
                break;
            case "干支曆":
                $("#mp-btn-disp-text").html("轉換西曆");
                $("#mp-干支生日輸入").show();
                $("#mp-數字生日輸入").hide();
                break;
        }  // end switch
        //alert("你選擇了" + 輸入曆法);
	});  // end of mp-輸入曆法 radio button group


});  // Doctument Global function


function 初始化一掌經程式() {
    $("#div-一掌經-登錄").html(Gen_登錄表格("登錄", "一掌經登錄"));
	$("#div-一掌經-生日輸入").html(Gen_生日輸入表格("查詢", "一掌經"));
	初始化生日輸入(false, true, false, false, false, false, false);
	$("#mp-輸入分").hide(); $("#mp-輸入分字").hide();

	系統 = new 一掌經系統參數();

    

	$("#nrxs-一掌經-命盤").html(一掌經十二宮格());

	// ********  中宮設計 ********
	$("#yzj-中宮板塊").html(CentralCourtSec());
	$("#yzj-中宮Logo").html('<img id="yzj-chart-logo" class="displayed" alt="Logo" height="100%" width="98%" src=' + 系統.logo +'>');
	$("#yzj-中宮四柱").html(CentralCourtSiZhu());

	$("#nrxs-一掌經-命盤").hide();
    $("#一掌經四柱內容-行運").hide();
    
    
    if(系統.用戶設定.命盤顯示.登錄口) {
        $("#div-一掌經-生日輸入").hide();
    } else {
        $("#div-一掌經-登錄").hide();
        $("#div-一掌經-生日輸入").show();
    }
    
}  // end function 初始化一掌經程式



$(document).on("click tap", "#btn-一掌經登錄", function () {
    var userid = $("#dl-用戶名字").val();
    var userpwd = $("#dl-用戶密碼").val();
    //console.log(userid + " / " + userpwd);
    
    var 用戶登錄 = 用戶認證(userid, userpwd);
    //console.log(用戶登錄);
    
    if(用戶登錄.alive) {
        $("#div-一掌經-登錄").hide();
        $("#nrxs-一掌經-圖").hide();
        $("#div-一掌經-生日輸入").show();
        //if(用戶登錄.logo!="") 系統.logo = 用戶登錄.logo; //$("#yzj-chart-logo").attr("src", 用戶登錄.logo);
    }  // end if
    else
    {
        var ErrMsg = "";
        if(!用戶登錄.alive) ErrMsg = "使用權過期";
        if(!用戶登錄.密碼正確) ErrMsg = "密碼錯誤";
        if(!用戶登錄.用戶正確) ErrMsg = "非法用戶";
        alert(ErrMsg);
    }
}); // end click #btn-一掌經登錄



$(document).on("click tap", "#btn-一掌經", function () {
	// *********************** read input date **********************
	    var 輸入曆法=getRadioSelection(document.getElementsByName('mp-輸入曆法'));
	    var 輸入年=$("#mp-輸入年").val();
	    var 輸入月=$("#mp-輸入月").val();
	    var 輸入日=$("#mp-輸入日").val();
	    var 輸入時=$("#mp-輸入時").val();
	    var 輸入分=$("#mp-輸入分").val();
	    var 輸入秒="00";
	    var 輸入時間;
	    var 輸入閏月=getCheckboxStatus("mp-輸入月-閏月");
	    var 輸入姓名=$("#mp-輸入姓名").val();
	    var 輸入性別=getRadioSelection(document.getElementsByName('mp-輸入性別'));
	    var 輸入城市=$("#mp-City").val();
	    var 輸入國家=城市數據(輸入城市).Country;
	    var 輸入用夜子時=getCheckboxStatus("mp-chk-夜子時");
	    var 輸入節氣用區域時間=getCheckboxStatus("mp-chk-節氣轉換區域");
	    var 輸入節氣用真太陽時=getCheckboxStatus("mp-chk-節氣轉真太陽時");

	    if(輸入時=="吉時") 輸入時間="000001"; else 輸入時間=輸入時+輸入分+輸入秒;
	    var 日期字串=輸入日+輸入月+輸入年+輸入時間;
	    

	    var 輸入資料 = {
	        "曆法": 輸入曆法,
	        "年": 輸入年,
	        "月": 輸入月,
	        "日": 輸入日,
	        "時": 輸入時,
	        "分": 輸入分,
	        "閏月": 輸入閏月,
	        "日期字串": 日期字串,
	        "西曆日期": new Date(1924,0,1,0,0,0,0),  //default set to 1924, to be change upon date conversion
	        "運算西曆": new Date(1924,0,1,0,0,0,0),  
	        "干支八字": "",  //default set to Null
	        "姓名": 輸入姓名,
	        "性別": 輸入性別,
	        "城市": 輸入城市,
	        "國家": 輸入國家,
	        "夜子時": 輸入用夜子時,
	        "節氣用區域時間": 輸入節氣用區域時間,
	        "節氣用真太陽時": 輸入節氣用真太陽時,
	    } // end 曆法輸入資料

	// ********************** end of date input *********************
    一掌經命盤 = {
        "曆法": "",
        "性別": "", 
        "四柱": new function(){
                    this.時柱 = new 四柱元件();  //時柱  //四柱
                    this.日柱 = new 四柱元件();		//日柱
                    this.月柱 = new 四柱元件();		//月柱
                    this.年柱 = new 四柱元件();		//年柱
                    this.命宮 = new 四柱元件();
                    this.總論 = [];
                    },
        "星曜": new function(){
                    this.天貴星 = new 星曜元件();
                    this.天厄星 = new 星曜元件();
                    this.天權星 = new 星曜元件();
                    this.天破星 = new 星曜元件();
                    this.天奸星 = new 星曜元件();
                    this.天文星 = new 星曜元件();
                    this.天福星 = new 星曜元件();
                    this.天驛星 = new 星曜元件();
                    this.天孤星 = new 星曜元件();
                    this.天刃星 = new 星曜元件();
                    this.天藝星 = new 星曜元件();
                    this.天壽星 = new 星曜元件();
                    },
        "地支十二宮": [],
        "十二宮註解": "",
        "行運": [],
        "行運數": -1,
        "命宮": "",
        "雜項論命": "",
        "備註": ""
    } // end var 一掌經命盤
        
    // --------------------------------------------------------------
        switch(輸入曆法){
            case "西曆":
            	$("#mp-disp-western-dob").hide();
                輸入資料.西曆日期=日期值轉換(輸入資料.日期字串, 1);
                輸入資料.運算西曆 = 輸入資料.西曆日期;
                一掌經命盤.曆法 = 一掌經曆法(輸入資料);
                break;
            case "農曆":
                var 農曆生日字串=輸入年+輸入月+輸入日+輸入時間;
                var 西曆生日=農曆轉換西曆(農曆生日字串, 輸入資料.閏月);  //不帶時辰

                if(西曆生日!=""){  //valid date !
                	$("#mp-disp-western-dob").hide();
                    西曆生日.setHours(Number(輸入時間.substr(0,2)));
                    西曆生日.setMinutes(Number(輸入時間.substr(2,2)));
                    西曆生日.setSeconds(Number(輸入時間.substr(4,2)));
                    
                    輸入資料.西曆日期=西曆生日;
                    輸入資料.運算西曆 = 輸入資料.西曆日期;
                    一掌經命盤.曆法 = 一掌經曆法(輸入資料);
                } //end if valid date
                break;
            case "干支曆":
                break;
        } // end switch 輸入曆法

        
        一掌經命盤.性別 = 輸入性別;
        if(一掌經命盤.曆法.農曆.時=="夜子" || 一掌經命盤.曆法.農曆.時=="早子") 一掌經命盤.曆法.農曆.時="子";
        
        四柱分析(一掌經命盤);
        // ××行運計算 ××
		for(var i=0; i<12; i++) 一掌經命盤.地支十二宮[i] = new 十二宮矩陣(i);

		for(var i=0; i<12; i++){
			// *** 計算十二宮位的行運參數 ***
			var 運算行運數 = i + 1; if(運算行運數 > 11) 運算行運數 = 0;
			一掌經命盤.行運[運算行運數] = new 行運矩陣(一掌經命盤, 運算行運數);

			// *** 計算十二宮位宮名 ***

			一掌經命盤.地支十二宮[地支滾動(一掌經命盤.四柱.命宮.地支數, i)].宮位 = 宮位含義資料(i).宮位;
			一掌經命盤.地支十二宮[地支滾動(一掌經命盤.四柱.命宮.地支數, i)].宮位數 = i;
		} // end for 運算行運 & 宮名


		一掌經命盤.行運數 = 行運數計算(new Date().getFullYear(), 一掌經命盤.曆法.農曆.西曆年);
        
        // *********** 雜項論命 *************
        if(系統.用戶設定.功能.雜項論命) 一掌經命盤.雜項論命 = 雜項算命主控(輸入資料.西曆日期, 輸入資料.性別);

    
        console.log(一掌經命盤);
        // ******** 刷新命盤 **********
        for(var i=0; i<12; i++) {
        	$("#yzj-dz-" + i + "-宮位").html(一掌經命盤.地支十二宮[i].宮位);
        	$("#yzj-dz-" + i + "-歲數段").html(一掌經命盤.地支十二宮[i].行運歲數);
        } // end for

        $("#yzjsizhu-時柱").html(一掌經命盤.四柱.時柱.地支);
        $("#yzjsizhu-日柱").html(一掌經命盤.四柱.日柱.地支);
        $("#yzjsizhu-月柱").html(一掌經命盤.四柱.月柱.地支);
        $("#yzjsizhu-年柱").html(一掌經命盤.四柱.年柱.地支);

        $("#yzjsizhu-時星").html(一掌經命盤.四柱.時柱.星曜.substr(0,2));
        $("#yzjsizhu-日星").html(一掌經命盤.四柱.日柱.星曜.substr(0,2));
        $("#yzjsizhu-月星").html(一掌經命盤.四柱.月柱.星曜.substr(0,2));
        $("#yzjsizhu-年星").html(一掌經命盤.四柱.年柱.星曜.substr(0,2));

        $("#nrxs-一掌經-命盤").show();

        // ******** 刷新分析內容 **********
        $("#nrxs-一掌經-四柱").html(ContentSecBlock());

        $("#一掌經四柱內容-總論-標題").html("四柱總論");
        $("#一掌經四柱內容-總論-內容").html(一掌經命盤.四柱.總論.join("<br><br>"));

        $("#一掌經四柱內容-時柱-標題").html(一掌經命盤.四柱.時柱.註解標題+"<br><br>");
        $("#一掌經四柱內容-時柱-內容").html(一掌經命盤.四柱.時柱.註解);

        $("#一掌經四柱內容-日柱-標題").html(一掌經命盤.四柱.日柱.註解標題+"<br><br>");
        $("#一掌經四柱內容-日柱-內容").html(一掌經命盤.四柱.日柱.註解);

        $("#一掌經四柱內容-月柱-標題").html(一掌經命盤.四柱.月柱.註解標題+"<br><br>");
        $("#一掌經四柱內容-月柱-內容").html(一掌經命盤.四柱.月柱.註解);

        $("#一掌經四柱內容-年柱-標題").html(一掌經命盤.四柱.年柱.註解標題+"<br><br>");
        $("#一掌經四柱內容-年柱-內容").html(一掌經命盤.四柱.年柱.註解);

        $("#一掌經四柱內容-命宮-標題").html(一掌經命盤.四柱.命宮.註解標題+"<br><br>");
        $("#一掌經四柱內容-命宮-內容").html(一掌經命盤.四柱.命宮.註解);

        $("#一掌經四柱內容-十二宮位-標題").html("十二宮位註解"+"<br><br>");
        $("#一掌經四柱內容-十二宮位-內容").html(一掌經命盤.十二宮註解);
        
        $("#一掌經四柱內容-十識-標題").html("十識"+"<br><br>");
        $("#一掌經四柱內容-十識-內容").html(一掌經命盤.十識.十識總結句 + "<br><br>" + 一掌經命盤.十識.參考文);
    
        if(系統.用戶設定.功能.雜項論命) {
            $("#一掌經四柱內容-雜項論命-標題").html("雜項論命"+"<br><br>");
            $("#一掌經四柱內容-雜項論命-內容").html(一掌經命盤.雜項論命.總結); //一掌經命盤.十二宮註解
        } // end if 
}); // end click btn-一掌經


$(document).on("click tap", ".yzjcht-歲數段", function () {
    var 地支宮位數 = $(this).attr("data-地支數");
    var 行運標題, 行運註解;
    //console.log("選擇地支宮-大限: " + 系統.運行狀態.選擇地支宮大限 + " / 地支宮位數: " + 地支宮位數);
    
    switch(true){
        case (!系統.運行狀態.行運顯示 || 系統.運行狀態.選擇地支宮大限!=地支宮位數):
            行運標題 = "第" + 一掌經命盤.地支十二宮[地支宮位數].行運數 + "運：" + 一掌經命盤.地支十二宮[地支宮位數].行運年數 + "年（" + 一掌經命盤.地支十二宮[地支宮位數].行運歲數 + "歲）";
            行運註解 = 一掌經命盤.地支十二宮[地支宮位數].行運註解;
            $("#一掌經四柱內容-行運-標題").html(行運標題+"<br><br>");
            $("#一掌經四柱內容-行運-內容").html(行運註解);

            $("#一掌經四柱內容-行運").show();
            系統.運行狀態.選擇地支宮大限 = 地支宮位數;
            系統.運行狀態.行運顯示 = true;
            break;
        case (系統.運行狀態.行運顯示 && 系統.運行狀態.選擇地支宮大限==地支宮位數):
            $("#一掌經四柱內容-行運").hide();
            系統.運行狀態.行運顯示 = false;
    }  // end switch
 
}); // end click .yzjcht-歲數段
               
               
function 一掌經曆法(輸入資料){
    var 輸入生日 = new 日期格式(輸入資料.西曆日期);
    //console.log(輸入生日);
    var 干支曆 = 西曆轉換干支曆(輸入資料); //西曆轉換干支曆(輸入資料.西曆日期, 輸入資料.城市, 輸入資料.夜子時, 輸入資料.節氣用區域時間, 輸入資料.節氣用真太陽時, false, false);
    var 農曆 = 西曆轉換農曆(輸入資料.西曆日期, 輸入資料.城市, 輸入資料.夜子時, false, false, false, false);
	
    var 曆法={
        "干支曆": 干支曆,
        "農曆": 農曆,
        "年干": 干支曆.年柱.substr(0,1),
        "日干": 干支曆.日柱.substr(0,1),
        "時干": 干支曆.時柱.substr(0,1),
        "時支": 干支曆.時柱.substr(1,1),
        "資訊": new function(){
                        this.日光節約 = 日光節約(Number(輸入資料.年), 輸入資料.國家);
                        this.備註= "-";
                    },
        "備註": ""
    }  //end object 曆法
    return 曆法;
}



// -----------------------------------
// 	           內 容 編 輯
// -----------------------------------
function ContentSecBlock(){
	MainContentSec = [];
    
    MainContentSec.push(subContentDiv("一掌經四柱內容", "行運", "yzj-分析單元模塊", "yzj-分析單元標題", "yzj-分析單元內容"));
	MainContentSec.push('<div class="row"></div><br>');
    
	MainContentSec.push(subContentDiv("一掌經四柱內容", "總論", "yzj-分析單元模塊", "yzj-分析單元標題", "yzj-分析單元內容"));
	MainContentSec.push('<div class="row"></div><br>');

	MainContentSec.push(subContentDiv("一掌經四柱內容", "年柱", "yzj-分析單元模塊", "yzj-分析單元標題", "yzj-分析單元內容"));
	MainContentSec.push('<div class="row"></div><br>');
	MainContentSec.push(subContentDiv("一掌經四柱內容", "月柱", "yzj-分析單元模塊", "yzj-分析單元標題", "yzj-分析單元內容"));
	MainContentSec.push('<div class="row"></div><br>');
	MainContentSec.push(subContentDiv("一掌經四柱內容", "日柱", "yzj-分析單元模塊", "yzj-分析單元標題", "yzj-分析單元內容"));
	MainContentSec.push('<div class="row"></div><br>');
	MainContentSec.push(subContentDiv("一掌經四柱內容", "時柱", "yzj-分析單元模塊", "yzj-分析單元標題", "yzj-分析單元內容"));
	MainContentSec.push('<div class="row"></div><br>');

	MainContentSec.push(subContentDiv("一掌經四柱內容", "命宮", "yzj-分析單元模塊", "yzj-分析單元標題", "yzj-分析單元內容"));
	MainContentSec.push('<div class="row"></div><br>');

	MainContentSec.push(subContentDiv("一掌經四柱內容", "十二宮位", "yzj-分析單元模塊", "yzj-分析單元標題", "yzj-分析單元內容"));
	MainContentSec.push('<div class="row"></div><br>');
    
    MainContentSec.push(subContentDiv("一掌經四柱內容", "十識", "yzj-分析單元模塊", "yzj-分析單元標題", "yzj-分析單元內容"));
	MainContentSec.push('<div class="row"></div><br>');
    
    MainContentSec.push(subContentDiv("一掌經四柱內容", "雜項論命", "yzj-分析單元模塊", "yzj-分析單元標題", "yzj-分析單元內容"));
    MainContentSec.push('<div class="row"></div><br>');

    
	return MainContentSec.join("");
} // end function ContentSecBlock()


function subContentDiv(contentPrefix, ContentIndex, ClassName, TitleClass, ContentClass){
	// contentPrefix: MainIDTitle, e.g. 一掌經四柱內容
	// ContentIndex: subIDTitle, e.g. 年柱
	// Combined become the Id,e.g. 一掌經四柱內容-年柱
	// ClassName: 分析單元模塊

	var ContentID = contentPrefix + "-" + ContentIndex;
	var subContent = [];
	if (TitleClass === undefined) TitleClass = ClassName;
	if (ContentClass === undefined) ContentClass = ClassName;

	subContent.push('<div class="container ' + ClassName +'" id="' + ContentID + '">');
		subContent.push('<div class="' + TitleClass +'" id="' + ContentID + '-標題"></div>');
		subContent.push('<div class="' + ContentClass +'" id="' + ContentID + '-內容"></div>');
	subContent.push('</div>');

	return subContent.join("");
}  // end function subContentDiv


// -----------------------------------
// 	           中 宮 編 輯
// -----------------------------------
function CentralCourtSec(){
	CentralCourtSec = [];
	CentralCourtSec.push('<div id="yzj-中宮Logo" class="yzjcht-中宮Logo"></div>');
	CentralCourtSec.push('<div id="yzj-中宮四柱" class="yzjcht-中宮Info"></div>');
	return CentralCourtSec.join("");
}  // end function CentralCourtSec()

function CentralCourtSiZhu(){
	CentralSiZhu = [];
	CentralSiZhu.push('<table border="1" cellpadding="1" cellspacing="1">');
	CentralSiZhu.push('<tbody>');

	CentralSiZhu.push('<tr>');
		CentralSiZhu.push('<td class="yzjsizhu-標題">果</td>');
		CentralSiZhu.push('<td class="yzjsizhu-標題">花</td>');
		CentralSiZhu.push('<td class="yzjsizhu-標題">苗</td>');
		CentralSiZhu.push('<td class="yzjsizhu-標題">根</td>');
	CentralSiZhu.push('</tr>');

	CentralSiZhu.push('<tr>');
		CentralSiZhu.push('<td class="yzjsizhu-標題">時</td>');
		CentralSiZhu.push('<td class="yzjsizhu-標題">日</td>');
		CentralSiZhu.push('<td class="yzjsizhu-標題">月</td>');
		CentralSiZhu.push('<td class="yzjsizhu-標題">年</td>');
	CentralSiZhu.push('</tr>');

	CentralSiZhu.push('<tr>');
		CentralSiZhu.push('<td id="yzjsizhu-時柱" class="yzjsizhu-地支">午</td>');
		CentralSiZhu.push('<td id="yzjsizhu-日柱" class="yzjsizhu-地支">亥</td>');
		CentralSiZhu.push('<td id="yzjsizhu-月柱" class="yzjsizhu-地支">子</td>');
		CentralSiZhu.push('<td id="yzjsizhu-年柱" class="yzjsizhu-地支">酉</td>');
	CentralSiZhu.push('</tr>');

	CentralSiZhu.push('<tr>');
		CentralSiZhu.push('<td id="yzjsizhu-時星" class="yzjsizhu-標題">天福</td>');
		CentralSiZhu.push('<td id="yzjsizhu-日星" class="yzjsizhu-標題">天壽</td>');
		CentralSiZhu.push('<td id="yzjsizhu-月星" class="yzjsizhu-標題">天貴</td>');
		CentralSiZhu.push('<td id="yzjsizhu-年星" class="yzjsizhu-標題">天刃</td>');
	CentralSiZhu.push('</tr>');

	CentralSiZhu.push('</tbody>');
	CentralSiZhu.push('</table>');

	return CentralSiZhu.join("");
}
