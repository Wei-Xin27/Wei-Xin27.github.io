// --------------------- HTML input automation ---------------------

function 填寫十天干(elementId) {
    var eleTG = document.getElementById(elementId);
    for(var i = 1; i <=9; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = 天干數轉字(i);
        opt.value = 天干數轉字(i);
        eleTG.appendChild(opt);     
    } //end for

    var opt = document.createElement('option');
    opt.innerHTML = 天干數轉字(0); opt.value = 天干數轉字(0);
    eleTG.appendChild(opt);     
}  // end function 填寫十天干

function 填寫十二地支(elementId, extraElement) {
    var AddExtraItem = true;
    if(extraElement===undefined) AddExtraItem=false;  //just in case user would like to add extra items, such as "-" for null

    var eleDZ = document.getElementById(elementId);
    for(var i = 1; i <=11; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = 地支數轉字(i);
        opt.value = 地支數轉字(i);
        eleDZ.appendChild(opt);     
    } //end for

    //var opt = document.createElement('option');
    var opt = document.createElement('option');
    opt.innerHTML = 地支數轉字(0); opt.value = 地支數轉字(0);
    eleDZ.appendChild(opt);

    if(AddExtraItem){
        var opt = document.createElement('option');
        opt.innerHTML = extraElement; opt.value = extraElement;
        eleDZ.appendChild(opt);
    } //
}  // end function 填寫十二地支


function 填寫六十干支(elementId) {
    var eleDZ = document.getElementById(elementId);
    for(var i = 1; i <=59; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = 六十干支屬性(i, "干支");
        opt.value = 六十干支屬性(i, "干支");
        eleDZ.appendChild(opt);     
    } //end for

    var opt = document.createElement('option');
    opt.innerHTML = 六十干支屬性(0, "干支");; opt.value = 六十干支屬性(0, "干支");;
    eleDZ.appendChild(opt);

}  // end function 填寫六十干支


function 填寫年份(elementId, StartYear, StopYear, 是否填寫干支) {
    var eleYear = document.getElementById(elementId);
    var 干支年份;
    for(var i = StartYear; i <= StopYear; i++) {
        干支年份 = 六十干支屬性(((i-1923) % 60), "干支");
        var opt = document.createElement('option');
        if(是否填寫干支) opt.innerHTML = i + " （" + 干支年份 + "）"; else opt.innerHTML = i;
        opt.value = i;
        eleYear.appendChild(opt);
    } //end for
} // end function 填寫年份


function 填寫月份(elementId) {
    var eleMonth = document.getElementById(elementId);
    for(var i = 1; i <= 12; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = zeroPad(i,2);
        opt.value = zeroPad(i,2);
        eleMonth.appendChild(opt);
    } //end for
}  //end for 填寫月份


function 填寫日期(elementId) {
    var eleDay = document.getElementById(elementId);
    for(var i = 1; i <= 31; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = zeroPad(i,2);
        opt.value = zeroPad(i,2);
        eleDay.appendChild(opt);
    } //end for
}  //end for 填寫日期


function 填寫時間(elementId, 是否填寫吉時, 不填寫夜子時) {
    if(不填寫夜子時!=true) 是否填寫夜子時= false;
    var 地支時;

    var eleHour = document.getElementById(elementId);
    for(var i = 0; i <=23; i++) {
        地支時 = 西時轉地支時(i);
        if(不填寫夜子時 && 地支時=="夜子時") 地支時 = "子時";
        var opt = document.createElement('option');
        opt.innerHTML = zeroPad(i,2) + "（" + 地支時 + "）";
        opt.value = zeroPad(i,2);
        eleHour.appendChild(opt);
    } //end for

    if(是否填寫吉時) {
        var opt = document.createElement('option');
        opt.innerHTML="吉時"; opt.value = "吉時";
        eleHour.appendChild(opt);
    }
}  //end for 填寫時間


function 填寫分鐘(elementId) {
    var eleMinutes = document.getElementById(elementId);
    for(var i = 0; i <=59; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = zeroPad(i,2) ;
        opt.value = zeroPad(i,2);
        eleMinutes.appendChild(opt);
    } //end for
}  //end for 填寫分鐘


function 填寫城市(elementId){
    var eleCity = document.getElementById(elementId);
    var Cities=城市數據();  //function at 萬年曆 script
    for(var i = 0; i < Cities.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = Cities[i].City;
        opt.value = Cities[i].City;
        eleCity.appendChild(opt);
    } //end for
}

function 填寫選項(elementId, 資料矩陣){
    var eleSelect = document.getElementById(elementId);
    //var Cities=城市數據();  //function at 萬年曆 script
    for(var i = 0; i < 資料矩陣.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = 資料矩陣[i];
        opt.value = 資料矩陣[i];
        eleSelect.appendChild(opt);
    } //end for
}


