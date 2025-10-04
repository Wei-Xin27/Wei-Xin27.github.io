$(function() {
		
	// ***************************************** L i b r a r y   I n i t i a l i z a t i o n *****************************************

	// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ jQuery UI Library $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	
	//$(document).tooltip();

	// ********** Tab Navigation **********
	$("#tabbed-nav").tabs({
	    collapsible: true,
	    active: 0
	});

	$("#tabbed-nav").tabs("option", "heightStyle", "content");

	$("#tabbed-nav").css({ width: "680" });

    /*
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
    */


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
    $(".btn-五行開運").click(function(){
        $(".collapse").collapse('toggle');
    });
	*/
	// ***************************** P r o g r a m   I n i t i a l i z a t i o n *****************************

    $("#BaziChart").hide();
	$("#tabbed-nav").hide();

    $("#nrxs-五行開運").html(建立五行開運內容());

});

$(document).on("click tap", "#btnConvertBZ", function () {
    轉換八字();
});

$(document).on("click", "#身強弱量規", function () {
    身強弱量規值.update(命盤.分析.強弱.印比.數據);
});

function 刷新命盤顏色(){
    // ********************* 轉換字體五行顏色 *********************
    for (var i = 0; i < $(".mpxs-本命八字干支").length; i++) {
        var 干支字 = $(".mpxs-本命八字干支").eq(i).html();
        $(".mpxs-本命八字干支").eq(i).removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
        var 五行顏色 = 干支五行字體顏色(干支字,"CSS");
        $(".mpxs-本命八字干支").eq(i).addClass(五行顏色);
    }

    for (var i = 0; i <= $(".mpxs-本命十神").length; i++) {
        var 十神星 = $(".mpxs-本命十神").eq(i).html();
        var 十神五行字 = 十神五行(命盤.日干.天干, 十神星);
        $(".mpxs-本命十神").eq(i).removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
        var 五行顏色 = 干支五行字體顏色(十神五行字,"CSS");
        $(".mpxs-本命十神").eq(i).addClass(五行顏色);
    }

    // ************ 纳音颜色 ************
    for (var i = 0; i < $(".mpxs-本命纳音").length; i++) {
        var 納音 = $(".mpxs-本命纳音").eq(i).html();
        var 納音五行 = 納音.substr(2,1);
        $(".mpxs-本命纳音").eq(i).removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
        var 五行顏色 = 干支五行字體顏色(納音五行,"CSS");
        $(".mpxs-本命纳音").eq(i).addClass(五行顏色);
    }
}
    
