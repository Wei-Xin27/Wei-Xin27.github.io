
function 三合命盤顯示控制(CtrlClass, CtrlCmd){
    // CtrlClass: 要控制的顯示部分，ie.  sh-三合本命顯示, sh-三合星曜顯示, sh-三合本命四化顯示, shhp-三合流年顯示, sh-三合大限顯示
    // CtrlCmd: clear / hide
    var 命宮地支數 = 斗數三合命盤.人事宮.命宮.地支數;
    var 財帛宮地支數 = 斗數三合命盤.人事宮.財帛宮.地支數;
    var 官祿宮地支數 = 斗數三合命盤.人事宮.官祿宮.地支數;
    
    switch(true){
        case (CtrlClass == "本命盤" && CtrlCmd == "clear"):
            $(".sh-三合本命顯示").html("");
            break;
        case (CtrlClass == "星曜" && CtrlCmd == "clear"):
            $(".shhp-三合星曜顯示").html("");
            break;
        case (CtrlClass == "星曜廟陷" && CtrlCmd == "clear"):
            $(".sh-三合廟陷顯示").html("");
            break;
        case (CtrlClass == "星曜廟陷" && CtrlCmd == "show"):
            $("#三合廟陷行").show();
            break;
        case (CtrlClass == "星曜廟陷" && CtrlCmd == "hide"):
            $("#三合廟陷行").hide();
            break;
        case (CtrlClass == "本命四化" && CtrlCmd == "clear"):
            $(".sh-三合本命四化顯示").html("");
            $(".sh-三合本命四化顯示").removeClass("生年化祿顏色 生年化權顏色 生年化科顏色 生年化忌顏色");
            break;
        case (CtrlClass == "大限顯示" && CtrlCmd == "clear"):
            $(".sh-三合大限顯示").html("");
            break;
        case (CtrlClass == "大限四化" && CtrlCmd == "clear"):
            $(".shhp-三合大限四化顯示").html("");
            $(".sh-橫盤大限主星四化格子").removeClass("shhp-大限化祿顏色 shhp-大限化權顏色 shhp-大限化科顏色 shhp-大限化忌顏色");
            $(".sh-橫盤大限副星四化格子").removeClass("shhp-大限化祿顏色 shhp-大限化權顏色 shhp-大限化科顏色 shhp-大限化忌顏色");
            break;
        case (CtrlClass == "大限四化" && CtrlCmd == "hide"):
            $("#三合橫盤大限四化行").hide();
            break;
        case (CtrlClass == "大限四化" && CtrlCmd == "show"):
            $("#三合橫盤大限四化行").show();
            break;
        case (CtrlClass == "大限流曜" && CtrlCmd == "show"):
            $(".shhp-大曜格子").removeClass("shhp-大曜隱藏");
            $(".shhp-大曜格子").addClass("shhp-大曜顯示");
            break;
        case (CtrlClass == "大限流曜" && CtrlCmd == "hide"):
            $(".shhp-大曜格子").removeClass("shhp-大曜顯示");
            $(".shhp-大曜格子").addClass("shhp-大曜隱藏");
            break;
        case (CtrlClass == "大限流曜" && CtrlCmd == "clear"):
            $(".shhp-大曜格子").html("");
            $(".shhp-大曜格子").removeClass("shhp-大曜顯示");
            $(".shhp-大曜格子").removeClass("shhp-大曜隱藏");
            break;
        case (CtrlClass == "流年四化" && CtrlCmd == "hide"):
            $("#三合橫盤流年四化行").hide();
            break;
        case (CtrlClass == "流年四化" && CtrlCmd == "show"):
            $("#三合橫盤流年四化行").show();
            break;
        case (CtrlClass == "流年四化" && CtrlCmd == "clear"):
            $(".shhp-流年主星四化格子").html("");
            $(".shhp-流年副星四化格子").html("");
            $(".shhp-流年主星四化格子").removeClass("shhp-流年化祿顏色 shhp-流年化權顏色 shhp-流年化科顏色 shhp-流年化忌顏色");
            $(".shhp-流年副星四化格子").removeClass("shhp-流年化祿顏色 shhp-流年化權顏色 shhp-流年化科顏色 shhp-流年化忌顏色");
            break;
        case (CtrlClass == "流年流曜" && CtrlCmd == "show"):
            $(".shhp-流曜格子").removeClass("shhp-流曜隱藏");
            $(".shhp-流曜格子").addClass("shhp-流曜顯示");
            break;
        case (CtrlClass == "流年流曜" && CtrlCmd == "hide"):
            $(".shhp-流曜格子").removeClass("shhp-流曜顯示");
            $(".shhp-流曜格子").addClass("shhp-流曜隱藏");
            break;
        case (CtrlClass == "流年流曜" && CtrlCmd == "clear"):
            $(".shhp-流曜格子").html("");
            $(".shhp-流曜格子").removeClass("shhp-流曜顯示");
            $(".shhp-流曜格子").removeClass("shhp-流曜隱藏");
            break;
        case (CtrlClass == "流年顯示" && CtrlCmd == "clear"):
            $(".shhp-三合流年顯示").html("");
            break;
        case (CtrlClass == "星曜註解" && CtrlCmd == "show"):
            $("#三合橫盤-星曜註解欄").show();
            break;
        case (CtrlClass == "星曜註解" && CtrlCmd == "hide"):
            $("#三合橫盤-星曜註解欄").hide();
            break;
        case (CtrlClass == "星曜註解" && CtrlCmd == "clear"):
            $("#三合橫盤-星曜點擊").html("");
            $("#三合橫盤-星曜註解").html("");
            break;
    } // end switch
    
} // end function 三合命盤顯示控制


// ****************************************************

