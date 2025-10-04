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


function 初始化二十八宿程式() {
    $("#div-二十八宿-登錄").html(Gen_登錄表格("登錄", "二十八宿登錄"));
	$("#div-二十八宿-生日輸入").html(Gen_生日輸入表格("查詢", "二十八宿"));
    
    $("#div-二十八宿-對應").html(Gen_二十八宿對照表格());
    var 二十八星宿矩陣 = ["角", "亢", "氐", "房", "心", "尾", "箕", "斗", "牛", "女", "虛", "危", "室", "壁", "奎", "婁", "胃", "昴", "畢", "觜", "參", "井", "鬼", "柳", "星", "張", "翼", "軫"];
    ArrayToSelect("twe-甲方星宿", 二十八星宿矩陣);
    ArrayToSelect("twe-乙方星宿", 二十八星宿矩陣);
    
    
	初始化生日輸入(false, true, false, false, false, false, false);
	$("#mp-輸入分").hide(); $("#mp-輸入分字").hide();

	系統 = new 系統參數();
    
    if(系統.用戶設定.命盤顯示.登錄口) {
        $("#div-二十八宿-生日輸入").hide();
        $("#div-二十八宿-對應分析").hide();
    } else {
        $("#div-二十八宿-登錄").hide();
        $("#div-二十八宿-生日輸入").show();
        $("#div-二十八宿-對應分析").show();
    }
    
}  // end function 初始化二十八星宿程式



