// ****
function 斗數命盤設計模塊(){
	// *********** 導入 UI *************
	$("#app-命盤設計").html(斗數命盤設計UI());

	填寫十天干("DS-ChartDesign-生年天干");
	填寫十二地支("DS-ChartDesign-命宮");
	填寫十二地支("DS-ChartDesign-紫微");
	填寫十二地支("DS-ChartDesign-文昌");
	填寫十二地支("DS-ChartDesign-天喜", "-");
	填寫十二地支("DS-ChartDesign-三台", "-");
	填寫選項("DS-ChartDesign-生月", [1,2,3,4,5,6,7,8,9,10,11,12]);

	$("#DS-ChartDesign-天喜").val("-");  //deselect drom dropdown, since it is optional
	$("#DS-ChartDesign-三台").val("-");
	$("#DS-ChartDesign-生月").val(0);
	$("#DS-ChartDesignResultTitle").hide();
	$("#DS-ChartDesignResult").hide();

	//$("#DS-ChartDesign-生月").val(9);
	//$("#DS-ChartDesign-生年天干").val("壬");
	//$("#DS-ChartDesign-命宮").val("卯");
	//$("#DS-ChartDesign-文昌").val("巳");
	//$("#DS-ChartDesign-紫微").val("辰");

	$('#DS-ChartDesign-模擬盤').html(模擬命盤UI());

	var 設計盤主星 = 斗數命盤設計主星排列($("#DS-ChartDesign-紫微").val());
	斗數命盤設計排列主星模擬盤(設計盤主星);
    
    斗數命盤設計宮干(天干字數轉換($("#DS-ChartDesign-生年天干").val()));
    斗數命盤設計命宮(地支字數轉換($("#DS-ChartDesign-命宮").val()));
    
}  //end function 斗數命盤設計模塊


function 斗數命盤設計反算生日(生年宮干, 命宮地支, 紫微地支, 文昌地支, 天喜地支, 三台地支){
	var 設計盤地支=[];
	var 設計盤命宮地支數, 設計盤命宮干支;
	var 設計盤生年, 設計盤生月, 設計盤生時;

	for(var i=0; i<12; i++) 設計盤地支.push(new 設計盤地支元件(i));
	填寫宮干四化(設計盤地支, 天干字數轉換(生年宮干));

	設計盤命宮地支數 = 地支字數轉換(命宮地支);
	設計盤命宮干支 = 設計盤地支[設計盤命宮地支數].宮干 + 命宮地支;

	設計盤五行局 = 尋五行局(天干字數轉換(設計盤命宮干支.substr(0,1)), 設計盤命宮地支數);
	設計盤生時 = 文昌逆尋生時(文昌地支);
	//設計盤生時 = 文昌逆尋生時($("#DS-ChartDesign-文昌").val());

	設計盤生月 = 命宮地支生時逆尋生月(設計盤命宮地支數, 設計盤生時);
	設計盤生月 = (設計盤生月!=0) ? 設計盤生月 : 12;

	var 設計盤生年 = 年干尋生年(生年宮干);
	var 設計盤生日 = 紫微尋生日(紫微地支, 設計盤五行局);
	var 左輔地支數 = 地支滾動(5, (設計盤生月-1)); //亥月 is 0
	var 天喜地支 = $("#DS-ChartDesign-天喜").val();
	var 三台地支 = $("#DS-ChartDesign-三台").val();
	

	if(天喜地支!=undefined && 天喜地支!="-") {
		var 生年支數 = 天喜地支逆尋生年支(天喜地支);
		var 天喜斷生年 = [];
		//console.log(生年支數);
		for(var i=0; i<設計盤生年.length; i++){
			var 生年干支 = 六十干支屬性(((設計盤生年[i]-1923)%60), "干支");
			if(生年干支.substr(1,1)==地支字數轉換(生年支數)) 天喜斷生年.push(設計盤生年[i]);
		}  // end for
		if(天喜斷生年.length>0) 設計盤生年 = 天喜斷生年; else alert("天喜位置錯誤！");
	} // end if 天喜地支!=undefined

	if(三台地支!=undefined && 三台地支!="-") {
		var 三台斷生日 = 左輔三台逆尋生日(左輔地支數, 三台地支);
		var 三台紫微生日重疊 = _.intersection(設計盤生日, 三台斷生日);
		if(三台紫微生日重疊.length>0) 設計盤生日 = 三台紫微生日重疊;
	}  //end if(三台地支!=undefined && 三台地支!="-") 

	$('#DS-ChartDesign-農曆年').find('option').remove().end();
	$('#DS-ChartDesign-農曆月').find('option').remove().end();
	$('#DS-ChartDesign-農曆日').find('option').remove().end();
	$('#DS-ChartDesign-農曆時').find('option').remove().end();

	填寫選項("DS-ChartDesign-農曆年", 設計盤生年);
	填寫選項("DS-ChartDesign-農曆月", [設計盤生月]);
	填寫選項("DS-ChartDesign-農曆日", 設計盤生日);
	填寫選項("DS-ChartDesign-農曆時", [設計盤生時]);
}  // function 斗數命盤設計反算生日