function Gen_生日輸入表格(ButtonStr, ButtonName){
    /*
    var 顯示姓名輸入=(姓名輸入===undefined)? false: 姓名輸入;
    var 顯示性別輸入=(性別輸入===undefined)? false: 性別輸入;
    var 顯示農曆輸入=(農曆輸入===undefined)? false: 農曆輸入;
    var 顯示干支輸入=(干支曆輸入===undefined)? false: 干支曆輸入;
    var 顯示其他選項輸入=(其他選項輸入===undefined)? false: 其他選項輸入;
    */
    var 生日輸入=[];

    生日輸入.push('<div class="container" id="ctnr-生日輸入" style="height: auto; width: 720px; margin-top: 20px; margin-left: 2px;">');
    生日輸入.push('<div class="jumbotron" style="width: 650px; padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;">');
    生日輸入.push('<div class="row">');
    生日輸入.push('<div class="col-md-12" id="mp-輸入曆法選項" style="height: auto; padding-top: 5px; padding-bottom: 5px;">');
    生日輸入.push('曆法：<input name="mp-輸入曆法" class="mp-輸入曆法" type="radio" value="西曆" id="mp-輸性曆法西曆" checked>西曆&nbsp&nbsp&nbsp&nbsp');

    生日輸入.push('<input name="mp-輸入曆法" class="mp-輸入曆法" type="radio" value="農曆" id="mp-輸性曆法農曆">農曆&nbsp&nbsp&nbsp&nbsp');
    生日輸入.push('<input name="mp-輸入曆法" class="mp-輸入曆法" type="radio" value="干支曆" id="mp-輸性曆法干支曆"><span id="mp-輸性干支曆標題">干支曆&nbsp&nbsp&nbsp&nbsp</span>');
    生日輸入.push('<span id="mp-disp-western-dob">輸入八字的生日：<select id="mp-干支轉西曆日期" style="width:160px;"></select></span>');  //干支曆法轉換才需要

    生日輸入.push('</div>');
    生日輸入.push('</div>');

    生日輸入.push('<div id="mp-輸入姓名性別" class="row">');
    生日輸入.push('<div class="col-md-12" style="height: auto; padding-top: 5px; padding-bottom: 5px;">');
    生日輸入.push('姓名：<input type="text" id="mp-輸入姓名" size="8" maxlength="8" />&nbsp&nbsp');
    生日輸入.push('性別：<input name="mp-輸入性別" type="radio" value="男" id="mp-輸性別名男" checked>男&nbsp&nbsp <input name="mp-輸入性別" type="radio" value="女" id="mp-輸性別名女">女');
    生日輸入.push('</div>');
    生日輸入.push('</div>');

    生日輸入.push('<div id="mp-數字生日輸入" class="row">');
    生日輸入.push('<div class="col-md-12" style="height: auto; padding-top: 5px; padding-bottom: 5px;">');
    生日輸入.push('日期：<select id="mp-輸入年" style="width:125px; height: 26px;"></select>&nbsp年&nbsp');
    生日輸入.push('<select id="mp-輸入月" style="width:50px; height: 26px;"></select>&nbsp月&nbsp');
    生日輸入.push('<span id="mp-chk-disp-輸入月-閏月"><input type="checkbox" id="mp-輸入月-閏月" value=1>閏月&nbsp</span>');
    生日輸入.push('<select id="mp-輸入日" style="width:50px; height: 26px;"></select>&nbsp日&nbsp');
    生日輸入.push('<select id="mp-輸入時" style="width:110px; height: 26px;"></select>&nbsp時&nbsp');
    生日輸入.push('<select id="mp-輸入分" style="width:50px; height: 26px;"></select>&nbsp<span id="mp-輸入分字">分</span>');
    生日輸入.push('</div>');
    生日輸入.push('</div>');

    生日輸入.push('<div id="mp-干支生日輸入" class="row">');
    生日輸入.push('<div class="col-md-12" style="height: auto; padding-top: 5px; padding-bottom: 5px;">');
    生日輸入.push('年柱：<select id="mp-輸入年干" style="width:45px;"></select>&nbsp');
    生日輸入.push('<select id="mp-輸入年支" style="width:45px;"></select>&nbsp&nbsp');
    生日輸入.push('月柱：<select id="mp-輸入月干" style="width:45px;"></select>&nbsp');
    生日輸入.push('<select id="mp-輸入月支" style="width:45px;"></select>&nbsp&nbsp');
    生日輸入.push('日柱：<select id="mp-輸入日干" style="width:45px;"></select>&nbsp');
    生日輸入.push('<select id="mp-輸入日支" style="width:45px;"></select>&nbsp&nbsp');
    生日輸入.push('時柱：<select id="mp-輸入時干" style="width:45px;"></select>&nbsp');
    生日輸入.push('<select id="mp-輸入時支" style="width:45px;"></select>&nbsp&nbsp');
    生日輸入.push('</div>');
    生日輸入.push('</div>');

    生日輸入.push('<div id="mp-其他輸入" class="row">');
    生日輸入.push('<div class="col-md-12" style="height: auto; padding-top: 5px; padding-bottom: 5px;">');
    生日輸入.push('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
    生日輸入.push('<span id="mp-chk-disp-夜子時"><input type="checkbox" id="mp-chk-夜子時" value=1 checked> 夜子時&nbsp&nbsp&nbsp</span>');
    生日輸入.push('<span id="mp-chk-disp-節氣轉換區域"><input type="checkbox" id="mp-chk-節氣轉換區域" value=1 checked> 節氣用區域時間&nbsp</span>');
    生日輸入.push('<span id="mp-chk-disp-節氣轉真太陽時"><input type="checkbox" id="mp-chk-節氣轉真太陽時" value=0> 節氣調整軌道太陽時&nbsp&nbsp&nbsp</span>');
    生日輸入.push('<span id="mp-chk-disp-City">城市：<select id="mp-City" style="width:75px;"></select>&nbsp&nbsp</span>');
    生日輸入.push('</div>');
    生日輸入.push('</div>');

    // ---------- customizable input tag -----------------
    生日輸入.push('<div id="mp-custom-input" class="row">');
        生日輸入.push('<div class="col-md-12" style="height: auto; padding-top: 5px; padding-bottom: 5px;">');
        生日輸入.push('</div>');
    生日輸入.push('</div>');

    生日輸入.push('<div class="row">');
    生日輸入.push('<div class="col-md-12" style="height: auto; padding-top: 8px; padding-bottom: 8px;">');
    生日輸入.push('<div class="pull-right">');
    生日輸入.push('<button id="btn-' + ButtonName +'" class="btn btn-primary"><span id="mp-btn-disp-text">' + ButtonStr + '</span></button>');
    生日輸入.push('</div>');
    生日輸入.push('</div>');
    生日輸入.push('</div>  <!-- end of button row-->');

    生日輸入.push('</div> <!-- end of input jumbotron-->');
    生日輸入.push('</div> <!-- end of input container-->');

    return 生日輸入.join("");
}  // end function Gen_生日輸入表格


function Gen_登錄表格(ButtonStr, ButtonName){
    /*
    var 顯示姓名輸入=(姓名輸入===undefined)? false: 姓名輸入;
    var 顯示性別輸入=(性別輸入===undefined)? false: 性別輸入;
    var 顯示農曆輸入=(農曆輸入===undefined)? false: 農曆輸入;
    var 顯示干支輸入=(干支曆輸入===undefined)? false: 干支曆輸入;
    var 顯示其他選項輸入=(其他選項輸入===undefined)? false: 其他選項輸入;
    */
    var 登錄輸入=[];

    登錄輸入.push('<div class="container" id="ctnr-登錄輸入" style="height: auto; width: 480px; margin-top: 20px; margin-left: 100px;">');
    登錄輸入.push('<div class="jumbotron" style="width: 340px; padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px;">');
    登錄輸入.push('<div class="row"></div>');

    登錄輸入.push('<div id="dl-輸入用戶" class="row">');
    登錄輸入.push('<div class="col-md-12" style="height: auto; padding-left: 80px; padding-top: 5px; padding-bottom: 5px;">');
    登錄輸入.push('用戶：<input type="text" id="dl-用戶名字" placeholder="用戶名字" size="12" maxlength="8";>&nbsp&nbsp');
    登錄輸入.push('</div>');
    登錄輸入.push('<div class="col-md-12" style="height: auto; padding-left: 80px; padding-top: 5px; padding-bottom: 5px;">');
    登錄輸入.push('密碼：<input type="password" id="dl-用戶密碼" placeholder="密碼" size="12>');
    登錄輸入.push('</div>');
    登錄輸入.push('</div>');

    /*
    // ---------- customizable input tag -----------------
    登錄輸入.push('<div id="mp-custom-input" class="row">');
    登錄輸入.push('<div class="col-md-12" style="height: auto; padding-top: 5px; padding-bottom: 5px;">');
    登錄輸入.push('</div>');
    登錄輸入.push('</div>');
    */
    
    登錄輸入.push('<div class="row">');
    登錄輸入.push('<div class="col-md-12" style="height: auto; padding-top: 8px; padding-bottom: 8px;">');
    登錄輸入.push('<div class="pull-right">');
    登錄輸入.push('<button id="btn-' + ButtonName +'" class="btn btn-primary"><span id="dl-btn-disp-text">' + ButtonStr + '</span></button>');
    登錄輸入.push('</div>');
    登錄輸入.push('</div>');
    登錄輸入.push('</div>  <!-- end of button row-->');

    登錄輸入.push('</div> <!-- end of input jumbotron-->');
    登錄輸入.push('</div> <!-- end of input container-->');

    return 登錄輸入.join("");
}  // end function Gen_登錄表格


function 初始化生日輸入(姓名輸入, 性別輸入, 農曆輸入, 干支曆輸入, 其他選項輸入, 吉時選項, 不填寫夜子時) {
    if(不填寫夜子時!=true) 不填寫夜子時 = false;

    填寫年份("mp-輸入年", 1924, 2037, true);
    填寫月份("mp-輸入月", true);
    填寫日期("mp-輸入日", true);
    填寫時間("mp-輸入時", 吉時選項, 不填寫夜子時);
    填寫分鐘("mp-輸入分");
    填寫城市("mp-City");

    填寫十天干("mp-輸入年干");
    填寫十二地支("mp-輸入年支");
    填寫十天干("mp-輸入月干");
    填寫十二地支("mp-輸入月支");
    填寫十天干("mp-輸入日干");
    填寫十二地支("mp-輸入日支");
    填寫十天干("mp-輸入時干");
    填寫十二地支("mp-輸入時支");

    if(姓名輸入==true || 性別輸入 == true) $("#mp-輸入姓名性別").show(); else $("#mp-輸入姓名性別").hide();

    if(干支曆輸入==false) {
        $("#mp-干支生日輸入").hide();
        $("#mp-輸性曆法干支曆").hide();
        $("#mp-輸性干支曆標題").hide();

    } 
    else
    {
        $("#mp-干支生日輸入").show();
        $("#mp-輸性曆法干支曆").show();
        $("#mp-輸性干支曆標題").show();
    }
    if(其他選項輸入==false) $("#mp-其他輸入").hide();
    
    // ------ load default status ------
    $("#mp-disp-western-dob").hide();  // 顯示干支曆法轉換的西曆生日
    $("#mp-chk-disp-輸入月-閏月").hide();  //預設是西曆，所以閏月隱藏
    $("#mp-干支生日輸入").hide(); //預設是西曆，所以干支曆法隱藏

    // **** 生日預設輸入 ******  //zeroPad(i,2)
    var CurDate = new Date();
    $("#mp-輸入年").val(CurDate.getFullYear());
    $("#mp-輸入月").val(zeroPad(CurDate.getMonth()+1,2));
    $("#mp-輸入日").val(zeroPad(CurDate.getDate(),2));
    $("#mp-輸入時").val(zeroPad(CurDate.getHours(),2));
    $("#mp-輸入分").val(zeroPad(CurDate.getMinutes(),2));
}


function 建立八字表格(){
    var BaziChart = [];

    BaziChart.push('<div class="container" id="ctnr-八字表格" style="height: auto; width: 700px; margin-top: 10px; margin-left: 2px;">');
    BaziChart.push('<table class="bzb-八字圖表">');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-資訊標題單格">命主</td>');
    BaziChart.push('<td class="bzb-資訊資料單格"><span id="mpxs-生日資訊">陽男</span></td>');
    BaziChart.push('<td rowspan="4" class="bzb-資訊招牌單格" id="mpxs-資訊招牌"><img class="displayed" alt="Logo" height="116px" width="180px" style="margin: 0px 0px 0px 0px" src=' + 系統.版本.HeaderImg+'></td>');    
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-資訊標題單格">西曆</td>');
    BaziChart.push('<td class="bzb-資訊資料單格"><span id="mpxs-西曆生日">1972</span></td>');
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-資訊標題單格">農曆</td>');
    BaziChart.push('<td class="bzb-資訊資料單格"><span id="mpxs-農曆生日">1972（壬子）年5（閏）月5日早子時</span></td>');
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-資訊標題單格">資訊</td>');
    BaziChart.push('<td class="bzb-資訊資料單格"><span id="mpxs-資訊備註"></span</td>');
    BaziChart.push('</tr>');
    BaziChart.push('</table>');


    BaziChart.push('<table class="bzb-八字圖表">');
    BaziChart.push('<tr>');
    BaziChart.push('<td colspan="13" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="橫幅名稱">八 字 排 盤</span</td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">四柱</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型">時柱</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型">日柱</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型">月柱</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型">年柱</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型">大運</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型">流年</td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">歲數</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-時柱歲數">*49-64*</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-日柱歲數">*33-48*</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-月柱歲數">*17-32*</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-年柱歲數">*1-16*</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-大運歲數">18</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-流年歲數">7</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">主星</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span class="mpxs-本命十神" id="mpxs-時干十神">食神</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span class="mpxs-本命十神" id="mpxs-日元">日元</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span class="mpxs-本命十神" id="mpxs-月干十神">偏財</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span class="mpxs-本命十神" id="mpxs-年干十神">劫財</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span class="mpxs-流運十神" id="mpxs-大運十神">正印</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span class="mpxs-流運十神" id="mpxs-流年十神">比肩</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">天干</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤大字無色字型"><span class="mpxs-本命八字干支" id="mpxs-時干">甲</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤大字無色字型"><span class="mpxs-本命八字干支" id="mpxs-日干">乙</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤大字無色字型"><span class="mpxs-本命八字干支" id="mpxs-月干">丙</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤大字無色字型"><span class="mpxs-本命八字干支" id="mpxs-年干">丁</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤大字無色字型"><span class="mpxs-流運八字干支" id="mpxs-大運干">戊</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤大字無色字型"><span class="mpxs-流運八字干支" id="mpxs-流年干">己</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">地支</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤大字無色字型"><span class="mpxs-本命八字干支" id="mpxs-時支">子</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤大字無色字型"><span class="mpxs-本命八字干支" id="mpxs-日支">丑</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤大字無色字型"><span class="mpxs-本命八字干支" id="mpxs-月支">寅</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤大字無色字型"><span class="mpxs-本命八字干支" id="mpxs-年支">卯</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤大字無色字型"><span class="mpxs-流運八字干支" id="mpxs-大運支">辰</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤大字無色字型"><span class="mpxs-流運八字干支" id="mpxs-流年支">巳</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr class="bzb-藏干行">');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">藏干</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格排上 bzb-命盤中大無色字型"><span class="mpxs-本命八字干支" id="mpxs-時支藏干1">癸</span><span class="mpxs-本命八字干支" id="mpxs-時支藏干2"></span><span class="mpxs-本命八字干支" id="mpxs-時支藏干3"></span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格排上 bzb-命盤中大無色字型"><span class="mpxs-本命八字干支" id="mpxs-日支藏干1">己</span><span class="mpxs-本命八字干支" id="mpxs-日支藏干2">癸</span><span class="mpxs-本命八字干支" id="mpxs-日支藏干3">辛</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格排上 bzb-命盤中大無色字型"><span class="mpxs-本命八字干支" id="mpxs-月支藏干1"></span><span class="mpxs-本命八字干支" id="mpxs-月支藏干2"></span><span class="mpxs-本命八字干支" id="mpxs-月支藏干3"></span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格排上 bzb-命盤中大無色字型"><span class="mpxs-本命八字干支" id="mpxs-年支藏干1"></span><span class="mpxs-本命八字干支" id="mpxs-年支藏干2"></span><span class="mpxs-本命八字干支" id="mpxs-年支藏干3"></span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格排上 bzb-命盤中大無色字型"><span class="mpxs-流運八字干支" id="mpxs-大運藏干1"></span><span class="mpxs-流運八字干支" id="mpxs-大運藏干2"></span><span class="mpxs-流運八字干支" id="mpxs-大運藏干3"></span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格排上 bzb-命盤中大無色字型"><span class="mpxs-流運八字干支" id="mpxs-流年藏干1"></span><span class="mpxs-流運八字干支" id="mpxs-流年藏干2"></span><span class="mpxs-流運八字干支" id="mpxs-流年藏干3"></span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr class="bzb-運星行">');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">運星</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-時運星">死</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-日運星">長生</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-月運星">帝旺</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-年運星">衰</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-大運運星">病</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-流年運星">墓</span></td>');
    BaziChart.push('</tr>');
    
    BaziChart.push('<tr class="bzb-納音行">');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">納音</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span class="mpxs-本命纳音" id="mpxs-時柱納音">海中金</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span class="mpxs-本命纳音" id="mpxs-日柱納音">長流水</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span class="mpxs-本命纳音" id="mpxs-月柱納音">---</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span class="mpxs-本命纳音" id="mpxs-年柱納音">---</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span class="mpxs-流運纳音" id="mpxs-大運納音">---</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span class="mpxs-流運纳音" id="mpxs-流年納音">---</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr class="bzb-神煞行">');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">神煞</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格排上 bzb-命盤中黑色字型"><span id="mpxs-時柱神煞">天乙貴人<br>學堂<br>金轝<br>劫殺<br>將星</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格排上 bzb-命盤中黑色字型"><span id="mpxs-日柱神煞">元辰</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格排上 bzb-命盤中黑色字型"><span id="mpxs-月柱神煞">孤辰<br>寡宿</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格排上 bzb-命盤中黑色字型"><span id="mpxs-年柱神煞">----</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格排上 bzb-命盤中黑色字型"><span id="mpxs-大運神煞">----</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格排上 bzb-命盤中黑色字型"><span id="mpxs-流年神煞">----</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr class="bzb-大運行">');  // bzb-大運行 沒有CSS，用於show/hide大運
    BaziChart.push('<td rowspan="3" class="bzb-命盤標題單格 bzb-命盤標題字型">大運</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運9起年">2068</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運8起年">2058</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運7起年">2048</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運6起年">2038</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運5起年">2028</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運4起年">2018</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運3起年">2008</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運2起年">1998</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運1起年">1988</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運0起年">-</span></td>');
    BaziChart.push('<td colspan="2" rowspan="3" class="bzb-命盤複合格"><img class="displayed" alt="Logo" height="96px" width="89px" style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;" src=' + 系統.版本.BodyImg+'></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr class="bzb-大運行">');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運9起歲">85</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運8起歲">75</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運7起歲">65</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運6起歲">55</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運5起歲">45</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運4起歲">35</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運3起歲">25</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運2起歲">15</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運1起歲">5</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-大運0起歲">1</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr class="bzb-大運行">');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 大運干支格" data-大運數="9"><span id="mpxs-大運9干支">癸<br>酉</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 大運干支格" data-大運數="8"><span id="mpxs-大運8干支">壬<br>申</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 大運干支格" data-大運數="7"><span id="mpxs-大運7干支">辛<br>未</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 大運干支格" data-大運數="6"><span id="mpxs-大運6干支">庚<br>午</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 大運干支格" data-大運數="5"><span id="mpxs-大運5干支">己<br>巳</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 大運干支格" data-大運數="4"><span id="mpxs-大運4干支">戊<br>辰</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 大運干支格" data-大運數="3"><span id="mpxs-大運3干支">丁<br>卯</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 大運干支格" data-大運數="2"><span id="mpxs-大運2干支">丙<br>寅</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 大運干支格" data-大運數="1"><span id="mpxs-大運1干支">乙<br>丑</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 大運干支格" data-大運數="0"><span id="mpxs-大運0干支">甲<br>子</span></td>');
    BaziChart.push('</tr>');    

    BaziChart.push('<tr class="bzb-流年行">');
    BaziChart.push('<td rowspan="3" class="bzb-命盤標題單格 bzb-命盤標題字型"><div class="命盤豎標題大運流年">流年</div></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年9年份">2009</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年8年份">2010</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年7年份">2011</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年6年份">2012</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年5年份">2013</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年4年份">2014</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年3年份">2015</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年2年份">2016</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年1年份">2017</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年0年份">2018</span></td>');
    BaziChart.push('<td colspan="2" rowspan="3" class="bzb-命盤複合格"><img class="displayed" alt="Logo" height="92px" width="89px" style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;" src=' + 系統.版本.CopyrightImg+'></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr class="bzb-流年行">');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年9歲數">38</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年8歲數">39</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年7歲數">40</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年6歲數">41</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年5歲數">42</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年4歲數">43</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年3歲數">44</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年2歲數">45</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年1歲數">46</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中小黑色字型"><span id="mpxs-流年0歲數">47</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr class="bzb-流年行">');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流年干支格子" data-流年數="9"><span id="mpxs-流年9干支">甲<br>子</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流年干支格子" data-流年數="8"><span id="mpxs-流年8干支">乙<br>丑</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流年干支格子" data-流年數="7"><span id="mpxs-流年7干支">丙<br>寅</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流年干支格子" data-流年數="6"><span id="mpxs-流年6干支">丁<br>卯</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流年干支格子" data-流年數="5"><span id="mpxs-流年5干支">戊<br>辰</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流年干支格子" data-流年數="4"><span id="mpxs-流年4干支">己<br>巳</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流年干支格子" data-流年數="3"><span id="mpxs-流年3干支">庚<br>午</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流年干支格子" data-流年數="2"><span id="mpxs-流年2干支">辛<br>未</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流年干支格子" data-流年數="1"><span id="mpxs-流年1干支">壬<br>申</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流年干支格子" data-流年數="0"><span id="mpxs-流年0干支">癸<br>酉</span></td>');
    BaziChart.push('</tr>');
    
    BaziChart.push('<tr class="bzb-小運行">');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">小運</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型" data-小運數="9"><span id="mpxs-小運9干支">甲<br>子</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型" data-小運數="8"><span id="mpxs-小運8干支">乙<br>丑</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型" data-小運數="7"><span id="mpxs-小運7干支">丙<br>寅</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型" data-小運數="6"><span id="mpxs-小運6干支">丁<br>卯</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型" data-小運數="5"><span id="mpxs-小運5干支">戊<br>辰</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型" data-小運數="4"><span id="mpxs-小運4干支">己<br>巳</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型" data-小運數="3"><span id="mpxs-小運3干支">庚<br>午</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型" data-小運數="2"><span id="mpxs-小運2干支">辛<br>未</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型" data-小運數="1"><span id="mpxs-小運1干支">壬<br>申</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型" data-小運數="0"><span id="mpxs-小運0干支">癸<br>酉</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤單格 bzb-命盤中中黑色字型"><img class="displayed" alt="Logo" height="50px" width="89px" style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;" src=' + 系統.版本.XiaoYunImg+'></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr class="bzb-流月行">');
    BaziChart.push('<td rowspan="2" class="bzb-命盤標題單格 bzb-命盤標題字型">流月</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型">十二</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型">十一</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型">十月</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型">九月</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型">八月</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型">七月</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型">六月</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型">五月</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型">四月</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型">三月</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型">二月</td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型">正月</td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr class="bzb-流月行">');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流月干支格子" data-流月數="11"><span id="mpxs-流月11干支">甲<br>子</div></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流月干支格子" data-流月數="10"><span id="mpxs-流月10干支">甲<br>子</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流月干支格子" data-流月數="9"><span id="mpxs-流月9干支">甲<br>子</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流月干支格子" data-流月數="8"><span id="mpxs-流月8干支">甲<br>子</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流月干支格子" data-流月數="7"><span id="mpxs-流月7干支">甲<br>子</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流月干支格子" data-流月數="6"><span id="mpxs-流月6干支">甲<br>子</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流月干支格子" data-流月數="5"><span id="mpxs-流月5干支">甲<br>子</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流月干支格子" data-流月數="4"><span id="mpxs-流月4干支">甲<br>子</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流月干支格子" data-流月數="3"><span id="mpxs-流月3干支">甲<br>子</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流月干支格子" data-流月數="2"><span id="mpxs-流月2干支">甲<br>子</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流月干支格子" data-流月數="1"><span id="mpxs-流月1干支">甲<br>子</span></td>');
    BaziChart.push('<td class="bzb-命盤單格 bzb-命盤中中黑色字型 流月干支格子" data-流月數="0"><span id="mpxs-流月0干支">甲<br>子</span></td>');
    BaziChart.push('</tr>');
    
    BaziChart.push('</table>');
    BaziChart.push('</div> <!-- end of Bazi Chart container-->');

    return BaziChart.join("");
}  //end bazi chart


