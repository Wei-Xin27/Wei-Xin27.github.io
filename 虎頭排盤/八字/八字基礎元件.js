//     *********************************************************************************
//                                         四柱模塊
//     *********************************************************************************

function 四柱名稱(四柱數, 選項){
    switch(四柱數){
        case 0: case "0":
            if(選項=="" || 選項=="1" || 選項=="柱名" || typeof 選項 == 'undefined') return "年柱";
			if(選項=="2" || 選項=="天干") return "年干";
			if(選項=="3" || 選項=="地支") return "年支";
        case 1: case "1": 
            if(選項=="" || 選項=="1" || 選項=="柱名" || typeof 選項 == 'undefined') return "月柱";
			if(選項=="2" || 選項=="天干") return "月干";
			if(選項=="3" || 選項=="地支") return "月支";
        case 2: case "2": 
            if(選項=="" || 選項=="1" || 選項=="柱名" || typeof 選項 == 'undefined') return "日柱";
			if(選項=="2" || 選項=="天干") return "日干";
			if(選項=="3" || 選項=="地支") return "日支";
        case 3: case "3": 
            if(選項=="" || 選項=="1" || 選項=="柱名" || typeof 選項 == 'undefined') return "時柱";
			if(選項=="2" || 選項=="天干") return "時干";
			if(選項=="3" || 選項=="地支") return "時支";
        case 4: case "3": 
            if(選項=="" || 選項=="1" || 選項=="柱名" || typeof 選項 == 'undefined') return "大運";
			if(選項=="2" || 選項=="天干") return "大運干";
			if(選項=="3" || 選項=="地支") return "大運支";
        case 5: case "5": 
            if(選項=="" || 選項=="1" || 選項=="柱名" || typeof 選項 == 'undefined') return "流年";
			if(選項=="2" || 選項=="天干") return "流年干";
			if(選項=="3" || 選項=="地支") return "流年支";
        case 6: case "6": 
            if(選項=="" || 選項=="1" || 選項=="柱名" || typeof 選項 == 'undefined') return "流月";
			if(選項=="2" || 選項=="天干") return "流月干";
			if(選項=="3" || 選項=="地支") return "流月支";
        default:
            alert("四柱名稱輸入錯誤！！");
            return "";
    }
} // end function 四柱名稱


function 四柱屬性(命盤, 柱數, 屬性選項){
    //柱數：0年柱，1月柱，2日柱，3時柱
    //選項："天干"，"地支",十二長生，納音，天干十神，地支十神1，2，3......

    switch(柱數){
        case 0: //年柱
            switch (屬性選項) {
                case "天干":
                    return 命盤.年干.天干;
                case "地支":
                    return 命盤.年支.地支;
                case "天干十神":
                    return 命盤.年干.十神;
                case "地支十神1":
                    return 命盤.年支.十神1;
                case "地支十神2":
                    return 命盤.年支.十神2;
                case "地支十神3":
                    return 命盤.年支.十神3;
                default:
                    alert(屬性選項 + "：輸入的屬性選項錯誤 ！");
                    return "";
                   
            }
        case 1: //月柱
            switch (屬性選項) {
                case "天干":
                    return 命盤.月干.天干;
                case "地支":
                    return 命盤.月支.地支;
                case "天干十神":
                    return 命盤.月干.十神;
                case "地支十神1":
                    return 命盤.月支.十神1;
                case "地支十神2":
                    return 命盤.月支.十神2;
                case "地支十神3":
                    return 命盤.月支.十神3;
                default:
                    alert(屬性選項 + "：輸入的屬性選項錯誤 ！");
                    return "";
            }
        case 2: //日柱
            switch (屬性選項) {
                case "天干":
                    return 命盤.日干.天干;
                case "地支":
                    return 命盤.日支.地支;
                case "天干十神":
                    return 命盤.日干.十神;
                case "地支十神1":
                    return 命盤.日支.十神1;
                case "地支十神2":
                    return 命盤.日支.十神2;
                case "地支十神3":
                    return 命盤.日支.十神3;
                default:
                    alert(屬性選項 + "：輸入的屬性選項錯誤 ！");
                    return "";
            }
        case 3: //時柱
            switch (屬性選項) {
                case "天干":
                    return 命盤.時干.天干;
                case "地支":
                    return 命盤.時支.地支;
                case "天干十神":
                    return 命盤.時干.十神;
                case "地支十神1":
                    return 命盤.時支.十神1;
                case "地支十神2":
                    return 命盤.時支.十神2;
                case "地支十神3":
                    return 命盤.時支.十神3;
                default:
                    alert(屬性選項 + "：輸入的屬性選項錯誤 ！");
                    return "";
            }
        default:
            alert(柱數 + "：輸入的四柱數錯誤 ！");
    }
} // end function 四柱屬性



