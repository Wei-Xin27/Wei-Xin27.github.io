
//var Enum六十干支 = Object.freeze({ "癸亥": 0, "甲子": 1, "乙丑": 2, "丙寅": 3, "丁卯": 4, "戊辰": 5, "己巳": 6, "庚午": 7, "辛未": 8, "壬申": 9, "癸酉": 10, "甲戌": 11, "乙亥": 12, "丙子": 13, "丁丑": 14, "戊寅": 15, "己卯": 16, "庚辰": 17, "辛巳": 18, "壬午": 19, "癸未": 20, "甲申": 21, "乙酉": 22, "丙戌": 23, "丁亥": 24, "戊子": 25, "己丑": 26, "庚寅": 27, "辛卯": 28, "壬辰": 29, "癸巳": 30, "甲午": 31, "乙未": 32, "丙申": 33, "丁酉": 34, "戊戌": 35, "己亥": 36, "庚子": 37, "辛丑": 38, "壬寅": 39, "癸卯": 40, "甲辰": 41, "乙巳": 42, "丙午": 43, "丁未": 44, "戊申": 45, "己酉": 46, "庚戌": 47, "辛亥": 48, "壬子": 49, "癸丑": 50, "甲寅": 51, "乙卯": 52, "丙辰": 53, "丁巳": 54, "戊午": 55, "己未": 56, "庚申": 57, "辛酉": 58, "壬戌": 59 })
//var Enum曆法 = Object.freeze({ "干支曆法": 0, "農曆": 1, "陰曆": 2 })


function 西曆日期模塊(年, 月, 日, 時) {
    // 時="hh:mm:00, 時辰是地支,自動計算
    var TimeHolder = 時.split(":")
    var TimeValue = Number(TimeHolder[0]) + Number(TimeHolder[1]) / 60 + Number(TimeHolder[2]) / 3600;
    if (parseInt(TimeValue)==NaN) { //if (Number.isNaN(TimeValue)) {
        時 = "00:00:00";
    }
    this.年 = 年;
    this.月 = 月;
    this.日 = 日;
    this.時 = 時;
    this.時辰 = 時間轉換地支(時, 1);
    this.西曆系統 = new Date(年, 月 - 1, 日, Number(TimeHolder[0]), 0, 0, 0);
    var DisplayDateType = new 日期格式(this.西曆系統);
    //alert(DisplayDateType.西曆);
    this.西曆中文 = DisplayDateType.西曆;

}  // end function 西曆日期模塊




function 尋星座(Month, Day, 選項) {
    // 輸入西曆月份、生日
    var ZodiacNum = Month * 100 + Day;
    var zodiac, symbol, longitude, 星座;

    switch (true) {
        case ((ZodiacNum >= 121) && (ZodiacNum < 220)): 星座 = "水瓶座"; zodiac = "Aquarius"; symbol = "♒"; longitude = "300"; break;
        case ((ZodiacNum >= 220) && (ZodiacNum < 321)): 星座 = "雙魚座"; zodiac = "Pisces"; symbol = "♓"; longitude = "330"; break;
        case ((ZodiacNum >= 321) && (ZodiacNum < 421)): 星座 = "白羊座"; zodiac = "Aries"; symbol = "♈"; longitude = "0"; break;
        case ((ZodiacNum >= 421) && (ZodiacNum < 522)): 星座 = "金牛座"; zodiac = "Taurus"; symbol = "♉"; longitude = "30"; break;
        case ((ZodiacNum >= 522) && (ZodiacNum < 622)): 星座 = "雙子座"; zodiac = "Gemini"; symbol = "♊"; longitude = "60"; break;
        case ((ZodiacNum >= 622) && (ZodiacNum < 723)): 星座 = "巨蟹座"; zodiac = "Cancer"; symbol = "♋"; longitude = "90"; break;
        case ((ZodiacNum >= 723) && (ZodiacNum < 823)): 星座 = "獅子座"; zodiac = "Leo"; symbol = "♌"; longitude = "120"; break;
        case ((ZodiacNum >= 823) && (ZodiacNum < 924)): 星座 = "處女座"; zodiac = "Virgo"; symbol = "♍"; longitude = "150"; break;
        case ((ZodiacNum >= 924) && (ZodiacNum < 1024)): 星座 = "天秤座"; zodiac = "Libra"; symbol = "♎"; longitude = "180"; break;
        case ((ZodiacNum >= 1024) && (ZodiacNum < 1123)): 星座 = "天蠍座"; zodiac = "Scorpio"; symbol = "♏"; longitude = "210"; break;
        case ((ZodiacNum >= 1123) && (ZodiacNum < 1222)): 星座 = "射手座"; zodiac = "Sagittarius"; symbol = "♐"; longitude = "240"; break;
        case ((ZodiacNum >= 1222) || (ZodiacNum < 121)): 星座 = "摩羯座"; zodiac = "Capricorn"; symbol = "♑"; longitude = "270"; break;
    }

    switch (選項) {
        case 1: case "星座名稱":
            return 星座;
        case 2: case "Zodiac":
            return zodiac;
        case 3: case "sign":
            return symbol;
        case 1: case "long":
            return longitude;
    }
}  // end function 尋星座


function 日期格式(SystemDate) {
	this.date=SystemDate;
    this.Year = SystemDate.getFullYear();
    this.Month = SystemDate.getMonth() + 1;
    this.Day = SystemDate.getDate();
    this.Hour = SystemDate.getHours();
    this.Minute = SystemDate.getMinutes();
    this.Second = SystemDate.getSeconds();
    var TimeStr = zeroPad(this.Hour, 2) + ":" + zeroPad(this.Minute, 2) + ":" + zeroPad(this.Second, 2);
    this.時辰 = 時間轉換地支(TimeStr, 1);
    this.西曆 = this.Year + "年" + this.Month + "月" + this.Day + "日" + this.Hour + "時" + this.Minute + "分";
    this.西曆日期= this.Year + "年" + this.Month + "月" + this.Day + "日";
    this.MalaysiaDate = this.Day + "-" + this.Month + "-" + this.Year + " " + TimeStr;
	this.月日=this.Month + "月" + this.Day + "日";
	this.時分=this.Hour + "時" + this.Minute + "分";
}  // end function 日期格式


function 中文數字(StdNumber){
    var numStr=StdNumber.toString();
    var ChineseNumStr="";
    var SmallerThan30=false;
    var ChineseDigit;
    var Digit;

    for(var i=0; i<numStr.length; i++){

        if(StdNumber<=30) {
            Digit=StdNumber;
            SmallerThan30=true;
        }
        else Digit=Number(numStr.substr(i,1));

        switch(Digit){
            case 0:
                ChineseDigit="〇";
                break;
            case 1:
                ChineseDigit="一";
                break;
            case 2:
                ChineseDigit="二";
                break;
            case 3:
                ChineseDigit="三";
                break; 
            case 4:
                ChineseDigit="四";
                break;
            case 5:
                ChineseDigit="五";
                break;
            case 6:
                ChineseDigit="六";
                break;
            case 7:
                ChineseDigit="七";
                break;
            case 8:
                ChineseDigit="八";
                break;
            case 9:
                ChineseDigit="九";
                break;
            case 10:
                ChineseDigit="十";
                break;
            case 11:
                ChineseDigit="十一";
                break;
            case 12:
                ChineseDigit="十二";
                break;
            case 13:
                ChineseDigit="十三";
                break;
            case 14:
                ChineseDigit="十四";
                break;
            case 15:
                ChineseDigit="十五";
                break;
            case 16:
                ChineseDigit="十六";
                break;
            case 17:
                ChineseDigit="十七";
                break;
            case 18:
                ChineseDigit="十八";
                break;
            case 19:
                ChineseDigit="十九";
                break;
            case 20:
                ChineseDigit="廿";
                break;
            case 21:
                ChineseDigit="廿一";
                break;
            case 22:
                ChineseDigit="廿二";
                break;
            case 23:
                ChineseDigit="廿三";
                break;
            case 24:
                ChineseDigit="廿四";
                break;
            case 25:
                ChineseDigit="廿五";
                break;
            case 26:
                ChineseDigit="廿六";
                break;
            case 27:
                ChineseDigit="廿七";
                break;
            case 28:
                ChineseDigit="廿八";
                break;
            case 29:
                ChineseDigit="廿九";
                break;
            case 30:
                ChineseDigit="卅";
                break;
            default:
                ChineseDigit="";
        } // end switch
        ChineseNumStr = ChineseNumStr + ChineseDigit;
        if(SmallerThan30) break;
    } //end for
    return ChineseNumStr;
}  // end function 中文數字


function DayOfWeek(DayNum) {
    var 天名, dayname;

    switch(DayNum){
        case 0:
            dayname = "Sunday";
            天名 = "星期日";
            break;
        case 1:
            dayname = "Monday";
            天名 = "星期一";
            break;
        case 2:
            dayname = "Tuesday";
            天名 = "星期二";
            break;
        case 3:
            dayname = "Wednesday";
            天名 = "星期三";
            break;
        case 4:
            dayname = "Thursday";
            天名 = "星期四";
            break;
        case 5:
            dayname = "Friday";
            天名 = "星期五";
            break;
        case 6:
            dayname = "Saturday";
            天名 = "星期六";
            break;
        default:
            dayname = "";
            天名 = "";
    } // end switch
    var DayNameObj = {
        "day": dayname, "天名": 天名
    }
    return DayNameObj;
}  // end function DayOfWeek


function 字串豎排(InputStr){
    // insert <br> in in-bwtween chars
    var vStr = [];
    for(var i=0; i<InputStr.length; i++) vStr.push(InputStr.substr(i,1));

    return vStr.join("<br>");
} // end 字串豎排

// -------------------------------------------

function 尋陽男陰女(性別, 年支) {
    var 性別陰陽;

    switch (年支) {
        case "子": case "寅": case "辰": case "午": case "申": case "戌":
            if (性別 == "男") { 性別陰陽 = "陽男"; }
            if (性別 == "女") { 性別陰陽 = "陽女"; }
            break;
        case "丑": case "卯": case "巳": case "未": case "酉": case "亥":
            if (性別 == "男") { 性別陰陽 = "陰男"; }
            if (性別 == "女") { 性別陰陽 = "陰女"; }
            break;
    }
    return 性別陰陽;
} // end function 尋陽男陰女(性別, 年支)


function 西時轉地支時(InputHour){
    var 地支時;

    switch(InputHour){
            case 0:
                地支時="子時"; break;
            case 1: case 2:
                地支時="丑時"; break;
            case 3: case 4:
                地支時="寅時"; break;
            case 5: case 6:
                地支時="卯時"; break;
            case 7: case 8:
                地支時="辰時"; break;
            case 9: case 10:
                地支時="巳時"; break;
            case 11: case 12:
                地支時="午時"; break;
            case 13: case 14:
                地支時="未時"; break;
            case 15: case 16:
                地支時="申時"; break;
            case 17: case 18:
                地支時="酉時"; break;
            case 19: case 20:
                地支時="戌時"; break;
            case 21: case 22:
                地支時="亥時"; break;
            case 23:
                地支時="夜子時"; break;
            default:
                地支時=""; break;
    }  // end switch
    return 地支時;
}  // end function 西時轉地支時


function 日期值轉換(DayString, DateType) {
    /**
    DayString: DDMMYYYYhhmmss
    DateType:  1 - Date with Time, DDMMYYYYhhmmss
               2 - Date without Time, DDMMYYYY, Time set to default 00:00:00
               3 - Year only, YYYY, Month & Day set to 1- January, Time set to default 00:00:00
    required: moment.js
    **/
    
    var InputDate;
    //DateType = 4;  //change it to moment date !!

    switch (DateType) {
        case 1:
            var InputDate = new Date(DayString.substr(4, 4), Number(DayString.substr(2, 2)) - 1, DayString.substr(0, 2), DayString.substr(8, 2), DayString.substr(10, 2), DayString.substr(12, 2), 0);
            break;
        case 2:
            InputDate = new Date(DayString.substr(4, 4), Number(DayString.substr(2, 2)) - 1, DayString.substr(0, 2), 0, 0, 0, 0);
            break;
        case 3:
            InputDate = new Date(DayString.substr(4, 4), 0, 1, 0, 0, 0, 0);
        case 4:  //moment JS date
            var momentDateStr = DayString.substr(4, 4) + "-" + DayString.substr(2, 2) + "-" + DayString.substr(0, 2) + " " + DayString.substr(8, 2) + ":" + DayString.substr(10, 2);
            moment.tz.setDefault("Asia/Taipei");  //Asia/Kuala_Lumpur
            InputDate = moment.tz(momentDateStr, "Asia/Taipei").toDate();
    }

    return InputDate;
}  // end function 日期值轉換




//     *********************************************************************************
//                                         十二運星模塊
//     *********************************************************************************
function 十二星運(天干, 地支) {
    // 天干與地支可以是不同四柱的搭配來判斷不同的事項
    var 開始地支, 順逆, 運星, 地支數, 滾動數;
    var 地支數 = 地支字轉值(地支);

    switch (天干) {
        case "甲":
            開始地支 = 地支字轉值("亥");
            順逆 = 1;
            滾動數 = ((地支數 - 開始地支) >= 0) ? 地支數 - 開始地支 : 地支數 - 開始地支 + 12;
            return 地支滾動(1, 順逆 * 滾動數);
        case "乙":
            開始地支 = 地支字轉值("午");
            順逆 = -1;
            滾動數 = ((地支數 - 開始地支) >= 0) ? 地支數 - 開始地支 : 地支數 - 開始地支 + 12;
            return 地支滾動(1, 順逆 * 滾動數);
        case "丙":
            開始地支 = 地支字轉值("寅");
            順逆 = 1;
            滾動數 = ((地支數 - 開始地支) >= 0) ? 地支數 - 開始地支 : 地支數 - 開始地支 + 12;
            return 地支滾動(1, 順逆 * 滾動數);
        case "丁":
            開始地支 = 地支字轉值("酉");
            順逆 = -1;
            滾動數 = ((地支數 - 開始地支) >= 0) ? 地支數 - 開始地支 : 地支數 - 開始地支 + 12;
            return 地支滾動(1, 順逆 * 滾動數);
        case "戊":
            開始地支 = 地支字轉值("寅");
            順逆 = 1;
            滾動數 = ((地支數 - 開始地支) >= 0) ? 地支數 - 開始地支 : 地支數 - 開始地支 + 12;
            return 地支滾動(1, 順逆 * 滾動數);
        case "己":
            開始地支 = 地支字轉值("酉");
            順逆 = -1;
            滾動數 = ((地支數 - 開始地支) >= 0) ? 地支數 - 開始地支 : 地支數 - 開始地支 + 12;
            return 地支滾動(1, 順逆 * 滾動數);
        case "庚":
            開始地支 = 地支字轉值("巳");
            順逆 = 1;
            滾動數 = ((地支數 - 開始地支) >= 0) ? 地支數 - 開始地支 : 地支數 - 開始地支 + 12;
            return 地支滾動(1, 順逆 * 滾動數);
        case "辛":
            開始地支 = 地支字轉值("子");
            順逆 = -1;
            滾動數 = ((地支數 - 開始地支) >= 0) ? 地支數 - 開始地支 : 地支數 - 開始地支 + 12;
            return 地支滾動(1, 順逆 * 滾動數);
        case "壬":
            開始地支 = 地支字轉值("申");
            順逆 = 1;
            滾動數 = ((地支數 - 開始地支) >= 0) ? 地支數 - 開始地支 : 地支數 - 開始地支 + 12;
            return 地支滾動(1, 順逆 * 滾動數);
        case "癸":
            開始地支 = 地支字轉值("卯");
            順逆 = -1;
            滾動數 = ((地支數 - 開始地支) >= 0) ? 地支數 - 開始地支 : 地支數 - 開始地支 + 12;
            return 地支滾動(1, 順逆 * 滾動數);
        default:
            alert(天干+": 十二運星 的天干支輸入錯誤");
            return "";
    }
}  // end function 十二星運


function 十二星運數轉字(運星數) {
    switch (運星數) {
        case 0:
            return "養";
        case 1:
            return "長生";
        case 2:
            return "沐浴";
        case 3:
            return "冠帶";
        case 4:
            return "臨官";
        case 5:
            return "帝旺";
        case 6:
            return "衰";
        case 7:
            return "病";
        case 8:
            return "死";
        case 9:
            return "墓";
        case 10:
            return "絕";
        case 11:
            return "胎";
        default:
            alert(運星數 + "：十二運星數轉字 錯誤");
            return "";
    }
}  // end function 十二星運數轉字


function 尋四柱運星(四柱組合, 運星, 命盤){
    //四柱組合: 四柱組合字串，比方：0123,12,23, 213.......
    //運星：該柱的運星，"死"
    var 四柱矩陣 = 四柱組合.split(",");
    for(var j=0; j<四柱矩陣.length; j++){
        var 各柱 = 四柱矩陣[j].split("");
        for(var i=0; i<各柱.length; i++){
            //alert(四柱組合+" / " + 各柱[i] + " / " + 命盤.分析.四柱.四柱數據[各柱[i]].運星);
            if (命盤.分析.四柱.四柱數據[各柱[i]].運星 == 運星) return true;
        }      
    }

    return false;
}  // end function 尋四柱運星


//     *********************************************************************************
//                                         九宮模塊
//     *********************************************************************************




//     *********************************************************************************
//                                         地支模塊
//     *********************************************************************************

function 時間轉換地支(輸入時間, 選項) {
    var 地支時間, 地支時間數;
    var TimeHolder = 輸入時間.split(":")
    var TimeValue = Number(TimeHolder[0]) + Number(TimeHolder[1]) / 60 + Number(TimeHolder[2]) / 3600;
    //alert(輸入時間+", " + TimeValue);
    switch (true) {
        case ((TimeValue >= 0) && (TimeValue < 1)): 地支時間 = "早子"; 地支時間數 = 1; break;
        case ((TimeValue >= 1) && (TimeValue < 3)): 地支時間 = "丑"; 地支時間數 = 2; break;
        case ((TimeValue >= 3) && (TimeValue < 5)): 地支時間 = "寅"; 地支時間數 = 3; break;
        case ((TimeValue >= 5) && (TimeValue < 7)): 地支時間 = "卯"; 地支時間數 = 4; break;
        case ((TimeValue >= 7) && (TimeValue < 9)): 地支時間 = "辰"; 地支時間數 = 5; break;
        case ((TimeValue >= 9) && (TimeValue < 11)): 地支時間 = "巳"; 地支時間數 = 6; break;
        case ((TimeValue >= 11) && (TimeValue < 13)): 地支時間 = "午"; 地支時間數 = 7; break;
        case ((TimeValue >= 13) && (TimeValue < 15)): 地支時間 = "未"; 地支時間數 = 8; break;
        case ((TimeValue >= 15) && (TimeValue < 17)): 地支時間 = "申"; 地支時間數 = 9; break;
        case ((TimeValue >= 17) && (TimeValue < 19)): 地支時間 = "酉"; 地支時間數 = 10; break;
        case ((TimeValue >= 19) && (TimeValue < 21)): 地支時間 = "戌"; 地支時間數 = 11; break;
        case ((TimeValue >= 21) && (TimeValue < 23)): 地支時間 = "亥"; 地支時間數 = 0; break;
        case ((TimeValue >= 23) && (TimeValue < 24)): 地支時間 = "夜子"; 地支時間數 = 1; break;
    }

    switch (選項) {
        case "地支": case 1: //子、丑、寅、卯 ......
            return 地支時間;
        case "時數": case 2: // 1, 2, 3, ....0
            return 地支時間數;
    }
}  // end function 時間轉換地支