function 八字基本盤表格(){
    var BaziChart = [];
    
    BaziChart.push('<div class="container" id="ctnr-八字表格" style="height: auto; width: 700px; margin-top: 10px; margin-left: 2px;">');
    /*
    BaziChart.push('<table class="bzb-八字圖表">');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-資訊標題單格">命主</td>');
    BaziChart.push('<td class="bzb-資訊資料單格"><span id="mpxs-生日資訊">陽男</span></td>');
    BaziChart.push('<td rowspan="4" class="bzb-資訊招牌單格" id="mpxs-資訊招牌"><img class="displayed" alt="Logo" height="116px" width="180px" style="margin: 0px 0px 0px 0px" src=' + 系統.版本.HeaderImg+'></td>');    
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-資訊標題單格">西曆</td>');
    BaziChart.push('<td class="bzb-資訊資料單格"><span id="mpxs-西曆生日">1972</span></td>');
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-資訊標題單格">農曆</td>');
    BaziChart.push('<td class="bzb-資訊資料單格"><span id="mpxs-農曆生日">1972（壬子）年5（閏）月5日早子時</span></td>');
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-資訊標題單格">資訊</td>');
    BaziChart.push('<td class="bzb-資訊資料單格"><span id="mpxs-資訊備註"></span</td>');
    BaziChart.push('</tr>');
    BaziChart.push('</table>');
    */

    BaziChart.push('<table class="bzb-八字圖表">');
    /*
    BaziChart.push('<tr>');
    BaziChart.push('<td colspan="13" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="橫幅名稱">八 字 排 盤</span</td>');
    BaziChart.push('</tr>');
    */
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">四柱</td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-命盤中大無色字型">時柱</td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-命盤中大無色字型">日柱</td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-命盤中大無色字型">月柱</td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-命盤中大無色字型">年柱</td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">主星</td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-命盤中大無色字型"><span class="mpxs-本命十神" id="mpxs-時干十神">食神</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-命盤中大無色字型"><span class="mpxs-本命十神" id="mpxs-日元">日元</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-命盤中大無色字型"><span class="mpxs-本命十神" id="mpxs-月干十神">偏財</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-命盤中大無色字型"><span class="mpxs-本命十神" id="mpxs-年干十神">劫財</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">天干</td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-jb-命盤加大無色字型"><span class="mpxs-本命八字干支" id="mpxs-時干">甲</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-jb-命盤加大無色字型"><span class="mpxs-本命八字干支" id="mpxs-日干">乙</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-jb-命盤加大無色字型"><span class="mpxs-本命八字干支" id="mpxs-月干">丙</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-jb-命盤加大無色字型"><span class="mpxs-本命八字干支" id="mpxs-年干">丁</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">地支</td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-jb-命盤加大無色字型"><span class="mpxs-本命八字干支" id="mpxs-時支">子</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-jb-命盤加大無色字型"><span class="mpxs-本命八字干支" id="mpxs-日支">丑</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-jb-命盤加大無色字型"><span class="mpxs-本命八字干支" id="mpxs-月支">寅</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格 bzb-jb-命盤加大無色字型"><span class="mpxs-本命八字干支" id="mpxs-年支">卯</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr class="bzb-藏干行">');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">藏干</td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格排上 bzb-命盤中大無色字型"><span class="mpxs-本命八字干支" id="mpxs-時支藏干1">癸</span><span class="mpxs-本命八字干支" id="mpxs-時支藏干2"></span><span class="mpxs-本命八字干支" id="mpxs-時支藏干3"></span></td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格排上 bzb-命盤中大無色字型"><span class="mpxs-本命八字干支" id="mpxs-日支藏干1">己</span><span class="mpxs-本命八字干支" id="mpxs-日支藏干2">癸</span><span class="mpxs-本命八字干支" id="mpxs-日支藏干3">辛</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格排上 bzb-命盤中大無色字型"><span class="mpxs-本命八字干支" id="mpxs-月支藏干1"></span><span class="mpxs-本命八字干支" id="mpxs-月支藏干2"></span><span class="mpxs-本命八字干支" id="mpxs-月支藏干3"></span></td>');
    BaziChart.push('<td colspan="2" class="bzb-jb-命盤單格排上 bzb-命盤中大無色字型"><span class="mpxs-本命八字干支" id="mpxs-年支藏干1"></span><span class="mpxs-本命八字干支" id="mpxs-年支藏干2"></span><span class="mpxs-本命八字干支" id="mpxs-年支藏干3"></span></td>');
    BaziChart.push('</tr>');

    
    BaziChart.push('</table>');
    BaziChart.push('</div> <!-- end of Bazi Chart container-->');

    return BaziChart.join("");
}  //end 八字基本盤表格