//     *********************************************************************************
//                                         十神模塊
//     *********************************************************************************

function 十神數轉字(十神數) {
    switch (十神數) {
        case 0: return "比肩";
        case 1: return "劫財";
        case 2: return "食神";
        case 3: return "傷官";
        case 4: return "偏財";
        case 5: return "正財";
        case 6: return "七殺";
        case 7: return "正官";
        case 8: return "偏印";
        case 9: return "正印";
    }
}  // end function 十神數轉字


function 十神字轉數(十神) {
    switch (十神) {
        case "比肩": return 0;
        case "劫財": return 1;
        case "食神": return 2;
        case "傷官": return 3;
        case "偏財": return 4;
        case "正財": return 5;
        case "七殺": return 6;
        case "正官": return 7;
        case "偏印": return 8;
        case "正印": return 9;
    }
}  // end function 十神字轉數


function 十神單字(十神) {
    switch (十神) {
        case "比肩": return "比";
        case "劫財": return "劫";
        case "食神": return "食";
        case "傷官": return "傷";
        case "正財": return "財";
        case "偏財": return "才";
        case "正官": return "官";
        case "七殺": return "殺";
        case "正印": return "印";
        case "偏印": return "梟";
        default: return "";
    }
} // end function 十神單字


function 十神轉五神(十神) {
    switch (十神) {
        case "比肩": return "比劫";
        case "劫財": return "比劫";
        case "食神": return "食傷";
        case "傷官": return "食傷";
        case "正財": return "財才";
        case "偏財": return "財才";
        case "正官": return "官殺";
        case "七殺": return "官殺";
        case "正印": return "印梟";
        case "偏印": return "印梟";
        default:
            alert(十神 + "：十神轉五神，輸入的十神錯誤");
            return "";
    }
}  // end function 十神轉五神


function 五行轉五神(日主五行, 五行) {
    var 五行關係 = 五行生剋(日主五行, 五行);

    switch (五行關係) {
        case "同我": return "比劫";
        case "我生": return "食傷";
        case "我剋": return "財才";
        case "剋我": return "官殺";
        case "生我": return "印梟";
        default:
            alert(五行關係 + "：五行轉五神，五行生剋關係錯誤");
            return "";
    }
}  // end function 五行轉五神



function 尋十神(天干, 日主) {
    // 輸入要尋十神的天干與日主的天干,尋十神("乙", "甲")

    //if(計算方法==undefined) 計算方法="普及";
    var 計算方法="";
    if(系統.設定.用戶設定.輸入預設.象論排十神) 計算方法="象論";

    if (天干 == "" || 天干 == "-") return "";

    var 天干陰陽 = 天干屬性(天干, "陰陽");
    var 日主陰陽 = 天干屬性(日主, "陰陽");
    var 天干五行 = 天干屬性(天干, "五行");
    var 日主五行 = 天干屬性(日主, "五行");
    var 十神;

    var 陰陽同性 = (天干陰陽 == 日主陰陽) ? true : false;
    var 五行關係 = 五行生剋(日主五行, 天干五行);

    switch (五行關係) {
        case "同我":
            十神 = 陰陽同性 ? "比肩" : "劫財";
            break;
        case "我生":
            十神 = 陰陽同性 ? "食神" : "傷官";
            break;
        case "我剋":
            if(計算方法!="象論") 十神 = 陰陽同性 ? "偏財" : "正財"; else 十神 = 陰陽同性 ? "正財" : "偏財";
            break;
        case "剋我":
            if(計算方法!="象論") 十神 = 陰陽同性 ? "七殺" : "正官"; else 十神 = 陰陽同性 ? "正官" : "七殺";
            break;
        case "生我":
            if(計算方法!="象論") 十神 = 陰陽同性 ? "偏印" : "正印"; else 十神 = 陰陽同性 ? "正印" : "偏印";
            break;
    }
    return 十神;
    //alert("十神：" + 十神 + ",關係：" + 五行關係 + " / " + 天干陰陽 + 天干五行 + "/" + 日主陰陽 + 日主五行);
}  // end function 尋十神


