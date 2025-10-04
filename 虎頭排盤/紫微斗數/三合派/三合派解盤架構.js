function 三合派分析主控(命盤, 設定){
    
    //var 命盤分析元件單位; //this mean the outcome of the analysis (HTML text) would be stored at 命盤.人事宮.分析[命盤分析元件單位]
    var 宮位分析 = {
        "命宮": new 命盤各宮分析單元(), "兄弟宮": new 命盤各宮分析單元(), "夫妻宮": new 命盤各宮分析單元(), "子女宮": new 命盤各宮分析單元(), "財帛宮": new 命盤各宮分析單元(), "疾厄宮": new 命盤各宮分析單元(),
        "遷移宮": new 命盤各宮分析單元(), "交友宮": new 命盤各宮分析單元(), "官祿宮": new 命盤各宮分析單元(), "田宅宮": new 命盤各宮分析單元(), "福德宮": new 命盤各宮分析單元(), "父母宮": new 命盤各宮分析單元()
    };
    

    // *** 分析 模塊 1：星曜互涉表 ***
    if(設定.命盤分析.星曜互涉表) 各宮星曜互涉表(命盤, 設定);
    
    // *** 分析 模塊 2：主星簡論 ***
    
    if(設定.命盤分析.華山居士_命宮闡釋) 紫微諸星居命宮闡釋_主星簡論(命盤, 宮位分析, 設定);
    if(設定.命盤分析.陳天賜_斗數擂台) 斗數擂台_主星簡論(命盤, 宮位分析, 設定);
    
    中州派_星曜論(命盤, 宮位分析, 設定);
    其他分析資料(命盤, 宮位分析, 設定);
    
    // *** 分析 模塊 3：xxxx ***
    
    
    // ********** Ref ***********
    王亭之_宮垣論(命盤);
    
    // ********** 分析內容 排版 **********
    三合派分析排版(命盤, 設定, 宮位分析)

    
    
    
    
    
} // end function 三合派分析主控


function 命盤各宮分析單元(){
    this.主星簡論1 = [];  // 主星在各宮的簡單論述，不考慮三方四正所互動的吉煞星曜
    this.主星簡論2 = [];
    this.形態格局1 = []; // 主星是否獨坐或符合某些格局形態， 如百官朝拱 。。。。
    this.形態格局2 = [];
    this.會諸吉曜1 = [];  // 主星會見三方四正的的吉曜的論述
    this.會諸吉曜2 = [];
    this.會諸煞曜1 = [];  // 主星會見三方四正的的煞曜的論述
    this.會諸煞曜2 = [];
    this.會諸雜曜1 = [];  // 主星會見三方四正的的雜曜的論述
    this.會諸雜曜2 = [];
    this.主星宮垣論述 = [];  //主星在特定的地支宮位的情況
    this.主星四化1 = [];  // 主星四化後的情況
    this.主星四化2 = [];
    this.男女命1 = [];
    this.男女命2 = [];
    this.空宮 = [];  //空宮真的是容易讓人變的三心二意、受人左右
    this.判斷參考 = [];
    this.其他 = [];
}  // end function 命盤各宮分析單元


