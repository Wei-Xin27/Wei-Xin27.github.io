function Init_Customization (){

	$("#DS-AnalysisMenu").hide();
    $("#DS-AnalysisContent").hide();

	// ********** customize input jumbotron ****************
    // ***********************************************
	$("#ds-命盤顯示制定").html(命盤元件顯示定制());
	$("#ds-命盤輔助程式").html(DSAppMenu());

	// ********** setup 輔助程式 **********
	斗數命盤設計模塊();
	$("#app-八卦速查").html(八卦萬象速查());

}  // Init_Customization ()


function 命盤元件顯示定制(){
	var 制定內容 =[];
	制定內容.push('<span id="ds-hide_chart_items">命盤隱藏：');
	制定內容.push('<input type="checkbox" class="ds-hide_chart_item" name="ds-hide_chart_item" id="ds-hide_chart_item-星曜" value="星曜">星曜&nbsp&nbsp&nbsp');
	制定內容.push('<input type="checkbox" class="ds-hide_chart_item" name="ds-hide_chart_item" id="ds-hide_chart_item-自化流出" value="自化流出">自化流出&nbsp&nbsp&nbsp');
	制定內容.push('<input type="checkbox" class="ds-hide_chart_item" name="ds-hide_chart_item" id="ds-hide_chart_item-中宮選項" value="中宮選項">中宮選項&nbsp&nbsp&nbsp');
	制定內容.push('</span>');

	return 制定內容.join("");
}  // end function 命盤輸入定制



function UI_Customization (){

	if(系統.設定.用戶設定.命盤顯示.中宮切換) {
		$("#zg-SlideMenu").html(CentralCourtSlideMenuDot());
	} else if(系統.設定.用戶設定.命盤顯示.版本) $("#zg-SlideMenu").html(系統.版本.版本顯示); else $("#zg-SlideMenu").html("");

	if(系統.設定.用戶設定.命盤顯示.版權) $("#info-dev").show(); else $("#info-dev").hide();

	if(系統.設定.用戶設定.命盤顯示.八字) { $("#中宮資訊-八字字").show(); $("#中宮資訊-八字").show(); } else { $("#中宮資訊-八字字").hide(); $("#中宮資訊-八字").hide();	}
	if(系統.設定.用戶設定.命盤顯示.中宮流年) { $("#中宮資訊-流年字").show(); $("#中宮資訊-流年").show(); } else { $("#中宮資訊-流年字").hide(); $("#中宮資訊-流年").hide();	}

	// ********** setup 中宮 slide sub-menu **********
	
	$("#Menu-中宮提示").html(中宮提示卡());
	$("#Menu-中宮提示").hide();

}  // end UI_Customization()




// ************ 中宮 section ××××××××××××××

function 中宮提示卡(){
	var dsTSKGrid = [];  //TSK 提示卡
		dsTSKGrid.push('<table class="ds-提示表格" border="1" cellpadding="0" cellspacing="0">');
		dsTSKGrid.push('<tbody>');

		dsTSKGrid.push('<tr><td id="ds-TSK-提示標題" class="ds-提示標題">宮位、星曜、四化提示</td></tr>');
		dsTSKGrid.push('<tr><td id="ds-TSK-提示內容" class="ds-提示內容">提示內容：</td></tr>');
		dsTSKGrid.push('</tbody>');
		dsTSKGrid.push('</table>');

	return dsTSKGrid.join("");
}


// ************ 輔助程式 menu××××××××××××××

function DSAppMenu(){
    var AppMenuContent=[];

    AppMenuContent.push('<div class="container App hidden-print" style="height: auto; width: 500px; margin-top: 10px; float: left;">');
    AppMenuContent.push('<div class="row">');
    AppMenuContent.push('<div class="col-md-12">');

    AppMenuContent.push('<button id="btn-命盤設計" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-命盤設計">命盤設計</button>');
    AppMenuContent.push('<button id="btn-八卦速查" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-八卦速查">八卦速查</button>');
    //AppMenuContent.push('<button id="btn-十神格個性" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-十神格個性">十神格</button>');
    //AppMenuContent.push('<button id="btn-經典參考" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#ref-經典參考">經典參考</button>');
    //AppMenuContent.push('<button id="btn-八字流年表" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#ref-八字流年表">流年表</button>');

    AppMenuContent.push('</div>');
    AppMenuContent.push('</div>');
    AppMenuContent.push('</div>');

    return AppMenuContent.join("");
}