function 十神天干(日主, 十神) {
    switch (日主) {
        case "甲":
            switch (十神) {
                case "比肩": return "甲";
                case "劫財": return "乙";
                case "食神": return "丙";
                case "傷官": return "丁";
                case "正財": return "己";
                case "偏財": return "戊";
                case "正官": return "辛";
                case "七殺": return "庚";
                case "正印": return "癸";
                case "偏印": return "壬";
            }          
           
        case "乙":
            switch (十神) {
                case "比肩": return "乙";
                case "劫財": return "甲";
                case "食神": return "丁";
                case "傷官": return "丙";
                case "正財": return "戊";
                case "偏財": return "己";
                case "正官": return "庚";
                case "七殺": return "辛";
                case "正印": return "壬";
                case "偏印": return "癸";
            }          
           
        case "丙":
            switch (十神) {
                case "比肩": return "丙";
                case "劫財": return "丁";
                case "食神": return "戊";
                case "傷官": return "己";
                case "正財": return "辛";
                case "偏財": return "庚";
                case "正官": return "癸";
                case "七殺": return "壬";
                case "正印": return "乙";
                case "偏印": return "甲";
            }
                       
        case "丁":
            switch (十神) {
                case "比肩": return "丁";
                case "劫財": return "丙";
                case "食神": return "己";
                case "傷官": return "戊";
                case "正財": return "庚";
                case "偏財": return "辛";
                case "正官": return "壬";
                case "七殺": return "癸";
                case "正印": return "甲";
                case "偏印": return "乙";
            }
                           
        case "戊":
            switch (十神) {
                case "比肩": return "戊";
                case "劫財": return "己";
                case "食神": return "庚";
                case "傷官": return "辛";
                case "正財": return "癸";
                case "偏財": return "壬";
                case "正官": return "乙";
                case "七殺": return "甲";
                case "正印": return "丁";
                case "偏印": return "丙";
            }
                 
        case "己":
            switch (十神) {
                case "比肩": return "己";
                case "劫財": return "戊";
                case "食神": return "辛";
                case "傷官": return "庚";
                case "正財": return "壬";
                case "偏財": return "癸";
                case "正官": return "甲";
                case "七殺": return "乙";
                case "正印": return "丙";
                case "偏印": return "丁";
            }
           
        case "庚":
            switch (十神) {
                case "比肩": return "庚";
                case "劫財": return "辛";
                case "食神": return "壬";
                case "傷官": return "癸";
                case "正財": return "乙";
                case "偏財": return "甲";
                case "正官": return "丁";
                case "七殺": return "丙";
                case "正印": return "己";
                case "偏印": return "戊";
            }
                       
        case "辛":
            switch (十神) {
                case "比肩": return "辛";
                case "劫財": return "庚";
                case "食神": return "癸";
                case "傷官": return "壬";
                case "正財": return "甲";
                case "偏財": return "乙";
                case "正官": return "丙";
                case "七殺": return "丁";
                case "正印": return "戊";
                case "偏印": return "己";
            }
                        
        case "壬":
            switch (十神) {
                case "比肩": return "壬";
                case "劫財": return "癸";
                case "食神": return "甲";
                case "傷官": return "乙";
                case "正財": return "丁";
                case "偏財": return "丙";
                case "正官": return "己";
                case "七殺": return "戊";
                case "正印": return "辛";
                case "偏印": return "庚";
            }
             
        case "癸":
            switch (十神) {
                case "比肩": return "癸";
                case "劫財": return "壬";
                case "食神": return "乙";
                case "傷官": return "甲";
                case "正財": return "丙";
                case "偏財": return "丁";
                case "正官": return "戊";
                case "七殺": return "己";
                case "正印": return "庚";
                case "偏印": return "辛";
            }
            
            
        default:
            alert("十神轉換天干出現錯誤！！");
           
    }
}  // end function 十神天干


function 十神五行(日主, 十神){
    var 日主五行=天干屬性(日主, "五行");
    switch (十神) {
        case "比肩": case "劫財":  case "比劫":
            //if(十神=="比劫") console.log(十神 + " / " + 日主五行 + " / " + 五行滾動(日主五行, 0));
            return 五行滾動(日主五行, 0); // 同我
        case "食神": case "傷官":  case "食傷":
            return 五行滾動(日主五行, 1); // 我生
                       
        case "正財": case "偏財": case "財才":
            return 五行滾動(日主五行, 2); // 我剋
             
        case "正官": case "七殺":  case "官殺":
            return 五行滾動(日主五行, 3); // 剋我
             
        case "正印": case "偏印":  case "印梟":
            return 五行滾動(日主五行, 4); // 生我
    }
}  // end function 十神五行