$(document).on("click touchstart", ".大運干支格子", function () {
	$('.大運干支格子').css('background', '');
	$(this).css('background', 'yellow');
	// ******** 導入 大運干支起歲 ********
	var 大運數 = $(this).attr("data-大運數");
	命盤.運行.大運數 = 大運數;

	var 大運干 = 命盤.大運[大運數].干支.substr(0, 1);
	$("#mpxs-大運干").html(大運干);
	var 大運支 = 命盤.大運[大運數].干支.substr(1, 1);
	$("#mpxs-大運支").html(大運支);

	$("#mpxs-大運藏干1").html(命盤.大運[大運數].藏干1);
	$("#mpxs-大運藏干2").html(命盤.大運[大運數].藏干2);
	$("#mpxs-大運藏干3").html(命盤.大運[大運數].藏干3);
	$("#mpxs-大運十神").html(命盤.大運[大運數].天干十神);
	$("#mpxs-大運副星1").html(命盤.大運[大運數].地支十神1);
	$("#mpxs-大運副星2").html(命盤.大運[大運數].地支十神2);
	$("#mpxs-大運副星3").html(命盤.大運[大運數].地支十神3);

	$("#mpxs-大運運星").html(命盤.大運[大運數].運星);
	$("#mpxs-大運歲數間距").html(命盤.大運[大運數].歲數間距);

    $("#mpxs-大運納音").html(命盤.大運[大運數].納音);
    $("#mpxs-大運神煞").html(單柱神煞(命盤, 命盤.大運[大運數].干支).join("<br>"));
    
	// ************** update 運行的參數 & 註解 *************

	命盤.分析.行運註解.大運 = 行運分析模塊(命盤, "大運");
	$("#大運註解").html(命盤.分析.行運註解.大運);

	// ************** update 流年block ***********
	for (var j = 0; j <= 9; j++) {
	    $("#mpxs-流年" + j + "干支").html(VerticalString(命盤.大運[命盤.運行.大運數].流年[j].干支, "流年干支字"));
	    $("#mpxs-流年" + j + "歲數").html(命盤.大運[命盤.運行.大運數].流年[j].歲數);
	    $("#mpxs-流年" + j + "年份").html(命盤.大運[命盤.運行.大運數].流年[j].年份);

	    var 流年十神Tooltip = "天干: " + 命盤.大運[命盤.運行.大運數].流年[j].天干十神 + ", 藏干: " + 命盤.大運[命盤.運行.大運數].流年[j].地支十神1 + " " + 命盤.大運[命盤.運行.大運數].流年[j].地支十神2 + " " + 命盤.大運[命盤.運行.大運數].流年[j].地支十神3;
	    $("#mpxs-流年" + j + "干支").prop('title', 流年十神Tooltip);
	    //var elementTitle = $('#yourElementId').prop('title'); //to retrieve the title
	}

	// ************** 按大運後，除掉所有流年資料 ******************
	$('.流年干支格子').css('background', '');

	$("#mpxs-流年干").html("");
	$("#mpxs-流年支").html("");
	$("#mpxs-流年藏干1").html("");
	$("#mpxs-流年藏干2").html("");
	$("#mpxs-流年藏干3").html("");
	$("#mpxs-流年十神").html("");
	$("#mpxs-流年副星1").html("");
	$("#mpxs-流年副星2").html("");
	$("#mpxs-流年副星3").html("");
	$("#mpxs-流年運星").html("");
	$("#mpxs-流年納音").html("");
    $("#mpxs-流年神煞").html("");
    $("#mpxs-當選流年年份").html("");

	$("#流年註解").html(""); //清除流年註解

	命盤.運行.大運流年數 = "";
	命盤.運行.流年年份 = "";
	命盤.分析.行運註解.流年 = "";

	// ************** update 大運干支，藏干顏色 **************
	$("#mpxs-大運干").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運干").addClass(干支五行字體顏色($("#mpxs-大運干").html(),"CSS"));
	$("#mpxs-大運支").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運支").addClass(干支五行字體顏色($("#mpxs-大運支").html(),"CSS"));

	$("#mpxs-大運藏干1").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運藏干1").addClass(干支五行字體顏色($("#mpxs-大運藏干1").html(),"CSS"));
	$("#mpxs-大運藏干2").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運藏干2").addClass(干支五行字體顏色($("#mpxs-大運藏干2").html(),"CSS"));
	$("#mpxs-大運藏干3").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運藏干3").addClass(干支五行字體顏色($("#mpxs-大運藏干3").html(),"CSS"));

	$("#mpxs-大運十神").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運十神").addClass(干支五行字體顏色(十神五行(命盤.日干.天干, $("#mpxs-大運十神").html()),"CSS"));
	$("#mpxs-大運副星1").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運副星1").addClass(干支五行字體顏色(十神五行(命盤.日干.天干, $("#mpxs-大運副星1").html()),"CSS"));
	$("#mpxs-大運副星2").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運副星2").addClass(干支五行字體顏色(十神五行(命盤.日干.天干, $("#mpxs-大運副星2").html()),"CSS"));
	$("#mpxs-大運副星3").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
	$("#mpxs-大運副星3").addClass(干支五行字體顏色(十神五行(命盤.日干.天干, $("#mpxs-大運副星3").html()),"CSS"));

    $("#mpxs-大運納音").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-大運納音").addClass(干支五行字體顏色($("#mpxs-大運納音").html().substr(2,1),"CSS"));

	// ************** 清除流月數據 ***********
	$('.流月干支格子').css('background', '');
	命盤.運行.流月數 = "";
	命盤.運行.流月份 = "";
	$("#流月註解").html(""); //清除流年註解
	命盤.分析.行運註解.流月用 = 0; // turn off 流月

	for (var i = 0; i <= 11; i++) {
	    $("#mpxs-流月" + i + "干支").html("-");
	    $("#mpxs-流月" + i + "干支").prop('title', "");
	}

});  // end 大運格子 on click