function 地支滾動(地支數, 滾動數) {
    var 滾動步 = 滾動數 % 12;
    
    if (滾動步 < 0) 滾動步 += 12;
    
    return (Number(地支數) + Number(滾動步)) % 12;
} //end function 地支滾動


function 十二滾動(輸入數, 滾動數) {
    // 從 1 到 12 滾動
    var 滾動步 = 滾動數 % 12;
    
    if (滾動步 < 0) 滾動步 += 12;

    var result = (Number(輸入數) + Number(滾動步)) % 13;
    if(result==0) result =1;
    
    return result;
} //end function 十二滾動


function 地支字轉換時數(地支) {
    //回發時數
    switch (地支) {
        case "亥": return 22;
        case "子": return 0;
        case "早子": return 0;
        case "夜子": return 23;
        case "丑": return 2;
        case "寅": return 4;
        case "卯": return 6;
        case "辰": return 8;
        case "巳": return 10;
        case "午": return 12;
        case "未": return 14;
        case "申": return 16;
        case "酉": return 18;
        case "戌": return 20;
        default:
            alert(地支+"：地支字轉換時數 錯誤");
            break;
    }
}  // end function 地支字轉換時數


function 地支字轉值(地支) {
	if(地支=="-" || 地支=="x" || 地支=="X" || 地支=="o" || 地支=="O" || 地支==="") return "";
    switch (地支) {
        case "亥": return 0;
        case "子": return 1;
        case "丑": return 2;
        case "寅": return 3;
        case "卯": return 4;
        case "辰": return 5;
        case "巳": return 6;
        case "午": return 7;
        case "未": return 8;
        case "申": return 9;
        case "酉": return 10;
        case "戌": return 11;
        default:
            alert(地支+"：地支字轉值 錯誤");
            break;
    }
}  // end function 地支字轉值


function 地支字數轉換(地支){
	if(地支=="-" || 地支=="x" || 地支=="X" || 地支=="o" || 地支=="O" || 地支==="") return "";
    var 輸入數字=(isNaN(地支))? "字" : "數";  //輸入的是數還是字

    switch(輸入數字){
        case "字":
            switch(地支){
                case "亥": return 0;
                case "子": return 1;
                case "丑": return 2;
                case "寅": return 3;
                case "卯": return 4;
                case "辰": return 5;
                case "巳": return 6;
                case "午": return 7;
                case "未": return 8;
                case "申": return 9;
                case "酉": return 10;
                case "戌": return 11;
                case "0": return "亥";
                case "1": return "子";
                case "2": return "丑";
                case "3": return "寅";
                case "4": return "卯";
                case "5": return "辰";
                case "6": return "巳";
                case "7": return "午";
                case "8": return "未";
                case "9": return "申";
                case "10": return "酉";
                case "11": return "戌";
                default:
                    alert(地支+"：地支字轉值 錯誤");
                    return "";
            }
        break;
        
        case "數":
            switch(地支){
                case 0: return "亥";
                case 1: return "子";
                case 2: return "丑";
                case 3: return "寅";
                case 4: return "卯";
                case 5: return "辰";
                case 6: return "巳";
                case 7: return "午";
                case 8: return "未";
                case 9: return "申";
                case 10: return "酉";
                case 11: return "戌";
                default:
                    alert(地支+"：地支數轉字 錯誤");
                    return "";
            }
    }  // end switch(輸入數字)
}  // end function 地支字數轉換


function 地支字轉生肖(地支) {
	if(地支=="-" || 地支=="x" || 地支=="X" || 地支=="o" || 地支=="O" || 地支==="") return "";
	switch (地支) {
        case "亥": return "豬";
        case "子": return "鼠";
        case "丑": return "牛";
        case "寅": return "虎";
        case "卯": return "兔";
        case "辰": return "龍";
        case "巳": return "蛇";
        case "午": return "馬";
        case "未": return "羊";
        case "申": return "猴";
        case "酉": return "雞";
        case "戌": return "狗";
        default:
            alert(地支+"：地支字轉生肖 錯誤");
            break;
    }
} //end function 地支字轉生肖


function 地支數轉字(地支數) {
	if(地支數=="-" || 地支數=="x" || 地支數=="X" || 地支數=="o" || 地支數=="O" || 地支數==="" || 地支數==-1) return "";
    switch (地支數) {
        case 0: return "亥";
        case 1: return "子";
        case 2: return "丑";
        case 3: return "寅";
        case 4: return "卯";
        case 5: return "辰";
        case 6: return "巳";
        case 7: return "午";
        case 8: return "未";
        case 9: return "申";
        case 10: return "酉";
        case 11: return "戌";
        default:
            alert(地支數+"：地支數轉字 錯誤");
            break;
    }
}  // end function 地支數轉字


function 地支六合冲害破(地支, 選項) {
    var 六合支, 冲支, 害支, 破支;
    if(選項 === undefined) 選項 = "元件";
    
    switch (地支) {
        case "亥":
            六合支 = "寅";
            冲支 = "巳";
            害支 = "申";
            破支 = "";
            break;
        case "子":
            六合支 = "丑";
            冲支 = "午";
            害支 = "未";
            破支 = "";
            break;
        case "丑":
            六合支 = "子";
            冲支 = "未";
            害支 = "午";
            破支 = "";
            break;
        case "寅":
            六合支 = "亥";
            冲支 = "申";
            害支 = "巳";
            破支 = "";
            break;
        case "卯":
            六合支 = "戌";
            冲支 = "酉";
            害支 = "辰";
            破支 = "";
            break;
        case "辰":
            六合支 = "酉";
            冲支 = "戌";
            害支 = "卯";
            破支 = "";
            break;
        case "巳":
            六合支 = "申";
            冲支 = "亥";
            害支 = "寅";
            破支 = "";
            break;
        case "午":
            六合支 = "未";
            冲支 = "子";
            害支 = "丑";
            破支 = "";
            break;
        case "未":
            六合支 = "午";
            冲支 = "丑";
            害支 = "子";
            破支 = "";
            break;
        case "申":
            六合支 = "巳";
            冲支 = "寅";
            害支 = "亥";
            破支 = "";
            break;
        case "酉":
            六合支 = "辰";
            冲支 = "卯";
            害支 = "戌";
            破支 = "";
            break;
        case "戌":
            六合支 = "卯";
            冲支 = "辰";
            害支 = "酉";
            破支 = "";
            break;
    }

    var 地支六合冲害破相應地支 = {
        "六合支": 六合支,
        "冲支": 冲支,
        "害支": 害支,
        "破支": 破支
    };
    
    //地支六合冲害破相應地支.六合支 = 六合支;
    //地支六合冲害破相應地支.冲支 = 冲支;
    //地支六合冲害破相應地支.害支 = 害支;
    //地支六合冲害破相應地支.破支 = 破支;
    
    switch (選項) {
        case 1: case "六合":
            return 六合支;
        case 2:
            return "";
        case 3: case "冲":
            return 冲支;
        case 4: case "害":
            return 害支;
        case 5: case "破":
            return 破支;
        case "元件":
            return 地支六合冲害破相應地支;
        default:
            //alert(選項 + "：地支六合冲害破 function 輸入的選項錯誤！！");
            return "";
    }  // end switch (選項)
}  // end function 地支六合冲害破


function 地支三合(地支1, 地支2){
    var 地支對 = 地支1+地支2;

    switch(地支對){
        //寅午戌
        case "寅午": case "午寅":
            return "火";
        case "午戌": case "戌午":
            return "火";
        //巳酉丑
        case "巳酉": case "酉巳":
            return "金";
        case "酉丑": case "丑酉":
            return "金";
        //申子辰
        case "申子": case "子申":
            return "水";
        case "子辰": case "辰子":
            return "水";
        //亥卯未
        case "亥卯": case "卯亥":
            return "木";
        case "卯未": case "未卯":
            return "木";
        default:
            //alert(地支對 + "：地支三合 function 輸入的地支對錯誤！！");
            return "";
    }
}  // end function 地支三合


function 地支六合(地支對){
    //var 地支對 = 地支1+地支2;

    switch(地支對){
        case "子丑": case "丑子":
            return "合化土,子丑";  //東震用化火
        case "寅亥": case "亥寅":
            return "六合木,寅亥";
        case "卯戌": case "戌卯":
            return "六合火,卯戌";
        case "辰酉": case "酉辰":
            return "六合金,辰酉";
        case "巳申": case "申巳":
            return "六合水,巳申"; 
        case "午未": case "未午":
            return "六合火,午未";
        default:
            //alert(地支對 + "：地支六合 function 輸入的地支對錯誤！！");
            return "";
    } // end switch
} // end function 地支六合


function 地支半合(地支對, 命盤){
    //var 地支對 = 地支1+地支2;
    var 天干矩陣 = [命盤.年干.天干, 命盤.月干.天干, 命盤.日干.天干, 命盤.時干.天干];
    var 地支矩陣 = [命盤.年支.地支, 命盤.月支.地支, 命盤.日支.地支, 命盤.時支.地支];

    switch(地支對){
        //參考：子平真詮 p135
        case "寅午": case "午寅":
            return "半合火,"+地支對;
        case "午戌": case "戌午":
            return "半合火,"+地支對;
        case "寅戌":case "戌寅":
            if ((_.indexOf(天干矩陣, "丙") >= 0) || (_.indexOf(天干矩陣, "丁") >= 0) || (_.indexOf(地支矩陣, "巳") >= 0)) return "半合火," + 地支對 + ",《子平真詮》：寅戌得丙、丁、巳可成半合火。"; else return "";
            break;
        //巳酉丑
        case "巳酉": case "酉巳":
            return "半合金,"+地支對;
        case "酉丑": case "丑酉":
            return "半合金,"+地支對;
        case "巳丑": case "丑巳":
            if((_.indexOf(天干矩陣, "庚") >= 0) || (_.indexOf(天干矩陣, "辛") >= 0)) return "半合金,"+地支對+",《子平真詮》：巳丑得庚、辛可成半合金。"; else return "";
            break;
        //申子辰
        case "申子": case "子申":
            return "半合水,"+地支對;
        case "子辰": case "辰子":
            return "半合水,"+地支對;
        case "申辰": case "辰申":
            if((_.indexOf(天干矩陣, "壬") >= 0) || (_.indexOf(天干矩陣, "癸") >= 0) || (_.indexOf(地支矩陣, "亥") >= 0)) return "半合水,"+地支對+",《子平真詮》：申辰得壬、癸、亥可成半合水。"; else return "";
            break;

        //亥卯未
        case "亥卯": case "卯亥":
            return "半合木,"+地支對;
        case "卯未": case "未卯":
            return "半合木,"+地支對;
        case "亥未": case "未亥":
            if((_.indexOf(天干矩陣, "甲") >= 0) || (_.indexOf(天干矩陣, "乙") >= 0)) return "半合木,"+地支對+",《子平真詮》：亥未得甲、乙可成半合木。"; else return "";
            break;
        default:
            //alert(地支對 + "：地支半合 function 輸入的地支對錯誤！！");
            return "";
    }
}  // end function 地支半合


function 地支暗合(地支對) {
    //選項：合干、五行
    var 暗合干, 暗合五行;
    //var 地支對 = 地支1+地支2;

    switch (地支對) {     
        case "子巳": case "巳子":
            //通祿合
            return "暗合火,戊癸,"+地支對+"藏干"+"戊癸通祿暗合";
            //暗合干="戊癸";
            //暗合五行="火";
            break;
        case "寅丑": case "丑寅":
            //通合： 寅中的甲丙戊與丑中的己辛癸暗中相合
            return "暗合土,甲己,"+地支對+"藏干"+"甲己通暗合";
            //暗合干="甲己";
            //暗合五行="土";
            break;
        //case "寅午": case "午寅": //半合，故不再論暗合
            //通祿合，寅中的甲與午中的己暗中相合
            //return "暗合土,甲己,"+地支對+"藏干"+"甲己通祿暗合";
            //暗合干="甲己";
            //暗合五行="土";
            break;
        case "卯申": case "卯申":
            //通祿合，乙庚合，卯中的乙與申中的庚暗中相合
            return "暗合金,乙庚,"+地支對+"藏干"+"乙庚通祿暗合";
            //暗合干="乙庚";
            //暗合五行="金";
            break;
        case "巳酉": case "酉巳":
            //通祿合
            return "暗合水,丙辛,"+地支對+"藏干"+"丙辛通祿暗合";
            //暗合干="丙辛";
            //暗合五行="水";
            break;
        case "午亥": case "亥午":
            //通合： 亥中的壬甲與午中的丁己暗中相合
            return "暗合木,丁壬,"+地支對+"藏干"+"丁壬通暗合";
            //暗合干="丁壬";
            //暗合五行="木";
            break;
        /*
        case "子辰": case "辰子":
            //** 一般不論暗合
            return 地支對+"暗合火*,戊癸,"+地支對+"藏干"+"戊癸合*";
            break;
        case "子戌": case "戌子":
            //** 一般不論暗合
            return 地支對+"暗合火*,戊癸,"+地支對+"藏干"+"戊癸合*";
            break;
        case "巳辰": case "辰巳":
            //** 一般不論暗合
            return 地支對+"暗合火*,戊癸,"+地支對+"藏干"+"戊癸合*";
            break;
        case "寅未": case "未寅":
            //** 一般不論暗合
            return 地支對+"暗合土*,甲己,"+地支對+"藏干"+"甲己合*";
            break;
            */
        default:
            //alert(地支對 + "：地支暗合 function 輸入的地支對錯誤！！");
            return "";
            //暗合干="";
            //暗合五行="";
    }
}  // end function 地支暗合


function 地支半六暗合(地支1, 地支2, 暗合選項){
    //暗合選項="", 就不考慮暗合
    var 地支對 = 地支1+地支2;

    switch(地支對){
        // *********** 半合 ***********
        //寅午戌
        case "寅午": case "午寅":
            return "半合";
        case "午戌": case "戌午":
            return "半合";
        //巳酉丑
        case "巳酉": case "酉巳":
            return "半合";
        case "酉丑": case "丑酉":
            return "半合";
        //申子辰
        case "申子": case "子申":
            return "半合";
        case "子辰": case "辰子":
            return "半合";
        //亥卯未
        case "亥卯": case "卯亥":
            return "半合";
        case "卯未": case "未卯":
            return "半合";
        // *********** 六合 ***********
        case "子丑": case "丑子":
            return "六合";
        case "寅亥": case "亥寅":
            return "六合";
        case "卯戌": case "戌卯":
            return "六合";
        case "辰酉": case "酉辰":
            return "六合";
        case "巳申": case "申巳":
            return "六合"; 
        case "午未": case "未午":
            return "六合";
        //*********** 暗合 ***********
        case "子巳":case "巳子":
            //通祿合
            if (暗合選項 != "" || typeof (暗合選項) != "undefined") return "暗合"; else return "";
        case "寅丑": case "丑寅":
            //通合： 寅中的甲丙戊與丑中的己辛癸暗中相合
            if (暗合選項 != "" || typeof (暗合選項) != "undefined") return "暗合"; else return "";
        case "寅午": case "午寅":
            //通祿合，寅中的甲與午中的己暗中相合
            if (暗合選項 != "" || typeof (暗合選項) != "undefined") return "暗合"; else return "";
        case "卯申": case "卯申":
            //通祿合，乙庚合，卯中的乙與申中的庚暗中相合
            if (暗合選項 != "" || typeof (暗合選項) != "undefined") return "暗合"; else return "";
        case "巳酉": case "酉巳":
            //通祿合
            if (暗合選項 != "" || typeof (暗合選項) != "undefined") return "暗合"; else return "";
        case "午亥": case "亥午":
            //通合： 亥中的壬甲與午中的丁己暗中相合
            if (暗合選項 != "" || typeof (暗合選項) != "undefined") return "暗合"; else return "";
        default:
            //alert(地支對 + "：地支半六暗合 function 輸入的地支對錯誤！！");
            return "";
    }
} // end function 地支半六暗合



function 地支相害(地支對){
    //var 地支對 = 地支1+地支2;

    switch(地支對){
        case "子未": case "未子":
            return "害,子未";
        case "丑午": case "午丑":
            return "害,丑午";
        case "寅巳": case "巳寅":
            return "害,寅巳";
        case "卯辰": case "辰卯":
            return "害,卯辰";
        case "申亥": case "亥申":
            return "害,申亥"; 
        case "酉戌": case "戌酉":
            return "害,酉戌";
        default:
            //alert(地支對 + "：地支相害 function 輸入的地支對錯誤！！");
            return "";
    }
}  // end function 地支相害


function 地支相冲(地支對){
    //var 地支對 = 地支1+地支2;
    var 地支冲="";
    
    switch(地支對){
        case "子午": case "午子":
            return "冲,子午,四花冲";
            break;
        case "丑未": case "未丑":
            return "冲,丑未,四庫冲";
            break;
        case "寅申": case "申寅":
            return "冲,寅申,四馬冲";
            break;
        case "卯酉": case "酉卯":
            return "冲,卯酉,四花冲";
            break;
        case "辰戌": case "戌辰":
            return "冲,辰戌,四庫冲"; 
            break;
        case "巳亥": case "亥巳":
            return "冲,巳亥,四馬冲";
            break;
        default:
            return "";
            break;
    }
}  // end function 地支相冲



