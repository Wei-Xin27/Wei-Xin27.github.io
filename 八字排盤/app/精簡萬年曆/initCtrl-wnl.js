
function 初始化萬年曆輸入 () {
	var selyear = document.getElementById('sel萬年曆輸入年');
	var selmonth = document.getElementById('sel萬年曆輸入月');
	var selday = document.getElementById('sel萬年曆輸入日');
	var selHour = document.getElementById('sel萬年曆輸入時');
	var selMinutes = document.getElementById('sel萬年曆輸入分');
	var selCity = document.getElementById('selCity');
	//var chk節氣轉換區域時間 = document.getElementByName('chk節氣轉換區域');
	//var chk節氣轉換真太陽時 = document.getElementByName('chk節氣轉真太陽時');
	
	for(var i = 1924; i < 2047; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = i;
		opt.value = i;
		selyear.appendChild(opt);
	} //end for

	for(var i = 1; i <=12; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = i;
		opt.value = i;
		selmonth.appendChild(opt);
	} //end for

	for(var i = 1; i <=31; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = i;
		opt.value = i;
		selday.appendChild(opt);
	} //end for

	for(var i = 0; i <=23; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = zeroPad(i,2) + "（" + 西時轉地支時(i) + "）";
		opt.value = i;
		selHour.appendChild(opt);
	} //end for

	for(var i = 0; i <=59; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = i;
		opt.value = i;
		selMinutes.appendChild(opt);
	} //end for
	
	// load city
	var Cities=城市數據();
	for(var i = 0; i < Cities.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = Cities[i].City;
		opt.value = Cities[i].City;
		//selHour.appendChild(opt);
		selCity.appendChild(opt);
	} //end for


	// ------------------- 節氣表 ------------------------------
	$("#jswnl-xs-節氣表").html(GenJieQiTable());
	$("#jswnl-xs-干支曆").hide();
	$("#jswnl-xs-干支曆簡析").hide();
	$("#jswnl-xs-節氣細節").hide();
	$("#jswnl-xs-參考資料").hide();
	$("#jswnl-xs-五行資料").hide();
	//
}




function 刷新節氣日期時間(節氣DateOjbArray){
	var wnlyear=節氣DateOjbArray[0].Year;
	var wnlGanZhi=六十干支屬性((wnlyear-1923)%60, "干支");

	$("#jsxs-年份標題").html(中文數字(wnlyear) + " " + wnlGanZhi + " 年");
	for(var i=0; i<24; i++){
		$("#jsxs-節氣日期"+i).html(節氣DateOjbArray[i].月日);
		$("#jsxs-節氣時間"+i).html(節氣DateOjbArray[i].時分);
	}
}

