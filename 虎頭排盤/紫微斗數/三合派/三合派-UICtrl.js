$(function() {

	//$('[data-toggle="tooltip"]').tooltip();  // activate Bootstrap tooltip for 地支
	//$("td").tooltip({container:'body'});

	/*
	Tipped.create('.地支-tooltip', {
		position: 'bottomright'
	});
	*/

});  //end of system Global control function !!


$(document).on("click tap", "#btn-斗數", function () {

	//清除命盤();

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
    var 輸入四化門派 = $("#sr-shhp-四化門派").val();
    var 輸入閏月處理 = $("#sr-shhp-閏月處理").val();
    
    //var 輸入八字盤格式 = Number($("#mp-命盤格式").val());

    輸入時間=輸入時+輸入分+輸入秒;
    var 日期字串;

    switch(輸入曆法){
        case "西曆":
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

                $("input:radio[name=mp-輸入曆法][value = 西曆]").trigger('click');  // trigger radio button to 西曆
                $("#mp-輸入年").val(西曆生日.getFullYear());
                $("#mp-輸入月").val(zeroPad(西曆生日.getMonth()+1,2));
                $("#mp-輸入日").val(zeroPad(西曆生日.getDate(),2));
                
                輸入年=$("#mp-輸入年").val();
                輸入月=$("#mp-輸入月").val();
                輸入日=$("#mp-輸入日").val();
                日期字串=輸入日+輸入月+輸入年+輸入時間;
                系統.設定.運行狀態.已輸入命盤=true;
            } //end if valid date
            break;
    } // end switch 輸入曆法

    var 輸入資料 = {
        "曆法": 輸入曆法,
        "年": 輸入年,
        "月": 輸入月,
        "日": 輸入日,
        "時": 輸入時,
        "分": 輸入分,
        "日期字串": 日期字串,
        "西曆日期": 日期值轉換(日期字串, 1), 
        "運算西曆": 日期值轉換(日期字串, 1),  // same as 西曆日期, since not doing any adjustment here
        "干支八字": "",  //default set to Null
        "姓名": 輸入姓名,
        "性別": 輸入性別,
        "城市": "台北",  //default value, not used in 紫微斗數, but needed for 干支曆法
        "節氣用區域時間": false,
        "節氣用軌道太陽時": false
    } // end 輸入資料
    
    系統.設定.用戶設定.三合派.四化門派 = Number(輸入四化門派);
    系統.設定.用戶設定.三合派.閏月月份計算 = Number(輸入閏月處理);

    
    // ************* 建立斗數命盤 。。。。。 ************************
	
    if(系統.設定.運行狀態.已輸入命盤) {
        //斗數命盤 = new 斗數命盤架構(輸入資料, 系統);
		斗數三合命盤 = new 斗數三合命盤架構(輸入資料, 系統);
		if(系統.設定.mode.engineering) console.log(斗數三合命盤);
        
		
        // ************** 三合盤 ***************
        $("#三合橫盤").html(三合橫盤斗數十二宮(斗數三合命盤.設定));
        
		三合命盤顯示控制("本命盤", "clear");
        三合命盤顯示控制("星曜", "clear");
        三合命盤顯示控制("星曜廟陷", "clear");
        三合命盤顯示控制("本命四化", "clear");
        三合命盤顯示控制("大限顯示", "clear");
        三合命盤顯示控制("流年顯示", "clear");
        三合命盤顯示控制("星曜廟陷", "hide");
        三合命盤顯示控制("大限四化", "hide");
        三合命盤顯示控制("大限四化", "clear");
        三合命盤顯示控制("流年四化", "hide");

        排三合橫盤組件(斗數三合命盤);
        
        // ************ Post 命盤 顯示、隱藏 ****************
		if(系統.設定.用戶設定.App.命盤設計) $("#btn-命盤設計").show(); else $("#btn-命盤設計").hide();
        if(系統.設定.用戶設定.三合派.中宮切換) $("#三合橫盤中宮_控制板塊").show(); else $("#三合橫盤中宮_控制板塊").hide();
        
        $("#shhp-xs-chk-雜曜顯示").prop("checked", true);

        
        // ********************* 三合派 *************************
        if(系統.設定.用戶設定.三合派.命盤分析) {
            $("#shhp-AnalysisMenu").show(); $("#shhp-AnalysisContent").show();
            
            三合派分析主控(斗數三合命盤, 系統.設定.用戶設定);

        } // end if 三合派 命盤分析

    } // end if 已輸入命盤

    
    

});  //end of click #btn-斗數