function 分析單元包裝(單元矩陣, 總分析元件, 單元名稱, 顯示資料文字, 單元文字, ContentCSS, SpanTagCSS, BRspacingCount) {
    // take the array of the 單元, package with <p> tag
    // input: Analysize array, Parent Object array, 單元名稱, 是否顯示Ref name, Ref name, optional CSS Class
    // 顯示資料文字, true false, from settings
    // 總分析元件, inclucive of which 宮位, such as 分析內容元件.命宮
    // ContentCSS default set to "shpp-fxnr-宮位判斷內容"
    // SpanTagCSS default set to "shpp-fxnr-內容參考資料"
    
    if(ContentCSS===undefined) ContentCSS = "shpp-fxnr-宮位判斷內容";  // refer to stylesheet三合排版, default set to this
    if(SpanTagCSS===undefined) SpanTagCSS = "shpp-fxnr-內容參考資料";
    if(BRspacingCount === undefined) BRspacingCount = 0;
    var SectionSpacing = (BRspacingCount == 0) ? "" : "<br>".repeat(BRspacingCount);
    
    var 資料文字header, 資料文字footer;
    if(顯示資料文字) 資料文字頭部 = '<p class="' + ContentCSS + '"><span class="' + SpanTagCSS + '">' + 單元文字 + '</span><br>'; 
        else 資料文字頭部 = '<p class="' + ContentCSS + '">';
    資料文字footer = '</p>';
    
    var 單元矩陣名稱1, 單元矩陣名稱2; // refer to 三合派解盤架構 analysis array name declaration
    
    switch(單元名稱) {
        case "主星簡論": 單元矩陣名稱1 = "主星簡論1"; 單元矩陣名稱2 = "主星簡論2"; break;
        case "形態格局": 單元矩陣名稱1 = "形態格局1"; 單元矩陣名稱2 = "形態格局2"; break;
        case "會諸吉曜": 單元矩陣名稱1 = "會諸吉曜1"; 單元矩陣名稱2 = "會諸吉曜2"; break;
        case "會諸煞曜": 單元矩陣名稱1 = "會諸煞曜1"; 單元矩陣名稱2 = "會諸煞曜2"; break;
        case "會諸雜曜": 單元矩陣名稱1 = "會諸雜曜1"; 單元矩陣名稱2 = "會諸雜曜2"; break;
        case "主星四化": 單元矩陣名稱1 = "主星四化1"; 單元矩陣名稱2 = "主星四化2"; break;
        case "男女命": 單元矩陣名稱1 = "男女命1"; 單元矩陣名稱2 = "男女命2"; break;
        default: return 
    } // end switch
    
    if(單元矩陣[單元矩陣名稱1].length > 0 && 單元矩陣[單元矩陣名稱1][1]!="") { 
        單元矩陣[單元矩陣名稱1].unshift(資料文字頭部); 
        單元矩陣[單元矩陣名稱1].push(資料文字footer);
        總分析元件[單元矩陣名稱1].push(單元矩陣[單元矩陣名稱1].join(SectionSpacing));
    }  // end if 單元矩陣名稱1
    
    if(單元矩陣[單元矩陣名稱2].length > 0 && 單元矩陣[單元矩陣名稱2][1]!="") { 
        單元矩陣[單元矩陣名稱2].unshift(資料文字頭部); 
        單元矩陣[單元矩陣名稱2].push(資料文字footer);
        總分析元件[單元矩陣名稱2].push(單元矩陣[單元矩陣名稱2].join(SectionSpacing));
    } // end if 單元矩陣名稱2
} // end function 分析單元包裝


function 分析宮位組裝(宮位, 總分析矩陣, 單元矩陣名稱, 單元CSSid, BRspacingCount){
    // combine multiple 單元 in each 宮位 into single paragraph
    // BRspacing is the no. of <br> tag to be inserted between 單元, default set to 2
    // 總分析矩陣 is 
    // 單元矩陣名稱 is the name of the array in the main analysis 命盤各宮分析單元
    // 單元CSSid is the Class ID to assigned to the <div> tag for each 單元
    // 人事宮分析矩陣 the temporary array to keep entire analysis result for dispay
    var 分析單元矩陣 = []; var 分析單元論斷; var SectionSpacing;
    var 單元矩陣名稱1 = 單元矩陣名稱+"1", 單元矩陣名稱2 = 單元矩陣名稱+"2";
    
    if(BRspacingCount === undefined) BRspacingCount = 2;
    SectionSpacing = (BRspacingCount == 0) ? "" : "<br>".repeat(BRspacingCount);
    
    分析單元矩陣 = 總分析矩陣[宮位][單元矩陣名稱1].concat(總分析矩陣[宮位][單元矩陣名稱2]);
    //console.log(單元矩陣名稱 + " : " + 分析單元矩陣.length);

    分析單元論斷 = 分析單元矩陣.join(SectionSpacing);
    分析單元論斷 = '<div id="' + 單元CSSid + '">' + 分析單元論斷 + '</div>';
    return 分析單元論斷;

}  // function 分析宮位組裝

