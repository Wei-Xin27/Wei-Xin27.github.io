
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
    
	
    // ------------- customize input ------------------
    $("#mp-custom-input").html(InputMenuCustomization());
	$("#sr-shhp-四化門派").val(系統.設定.用戶設定.三合派.四化門派);
    $("#sr-shhp-閏月處理").val(系統.設定.用戶設定.三合派.閏月月份計算);
    
    
    if(系統.設定.用戶設定.輸入預設.命盤預設用當下時間==false){
        $("#mp-輸入年").val(系統.設定.用戶設定.輸入預設.年);
        $("#mp-輸入月").val(zeroPad(系統.設定.用戶設定.輸入預設.月,2));
        $("#mp-輸入日").val(zeroPad(系統.設定.用戶設定.輸入預設.日,2));
        $("#mp-輸入時").val(zeroPad(系統.設定.用戶設定.輸入預設.時,2));
        $("#mp-輸入分").val(zeroPad(0,2));
    }
    
    
    // 輔助程式Div:
    $("#shhp-命盤輔助程式").html(shhp_AppMenu());
    斗數命盤設計模塊();
    
    $("#btn-命盤設計").hide();
    $("#shhp-AnalysisMenu").hide();
    $("#shhp-AnalysisContent").hide();
    
    
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


function InputMenuCustomization(){
    var padding = "";
    var customitem=[];
    
    for(var i = 1; i < 8; i++) padding += "&nbsp;";
    
    customitem.push(padding);
    customitem.push('<span id="sr-disp-shhp-四化門派">四化：');        
        customitem.push('<select id="sr-shhp-四化門派" style="width:90px; height: 26px;">');
            customitem.push('<option value=0>斗數全集</option>');
            customitem.push('<option value=1>斗數全書</option>');
            customitem.push('<option value=2>中洲派</option>');
            customitem.push('<option value=3>北派</option>');
            customitem.push('<option value=4>占驗派</option>');
        customitem.push('</select>');
    customitem.push('</span>');
    
    customitem.push(padding);
    customitem.push('<span id="sr-disp-shhp-閏月">閏月處理：');        
        customitem.push('<select id="sr-shhp-閏月處理" style="width:110px; height: 26px;">');
            customitem.push('<option value=0>算當月</option>');
            customitem.push('<option value=1>算下月</option>');
            customitem.push('<option value=2>15日後論下月</option>');
        customitem.push('</select>');
    customitem.push('</span>');
    
    return customitem.join("");
    
/*
                                
<span id="mp-bz-chk-disp-命盤顯示選項">&nbsp&nbsp&nbsp命盤顯示：
   &nbsp&nbsp<input type="checkbox" id="mp-bz-chk-運星" value="運星">運星
   &nbsp&nbsp<input type="checkbox" id="mp-bz-chk-納音" value="納音">納音
</span>
    */
    
} // end function InputMenuCustomization



function shhp_AppMenu(){
    var AppMenuContent=[];

    AppMenuContent.push('<div class="container App hidden-print" style="height: auto; width: 500px; margin-top: 10px; float: left;">');
    AppMenuContent.push('<div class="row">');
    AppMenuContent.push('<div class="col-md-12">');

    AppMenuContent.push('<button id="btn-命盤設計" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-命盤設計">命盤設計</button>');
    //AppMenuContent.push('<button id="btn-八卦速查" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-八卦速查">八卦速查</button>');
    //AppMenuContent.push('<button id="btn-十神格個性" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-十神格個性">十神格</button>');
    //AppMenuContent.push('<button id="btn-經典參考" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#ref-經典參考">經典參考</button>');
    //AppMenuContent.push('<button id="btn-八字流年表" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#ref-八字流年表">流年表</button>');

    AppMenuContent.push('</div>');
    AppMenuContent.push('</div>');
    AppMenuContent.push('</div>');

    return AppMenuContent.join("");
}  // end function shhp_AppMenu

