

function 斗數十二宮格() {
	var dsBaseGrid = [];
	dsBaseGrid.push('<table class="ds-十二宮格" border="1" cellpadding="0" cellspacing="0">');
	dsBaseGrid.push('<tbody>');

	dsBaseGrid.push('<tr>');
	dsBaseGrid.push('<td id="ds-DZ-6" class="ds-地支格子">' + 地支宮格(6) + '</td>');
	dsBaseGrid.push('<td id="ds-DZ-7" class="ds-地支格子">' + 地支宮格(7) + '</td>');
	dsBaseGrid.push('<td id="ds-DZ-8" class="ds-地支格子">' + 地支宮格(8) + '</td>');
	dsBaseGrid.push('<td id="ds-DZ-9" class="ds-地支格子">' + 地支宮格(9) + '</td>');
	dsBaseGrid.push('</tr>');

	dsBaseGrid.push('<tr>');
	dsBaseGrid.push('<td id="ds-DZ-5" class="ds-地支格子">' + 地支宮格(5) + '</td>');
	dsBaseGrid.push('<td id="ds-中宮主體" colspan="2" rowspan="2"><div id="ds-中宮板塊" style="height:100%; width: 100%">' + 中宮主體() + '</div></td>');
	dsBaseGrid.push('<td id="ds-DZ-10" class="ds-地支格子">' + 地支宮格(10) + '</td>');
	dsBaseGrid.push('</tr>');

	dsBaseGrid.push('<tr>');
	dsBaseGrid.push('<td id="ds-DZ-4" class="ds-地支格子">' + 地支宮格(4) + '</td>');
	dsBaseGrid.push('<td id="ds-DZ-11" class="ds-地支格子">' + 地支宮格(11) + '</td>');
	dsBaseGrid.push('</tr>');

	dsBaseGrid.push('<tr>');
	dsBaseGrid.push('<td id="ds-DZ-3" class="ds-地支格子">' + 地支宮格(3) + '</td>');
	dsBaseGrid.push('<td id="ds-DZ-2" class="ds-地支格子">' + 地支宮格(2) + '</td>');
	dsBaseGrid.push('<td id="ds-DZ-1" class="ds-地支格子">' + 地支宮格(1) + '</td>');
	dsBaseGrid.push('<td id="ds-DZ-0" class="ds-地支格子">' + 地支宮格(0) + '</td>');
	dsBaseGrid.push('</tr>');

	dsBaseGrid.push('</tbody>');
	dsBaseGrid.push('</table>');

	dsBaseGrid.push('<div id="ds-命盤顯示制定" style="margin-top: 5px; height: auto; width: auto; float:left;"></div>');
	dsBaseGrid.push('<div class="row"></div>');
	dsBaseGrid.push('<div id="ds-命盤輔助程式" style="margin-top: 5px; height: auto; width: auto; float:left;"></div>');

	// 輔助程式Div:
    dsBaseGrid.push('<div class="row"></div>');
    dsBaseGrid.push('<div class="collapse container" id="app-命盤設計" style="height: auto; width: 400px; margin-top: 20px; float: left;"></div>');
    dsBaseGrid.push('<div class="collapse container" id="app-八卦速查" style="height: auto; width: 600px; margin-top: 20px; float: left;"></div>');
    
	return dsBaseGrid.join("");
}