$(document).on("click touchstart", ".流年干支格子", function () {
    $('.流年干支格子').css('background', '#FAFAFA');
    $(this).css('background', 'yellow');

    // ******** 導入 流年干支起歲 ********
    var 流年數 = $(this).attr("data-流年數");
    var 流年干 = 命盤.大運[命盤.運行.大運數].流年[流年數].干支.substr(0, 1);
    $("#mpxs-流年干").html(流年干);
    var 流年支 = 命盤.大運[命盤.運行.大運數].流年[流年數].干支.substr(1, 1);
    $("#mpxs-流年支").html(流年支);

    $("#mpxs-流年藏干1").html(命盤.大運[命盤.運行.大運數].流年[流年數].藏干1);
    $("#mpxs-流年藏干2").html(命盤.大運[命盤.運行.大運數].流年[流年數].藏干2);
    $("#mpxs-流年藏干3").html(命盤.大運[命盤.運行.大運數].流年[流年數].藏干3);

    $("#mpxs-流年十神").html(命盤.大運[命盤.運行.大運數].流年[流年數].天干十神);
    $("#mpxs-流年副星1").html(命盤.大運[命盤.運行.大運數].流年[流年數].地支十神1);
    $("#mpxs-流年副星2").html(命盤.大運[命盤.運行.大運數].流年[流年數].地支十神2);
    $("#mpxs-流年副星3").html(命盤.大運[命盤.運行.大運數].流年[流年數].地支十神3);

    $("#mpxs-流年運星").html(命盤.大運[命盤.運行.大運數].流年[流年數].運星);
    $("#mpxs-流年納音").html(命盤.大運[命盤.運行.大運數].流年[流年數].納音);
    $("#mpxs-流年神煞").html(單柱神煞(命盤, 命盤.大運[命盤.運行.大運數].流年[流年數].干支, "流年").join("<br>"));
    $("#mpxs-當選流年年份").html(命盤.大運[命盤.運行.大運數].流年[流年數].年份 + "/" + 命盤.大運[命盤.運行.大運數].流年[流年數].歲數);

    命盤.運行.大運流年數 = 流年數;
    命盤.運行.流年年份 = 命盤.大運[命盤.運行.大運數].流年[流年數].年份;
    命盤.運行.歲數 = Number(Number(命盤.運行.流年年份) - Number(命盤.生日.西曆年) + 1);

    命盤.分析.行運註解.流年 = 行運分析模塊(命盤, "流年");
    命盤.分析.行運註解.流月用 = 1; // turn on 流月
    $("#流年註解").html(命盤.分析.行運註解.流年);
    $("#流月註解").html(""); // 若轉換流年，刪除流月註解

    // ************** 更新 命盤數據、 流月干支 ***********
    命盤.運行.流年年份 = 命盤.大運[命盤.運行.大運數].流年[流年數].年份;
    for (var i = 0; i <= 11; i++) {
        命盤.流月[i] = new 流月模塊(命盤.運行.流年年份, 命盤.日干.天干, i);
    }

    // ************** update 流年干支，藏干顏色 **************

    $("#mpxs-流年干").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年干").addClass(干支五行字體顏色($("#mpxs-流年干").html(),"CSS"));
    $("#mpxs-流年支").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年支").addClass(干支五行字體顏色($("#mpxs-流年支").html(),"CSS"));

    $("#mpxs-流年藏干1").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年藏干1").addClass(干支五行字體顏色($("#mpxs-流年藏干1").html(),"CSS"));
    $("#mpxs-流年藏干2").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年藏干2").addClass(干支五行字體顏色($("#mpxs-流年藏干2").html(),"CSS"));
    $("#mpxs-流年藏干3").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年藏干3").addClass(干支五行字體顏色($("#mpxs-流年藏干3").html(),"CSS"));

    $("#mpxs-流年十神").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年十神").addClass(干支五行字體顏色(十神五行(命盤.日干.天干, $("#mpxs-流年十神").html()),"CSS"));
    $("#mpxs-流年副星1").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年副星1").addClass(干支五行字體顏色(十神五行(命盤.日干.天干, $("#mpxs-流年副星1").html()),"CSS"));
    $("#mpxs-流年副星2").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年副星2").addClass(干支五行字體顏色(十神五行(命盤.日干.天干, $("#mpxs-流年副星2").html()),"CSS"));
    $("#mpxs-流年副星3").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年副星3").addClass(干支五行字體顏色(十神五行(命盤.日干.天干, $("#mpxs-流年副星3").html()),"CSS"));

    $("#mpxs-流年納音").removeClass("五行顏色木 五行顏色火 五行顏色土 五行顏色金 五行顏色水");
    $("#mpxs-流年納音").addClass(干支五行字體顏色($("#mpxs-流年納音").html().substr(2,1),"CSS"));

    // ****** clear the 流月 selection ******
    $('.流月干支格子').css('background', '');
    命盤.運行.流月數 = "";
    命盤.運行.流月份 = "";

    // ************** 刷新命盤上流月的顯示 ***********
    for (var j = 0; j <= 11; j++) {
        $("#mpxs-流月" + j + "干支").html(VerticalString(命盤.流月[j].干支, "流月干支字"));
        //var 流月十神Tooltip = "天干: " + 命盤.流月[j].天干十神 + ", 藏干: " + 命盤.流月[j].地支十神1 + " " + 命盤.流月[j].地支十神2 + " " + 命盤.流月[j].地支十神3;
        //$("#mpxs-流月" + j + "干支").prop('title', 流月十神Tooltip);
    }

});  // end 流年格子 on click