function 八字英文盤表格(){
    var BaziChart = [];
    
    BaziChart.push('<div class="container" id="ctnr-八字表格" style="height: auto; width: 700px; margin-top: 10px; margin-left: 2px;">');
    /*
    BaziChart.push('<table class="bzb-八字圖表">');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-資訊標題單格">命主</td>');
    BaziChart.push('<td class="bzb-資訊資料單格"><span id="mpxs-生日資訊">陽男</span></td>');
    BaziChart.push('<td rowspan="4" class="bzb-資訊招牌單格" id="mpxs-資訊招牌"><img class="displayed" alt="Logo" height="116px" width="180px" style="margin: 0px 0px 0px 0px" src=' + 系統.版本.HeaderImg+'></td>');    
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-資訊標題單格">西曆</td>');
    BaziChart.push('<td class="bzb-資訊資料單格"><span id="mpxs-西曆生日">1972</span></td>');
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-資訊標題單格">農曆</td>');
    BaziChart.push('<td class="bzb-資訊資料單格"><span id="mpxs-農曆生日">1972（壬子）年5（閏）月5日早子時</span></td>');
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-資訊標題單格">資訊</td>');
    BaziChart.push('<td class="bzb-資訊資料單格"><span id="mpxs-資訊備註"></span</td>');
    BaziChart.push('</tr>');
    BaziChart.push('</table>');
    */

    BaziChart.push('<table class="bzb-八字圖表">');
    /*
    BaziChart.push('<tr>');
    BaziChart.push('<td colspan="13" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="橫幅名稱">八 字 排 盤</span</td>');
    BaziChart.push('</tr>');
    */
    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">四柱</td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格 bzb-eng-命盤中大無色字型">時柱/Hour</td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格 bzb-eng-命盤中大無色字型">日柱/Day</td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格 bzb-eng-命盤中大無色字型">月柱/Month</td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格 bzb-eng-命盤中大無色字型">年柱/Year</td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">歲數</td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-時柱歲數">*49-64*</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-日柱歲數">*33-48*</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-月柱歲數">*17-32*</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-命盤複合格 bzb-命盤中大無色字型"><span id="mpxs-年柱歲數">*1-16*</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">主星</td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格 bzb-eng-命盤中大無色字型"><span class="mpxs-本命十神" id="mpxs-時干十神">食神</span> / <span id="mpxs-eng-時干十神">EG</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格 bzb-eng-命盤中大無色字型"><span class="mpxs-本命十神" id="mpxs-日元">日元</span> / <span id="mpxs-eng-日干十神">DM</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格 bzb-eng-命盤中大無色字型"><span class="mpxs-本命十神" id="mpxs-月干十神">偏財</span> / <span id="mpxs-eng-月干十神">IW</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格 bzb-eng-命盤中大無色字型"><span class="mpxs-本命十神" id="mpxs-年干十神">劫財</span> / <span id="mpxs-eng-年干十神">RW</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">天干<span class="bzb-eng-TitleText"><br>Heavenly Stems</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格"><span class="bzb-eng-subtext" id="mpxs-eng-時干">jia</span><br><span class="bzb-eng-命盤加大無色字型 mpxs-本命八字干支 " id="mpxs-時干">甲</span><br><span class="bzb-eng-subtext" id="mpxs-eng-yywx-時干">Yang Wood</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格"><span class="bzb-eng-subtext" id="mpxs-eng-日干">yi</span><br><span class="bzb-eng-命盤加大無色字型 mpxs-本命八字干支" id="mpxs-日干">乙</span><br><span class="bzb-eng-subtext" id="mpxs-eng-yywx-日干">Yin Wood</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格"><span class="bzb-eng-subtext" id="mpxs-end-月干">bing</span><br><span class="bzb-eng-命盤加大無色字型 mpxs-本命八字干支" id="mpxs-月干">丙</span><br><span class="bzb-eng-subtext" id="mpxs-eng-yywx-月干">Yang Fire</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格"><span class="bzb-eng-subtext" id="mpxs-eng-年干">ding</span><br><span class="bzb-eng-命盤加大無色字型 mpxs-本命八字干支" id="mpxs-年干">丁</span><br><span class="bzb-eng-subtext" id="mpxs-eng-yywx-年干">Yin Fire</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">地支<span class="bzb-eng-TitleText"><br>Earthly Branches</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格"><span class="bzb-eng-subtext" id="mpxs-eng-時支">zi</span><br><span class="bzb-eng-命盤加大無色字型 mpxs-本命八字干支" id="mpxs-時支">子</span><br><span class="bzb-eng-subtext" id="mpxs-eng-yywx-時支">Yang Water</span><br><span class="bzb-eng-subtext" id="mpxs-eng-zodiac-時支">Rooster</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格"><span class="bzb-eng-subtext" id="mpxs-eng-日支">chou</span><br><span class="bzb-eng-命盤加大無色字型 mpxs-本命八字干支" id="mpxs-日支">丑</span><br><span class="bzb-eng-subtext" id="mpxs-eng-yywx-日支">Yin Water</span><br><span class="bzb-eng-subtext" id="mpxs-eng-zodiac-日支">Monkey</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格"><span class="bzb-eng-subtext" id="mpxs-eng-月支">yin</span><br><span class="bzb-eng-命盤加大無色字型 mpxs-本命八字干支" id="mpxs-月支">寅</span><br><span class="bzb-eng-subtext" id="mpxs-eng-yywx-月支">Yang Metal</span><br><span class="bzb-eng-subtext" id="mpxs-eng-zodiac-月支">Ox</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格"><span class="bzb-eng-subtext" id="mpxs-eng-年支">mao</span><br><span class="bzb-eng-命盤加大無色字型 mpxs-本命八字干支" id="mpxs-年支">卯</span><br><span class="bzb-eng-subtext" id="mpxs-eng-yywx-年支">Yang Metal</span><br><span class="bzb-eng-subtext" id="mpxs-eng-zodiac-年支">Rabbit</span></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr class="bzb-藏干行">');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">藏干<span class="bzb-eng-TitleText"><br>Hidden Stems</span></td>');

    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格排上">');  // ------------- 時支藏干 -------------
        BaziChart.push('<div class="row">');
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-時支藏干1">癸</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-時支藏干1">- Water</p>');
            BaziChart.push('</div>'); //col-1
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-時支藏干十神1">劫財</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-時支十神1">RW</p>');
            BaziChart.push('</div>');  //col-2         
        BaziChart.push('</div>'); // row

        BaziChart.push('<div class="row">');
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-時支藏干2">癸</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-時支藏干2">- Water</p>');
            BaziChart.push('</div>'); //col-1
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-時支藏干十神2">劫財</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-時支十神2">RW</p>');
            BaziChart.push('</div>');  //col-2         
        BaziChart.push('</div>'); // row

        BaziChart.push('<div class="row">');
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-時支藏干3">癸</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-時支藏干3">- Water</p>');
            BaziChart.push('</div>'); //col-1
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-時支藏干十神3">劫財</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-時支十神3">RW</p>');
            BaziChart.push('</div>');  //col-2         
        BaziChart.push('</div>'); // row
    BaziChart.push('</td>');

    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格排上">');  // ------------- 日支藏干 -------------
        BaziChart.push('<div class="row">');
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-日支藏干1">癸</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-日支藏干1">- Water</p>');
            BaziChart.push('</div>'); //col-1
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-日支藏干十神1">劫財</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-日支十神1">RW</p>');
            BaziChart.push('</div>');  //col-2         
        BaziChart.push('</div>'); // row

        BaziChart.push('<div class="row">');
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-日支藏干2">癸</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-日支藏干2">- Water</p>');
            BaziChart.push('</div>'); //col-1
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-日支藏干十神2">劫財</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-日支十神2">RW</p>');
            BaziChart.push('</div>');  //col-2         
        BaziChart.push('</div>'); // row

        BaziChart.push('<div class="row">');
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-日支藏干3">癸</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-日支藏干3">- Water</p>');
            BaziChart.push('</div>'); //col-1
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-日支藏干十神3">劫財</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-日支十神3">RW</p>');
            BaziChart.push('</div>');  //col-2         
        BaziChart.push('</div>'); // row
    BaziChart.push('</td>');

    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格排上">');  // ------------- 月支藏干 -------------
        BaziChart.push('<div class="row">');
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-月支藏干1">癸</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-月支藏干1">- Water</p>');
            BaziChart.push('</div>'); //col-1
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-月支藏干十神1">劫財</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-月支十神1">RW</p>');
            BaziChart.push('</div>');  //col-2         
        BaziChart.push('</div>'); // row

        BaziChart.push('<div class="row">');
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-月支藏干2">癸</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-月支藏干2">- Water</p>');
            BaziChart.push('</div>'); //col-1
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-月支藏干十神2">劫財</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-月支十神2">RW</p>');
            BaziChart.push('</div>');  //col-2         
        BaziChart.push('</div>'); // row

        BaziChart.push('<div class="row">');
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-月支藏干3">癸</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-月支藏干3">- Water</p>');
            BaziChart.push('</div>'); //col-1
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-月支藏干十神3">劫財</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-月支十神3">RW</p>');
            BaziChart.push('</div>');  //col-2         
        BaziChart.push('</div>'); // row
    BaziChart.push('</td>');

    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格排上">');  // ------------- 年支藏干 -------------
        BaziChart.push('<div class="row">');
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-年支藏干1">癸</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-年支藏干1">- Water</p>');
            BaziChart.push('</div>'); //col-1
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-年支藏干十神1">劫財</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-年支十神1">RW</p>');
            BaziChart.push('</div>');  //col-2         
        BaziChart.push('</div>'); // row

        BaziChart.push('<div class="row">');
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-年支藏干2">癸</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-年支藏干2">- Water</p>');
            BaziChart.push('</div>'); //col-1
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-年支藏干十神2">劫財</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-年支十神2">RW</p>');
            BaziChart.push('</div>');  //col-2         
        BaziChart.push('</div>'); // row

        BaziChart.push('<div class="row">');
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-年支藏干3">癸</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-年支藏干3">- Water</p>');
            BaziChart.push('</div>'); //col-1
            BaziChart.push('<div class="col-xs-6">');
                BaziChart.push('<p class="mpxs-本命八字干支 bzb-eng-cg-mid" id="mpxs-eng-年支藏干十神3">劫財</p><p class="bzb-eng-subtext-small" id="mpxs-eng-yywx-年支十神3">RW</p>');
            BaziChart.push('</div>');  //col-2         
        BaziChart.push('</div>'); // row
    BaziChart.push('</td>');
    BaziChart.push('</tr>');
    /*
    BaziChart.push('<tr class="bzb-藏干行">');
    BaziChart.push('<td class="bzb-命盤標題單格 bzb-命盤標題字型">藏干<span class="bzb-eng-TitleText"><br>Hidden Stems</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格排上 bzb-eng-命盤中大無色字型"><span class="mpxs-本命八字干支" id="mpxs-時支藏干1">癸</span><span class="mpxs-本命八字干支" id="mpxs-時支藏干2"></span><span class="mpxs-本命八字干支" id="mpxs-時支藏干3"></span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格排上 bzb-eng-命盤中大無色字型"><span class="mpxs-本命八字干支" id="mpxs-日支藏干1">己</span><span class="mpxs-本命八字干支" id="mpxs-日支藏干2">癸</span><span class="mpxs-本命八字干支" id="mpxs-日支藏干3">辛</span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格排上 bzb-eng-命盤中大無色字型"><span class="mpxs-本命八字干支" id="mpxs-月支藏干1"></span><span class="mpxs-本命八字干支" id="mpxs-月支藏干2"></span><span class="mpxs-本命八字干支" id="mpxs-月支藏干3"></span></td>');
    BaziChart.push('<td colspan="2" class="bzb-eng-命盤單格排上 bzb-eng-命盤中大無色字型"><span class="mpxs-本命八字干支" id="mpxs-年支藏干1"></span><span class="mpxs-本命八字干支" id="mpxs-年支藏干2"></span><span class="mpxs-本命八字干支" id="mpxs-年支藏干3"></span></td>');
    BaziChart.push('</tr>');
    */

    
    BaziChart.push('</table>');
    BaziChart.push('</div> <!-- end of Bazi Chart container-->');

    return BaziChart.join("");
}  //end 八字英文盤表格