function 地支屬性(地支, 選項) {
	if(地支=="-" || 地支=="x" || 地支=="X" || 地支=="o" || 地支=="O" || 地支==="") return "";
    var 地支數 = 地支字轉值(地支);
    var 地支 = [
        { "地支": "亥", "係數": 0, "陰陽": "陰", "拼音": "hài", "五行": "水", "生肖": "豬", "藏干": "壬甲", "藏干比例": "0.7:0.3", "庫馬花": "馬", "四地": "長生地", "月建": "十", "四季": "冬", "節氣": "立冬/小雪", "星座": "雙魚座", "一掌經星曜": "天壽星", "方向": "西北偏北", "角度": "330°", "時間": "21:00:00-22:59:59", "Element": "Water", "ElementYinYang": "Yin Water", "ChineseZodiac": "Pig"},
        { "地支": "子", "係數": 1, "陰陽": "陽", "拼音": "zi", "五行": "水", "生肖": "鼠", "藏干": "癸", "藏干比例": "1", "庫馬花": "花", "四地": "四正地", "月建": "十一", "四季": "冬", "節氣": "大雪/冬至", "星座": "水瓶座", "一掌經星曜": "天貴星", "方向": "正北", "角度": "0°", "時間": "23:00:00-00:59:59", "Element": "Water", "ElementYinYang": "Yang Water", "ChineseZodiac": "Rat"},
        { "地支": "丑", "係數": 2, "陰陽": "陰", "拼音": "chǒu", "五行": "土", "生肖": "牛", "藏干": "己癸辛", "藏干比例": "0.5:0.3:0.2", "庫馬花": "庫", "四地": "四墓地", "月建": "十二", "四季": "冬", "節氣": "小寒/大寒", "星座": "山羊座", "一掌經星曜": "天厄星", "方向": "東北偏北", "角度": "30°", "時間": "01:00:00-02:59:59", "Element": "Earth", "ElementYinYang": "Yin Earth", "ChineseZodiac": "Ox"},
        { "地支": "寅", "係數": 3, "陰陽": "陽", "拼音": "yín", "五行": "木", "生肖": "虎", "藏干": "甲丙戊", "藏干比例": "0.7:0.2:0.1", "庫馬花": "馬", "四地": "長生地", "月建": "一", "四季": "春", "節氣": "立春/雨水", "星座": "射手座", "一掌經星曜": "天權星", "方向": "東北偏東", "角度": "60°", "時間": "03:00:00-04:59:59", "Element": "Wood", "ElementYinYang": "Yang Wood", "ChineseZodiac": "Tiger"},
        { "地支": "卯", "係數": 4, "陰陽": "陰", "拼音": "mǎo", "五行": "木", "生肖": "兔", "藏干": "乙", "藏干比例": "1", "庫馬花": "花", "四地": "四正地", "月建": "二", "四季": "春", "節氣": "驚蟄/春分", "星座": "天蝎座", "一掌經星曜": "天破星", "方向": "正東", "角度": "90°", "時間": "05:00:00-06:59:59", "Element": "Wood", "ElementYinYang": "Yin Wood", "ChineseZodiac": "Rabbit"},
        { "地支": "辰", "係數": 5, "陰陽": "陽", "拼音": "chén", "五行": "土", "生肖": "龍", "藏干": "戊乙癸", "藏干比例": "0.5:0.3:0.2", "庫馬花": "庫", "四地": "四墓地", "月建": "三", "四季": "春", "節氣": "清明/谷雨", "星座": "天秤座", "一掌經星曜": "天奸星", "方向": "東南偏東", "角度": "120°", "時間": "07:00:00-08:59:59", "Element": "Earth", "ElementYinYang": "Yang Earth", "ChineseZodiac": "Dragon"},
        { "地支": "巳", "係數": 6, "陰陽": "陰", "拼音": "sì", "五行": "火", "生肖": "蛇", "藏干": "丙戊庚", "藏干比例": "0.7:0.2:0.1", "庫馬花": "馬", "四地": "長生地", "月建": "四", "四季": "夏", "節氣": "力夏/小滿", "星座": "處女座", "一掌經星曜": "天文星", "方向": "東南偏南", "角度": "150°", "時間": "09:00:00-10:59:59", "Element": "Fire", "ElementYinYang": "Yin Fire", "ChineseZodiac": "Snake"},
        { "地支": "午", "係數": 7, "陰陽": "陽", "拼音": "wǔ", "五行": "火", "生肖": "馬", "藏干": "丁己", "藏干比例": "0.7:0.3", "庫馬花": "花", "四地": "四正地", "月建": "五", "四季": "夏", "節氣": "芒種/夏至", "星座": "獅子座", "一掌經星曜": "天福星", "方向": "正南", "角度": "180°", "時間": "11:00:00-12:59:59", "Element": "Fire", "ElementYinYang": "Yang Fire", "ChineseZodiac": "Horse"},
        { "地支": "未", "係數": 8, "陰陽": "陰", "拼音": "wèi", "五行": "土", "生肖": "羊", "藏干": "己丁乙", "藏干比例": "0.5:0.3:0.2", "庫馬花": "庫", "四地": "四墓地", "月建": "六", "四季": "夏", "節氣": "小暑/大暑", "星座": "巨蟹座", "一掌經星曜": "天驛星", "方向": "西南偏南", "角度": "210°", "時間": "13:00:00-14:59:59", "Element": "Earth", "ElementYinYang": "Yin Earth", "ChineseZodiac": "Goat"},
        { "地支": "申", "係數": 9, "陰陽": "陽", "拼音": "shēn", "五行": "金", "生肖": "猴", "藏干": "庚壬戊", "藏干比例": "0.7:0.2:0.1", "庫馬花": "馬", "四地": "長生地", "月建": "七", "四季": "秋", "節氣": "立秋/處暑", "星座": "雙子座", "一掌經星曜": "天孤星", "方向": "西南偏西", "角度": "240°", "時間": "15:00:00-16:59:59", "Element": "Metal", "ElementYinYang": "Yang Metal", "ChineseZodiac": "Monkey"},
        { "地支": "酉", "係數": 10, "陰陽": "陰", "拼音": "yǒu", "五行": "金", "生肖": "雞", "藏干": "辛", "藏干比例": "1", "庫馬花": "花", "四地": "四正地", "月建": "八", "四季": "秋", "節氣": "白露/秋分", "星座": "金牛座", "一掌經星曜": "天刃星", "方向": "正西", "角度": "270°", "時間": "17:00:00-18:59:59", "Element": "Metal", "ElementYinYang": "Yin Metal", "ChineseZodiac": "Rooster"},
        { "地支": "戌", "係數": 11, "陰陽": "陽", "拼音": "xū", "五行": "土", "生肖": "狗", "藏干": "戊辛丁", "藏干比例": "0.5:0.3:0.2", "庫馬花": "庫", "四地": "四墓地", "月建": "九", "四季": "秋", "節氣": "寒露/霜降", "星座": "牡羊座", "一掌經星曜": "天藝星", "方向": "西北偏西", "角度": "300°", "時間": "19:00:00-20:59:59", "Element": "Earth", "ElementYinYang": "Yang Earth", "ChineseZodiac": "Dog"}
    ];

    switch (選項) {
        case 1: case "地支":
            return 地支[地支數].地支;
        case 2: case "係數":
            return 地支[地支數].係數;
        case 3: case "陰陽":
            return 地支[地支數].陰陽;
        case 4: case "生肖":
            return 地支[地支數].生肖;
        case 5: case "五行":
            return 地支[地支數].五行;
        case 6: case "藏干":
            return 地支[地支數].藏干;
        case 7: case "庫馬花":
            return 地支[地支數].庫馬花;
        case 8: case "四地":
            return 地支[地支數].四地;
        case 9: case "月建":
            return 地支[地支數].月建;
        case 10: case "拼音":
            return 地支[地支數].拼音;
        case 11: case "四季":
            return 地支[地支數].四季;
        case 12: case "節氣":
            return 地支[地支數].節氣;
        case 13: case "方向":
            return 地支[地支數].方向;
        case 14: case "角度":
            return 地支[地支數].角度;
        case 15: case "時間":
            return 地支[地支數].時間;
        case 16: case "Element":
            return 地支[地支數].Element;
        case 20: case "ElementYinYang":
            return 地支[地支數].ElementYinYang;
        case 21: case "ChineseZodiac":
            return 地支[地支數].ChineseZodiac;
        default:
            return 地支[地支數];
    }  //end switch
} // end function 地支屬性


function 地支特性(地支, 選項) {
    var 地支數 = 地支字轉值(地支);
    var 地支矩陣 = [
        { "地支": "亥", "係數": 0, "五行": "水", "藏干": "壬甲", "藏干比例": "0.7:0.3", "庫馬花": "馬", "星座": "雙魚", "提綱分論": "「登明之位水源深，雨雪生寒值六陰；須待勝光方用土，不逢傳送浪多金。五湖歸聚原成象，三合羈留正有心；欲識坤乾和暖處，即從艮震巽離尋。」<br>十月亥水，為雨雪生寒之時，土至此而不暖，金至此而生寒，其象若五湖之歸聚，其用在三合之有心。欲識其坤乾和暖之方，應從艮震離巽之配合端詳之也。", "命宮含義": "命宮在亥宮的人，一般都是屬於情感濃厚，神經敏銳，待人接物很熱情，看似一個好人，但要考慮本身能力，當能力不足時，不要輕舉妄動，但有時又會逾越理智，平時無視個人財產，願與親友共享。", "一掌經星曜": "天壽星", "一掌經含義": "《天壽星》克己助人★一生衣祿，末限充足有餘。不動先懶，做事先難后易。神經敏銳，行為熱情，重義輕財，多費力勞心。性如大海之心，心性和諧，能夠克己助人，為人有情義，熱忱有禮。大體來說，這是一個比較操勞型的人。", "個性": "生於亥月，溫順，腳踏實地，平凡，長壽，安定，明理，好辯，偏見，固執，不講理，不易溝通，重享受，善利用別人。", "臟腑": "三焦", "臟腑2": "三焦、易扭到", "身弱疾病": "身弱亥月生人，所得之疾患，往往會演變成連鎖性之疾病，諸如由尿道、腎臟及排泄機能而影響到偏頭痛、頭昏腦脹等病症，平時宜多注意保養。"},
        { "地支": "子", "係數": 1, "五行": "水", "藏干": "癸", "藏干比例": "1", "庫馬花": "花", "星座": "水瓶", "提綱分論": "十二支體象詩云：「月支子水占魁名，溪澗汪洋不盡情，天道陽回行土旺，人間水湲寄金生，若逢午破應無定，縱卯相刑還有情，柱內申辰來合局，即成江海發濤聲。」<br>十一月子水，其性陰寒。子藏癸水得祿，書云：「五陰皆陰癸為至。」故子月為陰寒之至也。然陰至而陽生，萬物由此而漸露生機，水盛宜土，氣寒喜火，此乃調候之意也。", "命宮含義": "命宮在子宮的人，一般都是屬於意志堅強，而不論對人對事，不記恨，寬宏大量。處事態度愉快，文雅動人，不會消極厭世且有念舊之情，屬於夫唱婦隨，恩愛恆久型，聰明篤實，有過人之處，有時會標新立異，主觀過強，發言不當，對於事務判斷有獨特看法。", "一掌經星曜": "天貴星", "一掌經含義": "《天貴星》志向高遠★初限辛苦，中年有四方財，老運平吉有福。為人文雅，志氣非凡，心性達觀，高尚文雅，主觀較強，立性堅定，進取努力。與人多有長遠之情感，為人多情，朋友相交情深有持久之厚愛，可以不存積怨，坦誠，有度量。身防暗疾。", "個性": "生於子月，不落人後，先做再說，喜歡鑽漏洞，三分鐘熱度，極端、脾氣不好、拘謹、自私、保護自己、生存能力好，思想靈活，很會變卦。", "臟腑": "膽", "臟腑2": "膽、泌尿系统", "身弱疾病": "身弱子月生人，易罹患生殖系統之疾病，故對此方面要節制，又易患膀胱及尿道疾病或聽覺之故障。"},
        { "地支": "丑", "係數": 2, "五行": "土", "藏干": "己癸辛", "藏干比例": "0.5:0.3:0.2", "庫馬花": "庫", "星座": "摩羯", "提綱分論": "「隆冬建丑怯冰霜、誰識天時轉二陽，暖土誠能生萬物，寒金難道祇深藏，刑沖戍未非無用，類聚雞蛇信有方，若在日時多水木，直須行入巽離鄉。」<br>十二月丑土，為水之余氣，金之墓庫，蓋以土、金、水循序相生之意，寒威猶在之時也。丑戌未三刑，宜細論其全局之配合而分喜忌。苟巳酉丑三合，則以金局論。柱多水木，大喜東南。", "命宮含義": "命宮在丑宮的人，一般都是屬於舉止靜且幽默，頗有冷面笑匠之天份，志向蓬勃遠大，喜歡立功，也會不計本身利益。有時會以教訓之態度待人，也許可博得信任，但可能會因鋒芒過露，氣燄過張，容易遭受怨言及構陷，而阻礙事業之進展。", "一掌經星曜": "天厄星", "一掌經含義": "《天厄星》先難后易★此乃勞碌之命，做事大都先難後易。離祖成功，早年辛苦，晚年吉祥。小人常犯，志趣遠大，性喜立功，為人舉止文雅、靜默。一生要防處事待人因為鋒芒太露，乃致中挫之憾。", "個性": "生於丑月，穩重，以退為進，不走歪路不轉彎，負責任，腳踏實地，任勞任怨，固執、堅持、節儉、勤勞，追根究底，翻舊賬，不服輸，做事有頭有尾 。", "臟腑": "肝", "臟腑2": "肝、易扭到", "身弱疾病": "身弱丑月生人，易患胸部之疾病，且要注意肋膜，又易有胃脾虛弱之現象，而且腳部亦易生支障。"},
        { "地支": "寅", "係數": 3, "五行": "木", "藏干": "甲丙戊", "藏干比例": "0.7:0.2:0.1", "庫馬花": "馬", "星座": "射手", "提綱分論": "「艮宮之木建於春，氣象三陽火在寅；志合蛇猴三貴客，類同卯未一家人。超凡入聖惟逢午，破祿傷提獨慮申；四柱火多嫌火地，從來燥木不南奔。」<br>正月寅木，亦丙火長生之地也。三陽開泰，大地回春，寅巳申亦合亦刑，視其利害而決斷，合午戌而火而清純，忌申之沖，為鬥爭之象。苟逢火的木盛，大忌南。", "命宮含義": "命宮在寅宮的人，一般都是屬於性情活潑，舉止談吐會令人有深刻之印象，尤其在童年時，已可見稟性剛毅的個性，目光敏銳，富衝刺力，但喜抄捷徑以達目的。無論任何事如不能與人共享其成果，有可能變孤單，要謙虛待人，才不失為仁者之風度。一生交友甚廣，人緣不錯。", "一掌經星曜": "天權星", "一掌經含義": "《天權星》大器晚成★中年有權柄，是可造大器之人才。利官近貴，能招四方財。胸有志向，生性聰敏，有才能，重性剛毅，富衝動力，富行動力，做事仔細小心，人緣多佳，為人機靈，精神活潑，談吐順暢。", "個性": "生於寅月，有氣魄，武斷，不喜龜毛拖拉，具攻擊性但會壓抑，喜歡當老大，脾氣不佳，閒不住。", "臟腑": "肺", "臟腑2": "肺、大腿酸痛", "身弱疾病": "身弱寅月生人，易傷膽臟或關節、筋脈及神經系統之慢性化疾病。"},
        { "地支": "卯", "係數": 4, "五行": "木", "藏干": "乙", "藏干比例": "1", "庫馬花": "花", "星座": "天蠍", "提綱分論": "「卯木獨華氣稟深，仲春難道不嫌金；庚金多見愁申酉，亥子重來忌癸壬。禍見六沖應落葉，喜逢三合便成林；若歸時日秋金重，更向西行患不禁。」<br>二月卯木，為乙木之祿，陰柔之象也。春卉時令猶寒，喜火而忌金水。卯酉逢沖，其勢危殆，喜亥卯未之三合，黨眾勢盛。金重更令西方運，弱不禁風矣。", "命宮含義": "命宮在卯宮的人，一般都是少年時體質較弱，青年期身體較強健，容易血氣方剛，神經敏銳，有時會因小事而動怒，易釀成爭端的行為。成年後，性格變為嚴謹。能克己自律，同時觀察力強，善惡分明，易吸引他人欣賞。", "一掌經星曜": "天破星", "一掌經含義": "《天破星》多情破耗★少年體弱，青年后較好，中限發高能榮。六親手足少助，獨立開花，是一個克勤克儉、自立更生之人。為人神經敏銳，易怒、易喜，觀察力敏銳，為人多情。心性慷慨，疏財大方；一生要防錢財有若蟲蛀洩漏。", "個性": "生於卯月，喜好和平，隨和，不會得罪人，淡泊名利，草根，宅男，無爭，有愛心，完美主義，善良，龜毛，愛乾淨，拘謹。", "臟腑": "大腸", "臟腑2": "大腸、胸悶", "身弱疾病": "身弱卯月生人，易患肝臟、顏面神經痛之筋脈性疾患及不眠症。或手指、腳指、膝蓋之關節性疾病。"},
        { "地支": "辰", "係數": 5, "五行": "土", "藏干": "戊乙癸", "藏干比例": "0.5:0.3:0.2", "庫馬花": "庫", "星座": "天秤", "提綱分論": "「辰當三月水泥濕，長養堪培萬物根；雖是甲衰乙餘氣，縱然壬墓癸還魂。直須一鎖能開庫，若遇戌沖即開門。水土重臨西北運，只愁厚土不能存。」<br>三月辰土，為壬水之庫，亦木之餘氣也。辰為濕潤之土，能滋生萬物。辰戌沖而開庫，苟戌多則辰自有沖損之虞焉。金水多則土虛，火土多則土健，胥視其配合而論焉。", "命宮含義": "命宮在辰宮的人，一般都是屬於性格溫和，儀表文雅，彬彬有禮的型，一生樂於為人排解爭端，凡事思慮周到，為從容中道之人，但往往熱忱過度，無暇自顧親人的感受，建議有時需量力而為。", "一掌經星曜": "天奸星", "一掌經含義": "《天奸星》事多反覆★技藝成功，有專技。做事常見反覆、緩慢，缺乏果斷力，一生多見勞碌；為人有禮，人緣多佳，性情溫和，舉止文雅，思緒周到；為人有機謀，多能、多巧。畢生注意脾、胃、腎之疾。", "個性": "生於辰月，極端，喜出風頭，渴望領導，喜當老大，腦筋靈活，較會設計，點子多，愛聽好話，不服輸，神秘，愛幻想，鐵齒，做事有頭無尾，大起大落 。", "臟腑": "胃", "臟腑2": "胃、手腳易受傷", "身弱疾病": "身弱辰月生人，食量大，易患消化系統或高血壓之疾病。另外脊髓、腎及皮膚等也不可忽視。"},
        { "地支": "巳", "係數": 6, "五行": "火", "藏干": "丙戊庚", "藏干比例": "0.7:0.2:0.1", "庫馬花": "馬", "星座": "處女", "提綱分論": "「巳當初夏火增光，造化流行正六陽；失令庚金生賴母，得時戊土祿隨娘。三刑傳送翻無害，一遇登明便有傷；行到東南生發地，煬天炎焰不尋常。」<br>四月巳火，為丙火之祿元，庚金之長生，蓋中藏丙火，戊土，庚金循序相生也。時值火炎土燥，最忌甲木再生，則烈炎沖天矣；最喜金水之潤澤，忌見東南。", "命宮含義": "命宮在巳宮的人，一般都是屬於態度蠻沉靜，思慮細膩之人，有時喜吹毛求疵，以致輕重失當。做事業的手段精明，處事有條不紊，經商往往能積小成大，是一個前途無量之格。", "一掌經星曜": "天文星", "一掌經含義": "《天文星》文采振發★初限平凡，中限平步青雲，晚年榮富，自立家風。此命心性不定，好交朋友，口才多佳。人命逢此，必有文采。女命可嫁好夫。", "個性": "生於巳月，善於周旋人群中，善利用人家，悶燒型，愛說話，喜聊天，好辯，雙重性格，城府深，外冷內熱，冷靜，守本分但保護自己，對他不可得寸進尺。", "臟腑": "脾", "臟腑2": "脾、五十肩、酸痛", "身弱疾病": "身弱巳月生人，此月生人咽喉較弱，也常有牙痛之患。"},
        { "地支": "午", "係數": 7, "五行": "火", "藏干": "丁己", "藏干比例": "0.7:0.3", "庫馬花": "花", "星座": "獅子", "提綱分論": "「五月炎炎火正升，六陽氣逐一陰生；庚金失位生無用，己土歸垣祿有成。甲子齊來能戰伐，戌寅同見越光明。東南正是身強地，西北休囚己喪刑。」<br>五月午火，丁己臨官之位，雖謂炎熱之極，然亦陽極而陰生之時也。庚金逢敗，力不從心。寅午戌會局，火勢炎燥，忌子水之沖，反惹沖激之患，金木至此，均屬休囚。", "命宮含義": "命宮在午宮的人，一般都是屬於天生具有高貴性格，充滿野心和熱誠之特質。意志堅強，不顧險阻，衝動熱情，理想高，傲氣盛。為了目的會企圖用投機的方法來達成出人頭地的目的，不願屈就。待人雖和藹可親，無非是想以籠絡之手段來取悅他人，以達到利己之發展。如能戒除驕傲的本質自能成功。", "一掌經星曜": "天福星", "一掌經含義": "《天福星》風流之命★此乃榮貴之命，一生有財運，可謂百福齊聚，命多貴人接引。權勢威風，性情自我，心性伶俐，多見男女情愛。傲氣較盛，能屈能伸之人。只是生性稍有自私，多利己。", "個性": "生於午月，倔強的脾氣，具爆發力，意志強，急躁，猛烈，不喜被壓抑，好勝心強，愛聽好話，脾氣很扭，奔波，勞碌，有衝勁，熱情，易被設計。", "臟腑": "心包", "臟腑2": "心、偏頭痛、頭痛", "身弱疾病": "身弱午月生人，心臟普遍不佳，宜避免過度刺激，同時要多注意味覺與視覺之保養。"},
        { "地支": "未", "係數": 8, "五行": "土", "藏干": "己丁乙", "藏干比例": "0.5:0.3:0.2", "庫馬花": "庫", "星座": "巨蟹", "提綱分論": "「未月陰深火漸衰，藏官藏印又藏財；近無卯亥形難變，遠帶刑沖庫亦開。無火怕行金水去，多寒偏愛丙丁來；用神喜忌當分曉，莫把圭璋作石猜。」<br>六月未土，火之余氣甚盛，且為木之墓庫，木火相生而土更旺焉。逢亥卯則化木，見丑戌則刑開。柱無火土則忌寒濕，苟金水氣盛，反喜溫暖之方。", "命宮含義": "命宮在未宮的人，一般都是屬於辦事嚴謹，工作謹慎，且有很好之領悟力和觀察力，在您的一舉一動中，看外表有點畏怯，但性格則是敏感而易怒，外貌柔順，內心則極堅強，不肯輕易接納他人意見。有時喜沉思，想像力豐富，有時易沉迷於聲色之地。", "一掌經星曜": "天驛星", "一掌經含義": "《天驛星》離祖成功★一生多見勞苦，離祖平安之命。身有藝業，初限有財，中限吉祥，末限能高。為人謙讓，敏感，容易發怒；外柔內剛，機謀太重，做事謹慎，有時候很難接受他人意見，記憶力佳。", "個性": "生於未月，包容性強，個性溫馴，柔順平和，合群，孝順，追根究底（打破沙鍋問到底），喜歡鑽牛角尖，膽小。", "臟腑": "小腸", "臟腑2": "小腸、五十肩、酸痛", "身弱疾病": "身弱未月生人，此常有健忘症或疲倦感，胃脾亦不太健康，平時宜注意保養。同時常 有嘴唇歪斜之現象，不可忽視。"},
        { "地支": "申", "係數": 9, "五行": "金", "藏干": "庚壬戊", "藏干比例": "0.7:0.2:0.1", "庫馬花": "馬", "星座": "雙子", "提綱分論": "「申金剛健月支逢，水土長生在此宮；巳午爐中成劍戟，子辰局中得風光。木多無火終能勝，土重埋金卻有凶。欲識斯神何所以，溫柔珠玉不相同。」<br>七月申金，中藏得祿之金，長生之壬，更得戊土寄生，土金水循序生，清輝而健朗，陰氣盛而能制木，土逢生，忌其再厚而埋金，苟金水順生，則金白水清而全美焉。", "命宮含義": "命宮在申宮的人，一般都是屬於具有雙重性格之人，有時自信樂觀，有時多疑且考慮過多，自我矛盾。為人反應極為機警，能提出新穎建議。剛開始從事行業時，不宜存有太大的得失利害之心，以免半途而廢，那成功就離您愈來愈遠了。", "一掌經星曜": "天孤星", "一掌經含義": "《天孤星》修行造福★此命先天六親緣疏，兄弟朋友少見助益，初限平平，中年能見吉順亨通之命。不宜早婚。口才好，多具語言表達能力，思想敏銳。心性比較孤獨，大都具有雙重個性，有時達觀，有時悲愁。女命，婚緣早見恐怕妨夫。", "個性": "生於申月，頭腦敏捷，點子多，能創造，坐不住，聰明，善模仿，學習與領悟力強。", "臟腑": "膀胱", "臟腑2": "膀胱、手腳易受傷", "身弱疾病": "身弱申月生人，常有肺臟、呼吸系統等之常期罹患疾病，容易成爲隱疾。另外大腸也 宜多注意保養。"},
        { "地支": "酉", "係數": 10, "五行": "金", "藏干": "辛", "藏干比例": "1", "庫馬花": "花", "星座": "金牛", "提綱分論": "「八月從魁巳得名，羨他金白水流清；火多東去愁寅卯，木旺南行怕丙丁。柱見水泥應有用，運臨西北豈無情；假饒三合能堅銳，不比頑金未煉成。」<br>八月酉金，為辛金臨官，庚金帝旺之位。木火多則忌重見東南，庶能保珠玉之質，然苟局全巳酉丑，則喜火煉秋金，水來泄秀，冰雪聰明，尤稱超特之士。", "命宮含義": "命宮在酉宮的人，一般都是屬於個性沉默且思考細膩，思慮深遠，心地善良，忠實可靠之人，但有時暴躁且固執己見，如不改進就會不好。一般有過人之處，有時又會標新立異，主觀過強，發言不當之情況發生，對於事務判斷，也有獨特看法。", "一掌經星曜": "天刃星", "一掌經含義": "《天刃星》自立自成★離祖成功之命也。眼目有神，多情破敗，性情剛毅、難屈，固執己見，主觀強。愛好大自然，沉靜，達觀。惜者！命理小人常見，時有是非、紛爭，此事要防。", "個性": "生於酉月，剛強好爭鬥，腦筋很好，容易看不起別人，自信，不聽意見，樹大招風，挑吃，雞婆，急躁，熱心，有人緣，第六感強，口疏。", "臟腑": "腎", "臟腑2": "腎、胸悶", "身弱疾病": "身弱酉月生人，常有突發之疾病，諸如腦溢血、吐血、下血、中風等突發性疾病，不可掉以輕心，胃腸注意保養。"},
        { "地支": "戌", "係數": 11, "五行": "土", "藏干": "戊辛丁", "藏干比例": "0.5:0.3:0.2", "庫馬花": "庫", "星座": "牡羊", "提綱分論": "「九月河魁性最剛，漫云此物易收藏；洪爐巨火能成就，鈍鐵頑金賴主張。海窟沖龍生雨露，山頭合虎動文章；天羅雖是迷魂陣，火命逢之獨有傷。」<br>九月戌土，為金之餘氣，火之墓庫。金旺賴其煆煉，水旺賴其止流，故沖辰開庫而吉凶顯明焉。寅午戌全則以火論，丙臨戌宮入墓，須得潤澤，方得吉祥。", "命宮含義": "命宮在戌宮的人，一般都是屬於舉止行動靈敏，工作充滿熱誠，事情計劃就緒即會全力以赴，不囉唆，顧慮不周，缺乏忍耐性，有時會壞事。故須善自控制自己，不要太躁進，一切才能納入正軌而行以至成功。", "一掌經星曜": "天藝星", "一掌經含義": "《天藝星》藝道揚名★一生六親難靠，不如朋友有情；但，防招人是非。性好立功，權威近貴，多智多能，幹練果斷，做事勤奮，具工作熱忱，舉止靈敏熱忱，稍乏耐性。姻緣刑剋，晚婚大吉。注意！宜培養冷靜之處事態度。", "個性": "生於戌月，個性強，固執，多才多藝，恃才傲物，詭計多端，外柔內剛，有交際手腕，喜歡當老大，忠心，講義氣，重感情，固執。", "臟腑": "心包", "臟腑2": "心包、大腿酸痛", "身弱疾病": "身弱戌月生人，常與下半身有關，對於女性而言是白帶、陰部、子宮、腎臟等。而男性則是腎衰弱、性無能、性感染、痔瘡等。另外腳部之腳跟、腳指等易生支障。"}
    ];

    switch (選項) {
        case 1: case "地支":
            return 地支矩陣[地支數].地支;
        case 2: case "係數":
            return 地支矩陣[地支數].係數;
        case 3: case "五行":
            return 地支矩陣[地支數].五行;
        case 4: case "藏干":
            return 地支矩陣[地支數].藏干;
        case 5: case "藏干比率":
            return 地支矩陣[地支數].藏干比例;
        case 6: case "星座":
            return 地支矩陣[地支數].星座;
        case 7: case "提綱分論":
            return "提綱十二支分論："+地支矩陣[地支數].提綱分論;
        case 8: case "命宮含義":
            return 地支矩陣[地支數].命宮含義;
        case 9: case "一掌經星曜":
            return 地支矩陣[地支數].一掌經星曜;
        case 10: case "一掌經含義":
            return "命宮在"+地支+"為"+地支矩陣[地支數].一掌經星曜+"。"+地支矩陣[地支數].一掌經含義;
        case 11: case "個性":
            return 地支矩陣[地支數].個性;
        case 12: case "臟腑":
            return 地支矩陣[地支數].臟腑;
        case 13: case "臟腑2":
            return 地支矩陣[地支數].臟腑2;
        case 14: case "身弱疾病":
            return 地支矩陣[地支數].身弱疾病;
        default:
            alert(選項 + "：地支選項錯誤 ！！");
    }
} // end function 地支特性