function 排三合橫盤組件(命盤){
	var 大限起歲, 大限起歲字, 星曜級別;
    $("#三合身宮-" + 命盤.身宮地支數).html("身");
    $(".shhp-地支模塊").addClass("shhp-地支宮背景色");
    
	for(var i=0; i<12 ; i++) {
		var 主星組合 = 命盤.地支宮位[i].星曜.主星;
        for(var a=0; a < 主星組合.length ; a++) {
            $("#三合主星格-" + i + "-" + a).html(字串豎排(主星組合[a]));
            $("#三合主星四化格-" + i + "-" + a).html(命盤.星曜[主星組合[a]].四化.substr(1,1));
            $("#三合主星廟陷格-" + i + "-" + a).html(命盤.星曜[主星組合[a]].廟陷.符號);
            命盤.星曜[主星組合[a]].橫盤位置 = "三合主星格-" + i + "-" + a;
            命盤.星曜[主星組合[a]].橫盤廟陷位置 = "三合主星廟陷格-" + i + "-" + a;
            
            switch(命盤.星曜[主星組合[a]].四化){
                case "化祿": 命盤.生年四化.化祿星位置 = "三合主星四化格-" + i + "-" + a; break;
                case "化權": 命盤.生年四化.化權星位置 = "三合主星四化格-" + i + "-" + a; break;
                case "化科": 命盤.生年四化.化科星位置 = "三合主星四化格-" + i + "-" + a; break;
                case "化忌": 命盤.生年四化.化忌星位置 = "三合主星四化格-" + i + "-" + a; break;
            }  //end switch 命盤.星曜 四化
        }  // end for a
        
        var 吉星組合 = 命盤.地支宮位[i].星曜.六吉星.concat(命盤.地支宮位[i].星曜.祿馬星);
        for(var b=0; b < 吉星組合.length ; b++) {
            $("#三合吉星格-" + i + "-" + b).html(字串豎排(吉星組合[b]));
            $("#三合吉曜四化格-" + i + "-" + b).html(命盤.星曜[吉星組合[b]].四化.substr(1,1));
            $("#三合吉曜廟陷格-" + i + "-" + b).html(命盤.星曜[吉星組合[b]].廟陷.符號);
            命盤.星曜[吉星組合[b]].橫盤位置 = "三合吉星格-" + i + "-" + b;
            命盤.星曜[吉星組合[b]].橫盤廟陷位置 = "三合吉曜廟陷格-" + i + "-" + b;
            
            switch(命盤.星曜[吉星組合[b]].四化){
                //case "化祿": 命盤.生年四化.化祿星位置 = "三合吉曜四化格-" + i + "-" + b; break;
                //case "化權": 命盤.生年四化.化權星位置 = "三合吉曜四化格-" + i + "-" + b; break;
                case "化科": 命盤.生年四化.化科星位置 = "三合吉曜四化格-" + i + "-" + b; break;
                case "化忌": 命盤.生年四化.化忌星位置 = "三合吉曜四化格-" + i + "-" + b; break;
            }  //end switch 命盤.星曜 四化
        } // end for b
        
        var 煞星組合 = 命盤.地支宮位[i].星曜.六凶星;
        for(var c=0; c < 煞星組合.length ; c++) {
            $("#三合煞星格-" + i + "-" + c).html(字串豎排(煞星組合[c]));
            $("#三合煞曜廟陷格-" + i + "-" + c).html(命盤.星曜[煞星組合[c]].廟陷.符號);
            命盤.星曜[煞星組合[c]].橫盤位置 = "三合煞星格-" + i + "-" + c;
            命盤.星曜[煞星組合[c]].橫盤廟陷位置 = "三合煞曜廟陷格-" + i + "-" + c;
        } // end for c
        
        var 雜曜組合 = 命盤.地支宮位[i].星曜.雜曜.concat(命盤.地支宮位[i].星曜.空曜);
        for(var d=0; d < 雜曜組合.length ; d++) $("#三合雜曜格-" + i + "-" + d).html(雜曜組合[d]);
        $("#三合雜曜格-" + i + "-長生").html(字串豎排(命盤.地支宮位[i].星曜.十二長生));
        $("#三合雜曜格-" + i + "-歲前").html(字串豎排(命盤.地支宮位[i].星曜.歲前星));
        $("#三合雜曜格-" + i + "-將前").html(字串豎排(命盤.地支宮位[i].星曜.將前星));
        $("#三合雜曜格-" + i + "-博士").html(字串豎排(命盤.地支宮位[i].星曜.博士星.substr(0,2)));
        
        $("#三合宮位-" + i).html(命盤.地支宮位[i].宮位);
        $("#三合大限歲數-" + i).html(命盤.地支宮位[i].大限歲數段);
        
        $("#三合天干-" + i).html(命盤.地支宮位[i].宮干);
        $("#三合地支-" + i).html(命盤.地支宮位[i].地支);
	} //end for i
    
    
    // ******************* 生年四化星 *******************
    $("#"+命盤.生年四化.化祿星位置).addClass("生年化祿顏色");
    $("#"+命盤.生年四化.化權星位置).addClass("生年化權顏色");
    $("#"+命盤.生年四化.化科星位置).addClass("生年化科顏色");
    $("#"+命盤.生年四化.化忌星位置).addClass("生年化忌顏色");
    
    // ******************* 中宮 *******************
    var 橫盤中宮資訊組 = {
        "姓名": 命盤.輸入資料.姓名,
        "男女": 命盤.陽男陰女,
        "生肖": 命盤.生日.生肖,
        "西曆日期": 命盤.生日.西曆年 + "年" + 命盤.生日.西曆月 + "月" + 命盤.生日.西曆日 + "日",
        "西曆時": 命盤.生日.西曆時 + "時",
        "星座": 命盤.生日.星座,
        "陰曆": 命盤.生日.陰曆,
        "五行局": 命盤.五行局.局名,
        "八字": 命盤.八字.substr(0,2) + "&nbsp;" + 命盤.八字.substr(2,2) + "&nbsp;" + 命盤.八字.substr(4,2) + "&nbsp;" + 命盤.八字.substr(6,2),
        "命主": 命盤.命主星,
        "身主": 命盤.身主星,
        "斗君": 命盤.斗君,
        "流年": 命盤.運行.流年數 + " " + 命盤.運行.流年干支 + "年，" + 命盤.運行.歲數 + "歲",
        "橫幅": 命盤.設定.橫盤橫幅,
        "關於印章": 命盤.設定.印璽,
        "版本": 命盤.設定.版本 + "&nbsp;" + 命盤.設定.版本號 ,
        "備註": ""
    };
    
    命盤.中宮 = 橫盤中宮資訊組;
    
    $("#三合橫盤中宮_主頁卡").html(中宮橫盤顯示_生日資訊(橫盤中宮資訊組));
    $("#三合橫盤中宮_關於卡").html(中宮橫盤顯示_關於(橫盤中宮資訊組));
    
    三合橫盤中宮控制("主頁");
    
    // ******************* 註解 *******************
    三合命盤顯示控制("星曜註解", "hide");
}  //end function 排三合橫盤組件