function 刷新干支曆(萬年曆){

	// 干支八字
	$("#wnl-年干").html(萬年曆.干支曆.年柱.substr(0,1));
	$("#wnl-年支").html(萬年曆.干支曆.年柱.substr(1,1));
	$("#wnl-月干").html(萬年曆.干支曆.月柱.substr(0,1));
	$("#wnl-月支").html(萬年曆.干支曆.月柱.substr(1,1));
	$("#wnl-日干").html(萬年曆.干支曆.日柱.substr(0,1));
	$("#wnl-日支").html(萬年曆.干支曆.日柱.substr(1,1));
	$("#wnl-時干").html(萬年曆.干支曆.時柱.substr(0,1));
	$("#wnl-時支").html(萬年曆.干支曆.時柱.substr(1,1));

	var 西曆字串1="西曆：" + 萬年曆.輸入日期.西曆;
	var 閏年字串=(萬年曆.農曆.閏年)? "閏年，" : "";
	var 西曆字串2=閏年字串 + 萬年曆.干支曆.四季 + "季，" + 萬年曆.農曆.星期天 + "，第" + 萬年曆.農曆.天數 + "天，第" + 萬年曆.農曆.週數 + "週";
	var 農曆年後字串=(萬年曆.農曆.距離初一的天數==0)? "當" : "後" + 萬年曆.農曆.距離初一的天數;
	var 農曆字串1="農曆：" + 萬年曆.農曆.日期;
	var 農曆字串2=萬年曆.農曆.月大小 + "，農曆新年" + 農曆年後字串 + "天";
	var 交節日字串=(萬年曆.干支曆.交節)? "當天為" + 萬年曆.干支曆.交節日節令 + "的交節日" : "";

	$("#jswnl-xs-西曆簡析-1").html(西曆字串1);
	$("#jswnl-xs-西曆簡析-2").html(西曆字串2);
	$("#jswnl-xs-農曆簡析-1").html(農曆字串1);
	$("#jswnl-xs-農曆簡析-2").html(農曆字串2);
	$("#jswnl-xs-農曆簡析-3").html(交節日字串);

	// ************ 節 氣 參 考 ************
	var 立春距離字串=(萬年曆.干支曆.距離立春天數==0) ? "立春當天" : "立春後" + 萬年曆.干支曆.距離立春天數 + "天";
	$("#jswnl-xs-節令名").html("節令：" + 萬年曆.干支曆.節令);
	$("#jswnl-xs-節氣名").html("節氣：" + 萬年曆.干支曆.節氣);
	$("#jswnl-xs-立春距離").html(立春距離字串);

	$("#jswnl-xs-當下節令距離").html("當下節令：" + 萬年曆.干支曆.當下節令字串);
	$("#jswnl-xs-下個節令距離").html("下個節令：" + 萬年曆.干支曆.下個節令字串);

	var 節氣屬性=二十四節氣屬性(萬年曆.干支曆.節氣, "元件");
	var 七十二候集解 = "<br>"+節氣屬性.月令七十二候集解;
	$("#jswnl-xs-節氣註解").html(節氣屬性.註解);
	$("#jswnl-xs-節氣三候").html(節氣屬性.三候);
	$("#jswnl-xs-月令七十二候集解").html(七十二候集解);


	// ************ 五 行 參 考 ************
	var 人元司令 = 人元司令分野(萬年曆.干支曆.節令, 萬年曆.干支曆.距離節令的天數);
	var 節氣司令天數 = (萬年曆.干支曆.距離節令的天數==0) ? "當天出生，" : "後" + 萬年曆.干支曆.距離節令的天數 + "天出生，";
	var 人元司令字串 = 萬年曆.干支曆.節令 + 節氣司令天數 + 人元司令 + 天干屬性(人元司令, "五行") + "當令。";
	$("#jswnl-xs-人元司令").html(人元司令字串);
	$("#jswnl-xs-提綱十二支分論").html(地支特性(萬年曆.干支曆.月令, "提綱分論"));
	
}

$(document).on("click tap", "#btn-當下時間", function () {
	var CurDate = new Date();
	$("#sel萬年曆輸入年").val(CurDate.getFullYear());
	$("#sel萬年曆輸入月").val(CurDate.getMonth()+1);
	$("#sel萬年曆輸入日").val(CurDate.getDate());
	$("#sel萬年曆輸入時").val(CurDate.getHours());
	$("#sel萬年曆輸入分").val(CurDate.getMinutes());

});

$(document).on("click tap", "#btn-命盤時間", function () {
	$("#sel萬年曆輸入年").val($("#InputYear").val());
	$("#sel萬年曆輸入月").val(Number($("#InputMonth").val()));
	$("#sel萬年曆輸入日").val($("#InputDay").val());
	$("#sel萬年曆輸入時").val(Number($("#InputHour").val()));
	$("#sel萬年曆輸入分").val(Number($("#InputMinute").val()));
});

