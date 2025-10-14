$(document).on("click tap", "#btn-八字登錄", function () {
    var userid = $("#dl-用戶名字").val();
    var userpwd = $("#dl-用戶密碼").val();
    //console.log(userid + " / " + userpwd);
    
    var 用戶登錄 = 用戶認證(userid, userpwd);
    //console.log(用戶登錄);
    
    if(用戶登錄.alive) {
        $("#div-八字-登錄").hide();
        $("#nrxs-八字-圖").hide();
        $("#ctnr-bz-生日輸入").show();
    }  // end if
    else
    {
        var ErrMsg = "";
        if(!用戶登錄.alive) ErrMsg = "使用權過期";
        if(!用戶登錄.密碼正確) ErrMsg = "密碼錯誤";
        if(!用戶登錄.用戶正確) ErrMsg = "非法用戶";
        alert(ErrMsg);
    }
}); // end click #btn-飛星斗數登錄


$(function() {
		
	// ***************************************** L i b r a r y   I n i t i a l i z a t i o n *****************************************

	// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ jQuery UI Library $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	
	//$(document).tooltip();

	// ********** Tab Navigation **********
    /*
	$("#tabbed-nav").tabs({
	    collapsible: true,
	    active: 0
	});

	$("#tabbed-nav").tabs("option", "heightStyle", "content");

	$("#tabbed-nav").css({ width: "680" });

	// ********** Tab Navigation **********
	$("#Ctrl-accordion-五行分析").accordion({
	    active: 0,
	    heightStyle: "content",
	    clearStyle: true,
	    collapsible: true
	});

	$("#Ctrl-accordion-十神分析").accordion({
	    active: 0,
	    heightStyle: "content",
	    clearStyle: true,
	    collapsible: true
	});

	// additional customization on Accordion CSS
	$(".ui-accordion-content").css("padding","2px 2px 10px 2px");  //to adjust the content of the accordion

	// ********** Dialog **********
    $("#dlg流運分析").dialog({
        autoOpen: false,
        //modal: true,
        closeOnEscate: true,
        width: 700,
        buttons: [
            {
                text: "OK",
                click: function () {
                    $(this).dialog("close");
                }
            },
            {
                text: "全選",
                click: function () {
                    $(this).selectText();
                }
            }
        ]
    });

	// ########################## Bootstrap 3 ##########################
	$('[data-toggle="tooltip"]').tooltip();
	/*
    $(".btn-五行速查").click(function(){
        $(".collapse").collapse('toggle');
    });
	*/

	// ***************************** P r o g r a m   I n i t i a l i z a t i o n *****************************
    
    

    // ***************************** I n p u t  C o n t r o l *****************************

    $("input[name=mp-bz-輸入曆法]:radio").change(function () {
    	// 曆 法 選 擇 的 show / hide
        var 輸入曆法=getRadioSelection(document.getElementsByName('mp-bz-輸入曆法'));

        switch(輸入曆法){
            case "西曆":
                $("#mp-bz-btn-disp-text").html("八字排盤");
                $("#mp-bz-干支生日輸入").hide();
                $("#mp-bz-chk-disp-輸入月-閏月").hide();
                $("#mp-bz-數字生日輸入").show();
                break;
            case "農曆":
                $("#mp-bz-btn-disp-text").html("八字排盤");
                $("#mp-bz-干支生日輸入").hide();
                $("#mp-bz-數字生日輸入").show();
                $("#mp-bz-chk-disp-輸入月-閏月").show();
                break;
            case "干支曆":
                $("#mp-bz-btn-disp-text").html("轉換西曆");
                $("#mp-bz-干支生日輸入").show();
                $("#mp-bz-數字生日輸入").hide();
                break;
        }  // end switch
        //alert("你選擇了" + 輸入曆法);
    });  // end of mp-bz-輸入曆法 radio button group

	$('input:checkbox').change(function () {
            var 顯示選項 = $(this).val();
            var checked = this.checked;

            switch(顯示選項){
            	case "運星":
            		if(checked) $(".bzb-運星行").show(); else $(".bzb-運星行").hide();
            		break;
            	case "納音":
            		if(checked) $(".bzb-納音行").show(); else $(".bzb-納音行").hide();
            		break;
            	case "神煞":
            		if(checked) $(".bzb-神煞行").show(); else $(".bzb-神煞行").hide();
            		break;
            	case "小運":
            		if(checked) $(".bzb-小運行").show(); else $(".bzb-小運行").hide();
            		break;
            	case "流月":
            		if(checked) $(".bzb-流月行").show(); else $(".bzb-流月行").hide();
            		break;
            } //end switch
            //console.log( 顯示選項 + " check? " + check);
    });


	$(document).on("change", "#mp-bz-干支轉西曆日期", function () {
	    //Once change happen in mp-bz-干支轉西曆日期, load its value input DoB input boxes
	    var DateStr=$("#mp-bz-干支轉西曆日期").val();

	    $("#mp-bz-輸入年").val(DateStr.substr(0,4));
	    $("#mp-bz-輸入月").val(DateStr.substr(4,2));
	    $("#mp-bz-輸入日").val(DateStr.substr(6,2));
	    $("#mp-bz-輸入時").val(DateStr.substr(8,2));
	    $("#mp-bz-輸入分").val("00");
	});  //end of change of #mp-bz-干支轉西曆日期


    $(document).on("change", "#mp-bz-命盤格式", function () {
        var ChartType = Number($("#mp-bz-命盤格式").val());
        switch(ChartType){
            case 0: case 2:
                $("#mp-bz-chk-disp-命盤顯示選項").show();
                break;
             case 1: case 5:
                $("#mp-bz-chk-disp-命盤顯示選項").hide();
                break; 
        } // end switch
    });  //end of change of #mp-bz-命盤格式


    $('#DivRotQuote').quoteRotator();

});  //end of system Global control function !!