// ****************** 三合排大限四化 *******************
function 三合排大限四化(命盤, 大限數){
    var 化祿星本命位置, 化權星本命位置, 化科星本命位置, 化忌星本命位置;
    var 主星群 = ["紫微", "天機", "太陽", "武曲", "天同", "廉貞", "天府", "太陰", "貪狼", "巨門", "天相", "天梁", "七殺", "破軍"];
    //var 副星群 = ["左輔", "右弼", "文昌", "文曲"];
    var 大限化祿星命盤格, 大限化權星命盤格, 大限化科星命盤格, 大限化忌星命盤格;
    
    化祿星本命位置 = 命盤.星曜[命盤.大限[大限數].四化.化祿星].橫盤位置;
    化權星本命位置 = 命盤.星曜[命盤.大限[大限數].四化.化權星].橫盤位置;
    化科星本命位置 = 命盤.星曜[命盤.大限[大限數].四化.化科星].橫盤位置;
    化忌星本命位置 = 命盤.星曜[命盤.大限[大限數].四化.化忌星].橫盤位置;

    大限化祿星命盤格 = (主星群.indexOf(命盤.大限[大限數].四化.化祿星) > -1) ? "三合大限主星四化格" : "三合大限吉曜四化格";
    大限化權星命盤格 = (主星群.indexOf(命盤.大限[大限數].四化.化權星) > -1) ? "三合大限主星四化格" : "三合大限吉曜四化格";
    大限化科星命盤格 = (主星群.indexOf(命盤.大限[大限數].四化.化科星) > -1) ? "三合大限主星四化格" : "三合大限吉曜四化格";
    大限化忌星命盤格 = (主星群.indexOf(命盤.大限[大限數].四化.化忌星) > -1) ? "三合大限主星四化格" : "三合大限吉曜四化格";

    命盤.大限[大限數].四化.化祿星位置 = 大限化祿星命盤格 + 化祿星本命位置.substr(5, 5);
    命盤.大限[大限數].四化.化權星位置 = 大限化權星命盤格 + 化權星本命位置.substr(5, 5);
    命盤.大限[大限數].四化.化科星位置 = 大限化科星命盤格 + 化科星本命位置.substr(5, 5);
    命盤.大限[大限數].四化.化忌星位置 = 大限化忌星命盤格 + 化忌星本命位置.substr(5, 5);
    
    $("#"+ 命盤.大限[大限數].四化.化祿星位置).html("祿");
    $("#"+ 命盤.大限[大限數].四化.化權星位置).html("權");
    $("#"+ 命盤.大限[大限數].四化.化科星位置).html("科");
    $("#"+ 命盤.大限[大限數].四化.化忌星位置).html("忌");

    $("#"+ 命盤.大限[大限數].四化.化祿星位置).addClass("shhp-大限化祿顏色");
    $("#"+ 命盤.大限[大限數].四化.化權星位置).addClass("shhp-大限化權顏色");
    $("#"+ 命盤.大限[大限數].四化.化科星位置).addClass("shhp-大限化科顏色");
    $("#"+ 命盤.大限[大限數].四化.化忌星位置).addClass("shhp-大限化忌顏色");
} // end function 三合排大限四化


// ****************** 三合排流年四化 *******************
function 三合排流年四化(命盤, 大限數, 大限流年數){
    var 化祿星本命位置, 化權星本命位置, 化科星本命位置, 化忌星本命位置;
    var 主星群 = ["紫微", "天機", "太陽", "武曲", "天同", "廉貞", "天府", "太陰", "貪狼", "巨門", "天相", "天梁", "七殺", "破軍"];
    //var 副星群 = ["左輔", "右弼", "文昌", "文曲"];
    var 流年化祿星命盤格, 流年化權星命盤格, 流年化科星命盤格, 流年化忌星命盤格;
    
    化祿星本命位置 = 命盤.星曜[命盤.大限[大限數].流年[大限流年數].四化.化祿星].橫盤位置;
    化權星本命位置 = 命盤.星曜[命盤.大限[大限數].流年[大限流年數].四化.化權星].橫盤位置;
    化科星本命位置 = 命盤.星曜[命盤.大限[大限數].流年[大限流年數].四化.化科星].橫盤位置;
    化忌星本命位置 = 命盤.星曜[命盤.大限[大限數].流年[大限流年數].四化.化忌星].橫盤位置;

    流年化祿星命盤格 = (主星群.indexOf(命盤.大限[大限數].流年[大限流年數].四化.化祿星) > -1) ? "三合流年主星四化格" : "三合流年吉曜四化格";
    流年化權星命盤格 = (主星群.indexOf(命盤.大限[大限數].流年[大限流年數].四化.化權星) > -1) ? "三合流年主星四化格" : "三合流年吉曜四化格";
    流年化科星命盤格 = (主星群.indexOf(命盤.大限[大限數].流年[大限流年數].四化.化科星) > -1) ? "三合流年主星四化格" : "三合流年吉曜四化格";
    流年化忌星命盤格 = (主星群.indexOf(命盤.大限[大限數].流年[大限流年數].四化.化忌星) > -1) ? "三合流年主星四化格" : "三合流年吉曜四化格";

    命盤.大限[大限數].流年[大限流年數].四化.化祿星位置 = 流年化祿星命盤格 + 化祿星本命位置.substr(5, 5);
    命盤.大限[大限數].流年[大限流年數].四化.化權星位置 = 流年化權星命盤格 + 化權星本命位置.substr(5, 5);
    命盤.大限[大限數].流年[大限流年數].四化.化科星位置 = 流年化科星命盤格 + 化科星本命位置.substr(5, 5);
    命盤.大限[大限數].流年[大限流年數].四化.化忌星位置 = 流年化忌星命盤格 + 化忌星本命位置.substr(5, 5);
    
    $("#"+ 命盤.大限[大限數].流年[大限流年數].四化.化祿星位置).html("祿");
    $("#"+ 命盤.大限[大限數].流年[大限流年數].四化.化權星位置).html("權");
    $("#"+ 命盤.大限[大限數].流年[大限流年數].四化.化科星位置).html("科");
    $("#"+ 命盤.大限[大限數].流年[大限流年數].四化.化忌星位置).html("忌");

    $("#"+ 命盤.大限[大限數].流年[大限流年數].四化.化祿星位置).addClass("shhp-流年化祿顏色");
    $("#"+ 命盤.大限[大限數].流年[大限流年數].四化.化權星位置).addClass("shhp-流年化權顏色");
    $("#"+ 命盤.大限[大限數].流年[大限流年數].四化.化科星位置).addClass("shhp-流年化科顏色");
    $("#"+ 命盤.大限[大限數].流年[大限流年數].四化.化忌星位置).addClass("shhp-流年化忌顏色");
} // end function 三合排流年四化



