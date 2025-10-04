function 八字命盤初始(){
    document.title = 系統.版本.網頁標題;

    //console.log(系統)
    初始化八字盤輸入();
    
    $("#div-八字-登錄").html(Gen_登錄表格("登錄", "八字登錄"));
    
    
    // **************** 讀取顯示預設值 ********************
    $("#mp-bz-干支生日輸入").hide();  //隱藏干支輸入
    
    /*
    if(系統.設定.用戶設定.輸入預設.象論盤輸入){
        $("#mp-bz-chk-disp-象論").show();
        $("#mp-bz-chk-disp-象論").prop("checked", 系統.設定.用戶設定.輸入預設.象論盤);
    } else $("#mp-bz-chk-disp-象論").hide();
    */

    $("#mp-bz-chk-運星").prop("checked", 系統.設定.用戶設定.命盤顯示.運星);
    $("#mp-bz-chk-納音").prop("checked", 系統.設定.用戶設定.命盤顯示.納音);
    $("#mp-bz-chk-神煞").prop("checked", 系統.設定.用戶設定.命盤顯示.神煞);
    $("#mp-bz-chk-流月").prop("checked", 系統.設定.用戶設定.命盤顯示.流月);
    $("#mp-bz-chk-小運").prop("checked", 系統.設定.用戶設定.命盤顯示.小運);

    $("#ctnr-bz-生日輸入").hide();
    if(系統.設定.用戶設定.命盤顯示.登錄 == false) {
        $("#nrxs-八字-圖").hide();
        $("#div-八字-登錄").hide();
        $("#ctnr-bz-生日輸入").show();
    }  // end if 登錄
    
    //$("#BaziChart").html(建立八字表格());
    $("#BaziChart").hide();

    $("#Div-AppMenu").html(GenAppMenu());
    $("#app-五行速查").html(五行速查());
	$("#app-四柱宮位").html(四柱宮位速查());
    $("#app-天干速查").html(天干速查());
	$("#app-地支速查").html(地支速查());
    $("#app-十神格個性").html(十神格局個性速查());
	$("#app-神煞速查").html(神煞速查());
    $("#ref-八字流年表").html(Gen_流年表格());

    $("#DivRotQuote").show();  //show rotating quotes

    // ********** Hide Buttons ****************
    $("#btn-五行速查").hide();
    初始化萬年曆輸入();  // this is for 精簡萬年曆
    $("#btn-精簡萬年曆").hide();
	$("#btn-四柱宮位").hide();
    $("#btn-天干速查").hide();
	$("#btn-地支速查").hide();
    $("#btn-十神格個性").hide();
	$("#btn-神煞速查").hide();
    $("#btn-八字流年表").hide();
    $("#btn-經典參考").hide();

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
}


function GenAppMenu(){
    var AppMenuContent=[];

    AppMenuContent.push('<div class="container App hidden-print" style="height: auto; width: 650px; margin-top: 10px; float: left;">');
    AppMenuContent.push('<div class="row">');
    AppMenuContent.push('<div class="col-md-12">');

    AppMenuContent.push('<button id="btn-精簡萬年曆" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-精簡萬年曆">精簡萬年曆</button>');
    AppMenuContent.push('<button id="btn-五行速查" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-五行速查">五行</button>');
	AppMenuContent.push('<button id="btn-四柱宮位" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-四柱宮位">四柱</button>');
    AppMenuContent.push('<button id="btn-天干速查" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-天干速查">天干</button>');
	AppMenuContent.push('<button id="btn-地支速查" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-地支速查">地支</button>');
    AppMenuContent.push('<button id="btn-十神格個性" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-十神格個性">十神</button>');
    AppMenuContent.push('<button id="btn-經典參考" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#ref-經典參考">經典</button>');
    AppMenuContent.push('<button id="btn-神煞速查" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#app-神煞速查">神煞</button>');
	AppMenuContent.push('<button id="btn-八字流年表" style="margin-right: 5px;" class="btn btn-info" data-toggle="collapse" data-target="#ref-八字流年表">流年表</button>');

    AppMenuContent.push('</div>');
    AppMenuContent.push('</div>');
    AppMenuContent.push('</div>');

    return AppMenuContent.join("");
}  // end function GenAppMenu



// ******************* Initialization Functions *************************
function 系統初始(){
    this.版本 = new 版本參數設定();
    this.設定 = new 系統參數();
} // end function 系統初始


function 初始化八字盤輸入() {
    填寫年份("mp-bz-輸入年", 1924, 2037, true);
    填寫月份("mp-bz-輸入月", true);
    填寫日期("mp-bz-輸入日", true);
    填寫時間("mp-bz-輸入時", true);
    填寫分鐘("mp-bz-輸入分");
    填寫城市("mp-bz-City");

    填寫十天干("mp-bz-輸入年干");
    填寫十二地支("mp-bz-輸入年支");
    填寫十天干("mp-bz-輸入月干");
    填寫十二地支("mp-bz-輸入月支");
    填寫十天干("mp-bz-輸入日干");
    填寫十二地支("mp-bz-輸入日支");
    填寫十天干("mp-bz-輸入時干");
    填寫十二地支("mp-bz-輸入時支");

    // ------ load default value ------
    $("#mp-bz-disp-western-dob").hide();  // 顯示干支曆法轉換的西曆生日
    $("#mp-bz-chk-disp-輸入月-閏月").hide();  //預設是西曆，所以閏月隱藏

    // **** 生日預設輸入 ******  //zeroPad(i,2)
    if(系統.設定.用戶設定.輸入預設.命盤預設八字用當下時間) {
        var CurDate = new Date();
        $("#mp-bz-輸入年").val(CurDate.getFullYear());
        $("#mp-bz-輸入月").val(zeroPad(CurDate.getMonth()+1,2));
        $("#mp-bz-輸入日").val(zeroPad(CurDate.getDate(),2));
        $("#mp-bz-輸入時").val(zeroPad(CurDate.getHours(),2));
        $("#mp-bz-輸入分").val(zeroPad(CurDate.getMinutes(),2));
    }
    else {
        $("#mp-bz-輸入年").val(系統.設定.用戶設定.輸入預設.年);
        $("#mp-bz-輸入月").val(zeroPad(系統.設定.用戶設定.輸入預設.月,2));
        $("#mp-bz-輸入日").val(zeroPad(系統.設定.用戶設定.輸入預設.日,2));
        $("#mp-bz-輸入時").val(zeroPad(系統.設定.用戶設定.輸入預設.時,2));
        $("#mp-bz-輸入分").val(zeroPad(系統.設定.用戶設定.輸入預設.分,2));     
    }

    // **** 城市輸入 ******
    if(系統.設定.用戶設定.輸入顯示.城市) {
        $("#mp-bz-chk-disp-City").show();
        $("#mp-bz-City").val(系統.設定.用戶設定.輸入預設.城市);
    }
    else {
        $("#mp-bz-chk-disp-City").hide();
    }

    $("#DivRotQuote").html(GenRotatingQuotes());
    

    /*
    // **** 象論盤輸入 ******
    if(系統.設定.用戶設定.輸入預設.象論盤輸入) {
        $("#mp-bz-chk-disp-象論").show();
        $('#mp-bz-chk-象論').prop( "checked", 系統.設定.用戶設定.輸入預設.象論盤);
    } 
    else {
        $("#mp-bz-chk-disp-象論").hide();
        系統.設定.用戶設定.輸入預設.象論盤=false;
    }  // end else
    */
}  //end function 初始化八字盤輸入


