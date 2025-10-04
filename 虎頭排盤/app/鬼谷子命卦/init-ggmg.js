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

function 初始化鬼谷命卦程式() {
    $("#div-鬼谷-登錄").html(Gen_登錄表格("登錄", "鬼谷命卦登錄"));
	$("#div-鬼谷-生日輸入").html(Gen_生日輸入表格("查詢", "鬼谷命卦"));
	初始化生日輸入(false, false, false, false, false, false);

	$("#nrxs-鬼谷命卦-八宮世系").html(GenLiuYaoGua());
    
    $("#div-鬼谷-生日輸入").hide();
	$("#nrxs-鬼谷命卦-八宮世系").hide();
	$("#nrxs-鬼谷命卦-註解").hide();
}  //end function 初始化鬼谷命卦程式


$(document).on("click tap", "#btn-鬼谷命卦登錄", function () {
    var userid = $("#dl-用戶名字").val();
    var userpwd = $("#dl-用戶密碼").val();
    //console.log(userid + " / " + userpwd);
    
    var 用戶登錄 = 用戶認證(userid, userpwd);
    //console.log(用戶登錄);
    
    if(用戶登錄.alive) {
        $("#div-鬼谷-登錄").hide();
        //$("#nrxs-鬼谷-圖").hide();
        $("#div-鬼谷-生日輸入").show();
    }  // end if
    else
    {
        var ErrMsg = "";
        if(!用戶登錄.alive) ErrMsg = "使用權過期";
        if(!用戶登錄.密碼正確) ErrMsg = "密碼錯誤";
        if(!用戶登錄.用戶正確) ErrMsg = "非法用戶";
        alert(ErrMsg);
    }

}); // end click #btn-鬼谷命卦登錄


$(document).on("click tap", "#btn-鬼谷命卦", function () {
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
		var 鬼谷命卦輸入;
        switch(輸入曆法){
            case "西曆":
            	$("#mp-disp-western-dob").hide();
                輸入資料.西曆日期=日期值轉換(輸入資料.日期字串, 1);
                輸入資料.運算西曆 = 輸入資料.西曆日期;
                鬼谷命卦輸入=鬼谷起盤(輸入資料);
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
                    鬼谷命卦輸入=鬼谷起盤(輸入資料);
                } //end if valid date
                break;

            case "干支曆":
                break;
        } // end switch 輸入曆法
    //console.log (鬼谷命卦輸入);

	var 鬼谷命卦註解=鬼谷命卦(鬼谷命卦輸入);
	//console.log (鬼谷命卦註解);
	刷新鬼谷命卦註解(鬼谷命卦註解);

	var 卦的設定={
	    "體積": "大", //大，中，小
	    "卦名": true,
	    "資訊": true
  	}


  	畫卦(鬼谷命卦註解.卦象, 卦的設定);

	$("#nrxs-鬼谷命卦-八宮世系").show();
	$("#nrxs-鬼谷命卦-註解").show();

}); // end click btn-鬼谷命卦

function 鬼谷起盤(輸入資料){
    var 輸入生日 = new 日期格式(輸入資料.西曆日期);
    //console.log(輸入生日);
    var 干支曆= 西曆轉換干支曆(輸入資料); //西曆轉換干支曆(輸入資料.西曆日期, 輸入資料.城市, 輸入資料.夜子時, 輸入資料.節氣用區域時間, 輸入資料.節氣用真太陽時, false, false);
    var 農曆= 西曆轉換農曆(輸入資料.西曆日期, 輸入資料.城市, 輸入資料.夜子時, false, false, false, false);

    var 曆法={
        "干支曆": 干支曆,
        "農曆": 農曆,
        "年干": 干支曆.年柱.substr(0,1),
        "日干": 干支曆.日柱.substr(0,1),
        "時干": 干支曆.時柱.substr(0,1),
        "時支": 干支曆.時柱.substr(1,1),
        "資訊": new function(){
                        this.日光節約= 日光節約(Number(輸入資料.年), 輸入資料.國家);
                        this.備註= "-";
                    },
        "備註": ""
    }  //end object 曆法
    return 曆法;
}