$(document).on("click tap", "#btn-bz-排八字", function () {
    var 輸入曆法=getRadioSelection(document.getElementsByName('mp-bz-輸入曆法'));
    var 輸入年=$("#mp-bz-輸入年").val();
    var 輸入月=$("#mp-bz-輸入月").val();
    var 輸入日=$("#mp-bz-輸入日").val();
    var 輸入時=$("#mp-bz-輸入時").val();
    var 輸入分=$("#mp-bz-輸入分").val();
    var 輸入秒="00";
    var 輸入時間;
    var 輸入閏月=getCheckboxStatus("mp-bz-輸入月-閏月");
    var 輸入姓名=$("#mp-bz-輸入姓名").val();
    var 輸入性別=getRadioSelection(document.getElementsByName('mp-bz-輸入性別'));
    var 輸入城市=$("#mp-bz-City").val();
    var 輸入國家=城市數據(輸入城市).Country;
    //var 輸入象論盤=getCheckboxStatus("mp-bz-chk-象論");
    var 輸入用夜子時=getCheckboxStatus("mp-bz-chk-夜子時");
    var 輸入節氣用區域時間=getCheckboxStatus("mp-bz-chk-節氣轉換區域");
    var 輸入節氣用軌道太陽時=getCheckboxStatus("mp-bz-chk-節氣轉真太陽時");
    var 輸入八字盤格式 = Number($("#mp-bz-命盤格式").val());
    if(輸入時=="吉時") 輸入時間="000001"; else 輸入時間=輸入時+輸入分+輸入秒;

    var 日期字串;

    switch(輸入曆法){
        case "西曆":
            $("#mp-bz-disp-western-dob").hide();
            系統.設定.運行狀態.已輸入命盤=true;
            日期字串=輸入日+輸入月+輸入年+輸入時間;
            break;
        case "農曆":
            var 農曆生日字串=輸入年+輸入月+輸入日+輸入時間;
            var 西曆生日=農曆轉換西曆(農曆生日字串, 輸入閏月);  //不帶時辰

            if(西曆生日!=""){  //valid date !
                西曆生日.setHours(Number(輸入時間.substr(0,2)));
                西曆生日.setMinutes(Number(輸入時間.substr(2,2)));
                西曆生日.setSeconds(Number(輸入時間.substr(4,2)));

                $("input:radio[name=mp-bz-輸入曆法][value = 西曆]").trigger('click');  // trigger radio button to 西曆
                $("#mp-bz-輸入年").val(西曆生日.getFullYear());
                $("#mp-bz-輸入月").val(zeroPad(西曆生日.getMonth()+1,2));
                $("#mp-bz-輸入日").val(zeroPad(西曆生日.getDate(),2));
                
                輸入年=$("#mp-bz-輸入年").val();
                輸入月=$("#mp-bz-輸入月").val();
                輸入日=$("#mp-bz-輸入日").val();
                日期字串=輸入日+輸入月+輸入年+輸入時間;
                //$("#btn-bz-排八字").click();
            } //end if valid date
            break;

        case "干支曆":
            //輸入資料.干支八字=$("#mp-bz-輸入年干").val()+$("#mp-bz-輸入年支").val()+$("#mp-bz-輸入月干").val()+$("#mp-bz-輸入月支").val()+$("#mp-bz-輸入日干").val()+$("#mp-bz-輸入日支").val()+$("#mp-bz-輸入時干").val()+$("#mp-bz-輸入時支").val();
            輸入干支八字=$("#mp-bz-輸入年干").val()+$("#mp-bz-輸入年支").val()+$("#mp-bz-輸入月干").val()+$("#mp-bz-輸入月支").val()+$("#mp-bz-輸入日干").val()+$("#mp-bz-輸入日支").val()+$("#mp-bz-輸入時干").val()+$("#mp-bz-輸入時支").val();
            var 符合八字的西曆矩陣 = 干支曆轉換西曆(輸入干支八字, 輸入城市);
            //console.log(符合八字的西曆矩陣);
            if(符合八字的西曆矩陣.length>0) {  //有搜尋到相關的西曆生日
                var eleWesternDoB = document.getElementById("mp-bz-干支轉西曆日期");
                removeHTMLTagOptions(eleWesternDoB);  //clear the select box 1st
                for(var i=0; i<符合八字的西曆矩陣.length; i++){
                    // 填寫搜尋到的西曆進去select
                    var opt = document.createElement('option');
                    opt.innerHTML = 符合八字的西曆矩陣[i].西曆中文.substr(0, 符合八字的西曆矩陣[i].西曆中文.length-2);
                    opt.value = 符合八字的西曆矩陣[i].年 + zeroPad(符合八字的西曆矩陣[i].月,2) + zeroPad(符合八字的西曆矩陣[i].日,2) + 符合八字的西曆矩陣[i].時;
                    eleWesternDoB.appendChild(opt);
                } // end for
                document.getElementById("mp-bz-干支轉西曆日期").selectedIndex = 符合八字的西曆矩陣.length-1;  // default select to the last date
                $("#mp-bz-干支轉西曆日期").trigger("change"); //trigger change to load the value into date input box
                $("#mp-bz-disp-western-dob").show();
            } // end if
            break;
    } // end switch 輸入曆法

    // ************* 排列八字、提示、參考、數據分析 。。。。。 ************************

    if(系統.設定.運行狀態.已輸入命盤) {

    // ********** 建立輸入資料 **********

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
            "運算西曆": new Date(1924,0,1,0,0,0,0),  //default set to 1924, to be change upon date conversion
            "干支八字": "",  //default set to Null
            "姓名": 輸入姓名,
            "性別": 輸入性別,
            "城市": 輸入城市,
            "國家": 輸入國家,
            "夜子時": 輸入用夜子時,
            "夜子時調整": false,  //日期是否因為夜子時而調整過
            "節氣用區域時間": 輸入節氣用區域時間,
            "節氣用軌道太陽時": 輸入節氣用軌道太陽時,
            "生日用軌道太陽時": false,  //預設生日不能調成真太陽時
            "軌道太陽時調整": 0,
            "吉時": (輸入時=="吉時") ? true : false,
            "象論盤": false, //default
            "道家命格": 系統.設定.用戶設定.輸入預設.道家命格, // default 道家的命格計算 系統.設定
            "八字盤格式": 輸入八字盤格式 //default
        } // end 輸入資料


        輸入資料.西曆日期=日期值轉換(輸入資料.日期字串, 1);

        // ******* 八字盤格式 ********
        系統.設定.用戶設定.輸入顯示.八字盤格式 = 輸入八字盤格式;
        switch(輸入八字盤格式){
            case 2:
               輸入資料.象論盤 = true;
               break;
        }  //end switch

        //********* 調整輸入日期為運算日期 *********
        if(輸入資料.生日用軌道太陽時 && 輸入資料.吉時==false) {  //吉時不調整真太陽時
            輸入資料.軌道太陽時調整=真太陽時調整(輸入資料.西曆日期, "時差");
            輸入資料.運算西曆=真太陽時調整(輸入資料.西曆日期, "調整日期");
        } else {
            輸入資料.軌道太陽時調整=0;
            輸入資料.運算西曆 = new Date(輸入資料.西曆日期); 
        }  //end else

        // ** 用運算西曆，再看不用夜子時是否要調整到下一天 **
        var 運算西曆時間 = 輸入資料.運算西曆.getHours();
        if(運算西曆時間==23 && 輸入資料.夜子時==false) {  //沒有夜子時，用下一天
            輸入資料.運算西曆.setDate(輸入資料.運算西曆.getDate()+1);
            輸入資料.運算西曆.setHours(0); 輸入資料.運算西曆.setMinutes(0); 輸入資料.運算西曆.setSeconds(0);
            輸入資料.夜子時調整=true;
        } //end if 夜子時



    // ********** 命盤建立 **********

        八字命盤 = new 八字命盤架構(輸入資料, 系統);  // 計算八字架構
        排列八字圖表(八字命盤); // 排列標準八字盤

        // *********** 八字數據分析 ************
        命盤基本數據分析(八字命盤);

        導入命盤提示(八字命盤);
        性格論斷函式(八字命盤); //判斷個性

        $("#btn-經典參考").show();
        $("#ref-經典參考").html(經典參考函式(八字命盤, "PanelGroup"));
        $("#DivRotQuote").hide();

        if(系統.設定.用戶設定.App.五行速查) $("#btn-五行速查").show();
        $("#btn-天干喜忌").show();
		if(系統.設定.用戶設定.App.四柱宮位) $("#btn-四柱宮位").show();
		if(系統.設定.用戶設定.App.天干速查) $("#btn-天干速查").show();
		if(系統.設定.用戶設定.App.地支速查) $("#btn-地支速查").show();
        if(系統.設定.用戶設定.App.精簡萬年曆) $("#btn-精簡萬年曆").show();
        if(系統.設定.用戶設定.App.十神格速查) $("#btn-十神格個性").show();
		if(系統.設定.用戶設定.App.神煞速查) $("#btn-神煞速查").show();
    } // end if
});  //end of click #btn-bz-排八字