$(document).on("click tap", "#btn-飛星斗數登錄", function () {
    var userid = $("#dl-用戶名字").val();
    var userpwd = $("#dl-用戶密碼").val();
    //console.log(userid + " / " + userpwd);
    
    var 用戶登錄 = 用戶認證(userid, userpwd);
    //console.log(用戶登錄);
    
    if(用戶登錄.alive) {
        $("#div-飛星斗數-登錄").hide();
        $("#nrxs-飛星斗數-圖").hide();
        $("#div-斗數-生日輸入").show();
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


$(document).on("click touchstart", ".mp-輸入曆法", function () {
	var 曆法選項 = $(this).val();
	switch(曆法選項){
		case "西曆":
			$("#mp-chk-disp-輸入月-閏月").hide();
			break;
		case "農曆":
		 	$("#mp-chk-disp-輸入月-閏月").show();
		 	break;
		 case "干支曆":
	}  // end switch
	//alert(曆法選項);
});  // end 大限歲數 on click

/*
// *** mobile phone ****
$(document).on("touchstart", ".ds-宮干", function () {
	var 宮干 = $(this).html();
	var 地支數 = $(this).attr("data-地支數");
	宮干四化選星(斗數命盤, 宮干, 地支數);
});


$('.ds-地支格子').on('doubleTap', function(){
	if(斗數命盤.運行.宮干MouseDown >=0) {
		清除星曜顏色();
		斗數命盤.運行.宮干MouseDown = -1;
	}  // end if
});

*/


//***************************************************
// ******************* App UI ***********************
//***************************************************

// ***************** App 命盤設計 *******************
$(document).on("click tap", "#appbtn-命盤設計", function () {
	var 反算生日;

	斗數命盤設計反算生日($("#DS-ChartDesign-生年天干").val(), $("#DS-ChartDesign-命宮").val(), $("#DS-ChartDesign-紫微").val(), $("#DS-ChartDesign-文昌").val(), $("#DS-ChartDesign-天喜").val(), $("#DS-ChartDesign-八座").val());

	$("#DS-ChartDesignResultTitle").show();
	$("#DS-ChartDesignResult").show();
});

$(document).on("change", "#DS-ChartDesign-生年天干", function () {
    斗數命盤設計宮干(天干字數轉換($("#DS-ChartDesign-生年天干").val()));
	$("#DS-ChartDesignResultTitle").hide();
	$("#DS-ChartDesignResult").hide();
});


$(document).on("change", "#DS-ChartDesign-命宮", function () {
    //alert(地支字數轉換($("#DS-ChartDesign-命宮").val()));
     斗數命盤設計命宮(地支字數轉換($("#DS-ChartDesign-命宮").val()));
    $("#DS-ChartDesignResultTitle").hide();
	$("#DS-ChartDesignResult").hide();
});


$(document).on("change", "#DS-ChartDesign-紫微", function () {
	var 設計盤主星 = 斗數命盤設計主星排列($("#DS-ChartDesign-紫微").val());
	斗數命盤設計排列主星模擬盤(設計盤主星);

	$("#DS-ChartDesignResultTitle").hide();
	$("#DS-ChartDesignResult").hide();
});


$(document).on("change", "#DS-ChartDesign-文昌", function () {
	var 生時 = 文昌逆尋生時($("#DS-ChartDesign-文昌").val());
	//var 生時數 = 地支字數轉換(生時);
	var 命宮地支= $("#DS-ChartDesign-命宮").val();
	var 命宮地支數 = 地支字數轉換(命宮地支);
	var 生月數 = (命宮地支生時逆尋生月(命宮地支數, 生時)!=0)?命宮地支生時逆尋生月(命宮地支數, 生時):12;

	$("#DS-ChartDesign-生月").val(生月數);

	$("#DS-ChartDesignResultTitle").hide();
	$("#DS-ChartDesignResult").hide();
});


$(document).on("change", "#DS-ChartDesign-生月", function () {
	var 生月數 = Number($("#DS-ChartDesign-生月").val());
	var 命宮地支數 = 地支字數轉換($("#DS-ChartDesign-命宮").val());
	var 生時數 =命宮地支生月逆尋生時(命宮地支數, 生月數);

	$("#DS-ChartDesign-文昌").val(生時逆尋文昌(地支字數轉換(生時數)));

	$("#DS-ChartDesignResultTitle").hide();
	$("#DS-ChartDesignResult").hide();
});

$(document).on("change", "#DS-ChartDesign-命宮", function () {
	$("#DS-ChartDesign-生月").val(0);
	$("#DS-ChartDesignResultTitle").hide();
	$("#DS-ChartDesignResult").hide();
});


// *************** 三合命盤 ********************

$(document).on("change", "#sh-xs-sel-廟陷顯示", function () {
	var 廟陷選項 = $("#sh-xs-sel-廟陷顯示").val();
    var 星曜, 廟陷碼;
	if(廟陷選項 == "-") 三合命盤顯示控制("星曜廟陷", "hide"); else 三合命盤顯示控制("星曜廟陷", "show");
    
    for (var i = 0; i < $(".sh-橫盤主副星格子").length; i++) {
        星曜 = $(".sh-橫盤主副星格子").eq(i).html().replace("<br>", "");
        
        if(星曜 != "") {
            switch(廟陷選項) {    
                case "-": case "符號": 廟陷碼 = 斗數三合命盤.星曜[星曜].廟陷.符號; break;
                case "廟陷": 廟陷碼 = 斗數三合命盤.星曜[星曜].廟陷.度; break;
                case "亮度": 廟陷碼 = 斗數三合命盤.星曜[星曜].廟陷.符號數; break;
            } // end switch 廟陷選項
            $("#"+斗數三合命盤.星曜[星曜].橫盤廟陷位置).html(廟陷碼);
        } // end if 星曜 != ""
    } //end for
    
});


$(document).on("change", "#shhp-xs-sel-三方顯示", function () {
	var 三方顯示 = $("#shhp-xs-sel-三方顯示").val();
    var 命宮地支數 = 斗數三合命盤.人事宮.命宮.地支數, 財帛宮地支數 = 斗數三合命盤.人事宮.財帛宮.地支數, 官祿宮地支數 = 斗數三合命盤.人事宮.官祿宮.地支數;
    var 夫妻宮地支數 = 斗數三合命盤.人事宮.夫妻宮.地支數, 遷移宮地支數 = 斗數三合命盤.人事宮.遷移宮.地支數, 福德宮地支數 = 斗數三合命盤.人事宮.福德宮.地支數;
    var 田宅宮地支數 = 斗數三合命盤.人事宮.田宅宮.地支數, 兄弟宮地支數 = 斗數三合命盤.人事宮.兄弟宮.地支數, 疾厄宮地支數 = 斗數三合命盤.人事宮.疾厄宮.地支數;
    var 父母宮地支數 = 斗數三合命盤.人事宮.父母宮.地支數, 子女宮地支數 = 斗數三合命盤.人事宮.子女宮.地支數, 交友宮地支數 = 斗數三合命盤.人事宮.交友宮.地支數;
    
    $(".shhp-地支模塊").removeClass("shhp-一宮背景色 shhp-五宮背景色 shhp-九宮背景色");

    switch(三方顯示) {
        case "命財官":
            $("#shhp-dzg-" + 命宮地支數).addClass("shhp-一宮背景色");
            $("#shhp-dzg-" + 財帛宮地支數).addClass("shhp-五宮背景色");
            $("#shhp-dzg-" + 官祿宮地支數).addClass("shhp-九宮背景色");
            break;
         case "夫遷福":
            $("#shhp-dzg-" + 夫妻宮地支數).addClass("shhp-一宮背景色");
            $("#shhp-dzg-" + 遷移宮地支數).addClass("shhp-五宮背景色");
            $("#shhp-dzg-" + 福德宮地支數).addClass("shhp-九宮背景色");
            break;
        case "田兄疾":
            $("#shhp-dzg-" + 田宅宮地支數).addClass("shhp-一宮背景色");
            $("#shhp-dzg-" + 兄弟宮地支數).addClass("shhp-五宮背景色");
            $("#shhp-dzg-" + 疾厄宮地支數).addClass("shhp-九宮背景色");
            break;
        case "父子友":
            $("#shhp-dzg-" + 父母宮地支數).addClass("shhp-一宮背景色");
            $("#shhp-dzg-" + 子女宮地支數).addClass("shhp-五宮背景色");
            $("#shhp-dzg-" + 交友宮地支數).addClass("shhp-九宮背景色");
            break;
        case "-":
            //$(".shhp-地支模塊").addClass("shhp-地支宮背景色");
    }  //end switch
});



$(document).on("click", ".shhp-橫盤顯示項目", function () {
//$("input[name='ds-hide_chart_item']:checked").change(function () {
		var 顯示選項 = $(this).val();
		var checked = this.checked;
        var togglestatus = (this.checked) ? false : true;
        //console.log(顯示選項 + ": " + this.checked);

        switch(顯示選項){
            case "大限四化":
                if(checked) 三合命盤顯示控制("大限四化", "show"); else 三合命盤顯示控制("大限四化", "hide");
                break;
            case "流年四化":
                if(checked) 三合命盤顯示控制("流年四化", "show"); else 三合命盤顯示控制("流年四化", "hide");
                break;
            case "大限流曜":
                if(checked) 三合命盤顯示控制("大限流曜", "show"); else 三合命盤顯示控制("大限流曜", "hide");
                break;
            case "流年流曜":
                if(checked) 三合命盤顯示控制("流年流曜", "show"); else 三合命盤顯示控制("流年流曜", "hide");
                break;
            case "星曜註解":
                if(checked) 三合命盤顯示控制("星曜註解", "show"); else 三合命盤顯示控制("星曜註解", "hide");
                break;
            case "雜曜顯示":
                if(checked) $("#三合橫盤雜曜行").show(); else $("#三合橫盤雜曜行").hide();
                break;
        } //end switch
        //console.log( 顯示選項 + " check? " + check);
});


$(document).on("click touchstart", ".shhp-大限歲數格子", function () {

    var 地支數 = $(this).attr("data-地支數");

    斗數三合命盤.運行.選擇的大限數 = 斗數三合命盤.地支宮位[地支數].大限數;
    三合命盤大限刷新(地支數, 斗數三合命盤);
    
    $("#shhp-xs-chk-大限四化").prop("checked", true);
    $("#shhp-xs-chk-大限流曜").prop("checked", true);
    
});  // end 大限歲數 on click



$(document).on("click touchstart", ".shhp-流年年份格子", function () {
    var 流年年份 = $(this).html();
    var 大限流年數 = -1, 大限流年地支數 = -1;
    
    if( 流年年份 != "") {
        var 大限數 = 斗數三合命盤.運行.選擇的大限數;
        for(var i=0; i<10; i++){
            if(斗數三合命盤.大限[大限數].流年[i].西曆年 == 流年年份) {
                大限流年數 = i;
                大限流年地支數 = $(this).attr("data-地支數");
                break;
            } // end if match
        } // end for
        //console.log(大限流年地支數);
        三合命盤流年刷新(斗數三合命盤, 大限數, 大限流年數, 大限流年地支數);
    } // end if 流年年份
});  // end 流年年份格子 on click


$(document).on("click touchstart", ".shhp-流年歲數格子", function () {
    var 流年歲數 = $(this).html();
    var 大限流年數 = -1, 大限流年地支數 = -1;
    
    if(流年歲數 != "") {
        var 大限數 = 斗數三合命盤.運行.選擇的大限數;
        for(var i=0; i<10; i++){
            if(斗數三合命盤.大限[大限數].流年[i].歲數 == 流年歲數) {
                大限流年數 = i;
                大限流年地支數 = $(this).attr("data-地支數");
                break;
            }  // end if match
        } // end for
        //console.log(大限流年數);
        三合命盤流年刷新(斗數三合命盤, 大限數, 大限流年數, 大限流年地支數);
    } // end if 流年歲數
});  // end 流年歲數格子 on click



$(document).on("click touchstart", ".shhp-三合星曜顯示", function () {
    var 星曜點擊 = $(this).html().replace("<br>", "");
    var 星曜註解;
    
    
    if(星曜點擊 != "" && 斗數三合命盤.設定.星曜點擊顯示含義) {
        if(星曜點擊 == 斗數三合命盤.運行.星曜註解) {
            斗數三合命盤.運行.星曜註解 = "";
            三合命盤顯示控制("星曜註解", "clear");
            三合命盤顯示控制("星曜註解", "hide");
            $("#shhp-xs-chk-星曜註解").prop("checked", false);
            return;
        } // end if 點擊同一顆星
        
        斗數三合命盤.運行.星曜註解 = 星曜點擊;
        //星曜註解 = 星曜註解搜尋(星曜點擊);  //三合星曜註解(星曜點擊, 斗數三合命盤.星曜);
        $("#三合橫盤-星曜點擊").html(星曜點擊);
        $("#三合橫盤-星曜註解").html(星曜註解搜尋(星曜點擊));
        
        三合命盤顯示控制("星曜註解", "show");
        $("#shhp-xs-chk-星曜註解").prop("checked", true);
    } // end if 星曜點擊
});  // end shhp-三合星曜顯示 on click


$(document).on("click touchstart", ".shhp-中宮格局名稱", function () {
    var 格局點擊 = $(this).html();
    var 格局註解顯示 = 格局註解搜尋(格局點擊);
    
    //console.log(格局點擊);
    
    $("#三合橫盤-星曜點擊").html("格局：" + 格局點擊);
    if(格局註解顯示!="") {
        $("#三合橫盤-星曜註解").html(格局註解顯示);
        
        三合命盤顯示控制("星曜註解", "show");
        $("#shhp-xs-chk-星曜註解").prop("checked", true);
    }
    else {$("#三合橫盤-星曜註解").html("~ 暫無資料 ~");}
        
});  // end .shhp-中宮顯示格局內容 on click



$(document).on("click touchstart", ".sh-三合地支格子", function () {

    var 地支數 = Number($(this).attr("data-地支數"));

    var 中宮地支分析元件 = {
        "標題": 地支字數轉換(地支數) + "：" + 斗數三合命盤.地支宮位[地支數].宮位 + " 格局與星曜互涉",
        "星曜": 斗數三合命盤.地支宮位[地支數].星曜架構.中宮分析總結.宮位星曜,
        "吉曜": 斗數三合命盤.地支宮位[地支數].星曜架構.中宮分析總結.宮位吉曜,
        "煞曜": 斗數三合命盤.地支宮位[地支數].星曜架構.中宮分析總結.宮位煞曜,
        "格局": 斗數三合命盤.地支宮位[地支數].星曜架構.中宮分析總結.格局,
        "備註": ""
    };
    
    $("#三合橫盤中宮_分析卡").html(中宮橫盤顯示_分析資訊(中宮地支分析元件));
    
    三合橫盤中宮控制("分析");
    
});  // end 地支格子 on click




$(document).on("click", ".shhp-中宮按鍵", function () {
//$("input[name='ds-hide_chart_item']:checked").change(function () {
		var 中宮選項 = $(this).attr("data-sldmenu");
        //$(this).html();
        //console.log(中宮選項);

        switch(中宮選項){
            case "主頁":
                三合橫盤中宮控制("主頁");
                break;
            case "分析":
                三合橫盤中宮控制("分析");
                break;
            case "八字":
                三合橫盤中宮控制("八字");
                break;
            case "關於":
                三合橫盤中宮控制("關於");
                break;
        } //end switch
        //console.log( 顯示選項 + " check? " + check);
});