//     *********************************************************************************
//                                         天干模塊
//     *********************************************************************************

function 天干數轉字(天干數) {
    switch (天干數) {
        case 0: return "癸";
        case 1: return "甲";
        case 2: return "乙";
        case 3: return "丙";
        case 4: return "丁";
        case 5: return "戊";
        case 6: return "己";
        case 7: return "庚";
        case 8: return "辛";
        case 9: return "壬";
        default:
            alert(天干數+"：天干數轉字 錯誤");
            break;
    }
}

function 天干字轉值(天干) {
    switch (天干) {
        case "癸": return 0;
        case "甲": return 1;
        case "乙": return 2;
        case "丙": return 3;
        case "丁": return 4;
        case "戊": return 5;
        case "己": return 6;
        case "庚": return 7;
        case "辛": return 8;
        case "壬": return 9;
        default:
            alert(天干+"：天干字轉值 錯誤");
    }
}

function 天干字數轉換(天干){
    var 輸入數字=(isNaN(天干))? "字" : "數";  //輸入的是數還是字

    switch(輸入數字){
        case "字":
            switch(天干){
                case "癸": return 0;
                case "甲": return 1;
                case "乙": return 2;
                case "丙": return 3;
                case "丁": return 4;
                case "戊": return 5;
                case "己": return 6;
                case "庚": return 7;
                case "辛": return 8;
                case "壬": return 9;
                default:
                    alert(天干+"：天干字轉值 錯誤");
                    return "";
            }
        break;
        
        case "數":
            switch(天干){
                case 0: return "癸";
                case 1: return "甲";
                case 2: return "乙";
                case 3: return "丙";
                case 4: return "丁";
                case 5: return "戊";
                case 6: return "己";
                case 7: return "庚";
                case 8: return "辛";
                case 9: return "壬";
                default:
                    alert(天干數+"：天干數轉字 錯誤");
                    return "";
            }        

    }
}  // end function 天干字數轉換


function 天干生剋合(天干, 選項) {
    var 合干, 生干, 我剋, 剋我;

    switch (天干) {
        case "癸":
            合干 = "戊";
            生干 = "甲";
            我剋 = "丁";
			剋我 = "己";
            break;
        case "甲":
            合干 = "己";
            生干 = "丁";
            我剋 = "戊";
			剋我 = "庚";
            break;
        case "乙":
            合干 = "庚";
            生干 = "丙";
            我剋 = "己";
			剋我 = "辛";
            break;
        case "丙":
            合干 = "辛";
            生干 = "己";
            我剋 = "庚";
			剋我 = "壬";
            break;
        case "丁":
            合干 = "壬";
            生干 = "戊";
            我剋 = "辛";
			剋我 = "癸";
            break;
        case "戊":
            合干 = "癸";
            生干 = "辛";
            我剋 = "壬";
			剋我 = "甲";
            break;
        case "己":
            合干 = "甲";
            生干 = "庚";
            我剋 = "癸";
			剋我 = "乙";
            break;
        case "庚":
            合干 = "乙";
            生干 = "癸";
            我剋 = "甲";
			剋我 = "丙";
            break;
        case "辛":
            合干 = "丙";
            生干 = "壬";
            我剋 = "乙";
			剋我 = "丁";
            break;
        case "壬":
            合干 = "丁";
            生干 = "乙";
            我剋 = "丙";
			剋我 = "戊";
            break;
        default:
            alert(天干+"：天干生剋合function的天干輸入錯誤 ！");
    }

    switch (選項) {
        case 1: case "合":
            return 合干;
        case 2: case "生":
            return 生干;
        case 3: case "我剋":
            return 我剋;
        case 4: case "剋我":
            return 剋我;
        default:
            alert(天干+"：天干生剋合function的選項輸入錯誤 ！");
    }
}  // end function 天干生剋合


function 天干生合剋(天干1, 天干2, 選項) {
    var 天干對 = 天干1+天干2;
    var 天干合 = "";
    var 天干生 = "";
    var 天干剋 = "";

    天干合 = 天干五合(天干1, 天干2);
} // end function 天干生合剋


// ****************************** 干支冲合刑剋 ******************************
function 干支天剋地冲2(干支, 選項){
    //選項：剋我、我剋
	var 天干=干支.substr(0,1);
	var 地支=干支.substr(1,1);
	var 剋我我剋;

    switch(選項){
        case 0:case "剋我":
            剋我我剋 = "剋我";
            break;
        case 1:case "我剋":
            剋我我剋 = "我剋";
            break;
        default:
            剋我我剋 = "剋我";
            break;
    }
	
	var 剋干=天干生剋合(天干, 剋我我剋);
	var 冲支=地支六合冲害破(地支, "冲");
				
	return 剋干+冲支;
}  // end function 干支天剋地冲2


function 干支天同地同(干支1, 干支2){
    //選項：剋我、我剋
	var 天干1=干支1.substr(0,1);
	var 地支1=干支1.substr(1,1);

	var 天干2=干支2.substr(0,1);
	var 地支2=干支2.substr(1,1);

	var 天同 = (天干1 == 天干2) ? "天同" : "";
    var 地同 = (地支1 == 地支2) ? "地同" : "";

	if (天同 != "" && 地同 != "") return "伏吟"; else return "";	
} // end function 干支天同地同


function 干支天剋地冲(干支1, 干支2){
    //選項：剋我、我剋
	var 天干1=干支1.substr(0,1);
	var 地支1=干支1.substr(1,1);

	var 天干2=干支2.substr(0,1);
	var 地支2=干支2.substr(1,1);

	var 天剋 = 天干十剋(天干1, 天干2);
    var 地冲 = 地支相冲(地支1+地支2);

	if (天剋 != "" && 地冲 != "") return "返吟"; else return "";	
}  // end function 干支天剋地冲


function 干支天合地合(干支1, 干支2){
    //選項：剋我、我剋
	var 天干1=干支1.substr(0,1);
	var 地支1=干支1.substr(1,1);

	var 天干2=干支2.substr(0,1);
	var 地支2=干支2.substr(1,1);

	var 天合 = 天干五合(天干1, 天干2);
	var 地合 = 地支半六暗合(地支1, 地支2, ""); //不考量地支暗合

	if (天合 != "" && 地合 != "") return "天合地合"; else return "";
} // end function 干支天合地合


function 干支天合地刑(干支1, 干支2){
    //選項：剋我、我剋
	var 天干1=干支1.substr(0,1);
	var 地支1=干支1.substr(1,1);

	var 天干2=干支2.substr(0,1);
	var 地支2=干支2.substr(1,1);

	var 天合 = 天干五合(天干1, 天干2);
	var 地刑 = 地支相刑(地支1+地支2, "相刑", "所有");

	if (天合 != "" && 地刑 != "") return "天合地刑"; else return "";
}  // end function 干支天合地刑


function 干支天剋地合(干支1, 干支2){
    //選項：剋我、我剋
	var 天干1=干支1.substr(0,1);
	var 地支1=干支1.substr(1,1);

	var 天干2=干支2.substr(0,1);
	var 地支2=干支2.substr(1,1);

	var 天剋 = 天干十剋(天干1, 天干2);
    var 地合 = 地支半六暗合(地支1, 地支2, ""); //不考量地支暗合

	if (天剋 != "" && 地合 != "") return "天剋地合"; else return "";	
} // end function 干支天剋地合


function 干支天剋地刑(干支1, 干支2){
    //選項：剋我、我剋
	var 天干1=干支1.substr(0,1);
	var 地支1=干支1.substr(1,1);

	var 天干2=干支2.substr(0,1);
	var 地支2=干支2.substr(1,1);

	var 天剋 = 天干十剋(天干1, 天干2);
    var 地刑 = 地支相刑(地支1+地支2, "相刑", "所有");

	if (天剋 != "" && 地刑 != "") return "天剋地刑"; else return "";	
}  // end function 干支天剋地刑