function 八字命盤顏色刷新(命盤){
    // ********************* 轉換字體五行顏色 *********************
    for (var i = 0; i < $(".mpxs-本命八字干支").length; i++) {
        var 干支字 = $(".mpxs-本命八字干支").eq(i).html();
		var 干支五行=干支字.substr(0,1); //取第一個字
        $(".mpxs-本命八字干支").eq(i).removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
        var 五行顏色 = 干支五行字體顏色(干支五行,"CSS");
        $(".mpxs-本命八字干支").eq(i).addClass(五行顏色);
    } //end for 本命八字干支

    for (var i = 0; i <= $(".mpxs-本命十神").length; i++) {
        var 十神星 = $(".mpxs-本命十神").eq(i).html();
        var 十神五行字 = 十神五行(命盤.日干.天干, 十神星);
        $(".mpxs-本命十神").eq(i).removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
        var 五行顏色 = 干支五行字體顏色(十神五行字,"CSS");
        $(".mpxs-本命十神").eq(i).addClass(五行顏色);
    } //end for 本命十神
	
	
	// ************ 纳音颜色 ************
    if(系統.設定.用戶設定.命盤顯示.納音){
        for (var i = 0; i < $(".mpxs-本命纳音").length; i++) {
            var 納音 = $(".mpxs-本命纳音").eq(i).html();
            var 納音五行 = 納音.substr(2,1);
            $(".mpxs-本命纳音").eq(i).removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
            var 五行顏色 = 干支五行字體顏色(納音五行,"CSS");
            $(".mpxs-本命纳音").eq(i).addClass(五行顏色);
        } //end for 纳音颜色
    } //end if 納音顯示
} //end 刷新命盤顏色


