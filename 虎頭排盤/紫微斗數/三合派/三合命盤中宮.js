function Init_三合橫盤 (){

	//$("#DS-AnalysisMenu").hide();
    //$("#DS-AnalysisContent").hide();

	// ********** customize input jumbotron ****************
    // ***********************************************
	//$("#ds-命盤顯示制定").html(命盤元件顯示定制());
	//$("#ds-命盤輔助程式").html(DSAppMenu());

	// ********** setup 輔助程式 **********
	//斗數命盤設計模塊();
	//$("#app-八卦速查").html(八卦萬象速查());

}  // function Init_飛星盤Customization


function 三合橫盤中宮按鍵(設定){
	var sldmn = [];
    sldmn.push('<span class="shhp-中宮按鍵" data-sldmenu="主頁">&nbsp;&nbsp;主頁&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    if(設定.中宮分析) sldmn.push('<span class="shhp-中宮按鍵" data-sldmenu="分析">&nbsp;&nbsp;分析&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    if(設定.中宮八字) sldmn.push('<span class="shhp-中宮按鍵" data-sldmenu="八字">&nbsp;&nbsp;八字&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    sldmn.push('<span class="shhp-中宮按鍵" data-sldmenu="關於">&nbsp;&nbsp;關於&nbsp;&nbsp;</span>');
    return sldmn.join("");
}  // end function 三合橫盤中宮按鍵



// ******************************************


function 中宮橫盤顯示_生日資訊(橫盤中宮資訊元件) {
    
    //dsCenterInfo.push('<img class="displayed" alt="Logo" height="20px" width="280px"  src=' + 系統.版本.CopyrightImg +'>');
    var zgGrid = [];
    zgGrid.push('<table style="width: 520px; height: 400px;" border="0 padding-left ="10px" cellpadding="0" cellspacing="0">');
    zgGrid.push('<tbody>');
    zgGrid.push('<tr><td colspan="8" rowspan="1"><img class="displayed" alt="Logo" height="80px" width="500px" src=' + 橫盤中宮資訊元件.橫幅  + '></tr>');
    zgGrid.push('<tr>');
        zgGrid.push('<td class="shhp-中宮顯示小標題" >姓名：</td>');
        zgGrid.push('<td colspan="3" rowspan="1" id="橫盤中宮姓名" class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.姓名 + '</td>');
        zgGrid.push('<td id="橫盤中宮男女" class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.男女 + '</td>');
        zgGrid.push('<td id="橫盤中宮生肖" class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.生肖 + 系統.設定.運行狀態.錯誤碼 + '</td>');
        zgGrid.push('<td></td>');
        zgGrid.push('<td></td>');
    zgGrid.push('</tr>');
    zgGrid.push('<tr>');
        zgGrid.push('<td class="shhp-中宮顯示小標題" >西曆：</td>');
        zgGrid.push('<td colspan="3" rowspan="1" class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.西曆日期 + '</td>');
        zgGrid.push('<td class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.西曆時 + '</td>');
        zgGrid.push('<td class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.星座 + '</td>');
        zgGrid.push('<td></td>');
        zgGrid.push('<td></td>');
    zgGrid.push('</tr>');
    zgGrid.push('<tr>');
        zgGrid.push('<td class="shhp-中宮顯示小標題" >農曆：</td>');
        zgGrid.push('<td colspan="4" rowspan="1" class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.陰曆 + '</td>');
        //zgGrid.push('<td class="shhp-中宮顯示命盤資料" >五行局：</td>');
        zgGrid.push('<td class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.五行局 + '</td>');
        zgGrid.push('<td></td>');
        zgGrid.push('<td></td>');
    zgGrid.push('</tr>');
    zgGrid.push('<tr>');
        zgGrid.push('<td class="shhp-中宮顯示小標題" >八字：</td>');
        zgGrid.push('<td colspan="4" rowspan="1" class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.八字 + '</td>');
        zgGrid.push('<td class="shhp-中宮顯示命盤資料" ></td>');  //五行局：
        zgGrid.push('<td class="shhp-中宮顯示命盤資料" ></td>');  // 
        zgGrid.push('<td class="shhp-中宮顯示命盤資料" ></td>');  //長流水
    zgGrid.push('</tr>');
    zgGrid.push('<tr>');
        zgGrid.push('<td class="shhp-中宮顯示小標題" >命主：</td>');
        zgGrid.push('<td class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.命主 + '</td>');
        zgGrid.push('<td class="shhp-中宮顯示小標題" >身主：</td>');
        zgGrid.push('<td class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.身主 + '</td>');
        zgGrid.push('<td class="shhp-中宮顯示小標題" >斗君：</td>');
        zgGrid.push('<td class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.斗君 + '</td>');
        zgGrid.push('<td></td>');
        zgGrid.push('<td></td>');
    zgGrid.push('</tr>');
    zgGrid.push('<tr>');
        zgGrid.push('<td class="shhp-中宮顯示小標題" >流年：</td>');
        zgGrid.push('<td colspan="5" rowspan="1" class="shhp-中宮顯示命盤資料" >' + 橫盤中宮資訊元件.流年 + '</td>');
        zgGrid.push('<td></td>');
        zgGrid.push('<td></td>');
    zgGrid.push('</tr>');
    zgGrid.push('<tr>');
        zgGrid.push('<td colspan="4" rowspan="1" class="shhp-中宮顯示小標題" >程式：紫芸居 + 五虎遁</td>');
        zgGrid.push('<td colspan="4" rowspan="1" class="shhp-中宮顯示命盤資料" >版本：' + 橫盤中宮資訊元件.版本 + '</td>');
    zgGrid.push('</tr>');
    zgGrid.push('</tbody>');
    zgGrid.push('</table>');
    
    return zgGrid.join("");
}  //function 中宮顯示_生日資訊


function 中宮橫盤顯示_分析資訊(橫盤中宮分析元件) {
    //dsCenterInfo.push('<img class="displayed" alt="Logo" height="20px" width="280px"  src=' + 系統.版本.CopyrightImg +'>');
    var zgGrid = [];
    zgGrid.push('<table style="width: 520px; height: 400px;" border="0 padding-left ="10px" cellpadding="0" cellspacing="0">');
    zgGrid.push('<tbody>');
    zgGrid.push('<tr><td colspan="3" rowspan="1" class="shhp-中宮顯示分析標題">' + 橫盤中宮分析元件.標題 + '</tr>');
    zgGrid.push('<tr>');
        zgGrid.push('<td id= "橫盤中宮分析_星曜" class="shhp-中宮顯示分析內容">' + 橫盤中宮分析元件.星曜 + '</td>');
        zgGrid.push('<td id= "橫盤中宮分析_格局" class="shhp-中宮顯示格局內容">' + 橫盤中宮分析元件.格局 + '</td>');
    zgGrid.push('</tr>');
    zgGrid.push('<tr>');
        zgGrid.push('<td id= "橫盤中宮分析_吉曜" class="shhp-中宮顯示分析吉曜內容">' + 橫盤中宮分析元件.吉曜 + '</td>');
        zgGrid.push('<td id= "橫盤中宮分析_煞曜" class="shhp-中宮顯示分析煞曜內容">' + 橫盤中宮分析元件.煞曜 + '</td>');
    zgGrid.push('</tr>');
    zgGrid.push('</tbody>');
    zgGrid.push('</table>');
    
    return zgGrid.join("");
}  //function 中宮橫盤顯示_分析資訊


    
function 中宮橫盤顯示_關於(橫盤中宮資訊元件) {
    var zgGrid = [];
    zgGrid.push('<table style="width: 520px; height: 400px;" border="0 padding-left ="10px" cellpadding="0" cellspacing="0">');
    zgGrid.push('<tbody>');
        zgGrid.push('<tr>');
            zgGrid.push('<td class = "shhp-中宮顯示關於Logo"><img class="displayed" alt="Logo" height="150px" width="150px" src=' + 橫盤中宮資訊元件.關於印章 + '></td>');
            zgGrid.push('<td class = "shhp-中宮顯示關於文">');
                zgGrid.push('<span class = "shhp-中宮顯示關於文標題">紫微斗數排盤</span><br>');
                zgGrid.push('<span class = "shhp-中宮顯示關於文小標題">三合派</span><br>');
                zgGrid.push('<span class = "shhp-中宮顯示關於文小標題">傳承.開放.共享.眾力</span>');
            zgGrid.push('</td>');
        zgGrid.push('</tr>');
        zgGrid.push('<tr>');
            zgGrid.push('<td class = "shhp-中宮顯示關於貢獻者">貢獻者：</td>');
            zgGrid.push('<td></td>');
        zgGrid.push('</tr>');
        zgGrid.push('<tr>');
            zgGrid.push('<td colspan="2" rowspan="1" class = "shhp-中宮顯示關於貢獻名單">李文福，詹芸閑</td>');
        zgGrid.push('</tr>');
    zgGrid.push('</tbody>');
    zgGrid.push('</table>');
    
    return zgGrid.join("");
}  //function 中宮顯示_關於
    
// ******************* control panel *******************

function 三合橫盤中宮控制(中宮選項){
    switch (中宮選項) {
        case "主頁":
            $("#三合橫盤中宮_主頁卡").show();
            $("#三合橫盤中宮_分析卡").hide();
            $("#三合橫盤中宮_八字卡").hide();
            $("#三合橫盤中宮_關於卡").hide();
            break;
        case "分析":
            $("#三合橫盤中宮_主頁卡").hide();
            $("#三合橫盤中宮_分析卡").show();
            $("#三合橫盤中宮_八字卡").hide();
            $("#三合橫盤中宮_關於卡").hide();
            break;
        case "八字":
            $("#三合橫盤中宮_主頁卡").hide();
            $("#三合橫盤中宮_分析卡").hide();
            $("#三合橫盤中宮_八字卡").show();
            $("#三合橫盤中宮_關於卡").hide();
            break;
        case "關於":
            $("#三合橫盤中宮_主頁卡").hide();
            $("#三合橫盤中宮_分析卡").hide();
            $("#三合橫盤中宮_八字卡").hide();
            $("#三合橫盤中宮_關於卡").show();
            break; 
    }  // end switch
}  // end function 三合橫盤中宮控制




// ----------------- to delete ----------------

/*
function 三合橫盤中宮基本設計(){
    //<div id="三合橫盤中宮板塊" style="height:480px; width: 580px; background: red;"></div>
	if(系統.設定.用戶設定.命盤顯示.中宮切換) {
		$("#zg-SlideMenu").html(CentralCourtSlideMenuDot());
	} else if(系統.設定.用戶設定.命盤顯示.版本) $("#zg-SlideMenu").html(系統.版本.版本顯示); else $("#zg-SlideMenu").html("");

	if(系統.設定.用戶設定.命盤顯示.版權) $("#info-dev").show(); else $("#info-dev").hide();

	if(系統.設定.用戶設定.命盤顯示.八字) { $("#中宮資訊-八字字").show(); $("#中宮資訊-八字").show(); } else { $("#中宮資訊-八字字").hide(); $("#中宮資訊-八字").hide();	}
	if(系統.設定.用戶設定.命盤顯示.中宮流年) { $("#中宮資訊-流年字").show(); $("#中宮資訊-流年").show(); } else { $("#中宮資訊-流年字").hide(); $("#中宮資訊-流年").hide(); }
    console.log("pua eng seng");
}  // end UI_Customization()

*/