function 地支刑沖合會害關係(地支1, 地支2) {
    var 地支關係 = {
        "地支1": 地支1,
        "地支2": 地支2,
        "刑": false,
        "沖": false,
        "合": false,
        "會": false,
        "害": false,
        "破": false,
        "六合": false,
        "半合": false,
        "Error": false,
        "備註": ""
    };
    /*
    ●十二生肖〈六合〉暗合表：六合貴人,
    【1】子（鼠）、丑（牛）相合，【2】寅（虎）、亥（豬）相合，【3】卯（兔）、戌（狗）相合，【4】辰（龍）、酉（雞）相合，【5】巳（蛇）、申（猴）相合，【6】午（馬）、未（羊）相合

    ●十二生肖〈三合〉明合表：三合貴人,
    【1】亥（豬）、卯（兔）、未（羊）三合（木局），【2】寅（虎）、午（馬）、戌（狗）三合（火局），【3】巳（蛇）、酉（雞）、丑（牛）三合（金局），【4】申（猴）、子（鼠）、辰（龍）三合（水局）

    ●十二生肖〈三會〉表：
    【1】寅（虎）、卯（兔）、辰（龍）三會（木局），【2】巳（蛇）、午（馬）、未（羊）三會（火局），【3】申（猴）、酉（雞）、戌（狗）三會（金局），【4】亥（豬）、子（鼠）、丑（牛）三會（水局）

    ●十二生肖〈相沖〉表：
    【1】子（鼠）沖午（馬），【2】丑（牛）沖未（羊），【3】寅（虎）沖申（猴），【4】卯（兔）沖酉（雞），【5】辰（龍）沖戌（狗），【6】巳（蛇）沖亥（豬）

    ●十二生肖〈相刑〉表：
    【1】巳（蛇）、寅（虎）、申（猴）三刑，【2】丑（牛）、戌（狗）、未（羊）三刑，【3】子（鼠）、卯（兔）相刑，【4】亥（豬）自刑，【5】午（馬）自刑，【6】酉（雞）自刑，【7】辰（龍）自刑

    ●十二生肖〈相破〉表：
    【1】子（鼠）、酉（雞）相破，【2】午（馬）、卯（兔）相破，【3】申（猴）、巳（蛇）相破，【4】寅（虎）、亥（豬）相破，【5】丑（牛）、辰（龍）相破，【6】戌（狗）、未（羊）相破

    ●十二生肖〈相害〉表：
    子（鼠）、未（羊）相害，丑（牛）、午（馬）相害，寅（虎）、巳（蛇）相害，卯（兔）、辰（龍）相害，申（猴）、亥（豬）相害，酉（雞）、戌（狗）相害
    */
    switch(地支1) {
        case "子": 
            switch(地支2) {
                case "子": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "丑": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = true; 地支關係.半合 = false; break; 
                case "寅": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "卯": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "辰": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break; 
                case "巳": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "午": 地支關係.刑 = false; 地支關係.沖 = true; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "未": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = true; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "申": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break; 
                case "酉": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = true; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "戌": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "亥": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                default: 地支關係.Error = true;
            } // switch 地支2
            break;
        case "丑": 
            switch(地支2) {
                case "子": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = true; 地支關係.半合 = false; break;
                case "丑": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "寅": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "卯": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "辰": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = true; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "巳": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break;
                case "午": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = true; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "未": 地支關係.刑 = true; 地支關係.沖 = true; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "申": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "酉": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break;
                case "戌": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "亥": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                default: 地支關係.Error = true;
            } // switch 地支2
            break;
        case "寅": 
            switch(地支2) {
                case "子": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "丑": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "寅": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "卯": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "辰": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "巳": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = true; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "午": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break;
                case "未": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "申": 地支關係.刑 = true; 地支關係.沖 = true; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "酉": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "戌": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break;
                case "亥": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = true; 地支關係.六合 = true; 地支關係.半合 = false; break;
                default: 地支關係.Error = true;
            } // switch 地支2
            break;
        case "卯": 
            switch(地支2) {
                case "子": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "丑": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "寅": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "卯": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "辰": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = true; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "巳": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "午": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = true; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "未": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break;
                case "申": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "酉": 地支關係.刑 = false; 地支關係.沖 = true; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "戌": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = true; 地支關係.半合 = false; break;
                case "亥": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break;
                default: 地支關係.Error = true;
            } // switch 地支2
            break;
        case "辰": 
            switch(地支2) {
                case "子": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break;
                case "丑": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = true; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "寅": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "卯": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = true; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "辰": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "巳": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "午": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "未": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "申": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break;
                case "酉": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = true; 地支關係.半合 = false; break;
                case "戌": 地支關係.刑 = false; 地支關係.沖 = true; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "亥": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                default: 地支關係.Error = true;
            } // switch 地支2
            break;
        case "巳": 
            switch(地支2) {
                case "子": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "丑": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break;
                case "寅": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = true; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "卯": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "辰": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "巳": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "午": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "未": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "申": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = true; 地支關係.六合 = true; 地支關係.半合 = false; break;
                case "酉": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break;
                case "戌": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "亥": 地支關係.刑 = false; 地支關係.沖 = true; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                default: 地支關係.Error = true;
            } // switch 地支2
            break;
        case "午": 
            switch(地支2) {
                case "子": 地支關係.刑 = false; 地支關係.沖 = true; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "丑": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = true; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "寅": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break; 
                case "卯": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = true; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "辰": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "巳": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "午": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "未": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = true; 地支關係.半合 = false; break;
                case "申": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "酉": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "戌": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break; 
                case "亥": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                default: 地支關係.Error = true;
            } // switch 地支2
            break;
        case "未": 
            switch(地支2) {
                case "子": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = true; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "丑": 地支關係.刑 = true; 地支關係.沖 = true; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "寅": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "卯": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break; 
                case "辰": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "巳": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "午": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = true; 地支關係.半合 = false; break; 
                case "未": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "申": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "酉": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "戌": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = true; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "亥": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break;
                default: 地支關係.Error = true;
            } // switch 地支2
            break;
        case "申": 
            switch(地支2) {
                case "子": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break; 
                case "丑": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "寅": 地支關係.刑 = true; 地支關係.沖 = true; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "卯": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "辰": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break; 
                case "巳": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = true; 地支關係.六合 = true; 地支關係.半合 = false; break; 
                case "午": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "未": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "申": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "酉": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "戌": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "亥": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = true; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                default: 地支關係.Error = true;
            } // switch 地支2
            break;
        case "酉": 
            switch(地支2) {
                case "子": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = true; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "丑": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break; 
                case "寅": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "卯": 地支關係.刑 = false; 地支關係.沖 = true; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "辰": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = true; 地支關係.半合 = false; break; 
                case "巳": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break; 
                case "午": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "未": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "申": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "酉": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "戌": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = true; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "亥": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                default: 地支關係.Error = true;
                break;
            } // switch 地支2
        case "戌": 
            switch(地支2) {
                case "子": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "丑": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "寅": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break; 
                case "卯": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = true; 地支關係.半合 = false; break; 
                case "辰": 地支關係.刑 = false; 地支關係.沖 = true; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "巳": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "午": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break; 
                case "未": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = true; 地支關係.六合 = false; 地支關係.半合 = false; break;
                case "申": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "酉": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = true; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "戌": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "亥": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                default: 地支關係.Error = true;
            } // switch 地支2
            break;
        case "亥": 
            switch(地支2) {
                case "子": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "丑": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = true; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "寅": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = true; 地支關係.六合 = true; 地支關係.半合 = false; break; 
                case "卯": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break; 
                case "辰": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "巳": 地支關係.刑 = false; 地支關係.沖 = true; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "午": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "未": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = true; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = true; break;
                case "申": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = true; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "酉": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "戌": 地支關係.刑 = false; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break; 
                case "亥": 地支關係.刑 = true; 地支關係.沖 = false; 地支關係.合 = false; 地支關係.會 = false; 地支關係.害 = false; 地支關係.破 = false; 地支關係.六合 = false; 地支關係.半合 = false; break;
                default: 地支關係.Error = true;
            } // switch 地支2
        default: 地支關係.Error = true;
    } // end switch 地支1
    
    return 地支關係;
}  // end function 地支刑沖合會害

// ***************************************************************************
function 天干五合(天干1, 天干2){
    //選項：剋我、我剋
    var 天干對 = 天干1+天干2;

    switch(天干對){
        case "甲己": case "己甲":
            return "土";
            break;
        case "乙庚": case "庚乙":
            return "金";
            break;
        case "丙辛": case "辛丙":
            return "水";
            break;
        case "丁壬": case "壬丁":
            return "木";
            break;
        case "戊癸": case "癸戊":
            return "火";
            break;
        default:
            return "";
            break;
    }
}  // end function 天干五合



function 天干合化(天干對, 命盤){
    var 月令 = 命盤.月令;
    var 日時干 = 命盤.日干.天干 + 命盤.時干.天干;
    var 合化 = "";
    var 合化註解 = "";

    var 三命地支條件 = "";
    var 三命月干條件 = "";
    var 三命吉的條件 = "";
    var 三命凶的條件 = "";
    var 三命化否 = "";
    var 三命註解="";

    switch(天干對){
        case "甲己": case "己甲":

            //if ((月令 == "辰" || 月令 == "戌" || 月令 == "丑" || 月令 == "未") && (命盤.分析.地支.地支數據[地支字轉值("寅")].數量 == 0 && 命盤.分析.地支.地支數據[地支字轉值("卯")].數量 == 0) && (命盤.分析.天干.天干數據[天干字轉值("甲")].天干 == 0 && 命盤.分析.天干.天干數據[天干字轉值("乙")].天干 == 0)) {
            //    合化 = "土";
            //    合化註解 = "生於辰、戌、丑、未月，不見木，合化成格。";
            //}
            // ************************* 三命通會 *************************
            三命地支條件 = "甲己不生於辰、戌、丑、未，午月，故不化土。";
            if (月令 == "辰" || 月令 == "戌" || 月令 == "丑" || 月令 == "未" || 月令 == "午") {
                三命地支條件 = "甲己合，月支為辰、戌、丑、未，午，符合化土的環境。";
                三命化否 = "土";
            }
            if (命盤.月干.天干 == "戊") {
                三命月干條件 = "月干逢戊則不化。";
                三命化否 = ""; //不化
            }

            if ((命盤.分析.地支.地支數據[地支字轉值("亥")].數量 > 0 && 命盤.分析.地支.地支數據[地支字轉值("卯")].數量 > 0) || (命盤.分析.地支.地支數據[地支字轉值("亥")].數量 > 0 && 命盤.分析.地支.地支數據[地支字轉值("未")].數量 > 0) || (命盤.分析.天干.天干數據[天干字轉值("戊")].天干 > 0 && 命盤.分析.天干.天干數據[天干字轉值("癸")].天干 > 0)) 三命吉的條件 = "柱中逢亥卯、亥未、戊癸相合皆吉。";
            if (日時干 == "丁壬" || 日時干 == "壬丁") 三命凶的條件 = "忌日時天干為丁壬相合。";

            三命註解 = 三命地支條件 + 三命月干條件 + 三命吉的條件 + 三命凶的條件;
            // ************************************************************

            return "天干合,土,甲己," + 三命化否 + "," + 三命註解;
            break;

        case "乙庚":case "庚乙":

            //if ((月令 == "巳" || 月令 == "申" || 月令 == "酉" || 月令 == "丑") && (命盤.分析.地支.地支數據[地支字轉值("午")].數量 == 0) && (命盤.分析.天干.天干數據[天干字轉值("丙")].天干 == 0 && 命盤.分析.天干.天干數據[天干字轉值("丁")].天干 == 0)) {
            //    合化 = "金";
            //    合化註解 = "生於巳、酉、丑、申月，不見火，合化成格。";
            //}
            // ************************* 三命通會 *************************
            三命地支條件 = "乙庚不生於巳、酉、丑、申月，故不化金。";
            if (月令 == "巳" || 月令 == "酉" || 月令 == "丑" || 月令 == "申") {
                三命地支條件 = "乙庚合，月支為巳、酉、丑、申，符合化金的環境。";
                三命化否 = "金";
            }
            if (命盤.月干.天干 == "甲") {
                三命月干條件 = "月干逢甲則不化。";
                三命化否 = ""; //不化
            }

            if ((命盤.分析.地支.地支數據[地支字轉值("亥")].數量 > 0 && 命盤.分析.地支.地支數據[地支字轉值("卯")].數量 > 0) || (命盤.分析.地支.地支數據[地支字轉值("亥")].數量 > 0 && 命盤.分析.地支.地支數據[地支字轉值("未")].數量 > 0) || (命盤.分析.天干.天干數據[天干字轉值("戊")].天干 > 0 && 命盤.分析.天干.天干數據[天干字轉值("癸")].天干 > 0)) 三命吉的條件 = "柱中逢亥卯、亥未、戊癸相合皆吉。";
            if (日時干 == "丁壬" || 日時干 == "壬丁") 三命凶的條件 = "忌日時天干為丁壬相合。";
            三命註解 = 三命地支條件 + 三命月干條件 + 三命吉的條件 + 三命凶的條件;
            // ************************************************************

            return "天干合,金,乙庚," + 三命化否 + "," + 三命註解;
            break;

        case "丙辛": case "辛丙":

            //if ((月令 == "申" || 月令 == "子" || 月令 == "辰" || 月令 == "亥") && (命盤.分析.地支.地支數據[地支字轉值("丑")].數量 == 0 && 命盤.分析.地支.地支數據[地支字轉值("未")].數量 == 0 && 命盤.分析.地支.地支數據[地支字轉值("戌")].數量 == 0) && (命盤.分析.天干.天干數據[天干字轉值("戊")].天干 == 0 && 命盤.分析.天干.天干數據[天干字轉值("己")].天干 == 0)) {
            //    合化 = "水";
            //    合化註解 = "生於申、子、辰、亥月，不見土，合化成格。";
            //}
            // ************************* 三命通會 *************************
            三命地支條件 = "丙辛不生於申、子、辰、亥月，故不化水。";
            if (月令 == "申" || 月令 == "子" || 月令 == "辰" || 月令 == "亥") {
                三命地支條件 = "丙辛合，月支為申、子、辰、亥，符合化水的環境。";
                三命化否 = "水";
            }
            if (命盤.月干.天干 == "丁") {
                三命月干條件 = "月干逢丁則不化。";
                三命化否 = ""; //不化
            }

            if ((命盤.分析.地支.地支數據[地支字轉值("辰")].數量 > 0 || 命盤.分析.地支.地支數據[地支字轉值("戌")].數量 > 0) || (命盤.分析.地支.地支數據[地支字轉值("丑")].數量 > 0 || 命盤.分析.地支.地支數據[地支字轉值("未")].數量 > 0) || (命盤.分析.天干.天干數據[天干字轉值("乙")].天干 > 0 && 命盤.分析.天干.天干數據[天干字轉值("庚")].天干 > 0)) 三命吉的條件 = "柱中逢辰戌丑未諸土、乙庚皆吉。";
            if (日時干 == "甲己" || 日時干 == "己甲") 三命凶的條件 = "忌日時天干為甲己相合。";
            三命註解 = 三命地支條件 + 三命月干條件 + 三命吉的條件 + 三命凶的條件;
             // ************************************************************

            return "天干合,水,丙辛," + 三命化否 + "," + 三命註解;
            break;

        case "丁壬": case "壬丁":

            //if ((月令 == "亥" || 月令 == "卯" || 月令 == "未" || 月令 == "寅") && (命盤.分析.地支.地支數據[地支字轉值("申")].數量 == 0 && 命盤.分析.地支.地支數據[地支字轉值("酉")].數量 == 0) && (命盤.分析.天干.天干數據[天干字轉值("庚")].天干 == 0 && 命盤.分析.天干.天干數據[天干字轉值("辛")].天干 == 0)) {
            //    合化 = "木";
            //    合化註解 = "生於亥、卯、未、寅月，不見金，合化成格。";
            //}
            // ************************* 三命通會 *************************
            三命地支條件 = "丁壬不生於亥、卯、未、寅月，故不化木。";
            if (月令 == "亥" || 月令 == "卯" || 月令 == "未" || 月令 == "寅") {
                三命地支條件 = "丁壬合，月支為亥、卯、未、寅，符合化木的環境。";
                三命化否 = "木";
            }
            if (命盤.月干.天干 == "丙") {
                三命月干條件 = "月干逢丙則不化。";
                三命化否 = ""; //不化
            }

            if ((命盤.分析.地支.地支數據[地支字轉值("申")].數量 > 0 && 命盤.分析.地支.地支數據[地支字轉值("酉")].數量 > 0) || (命盤.分析.天干.天干數據[天干字轉值("庚")].天干 > 0 && 命盤.分析.天干.天干數據[天干字轉值("辛")].天干 > 0) || (命盤.分析.天干.天干數據[天干字轉值("丙")].天干 > 0 && 命盤.分析.天干.天干數據[天干字轉值("辛")].天干 > 0) ) 三命吉的條件 = "柱中逢庚辛、申酉、丙辛相合皆吉。";
            if (日時干 == "乙庚" || 日時干 == "庚乙") 三命凶的條件 = "忌日時天干為乙庚相合。";
            三命註解 = 三命地支條件 + 三命月干條件 + 三命吉的條件 + 三命凶的條件;
            // ************************************************************

            return "天干合,木,丁壬," + 三命化否 + "," + 三命註解;
            break;

        case "戊癸": case "癸戊":

            //if ((月令 == "寅" || 月令 == "午" || 月令 == "戌" || 月令 == "巳") && (命盤.分析.地支.地支數據[地支字轉值("亥")].數量 == 0 && 命盤.分析.地支.地支數據[地支字轉值("子")].數量 == 0) && (命盤.分析.天干.天干數據[天干字轉值("壬")].天干 == 0 && 命盤.分析.天干.天干數據[天干字轉值("癸")].天干 == 0)) {
            //    合化 = "火";
            //    合化註解 = "生於寅、午、戌、巳月，不見水，合化成格。";
            //}
            // ************************* 三命通會 *************************
            三命地支條件 = "戊癸不生於寅、午、戌、巳月，故不化火。";
            if (月令 == "寅" || 月令 == "午" || 月令 == "戌" || 月令 == "巳") {
                三命地支條件 = "戊癸合，月支為寅、午、戌、巳，符合化火的環境。";
                三命化否 = "火";
            }
            if (命盤.月干.天干 == "己") {
                三命月干條件 = "月干逢己則不化。";
                三命化否 = "";  //不化
            }

            if ((命盤.分析.地支.地支數據[地支字轉值("亥")].數量 > 0 && 命盤.分析.地支.地支數據[地支字轉值("子")].數量 > 0) || (命盤.分析.天干.天干數據[天干字轉值("壬")].天干 > 0 && 命盤.分析.天干.天干數據[天干字轉值("癸")].天干 > 0) || (命盤.分析.天干.天干數據[天干字轉值("丁")].天干 > 0 && 命盤.分析.天干.天干數據[天干字轉值("壬")].天干 > 0)) 三命吉的條件 = "柱中逢壬癸、亥子、丁壬相合皆吉。";
            if (日時干 == "丙辛" || 日時干 == "辛丙") 三命凶的條件 = "忌日時天干為丙辛相合。";
            三命註解 = 三命地支條件 + 三命月干條件 + 三命吉的條件 + 三命凶的條件;
            // ************************************************************

            return "天干合,火,戊癸," + 三命化否 + "," + 三命註解;
            break;

        default:
            return "";
            break;
    }
} // end function 天干合化