// ****************** 三合排流曜 *******************
function 三合排流曜(流曜元件, 運限){
    var 流曜數量 = 12;
    var 地支流曜矩陣 = new Array(流曜數量);
    for(var i=0; i < 地支流曜矩陣.length; i++){
        地支流曜矩陣[i] = new Array();
    }  // end for
    
    var 流曜地支數;
    
    //$(".sh-大曜格子").html(""); // 刪除現有大曜
    
    Object.keys(流曜元件).forEach(function (key) {
        流曜地支數 = 流曜元件[key]['地支數'];
        地支流曜矩陣[流曜地支數].push(流曜元件[key]['名']);
        //地支流曜矩陣[流曜元件[key]['地支數']].push(流曜元件[key]['名']);
    });
    
    var 運限格子;
    if(運限 == "大限") 運限格子 = "三合大曜-";
    if(運限 == "流年") 運限格子 = "三合流曜-";
    
    for(var i=0; i < 12; i++){
        for(var j=0; j < 地支流曜矩陣[i].length; j++){
            $("#" + 運限格子 + i + "-" + j).html(地支流曜矩陣[i][j]);
            //console.log("#" + 運限格子 + i + "-" + j + " : " + 地支流曜矩陣[i][j]);
        } // end for j
    }  // end for i
} // end function 三合排流曜


function 三合排大限流年(大限矩陣){
    for(var k=0; k < 10; k++){
        $("#三合流年年份-" + 大限矩陣.流年[k].地支數).html(大限矩陣.流年[k].西曆年);
        $("#三合流年歲數-" + 大限矩陣.流年[k].地支數).html(大限矩陣.流年[k].歲數);
    }  // end for k
} // end function 三合排大限流年


// **************** 大限 & 流年 刷新 ****************

function 三合命盤大限刷新(大命地支數, 命盤){
    // refresh when user click on 大限
    //console.log(命盤.運行.選擇的大限數);
	var 大限宮位;
	var j, 流年二字, 流年疊字, 流年地支數;
	
    三合命盤顯示控制("大限四化", "clear");
    三合命盤顯示控制("大限流曜", "clear");
    
    三合命盤顯示控制("流年四化", "clear");
    三合命盤顯示控制("流年四化", "hide");
    $(".shhp-三合流年顯示").html("");  // clear all 流年 items
    
    命盤.運行.選擇的大限流年數 = -1; // reset 流年 selected year
    命盤.運行.選擇的大限流年地支數 = -1;
    $(".shhp-大限歲數格子").removeClass("shhp-當選大限歲數格子");
    
	if(大命地支數 == 命盤.運行.選擇的大限地支數) { // click 同樣的大限，就刪除選擇的大限
        命盤.運行.選擇的大限數 = -1;
        命盤.運行.選擇的大限地支數 = -1;
        
        $(".shhp-大限宮位格子").html("");
        $(".shhp-大曜格子").html("");
        
        $("#shhp-xs-chk-大限四化").prop("checked", false);
        $("#shhp-xs-chk-大限流曜").prop("checked", false);
        return;
    } // end if
    
    
    // ************** start tabulating 大限 items ********************
    命盤.運行.選擇的大限地支數 = 大命地支數;
    $("#三合大限歲數-" + 大命地支數).addClass("shhp-當選大限歲數格子");
    
	for(var i=0; i<12 ; i++) {
		j = 地支滾動(1, i);
		大限宮位 = 大限人事宮字數轉換(j);
		$("#三合大限宮位-" + 地支滾動(大命地支數, (-1)*i)).html(大限宮位);
	} // end for i
	
    三合排大限四化(命盤, 命盤.運行.選擇的大限數);
    三合命盤顯示控制("大限四化", "show");
    
    三合排流曜(命盤.大限[命盤.運行.選擇的大限數].流曜, "大限");
    三合命盤顯示控制("大限流曜", "show");
    
    三合排大限流年(命盤.大限[命盤.運行.選擇的大限數]);
    
} // end function 三合命盤大限刷新


function 三合命盤流年刷新(命盤, 大限數, 大限流年數, 大限流年地支數){
    var 流年宮位, 流年宮位數;

    三合命盤顯示控制("流年四化", "clear");
    三合命盤顯示控制("流年流曜", "clear");
    
    $(".shhp-小限顯示").html("");
    
    if(大限流年地支數 == 命盤.運行.選擇的大限流年地支數) {
        命盤.運行.選擇的大限流年數= -1;
        命盤.運行.選擇的大限流年地支數 = -1;
        
        $(".shhp-流年宮位格子").html("");
        三合命盤顯示控制("流年四化", "hide");
        //$(".shhp-流曜格子").html("");
        
        $("#shhp-xs-chk-流年四化").prop("checked", false);
        $("#shhp-xs-chk-流年流曜").prop("checked", false);
        
        return;
    } // end if
    
    // ************** start tabulating 流年 items ********************
    命盤.運行.選擇的大限流年數 = 大限流年數;
    命盤.運行.選擇的大限流年地支數 = 大限流年地支數;
    
	for(var i=0; i<12 ; i++) {
		流年宮位數 = 地支滾動(1, i);
		流年宮位 = 流年人事宮字數轉換(流年宮位數, false);
		$("#三合流年宮位-" + 地支滾動(大限流年地支數, (-1)*i)).html(流年宮位);
	} // end for i
    
    三合排流年四化(命盤, 命盤.運行.選擇的大限數, 命盤.運行.選擇的大限流年數);
    三合命盤顯示控制("流年四化", "show");
    
    
    三合排流曜(命盤.大限[大限數].流年[大限流年數].流曜, "流年");
    三合命盤顯示控制("流年流曜", "show");
    
    $("#三合小限-" + 命盤.大限[大限數].流年[大限流年數].小限地支數).html("小");
    
    $("#shhp-xs-chk-流年四化").prop("checked", true);
    $("#shhp-xs-chk-流年流曜").prop("checked", true);
} // end function 三合命盤流年刷新