$(document).on("click tap", "#btn-二十八宿登錄", function () {
    var userid = $("#dl-用戶名字").val();
    var userpwd = $("#dl-用戶密碼").val();
    //console.log(userid + " / " + userpwd);
    
    var 用戶登錄 = 用戶認證(userid, userpwd);
    //console.log(用戶登錄);
    
    if(用戶登錄.alive) {
        $("#div-二十八宿-登錄").hide();
        $("#nrxs-二十八宿-圖").hide();
        $("#div-二十八宿-生日輸入").show();
        $("#div-二十八宿-對應分析").show();
        if(用戶登錄.logo!="") 系統.logo = 用戶登錄.logo; //$("#yzj-chart-logo").attr("src", 用戶登錄.logo);
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



$(document).on("click tap", "#btn-二十八宿", function () {
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

    二十八宿命盤 = {
        "星宿": "",
        "日期": "",
        "曆法": "",
        "性別": "", 
        "本命分析": "", 
        "擇日分析": "", 
        "天文分析": "", 
        "備註": ""
    } // end var 二十八宿命盤
    
        
    // --------------------------------------------------------------
        switch(輸入曆法){
            case "西曆":
            	$("#mp-disp-western-dob").hide();
                輸入資料.西曆日期=日期值轉換(輸入資料.日期字串, 1);
                輸入資料.運算西曆 = 輸入資料.西曆日期;
                二十八宿命盤.曆法 = 二十八宿曆法(輸入資料);
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
                    二十八宿命盤.曆法 = 二十八宿曆法(輸入資料);
                } //end if valid date
                break;
            case "干支曆":
                break;
        } // end switch 輸入曆法

        //console.log(二十八宿命盤.曆法);
    
        二十八宿命盤.星宿 = 二十八宿命盤.曆法.農曆.二十八宿.星宿;
        二十八宿命盤.性別 = 輸入性別;
        二十八宿命盤.日期 = 二十八宿命盤.曆法.農曆.日期中文;
        if(二十八宿命盤.曆法.農曆.時=="夜子" || 二十八宿命盤.曆法.農曆.時=="早子") 二十八宿命盤.曆法.農曆.時="子";
        
        var 本命分析 = [];
        本命分析.push(二十八宿命盤.曆法.農曆.二十八宿.星宿 + "宿屬" + 二十八宿命盤.曆法.農曆.二十八宿.屬命 + "型，屬於" + 二十八宿命盤.曆法.農曆.二十八宿.屬性 + "。") ;
        本命分析.push(二十八宿命盤.曆法.農曆.二十八宿.簡批);
        本命分析.push(二十八宿命盤.曆法.農曆.二十八宿.一生);
        本命分析.push(二十八宿命盤.曆法.農曆.二十八宿.個性簡批);
        本命分析.push(二十八宿命盤.曆法.農曆.二十八宿.本命);
        本命分析.push(二十八宿命盤.曆法.農曆.二十八宿.性格);
        二十八宿命盤.本命分析 = 本命分析.join("<br><br>");
    
        var 擇日分析 = [];
        擇日分析.push(二十八宿命盤.曆法.農曆.二十八宿.值日詩);
        擇日分析.push("<br>" + 二十八宿命盤.曆法.農曆.二十八宿.值日詩註釋);
        擇日分析.push("<br>" + 二十八宿命盤.曆法.農曆.二十八宿.值日 + "<br>");
        擇日分析.push("宜：" + 二十八宿命盤.曆法.農曆.二十八宿.值日宜);
        擇日分析.push("忌：" + 二十八宿命盤.曆法.農曆.二十八宿.值日忌);
        二十八宿命盤.擇日分析 = 擇日分析.join("<br>");
        
        var 天文分析 = [];
        //天文分析.push(二十八宿命盤.曆法.農曆.二十八宿.星宿 + "宿為" + 二十八宿命盤.曆法.農曆.二十八宿.方位 + "方" + 二十八宿命盤.曆法.農曆.二十八宿.神獸 + "，" + 二十八宿命盤.曆法.農曆.二十八宿.動物 + "（" + 二十八宿命盤.曆法.農曆.二十八宿.拼音 + "），星座為" + 二十八宿命盤.曆法.農曆.二十八宿.星座 + "，星宮為" + 二十八宿命盤.曆法.農曆.二十八宿.星宮 + "，坐" + 二十八宿命盤.曆法.農曆.二十八宿.宮位 + "。");
        天文分析.push(二十八宿命盤.曆法.農曆.二十八宿.星宮註解);
        天文分析.push(二十八宿命盤.曆法.農曆.二十八宿.釋義);
        二十八宿命盤.天文分析 = 天文分析.join("<br><br>");
        
        var 神話分析 = [];
        神話分析.push(二十八宿命盤.曆法.農曆.二十八宿.星君 + "，" + 二十八宿命盤.曆法.農曆.二十八宿.主管 +  "，" + 二十八宿命盤.曆法.農曆.二十八宿.下管);
        二十八宿命盤.神話分析 = 神話分析.join("<br><br>");
    
        console.log(二十八宿命盤);
        
        // ******** 分析內容 **********
        $("#nrxs-二十八宿-分析").html(esp_ContentSecBlock("二十八宿分析", "twe_單元模塊", "twe_單元標題", "twe_單元內容", ["總結", "本命分析", "擇日分析", "天文參考", "神話分析"], true));
        
        $("#二十八宿分析-總結-標題").html(二十八宿命盤.日期);
        $("#二十八宿分析-總結-內容").html(二十八宿命盤.曆法.農曆.二十八宿.星宿 + "宿為" + 二十八宿命盤.曆法.農曆.二十八宿.方位 + "方" + 二十八宿命盤.曆法.農曆.二十八宿.神獸 + "，" + 二十八宿命盤.曆法.農曆.二十八宿.動物 + "（" + 二十八宿命盤.曆法.農曆.二十八宿.拼音 + "），星座為" + 二十八宿命盤.曆法.農曆.二十八宿.星座 + "，星宮為" + 二十八宿命盤.曆法.農曆.二十八宿.星宮 + "，坐" + 二十八宿命盤.曆法.農曆.二十八宿.宮位 + "。");
    
        $("#二十八宿分析-本命分析-標題").html("本命分析<br><br>");
        $("#二十八宿分析-本命分析-內容").html(二十八宿命盤.本命分析);
        
        $("#二十八宿分析-擇日分析-標題").html("擇日分析<br><br>");
        $("#二十八宿分析-擇日分析-內容").html(二十八宿命盤.擇日分析);
    
        $("#二十八宿分析-天文參考-標題").html("天文參考<br><br>");
        $("#二十八宿分析-天文參考-內容").html(二十八宿命盤.天文分析);
    
        $("#二十八宿分析-神話分析-標題").html("神祇參考<br><br>");
        $("#二十八宿分析-神話分析-內容").html(二十八宿命盤.神話分析);
}); // end click btn-二十八宿


$(document).on("click tap", "#btn-twe關係分析", function () {
    
	// *********************** read input date **********************
    var 甲方星宿 = 二十八宿含義($("#twe-甲方星宿").val());
    var 乙方星宿 = $("#twe-乙方星宿").val();
    
    var 關係註解 = 二十八宿對應關係註解(甲方星宿, 乙方星宿);
    
    $("#nrxs-二十八宿-對應").html(關係註解.對應關係詞 + "<br>" + 關係註解.對應關係註解);

}); // end click btn-twe關係分析

               
function 二十八宿曆法(輸入資料){
    var 輸入生日 = new 日期格式(輸入資料.西曆日期);
    //console.log(輸入生日);
    var 干支曆 = 西曆轉換干支曆(輸入資料); //西曆轉換干支曆(輸入資料.西曆日期, 輸入資料.城市, 輸入資料.夜子時, 輸入資料.節氣用區域時間, 輸入資料.節氣用真太陽時, false, false);
    var 農曆 = 西曆轉換農曆(輸入資料.西曆日期, 輸入資料.城市, 輸入資料.夜子時, false, false, false, false, true);
	
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
}  // end function 二十八宿曆法



function Gen_二十八宿對照表格(){
    var 表格輸入 = [];
    
    表格輸入.push('<div class="container" id="二十八宿對照表格欄" style="height: auto; width: 500px; margin-top: 20px; margin-left: 2px;">');
    表格輸入.push('<div class="jumbotron" style="width: 440px; padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;">');
    表格輸入.push('<div class="row">');
    表格輸入.push('<div id="nrxs-二十八星宿對照" class="twe_星宿名稱"><select id="twe-甲方星宿" ></select>&nbsp;宿 對應：<select id="twe-乙方星宿"></select> 宿</div>');

    表格輸入.push('<div class="row">');
    表格輸入.push('<div class="col-md-12" style="height: auto; weight: auto; padding-top: 8px; padding-bottom: 8px;">');
    表格輸入.push('<div class="pull-right" style="padding-top: 8px; padding-bottom: 8px; padding-right: 200px;">');
    表格輸入.push('<button id="btn-twe關係分析' + '" class="btn btn-primary">分析</button>');
    表格輸入.push('</div>');
    //表格輸入.push('</div>');
    表格輸入.push('</div>');  // end of button row

    表格輸入.push('</div>'); //end of input jumbotron
    表格輸入.push('</div>'); // end of input container
    
    return 表格輸入.join("");
} // function Gen_二十八宿對照表格


// -----------------------------------
// 	           內 容 編 輯
// -----------------------------------
function esp_ContentSecBlock(ContentName, SectionCSS, SubjectCSS, ContentCSS, SectionName_Arry, RowSpace){
	MainContentSec = [];
    // SectionName: Text array contains the name of each section, such as ["Section1", "Section2", "Section2"]
    // RowSpace: True/False, whether to have row spacing between section
    
    var SectionCount = SectionName_Arry.length;
    if (SectionName_Arry === undefined) SectionCount = 0;
    if (RowSpace === undefined) RowSpace = true;
    //var ContentClass
    
    //MainContentSec.push('<div class="container ' + ContentCSS +'">');
    for(var i=0; i < SectionCount; i++){
        var SectionTitle = SectionName_Arry[i];
        
        MainContentSec.push(esp_subContentDiv(ContentName, SectionCSS, SubjectCSS, ContentCSS, SectionTitle));
        if(RowSpace) MainContentSec.push('<div class="row"></div><br>');
    } // end for
    
    //MainContentSec.push('</div>');
	return MainContentSec.join("");
} // end function esp-ContentSecBlock


function esp_subContentDiv(ContentName, SectionClass, TitleClass, ContentClass, ContSecName){
	// ContentName: MainIDTitle, e.g. 一掌經四柱內容
	// ContSecName: subIDTitle, e.g. 年柱
	// Combined become the Id,e.g. 一掌經四柱內容-年柱
	// SectionClass: 分析單元模塊
    //"二十八宿分析", "twe_單元模塊", "twe_單元標題", "twe_單元內容", ["本命分析", "擇日分析", "天文參考"], true

	var ContentID = ContentName + "-" + ContSecName;

	var subContent = [];
	if (TitleClass === undefined) TitleClass = SectionClass;
	if (ContentClass === undefined) ContentClass = SectionClass;

	subContent.push('<div class="container ' + SectionClass +'" id="' + ContentID + '">');
		subContent.push('<div class="' + TitleClass +'" id="' + ContentID + '-標題">' + ContentID+ '</div>');
		subContent.push('<div class="' + ContentClass +'" id="' + ContentID + '-內容">' + ContentID + '</div>');
	subContent.push('</div>');
    
	return subContent.join("");
}  // end function subContentDiv


//以二十八宿星图为罡步之迹，代表旋斗历箕，蹑行二十八宿。步时念咒：“干尊熠灵，坤顺内明，二仪交泰，六合利贞。配天享地，永宁肃清。应感元皇，上衣下裳，震登艮兴，坎顺离明。巽旺兑生，虎步龙翔。天门地户，人门鬼路，卫我者谁？昊穹昱苍。今日禹步，上应魁罡。鬼神宾伏。永辟不祥，所求如愿，应时灵光，违吾令者。反受其殃。急急如律令摄”，《上清灵宝济度大成金书》卷二三）此罡步法较繁，每宿皆念若干颗星，即有若干步，步完二十八宿总计一百七十八步。