function 斗數命盤設計主星排列(紫微地支) {
	var 設計盤主星=[];
	var 設計盤星曜 = new 星曜初始();  //dummy, not use!

	for(var i=0; i<12; i++) 設計盤主星.push(new 設計盤地支元件(i));
	安十四主星(紫微地支, 設計盤主星, 設計盤星曜);
	return 設計盤主星;
} // function 斗數命盤設計主星排列



function 斗數命盤設計命宮(命宮地支數) {
    // 生年天干數: 子: 1, 丑：2 ..... 亥：0
    var 人事宮位="命父福田官友遷疾財子夫兄";

    for(var i=0; i<12; i++){
        $("#模擬地支宮名-"+地支滾動(命宮地支數, i)).html(人事宮位.substr(i,1));
    }  // end for
} // end function 填寫命宮位置



function 斗數命盤設計宮干(生年天干數) {
    // 生年天干數: 甲: 1, 乙：2 ..... 癸：0

    var 寅宮天干數 = (2 * 生年天干數 + 1) % 10;
    var 寅宮數 = 3;

    for(var i=0; i<12; i++){
        //console.log(天干字數轉換(天干滾動(寅宮天干數, i)));
        $("#模擬地支宮干-"+地支滾動(寅宮數, i)).html(天干字數轉換(天干滾動(寅宮天干數, i)));
    }  // end for
} // end function 填寫宮干四化


function 斗數命盤設計排列主星模擬盤(星盤排列) {
	var 主星組合, 星曜數量, 宮干;
	for(var i=0; i<12; i++) {
		星曜數量 = 星盤排列[i].星曜.length;
		switch(星曜數量){
			case 0:
				主星組合="";
                $('#模擬地支星曜-'+i + '-1').html("<br>");
                $('#模擬地支星曜-'+i + '-2').html("<br>");
				break;
			case 1:
				//主星組合=星盤排列[i].星曜[0].substr(0,1) + "<br>" + 星盤排列[i].星曜[0].substr(1,1);
                $('#模擬地支星曜-'+i + '-1').html(星盤排列[i].星曜[0].substr(0,1) + "<br>" + 星盤排列[i].星曜[0].substr(1,1));
                $('#模擬地支星曜-'+i + '-2').html("&nbsp;<br>");
				break;
			case 2:
				//主星組合=星盤排列[i].星曜[0].substr(0,1) + 星盤排列[i].星曜[1].substr(0,1) + "<br>" + 星盤排列[i].星曜[0].substr(1,1) + 星盤排列[i].星曜[1].substr(1,1);
                $('#模擬地支星曜-'+i + '-1').html(星盤排列[i].星曜[0].substr(0,1) + "<br>" + 星盤排列[i].星曜[0].substr(1,1));
                $('#模擬地支星曜-'+i + '-2').html(星盤排列[i].星曜[1].substr(0,1) + "<br>" + 星盤排列[i].星曜[1].substr(1,1));
				break;
		}  // end switch
		//$('#模擬地支盤-'+i).html(主星組合);
	}  // end for
} // function 斗數命盤設計主星排列

/*


*/