function 天干十剋(天干1, 天干2){
    var 天干對 = 天干1+天干2;

    switch(天干對){
        case "甲戊": case "甲戊": 
	        return "剋";
	        break;
        case "乙己": case "己乙": 
	        return "剋";
	        break;
        case "丙庚": case "庚丙": 
	        return "剋";
	        break;
        case "丁辛": case "辛丁": 
	        return "剋";
	        break;
        case "戊壬": case "壬戊": 
	        return "剋";
	        break;
        case "己癸": case "癸己": 
	        return "剋";
	        break;
        case "庚甲": case "甲庚": 
	        return "剋";
	        break;
        case "辛乙": case "乙辛": 
	        return "剋";
	        break;
        case "壬丙": case "丙壬": 
	        return "我";
	        break;
        case "癸丁": case "丁癸": 
	        return "剋";
	        break;
	    default:
	        return "";
	        break;
    }
} // end function 天干十剋


function 天干滾動(天干數, 滾動數) {
    if (滾動數 < 0) {
        滾動數 += 10;
    }
    return (Number(天干數) + Number(滾動數)) % 10;
} // end function 天干滾動


function 天干屬性(天干, 選項) {
	if(天干=="-" || 天干=="x" || 天干=="X" || 天干=="o" || 天干=="O" || 天干==="") return "";
	
    var 天干數 = 天干字轉值(天干);
    var 天干 = [
        { "天干": "癸", "係數": 0, "拼音": "guǐ", "陰陽": "陰", "五行": "水", "Element": "Water", "ElementYinYang": "Yin Water", "SignYinYang": "(-)", "臟腑": "腎"},
        { "天干": "甲", "係數": 1, "拼音": "jiǎ", "陰陽": "陽", "五行": "木", "Element": "Wood", "ElementYinYang": "Yang Wood", "SignYinYang": "(+)", "臟腑": "膽"},
        { "天干": "乙", "係數": 2, "拼音": "yǐ", "陰陽": "陰", "五行": "木", "Element": "Wood", "ElementYinYang": "Yin Wood", "SignYinYang": "(-)", "臟腑": "肝"},
        { "天干": "丙", "係數": 3, "拼音": "bǐng", "陰陽": "陽", "五行": "火", "Element": "Fire", "ElementYinYang": "Yang Fire", "SignYinYang": "(+)", "臟腑": "小腸"},
        { "天干": "丁", "係數": 4, "拼音": "dīng", "陰陽": "陰", "五行": "火", "Element": "Fire", "ElementYinYang": "Yin Fire", "SignYinYang": "(-)", "臟腑": "心"},
        { "天干": "戊", "係數": 5, "拼音": "wù", "陰陽": "陽", "五行": "土", "Element": "Earth", "ElementYinYang": "Yang Earth", "SignYinYang": "(+)", "臟腑": "脾"},
        { "天干": "己", "係數": 6, "拼音": "jǐ", "陰陽": "陰", "五行": "土", "Element": "Earth", "ElementYinYang": "Yin Earth", "SignYinYang": "(-)", "臟腑": "胃"},
        { "天干": "庚", "係數": 7, "拼音": "gēng", "陰陽": "陽", "五行": "金", "Element": "Metal", "ElementYinYang": "Yang Metal", "SignYinYang": "(+)", "臟腑": "大腸"},
        { "天干": "辛", "係數": 8, "拼音": "xīn", "陰陽": "陰", "五行": "金", "Element": "Metal", "ElementYinYang": "Yin Metal", "SignYinYang": "(-)", "臟腑": "肺"},
        { "天干": "壬", "係數": 9, "拼音": "rén", "陰陽": "陽", "五行": "水", "Element": "Water", "ElementYinYang": "Yang Water", "SignYinYang": "(+)", "臟腑": "膀胱"}
    ];

    switch (選項) {
        case 1: case "天干":
            return 天干[天干數].天干;
        case 2: case "係數":
            return 天干[天干數].係數;
        case 3: case "陰陽":
            return 天干[天干數].陰陽;
        case 4: case "臟腑":
            return 天干[天干數].臟腑;
        case 5: case "五行":
            return 天干[天干數].五行;
        case 6: case "拼音":
            return 天干[天干數].拼音;
        case 7: case "Element":
            return 天干[天干數].Element;
        case 8: case "ElementYinYang":
            return 天干[天干數].ElementYinYang;
        case 9: case "SignYinYang":
            return 天干[天干數].SignYinYang;
		default:
			alert(天干 + "，" + 選項 + "：天干屬性輸入錯誤");
			return "";
    } // end switch
} // end function 天干屬性


//     *********************************************************************************
//                                         陰陽,五行模塊
//     *********************************************************************************
function 是天干(元件){
    if(元件=="甲" || 元件=="乙" || 元件=="丙" || 元件=="丁" || 元件=="戊" || 元件=="己" || 元件=="庚" || 元件=="辛" || 元件=="壬" || 元件=="癸"){
        return true;
    }
    else {return false;}
} // end function 是天干


function 是地支(元件){
    if(元件=="子" || 元件=="丑" || 元件=="寅" || 元件=="卯" || 元件=="辰" || 元件=="巳" || 元件=="午" || 元件=="未" || 元件=="申" || 元件=="酉" || 元件=="戌" || 元件=="亥") return true; else return false;
}  // end function 是地支


function 干支轉五行(干支元件){
    //輸入天干或地支，轉換成五行
    switch(干支元件){
        case "甲": case "乙": case "寅": case "卯":
            return "木";
        case "丙": case "丁": case "巳": case "午":
            return "火";
        case "戊": case "己": case "丑": case "辰": case "未": case "戌":
            return "土";
        case "庚": case "辛": case "申": case "酉":
            return "金";
        case "壬": case "癸": case "亥": case "子":
            return "水";
        default:
            alert(干支元件 + "：干支轉五行 function 的輸入干支元件錯誤！");
            return "";
    }
}  // end function 干支轉五行


function 陰陽同性(五行元件1, 五行元件2){
    var 陰陽屬性1, 陰陽屬性2;
    if(是天干(五行元件1)) {陰陽屬性1=天干屬性(五行元件1, "陰陽");}
    if(是天干(五行元件2)) {陰陽屬性1=天干屬性(五行元件2, "陰陽");}
    
    if(是地支(五行元件1)) {陰陽屬性1=地支屬性(五行元件1, "陰陽");}
    if(是地支(五行元件2)) {陰陽屬性1=地支屬性(五行元件2, "陰陽");}
    
    if(陰陽屬性1==陰陽屬性2){ return true; } else { return false; }
}  // end function 陰陽同性


function 五行轉天干(五行, 陰陽){
	switch(五行){
		case "木":
			if(陰陽=="陽") return "甲";
			if(陰陽=="陰") return "乙";
			break;
		case "火":
			if(陰陽=="陽") return "丙";
			if(陰陽=="陰") return "丁";
			break;
		case "土":
			if(陰陽=="陽") return "戊";
			if(陰陽=="陰") return "己";
			break;			
		case "金":
			if(陰陽=="陽") return "庚";
			if(陰陽=="陰") return "辛";
			break;
		case "水":
			if(陰陽=="陽") return "壬";
			if(陰陽=="陰") return "癸";
			break;
        case "":
            //alert(五行 + "：五行轉天干fucntion， 輸入的五行是 空格");
            return "";
		default:
			alert(五行 + "：五行轉天干fucntion， 輸入的五行錯誤！");
			return "";
	}  //end switch
}  //end function 五行轉天干


function 五行字轉數(五行) {
    switch (五行) {
        case "木": return 0; 
        case "火": return 1; 
        case "土": return 2; 
        case "金": return 3; 
        case "水": return 4; 
    }
} //end function 五行字轉數


function 五行數轉字(五行數) {
    switch (五行數) {
        case 0: return "木"; 
        case 1: return "火"; 
        case 2: return "土"; 
        case 3: return "金"; 
        case 4: return "水"; 
    }
} //end function 五行數轉字


function 五行四季旺相休囚死(五行, 四季, 月令){
    /*
        五行在一年四時不同的宇宙時空狀態下，其存在的狀態也不同，由盛轉衰的過程用旺、相、休、囚、死來表示。 

        時 木 火 水 金 土
        ----------------------
        春 旺 相 休 囚 死
        夏 休 旺 囚 死 相
        季 囚 休 死 相 旺
        秋 死 囚 相 旺 休
        冬 相 死 旺 休 囚

        旺：事物發展至鼎盛時期的狀態。如木在春季寅卯月，得時秉令，為一年四季最旺之時。
        相：事物處於受生受益時期正適宜發展的狀態。如木於冬季亥子月水旺之時，吸納水氣而受益，為生長發育提供了條件，處於次旺狀態。 
        休：一事物因生另一事物而被泄氣，走入衰敗的狀態。如木被夏季巳午月旺火盜泄其氣而衰敗。 
        囚：事物失去生的源泉又克制不了當令之事物，導致自身力量比“休”更弱的狀態。如四季月之木，生木的水被當令之旺土重克，使木失去水之生力，木克土被土耗氣，但又戰不過旺土，故以失敗告終，像戰俘一樣反被囚禁起來。 
        死：一事物受到力量極強旺的另一事物重克，元氣傷盡，走向滅亡的狀態。如秋申酉月木被旺金重克而致毀折。 

        旺、相、休、囚、死的旺衰次序為：旺為最旺，相為次旺，休為小衰，囚為中衰，死為最衰。 
        記憶規律：當令者旺，令生者相，生令者休，克令者囚，令克者死。 

        旺為當令之氣；相為旺者之所生，間接有氣；休為旺者之前氣，表示功成身退之意；囚為克我者無力之氣，有時反而會被我所虜；死為我克之氣，我當旺之時彼最弱，所以以死喻之。
        土為什麼到每季的最后一個月才會興旺呢？這是因為木沒有土就不能生長，火沒有土就不光亮，金沒有土就不能形成，水沒有土就不能高升。所以金木水火要興旺，是離不開土的。所以土的特點是興旺於四季，位居中央，不固定在某個季節。
    */

    var 四時=四季;
    if (月令=="辰" || 月令=="未" || 月令=="戌" || 月令=="丑") 四時="季";

    switch (五行) {
        case "木":
            switch(四時){
                case "春": 
                    return "旺";
                case "夏": 
                    return "休";
                case "秋": 
                    return "死";
                case "冬": 
                    return "相";
                case "季": 
                    return "囚";
            }
        case "火":
            switch(四時){
                case "春": 
                    return "相";
                case "夏": 
                    return "旺";
                case "秋": 
                    return "囚";
                case "冬": 
                    return "死";
                case "季": 
                    return "休";
            }
        case "土":
            switch(四時){
                case "春": 
                    return "死";
                case "夏": 
                    return "相";
                case "秋": 
                    return "休";
                case "冬": 
                    return "囚";
                case "季": 
                    return "旺";
            }
        case "金":
            switch(四時){
                case "春": 
                    return "囚";
                case "夏": 
                    return "死";
                case "秋": 
                    return "旺";
                case "冬": 
                    return "休";
                case "季": 
                    return "相";
            }
        case "水":
            switch(四時){
                case "春": 
                    return "休";
                case "夏": 
                    return "囚";
                case "秋": 
                    return "相";
                case "冬": 
                    return "旺";
                case "季": 
                    return "死";
            }
    }

} // end function 五行四季旺相休囚死


function 五行滾動(五行, 滾動數) {
    if (滾動數 < 0) 滾動數 += 5;
    
    var 變化五行數= (五行字轉數(五行) + Number(滾動數)) % 5;
    return 五行數轉字(變化五行數);
}  // end function 五行滾動


function 五行生剋字轉數(五行生剋) {
    switch (五行生剋) {
        case "同我": return 0;
        case "我生": return 1;
        case "我剋": return 2;
        case "剋我": return 3;
        case "生我": return 4;
    }
}  // end function 五行生剋字轉數


function 五行生剋(五行1, 五行2) {
    // return 五行生剋關係, 同我, 我生, 我剋, 生我

    switch (五行1) {
        case "木":
            switch (五行2) {
                case "木": return "同我";
                case "火": return "我生";
                case "土": return "我剋";
                case "金": return "剋我";
                case "水": return "生我";
            } // end switch 木

        case "火":
            switch (五行2) {
                case "木": return "生我";
                case "火": return "同我";
                case "土": return "我生";
                case "金": return "我剋";
                case "水": return "剋我";
            } // end switch 火

        case "土":
            switch (五行2) {
                case "木": return "剋我";
                case "火": return "生我";
                case "土": return "同我";
                case "金": return "我生";
                case "水": return "我剋";
            } // end switch 土

        case "金":
            switch (五行2) {
                case "木": return "我剋";
                case "火": return "剋我";
                case "土": return "生我";
                case "金": return "同我";
                case "水": return "我生";
            } // end switch 金

        case "水":
            switch (五行2) {
                case "木": return "我生";
                case "火": return "我剋";
                case "土": return "剋我";
                case "金": return "生我";
                case "水": return "同我";
                   
            } // end switch 水
    }
}  // end function 五行生剋


function 生剋五行(輸入五行, 五行生剋){
    //輸入五行: 木=0, 火=1, 土=2, 金=3, 水=4
    //五行生剋: 我生, 我剋, 剋我, 生我, 同我
    // 生剋五行("木", "我剋"), return 土
    var 五行生剋數=五行生剋字轉數(五行生剋);
    return 五行滾動(輸入五行,五行生剋數);
}  // end function 生剋五行



//     *********************************************************************************
//                                         六十干支
//     *********************************************************************************

function 六十干支字轉值(干支) {
	if(干支=="--" || 干支=="xx" || 干支=="XX" || 干支=="oo" || 干支=="OO" || 干支=="") return "";
    switch (干支) {
        case "癸亥": return 0; 
        case "甲子": return 1;
        case "乙丑": return 2;
        case "丙寅": return 3;
        case "丁卯": return 4;
        case "戊辰": return 5;
        case "己巳": return 6;
        case "庚午": return 7;
        case "辛未": return 8;
        case "壬申": return 9;
        case "癸酉": return 10;
        case "甲戌": return 11;
        case "乙亥": return 12;
        case "丙子": return 13;
        case "丁丑": return 14;
        case "戊寅": return 15;
        case "己卯": return 16;
        case "庚辰": return 17;
        case "辛巳": return 18;
        case "壬午": return 19;
        case "癸未": return 20;
        case "甲申": return 21;
        case "乙酉": return 22;
        case "丙戌": return 23;
        case "丁亥": return 24;
        case "戊子": return 25;
        case "己丑": return 26;
        case "庚寅": return 27;
        case "辛卯": return 28;
        case "壬辰": return 29;
        case "癸巳": return 30;
        case "甲午": return 31;
        case "乙未": return 32;
        case "丙申": return 33;
        case "丁酉": return 34;
        case "戊戌": return 35;
        case "己亥": return 36;
        case "庚子": return 37;
        case "辛丑": return 38;
        case "壬寅": return 39;
        case "癸卯": return 40;
        case "甲辰": return 41;
        case "乙巳": return 42;
        case "丙午": return 43;
        case "丁未": return 44;
        case "戊申": return 45;
        case "己酉": return 46;
        case "庚戌": return 47;
        case "辛亥": return 48;
        case "壬子": return 49;
        case "癸丑": return 50;
        case "甲寅": return 51;
        case "乙卯": return 52;
        case "丙辰": return 53;
        case "丁巳": return 54;
        case "戊午": return 55;
        case "己未": return 56;
        case "庚申": return 57;
        case "辛酉": return 58;
        case "壬戌": return 59;
        default:
            alert("六十干支輸入名稱有問題！！")
    }
}  // end function 六十干支字轉值


function 干支滾動(干支數, 滾動數) {
	//if(干支數==-1) return "";
    
    if (滾動數 < -60) 滾動數 += 120;  //小運可以逆滾動超過60
    if (滾動數 < 0) 滾動數 += 60;
    
    return (Number(干支數) + Number(滾動數)) % 60;
} // end function 干支滾動