$(document).on("click tap", "#btn-萬年曆", function () {
	//read input date

	var 萬年曆輸入={
		"年": $("#sel萬年曆輸入年").val(),
		"月": $("#sel萬年曆輸入月").val(),
		"日": $("#sel萬年曆輸入日").val(),
		"時": $("#sel萬年曆輸入時").val(),
		"分": $("#sel萬年曆輸入分").val(),
		"城市": $("#selCity").val(),
		"夜子時": getCheckboxStatus("chk夜子時"),
		"節氣用區域時間": getCheckboxStatus("chk節氣轉換區域"),
		"節氣用真太陽時": getCheckboxStatus("chk節氣轉真太陽時"),


		//var DateStr=$("#sel萬年曆輸入年").val() + "-" + $("#sel萬年曆輸入月").val() + "-" + $("#sel萬年曆輸入日").val();
		//var TimeStr=$("#sel萬年曆輸入時").val() + ":" + $("#sel萬年曆輸入分").val();
		//var 查詢日期=zeroPad($("#sel萬年曆輸入日").val(), 2) + zeroPad($("#sel萬年曆輸入月").val(), 2) + zeroPad($("#sel萬年曆輸入年").val(), 4) + zeroPad($("#sel萬年曆輸入時").val(), 2) + zeroPad($("#sel萬年曆輸入分").val(), 2) + "00";
		
		"運算西曆": 日期值轉換(zeroPad($("#sel萬年曆輸入日").val(), 2) + zeroPad($("#sel萬年曆輸入月").val(), 2) + zeroPad($("#sel萬年曆輸入年").val(), 4) + zeroPad($("#sel萬年曆輸入時").val(), 2) + zeroPad($("#sel萬年曆輸入分").val(), 2) + "00", 1),
		
		"節氣矩陣": 年份節氣表($("#sel萬年曆輸入年").val(), $("#selCity").val(), getCheckboxStatus("chk節氣轉換區域"), getCheckboxStatus("chk節氣轉真太陽時"), "節氣矩陣")
	}
	//console.log(萬年曆輸入);
	$("#jswnl-xs-干支曆").show();
	$("#jswnl-xs-干支曆簡析").show();
	$("#jswnl-xs-節氣細節").show();
	$("#jswnl-xs-參考資料").show();
	$("#jswnl-xs-五行資料").show();

	刷新節氣日期時間(萬年曆輸入.節氣矩陣);

	var 萬年曆={
		"干支曆": 西曆轉換干支曆(萬年曆輸入),
		"農曆": 西曆轉換農曆(萬年曆輸入.運算西曆, 萬年曆輸入.城市, 萬年曆輸入.夜子時, false, false, false, false),
		"輸入資料": 萬年曆輸入,
		"輸入日期": new 日期格式(萬年曆輸入.運算西曆)
	}
	//console.log(萬年曆);

	刷新干支曆(萬年曆);
	//console.log(萬年曆);
	//var ppp= 西曆轉換干支曆(萬年曆輸入.查詢日期, 萬年曆輸入.城市, 萬年曆輸入.夜子時, 萬年曆輸入.節氣轉換區域時間, 萬年曆輸入.節氣轉換真太陽時, false, false);
	//var qqq= 西曆轉換農曆(萬年曆輸入.查詢日期, 萬年曆輸入.城市, 萬年曆輸入.夜子時, false, false, false, false);
// -----------------------------------------

});