function 十神刑冲合害(十神, 干支, 刑冲合害, 命盤) {
    // 十神：要測試的十神，"正官"
    // 干支：測試天干或地支，"天干"、"地支"、"干支"(天干或地支)
    // 刑冲合害：測試該十神是否有刑冲合害，"刑"、"冲"、"合"、"亥"。合包括任何一種合
    var 克應 = false;

    for(var i=0; i<4; i++){
        switch(true){
            case ((干支 == "地支") && (刑冲合害 == "合") && (命盤.分析.四柱.四柱數據[i].地支十神1 == 十神)):
                if (命盤.分析.四柱.四柱數據[i].三合 != "" || 命盤.分析.四柱.四柱數據[i].半合 != "" || 命盤.分析.四柱.四柱數據[i].六合 != "" || 命盤.分析.四柱.四柱數據[i].暗合 != "") return true;
                break;
            case ((干支 == "地支") && (刑冲合害 == "刑") && (命盤.分析.四柱.四柱數據[i].地支十神1 == 十神)):
                if (命盤.分析.四柱.四柱數據[i].三刑 != "" || 命盤.分析.四柱.四柱數據[i].半刑 != "") return true;
                break;
            case ((干支 == "地支") && (刑冲合害 == "冲") && (命盤.分析.四柱.四柱數據[i].地支十神1 == 十神)):
                if (命盤.分析.四柱.四柱數據[i].相冲 != "") return true;
                break;
            case ((干支 == "地支") && (刑冲合害 == "害") && (命盤.分析.四柱.四柱數據[i].地支十神1 == 十神)):
                if (命盤.分析.四柱.四柱數據[i].相害 != "") return true;
                break;
            case ((干支 == "天干") && (刑冲合害 == "合") && (命盤.分析.四柱.四柱數據[i].天干十神 == 十神)):
                if (命盤.分析.四柱.四柱數據[i].天干五合 != "") return true;
                break;

            // ************************* 天干 或 地支 都納入計算 ****************************
            case ((干支 == "干支") && (刑冲合害 == "合") && ((命盤.分析.四柱.四柱數據[i].天干十神 == 十神) || 命盤.分析.四柱.四柱數據[i].地支十神1 == 十神)):
                if (命盤.分析.四柱.四柱數據[i].三合 != "" || 命盤.分析.四柱.四柱數據[i].半合 != "" || 命盤.分析.四柱.四柱數據[i].六合 != "" || 命盤.分析.四柱.四柱數據[i].暗合 != "") return true;
                break;
            case ((干支 == "干支") && (刑冲合害 == "冲") && ((命盤.分析.四柱.四柱數據[i].天干十神 == 十神) || 命盤.分析.四柱.四柱數據[i].地支十神1 == 十神)):
                if (命盤.分析.四柱.四柱數據[i].相冲 != "") return true;
                break;
        }
    }
    return false;
} // end function 十神刑冲合害


function 十神屬性英文(十神, 選項){
    
    if(十神=="") return "";
    var 十神數 = 十神字轉數(十神);
    var 十神 = [
        { "十神": "比肩", "係數": 0, "單字": "比", "TenGod": "Sibling", "TenGodAbbr": "SB"},
        { "十神": "劫財", "係數": 1, "單字": "劫", "TenGod": "Rob Wealth", "TenGodAbbr": "RW"},
        { "十神": "食神", "係數": 2, "單字": "食", "TenGod": "Eating God", "TenGodAbbr": "EG"},
        { "十神": "傷官", "係數": 3, "單字": "傷", "TenGod": "Hurting Officer", "TenGodAbbr": "HO"},
        { "十神": "偏財", "係數": 4, "單字": "才", "TenGod": "Indirect Wealth", "TenGodAbbr": "IW"},
        { "十神": "正財", "係數": 5, "單字": "財", "TenGod": "Direct Wealth", "TenGodAbbr": "DW"},
        { "十神": "七殺", "係數": 6, "單字": "殺", "TenGod": "Seven Killings", "TenGodAbbr": "SK"},
        { "十神": "正官", "係數": 7, "單字": "官", "TenGod": "Direct Officer", "TenGodAbbr": "DO"},
        { "十神": "偏印", "係數": 8, "單字": "梟", "TenGod": "Indirect Resource", "TenGodAbbr": "IR"},
        { "十神": "正印", "係數": 9, "單字": "印", "TenGod": "Direct Resource", "TenGodAbbr": "DR"}
    ];

    switch (選項) {
        case 1: case "天干":
            return 十神[十神數].十神;
        case 2: case "係數":
            return 十神[十神數].係數;
        case 3: case "單字":
            return 十神[十神數].單字;
        case 4: case "TenGod":
            return 十神[十神數].TenGod;
        case 5: case "TenGodAbbr":
            return 十神[十神數].TenGodAbbr;
        default:
            alert(十神 + "，" + 選項 + "：十神屬性輸入錯誤");
            return "";
    } // end switch
}  // end function 十神屬性英文