function 刷新鬼谷命卦註解(鬼谷命卦註解) {
	$("#nrxs-鬼谷命卦-八字").html(鬼谷命卦註解.輸入.八字);
	$("#nrxs-鬼谷命卦-格局").html(鬼谷命卦註解.格局);
	$("#nrxs-鬼谷命卦-卦象").html(鬼谷命卦註解.卦象);
	$("#nrxs-鬼谷命卦-格局註解").html(鬼谷命卦註解.格局註解);
	$("#nrxs-鬼谷命卦-附詩").html("附詩："+鬼谷命卦註解.附詩);
	$("#nrxs-鬼谷命卦-判斷").html(鬼谷命卦註解.判斷);
	$("#nrxs-鬼谷命卦-判斷白話").html(鬼谷命卦註解.判斷白話);

	$("#nrxs-鬼谷命卦-四字批命-命星").html(鬼谷命卦註解.四字批命.命星);
	$("#nrxs-鬼谷命卦-四字批命-四字").html(鬼谷命卦註解.四字批命.四字);
	$("#nrxs-鬼谷命卦-四字批命-解曰").html(鬼谷命卦註解.四字批命.解曰);
	
	$("#nrxs-鬼谷命卦-基業").html(鬼谷命卦註解.基業);
	$("#nrxs-鬼谷命卦-兄弟").html(鬼谷命卦註解.兄弟);
	$("#nrxs-鬼谷命卦-行藏").html(鬼谷命卦註解.行藏);
	$("#nrxs-鬼谷命卦-婚姻").html(鬼谷命卦註解.婚姻);
	$("#nrxs-鬼谷命卦-子息").html(鬼谷命卦註解.子息);
	$("#nrxs-鬼谷命卦-收成").html(鬼谷命卦註解.收成);

	$("#nrxs-鬼谷命卦-基業白話").html(鬼谷命卦註解.基業白話);
	$("#nrxs-鬼谷命卦-兄弟白話").html(鬼谷命卦註解.兄弟白話);
	$("#nrxs-鬼谷命卦-行藏白話").html(鬼谷命卦註解.行藏白話);
	$("#nrxs-鬼谷命卦-婚姻白話").html(鬼谷命卦註解.婚姻白話);
	$("#nrxs-鬼谷命卦-子息白話").html(鬼谷命卦註解.子息白話);
	$("#nrxs-鬼谷命卦-收成白話").html(鬼谷命卦註解.收成白話);

	$("#nrxs-鬼谷命卦-命卦-世爻").html(鬼谷命卦註解.命卦.世爻);
	$("#nrxs-鬼谷命卦-命卦-特性").html(鬼谷命卦註解.命卦.世爻註解);

	if(鬼谷命卦註解.附詩=="") $("#nrxs-鬼谷命卦-附詩").hide();
}