// ************************ Generate Rotating Quotes ***********************

function GenRotatingQuotes(){
    var RotQuote = [];

    var 名師名句矩陣=[];
    名師名句矩陣.push('<li data-author="--- 自然之道：李應聰">子 平 八 字 重 月 令， 財 官 印 食 格 局 成。 有 殺 先 論 命 中 訣， 病 藥 用 忌 要 分 清。 自 然 之 道 分 陰 陽， 五 行 通 變 在 其 中！</li>');
    名師名句矩陣.push('<li data-author="--- 紫芸居：詹芸閑">日 夜 四 時 萬 物 生， 春 夏 秋 冬 四 季 土， 生 化 之 機 唯 調 候， 養 命 為 先 次 論 貴。</li>');
    名師名句矩陣.push('<li data-author="--- 八字論命論壇社長：陳易賢">天 地 混 沌 體 太 極， 伏 羲 一  筆 定 乾 坤， 陰 陽 五 行 橫 三 界， 世 道 無 情 如 火 宅， 命 學 傳 世 點 迷 津， 神 而 明 之 渡 人 舟。</li>');
    名師名句矩陣.push('<li data-author="--- 紫芸居：詹芸閑">辰戌丑未 四墓庫， 寅申巳亥 各自入， 子午卯酉 皆絆合， 日元入墓 易磋跎， 置之死地 而後生， 絕處逢生 待訊息， 刑衝出墓 運來臨， 待得天機 魚化龍。</li>');
    名師名句矩陣.push('<li data-author="--- 世和堂命理：黃世和">燈 火 需 明 放 光 芒， 切 忌 灰 塵 矇 蔽 輝， 燭 光 依 賴 蠟 油 香， 恐 防 東 風 猛 狂 吹， 丁 火 長 明 火 把 光， 巽 風 火 鄉 放 光 芒。</li>');
    //名師名句矩陣.push('<li data-author="--- 滴天髓："></li>');
    var tempEle, randomNum, ArryLength;
    ArryLength = 名師名句矩陣.length - 1;
    for(var i=0; i < ArryLength; i++){
        randomNum = Math.floor(Math.random() * ArryLength);
        randomEle = 名師名句矩陣[randomNum];  //pick a random element in the array
        名師名句矩陣.splice(randomNum, 1);
        名師名句矩陣.unshift(randomEle);

    }  //end for
    var 名師名句=名師名句矩陣.join("");

    var 滴天髓十干矩陣=[];
    滴天髓十干矩陣.push('<li data-author="甲為根幹之木，純陽之本，參天雄壯，火者，木之子也，旺木得火而愈敷榮，生於春，則助火而不能容金也，生於秋則助金而不能容土也，寅午戌丙丁多見而坐辰，能攝之，申子辰壬癸多見而坐寅，則能納之，土氣不乾，水氣不消，則能長生矣。辰為水庫，能制火滋木，而土能洩火，則甲之根潤，故不怕火，甲祿於寅，寅屬艮，土厚，故能納水。">甲 木 參 天， 脫 胎 要 火， 春 不 容 金， 秋 不 容 土， 火 熾 乘 龍， 水 蕩 騎 虎， 地 潤 天 和， 植 立 千 古。</li>');
    滴天髓十干矩陣.push('<li data-author="乙為枝葉之木，柔如花卉，然坐丑未能制之，（丑未陰土，故乙能制）如宰羊割牛，只要有一丙丁，則雖申酉之月，亦不畏怯，生於子月，（木葉凋零之時，水多益寒）而又辛壬癸透者，則雖得午，亦難發生，（乙雖生午，然午能洩乙，況一火不能敵眾水也）若甲與寅多見，譬之縢蘿附喬木，春月秋月皆可。">乙 木 雖 柔， 刲 羊 解 牛， 懷 丁 抱 丙， 跨 雞 乘 猴， 虛 濕 之 地， 騎 馬 亦 憂， 藤 蘿 繫 甲， 可 春 可 秋。</li>');
    滴天髓十干矩陣.push('<li data-author="丙為焚烈之火，純陽之性，故不畏秋而欺霜，不畏冬而侮雪，庚金雖頑，力能煆之，辛金雖柔，合而反弱，土其子也，見戊己多而慈惠之德，水其君也，遇壬癸旺而顯忠節之風，至丙遂炎上之性，而寅午戌更露甲木，（身旺遇印）則燥而焚滅也。">丙 火 猛 烈， 欺 霜 侮 雪， 能 煆 庚 金， 逢 辛 反 怯， 土 眾 成 慈， 水 猖 顯 節， 虎 馬 犬 鄉， 甲 來 焚 滅。</li>');
    滴天髓十干矩陣.push('<li data-author="丁為溫煖之火，其性雖烈而屬陰，則柔而得其中矣，外柔順而內文明，豈不昭融乎，乙乃丁之母，畏辛而丁抱之，不若丙抱甲而反能焚甲也，不若己抱丁而反能晦丁也，其孝異乎人矣，壬為丁之君，壬所畏者戊，外則撫恤戊土，使土不來欺壬也，內則暗化木神，使戊不能抗壬也，其忠異乎人矣，生於夏合，其燄不至於烈，生於秋冬，得一甲木，雖衰不至於窮，故曰可秋可冬，皆柔道也。">丁 火 柔 中， 內 性 昭 融， 抱 乙 而 考， 合 壬 而 忠， 旺 而 不 烈， 衰 而 不 窮， 如 有 嫡 母， 可 秋 可 冬。</li>');
    滴天髓十干矩陣.push('<li data-author="戊為山岡之，土非城牆之謂，較己土特高厚剛燥，乃己土之發源地也，得乎中氣，而且正，大春夏則氣闢而生萬物，秋冬則氣翕而成萬物，故為司命，其氣屬陽，喜潤下惡燥，坐寅怕申，坐申怕寅，蓋沖則根動，非地道之正也，故宜靜。">戊 土 固 重， 既 中 且 正， 靜 翕 動 闢， 萬 物 司 合， 水 旺 物 生， 火 燥 喜 喜 潤， 若 在 坤 艮， 怕 沖 宜 靜。</li>');
    滴天髓十干矩陣.push('<li data-author="己為田園之，土其性卑濕，乃戊土枝葉之地，亦主中正，蓄藏萬物，柔土能生木，非木所能克，故不愁木盛，土深能納水，非水所能蕩，故不畏水旺，無根之火，不能生濕土，故火少而光晦，濕土能潤金，故金多而金之光彩，反精瑩可觀，此其無為而有為之妙用，若欲充盛長旺乎萬物，則宜幫助為佳。">己 土 卑 濕， 中 正 蓄 藏， 不 愁 木 盛， 不 畏 水 旺， 火 少 火 晦， 金 多 金 明， 若 要 物 昌， 宜 助 宜 幫。</li>');
    滴天髓十干矩陣.push('<li data-author="庚乃陽金，是太白之精，帶煞而剛健，健而得水，則氣流而清，剛而得火，則氣純而粹，有水之土，能全其生，有火之土，能使其脆，甲木雖強，力足伐之，乙木雖柔，合而輸之。">庚 金 帶 煞， 剛 強 為 最， 得 水 而 清， 得 火 而 銳， 土 潤 則 生， 土 乾 則 脆， 能 勝 申 兄， 輸 於 乙 妹。</li>');
    滴天髓十干矩陣.push('<li data-author="辛乃陰金，非珠玉之謂，特溫柔清潤耳，戊土多則埋故之，壬水多則秀故樂之，辛為丙之臣也，撫恤壬水，使不剋丙火，而匡扶社稷，辛為甲之君也，合化丙火，使不焚甲木，而救援生靈，生於九夏，而得己土，則能晦火而存之，生於隆冬，而得丁火，則能敵寒而養之，故辛金生於冬月，見丙則男命不貴，（丙辛合而化水）雖貴亦不忠，女命剋夫，不剋亦不和，若見丁則男女皆貴且順。">辛 金 軟 弱， 溫 潤 而 清， 畏 土 之 疊， 樂 水 之 盈， 能 扶 社 稷， 能 救 生 靈， 熱 則 喜 母， 寒 則 喜 丁。</li>');
    滴天髓十干矩陣.push('<li data-author="壬乃癸水之源，有分有合，運行不息，為百川，亦為雨露，不可岐而二之，壬水能洩西方金氣，其德剛中而又周流不滯，若遇申子辰，而又透癸，則其勢不可遏也，合丁化木，又生丁火，可謂有情，能制丙火，不奪丁之愛，故為夫義而為君仁，生於九夏，則巳午未中土之氣，得壬水薰蒸而成雨露，故雖從火土，未嘗不相濟也。">壬 水 汪 洋， 能 洩 金 氣， 剛 中 之 德， 周 流 不 滯， 通 根 透 癸， 沖 天 奔 地， 化 則 有 情， 從 則 相 濟。</li>');
    滴天髓十干矩陣.push('<li data-author="癸乃純陰而至弱，然上達天津，凡柱中有甲乙寅卯，皆能運用水氣，生木制火，潤土養金，如龍能運水，火土雖多不畏，至於庚辛，則不賴其生，亦不忌其多，惟合戊化火，必通火根，乃為真也。">癸 水 至 弱， 達 於 天 津， 龍 德 而 運， 功 化 斯 神， 不 畏 火 土， 不 論 庚 辛， 合 戊 見 火， 火 根 乃 真。</li>');
    var 滴天髓十干=滴天髓十干矩陣.join("");

    var 滴天髓輯要1矩陣=[];
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：形象論">兩 氣 合 而 成 象， 象 不 可 破 也。 五 氣 聚 而 成 形， 形 不 可 害 也。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：形象論">獨 象 喜 行 化 地，而 化 神 要 昌。 全 象 喜 行 財 地， 而 財 神 要 旺。 形 全 者 宜 損 其 有 餘， 形 缺 者 宜 補 其 不 足。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：方局論">方 是 方 兮 局 是 局， 方 要 得 方 莫 混 局。 局 混 方 兮 有 純 庛， 行 運 喜 南 或 喜 北。 若 然 方 局 一 齊 來， 須 是 干 頭 無 反 覆。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：方局論">成 方 干 透 一 元 神， 生 地 庫 地 皆 非 福。 成 局 干 透 一 官 星， 左 邊 右 邊 空 碌 碌。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：格局論">財 官 印 綬 分 偏 正， 兼 論 食 傷 格 局 定。 影 響 遙 繫 既 為 虛， 雜 氣 財 官 不 可 拘。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：格局論">官 煞 相 混 來 問 我， 有 可 有 不 可。 傷 官 見 官 果 難 辨， 可 見 不 可 見。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：從化論">從 得 真 者 只 論 從， 從 神 又 有 吉 和 凶。 化 得 真 者 只 論 化， 化 神 還 有 幾 般 話。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：從化論">真 從 之 象 有 幾 人， 假 從 亦 可 發 其 身。 假 化 之 人 亦 可 貴， 孤 兒 異 姓 能 出 類。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：性情論">五 行 不 戾， 惟 正 清 和， 濁 亂 偏 枯， 性 情 乖 逆。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：性情論">火 烈 而 性 燥 者， 遇 金 水 之 激。 水 奔 而 性 柔 者， 全 金 木 之 神。 木 奔 南 而 軟 怯。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：性情論">金 見 水 以 流 通。 最 拗 者 ， 西 水 還 南。 至 剛 者 東 火 轉 北。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：性情論">順 生 之 機， 遇 擊 神 而 抗。 逆 折 之 序， 見 閒 神 而 狂。 陽 明 遇 金， 鬱 而 多 煩。 陰 濁 藏 火， 包 而 多 滯。</li>');
    var 滴天髓輯要1=滴天髓輯要1矩陣.join("");

    var 滴天髓輯要2矩陣=[];
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：寒暖論">天 道 有 寒 暖， 發 育 萬 物， 人 道 得 之， 不 可 過 也。 地 道 有 燥 濕， 生 成 品 彙， 人 道 得 之， 不 可 偏 也。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：剛柔論、順逆論">剛 柔 不 一 也， 不 可 制 者， 引 其 性 情 而 已 矣。 順 逆 不 齊 也， 不 可 逆 者， 順 其 氣 勢 而 己 矣。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：月令論">月 令 提 綱， 譬 之 宅 也， 人 元 用 事 之 神， 宅 之 向 也， 不 可 以 不 卜。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：生時論">生 時 歸 宿， 譬 之 墓 也， 人 元 用 事 之 神， 墓 之 穴 也， 不 可 以 不 辨。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：源流論">何 處 起 根 源， 流 向 可 方 住， 機 括 此 中 求， 知 來 亦 知 去。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：通隔論">兩 意 本 相 通， 中 間 有 關 隔， 此 關 若 通 也， 到 處 歡 相 得。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：清濁論">一 清 到 底 有 清 神， 管 取 平 生 富 貴 真， 澄 濁 求 清 清 得 去， 時 來 寒 谷 也 生 春。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：清濁論">滿 盤 濁 氣 令 人 苦， 一 局 清 枯 也 苦 人， 半 濁 半 清 無 去 取， 多 成 多 敗 度 晨 昏。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：真假論">令 上 尋 真 聚 得 真， 假 神 休 要 亂 真 神， 真 神 得 用 平 生 貴， 用 假 終 為 碌 碌 人。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：真假論">真 假 參 差 難 辨 論， 不 明 不 暗 受 邅 迍， 提 綱 不 與 真 神 照， 暗 處 尋 真 也 有 真。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：隱顯論、眾寡論">吉 神 太 露，起 爭 奪 之 風， 凶 物 深 藏， 成 養 虎 之 患。抑 強 扶 弱 者 常 理， 用 強 舍 弱 者 元 機。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：奮鬱論">局 中 顯 奮 發 之 機 者， 神 舒 意 暢， 局 內 多 沉 埋 之 氣 者， 心 鬱 志 灰。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：恩怨論">兩 意 情 通 中 有 媒， 雖 然 遙 立 意 尋 追， 有 情 郤 被 人 離 間， 怨 起 中 間 死 者 灰。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：順反論">一 出 門 來 要 見 兒， 見 兒 成 氣 轉 相 楣， 從 兒 不 論 身 強 弱， 只 要 吾 兒 又 遇 兒。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：順反論">君 賴 臣 生 理 最 微， 兒 能 生 母 洩 天 機， 母 慈 滅 子 關 頭 異， 夫 健 何 為 又 怕 妻。</li>');
    var 滴天髓輯要2=滴天髓輯要2矩陣.join("");
    
    var 滴天髓輯要3矩陣=[];
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：戰合論">天 戰 猶 自 可， 地 戰 急 如 火。 合 有 宜 不 宜， 合 多 不 為 奇。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：震兌論、坎離論">震 兌 勢 不 兩 立， 而 有 相 成 者 存。 坎 離 氣 不 並 行， 而 有 相 濟 者 在。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：君臣論">君 不 可 抗 也， 貴 乎 損 上 以 益 下。 臣 不 可 過 也， 貴 乎 損 下 益 上。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：母子論">知 慈 母 恤 孤 之 道， 方 有 瓜 瓞 無 疆 之 慶。 知 孝 子 奉 親 之 方， 始 能 克 諧 大 順 之 風。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：才德論">德 勝 才 者， 局 全 君 子 之 風， 才 勝 德 者， 用 顯 多 能 之 象。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：閒神論">閒 神 一 二 未 為 疵， 不 去 何 妨 莫 動 伊， 半 局 閒 神 任 閒 著， 要 緊 之 地 立 根 基。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：絆神論">出 門 要 向 天 涯 遊， 何 似 裙 釵 恣 意 留， 不 管 白 雲 與 明 月， 任 君 策 馬 上 皇 州</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：貞元論">造 化 生 生 不 息 機， 貞 元 往 復 運 誰 知， 有 人 識 得 其 中 數， 貞 下 開 元 是 處 宜。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：貴賤貧富吉凶壽夭論">何 知 其 人 貴， 官 星 有 理 會。 何 知 其 人 賤， 官 星 總 不 見。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：貴賤貧富吉凶壽夭論">何 知 其 人 富， 財 氣 通 門 戶。 何 知 其 人 貧， 財 神 終 不 真。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：貴賤貧富吉凶壽夭論">何 知 其 人 吉， 喜 神 為 輔 弼。 何 知 其 人 凶， 忌 神 輾 轉 攻。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：貴賤貧富吉凶壽夭論">何 知 其 人 壽， 性 定 元 氣 厚。 何 知 其 人 夭， 氣 濁 神 枯 了。</li>');
    //滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓："></li>');

    var 滴天髓輯要3=滴天髓輯要3矩陣.join("");

    var QuoteNum = (Math.floor(Math.random() * 4) + 1);
    var SelectedQuote;
    switch(QuoteNum) {
        case 1:
            SelectedQuote = 滴天髓十干;
            break;
        case 2:
            SelectedQuote = 滴天髓輯要1;
            break;
        case 3:
            SelectedQuote = 滴天髓輯要2;
            break;
        case 4:
            SelectedQuote = 滴天髓輯要3;
            break;
        default:
            SelectedQuote = 滴天髓輯要2;
    } // end switch

    RotQuote.push('<ul class="word-container">');
    RotQuote.push(名師名句);
    RotQuote.push(SelectedQuote);
    RotQuote.push('</ul>');
    RotQuote.push('<div class="quote">');
    RotQuote.push('<blockquote>');
    RotQuote.push('<p class="quote-content"></p>');
    RotQuote.push('</blockquote>');
    RotQuote.push('<cite class="quote-author"></cite>');
    RotQuote.push('</div>');

    return RotQuote.join("");  
}  //end GenRotatingQuotes