// ****************************** 命盤 設計 圖表 ******************************

function 三合橫盤斗數十二宮(設定) {
    //三合盤格式：橫盤，直盤
    
	var shbg = []; 
	shbg.push('<table class="三合盤-十二宮格" border="1" cellpadding="0" cellspacing="0">');
	shbg.push('<tbody>');

	shbg.push('<tr>');
    //shbg.push('<td id="shdzg-6" class="橫盤地支模塊"></td>');
	shbg.push('<td id="shhp-dzg-6" class="shhp-地支模塊">' + 橫盤地支宮格(6) + '</td>');
	shbg.push('<td id="shhp-dzg-7" class="shhp-地支模塊">' + 橫盤地支宮格(7) + '</td>');
	shbg.push('<td id="shhp-dzg-8" class="shhp-地支模塊">' + 橫盤地支宮格(8) + '</td>');
	shbg.push('<td id="shhp-dzg-9" class="shhp-地支模塊">' + 橫盤地支宮格(9) + '</td>');
	shbg.push('</tr>');

	shbg.push('<tr>');
	shbg.push('<td id="shhp-dzg-5" class="shhp-地支模塊">' + 橫盤地支宮格(5) + '</td>');
    
    shbg.push('<td id="三合橫盤中宮主體" class = "shhp-地支宮背景色" colspan="2" rowspan="2">');
        shbg.push('<div class = "shhp-三合橫盤中宮主體板塊">');
            shbg.push('<div id="三合橫盤中宮板塊">');
                shbg.push('<div id="三合橫盤中宮_主板塊" class="shhp-中宮顯示板塊">');
                    shbg.push('<div id="三合橫盤中宮_主頁卡" class="shhp-中宮顯示卡"></div>');
                    shbg.push('<div id="三合橫盤中宮_分析卡" class="shhp-中宮顯示卡"></div>');
                    shbg.push('<div id="三合橫盤中宮_八字卡" class="shhp-中宮顯示卡"></div>');
                    shbg.push('<div id="三合橫盤中宮_關於卡" class="shhp-中宮顯示卡"></div>');
                shbg.push('</div>');
                shbg.push('<div class="row"></div>');
                shbg.push('<div id="三合橫盤中宮_控制板塊" class="shhp-中宮按鍵板塊">' + 三合橫盤中宮按鍵(設定) + '</div>');
            shbg.push('</div>');
        shbg.push('</div>');
    shbg.push('</td>');
    
	shbg.push('<td id="shhp-dzg-10" class="shhp-地支模塊">' + 橫盤地支宮格(10) + '</td>');
	shbg.push('</tr>');

	shbg.push('<tr>');
	shbg.push('<td id="shhp-dzg-4" class="shhp-地支模塊">' + 橫盤地支宮格(4) + '</td>');
	shbg.push('<td id="shhp-dzg-11" class="shhp-地支模塊">' + 橫盤地支宮格(11) + '</td>');
	shbg.push('</tr>');

	shbg.push('<tr>');
	shbg.push('<td id="shhp-dzg-3" class="shhp-地支模塊">' + 橫盤地支宮格(3) + '</td>');
	shbg.push('<td id="shhp-dzg-2" class="shhp-地支模塊">' + 橫盤地支宮格(2) + '</td>');
	shbg.push('<td id="shhp-dzg-1" class="shhp-地支模塊">' + 橫盤地支宮格(1) + '</td>');
	shbg.push('<td id="shhp-dzg-0" class="shhp-地支模塊">' + 橫盤地支宮格(0) + '</td>');
	shbg.push('</tr>');

	shbg.push('</tbody>');
	shbg.push('</table>');
    
    
    shbg.push('<div class="row"></div>');
	shbg.push('<div id="shhp-顯示制定" class = "shhp-橫盤客制選項">');
        shbg.push('<label>星曜廟陷：</label>');
        shbg.push('<select id ="sh-xs-sel-廟陷顯示" size="1" name="sh-xs-sel-廟陷顯示" style="height:30px;">');
        shbg.push('<option selected="selected" value="-">-</option><option value="符號">符號</option><option value="廟陷">廟陷</option><option value="亮度">亮度</option>');
        shbg.push('</select>&nbsp;&nbsp;&nbsp;');
    
        shbg.push('<label>三方宮位：</label>');
        shbg.push('<select id ="shhp-xs-sel-三方顯示" size="1" name="shhp-xs-sel-三方顯示" style="height:30px;">');
        shbg.push('<option selected="selected" value="-">-</option><option value="命財官">命財官</option><option value="夫遷福">夫遷福</option><option value="田兄疾">田兄疾</option><option value="父子友">父子友</option>');
        shbg.push('</select>&nbsp;&nbsp;&nbsp;');
    
        shbg.push('<span id="shhp-橫盤顯示選項">');
        shbg.push('<input type="checkbox" class="shhp-橫盤顯示項目" name="shhp-xs-chk-大限四化" id="shhp-xs-chk-大限四化" value="大限四化">大限四化&nbsp;&nbsp;&nbsp;');
        shbg.push('<input type="checkbox" class="shhp-橫盤顯示項目" name="shhp-xs-chk-流年四化" id="shhp-xs-chk-流年四化" value="流年四化">流年四化&nbsp;&nbsp;&nbsp;');
        shbg.push('<input type="checkbox" class="shhp-橫盤顯示項目" name="shhp-xs-chk-大限流曜" id="shhp-xs-chk-大限流曜" value="大限流曜">大限流曜&nbsp;&nbsp;&nbsp;');
        shbg.push('<input type="checkbox" class="shhp-橫盤顯示項目" name="shhp-xs-chk-流年流曜" id="shhp-xs-chk-流年流曜" value="流年流曜">流年流曜&nbsp;&nbsp;&nbsp;');
        shbg.push('<input type="checkbox" class="shhp-橫盤顯示項目" name="shhp-xs-chk-星曜註解" id="shhp-xs-chk-星曜註解" value="星曜註解">星曜註解&nbsp;&nbsp;&nbsp;');
        shbg.push('<input type="checkbox" class="shhp-橫盤顯示項目" name="shhp-xs-chk-雜曜顯示" id="shhp-xs-chk-雜曜顯示" value="雜曜顯示">雜曜顯示&nbsp;&nbsp;&nbsp;');
        shbg.push('</span>');
    shbg.push('</div>');
    
    shbg.push('<div class="row"></div>');
    shbg.push('<div id="三合橫盤-星曜註解欄" class = "shhp-星曜註解欄">');
        shbg.push('<span id="三合橫盤-星曜點擊" class = "shhp-星曜點擊">紫微</span><br>');
        shbg.push('<span id="三合橫盤-星曜註解" class = "shhp-星曜註解">紫微。。。。</span>');
    shbg.push('</div>');
    //shbg.push('');
    //<div id="ds-命盤顯示制定" style="margin-top: 5px; height: auto; width: auto; float:left;">
    //<span id="ds-hide_chart_items">命盤隱藏：<input type="checkbox" class="ds-hide_chart_item" name="ds-hide_chart_item" id="ds-hide_chart_item-星曜" value="星曜">星曜&nbsp;&nbsp;&nbsp;<input type="checkbox" class="ds-hide_chart_item" name="ds-hide_chart_item" id="ds-hide_chart_item-自化流出" value="自化流出">自化流出&nbsp;&nbsp;&nbsp;<input type="checkbox" class="ds-hide_chart_item" name="ds-hide_chart_item" id="ds-hide_chart_item-中宮選項" value="中宮選項">中宮選項&nbsp;&nbsp;&nbsp;</span></div>
	//shbg.push('<div class="row"></div>');
    
	shbg.push('<div id="ds-命盤輔助程式" style="margin-top: 5px; height: auto; width: auto; float:left;"></div>');


	// 輔助程式Div:
    shbg.push('<div class="row"></div>');
    shbg.push('<div class="collapse container" id="app-命盤設計" style="height: auto; width: 400px; margin-top: 20px; float: left;"></div>');
    //hbg.push('<div class="collapse container" id="app-八卦速查" style="height: auto; width: 600px; margin-top: 20px; float: left;"></div>');

	return shbg.join("");
}


