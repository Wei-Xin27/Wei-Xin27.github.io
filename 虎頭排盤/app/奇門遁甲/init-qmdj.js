// 奇門遁甲 initializaition


// ***************************** I n p u t  C o n t r o l *****************************
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

	$(document).on("click tap", "#btn-遁甲排盤", function () {
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
	        "干支八字": "",  //default set to Null
	        "姓名": 輸入姓名,
	        "性別": 輸入性別,
	        "城市": 輸入城市,
	        "國家": 輸入國家,
	        "夜子時": 輸入用夜子時,
	        "節氣用區域時間": 輸入節氣用區域時間,
	        "節氣用真太陽時": 輸入節氣用真太陽時,
	    } // end 曆法輸入資料

	    var 曆法;

        switch(輸入曆法){
            case "西曆":
            	$("#mp-disp-western-dob").hide();
                輸入資料.西曆日期=日期值轉換(輸入資料.日期字串, 1);
                曆法=遁甲起盤(輸入資料);
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
                    曆法=遁甲起盤(輸入資料);
                } //end if valid date
                break;

            case "干支曆":
            	/*
                輸入資料.干支八字=$("#mp-輸入年干").val()+$("#mp-輸入年支").val()+$("#mp-輸入月干").val()+$("#mp-輸入月支").val()+$("#mp-輸入日干").val()+$("#mp-輸入日支").val()+$("#mp-輸入時干").val()+$("#mp-輸入時支").val();
                var 符合八字的西曆矩陣 = 干支曆轉換西曆(輸入資料.干支八字, 輸入資料.城市);
                //console.log(符合八字的西曆矩陣);
                if(符合八字的西曆矩陣.length>0) {  //有搜尋到相關的西曆生日
                    var eleWesternDoB = document.getElementById("mp-干支轉西曆日期");
                    removeHTMLTagOptions(eleWesternDoB);  //clear the select box 1st
                    for(var i=0; i<符合八字的西曆矩陣.length; i++){
                        // 填寫搜尋到的西曆進去select
                        var opt = document.createElement('option');
                        opt.innerHTML = 符合八字的西曆矩陣[i].西曆中文.substr(0, 符合八字的西曆矩陣[i].西曆中文.length-2);
                        opt.value = 符合八字的西曆矩陣[i].年 + zeroPad(符合八字的西曆矩陣[i].月,2) + zeroPad(符合八字的西曆矩陣[i].日,2) + 符合八字的西曆矩陣[i].時;
                        eleWesternDoB.appendChild(opt);
                    } // end for
                    document.getElementById("mp-干支轉西曆日期").selectedIndex = 符合八字的西曆矩陣.length-1;  // default select to the last date
                    $("#mp-干支轉西曆日期").trigger("change"); //trigger change to load the value into date input box
                    $("#mp-disp-western-dob").show();
                } // end if
                */
                break;
        } // end switch 輸入曆法
	        console.log(曆法);
	        奇門遁甲排盤(曆法.奇門遁甲盤);
	        $("#chart-qmdj-main").show();
	        八卦宮位分析輸出(曆法.奇門遁甲盤, "qmdj-analyze-八宮");
		});  // end #btn-排盤

});  // Doctument Global function


// -----------------------------------------------------------------

function 初始化奇門遁甲程式() {
	//Gen-生日輸入表格(ButtonStr, 姓名輸入, 性別輸入, 農曆輸入, 干支曆輸入, 其他選項輸入)
	$("#div-遁甲-生日輸入").html(Gen_生日輸入表格("排盤", "遁甲排盤"));
	//姓名輸入, 性別輸入, 農曆輸入, 干支曆輸入, 其他選項輸入, 吉時選項
	初始化生日輸入(false, false, false, false, false, false);
	$("#chart-qmdj-main").html(GenChart_遁甲盤(1));
	$("#chart-qmdj-main").hide();

	// ***** 建立遁甲的速查表 *****
	速查表總建設_遁甲();
}