$(document).on("click touchstart", ".大運干支格", function () {
	$('.大運干支格').css('background', '');
	$(this).css('background', 'yellow');

	// ******** 導入 大運干支起歲 ********
	var 大運數 = $(this).attr("data-大運數");
	八字命盤.運行.大運數 = 大運數;

    $("#mpxs-大運歲數").html(八字命盤.大運[大運數].歲數間距);

	var 大運干 = 八字命盤.大運[大運數].干支.substr(0, 1);
	$("#mpxs-大運干").html(大運干);
	var 大運支 = 八字命盤.大運[大運數].干支.substr(1, 1);
	$("#mpxs-大運支").html(大運支);

	$("#mpxs-大運十神").html(八字命盤.大運[大運數].天干十神);
	$("#mpxs-大運藏干1").html(八字命盤.大運[大運數].藏干1 + " " + 八字命盤.大運[大運數].地支十神1 + "<br>");
	$("#mpxs-大運藏干2").html(八字命盤.大運[大運數].藏干2 + " " + 八字命盤.大運[大運數].地支十神2 + "<br>");
	$("#mpxs-大運藏干3").html(八字命盤.大運[大運數].藏干3 + " " + 八字命盤.大運[大運數].地支十神3);

    if(系統.設定.用戶設定.命盤顯示.運星) $("#mpxs-大運運星").html(八字命盤.大運[大運數].運星);
    if(系統.設定.用戶設定.命盤顯示.納音) $("#mpxs-大運納音").html(八字命盤.大運[大運數].納音);

	// ************** update 運行的參數 & 註解 *************

	//八字命盤.分析.行運註解.大運 = 行運分析模塊(八字命盤, "大運");
	//$("#大運註解").html(八字命盤.分析.行運註解.大運);


	// ************** update 流年block ***********
	for (var j = 0; j <= 9; j++) {
	    $("#mpxs-流年" + j + "干支").html(VerticalString(八字命盤.大運[八字命盤.運行.大運數].流年[j].干支, "流年干支字"));
	    $("#mpxs-流年" + j + "歲數").html(八字命盤.大運[八字命盤.運行.大運數].流年[j].歲數);
	    $("#mpxs-流年" + j + "年份").html(八字命盤.大運[八字命盤.運行.大運數].流年[j].年份);
        if(系統.設定.用戶設定.命盤顯示.小運) $("#mpxs-小運" + j + "干支").html(八字命盤.大運[八字命盤.運行.大運數].流年[j].小運);

	    //var 流年十神Tooltip = "天干: " + 八字命盤.大運[八字命盤.運行.大運數].流年[j].天干十神 + ", 藏干: " + 八字命盤.大運[八字命盤.運行.大運數].流年[j].地支十神1 + " " + 八字命盤.大運[八字命盤.運行.大運數].流年[j].地支十神2 + " " + 八字命盤.大運[八字命盤.運行.大運數].流年[j].地支十神3;
	    //$("#mpxs-流年" + j + "干支").prop('title', 流年十神Tooltip);
	    //var elementTitle = $('#yourElementId').prop('title'); //to retrieve the title
	}

	// ************** 按大運後，除掉所有流年資料 ******************
	$('.流年干支格子').css('background', '');

    $("#mpxs-流年歲數").html("");
	$("#mpxs-流年干").html("");
	$("#mpxs-流年支").html("");
	$("#mpxs-流年藏干1").html("");
	$("#mpxs-流年藏干2").html("");
	$("#mpxs-流年藏干3").html("");
	$("#mpxs-流年十神").html("");

    $("#mpxs-流年納音").html("");
    $("#mpxs-流年神煞").html("");
	
    
    $("#mpxs-流年運星").html("");
    $("#mpxs-當選流年年份").html("");
    
	$("#流年註解").html(""); //清除流年註解

	八字命盤.運行.大運流年數 = "";
	八字命盤.運行.流年年份 = "";
	八字命盤.分析.行運註解.流年 = "";

	// ************** update 大運干支，藏干顏色 **************
	$("#mpxs-大運干").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運干").addClass(干支五行字體顏色($("#mpxs-大運干").html(),"CSS"));
	$("#mpxs-大運支").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運支").addClass(干支五行字體顏色($("#mpxs-大運支").html(),"CSS"));

	$("#mpxs-大運十神").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運十神").addClass(干支五行字體顏色(十神五行(八字命盤.日干.天干, $("#mpxs-大運十神").html()),"CSS"));
	
	var 大運藏干五行1=($("#mpxs-大運藏干1").html()).substr(0,1);
	var 大運藏干五行2=($("#mpxs-大運藏干2").html()).substr(0,1);
	var 大運藏干五行3=($("#mpxs-大運藏干3").html()).substr(0,1);
	
	$("#mpxs-大運藏干1").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運藏干1").addClass(干支五行字體顏色(大運藏干五行1,"CSS"));
	$("#mpxs-大運藏干2").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運藏干2").addClass(干支五行字體顏色(大運藏干五行2,"CSS"));
	$("#mpxs-大運藏干3").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運藏干3").addClass(干支五行字體顏色(大運藏干五行3,"CSS"));

    if(系統.設定.用戶設定.命盤顯示.納音){
    	$("#mpxs-大運納音").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    	$("#mpxs-大運納音").addClass(干支五行字體顏色($("#mpxs-大運納音").html().substr(2,1),"CSS"));
	}
    if(系統.設定.用戶設定.命盤顯示.神煞) $("#mpxs-大運神煞").html(單柱神煞(八字命盤, 八字命盤.大運[大運數].干支).join("<br>"));

	// ************** 清除流月數據 ***********
	$('.流月干支格子').css('background', '');
	八字命盤.運行.流月數 = "";
	八字命盤.運行.流月份 = "";
	$("#流月註解").html(""); //清除流年註解
	系統.設定.運行狀態.已有流月 = false; // turn off 流月

	for (var i = 0; i <= 11; i++) {
	    $("#mpxs-流月" + i + "干支").html("-");
	    //$("#mpxs-流月" + i + "干支").prop('title', "");
	} //end for 流月
});  // end 大運格子 on click