function 斗數命盤設計UI(){
    var 命盤設計內容 = [];

    命盤設計內容.push('<div class="container-fluid" id="ds-module-命盤設計" style="height: auto; width:600px; float:left;">');
		命盤設計內容.push('<table style="text-align: left; width: auto; height: 200px;" border="0" cellpadding="2" cellspacing="2">');
		命盤設計內容.push('<tbody>');
		命盤設計內容.push('<tr>');
		命盤設計內容.push('<td colspan="2">生年天干</td>');
		命盤設計內容.push('<td colspan="2"><select id="DS-ChartDesign-生年天干" style="width:50px; height: 26px; text-align: right"></select></td>');
		命盤設計內容.push('<td rowspan="4"><div id="DS-ChartDesign-模擬盤"></div></td>');
		命盤設計內容.push('</tr>');
		//命盤設計內容.push('<tr>');
		命盤設計內容.push('<tr>');
		命盤設計內容.push('<td class="ds-app-chartdesg-inputlbl">命宮</td>');
		命盤設計內容.push('<td><select id="DS-ChartDesign-命宮" style="width:50px; height: 26px"></select></td>');
		命盤設計內容.push('<td class="ds-app-chartdesg-inputlbl">紫微</td>');
		命盤設計內容.push('<td><select id="DS-ChartDesign-紫微" style="width:50px; height: 26px"></select></td>');
		命盤設計內容.push('</tr>');
		//命盤設計內容.push('</tr>');
		//命盤設計內容.push('<tr>');
		命盤設計內容.push('<tr>');
		命盤設計內容.push('<td class="ds-app-chartdesg-inputlbl">生月</td>');
		命盤設計內容.push('<td><select id="DS-ChartDesign-生月" style="width:50px; height: 26px"></select></td>');
		命盤設計內容.push('<td class="ds-app-chartdesg-inputlbl">文昌</td>');
		命盤設計內容.push('<td><select id="DS-ChartDesign-文昌" style="width:50px; height: 26px"></select></td>');
		命盤設計內容.push('</tr>');

		命盤設計內容.push('<tr>');
		命盤設計內容.push('<td class="ds-app-chartdesg-inputlbl">天喜</td>');
		命盤設計內容.push('<td><select id="DS-ChartDesign-天喜" style="width:50px; height: 26px"></select></td>');
		//命盤設計內容.push('</tr>');
		//命盤設計內容.push('<tr>');
		命盤設計內容.push('<td class="ds-app-chartdesg-inputlbl">三台</td>');
		命盤設計內容.push('<td><select id="DS-ChartDesign-三台" style="width:50px; height: 26px"></select></td>');
		命盤設計內容.push('</tr>');

		命盤設計內容.push('<tr>');
		//命盤設計內容.push('<td></td>');
		命盤設計內容.push('<td colspan="2"><button id="appbtn-命盤設計" type="button" class="btn btn-warning">推算</button></td>');
		//命盤設計內容.push('</tr>');
		//命盤設計內容.push('<tr>');
		命盤設計內容.push('<td></td>');
		命盤設計內容.push('<td></td>');
		命盤設計內容.push('</tr>');

		命盤設計內容.push('</tbody>');
		命盤設計內容.push('</table>');

		命盤設計內容.push('<div class="row"></div>');
		命盤設計內容.push('<table style="text-align: left; width: 208px; height: 58px;" border="0" cellpadding="2" cellspacing="2">');
		命盤設計內容.push('<tbody>');
		命盤設計內容.push('<tr id="DS-ChartDesignResultTitle">');
		命盤設計內容.push('<td>年</td><td>月</td><td>日</td><td>時</td>');
		命盤設計內容.push('</tr>');
		命盤設計內容.push('<tr id="DS-ChartDesignResult">');
		命盤設計內容.push('<td><select id="DS-ChartDesign-農曆年" style="width:60px; height: 26px"></select></td>');
		命盤設計內容.push('<td><select id="DS-ChartDesign-農曆月" style="width:45px; height: 26px"></select></td></td>');
		命盤設計內容.push('<td><select id="DS-ChartDesign-農曆日" style="width:45px; height: 26px"></select></td></td>');
		命盤設計內容.push('<td><select id="DS-ChartDesign-農曆時" style="width:42px; height: 26px"></select></td></td>');
		命盤設計內容.push('</tr>');
		命盤設計內容.push('</tbody>');
		命盤設計內容.push('</table>');

		命盤設計內容.push('<div class="row"></div>');
		命盤設計內容.push('<div class="row"></div>');
    命盤設計內容.push('</div>');  // end last div

    return 命盤設計內容.join("");
}  // end function 斗數命盤設計模塊