function 奇門遁甲排盤(遁甲盤){
	for(i=1; i<10; i++){
		if(i!=5) {
			$("#遁甲盤-1-"+i+"-八卦位").html(遁甲盤.地盤[i].後天八卦+遁甲盤.地盤[i].後天八卦數);
			$("#遁甲盤-1-"+i+"-八門位").html(遁甲盤.天盤[i].八門);
			$("#遁甲盤-1-"+i+"-八門形態位").html(遁甲盤.天盤[i].八門形態);
			$("#遁甲盤-1-"+i+"-八神位").html(遁甲盤.天盤[i].八神);
			$("#遁甲盤-1-"+i+"-天盤天干位").html(遁甲盤.天盤[i].天干);
			$("#遁甲盤-1-"+i+"-寄干位").html(遁甲盤.天盤[i].寄宮天干);
			$("#遁甲盤-1-"+i+"-寄星位").html(遁甲盤.天盤[i].寄星);
			$("#遁甲盤-1-"+i+"-地盤天干位").html(遁甲盤.地盤[i].天干);
			$("#遁甲盤-1-"+i+"-空亡位").html("<br>");
			$("#遁甲盤-1-"+i+"-驛馬位").html("<br>");
			$("#遁甲盤-1-"+i+"-九星位").html(遁甲盤.天盤[i].九星);
			$("#遁甲盤-1-"+i+"-寄神位").html(遁甲盤.天盤[i].寄神);
			$("#遁甲盤-1-"+i+"-空亡位").html(遁甲盤.天盤[i].空亡);
			$("#遁甲盤-1-"+i+"-驛馬位").html(遁甲盤.天盤[i].驛馬);
		} // end if
	} // for

	// *** 四柱表 ***
	$("#qmdj-sumtbl-年干").html(遁甲盤.日期.干支曆.substr(0,1));
	$("#qmdj-sumtbl-年支").html(遁甲盤.日期.干支曆.substr(1,1));
	$("#qmdj-sumtbl-月干").html(遁甲盤.日期.干支曆.substr(2,1));
	$("#qmdj-sumtbl-月支").html(遁甲盤.日期.干支曆.substr(3,1));
	$("#qmdj-sumtbl-日干").html(遁甲盤.日期.干支曆.substr(4,1));
	$("#qmdj-sumtbl-日支").html(遁甲盤.日期.干支曆.substr(5,1));
	$("#qmdj-sumtbl-時干").html(遁甲盤.日期.干支曆.substr(6,1));
	$("#qmdj-sumtbl-時支").html(遁甲盤.日期.干支曆.substr(7,1));

	// *** SumList ***
	$("#zlxs-qmdj-局名").html(遁甲盤.陰陽遁 + "遁" + 遁甲盤.局數 + "局 " + 遁甲盤.日期.日柱 + "日 " + 遁甲盤.日期.時柱 + "時");
	$("#zlxs-qmdj-日期").html(遁甲盤.日期.中文日期);
	$("#zlxs-qmdj-農曆").html(遁甲盤.日期.農曆);
	$("#zlxs-qmdj-節氣三旬").html(遁甲盤.日期.節氣字串);
	$("#zlxs-qmdj-日柱旬首").html(遁甲盤.日期.日柱字串);
	$("#zlxs-qmdj-時柱旬首").html(遁甲盤.日期.時柱字串);
	遁甲盤.日期.值符字串="值符「" + 遁甲盤.值符 + "」落" + 遁甲盤.地盤[遁甲盤.值符位置].後天八卦 + 遁甲盤.地盤[遁甲盤.值符位置].後天八卦中文數 + "宮";
    遁甲盤.日期.值使字串="值使「" + 遁甲盤.值使 + "」落" + 遁甲盤.地盤[遁甲盤.值使位置].後天八卦 + 遁甲盤.地盤[遁甲盤.值使位置].後天八卦中文數 + "宮";
	$("#zlxs-qmdj-值符宮位").html(遁甲盤.日期.值符字串);
	$("#zlxs-qmdj-值使宮位").html(遁甲盤.日期.值使字串);

	$("#qmdj-測試區").html(遁甲盤.測試文矩陣.join("<br><br>"));
	
	// ***** Clear 中宮 *****
	$("#遁甲盤-1-5-八卦位").html("");
	$("#遁甲盤-1-5-八神位").html("");
	$("#遁甲盤-1-5-寄神位").html("");
	$("#遁甲盤-1-5-空馬位").html("");
	$("#遁甲盤-1-5-寄干位").html("");
	$("#遁甲盤-1-5-八門位").html("");
	$("#遁甲盤-1-5-天盤天干位").html("");
	$("#遁甲盤-1-5-寄星位").html("");
	$("#遁甲盤-1-5-九星位").html("");
	$("#遁甲盤-1-5-地盤天干位").html(遁甲盤.地盤[5].天干);
	$("#遁甲盤-1-5-空亡位").html("");
	$("#遁甲盤-1-5-驛馬位").html("");
	$("#遁甲盤-1-5-八門形態位").html("");
}