$(document).on("click touchstart", ".流年干支格子", function () {
    $('.流年干支格子').css('background', '#FAFAFA');
    $(this).css('background', 'yellow');

    // ******** 導入 流年干支起歲 ********
    var 流年數 = $(this).attr("data-流年數");
    var 流年干 = 八字命盤.大運[八字命盤.運行.大運數].流年[流年數].干支.substr(0, 1);
    $("#mpxs-流年干").html(流年干);
    var 流年支 = 八字命盤.大運[八字命盤.運行.大運數].流年[流年數].干支.substr(1, 1);
    $("#mpxs-流年支").html(流年支);

	$("#mpxs-流年十神").html(八字命盤.大運[八字命盤.運行.大運數].流年[流年數].天干十神);
    $("#mpxs-流年藏干1").html(八字命盤.大運[八字命盤.運行.大運數].流年[流年數].藏干1 + " " + 八字命盤.大運[八字命盤.運行.大運數].流年[流年數].地支十神1 + "<br>");
    $("#mpxs-流年藏干2").html(八字命盤.大運[八字命盤.運行.大運數].流年[流年數].藏干2 + " " + 八字命盤.大運[八字命盤.運行.大運數].流年[流年數].地支十神2 + "<br>");
    $("#mpxs-流年藏干3").html(八字命盤.大運[八字命盤.運行.大運數].流年[流年數].藏干3 + " " + 八字命盤.大運[八字命盤.運行.大運數].流年[流年數].地支十神3);

	$("#mpxs-流年歲數").html(八字命盤.大運[八字命盤.運行.大運數].流年[流年數].年份 + "/" + 八字命盤.大運[八字命盤.運行.大運數].流年[流年數].歲數);
    if(系統.設定.用戶設定.命盤顯示.運星) $("#mpxs-流年運星").html(八字命盤.大運[八字命盤.運行.大運數].流年[流年數].運星);
    if(系統.設定.用戶設定.命盤顯示.納音) $("#mpxs-流年納音").html(八字命盤.大運[八字命盤.運行.大運數].流年[流年數].納音);
    if(系統.設定.用戶設定.命盤顯示.神煞)  $("#mpxs-流年神煞").html(單柱神煞(八字命盤, 八字命盤.大運[八字命盤.運行.大運數].流年[流年數].干支, "流年").join("<br>"));

    八字命盤.運行.大運流年數 = 流年數;
    八字命盤.運行.流年年份 = 八字命盤.大運[八字命盤.運行.大運數].流年[流年數].年份;
    八字命盤.運行.歲數 = Number(Number(八字命盤.運行.流年年份) - Number(八字命盤.生日.西曆年) + 1);

    系統.設定.運行狀態.已有流月=true;
    //八字命盤.分析.行運註解.流月用 = 1; // turn on 流月

    //八字命盤.分析.行運註解.流年 = 行運分析模塊(八字命盤, "流年");
    //$("#流年註解").html(八字命盤.分析.行運註解.流年);
    //$("#流月註解").html(""); // 若轉換流年，刪除流月註解

    // ************** 更新 八字命盤數據、 流月干支 ***********
    八字命盤.運行.流年年份 = 八字命盤.大運[八字命盤.運行.大運數].流年[流年數].年份;
    for (var i = 0; i <= 11; i++) {
        八字命盤.流月[i] = new 流月模塊(八字命盤.運行.流年年份, 八字命盤.日干.天干, i);
    }

    // ************** update 流年干支，藏干顏色 **************

    $("#mpxs-流年干").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年干").addClass(干支五行字體顏色($("#mpxs-流年干").html(),"CSS"));
    $("#mpxs-流年支").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年支").addClass(干支五行字體顏色($("#mpxs-流年支").html(),"CSS"));

	$("#mpxs-流年十神").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年十神").addClass(干支五行字體顏色(十神五行(八字命盤.日干.天干, $("#mpxs-流年十神").html()),"CSS"));
	
	var 流年藏干五行1=($("#mpxs-流年藏干1").html()).substr(0,1);
	var 流年藏干五行2=($("#mpxs-流年藏干2").html()).substr(0,1);
	var 流年藏干五行3=($("#mpxs-流年藏干3").html()).substr(0,1);
    $("#mpxs-流年藏干1").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年藏干1").addClass(干支五行字體顏色(流年藏干五行1,"CSS"));
    $("#mpxs-流年藏干2").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年藏干2").addClass(干支五行字體顏色(流年藏干五行2,"CSS"));
    $("#mpxs-流年藏干3").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年藏干3").addClass(干支五行字體顏色(流年藏干五行3,"CSS"));

    if(系統.設定.用戶設定.命盤顯示.納音){
    	$("#mpxs-流年納音").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    	$("#mpxs-流年納音").addClass(干支五行字體顏色($("#mpxs-流年納音").html().substr(2,1),"CSS"));
    }

    // ****** clear the 流月 selection ******
    $('.流月干支格子').css('background', '');
    八字命盤.運行.流月數 = "";
    八字命盤.運行.流月份 = "";

    // ************** 刷新八字命盤上流月的顯示 ***********
    for (var j = 0; j <= 11; j++) {
        $("#mpxs-流月" + j + "干支").html(VerticalString(八字命盤.流月[j].干支, "流月干支字"));
        //var 流月十神Tooltip = "天干: " + 八字命盤.流月[j].天干十神 + ", 藏干: " + 八字命盤.流月[j].地支十神1 + " " + 八字命盤.流月[j].地支十神2 + " " + 八字命盤.流月[j].地支十神3;
        //$("#mpxs-流月" + j + "干支").prop('title', 流月十神Tooltip);
    } //end for 流月

    // ********************* App *********************
    /*
    var 西曆流年=八字命盤.運行.流年年份;
    var 流年干支= 六十干支屬性((西曆流年 - 1923)%60, "干支");
    var 流年虛歲=西曆流年-八字命盤.生日.農曆年+1;
    var 太歲名字=六十干支屬性((西曆流年 - 1923)%60, "太歲");
    var 流年標題='<span class = "論斷單元">流年十二神煞</span>';
    var 八字命盤資料='<span class = "經典標題">流年：' + 西曆流年 + '（' + 流年干支 + '），太歲：' +太歲名字+ '，虛歲：' + 流年虛歲 + '</span>';
    
    流年神煞矩陣=[];
    流年神煞矩陣.push(流年標題);
    流年神煞矩陣.push(八字命盤資料);
    流年神煞矩陣.push(命宮流年神煞判斷(八字命盤.命宮, 西曆流年));
    流年神煞矩陣.push(流年十二神煞判斷(八字命盤.生日.農曆年, 八字命盤.生日.農曆月, 八字命盤.生日.農曆日, 八字命盤.生日.農曆時, 西曆流年, 2));
    
    //流年十二神煞論斷=流年十二神煞(this.生日.農曆年, this.生日.農曆月, this.生日.農曆日, this.生日.農曆時, 2016, 2);
    //命宮流年神煞論斷=命宮流年神煞判斷(this.命宮, 2016);
    
    $("#App-流年神煞").html(流年神煞矩陣.join("<br><br>"));
    */
});  // end 流年格子 on click


// *************** 排列八字命盤到八字圖標 ***************************