function GenJieQiTable(){
    var JieQiTable = [];
    JieQiTable.push('<br>');
    JieQiTable.push('<table style="text-align: left;" border="1" cellpadding="8" cellspacing="0">');
    JieQiTable.push('<tbody>');
    JieQiTable.push('<tr>');
    JieQiTable.push('<td colspan="1" rowspan="11" style="vertical-align: middle; text-align: center; width:40px;" class="精簡萬年曆標題">二<br>十<br>四<br>節<br>氣</td>');
    JieQiTable.push('<tr>');
    JieQiTable.push('<td colspan="12" rowspan="1" style="vertical-align: top; font-weight: bold; text-align: center;" id="jsxs-年份標題" class="精簡萬年曆標題">xxx 年</td>');
    JieQiTable.push('</tr>');
    JieQiTable.push('<td colspan="3" rowspan="1" style="vertical-align: top; background-color: rgb(51, 255, 51); font-weight: bold; text-align: center;" class="節氣Font">春季</td>');
    JieQiTable.push('<td colspan="3" rowspan="1" style="vertical-align: top; background-color: red; font-weight: bold; text-align: center;" class="節氣Font">夏季</td>');
    JieQiTable.push('<td colspan="3" rowspan="1" style="vertical-align: top; background-color: rgb(255, 204, 102); font-weight: bold; text-align: center;" class="節氣Font">秋季</td>');
    JieQiTable.push('<td colspan="3" rowspan="1" style="vertical-align: top; background-color: rgb(51, 204, 255); font-weight: bold; text-align: center;" class="節氣Font">冬季</td>');
    JieQiTable.push('</tr>');
    JieQiTable.push('<tr>');
    JieQiTable.push('<td class="節氣TblCell">正月</td>');
    JieQiTable.push('<td class="節氣TblCell">二月</td>');
    JieQiTable.push('<td class="節氣TblCell">三月</td>');
    JieQiTable.push('<td class="節氣TblCell">四月</td>');
    JieQiTable.push('<td class="節氣TblCell">五月</td>');
    JieQiTable.push('<td class="節氣TblCell">六月</td>');
    JieQiTable.push('<td class="節氣TblCell">七月</td>');
    JieQiTable.push('<td class="節氣TblCell">八月</td>');
    JieQiTable.push('<td class="節氣TblCell">九月</td>');
    JieQiTable.push('<td class="節氣TblCell">十月</td>');
    JieQiTable.push('<td class="節氣TblCell">十一月</td>');
    JieQiTable.push('<td class="節氣TblCell">十二月</td>');
    JieQiTable.push('</tr>');
    JieQiTable.push('<tr>');
    JieQiTable.push('<td class="節氣TblCell">寅月 </td>');
    JieQiTable.push('<td class="節氣TblCell">卯月 </td>');
    JieQiTable.push('<td class="節氣TblCell">辰月 </td>');
    JieQiTable.push('<td class="節氣TblCell">巳月 </td>');
    JieQiTable.push('<td class="節氣TblCell">午月 </td>');
    JieQiTable.push('<td class="節氣TblCell">未月 </td>');
    JieQiTable.push('<td class="節氣TblCell">申月 </td>');
    JieQiTable.push('<td class="節氣TblCell">酉月 </td>');
    JieQiTable.push('<td class="節氣TblCell">戌月 </td>');
    JieQiTable.push('<td class="節氣TblCell">亥月 </td>');
    JieQiTable.push('<td class="節氣TblCell">子月 </td>');
    JieQiTable.push('<td class="節氣TblCell">丑月 </td>');
    JieQiTable.push('</tr>');
    JieQiTable.push('<tr>');
    JieQiTable.push('<td class="節氣標題 節氣Font">立春</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">驚蟄</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">清明</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">立夏</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">芒種</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">小暑</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">立秋</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">白露</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">寒露</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">立冬</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">大雪</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">小寒</td>');
    JieQiTable.push('</tr>');
    JieQiTable.push('<tr>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期0" data-節氣日期="立春"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期2" data-節氣日期="驚蟄"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期4" data-節氣日期="清明"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期6" data-節氣日期="立夏"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期8" data-節氣日期="芒種"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期10" data-節氣日期="小暑"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期12" data-節氣日期="立秋"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期14" data-節氣日期="白露"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期16" data-節氣日期="寒露"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期18" data-節氣日期="立冬"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期20" data-節氣日期="大雪"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期22" data-節氣日期="小寒"></td>');
    JieQiTable.push('</tr>');
    JieQiTable.push('<tr>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間0" data-節氣時間="立春"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間2" data-節氣時間="驚蟄"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間4" data-節氣時間="清明"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間6" data-節氣時間="立夏"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間8" data-節氣時間="芒種"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間10" data-節氣時間="小暑"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間12" data-節氣時間="立秋"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間14" data-節氣時間="白露"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間16" data-節氣時間="寒露"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間18" data-節氣時間="立冬"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間20" data-節氣時間="大雪"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間22" data-節氣時間="小寒"></td>');
    JieQiTable.push('</tr>');
    JieQiTable.push('<tr>');
    JieQiTable.push('<td class="節氣標題 節氣Font">雨水</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">春分</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">穀雨</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">小滿</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">夏至</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">大暑</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">處暑</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">秋分</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">霜降</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">小雪</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">冬至</td>');
    JieQiTable.push('<td class="節氣標題 節氣Font">大寒</td>');
    JieQiTable.push('</tr>');
    JieQiTable.push('<tr>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期1" data-節氣日期="雨水"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期3" data-節氣日期="春分"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期5" data-節氣日期="穀雨"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期7" data-節氣日期="小滿"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期9" data-節氣日期="夏至"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期11" data-節氣日期="大暑"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期13" data-節氣日期="處暑"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期15" data-節氣日期="秋分"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期17" data-節氣日期="霜降"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期19" data-節氣日期="小雪"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期21" data-節氣日期="冬至"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣日期Font" id="jsxs-節氣日期23" data-節氣日期="大寒"></td>');
    JieQiTable.push('</tr>');
    JieQiTable.push('<tr>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間1" data-節氣時間="雨水"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間3" data-節氣時間="春分"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間5" data-節氣時間="穀雨"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間7" data-節氣時間="小滿"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間9" data-節氣時間="夏至"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間11" data-節氣時間="大暑"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間13" data-節氣時間="處暑"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間15" data-節氣時間="秋分"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間17" data-節氣時間="霜降"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間19" data-節氣時間="小雪"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間21" data-節氣時間="冬至"></td>');
    JieQiTable.push('<td class="節氣TblCell 節氣時間Font" id="jsxs-節氣時間23" data-節氣時間="大寒"></td>');
    JieQiTable.push('</tr>');
    JieQiTable.push('</tbody>');
    JieQiTable.push('</table>');

    return JieQiTable.join("");
}