$(document).on("click touchstart", ".流月干支格子", function () {
    if (命盤.分析.行運註解.流月用 == 1) {
        $('.流月干支格子').css('background', '#FAFAFA');
        $(this).css('background', 'yellow');
        var 流月數 = $(this).attr("data-流月數");
        命盤.運行.流月數 = 流月數;
        命盤.運行.流月份 = Number(流月數) + 1;
        //$(".流月干支格子").eq(流月數).addClass("運限背景顏色當選");

        命盤.分析.行運註解.流月 = 行運分析模塊(命盤, "流月");
        $("#流月註解").html(命盤.分析.行運註解.流月);
    }
}); //end 流年月格子 on click

$(document).on("dblclick", ".流月干支格子", function () {
    if (命盤.分析.行運註解.流月用 == 1) {
        $('.流月干支格子').css('background', '#FAFAFA');
        $(this).css('background', 'yellow');
        var 流月數 = $(this).attr("data-流月數");
        命盤.運行.流月數 = 流月數;
        命盤.運行.流月份 = Number(流月數) + 1;
        //$(".流月干支格子").eq(流月數).addClass("運限背景顏色當選");

        命盤.分析.行運註解.流月 = 行運分析模塊(命盤, "流月");
        $("#dlg流運分析").html(命盤.分析.行運註解.流月);
        $("#dlg流運分析").dialog('option', 'title', '流月分析：');
        $("#dlg流運分析").dialog("open");
        
    }
}); //end 流年月格子 on double click - dialog !!