function 六十干支屬性(干支值, 選項) {
	if(干支值=="--" || 干支值=="xx" || 干支值=="XX" || 干支值=="oo" || 干支值=="OO" || 干支值==-1 || 干支值==="") return "";
    if(選項 === undefined) 選項=0; //default return the entire object
    var 干支數;
    if (isNaN(干支值)) 干支數 = 六十干支字轉值(干支值); else 干支數=干支值;
    if (干支數<0 || 干支數>59 || 干支數 === undefined){
        alert(干支值 + "：六十干支屬性 function 輸入的干支值 錯誤！選項：" + 選項);
        return "";
    }

    var 六十干支 = [
        { "干支": "癸亥", "係數": 0, "生肖": "豬", "五行": "水", "旬别": "甲寅", "符首": "癸", "旬序": 9, "納音": "大海水", "十二運": "水臨", "自運": "自臨", "干支關係": "專氣", "天干力度": 0.5, "地支力度": 0.5, "天剋地冲": "己巳", "生肖2": "林下之豬", "太歲": "虞程大將軍", "壽生經": "癸亥命欠錢七萬五千貫，看經二十五卷，納四十三庫，曹官姓仇"},
        { "干支": "甲子", "係數": 1, "生肖": "鼠", "五行": "金", "旬别": "甲子", "符首": "戊", "旬序": 0, "納音": "海中金", "十二運": "金死", "自運": "自死", "干支關係": "支生干", "天干力度": 0.2, "地支力度": -0.2, "天剋地冲": "庚午", "生肖2": "屋上之鼠", "太歲": "金辯大將軍", "壽生經": "甲子命欠錢五萬三千貫，看經十八卷，納三庫，曹官姓元"},
        { "干支": "乙丑", "係數": 2, "生肖": "牛", "五行": "金", "旬别": "甲子", "符首": "戊", "旬序": 1, "納音": "海中金", "十二運": "金墓", "自運": "自墓", "干支關係": "干剋支", "天干力度": -0.3, "地支力度": -0.5, "天剋地冲": "辛未", "生肖2": "海內之牛", "太歲": "陳材大將軍", "壽生經": "乙丑命欠錢二十八萬貫，看經九十四卷，納十三庫，曹官姓田"},
        { "干支": "丙寅", "係數": 3, "生肖": "虎", "五行": "火", "旬别": "甲子", "符首": "戊", "旬序": 2, "納音": "爐中火", "十二運": "火生", "自運": "自生", "干支關係": "支生干", "天干力度": 0.3, "地支力度": -0.3, "天剋地冲": "壬申", "生肖2": "山木之虎", "太歲": "耿章大將軍", "壽生經": "丙寅命欠錢八萬貫，看經二十七卷，納十庫，曹官姓馬"},
        { "干支": "丁卯", "係數": 4, "生肖": "兔", "五行": "火", "旬别": "甲子", "符首": "戊", "旬序": 3, "納音": "爐中火", "十二運": "火敗", "自運": "自敗", "干支關係": "支生干", "天干力度": 0.2, "地支力度": -0.2, "天剋地冲": "癸酉", "生肖2": "望月之兔", "太歲": "沈興大將軍", "壽生經": "丁卯命欠錢二萬三千貫，看經八卷，納十六庫，曹官姓許"},
        { "干支": "戊辰", "係數": 5, "生肖": "龍", "五行": "木", "旬别": "甲子", "符首": "戊", "旬序": 4, "納音": "大林木", "十二運": "木衰", "自運": "自衰", "干支關係": "專氣", "天干力度": 0.5, "地支力度": 0.5, "天剋地冲": "甲戌", "生肖2": "清溫之龍", "太歲": "趙達大將軍", "壽生經": "戊辰命欠錢五萬四千貫，看經十八卷，納十四庫，曹官姓馮"},
        { "干支": "己巳", "係數": 6, "生肖": "蛇", "五行": "木", "旬别": "甲子", "符首": "戊", "旬序": 5, "納音": "大林木", "十二運": "木病", "自運": "自病", "干支關係": "支生干", "天干力度": 0.3, "地支力度": -0.3, "天剋地冲": "乙亥", "生肖2": "福氣之蛇", "太歲": "郭燦大將軍", "壽生經": "己巳命欠錢七萬二千貫，看經二十四卷，納二十二庫，曹官姓曹"},
        { "干支": "庚午", "係數": 7, "生肖": "馬", "五行": "土", "旬别": "甲子", "符首": "戊", "旬序": 6, "納音": "路旁土", "十二運": "土旺", "自運": "自旺", "干支關係": "支剋干", "天干力度": -0.5, "地支力度": -0.25, "天剋地冲": "丙子", "生肖2": "堂裹之馬", "太歲": "王濟大將軍", "壽生經": "庚午命欠錢六萬二千貫，看經二十一卷，納四十二庫，曹官姓陳"},
        { "干支": "辛未", "係數": 8, "生肖": "羊", "五行": "土", "旬别": "甲子", "符首": "戊", "旬序": 7, "納音": "路旁土", "十二運": "土衰", "自運": "自衰", "干支關係": "支生干", "天干力度": 0.2, "地支力度": -0.2, "天剋地冲": "丁丑", "生肖2": "得祿之羊", "太歲": "李素大將軍", "壽生經": "辛未命欠錢十萬一千貫，看經三十四卷，納五十九庫，曹官姓常"},
        { "干支": "壬申", "係數": 9, "生肖": "猴", "五行": "金", "旬别": "甲子", "符首": "戊", "旬序": 8, "納音": "劍鋒金", "十二運": "金臨", "自運": "自臨", "干支關係": "支生干", "天干力度": 0.3, "地支力度": -0.3, "天剋地冲": "戊寅", "生肖2": "清透之猴", "太歲": "劉旺大將軍", "壽生經": "壬申命欠錢四萬二千貫，看經十四卷，納四十九庫，曹官姓王"},
        { "干支": "癸酉", "係數": 10, "生肖": "雞", "五行": "金", "旬别": "甲子", "符首": "戊", "旬序": 9, "納音": "劍鋒金", "十二運": "金旺", "自運": "自旺", "干支關係": "支生干", "天干力度": 0.2, "地支力度": -0.2, "天剋地冲": "己卯", "生肖2": "樓宿之雞", "太歲": "康志大將軍", "壽生經": "癸酉命欠錢五萬貫，看經十七卷，納十二庫，曹官姓申"},
        { "干支": "甲戌", "係數": 11, "生肖": "狗", "五行": "火", "旬别": "甲戌", "符首": "己", "旬序": 0, "納音": "山頭火", "十二運": "火墓", "自運": "自墓", "干支關係": "干剋支", "天干力度": -0.3, "地支力度": -0.5, "天剋地冲": "庚辰", "生肖2": "守身之狗", "太歲": "施廣大將軍", "壽生經": "甲戌命欠錢二萬七千貫，看經九卷，納十七庫，曹官姓井"},
        { "干支": "乙亥", "係數": 12, "生肖": "豬", "五行": "火", "旬别": "甲戌", "符首": "己", "旬序": 1, "納音": "山頭火", "十二運": "火絕", "自運": "自絕", "干支關係": "支生干", "天干力度": 0.3, "地支力度": -0.3, "天剋地冲": "辛巳", "生肖2": "過往之豬", "太歲": "任保大將軍", "壽生經": "乙亥命欠錢四萬八千貫，看經十六卷，納四十二庫，曹官姓成"},
        { "干支": "丙子", "係數": 13, "生肖": "鼠", "五行": "水", "旬别": "甲戌", "符首": "己", "旬序": 2, "納音": "澗下水", "十二運": "水旺", "自運": "自旺", "干支關係": "支剋干", "天干力度": -0.5, "地支力度": -0.25, "天剋地冲": "壬午", "生肖2": "田內之鼠", "太歲": "郭嘉大將軍", "壽生經": "丙子命欠錢七萬三千貫，看經二十五卷，納九庫，曹官姓王"},
        { "干支": "丁丑", "係數": 14, "生肖": "牛", "五行": "水", "旬别": "甲戌", "符首": "己", "旬序": 3, "納音": "澗下水", "十二運": "水衰", "自運": "自衰", "干支關係": "干生支", "天干力度": -0.3, "地支力度": 0.3, "天剋地冲": "癸未", "生肖2": "湖內之牛", "太歲": "汪文大將軍", "壽生經": "丁丑命欠錢四萬二千貫，看經十五卷，納三庫，曹官姓崔"},
        { "干支": "戊寅", "係數": 15, "生肖": "虎", "五行": "土", "旬别": "甲戌", "符首": "己", "旬序": 4, "納音": "城牆土", "十二運": "土生", "自運": "自生", "干支關係": "支剋干", "天干力度": -0.5, "地支力度": -0.25, "天剋地冲": "甲申", "生肖2": "過山之虎", "太歲": "魯先大將軍", "壽生經": "戊寅命欠錢六萬貫，看經二十卷，納十一庫，曹官姓鄭"},
        { "干支": "己卯", "係數": 16, "生肖": "兔", "五行": "土", "旬别": "甲戌", "符首": "己", "旬序": 5, "納音": "城牆土", "十二運": "土敗", "自運": "自敗", "干支關係": "支剋干", "天干力度": -0.5, "地支力度": -0.25, "天剋地冲": "乙酉", "生肖2": "山林之兔", "太歲": "龍仲大將軍", "壽生經": "己卯命欠錢八萬貫，看經二十七卷，納二十六庫，曹官姓宋"},
        { "干支": "庚辰", "係數": 17, "生肖": "龍", "五行": "金", "旬别": "甲戌", "符首": "己", "旬序": 6, "納音": "白蠟金", "十二運": "金養", "自運": "自養", "干支關係": "支生干", "天干力度": 0.2, "地支力度": -0.2, "天剋地冲": "丙戌", "生肖2": "恕性之龍", "太歲": "董德大將軍", "壽生經": "庚辰命欠錢五萬七千貫，看經十九卷，納二十四庫，曹官姓劉"},
        { "干支": "辛巳", "係數": 18, "生肖": "蛇", "五行": "金", "旬别": "甲戌", "符首": "己", "旬序": 7, "納音": "白蠟金", "十二運": "金生", "自運": "自生", "干支關係": "支剋干", "天干力度": -0.5, "地支力度": -0.25, "天剋地冲": "丁亥", "生肖2": "冬藏之蛇", "太歲": "鄭但大將軍", "壽生經": "辛巳命欠錢五萬七千貫，看經十九卷，納三十七庫，曹官姓高"},
        { "干支": "壬午", "係數": 19, "生肖": "馬", "五行": "木", "旬别": "甲戌", "符首": "己", "旬序": 8, "納音": "楊柳木", "十二運": "木死", "自運": "自死", "干支關係": "干剋支", "天干力度": -0.3, "地支力度": -0.45, "天剋地冲": "戊子", "生肖2": "軍中之馬", "太歲": "陸明大將軍", "壽生經": "壬午命欠錢七萬貫，看經二十四卷，納四十四庫，曹官姓孔"},
        { "干支": "癸未", "係數": 20, "生肖": "羊", "五行": "木", "旬别": "甲戌", "符首": "己", "旬序": 9, "納音": "楊柳木", "十二運": "木墓", "自運": "自墓", "干支關係": "支剋干", "天干力度": -0.5, "地支力度": -0.25, "天剋地冲": "己丑", "生肖2": "群內之羊", "太歲": "魏仁大將軍", "壽生經": "癸未命欠錢五萬二千貫，看經十八卷，納四十九庫，曹官姓朱"},
        { "干支": "甲申", "係數": 21, "生肖": "猴", "五行": "水", "旬别": "甲申", "符首": "庚", "旬序": 0, "納音": "泉中水", "十二運": "水生", "自運": "自生", "干支關係": "支剋干", "天干力度": -0.5, "地支力度": -0.25, "天剋地冲": "庚寅", "生肖2": "過樹之猴", "太歲": "方傑大將軍", "壽生經": "甲申命欠錢七萬貫，看經二十四卷，納五十六庫，曹官姓呂"},
        { "干支": "乙酉", "係數": 22, "生肖": "雞", "五行": "水", "旬别": "甲申", "符首": "庚", "旬序": 1, "納音": "泉中水", "十二運": "水敗", "自運": "自敗", "干支關係": "支剋干", "天干力度": -0.5, "地支力度": -0.25, "天剋地冲": "辛卯", "生肖2": "唱午之雞", "太歲": "蔣崇大將軍", "壽生經": "乙酉命欠錢四萬貫，看經十四卷，納二庫，曹官姓安"},
        { "干支": "丙戌", "係數": 23, "生肖": "狗", "五行": "土", "旬别": "甲申", "符首": "庚", "旬序": 2, "納音": "屋上土", "十二運": "土墓", "自運": "自墓", "干支關係": "干生支", "天干力度": -0.25, "地支力度": 0.3, "天剋地冲": "壬辰", "生肖2": "自眠之狗", "太歲": "白敏大將軍", "壽生經": "丙戌命欠錢八萬貫，看經二十七卷，納三庫，曹官姓左"},
        { "干支": "丁亥", "係數": 24, "生肖": "豬", "五行": "土", "旬别": "甲申", "符首": "庚", "旬序": 3, "納音": "屋上土", "十二運": "土絕", "自運": "自絕", "干支關係": "支剋干", "天干力度": -0.5, "地支力度": -0.25, "天剋地冲": "癸巳", "生肖2": "過山之豬", "太歲": "封濟大將軍", "壽生經": "丁亥命欠錢三萬九千貫，看經十三卷，納四十庫，曹官姓吉"},
        { "干支": "戊子", "係數": 25, "生肖": "鼠", "五行": "火", "旬别": "甲申", "符首": "庚", "旬序": 4, "納音": "霹靂火", "十二運": "火胎", "自運": "自胎", "干支關係": "干剋支", "天干力度": -0.3, "地支力度": -0.45, "天剋地冲": "甲午", "生肖2": "倉內之鼠", "太歲": "鄒鐺大將軍", "壽生經": "戊子命欠錢六萬三千貫，看經二十一卷，納六庫，曹官姓伍"},
        { "干支": "己丑", "係數": 26, "生肖": "牛", "五行": "火", "旬别": "甲申", "符首": "庚", "旬序": 5, "納音": "霹靂火", "十二運": "火養", "自運": "自養", "干支關係": "專氣", "天干力度": 0.5, "地支力度": 0.5, "天剋地冲": "乙未", "生肖2": "欄內之牛", "太歲": "傅佑大將軍", "壽生經": "己丑命欠錢八萬貫，看經二十七卷，納七庫，曹官姓周"},
        { "干支": "庚寅", "係數": 27, "生肖": "虎", "五行": "木", "旬别": "甲申", "符首": "庚", "旬序": 6, "納音": "松柏木", "十二運": "木臨", "自運": "自臨", "干支關係": "干剋支", "天干力度": -0.3, "地支力度": -0.45, "天剋地冲": "丙申", "生肖2": "出山之虎", "太歲": "鄔桓大將軍", "壽生經": "庚寅命欠錢五萬一千貫，看經十七卷，納十五庫，曹官姓毛"},
        { "干支": "辛卯", "係數": 28, "生肖": "兔", "五行": "木", "旬别": "甲申", "符首": "庚", "旬序": 7, "納音": "松柏木", "十二運": "木旺", "自運": "自旺", "干支關係": "干剋支", "天干力度": -0.3, "地支力度": -0.45, "天剋地冲": "丁酉", "生肖2": "蟾窟之兔", "太歲": "范甯大將軍", "壽生經": "辛卯命欠錢八萬貫，看經二十七卷，納四庫，曹官姓張"},
        { "干支": "壬辰", "係數": 29, "生肖": "龍", "五行": "水", "旬别": "甲申", "符首": "庚", "旬序": 8, "納音": "長流水", "十二運": "水墓", "自運": "自墓", "干支關係": "支剋干", "天干力度": -0.4, "地支力度": -0.3, "天剋地冲": "戊戌", "生肖2": "行雨之龍", "太歲": "彭泰大將軍", "壽生經": "壬辰命欠錢四萬五千貫，看經十五卷，納一庫，曹官姓趙"},
        { "干支": "癸巳", "係數": 30, "生肖": "蛇", "五行": "水", "旬别": "甲申", "符首": "庚", "旬序": 9, "納音": "長流水", "十二運": "水絕", "自運": "自絕", "干支關係": "干剋支", "天干力度": -0.3, "地支力度": -0.45, "天剋地冲": "己亥", "生肖2": "草中之蛇", "太歲": "徐單大將軍", "壽生經": "癸巳命欠錢三萬九千貫，看經十三卷，納五十庫，曹官姓卞"},
        { "干支": "甲午", "係數": 31, "生肖": "馬", "五行": "金", "旬别": "甲午", "符首": "辛", "旬序": 0, "納音": "沙中金", "十二運": "金敗", "自運": "自敗", "干支關係": "干生支", "天干力度": -0.3, "地支力度": 0.3, "天剋地冲": "庚子", "生肖2": "雲中之馬", "太歲": "章詞大將軍", "壽生經": "甲午命欠錢四萬貫，看經十四卷，納二十一庫，曹官姓牛"},
        { "干支": "乙未", "係數": 32, "生肖": "羊", "五行": "金", "旬别": "甲午", "符首": "辛", "旬序": 1, "納音": "沙中金", "十二運": "金冠", "自運": "自冠", "干支關係": "干剋支", "天干力度": -0.3, "地支力度": -0.5, "天剋地冲": "辛丑", "生肖2": "敬重之羊", "太歲": "楊仙大將軍", "壽生經": "乙未命欠錢四萬貫，看經十四卷，納五十一庫，曹官姓皇"},
        { "干支": "丙申", "係數": 33, "生肖": "猴", "五行": "火", "旬别": "甲午", "符首": "辛", "旬序": 2, "納音": "山下火", "十二運": "火病", "自運": "自病", "干支關係": "干剋支", "天干力度": -0.3, "地支力度": -0.45, "天剋地冲": "壬寅", "生肖2": "山上之猴", "太歲": "管仲大將軍", "壽生經": "丙申命欠錢三萬三千貫，看經十一卷，納五十七庫，曹官姓鈕"},
        { "干支": "丁酉", "係數": 34, "生肖": "雞", "五行": "火", "旬别": "甲午", "符首": "辛", "旬序": 3, "納音": "山下火", "十二運": "火死", "自運": "自死", "干支關係": "干剋支", "天干力度": -0.3, "地支力度": -0.45, "天剋地冲": "癸卯", "生肖2": "獨立之雞", "太歲": "唐傑大將軍", "壽生經": "丁酉命欠錢十七萬貫，看經五十七卷，納二十九庫，曹官姓胡"},
        { "干支": "戊戌", "係數": 35, "生肖": "狗", "五行": "木", "旬别": "甲午", "符首": "辛", "旬序": 4, "納音": "平地木", "十二運": "木養", "自運": "自養", "干支關係": "專氣", "天干力度": 0.5, "地支力度": 0.5, "天剋地冲": "甲辰", "生肖2": "進山之狗", "太歲": "姜武大將軍", "壽生經": "戊戌命欠錢四萬二千貫，看經十四卷，納三十六庫，曹官姓晉"},
        { "干支": "己亥", "係數": 36, "生肖": "豬", "五行": "木", "旬别": "甲午", "符首": "辛", "旬序": 5, "納音": "平地木", "十二運": "木生", "自運": "自生", "干支關係": "干剋支", "天干力度": -0.3, "地支力度": -0.45, "天剋地冲": "乙巳", "生肖2": "道院之豬", "太歲": "謝太大將軍", "壽生經": "己亥命欠錢七萬二千貫，看經二十四卷，納五十庫，曹官姓卞"},
        { "干支": "庚子", "係數": 37, "生肖": "鼠", "五行": "土", "旬别": "甲午", "符首": "辛", "旬序": 6, "納音": "壁上土", "十二運": "土旺", "自運": "自旺", "干支關係": "干生支", "天干力度": -0.3, "地支力度": 0.3, "天剋地冲": "丙午", "生肖2": "梁上之鼠", "太歲": "盧秘大將軍", "壽生經": "庚子命欠錢十一萬貫，看經三十七卷，納九庫，曹官姓李"},
        { "干支": "辛丑", "係數": 38, "生肖": "牛", "五行": "土", "旬别": "甲午", "符首": "辛", "旬序": 7, "納音": "壁上土", "十二運": "土養", "自運": "自養", "干支關係": "支生干", "天干力度": 0.3, "地支力度": -0.3, "天剋地冲": "丁未", "生肖2": "路途之牛", "太歲": "楊信大將軍", "壽生經": "辛丑命欠錢十一萬貫，看經三十七卷，納十八庫，曹官姓吉"},
        { "干支": "壬寅", "係數": 39, "生肖": "虎", "五行": "金", "旬别": "甲午", "符首": "辛", "旬序": 8, "納音": "金箔金", "十二運": "金絕", "自運": "自絕", "干支關係": "干生支", "天干力度": -0.3, "地支力度": 0.3, "天剋地冲": "戊申", "生肖2": "過林之虎", "太歲": "賀諤大將軍", "壽生經": "壬寅命欠錢九萬六千貫，看經三十二卷，納十一庫，曹官姓施"},
        { "干支": "癸卯", "係數": 40, "生肖": "兔", "五行": "金", "旬别": "甲午", "符首": "辛", "旬序": 9, "納音": "金箔金", "十二運": "金胎", "自運": "自胎", "干支關係": "干生支", "天干力度": -0.3, "地支力度": 0.3, "天剋地冲": "己酉", "生肖2": "山林之兔", "太歲": "皮時大將軍", "壽生經": "癸卯命欠錢三萬三千貫，看經十一卷，納二十二庫，曹官姓王"},
        { "干支": "甲辰", "係數": 41, "生肖": "龍", "五行": "火", "旬别": "甲辰", "符首": "壬", "旬序": 0, "納音": "覆燈火", "十二運": "火冠", "自運": "自冠", "干支關係": "干剋支", "天干力度": 0, "地支力度": -0.7, "天剋地冲": "庚戌", "生肖2": "伏潭之龍", "太歲": "李誠大將軍", "壽生經": "甲辰命欠錢二萬九千貫，看經十卷，納十九庫，曹官姓董"},
        { "干支": "乙巳", "係數": 42, "生肖": "蛇", "五行": "火", "旬别": "甲辰", "符首": "壬", "旬序": 1, "納音": "覆燈火", "十二運": "火臨", "自運": "自臨", "干支關係": "干生支", "天干力度": -0.3, "地支力度": 0.3, "天剋地冲": "辛亥", "生肖2": "出穴之蛇", "太歲": "吳遂大將軍", "壽生經": "乙巳命欠錢九萬貫，看經三十卷，納二十一庫，曹官姓楊"},
        { "干支": "丙午", "係數": 43, "生肖": "馬", "五行": "水", "旬别": "甲辰", "符首": "壬", "旬序": 2, "納音": "天河水", "十二運": "水胎", "自運": "自胎", "干支關係": "專氣", "天干力度": 0.5, "地支力度": 0.5, "天剋地冲": "壬子", "生肖2": "行路之馬", "太歲": "文哲大將軍", "壽生經": "丙午命欠錢五萬三千貫，看經十八卷，納六十庫，曹官姓蕭"},
        { "干支": "丁未", "係數": 44, "生肖": "羊", "五行": "水", "旬别": "甲辰", "符首": "壬", "旬序": 3, "納音": "天河水", "十二運": "水養", "自運": "自養", "干支關係": "干生支", "天干力度": 0, "地支力度": 0.3, "天剋地冲": "癸丑", "生肖2": "失群之羊", "太歲": "繆丙大將軍", "壽生經": "丁未命欠錢九萬一千貫，看經三十一卷，納五十八庫，曹官姓朱"},
        { "干支": "戊申", "係數": 45, "生肖": "猴", "五行": "土", "旬别": "甲辰", "符首": "壬", "旬序": 4, "納音": "大驛土", "十二運": "土病", "自運": "自病", "干支關係": "干生支", "天干力度": -0.3, "地支力度": 0.3, "天剋地冲": "甲寅", "生肖2": "獨立之猴", "太歲": "徐浩大將軍", "壽生經": "戊申命欠錢八萬貫，看經二十七卷，納五十八庫，曹官姓柴"},
        { "干支": "己酉", "係數": 46, "生肖": "雞", "五行": "土", "旬别": "甲辰", "符首": "壬", "旬序": 5, "納音": "大驛土", "十二運": "土死", "自運": "自死", "干支關係": "干生支", "天干力度": -0.3, "地支力度": 0.3, "天剋地冲": "乙卯", "生肖2": "報曉之雞", "太歲": "程寶大將軍", "壽生經": "己酉命欠錢九萬貫，看經三十卷，納二十二庫，曹官姓孫"},
        { "干支": "庚戌", "係數": 47, "生肖": "狗", "五行": "金", "旬别": "甲辰", "符首": "壬", "旬序": 6, "納音": "釵釧金", "十二運": "金衰", "自運": "自衰", "干支關係": "支生干", "天干力度": 0.3, "地支力度": -0.3, "天剋地冲": "丙辰", "生肖2": "寺觀之狗", "太歲": "倪秘大將軍", "壽生經": "庚戌命欠錢十一萬貫，看經三十七卷，納二庫，曹官姓辛"},
        { "干支": "辛亥", "係數": 48, "生肖": "豬", "五行": "金", "旬别": "甲辰", "符首": "壬", "旬序": 7, "納音": "釵釧金", "十二運": "金病", "自運": "自病", "干支關係": "干生支", "天干力度": -0.3, "地支力度": 0.3, "天剋地冲": "丁巳", "生肖2": "圈裡之豬", "太歲": "葉堅大將軍", "壽生經": "辛亥命欠錢七萬一千貫，看經二十四卷，納四十庫，曹官姓卞"},
        { "干支": "壬子", "係數": 49, "生肖": "鼠", "五行": "木", "旬别": "甲辰", "符首": "壬", "旬序": 8, "納音": "桑柘木", "十二運": "木敗", "自運": "自敗", "干支關係": "專氣", "天干力度": 0.5, "地支力度": 0.5, "天剋地冲": "戊午", "生肖2": "山上之鼠", "太歲": "丘德大將軍", "壽生經": "壬子命欠錢七萬貫，看經二十四卷，納三庫，曹官姓孟"},
        { "干支": "癸丑", "係數": 50, "生肖": "牛", "五行": "木", "旬别": "甲辰", "符首": "壬", "旬序": 9, "納音": "桑柘木", "十二運": "木冠", "自運": "自冠", "干支關係": "支剋干", "天干力度": -0.4, "地支力度": -0.3, "天剋地冲": "己未", "生肖2": "欄內之牛", "太歲": "朱得大將軍", "壽生經": "癸丑命欠錢二萬七千貫，看經九卷，納八三庫，曹官姓習"},
        { "干支": "甲寅", "係數": 51, "生肖": "虎", "五行": "水", "旬别": "甲寅", "符首": "癸", "旬序": 0, "納音": "大溪水", "十二運": "水病", "自運": "自病", "干支關係": "專氣", "天干力度": 0.5, "地支力度": 0.5, "天剋地冲": "庚申", "生肖2": "立定之虎", "太歲": "張朝大將軍", "壽生經": "甲寅命欠錢三萬三千貫，看經十一卷，納十一庫，曹官姓杜"},
        { "干支": "乙卯", "係數": 52, "生肖": "兔", "五行": "水", "旬别": "甲寅", "符首": "癸", "旬序": 1, "納音": "大溪水", "十二運": "水死", "自運": "自死", "干支關係": "專氣", "天干力度": 0.5, "地支力度": 0.5, "天剋地冲": "辛酉", "生肖2": "得道之兔", "太歲": "萬清大將軍", "壽生經": "乙卯命欠錢八萬貫，看經二十七卷，納十八庫，曹官姓柳"},
        { "干支": "丙辰", "係數": 53, "生肖": "龍", "五行": "土", "旬别": "甲寅", "符首": "癸", "旬序": 2, "納音": "沙中土", "十二運": "土冠", "自運": "自冠", "干支關係": "干生支", "天干力度": -0.3, "地支力度": 0.3, "天剋地冲": "壬戌", "生肖2": "天上之龍", "太歲": "辛亞大將軍", "壽生經": "丙辰命欠錢三萬二千貫，看經十一卷，納三十三庫，曹官姓賈"},
        { "干支": "丁巳", "係數": 54, "生肖": "蛇", "五行": "土", "旬别": "甲寅", "符首": "癸", "旬序": 3, "納音": "沙中土", "十二運": "土臨", "自運": "自臨", "干支關係": "專氣", "天干力度": 0.5, "地支力度": 0.5, "天剋地冲": "癸亥", "生肖2": "塘內之蛇", "太歲": "楊彥大將軍", "壽生經": "丁巳命欠錢七萬貫，看經二十四卷，納十六庫，曹官姓程"},
        { "干支": "戊午", "係數": 55, "生肖": "馬", "五行": "火", "旬别": "甲寅", "符首": "癸", "旬序": 4, "納音": "天上火", "十二運": "火旺", "自運": "自旺", "干支關係": "支生干", "天干力度": 0.3, "地支力度": -0.3, "天剋地冲": "甲子", "生肖2": "廊內之馬", "太歲": "黎卿大將軍", "壽生經": "戊午命欠錢九萬貫，看經三十卷，納三十九庫，曹官姓史"},
        { "干支": "己未", "係數": 56, "生肖": "羊", "五行": "火", "旬别": "甲寅", "符首": "癸", "旬序": 5, "納音": "天上火", "十二運": "火衰", "自運": "自衰", "干支關係": "專氣", "天干力度": 0.5, "地支力度": 0.5, "天剋地冲": "乙丑", "生肖2": "草野之羊", "太歲": "傅黨大將軍", "壽生經": "己未命欠錢四萬三千貫，看經十五卷，納五庫，曹官姓卞"},
        { "干支": "庚申", "係數": 57, "生肖": "猴", "五行": "木", "旬别": "甲寅", "符首": "癸", "旬序": 6, "納音": "石榴木", "十二運": "木絕", "自運": "自絕", "干支關係": "專氣", "天干力度": 0.5, "地支力度": 0.5, "天剋地冲": "丙寅", "生肖2": "食果之猴", "太歲": "毛梓大將軍", "壽生經": "庚申命欠錢六萬一千貫，看經二十一卷，納四十二庫，曹官姓胡"},
        { "干支": "辛酉", "係數": 58, "生肖": "雞", "五行": "木", "旬别": "甲寅", "符首": "癸", "旬序": 7, "納音": "石榴木", "十二運": "木胎", "自運": "自胎", "干支關係": "專氣", "天干力度": 0.5, "地支力度": 0.5, "天剋地冲": "丁卯", "生肖2": "籠內之雞", "太歲": "石政大將軍", "壽生經": "辛酉命欠錢二萬七千貫，看經九卷，納十五庫，曹官姓丁"},
        { "干支": "壬戌", "係數": 59, "生肖": "狗", "五行": "水", "旬别": "甲寅", "符首": "癸", "旬序": 8, "納音": "大海水", "十二運": "水冠", "自運": "自冠", "干支關係": "支剋干", "天干力度": -0.4, "地支力度": -0.3, "天剋地冲": "戊辰", "生肖2": "顧家之狗", "太歲": "洪充大將軍", "壽生經": "壬戌命欠錢七萬二千貫，看經二十四卷，納四十庫，曹官姓彭"}
    ];
	
    switch (選項) {
        case 0: case "元件":
            return 六十干支[干支數];
        case 1: case "干支":
            return 六十干支[干支數].干支;
        case 2: case "五行":
            return 六十干支[干支數].五行;
        case 3: case "納音":
            return 六十干支[干支數].納音;
        case 4: case "太歲":
            return 六十干支[干支數].太歲;
        case 5: case "干支關係":
            return 六十干支[干支數].干支關係;
        case 6: case "天干力度":
            return 六十干支[干支數].天干力度;
        case 7: case "地支力度":
            return 六十干支[干支數].地支力度;
        case 8: case "天剋地冲":
            return 六十干支[干支數].天剋地冲;
        case 9: case "生肖":
            return 六十干支[干支數].生肖;
        case 10: case "生肖2":
            return 六十干支[干支數].生肖2;
        case 11: case "旬別":
            return 六十干支[干支數].旬別;
        case 12: case "旬序":
            return 六十干支[干支數].旬序;
        case 13: case "符首":
            return 六十干支[干支數].符首;
        case 14: case "壽生經":
            return 六十干支[干支數].壽生經;
        default:
            alert(選項 + "：六十干支屬性 function 選項輸入錯誤！！");
            return "";
    }
}  // end function 六十干支屬性