function 模擬命盤UI(){
	var 模擬命盤 = [];
	模擬命盤.push('<table style="text-align: left; width: 210px; margin-left: 10px;" border="1" cellpadding="0" cellspacing="0">');
	模擬命盤.push('<tbody>');
		模擬命盤.push('<tr>');
			模擬命盤.push('<td id="模擬地支盤-6" class="ds-app-chartdesgblock">' + 模擬命盤地支(6) + '</td>');
			模擬命盤.push('<td id="模擬地支盤-7" class="ds-app-chartdesgblock">' + 模擬命盤地支(7) + '</td>');
			模擬命盤.push('<td id="模擬地支盤-8" class="ds-app-chartdesgblock">' + 模擬命盤地支(8) + '</td>');
			模擬命盤.push('<td id="模擬地支盤-9" class="ds-app-chartdesgblock">' + 模擬命盤地支(9) + '</td>');
		模擬命盤.push('</tr>');

		模擬命盤.push('<tr>');
			模擬命盤.push('<td id="模擬地支盤-5" class="ds-app-chartdesgblock">' + 模擬命盤地支(5) + '</td>');
			模擬命盤.push('<td colspan="2" rowspan="2"></td>');
			模擬命盤.push('<td id="模擬地支盤-10" class="ds-app-chartdesgblock">' + 模擬命盤地支(10) + '</td>');
		模擬命盤.push('</tr>');

		模擬命盤.push('<tr>');
			模擬命盤.push('<td id="模擬地支盤-4" class="ds-app-chartdesgblock">' + 模擬命盤地支(4) + '</td>');
			模擬命盤.push('<td id="模擬地支盤-11" class="ds-app-chartdesgblock">' + 模擬命盤地支(11) + '</td>');
		模擬命盤.push('</tr>');

		模擬命盤.push('<tr>');
			模擬命盤.push('<td id="模擬地支盤-3" class="ds-app-chartdesgblock">' + 模擬命盤地支(3) + '</td>');
			模擬命盤.push('<td id="模擬地支盤-2" class="ds-app-chartdesgblock">' + 模擬命盤地支(2) + '</td>');
			模擬命盤.push('<td id="模擬地支盤-1" class="ds-app-chartdesgblock">' + 模擬命盤地支(1) + '</td>');
			模擬命盤.push('<td id="模擬地支盤-0" class="ds-app-chartdesgblock">' + 模擬命盤地支(0) + '</td>');
		模擬命盤.push('</tr>');
	模擬命盤.push('</tbody>');
	模擬命盤.push('</table>');

	return 模擬命盤.join("");
}  // end function 模擬命盤UI()


function 模擬命盤地支(地支數){
	var 模擬地支 = [];
	模擬地支.push('<table style="text-align: center; " border="0" cellpadding="0" cellspacing="0" table-layout="fixed";>');  //width: 210px; margin-left: 10px;
	模擬地支.push('<tbody>');
        模擬地支.push('<tr>'); 
            //模擬地支.push('<td id="模擬地支宮干-' + 地支數 + '" class="ds-app-chartdesg-dzContent"><br>甲</td>');
            模擬地支.push('<td class="ds-app-chartdesg-dzContent">' + '<span id="模擬地支宮名-' + 地支數 + '">&nbsp;</span><br>' + '<span id="模擬地支宮干-' + 地支數 + '">甲</span></td>');
            模擬地支.push('<td id="模擬地支星曜-' + 地支數 + '-2" class="ds-app-chartdesg-dzContent">&nbsp;<br></td>');
            模擬地支.push('<td id="模擬地支星曜-' + 地支數 + '-1" class="ds-app-chartdesg-dzContent">&nbsp;<br></td>');
        模擬地支.push('</tr>'); 
	模擬地支.push('</tbody>');
	模擬地支.push('</table>');
 
    return 模擬地支.join("");
}// end function 模擬命盤地支()

// ************ supporting function ******************

function 設計盤地支元件(地支數) {
	//this.宮位數 = -1; //1： 命宮 2： 兄弟宮 。。。
	this.宮位 = ""; //命宮、兄弟宮 。。。
	this.星曜 = []; //星曜，比方 紫微，天府
	this.地支數 = 地支數; //  ......................... 填寫地支數
	this.地支 = 地支字數轉換(地支數);  //  ......................... 填寫地支
	//this.宮干數 = -1;  //0：癸，1：甲， 2：乙
	this.宮干 = "";
}  //end function 宮位元件