function 畫卦(卦名, 設定){
  //var 六爻虛實="100010";
  //卦名="水澤節";

	var 爻的虛實;
	var 爻位;

	var 爻的體積 = (設定.體積!=undefined) ? 設定.體積: "大";
	var 顯示左右資訊=(設定.資訊!=undefined) ? 設定.資訊: true;
	var 顯示卦名=(設定.卦名!=undefined) ? 設定.卦名:true;
	
	var 卦象=取卦象(卦名);

	switch(爻的體積){
		case "大":
			//for (var i = 0; i < $(".ly-tblcell").length; i++) $(".ly-tblcell").eq(i).removeClass("ly-爻體積中");
			//for (var i = 0; i < $(".ly-tblcell").length; i++) $(".ly-tblcell").eq(i).removeClass("ly-爻體積小");
			for (var i = 0; i < $(".ly-tblcell").length; i++) $(".ly-tblcell").eq(i).addClass("ly-爻體積大");
			for (var i = 0; i < $(".ly-tblcell-header1").length; i++) $(".ly-tblcell-header1").eq(i).addClass("ly-爻體積大");
			for (var i = 0; i < $(".ly-tblcell-header2").length; i++) $(".ly-tblcell-header2").eq(i).addClass("ly-爻體積大");
			$(".ly-GuaTitle").eq(0).addClass("ly-卦名大");
			break;
		case "中": //中自動不顯示卦名與左右資訊
			for (var i = 0; i < $(".ly-tblcell").length; i++) $(".ly-tblcell").eq(i).addClass("ly-爻體積中");
			for (var i = 0; i < $(".ly-tblcell-header1").length; i++) $(".ly-tblcell-header1").eq(i).addClass("ly-爻體積中");
			for (var i = 0; i < $(".ly-tblcell-header2").length; i++) $(".ly-tblcell-header2").eq(i).addClass("ly-爻體積中");
			$(".ly-GuaTitle").eq(0).addClass("ly-卦名中");
			//顯示卦名=false;
			顯示左右資訊=false;
			break;
		case "小": //小自動不顯示卦名與左右資訊
			for (var i = 0; i < $(".ly-tblcell").length; i++) $(".ly-tblcell").eq(i).addClass("ly-爻體積小");
			for (var i = 0; i < $(".ly-tblcell-header1").length; i++) $(".ly-tblcell-header1").eq(i).addClass("ly-爻體積小");
			for (var i = 0; i < $(".ly-tblcell-header2").length; i++) $(".ly-tblcell-header2").eq(i).addClass("ly-爻體積小");
			顯示卦名=false;
			顯示左右資訊=false;
			break;
	}
	for (var i = 0; i < $(".ly-cellfull").length; i++) {
	$(".ly-cellfull").eq(i).addClass("ly-實爻");
	} // end for 填寫陰爻

	for(var i=0; i<=5; i++){
	爻的虛實=卦象.六爻碼.substr(i,1);
	爻位 =i+1;
	$("#lyxs-虛實-爻"+爻位).removeClass("ly-實爻 ly-虛爻");
	if(爻的虛實=="1") $("#lyxs-虛實-爻"+爻位).addClass("ly-實爻"); else $("#lyxs-虛實-爻"+爻位).addClass("ly-虛爻");
	} // end for 填寫六爻


	if(顯示左右資訊 && 爻的體積=="大"){
		$("#lyxs-上卦名").html(卦象.上卦+"上");
		$("#lyxs-下卦名").html(卦象.下卦+"下");

		for (var i = 0; i < $(".ly-tblcellSide").length; i++) $(".ly-tblcellSide").eq(i).addClass("ly-爻左右資訊體積大");
		$("#lyxs-leftinfo-爻6").html(卦象.爻六六親);
		$("#lyxs-rightinfo-爻6").html(卦象.爻六地支五行);
		$("#lyxs-世應-爻6").html(卦象.爻六世應);

		$("#lyxs-leftinfo-爻5").html(卦象.爻五六親);
		$("#lyxs-rightinfo-爻5").html(卦象.爻五地支五行);
		$("#lyxs-世應-爻5").html(卦象.爻五世應);

		$("#lyxs-leftinfo-爻4").html(卦象.爻四六親);
		$("#lyxs-rightinfo-爻4").html(卦象.爻四地支五行);
		$("#lyxs-世應-爻4").html(卦象.爻四世應);

		$("#lyxs-leftinfo-爻3").html(卦象.爻三六親);
		$("#lyxs-rightinfo-爻3").html(卦象.爻三地支五行);
		$("#lyxs-世應-爻3").html(卦象.爻三世應);

		$("#lyxs-leftinfo-爻2").html(卦象.爻二六親);
		$("#lyxs-rightinfo-爻2").html(卦象.爻二地支五行);
		$("#lyxs-世應-爻2").html(卦象.爻二世應);

		$("#lyxs-leftinfo-爻1").html(卦象.爻一六親);
		$("#lyxs-rightinfo-爻1").html(卦象.爻一地支五行);
		$("#lyxs-世應-爻1").html(卦象.爻一世應);
	} //end if 左右資訊
	else {
		for(var i = 0; i < $(".ly-tblcellSide").length; i++){
			$(".ly-tblcellSide").eq(i).html("");
			$(".ly-tblcellSide").eq(i).addClass("ly-爻左右資訊無");
		} // end for ly-tblcellSide

		// 上下卦的高度變矮
		for (var i = 0; i < $(".ly-tblcell-header2").length; i++) {
			$(".ly-tblcell-header2").eq(i).removeClass("ly-爻體積大");
			$(".ly-tblcell-header2").eq(i).removeClass("ly-爻體積中");
			$(".ly-tblcell-header2").eq(i).removeClass("ly-爻體積小");
			$(".ly-tblcell-header2").eq(i).addClass("ly-標題無");
		} // end for ly-tblcell-header2 上下卦

		// 第六爻的世應
		for (var i = 0; i < $(".ly-tblcell-header3").length; i++) {
			$(".ly-tblcell-header3").eq(i).removeClass("ly-爻體積大");
			$(".ly-tblcell-header3").eq(i).removeClass("ly-爻體積中");
			$(".ly-tblcell-header3").eq(i).removeClass("ly-爻體積小");
			$(".ly-tblcell-header3").eq(i).addClass("ly-標題無");
		} // end for ly-tblcell-header2 上下卦
	} // end else 左右資訊

	$("#lyxs-卦名").html(卦象.卦名);
	if(顯示卦名==false || 爻的體積=="小"){
		$("#lyxs-卦名").html("");
		$(".ly-GuaTitle").eq(0).removeClass("ly-卦名大");
		for (var i = 0; i < $(".ly-tblcell-header1").length; i++) {
			$(".ly-tblcell-header1").eq(i).removeClass("ly-爻體積大");
			$(".ly-tblcell-header1").eq(i).removeClass("ly-爻體積中");
			$(".ly-tblcell-header1").eq(i).removeClass("ly-爻體積小");
			$(".ly-tblcell-header1").eq(i).addClass("ly-標題無");
		} // end for ly-tblcell-header 顯示卦名
	} // end if 顯示卦名
} // end function 畫卦