function 排列八字圖表(命盤) {
    console.log(命盤);
    笔记(命盤);

    switch(命盤.輸入資料.八字盤格式){
        case 0: case 2:
            $("#BaziChart").html(建立八字表格());
            break;
        case 1:
            $("#BaziChart").html(八字基本盤表格());
            break
        case 5:
            $("#BaziChart").html(八字英文盤表格());
            break
    }  //end switch
    
    var 生日資訊=[];
    if(命盤.輸入資料.姓名 != "") 生日資訊.push(命盤.輸入資料.姓名);
    生日資訊.push(命盤.陽男陰女);
    生日資訊.push(命盤.生日.虛歲 + "歲");
    生日資訊.push("肖"+命盤.生日.生肖);
    生日資訊.push(命盤.生日.星座);
    生日資訊.push(命盤.輸入資料.城市);
    $("#mpxs-生日資訊").html(生日資訊.join("，"));

    $("#mpxs-西曆生日").html(命盤.生日.西曆中文);
    $("#mpxs-農曆生日").html(命盤.生日.農曆);

    var 生日備註=[];
    生日備註.push(命盤.生日.節氣);
    if(命盤.曆法.資訊.日光節約 != "") 生日備註.push("日光節約");
    if(命盤.曆法.資訊.交節日 != "") 生日備註.push("交節日");
    if(命盤.曆法.農曆.閏年) 生日備註.push("閏年");
    if(命盤.曆法.農曆.該年閏月>0) 生日備註.push("閏" + 命盤.曆法.農曆.該年閏月 + "月");
    $("#mpxs-資訊備註").html(生日備註.join("，"));

    var 橫幅附加="";
    系統.設定.用戶設定.四柱歲數.年柱="1-16"; 系統.設定.用戶設定.四柱歲數.月柱="17-32"; 系統.設定.用戶設定.四柱歲數.日柱="33-48"; 系統.設定.用戶設定.四柱歲數.時柱="49-64"; 
    if(命盤.輸入資料.象論盤) {
        橫幅附加=" * ";
        系統.設定.用戶設定.四柱歲數.年柱="1-15"; 系統.設定.用戶設定.四柱歲數.月柱="16-30"; 系統.設定.用戶設定.四柱歲數.日柱="31-45"; 系統.設定.用戶設定.四柱歲數.時柱="45-60"; 
    }
    $("#橫幅名稱").html(橫幅附加 + 系統.版本.平台標題 + 橫幅附加);

    // *********** 導入 四柱歲數 範圍 ***********
    $("#mpxs-時柱歲數").html(系統.設定.用戶設定.四柱歲數.時柱);
    $("#mpxs-日柱歲數").html(系統.設定.用戶設定.四柱歲數.日柱);
    $("#mpxs-月柱歲數").html(系統.設定.用戶設定.四柱歲數.月柱);
    $("#mpxs-年柱歲數").html(系統.設定.用戶設定.四柱歲數.年柱);


    // *********** 導入 日主元男、元女 ***********
    $("#mpxs-日元").html((命盤.陽男陰女.substr(1,1) == "男") ? "元男" : "元女");


    // *********** 導入 八字干支、藏干 ***********
    $("#mpxs-年干").html(命盤.年干.天干);
    $("#mpxs-年支").html(命盤.年支.地支);

    $("#mpxs-月干").html(命盤.月干.天干);
    $("#mpxs-月支").html(命盤.月支.地支);

    $("#mpxs-日干").html(命盤.日干.天干);
    $("#mpxs-日支").html(命盤.日支.地支);

    $("#mpxs-時干").html(命盤.時干.天干);
    $("#mpxs-時支").html(命盤.時支.地支);
    
    $("#mpxs-年支藏干1").html(命盤.年支.藏干1 + " " + 命盤.年支.十神1 + "<br>");
    $("#mpxs-年支藏干2").html(命盤.年支.藏干2 + " " + 命盤.年支.十神2 + "<br>");
    $("#mpxs-年支藏干3").html(命盤.年支.藏干3 + " " + 命盤.年支.十神3);
    
    $("#mpxs-月支藏干1").html(命盤.月支.藏干1 + " " + 命盤.月支.十神1 + "<br>");
    $("#mpxs-月支藏干2").html(命盤.月支.藏干2 + " " + 命盤.月支.十神2 + "<br>");
    $("#mpxs-月支藏干3").html(命盤.月支.藏干3 + " " + 命盤.月支.十神3);

    $("#mpxs-日支藏干1").html(命盤.日支.藏干1 + " " + 命盤.日支.十神1 + "<br>");
    $("#mpxs-日支藏干2").html(命盤.日支.藏干2 + " " + 命盤.日支.十神2 + "<br>");
    $("#mpxs-日支藏干3").html(命盤.日支.藏干3 + " " + 命盤.日支.十神3);

    $("#mpxs-時支藏干1").html(命盤.時支.藏干1 + " " + 命盤.時支.十神1 + "<br>");
    $("#mpxs-時支藏干2").html(命盤.時支.藏干2 + " " + 命盤.時支.十神2 + "<br>");
    $("#mpxs-時支藏干3").html(命盤.時支.藏干3 + " " + 命盤.時支.十神3);
    
    
    // *********** 導入 主星、副星 十神 ***********
    $("#mpxs-年干十神").html(命盤.年干.十神);
    $("#mpxs-月干十神").html(命盤.月干.十神);
    $("#mpxs-時干十神").html(命盤.時干.十神);
    
    if($("#mpxs-時干").html()=="-") $("#mpxs-時干十神").html("吉時"); //沒有時辰的時干十神設為 吉時
 

    // *********** 導入 運星 ***********
    if(系統.設定.用戶設定.命盤顯示.運星){
        $("#mpxs-年運星").html(命盤.年柱.運星);
        $("#mpxs-月運星").html(命盤.月柱.運星);
        $("#mpxs-日運星").html(命盤.日柱.運星);
        $("#mpxs-時運星").html(命盤.時柱.運星);
    }

     // *********** 導入 納音 ***********
    if(系統.設定.用戶設定.命盤顯示.納音){
        $("#mpxs-年柱納音").html(命盤.年柱.納音);
        $("#mpxs-月柱納音").html(命盤.月柱.納音);
        $("#mpxs-日柱納音").html(命盤.日柱.納音);
        $("#mpxs-時柱納音").html(命盤.時柱.納音);
    }

    // *********** 導入 神煞 ***********
    if(系統.設定.用戶設定.命盤顯示.神煞){
        $("#mpxs-年柱神煞").html(命盤.神煞.年柱.join("<br>"));
        $("#mpxs-月柱神煞").html(命盤.神煞.月柱.join("<br>"));
        $("#mpxs-日柱神煞").html(命盤.神煞.日柱.join("<br>"));
        $("#mpxs-時柱神煞").html(命盤.神煞.時柱.join("<br>"));
    }


    // ************ English Elements **************
    $("#mpxs-eng-時干").html(天干屬性(命盤.時干.天干, "拼音"));
    $("#mpxs-eng-yywx-時干").html(天干屬性(命盤.時干.天干, "ElementYinYang"));

    $("#mpxs-eng-日干").html(天干屬性(命盤.日干.天干, "拼音"));
    $("#mpxs-eng-yywx-日干").html(天干屬性(命盤.日干.天干, "ElementYinYang"));

    $("#mpxs-eng-月干").html(天干屬性(命盤.月干.天干, "拼音"));
    $("#mpxs-eng-yywx-月干").html(天干屬性(命盤.月干.天干, "ElementYinYang"));

    $("#mpxs-eng-年干").html(天干屬性(命盤.年干.天干, "拼音"));
    $("#mpxs-eng-yywx-年干").html(天干屬性(命盤.年干.天干, "ElementYinYang"));



    $("#mpxs-eng-時支").html(地支屬性(命盤.時支.地支, "拼音"));
    $("#mpxs-eng-yywx-時支").html(地支屬性(命盤.時支.地支, "ElementYinYang"));
    $("#mpxs-eng-zodiac-時支").html(地支屬性(命盤.時支.地支, "ChineseZodiac"));

    $("#mpxs-eng-日支").html(地支屬性(命盤.日支.地支, "拼音"));
    $("#mpxs-eng-yywx-日支").html(地支屬性(命盤.日支.地支, "ElementYinYang"));
    $("#mpxs-eng-zodiac-日支").html(地支屬性(命盤.日支.地支, "ChineseZodiac"));

    $("#mpxs-eng-月支").html(地支屬性(命盤.月支.地支, "拼音"));
    $("#mpxs-eng-yywx-月支").html(地支屬性(命盤.月支.地支, "ElementYinYang"));
    $("#mpxs-eng-zodiac-月支").html(地支屬性(命盤.月支.地支, "ChineseZodiac"));

    $("#mpxs-eng-年支").html(地支屬性(命盤.年支.地支, "拼音"));
    $("#mpxs-eng-yywx-年支").html(地支屬性(命盤.年支.地支, "ElementYinYang"));
    $("#mpxs-eng-zodiac-年支").html(地支屬性(命盤.年支.地支, "ChineseZodiac"));



    $("#mpxs-eng-時干十神").html(十神屬性英文(命盤.時干.十神, "TenGodAbbr"));
    $("#mpxs-eng-月干十神").html(十神屬性英文(命盤.月干.十神, "TenGodAbbr"));
    $("#mpxs-eng-年干十神").html(十神屬性英文(命盤.年干.十神, "TenGodAbbr"));


    // ----------- 地支 藏干 ---------
    $("#mpxs-eng-時支藏干1").html(命盤.時支.藏干1);
    $("#mpxs-eng-yywx-時支藏干1").html(天干屬性(命盤.時支.藏干1, "SignYinYang") + " " +天干屬性(命盤.時支.藏干1, "Element"));
    $("#mpxs-eng-時支藏干十神1").html(命盤.時支.十神1);
    $("#mpxs-eng-yywx-時支十神1").html(十神屬性英文(命盤.時支.十神1, "TenGodAbbr"));

    $("#mpxs-eng-時支藏干2").html(命盤.時支.藏干2);
    $("#mpxs-eng-yywx-時支藏干2").html(天干屬性(命盤.時支.藏干2, "SignYinYang") + " " + 天干屬性(命盤.時支.藏干2, "Element"));
    $("#mpxs-eng-時支藏干十神2").html(命盤.時支.十神2);
    $("#mpxs-eng-yywx-時支十神2").html(十神屬性英文(命盤.時支.十神2, "TenGodAbbr"));

    $("#mpxs-eng-時支藏干3").html(命盤.時支.藏干3);
    $("#mpxs-eng-yywx-時支藏干3").html(天干屬性(命盤.時支.藏干3, "SignYinYang") + " " + 天干屬性(命盤.時支.藏干3, "Element"));
    $("#mpxs-eng-時支藏干十神3").html(命盤.時支.十神3);
    $("#mpxs-eng-yywx-時支十神3").html(十神屬性英文(命盤.時支.十神3, "TenGodAbbr"));


    $("#mpxs-eng-日支藏干1").html(命盤.日支.藏干1);
    $("#mpxs-eng-yywx-日支藏干1").html(天干屬性(命盤.日支.藏干1, "SignYinYang") + " " +天干屬性(命盤.日支.藏干1, "Element"));
    $("#mpxs-eng-日支藏干十神1").html(命盤.日支.十神1);
    $("#mpxs-eng-yywx-日支十神1").html(十神屬性英文(命盤.日支.十神1, "TenGodAbbr"));

    $("#mpxs-eng-日支藏干2").html(命盤.日支.藏干2);
    $("#mpxs-eng-yywx-日支藏干2").html(天干屬性(命盤.日支.藏干2, "SignYinYang") + " " + 天干屬性(命盤.日支.藏干2, "Element"));
    $("#mpxs-eng-日支藏干十神2").html(命盤.日支.十神2);
    $("#mpxs-eng-yywx-日支十神2").html(十神屬性英文(命盤.日支.十神2, "TenGodAbbr"));

    $("#mpxs-eng-日支藏干3").html(命盤.日支.藏干3);
    $("#mpxs-eng-yywx-日支藏干3").html(天干屬性(命盤.日支.藏干3, "SignYinYang") + " " + 天干屬性(命盤.日支.藏干3, "Element"));
    $("#mpxs-eng-日支藏干十神3").html(命盤.日支.十神3);
    $("#mpxs-eng-yywx-日支十神3").html(十神屬性英文(命盤.日支.十神3, "TenGodAbbr"));


    $("#mpxs-eng-月支藏干1").html(命盤.月支.藏干1);
    $("#mpxs-eng-yywx-月支藏干1").html(天干屬性(命盤.月支.藏干1, "SignYinYang") + " " +天干屬性(命盤.月支.藏干1, "Element"));
    $("#mpxs-eng-月支藏干十神1").html(命盤.月支.十神1);
    $("#mpxs-eng-yywx-月支十神1").html(十神屬性英文(命盤.月支.十神1, "TenGodAbbr"));

    $("#mpxs-eng-月支藏干2").html(命盤.月支.藏干2);
    $("#mpxs-eng-yywx-月支藏干2").html(天干屬性(命盤.月支.藏干2, "SignYinYang") + " " + 天干屬性(命盤.月支.藏干2, "Element"));
    $("#mpxs-eng-月支藏干十神2").html(命盤.月支.十神2);
    $("#mpxs-eng-yywx-月支十神2").html(十神屬性英文(命盤.月支.十神2, "TenGodAbbr"));

    $("#mpxs-eng-月支藏干3").html(命盤.月支.藏干3);
    $("#mpxs-eng-yywx-月支藏干3").html(天干屬性(命盤.月支.藏干3, "SignYinYang") + " " + 天干屬性(命盤.月支.藏干3, "Element"));
    $("#mpxs-eng-月支藏干十神3").html(命盤.月支.十神3);
    $("#mpxs-eng-yywx-月支十神3").html(十神屬性英文(命盤.月支.十神3, "TenGodAbbr"));


    $("#mpxs-eng-年支藏干1").html(命盤.年支.藏干1);
    $("#mpxs-eng-yywx-年支藏干1").html(天干屬性(命盤.年支.藏干1, "SignYinYang") + " " +天干屬性(命盤.年支.藏干1, "Element"));
    $("#mpxs-eng-年支藏干十神1").html(命盤.年支.十神1);
    $("#mpxs-eng-yywx-年支十神1").html(十神屬性英文(命盤.年支.十神1, "TenGodAbbr"));

    $("#mpxs-eng-年支藏干2").html(命盤.年支.藏干2);
    $("#mpxs-eng-yywx-年支藏干2").html(天干屬性(命盤.年支.藏干2, "SignYinYang") + " " + 天干屬性(命盤.年支.藏干2, "Element"));
    $("#mpxs-eng-年支藏干十神2").html(命盤.年支.十神2);
    $("#mpxs-eng-yywx-年支十神2").html(十神屬性英文(命盤.年支.十神2, "TenGodAbbr"));

    $("#mpxs-eng-年支藏干3").html(命盤.年支.藏干3);
    $("#mpxs-eng-yywx-年支藏干3").html(天干屬性(命盤.年支.藏干3, "SignYinYang") + " " + 天干屬性(命盤.年支.藏干3, "Element"));
    $("#mpxs-eng-年支藏干十神3").html(命盤.年支.十神3);
    $("#mpxs-eng-yywx-年支十神3").html(十神屬性英文(命盤.年支.十神3, "TenGodAbbr"));

    // ******** 導入 大運干支起歲 ********
    $(".大運干支格").eq(9-命盤.運行.大運數).trigger("click"); // click 現行的大運
    命盤.運行.大運流年數 = 排盤年份虛歲("年份") - 命盤.大運[命盤.運行.大運數].起年;
    $(".流年干支格子").eq(9-命盤.運行.大運流年數).trigger("click"); // click 現行的流年

    
    for (var j = 0; j <= 9; j++) {
        $("#mpxs-大運" + j + "干支").html(VerticalString(命盤.大運[j].大運顯示, "大運干支字"));
        $("#mpxs-大運" + j + "起歲").html(命盤.大運[j].起歲);
        $("#mpxs-大運" + j + "起年").html(命盤.大運[j].起年);
    }

    $("#BaziChart").show();

    if(getCheckboxStatus("mp-bz-chk-運星")) $(".bzb-運星行").show(); else $(".bzb-運星行").hide();
    if(getCheckboxStatus("mp-bz-chk-納音")) $(".bzb-納音行").show(); else $(".bzb-納音行").hide();
    if(getCheckboxStatus("mp-bz-chk-神煞")) $(".bzb-神煞行").show(); else $(".bzb-神煞行").hide();
    if(getCheckboxStatus("mp-bz-chk-小運")) $(".bzb-小運行").show(); else $(".bzb-小運行").hide();
    if(getCheckboxStatus("mp-bz-chk-流月")) $(".bzb-流月行").show(); else $(".bzb-流月行").hide();

    八字命盤顏色刷新(命盤);


    // ***** Ref button UI manupulation **************
    if(this.起歲==1) $('#表格行數-0').hide();  //流運表格， 如果一歲起歲，隱藏大運第一行


    //$("#tabbed-nav").show();
    /*

    //命盤內容建立(命盤);  //本命論斷
    
    //$("#身強弱量規").trigger("click"); // click to refresh liquid fill gauge new value

    //流年十二神煞(命盤.生日.農曆年, 命盤.生日.農曆月, 命盤.生日.農曆日, 命盤.生日.農曆時, "流年十二神煞論斷");
    */
} //end function 八字排盤


