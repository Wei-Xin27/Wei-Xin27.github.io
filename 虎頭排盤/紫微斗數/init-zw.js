


function 系統初始(){
    this.版本 = new 版本參數設定();
    this.設定 = new 系統參數();
} // end function 系統初始



function 斗數命盤初始(){
    document.title = 系統.版本.網頁標題;
    
    $("#div-飛星斗數-登錄").html(Gen_登錄表格("登錄", "飛星斗數登錄"));
    $("#div-斗數-生日輸入").html(Gen_生日輸入表格("查詢", "斗數"));
	初始化生日輸入(true, true, false, false, false, false);
    $("#mp-輸入分").hide();  //不顯示 分鐘 的輸入選項
    $("#mp-輸入分字").hide();

    $("#div-斗數-生日輸入").hide();
    if(系統.設定.用戶設定.命盤顯示.登錄 == false) {
        $("#nrxs-飛星斗數-圖").hide();
        $("#div-飛星斗數-登錄").hide();
        $("#div-斗數-生日輸入").show();
    }  // end if 登錄
    
    //$("#Menu-四化飛伏").hide();
	
    if(系統.設定.用戶設定.輸入預設.命盤預設用當下時間==false){
        $("#mp-輸入年").val(系統.設定.用戶設定.輸入預設.年);
        $("#mp-輸入月").val(zeroPad(系統.設定.用戶設定.輸入預設.月,2));
        $("#mp-輸入日").val(zeroPad(系統.設定.用戶設定.輸入預設.日,2));
        $("#mp-輸入時").val(zeroPad(系統.設定.用戶設定.輸入預設.時,2));
        $("#mp-輸入分").val(zeroPad(0,2));
    }

    $("#DouShuChart").html(斗數十二宮格());
    $("#DouShuChart").hide();


    Init_飛星盤Customization();


    // ******** Get Browser & IP Info *********
    var systeminfo = $.pgwBrowser();
    系統.設定.system.瀏覽器 = systeminfo.browser.name;
    系統.設定.system.瀏覽器版本 = systeminfo.browser.fullVersion;
    系統.設定.system.平台系統 = systeminfo.os.name;
    系統.設定.system.平台系統版本 = systeminfo.os.fullVersion;
    系統.設定.system.ViewporWidth = systeminfo.viewport.width;
    系統.設定.system.ViewporHeight = systeminfo.viewport.height;
    系統.設定.system.ViewportOrientation = systeminfo.viewport.orientation;
    系統.設定.system.UserAgent = systeminfo.userAgent;

    $.getJSON('http://ipinfo.io', function(data) {
        系統.設定.system.IP = data.ip;
        系統.設定.system.city = data.city;
        系統.設定.system.LatLong = data.loc;
        系統.設定.system.country = data.country;
    });
}  // end function function 斗數命盤初始