function 年干尋生年(生年干){
	var CurYear = new Date().getFullYear();
	//urYear = CurYear +3;  //算多2年
	var 年尾數, LastDigit;
	//var 生年元件 = {"西曆": 1924, "干支": "--"};
	var 生年矩陣=[];

	switch(生年干){
		case "甲": 年尾數=4; break;
		case "乙": 年尾數=5; break;
		case "丙": 年尾數=6; break;
		case "丁": 年尾數=7; break;
		case "戊": 年尾數=8; break;
		case "己": 年尾數=9; break;
		case "庚": 年尾數=0; break;
		case "辛": 年尾數=1; break;
		case "壬": 年尾數=2; break;
		case "癸": 年尾數=3; break;
	}

	for (var i=CurYear-80; i<(CurYear +3); i++){
		LastDigit = (Math.abs(i) % 10);
		if(LastDigit == 年尾數) {
			//var 生年 = new 生年元件();
			//生年.西曆 = i;
			//生年.干支 = 六十干支屬性(((i-1923)%60), "干支");
			生年矩陣.push(i);
		}  // end if
	}  // end for
	//console.log(生年矩陣);
	return 生年矩陣;
} // end function 年干尋生年

function 生年元件(){
	this.西曆 =1924;
	this.干支 = "--";
} // end function 生年元件

function 文昌逆尋生時(文昌地支) {
	switch(文昌地支){
		case "子": return "戌";
		case "丑": return "酉";
		case "寅": return "申";
		case "卯": return "未";
		case "辰": return "午";
		case "巳": return "巳";
		case "午": return "辰";
		case "未": return "卯";
		case "申": return "寅";
		case "酉": return "丑";
		case "戌": return "子";
		case "亥": return "亥";
	}  //end switch
}  // end function 文昌逆尋生時


function 生時逆尋文昌(生時) {
	switch(生時){
		case "戌": return "子";
		case "酉": return "丑";
		case "申": return "寅";
		case "未": return "卯";
		case "午": return "辰";
		case "巳": return "巳";
		case "辰": return "午";
		case "卯": return "未";
		case "寅": return "申";
		case "丑": return "酉";
		case "子": return "戌";
		case "亥": return "亥";
	}  //end switch
}  // end function 文昌逆尋生時


function 命宮地支生時逆尋生月(命宮地支數, 生時) {
	//var 命宮數 = 地支字數轉換(命宮地支);
	var 生時數 = (地支字數轉換(生時)==0) ? 12 :地支字數轉換(生時);

	var 生月數;
	生月數 = 地支滾動(命宮地支數, 生時數);
	生月數 = 地支滾動(生月數, -3);
	return 生月數;
}  // function 命宮地支生時逆尋生月


function 命宮地支生月逆尋生時(命宮地支數, 生月數) {
	var 生時數;
	生時數 = 地支滾動(生月數, 3);
	生時數 = 地支滾動(生時數, (-1)*命宮地支數);
	return 生時數;
}  // function 命宮地支生月逆尋生時


function 天喜地支逆尋生年支(天喜地支) {
	switch(天喜地支){
		case "酉": return 1; //子
		case "申": return 2; //丑
		case "未": return 3; //子
		case "午": return 4; //子
		case "巳": return 5; //子
		case "辰": return 6; //子
		case "卯": return 7; //子
		case "寅": return 8; //子
		case "丑": return 9; //子
		case "子": return 10; //子
		case "亥": return 11; //子
		case "戌": return 12; //子
	}  // end switch
}  // function 天喜地支逆尋生年支


function 左輔三台逆尋生日(左輔地支數, 三台地支) {
	三台地支數 = 地支字數轉換(三台地支);
	三台生日矩陣 = [];
	var 滾動的地支數;

	for(var i=1; i<30; i++){
		滾動的地支數 = 地支滾動(左輔地支數, i-1);
		if(滾動的地支數 == 三台地支數) 三台生日矩陣.push(i);
	}  //end for
	return 三台生日矩陣;
}  // function 左輔三台逆尋生日