function 三合派分析排版(命盤, 設定, 宮位分析){
    var 本命分析總結 = [];
    var 人事宮矩陣 = ["命宮", "兄弟宮", "夫妻宮", "子女宮", "財帛宮", "疾厄宮", "遷移宮", "交友宮", "官祿宮", "田宅宮", "福德宮", "父母宮"];
    var 人事宮分析矩陣 = { "命宮": [], "兄弟宮": [], "夫妻宮": [], "子女宮": [], "財帛宮": [], "疾厄宮": [], "遷移宮": [], "交友宮": [], "官祿宮": [], "田宅宮": [], "福德宮": [], "父母宮": [] };
    
    if(!設定.命盤分析.客制分析) { $("#tab_客制分析").hide(); $("#分析內容_客制分析").hide(); }
    
    
    // ***************************************************************
    
    for(var i=0; i<12; i++){
        // *** 星曜互涉表 ***
        if(設定.命盤分析.星曜互涉表) 人事宮分析矩陣[人事宮矩陣[i]].push(命盤.人事宮[人事宮矩陣[i]].分析.分析總論表);
        
        人事宮分析矩陣[人事宮矩陣[i]].push(分析宮位組裝(人事宮矩陣[i], 宮位分析, "主星簡論", "主星簡論", 2));
        人事宮分析矩陣[人事宮矩陣[i]].push(分析宮位組裝(人事宮矩陣[i], 宮位分析, "形態格局", "形態格局", 2));
        人事宮分析矩陣[人事宮矩陣[i]].push(分析宮位組裝(人事宮矩陣[i], 宮位分析, "會諸吉曜", "會諸吉曜", 0));
        人事宮分析矩陣[人事宮矩陣[i]].push(分析宮位組裝(人事宮矩陣[i], 宮位分析, "會諸煞曜", "會諸煞曜", 0));
        人事宮分析矩陣[人事宮矩陣[i]].push(分析宮位組裝(人事宮矩陣[i], 宮位分析, "會諸雜曜", "會諸雜曜", 1));
        人事宮分析矩陣[人事宮矩陣[i]].push(分析宮位組裝(人事宮矩陣[i], 宮位分析, "主星四化", "主星四化", 0));
        人事宮分析矩陣[人事宮矩陣[i]].push(分析宮位組裝(人事宮矩陣[i], 宮位分析, "男女命", "男女命", 0));

    }  // end for

    
    // ############# 顯示各宮分析結果的 HTML #############

    for(var i=0; i<12; i++){
        //本命分析總結.push('<span> ' + 人事宮矩陣[i] + '</span>');
        本命分析總結.push(人事宮分析矩陣[人事宮矩陣[i]].join("<br>"));
    } // end for i 顯示各宮分析結果
    
    $("#分析內容_本命分析").html(本命分析總結.join("<br><br>"));
    
    
    
    // ############# Ref #############
    if(設定.命盤分析.中洲派參考) { 
        $("#分析內容_中洲派參考").html(命盤.人事宮.命宮.分析.中洲派宮垣論 + 命盤.人事宮.兄弟宮.分析.中洲派宮垣論 + 命盤.人事宮.夫妻宮.分析.中洲派宮垣論 + 命盤.人事宮.子女宮.分析.中洲派宮垣論 + 命盤.人事宮.財帛宮.分析.中洲派宮垣論 + 命盤.人事宮.遷移宮.分析.中洲派宮垣論 + 命盤.人事宮.官祿宮.分析.中洲派宮垣論 + 命盤.人事宮.田宅宮.分析.中洲派宮垣論 + 命盤.人事宮.福德宮.分析.中洲派宮垣論 + 命盤.人事宮.父母宮.分析.中洲派宮垣論); 
    } else $("#tab_中洲派參考").hide();
    
} // end function 三合派分析排版