function 橫盤地支宮格(宮格數){
    var dsGrid = [];
    var ShaBrightnessPrefix = "三合煞曜廟陷格-" + 宮格數 + "-";
    var MainBrightnessPrefix = "三合主星廟陷格-" + 宮格數 + "-";
    var AuspiciousBrightnessPrefix = "三合吉曜廟陷格-" + 宮格數 + "-";

    var ShaStarPrefix = "三合煞星格-" + 宮格數 + "-";
    var MainStarPrefix = "三合主星格-" + 宮格數 + "-";
    var AuspiciousStarPrefix = "三合吉星格-" + 宮格數 + "-";
    
    var MainSiHuaPrefix = "三合主星四化格-" + 宮格數 + "-";
    var AuspiciousSiHuaPrefix = "三合吉曜四化格-" + 宮格數 + "-";
    var ShaSiHuaPrefix = "三合煞曜四化格-" + 宮格數 + "-";
    
    var dxMainSiHuaPrefix = "三合大限主星四化格-" + 宮格數 + "-";
    var dxAuspiciousSiHuaPrefix = "三合大限吉曜四化格-" + 宮格數 + "-";
    var dxShaSiHuaPrefix = "三合大限煞曜四化格-" + 宮格數 + "-";
    
    var lnMainSiHuaPrefix = "三合流年主星四化格-" + 宮格數 + "-";
    var lnAuspiciousSiHuaPrefix = "三合流年吉曜四化格-" + 宮格數 + "-";
    var lnShaSiHuaPrefix = "三合流年煞曜四化格-" + 宮格數 + "-";
    
    var MiscStarPrefix = "三合雜曜格-" + 宮格數 + "-";
    var DecadeStarPrefix = "三合大曜-" + 宮格數 + "-";
    var YearStarPrefix = "三合流曜-" + 宮格數 + "-";
    var GenPrefix = "-" + 宮格數;
    
    
    //,
    dsGrid.push('<table style="text-align: left; width: 100%;" border="0" cellpadding="0" cellspacing="0">');
    dsGrid.push('<tbody>');
    dsGrid.push('<tr id="三合廟陷行">');
    dsGrid.push('<td id="' + ShaBrightnessPrefix + '0' + '" class="sh-廟陷格子 sh-三合廟陷顯示" data-地支數="' + 宮格數 + '">Ｘ</td>');
    dsGrid.push('<td id="' + ShaBrightnessPrefix + '1' + '" class="sh-廟陷格子 sh-三合廟陷顯示" data-地支數="' + 宮格數 + '">☉</td>');
    dsGrid.push('<td id="' + ShaBrightnessPrefix + '2' + '" class="sh-廟陷格子 sh-三合廟陷顯示" data-地支數="' + 宮格數 + '">☀</td>');
    dsGrid.push('<td id="' + ShaBrightnessPrefix + '3' + '" class="sh-廟陷格子 sh-三合廟陷顯示" data-地支數="' + 宮格數 + '">➀</td>');
    dsGrid.push('<td id="' + MainBrightnessPrefix + '1' + '" class="sh-廟陷格子 sh-三合廟陷顯示" data-地支數="' + 宮格數 + '">◎</td>');
    dsGrid.push('<td id="' + MainBrightnessPrefix + '0' + '" class="sh-廟陷格子 sh-三合廟陷顯示" data-地支數="' + 宮格數 + '">☆</td>');
    dsGrid.push('<td id="' + AuspiciousBrightnessPrefix + '4' + '" class="sh-廟陷格子 sh-三合廟陷顯示" data-地支數="' + 宮格數 + '"></td>');
    dsGrid.push('<td id="' + AuspiciousBrightnessPrefix + '3' + '" class="sh-廟陷格子 sh-三合廟陷顯示" data-地支數="' + 宮格數 + '"></td>');
    dsGrid.push('<td id="' + AuspiciousBrightnessPrefix + '2' + '" class="sh-廟陷格子 sh-三合廟陷顯示" data-地支數="' + 宮格數 + '">☼</td>');
    dsGrid.push('<td id="' + AuspiciousBrightnessPrefix + '1' + '" class="sh-廟陷格子 sh-三合廟陷顯示" data-地支數="' + 宮格數 + '">△</td>');
    dsGrid.push('<td id="' + AuspiciousBrightnessPrefix + '0' + '" class="sh-廟陷格子 sh-三合廟陷顯示" data-地支數="' + 宮格數 + '">◯</td>');
    dsGrid.push('</tr>');
    dsGrid.push('<tr>');
    dsGrid.push('<td id="' + ShaStarPrefix + '0' +'" class="sh-橫盤副星格子 sh-橫盤主副星格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">擎<br>羊</td>');
    dsGrid.push('<td id="' + ShaStarPrefix + '1' +'" class="sh-橫盤副星格子 sh-橫盤主副星格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">火<br>星</td>');
    dsGrid.push('<td id="' + ShaStarPrefix + '2' +'" class="sh-橫盤副星格子 sh-橫盤主副星格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">地<br>劫</td>');
    dsGrid.push('<td id="' + ShaStarPrefix + '3' +'" class="sh-橫盤副星格子 sh-橫盤主副星格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">天<br>馬</td>');
    dsGrid.push('<td id="' + MainStarPrefix + '1' +'" class="sh-橫盤主星格子 sh-橫盤主副星格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">七<br>殺</td>');
    dsGrid.push('<td id="' + MainStarPrefix + '0' +'" class="sh-橫盤主星格子 sh-橫盤主副星格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">廉<br>貞</td>');
    dsGrid.push('<td id="' + AuspiciousStarPrefix + '4' +'" class="sh-橫盤副星格子 sh-橫盤主副星格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">天<br>魁</td>');
    dsGrid.push('<td id="' + AuspiciousStarPrefix + '3' +'" class="sh-橫盤副星格子 sh-橫盤主副星格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">右<br>弼</td>');
    dsGrid.push('<td id="' + AuspiciousStarPrefix + '2' +'" class="sh-橫盤副星格子 sh-橫盤主副星格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">左<br>輔</td>');
    dsGrid.push('<td id="' + AuspiciousStarPrefix + '1' +'" class="sh-橫盤副星格子 sh-橫盤主副星格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">文<br>曲</td>');
    dsGrid.push('<td id="' + AuspiciousStarPrefix + '0' +'" class="sh-橫盤副星格子 sh-橫盤主副星格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">文<br>昌</td>');
    dsGrid.push('</tr>');
    dsGrid.push('<tr>');
    dsGrid.push('<td id="' + ShaSiHuaPrefix + '0' +'" class="sh-橫盤副星四化格子 sh-三合本命四化顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + ShaSiHuaPrefix + '1' +'" class="sh-橫盤副星四化格子 sh-三合本命四化顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + ShaSiHuaPrefix + '2' +'" class="sh-橫盤副星四化格子 sh-三合本命四化顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + ShaSiHuaPrefix + '3' +'" class="sh-橫盤副星四化格子 sh-三合本命四化顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + MainSiHuaPrefix + '1' +'" class="sh-橫盤主星四化格子 sh-三合本命四化顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + MainSiHuaPrefix + '0' +'" class="sh-橫盤主星四化格子 sh-三合本命四化顯示" data-地支數="' + 宮格數 +'">祿</td>');
    dsGrid.push('<td id="' + AuspiciousSiHuaPrefix + '4' +'" class="sh-橫盤副星四化格子 sh-三合本命四化顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + AuspiciousSiHuaPrefix + '3' +'" class="sh-橫盤副星四化格子 sh-三合本命四化顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + AuspiciousSiHuaPrefix + '2' +'" class="sh-橫盤副星四化格子 sh-三合本命四化顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + AuspiciousSiHuaPrefix + '1' +'" class="sh-橫盤副星四化格子 sh-三合本命四化顯示" data-地支數="' + 宮格數 +'">科</td>');
    dsGrid.push('<td id="' + AuspiciousSiHuaPrefix + '0' +'" class="sh-橫盤副星四化格子 sh-三合本命四化顯示" data-地支數="' + 宮格數 +'">忌</td>');
    dsGrid.push('</tr>');
    dsGrid.push('<tr id="三合橫盤大限四化行">');
    dsGrid.push('<td id="' + dxShaSiHuaPrefix + '0' +'" class="sh-橫盤大限副星四化格子 shhp-三合大限四化顯示 sh-三合大限顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + dxShaSiHuaPrefix + '1' +'" class="sh-橫盤大限副星四化格子 shhp-三合大限四化顯示 sh-三合大限顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + dxShaSiHuaPrefix + '2' +'" class="sh-橫盤大限副星四化格子 shhp-三合大限四化顯示 sh-三合大限顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + dxShaSiHuaPrefix + '3' +'" class="sh-橫盤大限副星四化格子 shhp-三合大限四化顯示 sh-三合大限顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + dxMainSiHuaPrefix + '1' +'" class="sh-橫盤大限主星四化格子 shhp-三合大限四化顯示 sh-三合大限顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + dxMainSiHuaPrefix + '0' +'" class="sh-橫盤大限主星四化格子 shhp-三合大限四化顯示 sh-三合大限顯示" data-地支數="' + 宮格數 +'">祿</td>');
    dsGrid.push('<td id="' + dxAuspiciousSiHuaPrefix + '4' +'" class="sh-橫盤大限副星四化格子 shhp-三合大限四化顯示 sh-三合大限顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + dxAuspiciousSiHuaPrefix + '3' +'" class="sh-橫盤大限副星四化格子 shhp-三合大限四化顯示 sh-三合大限顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + dxAuspiciousSiHuaPrefix + '2' +'" class="sh-橫盤大限副星四化格子 shhp-三合大限四化顯示 sh-三合大限顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + dxAuspiciousSiHuaPrefix + '1' +'" class="sh-橫盤大限副星四化格子 shhp-三合大限四化顯示 sh-三合大限顯示" data-地支數="' + 宮格數 +'">科</td>');
    dsGrid.push('<td id="' + dxAuspiciousSiHuaPrefix + '0' +'" class="sh-橫盤大限副星四化格子 shhp-三合大限四化顯示 sh-三合大限顯示" data-地支數="' + 宮格數 +'">忌</td>');
    dsGrid.push('</tr>');
    dsGrid.push('<tr id="三合橫盤流年四化行">');
    dsGrid.push('<td id="' + lnShaSiHuaPrefix + '0' +'" class="shhp-流年副星四化格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + lnShaSiHuaPrefix + '1' +'" class="shhp-流年副星四化格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + lnShaSiHuaPrefix + '2' +'" class="shhp-流年副星四化格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + lnShaSiHuaPrefix + '3' +'" class="shhp-流年副星四化格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + lnMainSiHuaPrefix + '1' +'" class="shhp-流年主星四化格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + lnMainSiHuaPrefix + '0' +'" class="shhp-流年主星四化格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'">祿</td>');
    dsGrid.push('<td id="' + lnAuspiciousSiHuaPrefix + '4' +'" class="shhp-流年副星四化格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + lnAuspiciousSiHuaPrefix + '3' +'" class="shhp-流年副星四化格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + lnAuspiciousSiHuaPrefix + '2' +'" class="shhp-流年副星四化格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + lnAuspiciousSiHuaPrefix + '1' +'" class="shhp-流年副星四化格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'">科</td>');
    dsGrid.push('<td id="' + lnAuspiciousSiHuaPrefix + '0' +'" class="shhp-流年副星四化格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'">忌</td>');
    dsGrid.push('</tr>');
    dsGrid.push('<tr id="三合橫盤雜曜行">');
    dsGrid.push('<td id="' + MiscStarPrefix + '0' +'" class="sh-橫盤雜曜格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">天<br>廚</td>');
    dsGrid.push('<td id="' + MiscStarPrefix + '1' +'" class="sh-橫盤雜曜格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + MiscStarPrefix + '2' +'" class="sh-橫盤雜曜格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + MiscStarPrefix + '3' +'" class="sh-橫盤雜曜格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + MiscStarPrefix + '4' +'" class="sh-橫盤雜曜格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + MiscStarPrefix + '5' +'" class="sh-橫盤雜曜格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + MiscStarPrefix + '6' +'" class="sh-橫盤雜曜格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="' + MiscStarPrefix + '博士' +'" class="sh-橫盤雜曜格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">博<br>士</td>');
    dsGrid.push('<td id="' + MiscStarPrefix + '將前' +'" class="sh-橫盤雜曜格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">將<br>前</td>');
    dsGrid.push('<td id="' + MiscStarPrefix + '歲前' +'" class="sh-橫盤雜曜格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">歲<br>前</td>');
    dsGrid.push('<td id="' + MiscStarPrefix + '長生' +'" class="sh-橫盤雜曜格子 shhp-三合星曜顯示" data-地支數="' + 宮格數 +'">長<br>生</td>');
    dsGrid.push('</tr>');
    dsGrid.push('<tr>');  //
    dsGrid.push('<td colspan="2" rowspan="1" id="三合流年宮位' + GenPrefix +'" class="shhp-流年宮位格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'">流財</td>');
    dsGrid.push('<td colspan="2" rowspan="1" id="' + YearStarPrefix + '0' +'" class="shhp-流曜格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'">流昌</td>');
    dsGrid.push('<td colspan="4" rowspan="1" id="三合大限宮位' + GenPrefix +'" class="shhp-大限宮位格子 sh-三合大限顯示" data-地支數="' + 宮格數 +'">大財</td>');
    dsGrid.push('<td colspan="2" rowspan="1" id="' + DecadeStarPrefix + '0' +'" class="shhp-大曜格子 sh-三合大限顯示" data-地支數="' + 宮格數 +'">大昌</td>');
    dsGrid.push('<td id="三合小限' + GenPrefix +'" class="shhp-三合流年顯示 shhp-流年宮位格子 shhp-小限顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('</tr>');
    
    dsGrid.push('<tr>');
    dsGrid.push('<td colspan="2" rowspan="1" id="三合流年年份' + GenPrefix +'" class="shhp-流年年份格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'">2018</td>');
    dsGrid.push('<td colspan="2" rowspan="1" id="' + YearStarPrefix + '1' +'" class="shhp-流曜格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td colspan="4" rowspan="1" id="三合大限歲數' + GenPrefix +'" class="shhp-大限歲數格子  sh-三合本命顯示" data-地支數="' + 宮格數 +'">2-11</td>');
    dsGrid.push('<td colspan="2" rowspan="1" id="' + DecadeStarPrefix + '1' +'" class="shhp-大曜格子 sh-三合大限顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="三合天干' + GenPrefix +'" class="sh-三合天干格子 sh-三合本命顯示" data-地支數="' + 宮格數 +'">癸</td>');
    dsGrid.push('</tr>');
    dsGrid.push('<tr>');
    dsGrid.push('<td id="三合流年歲數' + GenPrefix +'" class="shhp-流年歲數格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'">34</td>');
    dsGrid.push('<td id="三合身宮' + GenPrefix +'" class="sh-三合身宮格子 sh-三合本命顯示" data-地支數="' + 宮格數 +'">身</td>');
    dsGrid.push('<td colspan="2" rowspan="1" id="' + YearStarPrefix + '2' +'" class="shhp-流曜格子 shhp-三合流年顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td colspan="4" rowspan="1" id="三合宮位' + GenPrefix +'" class="sh-三合宮位格子 sh-三合本命顯示" data-地支數="' + 宮格數 +'">命宮</td>');
    dsGrid.push('<td colspan="2" rowspan="1" id="' + DecadeStarPrefix + '2' +'" class="shhp-大曜格子 sh-三合大限顯示" data-地支數="' + 宮格數 +'"></td>');
    dsGrid.push('<td id="三合地支' + GenPrefix +'" class="sh-三合地支格子 sh-三合本命顯示" data-地支數="' + 宮格數 +'">未</td>');
    dsGrid.push('</tr>');
    dsGrid.push('</tbody>');
    dsGrid.push('</table>');
    
    return (dsGrid.join(""));
} // end function 橫盤地支宮格