function 導入命盤提示(命盤){
    var 命盤提示內容=[];
    if(命盤.曆法.資訊.日光節約 !="") 命盤提示內容.push(命盤.曆法.資訊.日光節約);
    if(命盤.曆法.資訊.交節日 !="") 命盤提示內容.push(命盤.曆法.資訊.交節日);
    命盤提示內容.push(命盤.起運.起運);
    命盤提示內容.push(命盤.起運.上運);
    命盤提示內容.push(命盤.起運.交脫);
    命盤提示內容.push(命盤.曆法.資訊.人元司令);
    if(命盤.分析.陰陽五行.全陽全陰 !="") 命盤提示內容.push(命盤.分析.陰陽五行.全陽全陰);
    if(命盤.生日.人體卦象.卦象 !="") 命盤提示內容.push(命盤.命盤提示.人體卦象);
    if(命盤.生日.道家命格.本命星君 !="") 命盤提示內容.push(命盤.生日.道家命格.總結);
    命盤提示內容.push(命盤.命盤提示.宮位);
    命盤提示內容.push(命盤.命盤提示.空亡);
    命盤提示內容.push(命盤.分析.庫馬花.庫 + "個庫，" + 命盤.分析.庫馬花.馬 + "個馬，" + 命盤.分析.庫馬花.花 + "個花");
    命盤提示內容.push(命盤.命盤提示.財庫);
    if(命盤.曆法.資訊.城市時差 !="") 命盤提示內容.push(命盤.曆法.資訊.城市時差);
    命盤提示內容.push( "真太陽軌道時間調整：" + 命盤.曆法.資訊.調整軌道的時差);

    $("#mpxs-命盤提示").html(Array2UnorderedList(命盤提示內容, "命盤提示"));
}