function GenChart_遁甲宮位(盤數, 宮位數){
	var tableCount=(盤數===undefined)? 1 : 盤數;

	var 宮位id="遁甲盤-" + 盤數 + "-" + 宮位數;
	//console.log(宮位id+'-八卦位');
	var 奇門遁甲宮位=[];

	奇門遁甲宮位.push('<table id = "' + 宮位id + '" class="qmdj-tblcell-宮位表" border="0" cellpadding="1" cellspacing="0">');
	奇門遁甲宮位.push('<tbody>');
	奇門遁甲宮位.push('<tr>');
	奇門遁甲宮位.push('<td id = "' + 宮位id + '-八卦位' + '" class="qmdj-tblcell-遁甲八卦宮位">八卦</td>');
	奇門遁甲宮位.push('<td class="遁甲宮雙行字"><span id="' + 宮位id + '-八神位' + '" class="qmdj-tblcell-MainTextRight">八神</span><br><span id="' + 宮位id + '-寄神位' + '" class="qmdj-tblcell-SubTextRight">寄神</span></td>');
	奇門遁甲宮位.push('<td class="遁甲宮雙行字"><span id="' + 宮位id + '-空亡位' + '" class="qmdj-tblcell-空亡驛馬字體">空亡</span><br><span id="' + 宮位id + '-驛馬位' + '" class="qmdj-tblcell-空亡驛馬字體">驛馬</span></td>');
	奇門遁甲宮位.push('</tr>');
	
	奇門遁甲宮位.push('<tr>');
	奇門遁甲宮位.push('<td id = "' + 宮位id + '-寄干位' + '" class="qmdj-tblcell-遁甲八卦宮位">寄干</td>');
	奇門遁甲宮位.push('<td class="遁甲宮雙行字"><span id="' + 宮位id + '-八門位' + '" class="qmdj-tblcell-MainTextRight">八門</span><br><span id="' + 宮位id + '-八門測試位' + '" class="qmdj-tblcell-SubTextLeft"></span><span id="' + 宮位id + '-八門形態位' + '" class="qmdj-tblcell-SubTextRight">形態</span></td>');
	奇門遁甲宮位.push('<td id = "' + 宮位id + '-天盤天干位' + '" class="qmdj-tblcell-遁甲宮位格">天干</td>');
	奇門遁甲宮位.push('</tr>');

	奇門遁甲宮位.push('<tr>');
	奇門遁甲宮位.push('<td id = "' + 宮位id + '-寄星位' + '" class="qmdj-tblcell-遁甲宮位格">寄星</td>');
	奇門遁甲宮位.push('<td id = "' + 宮位id + '-九星位' + '" class="qmdj-tblcell-遁甲宮位格">九星</td>');
	奇門遁甲宮位.push('<td id = "' + 宮位id + '-地盤天干位' + '" class="qmdj-tblcell-遁甲宮位格">地干</td>');
	奇門遁甲宮位.push('</tr>');
	奇門遁甲宮位.push('</tbody>');
	奇門遁甲宮位.push('</table>');
	//console.log(奇門遁甲宮位.join(""));
	return 奇門遁甲宮位.join("");
}