function 地支宮格(宮格數) {

	var dsGrid = [];
	var StarGridPrefix = "星曜格-" + 宮格數 + "-";
	var SiHuaGridPrefix = "四化格-" + 宮格數 + "-";
	var ZiHuaGridPrefix = "自化格-" + 宮格數 + "-";
	dsGrid.push('<table class="ds-宮格" border="0" cellpadding="0" cellspacing="0">');
	dsGrid.push('<tbody>');

	dsGrid.push('<tr>');
	dsGrid.push('<td id="' + StarGridPrefix + '6' +'" class="ds-星曜格子" data-地支數="' + 宮格數 +'">文曲</td>');
	dsGrid.push('<td id="' + StarGridPrefix + '5' +'" class="ds-星曜格子" data-地支數="' + 宮格數 +'">文昌</td>');
	dsGrid.push('<td id="' + StarGridPrefix + '4' +'" class="ds-星曜格子" data-地支數="' + 宮格數 +'">右弼</td>');
	dsGrid.push('<td id="' + StarGridPrefix + '3' +'" class="ds-星曜格子" data-地支數="' + 宮格數 +'">左輔</td>');
	dsGrid.push('<td id="' + StarGridPrefix + '2' +'" class="ds-星曜格子" data-地支數="' + 宮格數 +'">天府</td>');
	dsGrid.push('<td id="' + StarGridPrefix + '1' +'" class="ds-星曜格子" data-地支數="' + 宮格數 +'">紫微</td>');
	dsGrid.push('</tr>');

	dsGrid.push('<tr>');
	dsGrid.push('<td class="ds-生年四化格子"><div id="' + SiHuaGridPrefix + '6' +'"  class="ds-生年四化格式">祿</div></td>');
	dsGrid.push('<td class="ds-生年四化格子"><div id="' + SiHuaGridPrefix + '5' +'"  class="ds-生年四化格式">權</div></td>');
	dsGrid.push('<td class="ds-生年四化格子"><div id="' + SiHuaGridPrefix + '4' +'"  class="ds-生年四化格式">科</div></td>');
	dsGrid.push('<td class="ds-生年四化格子"><div id="' + SiHuaGridPrefix + '3' +'"  class="ds-生年四化格式">忌</div></td>');
	dsGrid.push('<td class="ds-生年四化格子"><div id="' + SiHuaGridPrefix + '2' +'"  class="ds-生年四化格式">祿</div></td>');
	dsGrid.push('<td class="ds-生年四化格子"><div id="' + SiHuaGridPrefix + '1' +'"  class="ds-生年四化格式">權</div></td>');
	dsGrid.push('</tr>');

	// *** 自化 ***
	dsGrid.push('<tr>');
	dsGrid.push('<td class="ds-生年四化格子"><div id="' + ZiHuaGridPrefix + '6' +'"  class="ds-自化格式">祿</div></td>');
	dsGrid.push('<td class="ds-生年四化格子"><div id="' + ZiHuaGridPrefix + '5' +'"  class="ds-自化格式">權</div></td>');
	dsGrid.push('<td class="ds-生年四化格子"><div id="' + ZiHuaGridPrefix + '4' +'"  class="ds-自化格式">科</div></td>');
	dsGrid.push('<td class="ds-生年四化格子"><div id="' + ZiHuaGridPrefix + '3' +'"  class="ds-自化格式">忌</div></td>');
	dsGrid.push('<td class="ds-生年四化格子"><div id="' + ZiHuaGridPrefix + '2' +'"  class="ds-自化格式">祿</div></td>');
	dsGrid.push('<td class="ds-生年四化格子"><div id="' + ZiHuaGridPrefix + '1' +'"  class="ds-自化格式">權</div></td>');
	dsGrid.push('</tr>');

	dsGrid.push('<tr>');
	dsGrid.push('<td></td>');
	dsGrid.push('<td colspan="4" rowspan="1" id="大限宮位-' + 宮格數 +'" class="ds-大限宮位">大兄</td>');
	dsGrid.push('<td id="流年宮位-' + 宮格數 +'" class="ds-流年宮位">命</td>');
	dsGrid.push('</tr>');

	dsGrid.push('<tr>');
	dsGrid.push('<td id="宮干格-' + 宮格數 +'" class="ds-宮格干支字 ds-宮干" data-地支數="' + 宮格數 +'">辛</td>');
	dsGrid.push('<td colspan="3" rowspan="1" id="大限歲數格-' + 宮格數 +'" class="ds-大限歲數" data-地支數="' + 宮格數 +'"><div class="ds-大限歲數板塊">33-42</div></td>');
	dsGrid.push('<td colspan="2" rowspan="1" id="流年歲數格-' + 宮格數 +'" class="ds-流年歲字" data-大運流年歲數="-1">45</td>');
	dsGrid.push('</tr>');

	var 地支參考 = 地支參考元件(宮格數);

	dsGrid.push('<tr>');
	//dsGrid.push('<td class="ds-宮格干支字"><a href="#" data-toggle="tooltip" data-html="true" data-placement="' + ToolTipPlacement + '" title="' + 地支參考 + '"><span id="地支格-' + 宮格數 + '" >巳</span></a></td>');
	dsGrid.push('<td class="ds-宮格干支字"><span id="地支格-' + 宮格數 + '" class="地支-tooltip ds-地支數" title="' + 地支參考 + '">巳</span></td>');
	dsGrid.push('<td colspan="3" rowspan="1" id="宮名格-' + 宮格數 +'" class="ds-宮名字" data-地支數="' + 宮格數 +'">人事宮</td>');
	dsGrid.push('<td colspan="2" rowspan="1" id="流年份格-' + 宮格數 + '" class="ds-流年年字" data-大運流年數="-1">2016</td>');
	//dsGrid.push('<td colspan="2" rowspan="1" ><span id="流年份格-' + 宮格數 + '" class="ds-流年年字" data-大運流年數="-1">2016</span></td>');
	dsGrid.push('</tr>');
	dsGrid.push('</tbody>');
	dsGrid.push('</table>');

	return dsGrid.join("");
} // end function 地支宮格()