// *************************************************************************
//                               旺相休囚死
// *************************************************************************

function 日干月令對照(日主,月令,選項){
	var 旺相休囚死;

	switch(日主){
	    case "甲":
	        switch (月令) {
	            case "寅":
	                旺相休囚死="旺";
	                break;
	            case "卯":
	                旺相休囚死="旺";
	                break;
	            case "辰":
	                旺相休囚死="囚";
	                break;
	            case "巳":
	                旺相休囚死="休";
	                break;
	            case "午":
	                旺相休囚死="休";
	                break;
	            case "未":
	                旺相休囚死="囚";
	                break;
	            case "申":
	                旺相休囚死="死";
	                break;
	            case "酉":
	                旺相休囚死="死";
	                break;
	            case "戌":
	                旺相休囚死="囚";
	                break;
	            case "亥":
	                旺相休囚死="相";
	                break;
	            case "子":
	                旺相休囚死="相";
	                break;
	            case "丑":
	                旺相休囚死="囚";
	                break;
                default:
                    alert(月令+"：日干月令對照 function, 月令輸入錯誤！");
	        }
	        break;
		case "乙":
	        switch (月令) {
	            case "寅":
	                旺相休囚死="旺";
	                break;
	            case "卯":
	                旺相休囚死="旺";
	                break;
	            case "辰":
	                旺相休囚死="囚";
	                break;
	            case "巳":
	                旺相休囚死="休";
	                break;
	            case "午":
	                旺相休囚死="休";
	                break;
	            case "未":
	                旺相休囚死="囚";
	                break;
	            case "申":
	                旺相休囚死="死";
	                break;
	            case "酉":
	                旺相休囚死="死";
	                break;
	            case "戌":
	                旺相休囚死="囚";
	                break;
	            case "亥":
	                旺相休囚死="相";
	                break;
	            case "子":
	                旺相休囚死="相";
	                break;
	            case "丑":
	                旺相休囚死="囚";
	                break;
                default:
                    alert(月令+"：日干月令對照 function, 月令輸入錯誤！");
	        }
            break;
		case "丙":
	        switch (月令) {
	            case "寅":
	                旺相休囚死="相";
	                break;
	            case "卯":
	                旺相休囚死="相";
	                break;
	            case "辰":
	                旺相休囚死="休";
	                break;
	            case "巳":
	                旺相休囚死="旺";
	                break;
	            case "午":
	                旺相休囚死="旺";
	                break;
	            case "未":
	                旺相休囚死="休";
	                break;
	            case "申":
	                旺相休囚死="囚";
	                break;
	            case "酉":
	                旺相休囚死="囚";
	                break;
	            case "戌":
	                旺相休囚死="休";
	                break;
	            case "亥":
	                旺相休囚死="死";
	                break;
	            case "子":
	                旺相休囚死="死";
	                break;
	            case "丑":
	                旺相休囚死="休";
	                break;
                default:
                    alert(月令+"：日干月令對照 function, 月令輸入錯誤！");
	        }
            break;
		case "丁":
	        switch (月令) {
	            case "寅":
	                旺相休囚死="相";
	                break;
	            case "卯":
	                旺相休囚死="相";
	                break;
	            case "辰":
	                旺相休囚死="休";
	                break;
	            case "巳":
	                旺相休囚死="旺";
	                break;
	            case "午":
	                旺相休囚死="旺";
	                break;
	            case "未":
	                旺相休囚死="休";
	                break;
	            case "申":
	                旺相休囚死="囚";
	                break;
	            case "酉":
	                旺相休囚死="囚";
	                break;
	            case "戌":
	                旺相休囚死="休";
	                break;
	            case "亥":
	                旺相休囚死="死";
	                break;
	            case "子":
	                旺相休囚死="死";
	                break;
	            case "丑":
	                旺相休囚死="休";
	                break;
                default:
                    alert(月令+"：日干月令對照 function, 月令輸入錯誤！");
	        }
            break;
		case "戊":
	        switch (月令) {
	            case "寅":
	                旺相休囚死="死";
	                break;
	            case "卯":
	                旺相休囚死="死";
	                break;
	            case "辰":
	                旺相休囚死="旺";
	                break;
	            case "巳":
	                旺相休囚死="相";
	                break;
	            case "午":
	                旺相休囚死="相";
	                break;
	            case "未":
	                旺相休囚死="旺";
	                break;
	            case "申":
	                旺相休囚死="休";
	                break;
	            case "酉":
	                旺相休囚死="休";
	                break;
	            case "戌":
	                旺相休囚死="旺";
	                break;
	            case "亥":
	                旺相休囚死="囚";
	                break;
	            case "子":
	                旺相休囚死="囚";
	                break;
	            case "丑":
	                旺相休囚死="旺";
	                break;
                default:
                    alert(月令+"：日干月令對照 function, 月令輸入錯誤！");
	        }
            break;
		case "己":
	        switch (月令) {
	            case "寅":
	                旺相休囚死="死";
	                break;
	            case "卯":
	                旺相休囚死="死";
	                break;
	            case "辰":
	                旺相休囚死="旺";
	                break;
	            case "巳":
	                旺相休囚死="相";
	                break;
	            case "午":
	                旺相休囚死="相";
	                break;
	            case "未":
	                旺相休囚死="旺";
	                break;
	            case "申":
	                旺相休囚死="休";
	                break;
	            case "酉":
	                旺相休囚死="休";
	                break;
	            case "戌":
	                旺相休囚死="旺";
	                break;
	            case "亥":
	                旺相休囚死="囚";
	                break;
	            case "子":
	                旺相休囚死="囚";
	                break;
	            case "丑":
	                旺相休囚死="旺";
	                break;
                default:
                    alert(月令+"：日干月令對照 function, 月令輸入錯誤！");
	        }
            break;
		case "庚":
	        switch (月令) {
	            case "寅":
	                旺相休囚死="囚";
	                break;
	            case "卯":
	                旺相休囚死="囚";
	                break;
	            case "辰":
	                旺相休囚死="相";
	                break;
	            case "巳":
	                旺相休囚死="死";
	                break;
	            case "午":
	                旺相休囚死="死";
	                break;
	            case "未":
	                旺相休囚死="相";
	                break;
	            case "申":
	                旺相休囚死="旺";
	                break;
	            case "酉":
	                旺相休囚死="旺";
	                break;
	            case "戌":
	                旺相休囚死="相";
	                break;
	            case "亥":
	                旺相休囚死="休";
	                break;
	            case "子":
	                旺相休囚死="休";
	                break;
	            case "丑":
	                旺相休囚死="相";
	                break;
                default:
                    alert(月令+"：日干月令對照 function, 月令輸入錯誤！");
	        }
            break;
		case "辛":
	        switch (月令) {
	            case "寅":
	                旺相休囚死="囚";
	                break;
	            case "卯":
	                旺相休囚死="囚";
	                break;
	            case "辰":
	                旺相休囚死="相";
	                break;
	            case "巳":
	                旺相休囚死="死";
	                break;
	            case "午":
	                旺相休囚死="死";
	                break;
	            case "未":
	                旺相休囚死="相";
	                break;
	            case "申":
	                旺相休囚死="旺";
	                break;
	            case "酉":
	                旺相休囚死="旺";
	                break;
	            case "戌":
	                旺相休囚死="相";
	                break;
	            case "亥":
	                旺相休囚死="休";
	                break;
	            case "子":
	                旺相休囚死="休";
	                break;
	            case "丑":
	                旺相休囚死="相";
	                break;
                default:
                    alert(月令+"：日干月令對照 function, 月令輸入錯誤！");
	        }
            break;
		case "壬":
	        switch (月令) {
	            case "寅":
	                旺相休囚死="休";
	                break;
	            case "卯":
	                旺相休囚死="休";
	                break;
	            case "辰":
	                旺相休囚死="死";
	                break;
	            case "巳":
	                旺相休囚死="囚";
	                break;
	            case "午":
	                旺相休囚死="囚";
	                break;
	            case "未":
	                旺相休囚死="死";
	                break;
	            case "申":
	                旺相休囚死="相";
	                break;
	            case "酉":
	                旺相休囚死="相";
	                break;
	            case "戌":
	                旺相休囚死="死";
	                break;
	            case "亥":
	                旺相休囚死="旺";
	                break;
	            case "子":
	                旺相休囚死="旺";
	                break;
	            case "丑":
	                旺相休囚死="死";
	                break;
                default:
                    alert(月令+"：日干月令對照 function, 月令輸入錯誤！");
	        }
            break;
		case "癸":
	        switch (月令) {
	            case "寅":
	                旺相休囚死="休";
	                break;
	            case "卯":
	                旺相休囚死="休";
	                break;
	            case "辰":
	                旺相休囚死="死";
	                break;
	            case "巳":
	                旺相休囚死="囚";
	                break;
	            case "午":
	                旺相休囚死="囚";
	                break;
	            case "未":
	                旺相休囚死="死";
	                break;
	            case "申":
	                旺相休囚死="相";
	                break;
	            case "酉":
	                旺相休囚死="相";
	                break;
	            case "戌":
	                旺相休囚死="死";
	                break;
	            case "亥":
	                旺相休囚死="旺";
	                break;
	            case "子":
	                旺相休囚死="旺";
	                break;
	            case "丑":
	                旺相休囚死="死";
	                break;
                default:
                    alert(月令+"：日干月令對照 function, 月令輸入錯誤！");
	        }
            break;
        default:
            alert(日主+"：日干月令對照 function, 日干輸入錯誤！");
            break;
    } // end of 日干 switch

    switch(選項){
        case "旺相休囚死":
            return 旺相休囚死;
        default:
            alert(選項+"：日干月令對照 function, 選項輸入錯誤！");
    }
}  // end function 日干月令對照