function GenChart_遁甲盤(盤數){
	var maintitle='data:image/gif;base64,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';
	var 遁甲盤id=(盤數===undefined)? 1 : 盤數;

	var 奇門遁甲盤=[];


	// ***** 四柱表 與 總結 *****
	奇門遁甲盤.push('<div id = "遁甲盤-' + 遁甲盤id + '-橫幅" class="遁甲盤-橫幅"><img class="displayed" alt="Logo" height="120px" width="600px" style="margin: 0px 0px 0px 0px" src=' + maintitle +'></div> ');

	奇門遁甲盤.push('<div id="chart-qmdj-Summary" style="height: auto; width: 680px; margin-top: 5px; margin-bottom: 10px; margin-left: 0px; float:left;">');
		奇門遁甲盤.push('<div class="row">');
			奇門遁甲盤.push('<div id="chart-qmdj-SumTbl" class="col-md-6" style="height: auto; width: 245px; margin-top: 0px; margin-left: 0px; margin-bottom: 12px; float:left;">');
				奇門遁甲盤.push(Gen_超精簡八字表());
			奇門遁甲盤.push('</div>'); // 超精簡八字表
		
			奇門遁甲盤.push('<div id="chart-qmdj-SumList" class="col-md-6" style="height: auto; width: 425px; margin-top: 2px; margin-left: 0px; float:left;">');
				奇門遁甲盤.push(Gen_遁甲總結表());
			奇門遁甲盤.push('</div>'); // 遁甲總結表
		奇門遁甲盤.push('</div>'); //end row
	奇門遁甲盤.push('</div>');

	// ***** 遁甲盤 *****
	奇門遁甲盤.push('<table id = "' + 遁甲盤id + '" class="qmdj-tblcell-遁甲盤" border="1" cellpadding="0" cellspacing="0">');
	奇門遁甲盤.push('<tbody>');
	奇門遁甲盤.push('<tr>');
	奇門遁甲盤.push('<td class="qmdj-tblcell-九宮格">');
		奇門遁甲盤.push(GenChart_遁甲宮位(遁甲盤id, 1));
	奇門遁甲盤.push('</td>');
	奇門遁甲盤.push('<td class="qmdj-tblcell-九宮格">');
		奇門遁甲盤.push(GenChart_遁甲宮位(遁甲盤id, 2));
	奇門遁甲盤.push('</td>');
	奇門遁甲盤.push('<td class="qmdj-tblcell-九宮格">');
		奇門遁甲盤.push(GenChart_遁甲宮位(遁甲盤id, 3));
	奇門遁甲盤.push('</td>');
	奇門遁甲盤.push('</tr>');

	奇門遁甲盤.push('<tr>');
	奇門遁甲盤.push('<td class="qmdj-tblcell-九宮格">');
		奇門遁甲盤.push(GenChart_遁甲宮位(遁甲盤id, 4));
	奇門遁甲盤.push('</td>');
	奇門遁甲盤.push('<td class="qmdj-tblcell-九宮格">');
		奇門遁甲盤.push(GenChart_遁甲宮位(遁甲盤id, 5));
	奇門遁甲盤.push('</td>');
	奇門遁甲盤.push('<td class="qmdj-tblcell-九宮格">');
		奇門遁甲盤.push(GenChart_遁甲宮位(遁甲盤id, 6));
	奇門遁甲盤.push('</td>');
	奇門遁甲盤.push('</tr>');

	奇門遁甲盤.push('<tr>');
	奇門遁甲盤.push('<td class="qmdj-tblcell-九宮格">');
		奇門遁甲盤.push(GenChart_遁甲宮位(遁甲盤id, 7));
	奇門遁甲盤.push('</td>');
	奇門遁甲盤.push('<td class="qmdj-tblcell-九宮格">');
		奇門遁甲盤.push(GenChart_遁甲宮位(遁甲盤id, 8));
	奇門遁甲盤.push('</td>');
	奇門遁甲盤.push('<td class="qmdj-tblcell-九宮格">');
		奇門遁甲盤.push(GenChart_遁甲宮位(遁甲盤id, 9));
	奇門遁甲盤.push('</td>');

	奇門遁甲盤.push('</tr>');
	奇門遁甲盤.push('</tbody>');
	奇門遁甲盤.push('</table>');

	return 奇門遁甲盤.join("");
}