// *************************************



/*
function UserDB(){
    var udb = [
		{"用戶":"guest","解碼":"91401612A08rr21.TldqK", "pwd":"q1,0230040~%7.3768", "title":"", "logo":"", "備註":""},
        {"用戶":"espua","解碼":"85390322A08<1./0hvsxd", "pwd":"7~88003.(%,84", "title":"", "logo":"", "備註":""},
		//{"用戶":"espua","解碼":"35090322A08rGxq2Zrrkr", "pwd":"u0%~88003.7v8q1,84", "title":"", "logo":"", "備註":""},
		{"用戶":"zyx","解碼":"17376142A08dq<1.Wxq[l", "pwd":"u0%~09063.7v8q1,14", "title":"", "logo":"", "備註":""},
        {"用戶":"joan","解碼":"17376142A08dq<1.Wxq[l", "pwd":"u0%~00003.7v8q1,04", "title":"", "logo":"", "備註":""},
        {"用戶":"user3571","解碼":"11401312A088:4<1xvhu6", "pwd":"7~49053.(%,34", "title":"", "logo":"", "備註":""},
        {"用戶":"user2653","解碼":"17376142A08dq<1.Wxq[l", "pwd":"u0%~00003.7v8q1,04", "title":"", "logo":"", "備註":""},
        {"用戶":"user1804","解碼":"17376142A08dq<1.Wxq[l", "pwd":"u0%~00003.7v8q1,04", "title":"", "logo":"", "備註":""},
        {"用戶":"user4791","解碼":"17376142A08dq<1.Wxq[l", "pwd":"u0%~00003.7v8q1,04", "title":"", "logo":"", "備註":""},
        {"用戶":"user5194","解碼":"17376142A08dq<1.Wxq[l", "pwd":"u0%~00003.7v8q1,04", "title":"", "logo":"", "備註":""},
        {"用戶":"user6347","解碼":"17376142A08dq<1.Wxq[l", "pwd":"u0%~00003.7v8q1,04", "title":"", "logo":"", "備註":""},
        {"用戶":"user7680","解碼":"17376142A08dq<1.Wxq[l", "pwd":"u0%~00003.7v8q1,04", "title":"", "logo":"", "備註":""},
        {"用戶":"user8492","解碼":"17376142A08dq<1.Wxq[l", "pwd":"u0%~00003.7v8q1,04", "title":"", "logo":"", "備註":""},
        {"用戶":"user9168","解碼":"17376142A08dq<1.Wxq[l", "pwd":"u0%~00003.7v8q1,04", "title":"", "logo":"", "備註":""},
        {"用戶":"user0349","解碼":"17376142A08dq<1.Wxq[l", "pwd":"u0%~00003.7v8q1,04", "title":"", "logo":"", "備註":""},
    ];
    
    return udb;
}  // end function UserDB()

*/