function 紫微尋生日(紫微地支, 五行局) {
	var 紫微生日矩陣=[];
	//var 五行局;

    var 紫微矩陣 = [
        { "生日": 1, "水二局": "丑", "木三局": "辰", "金四局": "亥", "土五局": "午", "火六局": "酉"},
        { "生日": 2, "水二局": "寅", "木三局": "丑", "金四局": "辰", "土五局": "亥", "火六局": "午"},
        { "生日": 3, "水二局": "寅", "木三局": "寅", "金四局": "丑", "土五局": "辰", "火六局": "亥"},
        { "生日": 4, "水二局": "卯", "木三局": "巳", "金四局": "寅", "土五局": "丑", "火六局": "辰"},
        { "生日": 5, "水二局": "卯", "木三局": "寅", "金四局": "子", "土五局": "寅", "火六局": "丑"},
        { "生日": 6, "水二局": "辰", "木三局": "卯", "金四局": "巳", "土五局": "未", "火六局": "寅"},
        { "生日": 7, "水二局": "辰", "木三局": "午", "金四局": "寅", "土五局": "子", "火六局": "戌"},
        { "生日": 8, "水二局": "巳", "木三局": "卯", "金四局": "卯", "土五局": "巳", "火六局": "未"},
        { "生日": 9, "水二局": "巳", "木三局": "辰", "金四局": "丑", "土五局": "寅", "火六局": "子"},
        { "生日": 10, "水二局": "午", "木三局": "未", "金四局": "午", "土五局": "卯", "火六局": "巳"},
        { "生日": 11, "水二局": "午", "木三局": "辰", "金四局": "卯", "土五局": "申", "火六局": "寅"},
        { "生日": 12, "水二局": "未", "木三局": "巳", "金四局": "辰", "土五局": "丑", "火六局": "卯"},
        { "生日": 13, "水二局": "未", "木三局": "申", "金四局": "寅", "土五局": "午", "火六局": "亥"},
        { "生日": 14, "水二局": "申", "木三局": "巳", "金四局": "未", "土五局": "卯", "火六局": "申"},
        { "生日": 15, "水二局": "申", "木三局": "午", "金四局": "辰", "土五局": "辰", "火六局": "丑"},
        { "生日": 16, "水二局": "酉", "木三局": "酉", "金四局": "巳", "土五局": "酉", "火六局": "午"},
        { "生日": 17, "水二局": "酉", "木三局": "午", "金四局": "卯", "土五局": "寅", "火六局": "卯"},
        { "生日": 18, "水二局": "戌", "木三局": "未", "金四局": "申", "土五局": "未", "火六局": "辰"},
        { "生日": 19, "水二局": "戌", "木三局": "戌", "金四局": "巳", "土五局": "辰", "火六局": "子"},
        { "生日": 20, "水二局": "亥", "木三局": "未", "金四局": "午", "土五局": "巳", "火六局": "酉"},
        { "生日": 21, "水二局": "亥", "木三局": "申", "金四局": "辰", "土五局": "戌", "火六局": "寅"},
        { "生日": 22, "水二局": "子", "木三局": "亥", "金四局": "酉", "土五局": "卯", "火六局": "未"},
        { "生日": 23, "水二局": "子", "木三局": "申", "金四局": "午", "土五局": "申", "火六局": "辰"},
        { "生日": 24, "水二局": "丑", "木三局": "酉", "金四局": "未", "土五局": "巳", "火六局": "巳"},
        { "生日": 25, "水二局": "丑", "木三局": "子", "金四局": "巳", "土五局": "午", "火六局": "丑"},
        { "生日": 26, "水二局": "寅", "木三局": "酉", "金四局": "戌", "土五局": "亥", "火六局": "戌"},
        { "生日": 27, "水二局": "寅", "木三局": "戌", "金四局": "未", "土五局": "辰", "火六局": "卯"},
        { "生日": 28, "水二局": "卯", "木三局": "丑", "金四局": "申", "土五局": "酉", "火六局": "申"},
        { "生日": 29, "水二局": "卯", "木三局": "戌", "金四局": "午", "土五局": "午", "火六局": "巳"},
        { "生日": 30, "水二局": "辰", "木三局": "亥", "金四局": "亥", "土五局": "未", "火六局": "午"}
    ];
    for(var i=1; i<30; i++){
    	if(紫微矩陣[i][五行局.局名] == 紫微地支) 紫微生日矩陣.push(紫微矩陣[i].生日);
    } // end for

    //console.log(紫微生日矩陣);
    return 紫微生日矩陣;
}  // end function 紫微尋生日