function Gen_超精簡八字表(){
	// required CSS class qmdj-sumtblcell-四柱名稱, qmdj-sumtblcell-四柱
	var 超精簡八字表=[];

	//超精簡八字表.push('<div id="chart-qmdj-SumTbl" style="height: auto; width: 250px; margin-top: 5px; margin-left: 2px; float:left;">');
	超精簡八字表.push('<table border="1" cellpadding="0" cellspacing="0">');
	超精簡八字表.push('<tbody>');
	超精簡八字表.push('<tr>');
	超精簡八字表.push('<td class="qmdj-sumtblcell-四柱名稱">時柱</td>');
	超精簡八字表.push('<td class="qmdj-sumtblcell-四柱名稱">日柱</td>');
	超精簡八字表.push('<td class="qmdj-sumtblcell-四柱名稱">月柱</td>');
	超精簡八字表.push('<td class="qmdj-sumtblcell-四柱名稱">年柱</td>');
	超精簡八字表.push('</tr>');
	超精簡八字表.push('<tr>');
	超精簡八字表.push('<td id="qmdj-sumtbl-時干" class="qmdj-sumtblcell-四柱"><br></td>');
	超精簡八字表.push('<td id="qmdj-sumtbl-日干" class="qmdj-sumtblcell-四柱"><br></td>');
	超精簡八字表.push('<td id="qmdj-sumtbl-月干" class="qmdj-sumtblcell-四柱"><br></td>');
	超精簡八字表.push('<td id="qmdj-sumtbl-年干" class="qmdj-sumtblcell-四柱"><br></td>');
	超精簡八字表.push('</tr>');
	超精簡八字表.push('<tr>');
	超精簡八字表.push('<td id="qmdj-sumtbl-時支" class="qmdj-sumtblcell-四柱"><br></td>');
	超精簡八字表.push('<td id="qmdj-sumtbl-日支" class="qmdj-sumtblcell-四柱"><br></td>');
	超精簡八字表.push('<td id="qmdj-sumtbl-月支" class="qmdj-sumtblcell-四柱"><br></td>');
	超精簡八字表.push('<td id="qmdj-sumtbl-年支" class="qmdj-sumtblcell-四柱"><br></td>');
	超精簡八字表.push('</tr>');
	超精簡八字表.push('</tbody>');
	超精簡八字表.push('</table>');
	//超精簡八字表.push('</div>');

	return 超精簡八字表.join("");
}

function Gen_遁甲總結表(){
	// required CSS class qmdj-sumtblcell-四柱名稱, qmdj-sumtblcell-四柱
	var 遁甲總結表=[];
	//遁甲總結表.push('<div id="chart-qmdj-SumList" style="height: auto; width: 350px; margin-top: 2px; margin-left: 2px; float:left;">');
	遁甲總結表.push('<div class="row"><div id="zlxs-qmdj-局名" class="col-md-12 qmdj-tblcell-遁甲局盤標題"></div></div>');
	遁甲總結表.push('<div class="row">');
	遁甲總結表.push('<div id="zlxs-qmdj-日期" class="col-md-6 qmdj-tblcell-遁甲局盤結論"></div>');
	遁甲總結表.push('<div id="zlxs-qmdj-農曆" class="col-md-6 qmdj-tblcell-遁甲局盤結論"></div>');
	遁甲總結表.push('</div>');
	遁甲總結表.push('<div class="row"><div id="zlxs-qmdj-節氣三旬" class="col-md-12 qmdj-tblcell-遁甲局盤結論"></div></div>');
	遁甲總結表.push('<div class="row"><div id="zlxs-qmdj-日柱旬首" class="col-md-12 qmdj-tblcell-遁甲局盤結論"></div></div>');
	遁甲總結表.push('<div class="row"><div id="zlxs-qmdj-時柱旬首" class="col-md-12 qmdj-tblcell-遁甲局盤結論"></div></div>');
	遁甲總結表.push('<div class="row">');
	遁甲總結表.push('<div id="zlxs-qmdj-值符宮位" class="col-md-6 qmdj-tblcell-遁甲局盤結論"></div>');
	遁甲總結表.push('<div id="zlxs-qmdj-值使宮位" class="col-md-6 qmdj-tblcell-遁甲局盤結論"></div>');
	遁甲總結表.push('</div>');
	//遁甲總結表.push('</div><!-- * end div chart-qmdj-SumList *-->');

	return 遁甲總結表.join("");
}