function 中宮主體() {

	var dsCenterCourt = [];

	dsCenterCourt.push('<table class="ds-中宮主體" border="0" cellpadding="0" cellspacing="0">');
	dsCenterCourt.push('<tbody>');
	// Row - 1
	dsCenterCourt.push('<tr>');
	dsCenterCourt.push('<td class="ds-流出格子"><span id="流出格-6-1" class="ds-流出格式">祿</span></td>');
	dsCenterCourt.push('<td colspan="3" rowspan="1"><span id="流出格-7-1" class="ds-流出格式">祿</span><span id="流出格-7-2" class="ds-流出格式">權</span><span id="流出格-7-3" class="ds-流出格式">忌</span></td>');
	dsCenterCourt.push('<td></td>');
	dsCenterCourt.push('<td></td>');
	dsCenterCourt.push('<td colspan="3" rowspan="1"><span id="流出格-8-1" class="ds-流出格式">祿</span><span id="流出格-8-2" class="ds-流出格式">權</span><span id="流出格-8-3" class="ds-流出格式">忌</span></td>');
	dsCenterCourt.push('<td class="ds-流出格子"><span id="流出格-9-1" class="ds-流出格式">祿</span></td>');
	dsCenterCourt.push('</tr>');

	// Row - 2
	dsCenterCourt.push('<tr>');
	dsCenterCourt.push('<td class="ds-流出格子"><span id="流出格-6-3" class="ds-流出格式">權</span></td>');
	dsCenterCourt.push('<td class="ds-流出格子"><span id="流出格-6-2" class="ds-流出格式">忌</span></td>');
	dsCenterCourt.push('<td colspan="6" rowspan="1"></td>');
	dsCenterCourt.push('<td class="ds-流出格子"><span id="流出格-9-2" class="ds-流出格式">權</span></td>');
	dsCenterCourt.push('<td class="ds-流出格子"><span id="流出格-9-3" class="ds-流出格式">忌</span></td>');
	dsCenterCourt.push('</tr>');

	// Row - 3
	dsCenterCourt.push('<tr>');
	dsCenterCourt.push('<td colspan="1" rowspan="4"><span id="流出格-5-1" class="ds-流出格式">祿</span><span id="流出格-5-3" class="ds-流出格式">權</span><span id="流出格-5-3" class="ds-流出格式">忌</span></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	dsCenterCourt.push('<td colspan="8" rowspan="10" id="ds-中宮資訊格子">' + 中宮資訊格子() + '</td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	dsCenterCourt.push('<td colspan="1" rowspan="4"><span id="流出格-10-1" class="ds-流出格式">祿</span><span id="流出格-10-2" class="ds-流出格式">權</span><span id="流出格-10-3" class="ds-流出格式">忌</span></td>');
	dsCenterCourt.push('</tr>');

	// Row - 4
	dsCenterCourt.push('<tr>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	dsCenterCourt.push('</tr>');
	
	// Row - 5
	dsCenterCourt.push('<tr>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	dsCenterCourt.push('</tr>');
	
	// Row - 6
	dsCenterCourt.push('<tr>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	dsCenterCourt.push('</tr>');
	
	// Row - 7
	dsCenterCourt.push('<tr>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	dsCenterCourt.push('</tr>');
	
	// Row - 8
	dsCenterCourt.push('<tr>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	dsCenterCourt.push('</tr>');

	dsCenterCourt.push('<tr>');
	dsCenterCourt.push('<td colspan="1" rowspan="4"><span id="流出格-4-1" class="ds-流出格式">祿</span><span id="流出格-4-2" class="ds-流出格式">權</span><span id="流出格-4-3" class="ds-流出格式">忌</span></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	dsCenterCourt.push('<td colspan="1" rowspan="4"><span id="流出格-11-1" class="ds-流出格式">祿</span><span id="流出格-11-2" class="ds-流出格式">權</span><span id="流出格-11-3" class="ds-流出格式">忌</span></td>');
	dsCenterCourt.push('</tr>');
	dsCenterCourt.push('<tr>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	dsCenterCourt.push('</tr>');

	dsCenterCourt.push('<tr>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	dsCenterCourt.push('</tr>');
	
	dsCenterCourt.push('<tr>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	//dsCenterCourt.push('<td class="ds-流出格子"></td>');
	dsCenterCourt.push('</tr>');

	dsCenterCourt.push('<tr>');
	dsCenterCourt.push('<td class="ds-流出格子"><span id="流出格-3-3" class="ds-流出格式">祿</span></td>');
	dsCenterCourt.push('<td class="ds-流出格子"><span id="流出格-3-2" class="ds-流出格式">祿</span></td>');
	dsCenterCourt.push('<td colspan="6" rowspan="1"><div id="zg-SlideMenu" class="ds-中宮資訊格式">大眾版</div></td>');
	dsCenterCourt.push('<td class="ds-流出格子"><span id="流出格-0-2" class="ds-流出格式">祿</span></td>');
	dsCenterCourt.push('<td class="ds-流出格子"><span id="流出格-0-3" class="ds-流出格式">祿</span></td>');
	dsCenterCourt.push('</tr>');

	dsCenterCourt.push('<tr>');
	dsCenterCourt.push('<td class="ds-流出格子"><span id="流出格-3-1" class="ds-流出格式">祿</span></td>');
	dsCenterCourt.push('<td colspan="3" rowspan="1"><span id="流出格-2-1" class="ds-流出格式">祿</span><span id="流出格-2-2" class="ds-流出格式">權</span><span id="流出格-2-3" class="ds-流出格式">忌</span></td>');
	dsCenterCourt.push('<td></td>');
	dsCenterCourt.push('<td></td>');
	dsCenterCourt.push('<td colspan="3" rowspan="1"><span id="流出格-1-1" class="ds-流出格式">祿</span><span id="流出格-1-2" class="ds-流出格式">權</span><span id="流出格-1-3" class=ds-流出格式">忌</span></td>');
	dsCenterCourt.push('<td class="ds-流出格子"><span id="流出格-0-1" class="ds-流出格式">祿</span></td>');
	dsCenterCourt.push('</tr>');

	dsCenterCourt.push('</tbody>');
	dsCenterCourt.push('</table>');

	return dsCenterCourt.join("");
}  // end function 中宮主體


function 中宮資訊格子() {
	var dsCenterInfo = [];

	dsCenterInfo.push('<div id="Menu-中宮資訊" class="container-fluid ds-中宮資訊格式">');
		dsCenterInfo.push('<div class="col-md-12">');
			dsCenterInfo.push('<img class="displayed" alt="Logo" height="100px" width="280px" style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px; vertical-align: top;" src=' + 系統.版本.HeaderImg +'>');
			dsCenterInfo.push('<br><br>');
		dsCenterInfo.push('</div>');  // end image

		dsCenterInfo.push('<table style="text-align: center; width: 100%;" border="0" cellpadding="0" cellspacing="0">');
		dsCenterInfo.push('<tbody>');

		dsCenterInfo.push('<tr>');
			dsCenterInfo.push('<td style="text-align: right; width: 23%;"> 命主：</td>');
			dsCenterInfo.push('<td style="text-align: left; width: 75%;" id="中宮資訊-命主">陽男 陳大春</td>');
		dsCenterInfo.push('</tr>');

		dsCenterInfo.push('<tr>');
			dsCenterInfo.push('<td style="text-align: right; width: 23%;"> 陽曆：</td>');
			dsCenterInfo.push('<td style="text-align: left; width: 75%;" id="中宮資訊-陽曆生日">陽曆</td>');
		dsCenterInfo.push('</tr>');

		dsCenterInfo.push('<tr>');
			dsCenterInfo.push('<td style="text-align: right; width: 23%;"> 陰曆：</td>');
			dsCenterInfo.push('<td style="text-align: left; width: 75%;" id="中宮資訊-陰曆生日">陰曆</td>');
		dsCenterInfo.push('</tr>');

		dsCenterInfo.push('<tr>');
			dsCenterInfo.push('<td style="text-align: right; width: 23%;"> 命局：</td>');
			dsCenterInfo.push('<td style="text-align: left; width: 75%;" id="中宮資訊-五行局">五行局</td>');
		dsCenterInfo.push('</tr>');

		dsCenterInfo.push('<tr>');
			dsCenterInfo.push('<td style="text-align: right; width: 23%;" id="中宮資訊-八字字"> 八字：</td>');
			dsCenterInfo.push('<td style="text-align: left; width: 75%;" id="中宮資訊-八字">八字</td>');
		dsCenterInfo.push('</tr>');

		dsCenterInfo.push('<tr>');
			dsCenterInfo.push('<td style="text-align: right; width: 23%;" id="中宮資訊-流年字"> 流年：</td>');
			dsCenterInfo.push('<td style="text-align: left; width: 75%;" id="中宮資訊-流年">丙申2016，45歲</td>');
		dsCenterInfo.push('</tr>');

		dsCenterInfo.push('<tr>');
			dsCenterInfo.push('<td style="text-align: right; width: 23%;"></td>');
			dsCenterInfo.push('<td style="text-align: left; width: 75%;" id="中宮資訊-流年十神">丙申年，走七殺運</td>');
		dsCenterInfo.push('</tr>');

		dsCenterInfo.push('</tbody>');
		dsCenterInfo.push('</table>');

		dsCenterInfo.push('<div id="info-dev" class="Snapbottom">');
			dsCenterInfo.push('<img class="displayed" alt="Logo" height="20px" width="280px"  src=' + 系統.版本.CopyrightImg +'>');
		dsCenterInfo.push('</div>');
	dsCenterInfo.push('</div>');  // end 中宮資訊格子

	// ********** additional menu, to be hiddhen at initializaiton ****************
	dsCenterInfo.push('<div id="Menu-中宮提示" class="ds-提示卡"></div>');

	return dsCenterInfo.join("");
}  //end function 中宮資訊格子


function CentralCourtSlideMenuDot(){
	var sldmn = [];
		sldmn.push('<table style="text-align: center; width: 100%;" border="0" cellpadding="0" cellspacing="0">');
		sldmn.push('<tbody>');

		sldmn.push('<tr>');
			sldmn.push('<td style="text-align: center;"><span class="zgSldMenuDot" data-sldmenu="1">&nbsp;1&nbsp;</span></td>');
			sldmn.push('<td style="text-align: center;"><span class="zgSldMenuDot" data-sldmenu="2">&nbsp;2&nbsp;</span></td>');
			sldmn.push('<td style="text-align: center;"><span class="zgSldMenuDot" data-sldmenu="3">&nbsp;3&nbsp;</span></td>');
			sldmn.push('<td style="text-align: center;"><span class="zgSldMenuDot" data-sldmenu="4">&nbsp;4&nbsp;</span></td>');
			//sldmn.push('<td style="text-align: center;"><span class="zgSldMenuDot" data-sldmenu="5">&nbsp;5&nbsp;</span></td>');
			//sldmn.push('<td style="text-align: center;"><span class="zgSldMenuDot" data-sldmenu="6">&nbsp;6&nbsp;</span></td>');
		sldmn.push('</tr>');

		sldmn.push('</tbody>');
		sldmn.push('</table>');

		return sldmn.join("");
}  // function CentralCourtSlideMenuDot