function 旺相休囚死字數轉換(令){
    var 輸入數字=(isNaN(令))? "字" : "數";  //輸入的是數還是字

    switch(輸入數字){
        case "字":
            switch(令){
                case "旺": return 5;
                case "相": return 4;
                case "休": return 3;
                case "囚": return 2;
                case "死": return 1;
                default:
                    alert(令+"：旺相休囚死字數轉換 錯誤");
                    return "";
            }
        break;
        case "數":
            switch(令){
                case 5: return "旺";
                case 4: return "相";
                case 3: return "休";
                case 2: return "囚";
                case 1: return "死";
                default:
                    alert(令+"：旺相休囚死字數轉換 錯誤");
                    return "";
            }        

    }
}  // end function 旺相休囚死字數轉換




function 流年模塊(流年, 日主, 生年) {  // to move to bazi 基礎元件
    // 日主=日干: 甲,乙,丙,丁......
    var BaseYear = 1924;
    var BaseYearGanZhi = 1; //甲子年干支數
    this.干支 = 六十干支屬性(干支滾動(BaseYearGanZhi, 流年 - BaseYear), 1);
    this.年份 = 流年;
    this.虛歲 = 流年 - 生年 + 1;
    this.生肖 = 地支字轉生肖(this.干支.substr(1, 1));
    this.天干十神 = 尋十神(this.干支.substr(0, 1), 日主);
    var 流年藏干 = 地支屬性(this.干支.substr(1, 1), "藏干");
    this.藏干十神1 = 尋十神(流年藏干.substr(0, 1), 日主);
    this.藏干十神2 = 尋十神(流年藏干.substr(1, 1), 日主);
    this.藏干十神3 = 尋十神(流年藏干.substr(2, 1), 日主);
    //alert(this.藏干十神3);        
} // end function 流年模塊




function 藏干力量比率(地支, 藏干數){
    //藏干數：1，2，3 藏干1，2，3
    var 藏干比率=地支特性(地支, "藏干比率");
    var 藏干比率矩陣= 藏干比率.split(":");

    if(藏干數>0 &&　藏干數<4 && 藏干數<=藏干比率矩陣.length) {
        return parseFloat(藏干比率矩陣[藏干數-1]);
    } else return 0;
}  // end function 藏干力量比率