function 干支相合(干支){
    switch(干支){
        case "甲午":
            return "干支合,土,甲午,甲己";
        case "乙巳":
            return "干支合,金,乙巳,乙庚";
        case "丙戌":
            return "干支合,水,丙戌,丙辛";
        case "丁亥":
            return "干支合,木,丁亥,丁壬";
        case "戊子":
            return "干支合,火,戊子,戊癸";
        case "戊辰":
            return "干支合,火,戊辰,戊癸";
        case "己亥":
            return "干支合,土,己亥,己甲";
        case "庚辰":
            return "干支合,金,庚辰,庚乙";
        case "辛巳":
            return "干支合,水,辛巳,辛丙";
        case "壬午":
            return "干支合,木,壬午,壬丁";
        case "壬戌":
            return "干支合,木,壬戌,壬丁";
        case "癸巳":
            return "干支合,火,癸巳,癸戊";
        default:
            return "";
           
    }
}  // end function 干支相合


function 節氣字轉值(節氣) {
    /*    if (isNaN(干支值)) 干支數 = 六十干支字轉值(干支值); else 干支數=干支值;
    if (干支數<0 || 干支數>59 || 干支數 === undefined){
        alert(干支值 + "：六十干支屬性 function 輸入的干支值 錯誤！");
        return "";
    }
    */
    switch (節氣) {
        case "立春": return 0;
        case "雨水": return 1;
        case "驚蟄": return 2;
        case "春分": return 3;
        case "清明": return 4;
        case "穀雨": return 5;
        case "立夏": return 6;
        case "小滿": return 7;
        case "芒種": return 8;
        case "夏至": return 9;
        case "小暑": return 10;
        case "大暑": return 11;
        case "立秋": return 12;
        case "處暑": return 13;
        case "白露": return 14;
        case "秋分": return 15;
        case "寒露": return 16;
        case "霜降": return 17;
        case "立冬": return 18;
        case "小雪": return 19;
        case "大雪": return 20;
        case "冬至": return 21;
        case "小寒": return 22;
        case "大寒": return 23;
        default:
            alert(節氣+"：節氣名稱 出現錯誤");
    }
} // end function 節氣字轉值

    
// ******************** jQuery & CSS Functions **********************
function 干支五行字體顏色(干支五行, 選項){
    var CSS, ColorCode;
    
        switch(干支五行){
            case "木": case "甲": case "乙": case "寅": case "卯":
                CSS = "五行顏色木";
                ColorCode="#009900";
                ColorLight="#98FB98";
                ColorMedium="#32CD32";
                ColorAlt="#00FA9A";
                break;
            case "火": case "丙": case "丁": case "巳": case "午":
                CSS = "五行顏色火";
                ColorCode="#CC0000";
                ColorLight="#FFDDDD"; //wave
                ColorMedium="#FF4444"; //text color
                ColorAlt="#FFAAAA"; //wave text color
                break;
            case "土": case "戊": case "己": case "丑": case "辰": case "未": case "戌":
                CSS = "五行顏色土";
                ColorCode="#663300";
                ColorLight="#DEB887";
                ColorMedium="#B8860B";
                ColorAlt="#CD853F";
                break;
            case "金": case "庚": case "辛": case "申": case "酉":
                CSS = "五行顏色金";
                ColorCode="#FF9900";
                ColorLight="#F5DEB3";
                ColorMedium="#FFA500";
                ColorAlt="#FFD700";
                break;
            case "水": case "壬": case "癸": case "亥": case "子":
                CSS = "五行顏色水";
                ColorCode="#0066FF";
                ColorLight="#ADD8E6";
                ColorMedium="#00FFFF";
                ColorAlt="#E0FFFF";
                break;
            //default:
            //    alert(干支五行 + "：干支五行字體顏色 function 的 干支五行 輸入錯誤 ！");
            //    return "";
        }
        
        switch(選項){
            case "CSS" :
                return CSS;
            case "ColorCode":
                return ColorCode;
            case "ColorLight":
                return ColorLight;
            case "ColorMedium":
                return ColorMedium;
            case "ColorAlt":
                return ColorAlt;
            default:
                alert(選項 + "：干支五行字體顏色 function 的 選項 輸入錯誤 ！");
                return "";
        }  
}  // function 干支五行字體顏色




function 干支尋旬首(尋求干支){
    // ********************* 奇門遁甲 *********************
    var 旬別, 符首, 符頭, 節氣三元數, 節氣三元;

    switch(尋求干支){
        case "甲子": case "乙丑": case "丙寅": case "丁卯": case "戊辰":
            旬別 = "甲子"; 符首 = "戊"; 符頭 = "甲子"; 節氣三元數 = 1;
            break;
        case "己巳": case "庚午": case "辛未": case "壬申": case "癸酉":
            旬別 = "甲子"; 符首 = "戊"; 符頭 = "己巳"; 節氣三元數 = 2;
            break;
        case "甲戌": case "乙亥": case "丙子": case "丁丑": case "戊寅":
            旬別 = "甲戌"; 符首 = "己"; 符頭 = "甲戌"; 節氣三元數 = 3;
            break;
        case "己卯": case "庚辰": case "辛巳": case "壬午": case "癸未":
            旬別 = "甲戌"; 符首 = "己"; 符頭 = "己卯"; 節氣三元數 = 1;
            break;
        case "甲申": case "乙酉": case "丙戌": case "丁亥": case "戊子":
            旬別 = "甲申"; 符首 = "庚"; 符頭 = "甲申"; 節氣三元數 = 2;
            break;
        case "己丑": case "庚寅": case "辛卯": case "壬辰": case "癸巳":
            旬別 = "甲申"; 符首 = "庚"; 符頭 = "己丑"; 節氣三元數 = 3;
            break;
        case "甲午": case "乙未": case "丙申": case "丁酉": case "戊戌":
            旬別 = "甲午"; 符首 = "辛"; 符頭 = "甲午"; 節氣三元數 = 1;
            break;
        case "己亥": case "庚子": case "辛丑": case "壬寅": case "癸卯":
            旬別 = "甲午"; 符首 = "辛"; 符頭 = "己亥"; 節氣三元數 = 2;
            break;
        case "甲辰": case "乙巳": case "丙午": case "丁未": case "戊申":
            旬別 = "甲辰"; 符首 = "壬"; 符頭 = "甲辰"; 節氣三元數 = 3;
            break;
        case "己酉": case "庚戌": case "辛亥": case "壬子": case "癸丑":
            旬別 = "甲辰"; 符首 = "壬"; 符頭 = "己酉"; 節氣三元數 = 1;
            break;
        case "甲寅": case "乙卯": case "丙辰": case "丁巳": case "戊午":
            旬別 = "甲寅"; 符首 = "癸"; 符頭 = "甲寅"; 節氣三元數 = 2;
            break;
        case "己未": case "庚申": case "辛酉": case "壬戌": case "癸亥":
            旬別 = "甲寅"; 符首 = "癸"; 符頭 = "己未"; 節氣三元數 = 3;
            break;
    } // end switch

    switch(節氣三元數){
        case 1: 節氣三元="上"; break;
        case 2: 節氣三元="中"; break;
        case 3: 節氣三元="下"; break;
        default: 節氣三元="";
    } // end switch

    var 計算結果 = {
        "旬別": 旬別,
        "符首": 符首,
        "符頭": 符頭,
        "節氣三元": 節氣三元,
        "節氣三元數": 節氣三元數
    } // end 計算結果

    return 計算結果;
} // end function 干支尋旬首





//----------------------
function 量規更新數據(){
    return 99;
}
