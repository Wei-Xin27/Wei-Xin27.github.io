function 道教誦經元件(EventTitle, AllDay, EventColor, Eventid, EventStart, EventEnd) {
    if(Eventid == undefined) Eventid = 0;
    if(AllDay == undefined) AllDay = true;
    
    this.title = EventTitle;
    this.start = EventStart;
    this.allDay = AllDay;
    this.id = Eventid;
    
    if(EventColor != undefined) this.color = EventColor;
    if(EventEnd != undefined) this.end = EventEnd;
} // end function 道教誦經元件


function 道教誦經節日(DateRangeObj, 節日設定){
    var EventArry = [];
    var CurDate = new Date(DateRangeObj.dateStart);
    
    var EvalDate = {
        "運算西曆": CurDate,
        "城市": "吉隆坡",
        "節氣用區域時間": false,
        "節氣用軌道太陽時": false,
        
        //use by 西曆轉換農曆 function
        "夜子時": false,
        "生日用真太陽時": false,
        "二十八宿資料": false // required 二十八宿.js
    };
    
    while(CurDate <= DateRangeObj.dateEnd){
        var 干支曆 = 西曆轉換干支曆(EvalDate);
        var 農曆 = 西曆轉換農曆(CurDate, "吉隆坡", false, false, false, false, false, true);
        
        if(節日設定.道教聖誕) 道教聖誕(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.八節齋日) 八節齋日(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.三元三會) 三元三會(EventArry, CurDate, 干支曆, 農曆);
        
        if(節日設定.小攢會日) 小攢會日(EventArry, CurDate, 干支曆, 農曆, 節日設定.本命日);
        if(節日設定.五臘日) 五臘日(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.北斗下日) 北斗下日(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.雷祖下巡日) 雷祖下巡日(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.初一十五) 初一十五(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.開光吉日) 開光吉日(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.節會日) 節會日(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.十直日) 十直日(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.四始日) 四始日(EventArry, CurDate, 干支曆, 農曆)
        if(節日設定.戊不朝真) 戊不朝真(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.禁忌燒香行道日) 禁忌燒香行道日(EventArry, CurDate, 干支曆, 農曆, true, true, false, false, false);
        
        if(節日設定.傳統節日) 傳統節日(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.二十四節氣) 二十四節氣交節(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.民俗忌日) 民俗忌日(EventArry, CurDate, 干支曆, 農曆);
        if(節日設定.神煞節日) 神煞節日(EventArry, CurDate, 干支曆, 農曆);
        
        //console.log(EventArry);
        CurDate.setDate(CurDate.getDate() + 1);
        EvalDate.運算西曆 = CurDate;
    }  // end while

    console.log(干支曆);
    console.log(農曆);
    //console.log(EventArry);
    return EventArry.join(", ");
} // end function 道教誦經節日


function 初一十五(EventCal, EventDate, 干支曆, 農曆) {
    if(農曆.日中文 == "初一") {
        var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
        //EventCal.push("{ title: '初一', start: " + EventDate + " }");
        EventCal.push(JSON.stringify(new 道教誦經元件(農曆.月中文 + '月.初一', true, '', 010, EventDay)));
    }  // end if 初一
    
    if(農曆.日中文 == "十五") {
        var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
        //EventCal.push("{ title: '十五', start: " + EventDate + " }");
        EventCal.push(JSON.stringify(new 道教誦經元件(農曆.月中文 + '月.十五', true, '', 011, EventDay)));
    }  // end if 十五
}  // end function 初一十五


function 戊不朝真(EventCal, EventDate, 干支曆, 農曆, 暗戊) {
    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var EventColor = 'OrangeRed';
    
    // 明戊日
    if(干支曆.日柱.substr(0,1) == "戊") {
        if(干支曆.日柱.substr(1,1) != "申") EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.日柱 + '不朝真', true, EventColor, 101, EventDay)));
        else EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.日柱 + '不朝真.六戊申', true, EventColor, 101, EventDay)));
    } // end if 明戊
        
    // 暗戊日
    if(暗戊 == undefined) 暗戊=true;
    var 日支 = 干支曆.日柱.substr(1,1);
    var 暗戊日 = 中文數字(干支曆.生月數) + "月" + 日支 + "日."; 
    
    switch(暗戊) {
        case (干支曆.生月數 == 1 && 日支 == "未"):
            EventCal.push(JSON.stringify(new 道教誦經元件(暗戊日 + '暗戊', true, EventColor, 102, EventDay)));
            break;
        case (干支曆.生月數 == 2 && 日支 == "戌"):
            EventCal.push(JSON.stringify(new 道教誦經元件(暗戊日 + '暗戊', true, EventColor, 102, EventDay)));
            break;
        case (干支曆.生月數 == 3 && 日支 == "辰"):
            EventCal.push(JSON.stringify(new 道教誦經元件(暗戊日 + '暗戊', true, EventColor, 102, EventDay)));
            break;    
        case (干支曆.生月數 == 4 && 日支 == "寅"):
            EventCal.push(JSON.stringify(new 道教誦經元件(暗戊日 + '暗戊', true, EventColor, 102, EventDay)));
            break;   
        case (干支曆.生月數 == 5 && 日支 == "午"):
            EventCal.push(JSON.stringify(new 道教誦經元件(暗戊日 + '暗戊', true, EventColor, 102, EventDay)));
            break;
        case (干支曆.生月數 == 6 && 日支 == "子"):
            EventCal.push(JSON.stringify(new 道教誦經元件(暗戊日 + '暗戊', true, EventColor, 102, EventDay)));
            break;    
        case (干支曆.生月數 == 7 && 日支 == "酉"):
            EventCal.push(JSON.stringify(new 道教誦經元件(暗戊日 + '暗戊', true, EventColor, 102, EventDay)));
            break;
        case (干支曆.生月數 == 8 && 日支 == "申"):
            EventCal.push(JSON.stringify(new 道教誦經元件(暗戊日 + '暗戊', true, EventColor, 102, EventDay)));
            break;
        case (干支曆.生月數 == 9 && 日支 == "巳"):
            EventCal.push(JSON.stringify(new 道教誦經元件(暗戊日 + '暗戊', true, EventColor, 102, EventDay)));
            break;   
        case (干支曆.生月數 == 10 && 日支 == "亥"):
            EventCal.push(JSON.stringify(new 道教誦經元件(暗戊日 + '暗戊', true, EventColor, 102, EventDay)));
            break;
        case (干支曆.生月數 == 11 && 日支 == "卯"):
            EventCal.push(JSON.stringify(new 道教誦經元件(暗戊日 + '暗戊', true, EventColor, 102, EventDay)));
            break;
        case (干支曆.生月數 == 12 && 日支 == "丑"):
            EventCal.push(JSON.stringify(new 道教誦經元件(暗戊日 + '暗戊', true, EventColor, 102, EventDay)));
            break;    
    } // end switch
    
}  // end function 戊不朝真


function 北斗下日(EventCal, EventDate, 干支曆, 農曆) {
    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var 閏月 = (農曆.閏月) ? "閏" : "";
    var 北斗下日天 = 閏月 + 農曆.月中文 + '月' + 農曆.日中文;
    var EventColor = 'green';
    
    switch(true) {
        case (農曆.月 == 1 && 農曆.日 == 25):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 1 && 農曆.日 == 26):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 2 && 農曆.日 == 2):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 2 && 農曆.日 == 7):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 2 && 農曆.日 == 23):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 2 && 農曆.日 == 26):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 3 && 農曆.日 == 26):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 4 && 農曆.日 == 17):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 4 && 農曆.日 == 27):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 5 && 農曆.日 == 5):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 5 && 農曆.日 == 13):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 5 && 農曆.日 == 20):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 6 && 農曆.日 == 4):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 6 && 農曆.日 == 8):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 7 && 農曆.日 == 4):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 7 && 農曆.日 == 24):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 8 && 農曆.日 == 3):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 8 && 農曆.日 == 11):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 8 && 農曆.日 == 19):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 8 && 農曆.日 == 27):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 9 && 農曆.日 == 3):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 9 && 農曆.日 == 18):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 10 && 農曆.日 == 10):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 10 && 農曆.日 == 26):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 11 && 農曆.日 == 1):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 11 && 農曆.日 == 9):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 11 && 農曆.日 == 17):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 11 && 農曆.日 == 25):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
        case (農曆.月 == 12 && 農曆.日 == 20):
            EventCal.push(JSON.stringify(new 道教誦經元件(北斗下日天 + '.北斗下日', true, EventColor, 003, EventDay)));
            break;
    } // end switch
    
    if(干支曆.日柱 == "甲子" || 干支曆.日柱 == "庚申") EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.日柱 + '.北斗下日', true, 'green', 003, EventDay)));
        
} // end function 北斗下日

function 雷祖下巡日(EventCal, EventDate, 干支曆, 農曆) {
    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var 閏月 = (農曆.閏月) ? "閏" : "";
    var 雷祖下巡天 = 閏月 + 農曆.月中文 + '月' + 農曆.日中文;
    var EventColor = 'green';
    
    if(農曆.日 == 6) EventCal.push(JSON.stringify(new 道教誦經元件(雷祖下巡天 + '.雷祖下巡日', true, 'green', 003, EventDay)));
    if(干支曆.日柱.substr(0,1) == "辛") EventCal.push(JSON.stringify(new 道教誦經元件('辛日.雷祖下巡日', true, 'green', 003, EventDay)));
} // end function 雷祖下巡日


function 八節齋日(EventCal, EventDate, 干支曆, 農曆) {
    if(干支曆.交節 && (干支曆.交節日節令 == "立春" || 干支曆.交節日節令 == "立夏" || 干支曆.交節日節令 == "立秋" || 干支曆.交節日節令 == "立冬" || 干支曆.交節日節令 == "春分" || 干支曆.交節日節令 == "夏至" || 干支曆.交節日節令 == "秋分" || 干支曆.交節日節令 == "冬至")) {
        var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
        EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.交節日節令 + '.八節之日', true, 'Blue', 004, EventDay)));
    } // end if
} // end function 八節齋日


function 五臘日(EventCal, EventDate, 干支曆, 農曆) {
    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var 閏月 = (農曆.閏月) ? "閏" : "";
    var 五臘天 = 閏月 + 農曆.月中文 + '月' + 農曆.日中文;
    var EventColor = 'green';
    
    switch(true) {
        case (農曆.月 == 1 && 農曆.日 == 1):
            EventCal.push(JSON.stringify(new 道教誦經元件(五臘天 + '.天臘', true, EventColor, 005, EventDay)));
            break;
        case (農曆.月 == 5 && 農曆.日 == 5):
            EventCal.push(JSON.stringify(new 道教誦經元件(五臘天 + '.地臘', true, EventColor, 005, EventDay)));
            break;
        case (農曆.月 == 7 && 農曆.日 == 7):
            EventCal.push(JSON.stringify(new 道教誦經元件(五臘天 + '.道德臘', true, EventColor, 005, EventDay)));
            break;
        case (農曆.月 == 10 && 農曆.日 == 1):
            EventCal.push(JSON.stringify(new 道教誦經元件(五臘天 + '.民歲臘', true, EventColor, 005, EventDay)));
            break;
        case (農曆.月 == 12 && 農曆.日 == 8):
            EventCal.push(JSON.stringify(new 道教誦經元件(五臘天 + '.侯王臘', true, EventColor, 005, EventDay)));
            break;
    } // end switch
} // end function 五臘日


function 三元三會(EventCal, EventDate, 干支曆, 農曆) {
    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var 閏月 = (農曆.閏月) ? "閏" : "";
    var 三元三會天 = 閏月 + 農曆.月中文 + '月' + 農曆.日中文;
    var EventColor = 'green';
    
    switch(true) {
        // 三元
        case (農曆.月 == 1 && 農曆.日 == 15):
            EventCal.push(JSON.stringify(new 道教誦經元件(三元三會天 + '.上元節', true, EventColor, 005, EventDay)));
            break;
        case (農曆.月 == 7 && 農曆.日 == 15):
            EventCal.push(JSON.stringify(new 道教誦經元件(三元三會天 + '.中元節', true, EventColor, 005, EventDay)));
            break;
        case (農曆.月 == 10 && 農曆.日 == 15):
            EventCal.push(JSON.stringify(new 道教誦經元件(三元三會天 + '.下元節', true, EventColor, 005, EventDay)));
            break;
        // 三會
        case (農曆.月 == 1 && 農曆.日 == 7):
            EventCal.push(JSON.stringify(new 道教誦經元件(三元三會天 + '.三會.天曹遷賞會', true, EventColor, 005, EventDay)));
            break;
        case (農曆.月 == 7 && 農曆.日 == 7):
            EventCal.push(JSON.stringify(new 道教誦經元件(三元三會天 + '.三會.地府度生會', true, EventColor, 005, EventDay)));
            break;
        case (農曆.月 == 10 && 農曆.日 == 5):
            EventCal.push(JSON.stringify(new 道教誦經元件(三元三會天 + '.三會.水府建生會', true, EventColor, 005, EventDay)));
            break;
    } // end switch
} // end function 三元三會


function 道教聖誕(EventCal, EventDate, 干支曆, 農曆, 其他節日) {
    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var 閏月 = (農曆.閏月) ? "閏" : "";
    var 道教聖誕天 = 閏月 + 農曆.月中文 + '月' + 農曆.日中文;
    var EventColor = 'purple';
    
    switch(true) {
        case (農曆.月 == 1 && 農曆.日 == 9):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.玉皇大帝誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 1 && 農曆.日 == 15):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.祖天師誕', true, EventColor, 99, EventDay)));
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.陳靖姑千秋', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 2 && 農曆.日 == 1):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.勾陳天皇大帝誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 2 && 農曆.日 == 2):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.土地正神誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 2 && 農曆.日 == 3):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.文昌帝君誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 2 && 農曆.日 == 13):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.葛真君誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 2 && 農曆.日 == 15):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.太上老君誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 3 && 農曆.日 == 3):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.玄天上帝誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 3 && 農曆.日 == 15):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.趙公明誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 3 && 農曆.日 == 16):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.中岳大帝誕', true, EventColor, 99, EventDay)));
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.三茅真君得道日', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 3 && 農曆.日 == 18):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.后土娘娘誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 3 && 農曆.日 == 19):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.太陽星君誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 3 && 農曆.日 == 23):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.天后媽祖誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 3 && 農曆.日 == 28):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.東岳大帝誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 4 && 農曆.日 == 14):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.吕祖聖誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 4 && 農曆.日 == 18):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.北極紫微大帝誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 5 && 農曆.日 == 1):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.南極長生大帝誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 5 && 農曆.日 == 5):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.雷祖聖誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 5 && 農曆.日 == 11):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.城隍爺誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 5 && 農曆.日 == 18):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.張天師誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 6 && 農曆.日 == 15):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.王靈官誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 6 && 農曆.日 == 24):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.南極大帝中方雷祖誕', true, EventColor, 99, EventDay)));
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.關帝聖君誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 7 && 農曆.日 == 12):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.西方雷祖誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 8 && 農曆.日 == 1):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.許真君誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 8 && 農曆.日 == 3):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.九天司命灶君誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 8 && 農曆.日 == 5):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.北方雷祖誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 8 && 農曆.日 == 10):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.北岳大帝誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 8 && 農曆.日 == 15):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.太陰星君誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 9 && 農曆.日 == 9):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.斗姥元君誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 9 && 農曆.日 == 23):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.薩翁真君誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 10 && 農曆.日 == 3):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.大茅君茅盈誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 10 && 農曆.日 == 20):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.虚靖天师誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 11 && 農曆.日 == 6):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.西岳大帝誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 11 && 農曆.日 == 11):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.太乙救苦天尊誕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 12 && 農曆.日 == 16):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.南岳大帝誕', true, EventColor, 99, EventDay)));
            break;
    } // end switch
    
    if(干支曆.交節) {
        if(干支曆.交節日節令 == "夏至") EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.交節日節令 + '.靈寶天尊誕', true, 'purple',99, EventDay)));
        if(干支曆.交節日節令 == "冬至") EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.交節日節令 + '.元始天尊誕', true, 'purple',99, EventDay)));
    } // end if 交節
    
    // 其他節日
    if(其他節日==undefined) 其他節日 = true;
    
    switch(其他節日) {
        case (農曆.月 == 1 && 農曆.日 == 5):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.接财神', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 1 && 農曆.日 == 7):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.人日撈生', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 12 && 農曆.日 == 24):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.司命灶君上天朝奏人善惡', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 12 && 農曆.日 == 25):
            EventCal.push(JSON.stringify(new 道教誦經元件(道教聖誕天 + '.天神下降探訪善惡', true, EventColor, 99, EventDay)));
            break;
    } // end switch 其他節日
} // end function 道教聖誕



function 傳統節日(EventCal, EventDate, 干支曆, 農曆, 中元節) {
    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var 閏月 = (農曆.閏月) ? "閏" : "";
    var 傳統節日天 = 閏月 + 農曆.月中文 + '月' + 農曆.日中文;
    var EventColor = 'DimGray';
    if(中元節 === undefined) 中元節= false;
    
    switch(true) {
        case (農曆.月 == 1 && 農曆.日 == 1):
            EventCal.push(JSON.stringify(new 道教誦經元件(傳統節日天 + '.農曆新年', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 1 && 農曆.日 == 15):
            EventCal.push(JSON.stringify(new 道教誦經元件(傳統節日天 + '.元宵節', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 3 && 農曆.日 == 1):
            EventCal.push(JSON.stringify(new 道教誦經元件(傳統節日天 + '.清明節', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 7 && 農曆.日 == 7):
            EventCal.push(JSON.stringify(new 道教誦經元件(傳統節日天 + '.七夕', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 7 && 農曆.日 == 15):
            if(中元節) EventCal.push(JSON.stringify(new 道教誦經元件(傳統節日天 + '.中元節', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 8 && 農曆.日 == 15):
            EventCal.push(JSON.stringify(new 道教誦經元件(傳統節日天 + '.中秋節', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 == 9 && 農曆.日 == 9):
            EventCal.push(JSON.stringify(new 道教誦經元件(傳統節日天 + '.重陽節', true, EventColor, 99, EventDay)));
            break;
        case (農曆.月 ==12 && 農曆.日 == 30):
            EventCal.push(JSON.stringify(new 道教誦經元件(傳統節日天 + '.除夕', true, EventColor, 99, EventDay)));
            break;
    }  // end switch
} // end function 傳統節日


function 開光吉日(EventCal, EventDate, 干支曆, 農曆) {
    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var 開光吉日天 = 干支曆.四季 + '季' + 農曆.二十八宿.星宿 + '日';
    var EventColor = 'Black';

	if((干支曆.四季 == "春" || 干支曆.四季 == "秋") && (農曆.二十八宿.星宿 == "心" || 農曆.二十八宿.星宿 == "危" || 農曆.二十八宿.星宿 == "畢" || 農曆.二十八宿.星宿 == "張")) {
		EventCal.push(JSON.stringify(new 道教誦經元件(開光吉日天 + '.開光.太陰吉', true, EventColor,99, EventDay)));
	}  // end if 春秋

	if((干支曆.四季 == "夏" || 干支曆.四季 == "冬") && (農曆.二十八宿.星宿 == "房" || 農曆.二十八宿.星宿 == "虛" || 農曆.二十八宿.星宿 == "昴" || 農曆.二十八宿.星宿 == "張")) {
		EventCal.push(JSON.stringify(new 道教誦經元件(開光吉日天 + '.開光.太陽吉', true, EventColor,99, EventDay)));
	}  // end if 春秋
} // end function 開光吉日


function 節會日(EventCal, EventDate, 干支曆, 農曆) {
    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var 節會日天 = 干支曆.日柱 + ".節會日";
    var EventColor = 'green';

    switch(true) {
        case (干支曆.日柱 == "甲午"):
            EventCal.push(JSON.stringify(new 道教誦經元件(節會日天 + '.天節', true, EventColor, 003, EventDay)));
            break;
	case (干支曆.日柱 == "甲申"):
            EventCal.push(JSON.stringify(new 道教誦經元件(節會日天 + '.地節', true, EventColor, 003, EventDay)));
            break;	
	case (干支曆.日柱 == "甲子"):
            EventCal.push(JSON.stringify(new 道教誦經元件(節會日天 + '.人節', true, EventColor, 003, EventDay)));
            break;
	case (干支曆.日柱 == "丙午"):
            EventCal.push(JSON.stringify(new 道教誦經元件(節會日天 + '.天會', true, EventColor, 003, EventDay)));
            break;
	case (干支曆.日柱 == "壬午"):
            EventCal.push(JSON.stringify(new 道教誦經元件(節會日天 + '.地會', true, EventColor, 003, EventDay)));
            break;
	case (干支曆.日柱 == "壬子"):
            EventCal.push(JSON.stringify(new 道教誦經元件(節會日天 + '.人會', true, EventColor, 003, EventDay)));
            break;
	case (干支曆.日柱 == "庚午"):
            EventCal.push(JSON.stringify(new 道教誦經元件(節會日天 + '.日會', true, EventColor, 003, EventDay)));
            break;
	case (干支曆.日柱 == "庚申"):
            EventCal.push(JSON.stringify(new 道教誦經元件(節會日天 + '.月會', true, EventColor, 003, EventDay)));
            break;
	case (干支曆.日柱 == "辛酉"):
            EventCal.push(JSON.stringify(new 道教誦經元件(節會日天 + '.星辰會', true, EventColor, 003, EventDay)));
            break;
	case (干支曆.日柱 == "甲辰"):
            EventCal.push(JSON.stringify(new 道教誦經元件(節會日天 + '.五行會', true, EventColor, 003, EventDay)));
            break;
	case (干支曆.日柱 == "甲戌"):
            EventCal.push(JSON.stringify(new 道教誦經元件(節會日天 + '.四時會', true, EventColor, 003, EventDay)));
            break;
    } // end switch
} // end function 節會日


function 十直日(EventCal, EventDate, 干支曆, 農曆) {
    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var 閏月 = (農曆.閏月) ? "閏" : "";
    var 十直日天 = 閏月 + 農曆.月中文 + '月' + 農曆.日中文;
    var EventColor = 'green';

    if(農曆.日 == 1 || 農曆.日 == 8 || 農曆.日 == 14 || 農曆.日 == 15 || 農曆.日 == 18 || 農曆.日 == 23 || 農曆.日 == 24 || 農曆.日 == 27 || 農曆.日 == 28 || 農曆.日 == 29 || 農曆.日 == 30) {
    	EventCal.push(JSON.stringify(new 道教誦經元件(十直日天 + '.十直日', true, EventColor, 99, EventDay)));
    }
} // end function 十直日


function 四始日(EventCal, EventDate, 干支曆, 農曆) {
    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var 閏月 = (農曆.閏月) ? "閏" : "";
    var 四始日天 = 閏月 + 農曆.月中文 + '月' + 農曆.日中文;
    var EventColor = 'green';

    switch(true) {
        case (農曆.月 == 1 && 農曆.日 == 1):
            EventCal.push(JSON.stringify(new 道教誦經元件(四始日天 + '.四始日', true, EventColor, 003, EventDay)));
            break;
	   case (農曆.月 == 4 && 農曆.日 == 1):
            EventCal.push(JSON.stringify(new 道教誦經元件(四始日天 + '.四始日', true, EventColor, 003, EventDay)));
            break;
	   case (農曆.月 == 7 && 農曆.日 == 1):
            EventCal.push(JSON.stringify(new 道教誦經元件(四始日天 + '.四始日', true, EventColor, 003, EventDay)));
            break;
	   case (農曆.月 == 10 && 農曆.日 == 1):
            EventCal.push(JSON.stringify(new 道教誦經元件(四始日天 + '.四始日', true, EventColor, 003, EventDay)));
            break;
    }  // end switch
} // end function 四始日


function 小攢會日(EventCal, EventDate, 干支曆, 農曆, 本命日) {
    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var 小攢會日天 = 干支曆.日柱 + ".小攢會";
    var EventColor = 'GoldenRod';
    
    if(干支曆.日柱 == "甲子") EventCal.push(JSON.stringify(new 道教誦經元件(小攢會日天 + '.胎光上詣', true, EventColor, 103, EventDay)));
    if(干支曆.日柱 == "庚申") EventCal.push(JSON.stringify(new 道教誦經元件(小攢會日天 + '.爽靈上詣', true, EventColor, 103, EventDay)));
    if(干支曆.日柱 == 本命日) EventCal.push(JSON.stringify(new 道教誦經元件(小攢會日天 + '.幽精上詣', true, EventColor, 103, EventDay)));
} // function 小攢會日


function 禁忌燒香行道日(EventCal, EventDate, 干支曆, 農曆, 聖忌日, 帝煞日, 龍虎日, 帝酷殺日, 受死日) {
    if(聖忌日 != true) 聖忌日 = false;
    if(帝煞日 != true) 帝煞日 = false;
    if(龍虎日 != true) 龍虎日 = false;
    if(帝酷殺日 != true) 帝酷殺日 = false;
    if(受死日 != true) 受死日 = false;

    var EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    var 閏月 = (農曆.閏月) ? "閏" : "";
    var EventColor = 'Red';
    var 禁忌日天 = 閏月 + 農曆.月中文 + '月' + 農曆.日中文;
    var 禁忌月干支日 = 中文數字(干支曆.生月數) + '月' + 干支曆.日柱;
    var 禁忌月日支 = 中文數字(干支曆.生月數) + '月' + 干支曆.日柱.substr(1,1) + '日';

        if(聖忌日) {
            //丙寅、丁卯兩日為道父忌。丙申、丁酉兩日為道母忌。壬辰、壬戌兩日為北帝忌。戊辰、戊戌兩日為南帝忌
            if(干支曆.日柱 == "丙寅" || 干支曆.日柱 == "丁卯") EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.日柱 + '.聖忌日.道父忌', true, EventColor, 103, EventDay)));
            if(干支曆.日柱 == "丙申" || 干支曆.日柱 == "丁酉") EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.日柱 + '.聖忌日.道母忌', true, EventColor, 103, EventDay)));
            if(干支曆.日柱 == "壬辰" || 干支曆.日柱 == "壬戌") EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.日柱 + '.聖忌日.北帝忌', true, EventColor, 103, EventDay)));
            if(干支曆.日柱 == "戊辰" || 干支曆.日柱 == "戊戌") EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.日柱 + '.聖忌日.南帝忌', true, EventColor, 103, EventDay)));
            } // end if 聖忌日
    
        if(帝煞日) {
            //正月庚申日。二月辛卯日。三月庚戌日。四月癸亥日。五月壬子日。六月癸丑日。七月甲寅日。八月乙卯日。九月甲辰日。十月丁巳日。十一月丙午日。十二月乙未日
            if(干支曆.生月數 == 1 && 干支曆.日柱 == "庚申") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝煞日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 2 && 干支曆.日柱 == "辛卯") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝煞日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 3 && 干支曆.日柱 == "庚戌") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝煞日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 4 && 干支曆.日柱 == "癸亥") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝煞日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 5 && 干支曆.日柱 == "壬子") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝煞日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 6 && 干支曆.日柱 == "癸丑") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝煞日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 7 && 干支曆.日柱 == "甲寅") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝煞日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 8 && 干支曆.日柱 == "乙卯") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝煞日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 9 && 干支曆.日柱 == "甲辰") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝煞日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 10 && 干支曆.日柱 == "丁巳") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝煞日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 11 && 干支曆.日柱 == "丙午") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝煞日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 12 && 干支曆.日柱 == "乙未") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝煞日', true, EventColor, 103, EventDay)));
            } // end if 帝煞日
    
        if(龍虎日) {
            //正月巳日。二月亥日。三月午日。四月子日。五月未日。六月丑日。七月申日。八月寅日。九月酉日。十月卯日。十一月戌日。十二月辰日
            if(干支曆.生月數 == 1 && 干支曆.日柱.substr(1,1) == "巳") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.龍虎日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 2 && 干支曆.日柱.substr(1,1) == "亥") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.龍虎日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 3 && 干支曆.日柱.substr(1,1) == "午") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.龍虎日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 4 && 干支曆.日柱.substr(1,1) == "子") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.龍虎日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 5 && 干支曆.日柱.substr(1,1) == "未") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.龍虎日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 6 && 干支曆.日柱.substr(1,1) == "丑") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.龍虎日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 7 && 干支曆.日柱.substr(1,1) == "申") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.龍虎日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 8 && 干支曆.日柱.substr(1,1) == "寅") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.龍虎日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 9 && 干支曆.日柱.substr(1,1) == "酉") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.龍虎日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 10 && 干支曆.日柱.substr(1,1) == "卯") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.龍虎日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 11 && 干支曆.日柱.substr(1,1) == "戌") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.龍虎日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 12 && 干支曆.日柱.substr(1,1) == "辰") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.龍虎日', true, EventColor, 103, EventDay)));
            } // end if 龍虎日
    
            if(帝酷殺日){
            //正月初二及庚申。二月初九及辛亥、辛卯。三月初十及甲戌、庚戌。四月十一及癸亥。五月十一及壬子。六月初十及癸丑。七月二十及甲申。八月十三又乙卯。九月十三又甲辰。十月初八又丁巳。十一月十五又丙午。十二月十三又丁未、乙未。
                if(干支曆.生月數 == 1){
                    if(干支曆.日柱 == "庚申") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                    if(農曆.日 == 2) EventCal.push(JSON.stringify(new 道教誦經元件(禁忌日天 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                }  // end if
                if(干支曆.生月數 == 2){
                    if(干支曆.日柱 == "辛亥" || 干支曆.日柱 == "辛卯") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                    if(農曆.日 == 9) EventCal.push(JSON.stringify(new 道教誦經元件(禁忌日天 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                }  // end if
                if(干支曆.生月數 == 3){
                    if(干支曆.日柱 == "甲戌" || 干支曆.日柱 == "庚戌") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                    if(農曆.日 == 10) EventCal.push(JSON.stringify(new 道教誦經元件(禁忌日天 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                }  // end if
                if(干支曆.生月數 == 4){
                    if(干支曆.日柱 == "癸亥") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                    if(農曆.日 == 11) EventCal.push(JSON.stringify(new 道教誦經元件(禁忌日天 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                }  // end if
                if(干支曆.生月數 == 5){
                    if(干支曆.日柱 == "壬子") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                    if(農曆.日 == 11) EventCal.push(JSON.stringify(new 道教誦經元件(禁忌日天 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                }  // end if
                if(干支曆.生月數 == 6){
                    if(干支曆.日柱 == "癸丑") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                    if(農曆.日 == 10) EventCal.push(JSON.stringify(new 道教誦經元件(禁忌日天 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                }  // end if
                if(干支曆.生月數 == 7){
                    if(干支曆.日柱 == "甲申") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                    if(農曆.日 == 20) EventCal.push(JSON.stringify(new 道教誦經元件(禁忌日天 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                }  // end if
                if(干支曆.生月數 == 8){
                    if(干支曆.日柱 == "乙卯") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                    if(農曆.日 == 13) EventCal.push(JSON.stringify(new 道教誦經元件(禁忌日天 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                }  // end if
                if(干支曆.生月數 == 9){
                    if(干支曆.日柱 == "甲辰") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                    if(農曆.日 == 13) EventCal.push(JSON.stringify(new 道教誦經元件(禁忌日天 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                }  // end if
                if(干支曆.生月數 == 10){
                    if(干支曆.日柱 == "丁巳") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                    if(農曆.日 == 8) EventCal.push(JSON.stringify(new 道教誦經元件(禁忌日天 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                }  // end if
                if(干支曆.生月數 == 11){
                    if(干支曆.日柱 == "丙午") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                    if(農曆.日 == 15) EventCal.push(JSON.stringify(new 道教誦經元件(禁忌日天 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                }  // end if
                if(干支曆.生月數 == 12){
                    if(干支曆.日柱 == "丁未" || 干支曆.日柱 == "乙未") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月干支日 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                    if(農曆.日 == 13) EventCal.push(JSON.stringify(new 道教誦經元件(禁忌日天 + '.帝酷殺日', true, EventColor, 103, EventDay)));
                }  // end if
            }  // end if 帝酷殺日
        if(受死日){
            //正月戌日。二月辰日。三月亥日。四月巳日。五月子日。六月午日。七月丑日。八月未日。九月寅日。十月申日。十一月卯日。十二月酉日
            if(干支曆.生月數 == 1 && 干支曆.日柱.substr(1,1) == "戌") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.受死日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 2 && 干支曆.日柱.substr(1,1) == "辰") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.受死日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 3 && 干支曆.日柱.substr(1,1) == "亥") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.受死日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 4 && 干支曆.日柱.substr(1,1) == "巳") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.受死日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 5 && 干支曆.日柱.substr(1,1) == "子") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.受死日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 6 && 干支曆.日柱.substr(1,1) == "午") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.受死日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 7 && 干支曆.日柱.substr(1,1) == "丑") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.受死日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 8 && 干支曆.日柱.substr(1,1) == "未") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.受死日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 9 && 干支曆.日柱.substr(1,1) == "寅") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.受死日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 10 && 干支曆.日柱.substr(1,1) == "申") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.受死日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 11 && 干支曆.日柱.substr(1,1) == "卯") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.受死日', true, EventColor, 103, EventDay)));
            if(干支曆.生月數 == 12 && 干支曆.日柱.substr(1,1) == "酉") EventCal.push(JSON.stringify(new 道教誦經元件(禁忌月日支 + '.受死日', true, EventColor, 103, EventDay)));
            } // end if 受死日
} // end function 禁忌燒香行道日


function 二十四節氣交節(EventCal, EventDate, 干支曆, 農曆) {
    var EventDay, EventTime, EventColor = 'Red';

    if　(干支曆.交節) {
        EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
        EventTime = 干支曆.交節日期.getHours() + ":" + 干支曆.交節日期.getMinutes();
        EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.交節或交氣 + '.' + 干支曆.交節日節令 + '.' + EventTime, true, 'Blue', 004, EventDay)));

    } // end if
} // end function 二十四節氣


function 民俗忌日(EventCal, EventDate, 干支曆, 農曆) {
    var EventDay, EventTime, EventColor = 'Red';
    EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    //EventPreviousDay = new EventDay; EventPreviousDay.setDate(EventPreviousDay.getDate() - 1);
    //var 前一天干支曆 = 西曆轉換干支曆(EventPreviousDay);;
    
    if(干支曆.交節) {
        var EventPreviousDate = new Date(EventDate); EventPreviousDate.setDate(EventPreviousDate.getDate() - 1);
        var EventPreviousDay = EventPreviousDate.getFullYear() + "-" + Number(EventPreviousDate.getMonth()+ 1) + "-" + EventPreviousDate.getDate();
        
        if(干支曆.交節日節令 == "春分" || 干支曆.交節日節令 == "秋分" || 干支曆.交節日節令 == "夏至" || 干支曆.交節日節令 == "冬至") {
           EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.交節日節令 + "前一天.四離日", true, EventColor, 004, EventPreviousDay)));
           } // end if 四離日
        
        if(干支曆.交節日節令 == "立春" || 干支曆.交節日節令 == "立夏" || 干支曆.交節日節令 == "立秋" || 干支曆.交節日節令 == "立冬") {
           EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.交節日節令 + "前一天.四絕日", true, EventColor, 004, EventPreviousDay)));
           } // end if 四絕日
    }  // end if 干支曆.交節
    
    if((干支曆.四季 == "春" && (干支曆.日柱 == "庚申" || 干支曆.日柱 == "辛酉")) || (干支曆.四季 == "夏" && (干支曆.日柱 == "壬子" || 干支曆.日柱 == "癸亥")) || (干支曆.四季 == "秋" && (干支曆.日柱 == "甲寅" || 干支曆.日柱 == "乙卯")) || (干支曆.四季 == "冬" && (干支曆.日柱 == "丙午" || 干支曆.日柱 == "丁巳")) ) {
        EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.四季 + "季" + 干支曆.日柱  + ".四廢日", true, EventColor, 004, EventDay)));
    } // if 四廢日
    
    //也有種說法，說是以出生年份為主，結合生日來定。如：庚戌年見甲辰日、辛亥年見乙巳日、壬寅年見丙申日、癸巳年見丁亥日、甲戌年見庚辰日、甲辰年見戊戌日、乙亥年見辛巳日、乙未年見己丑日、丙寅年見壬申日、丁巳年見癸亥日，才算是十惡大敗命。
    if((干支曆.年柱 =="庚戌" && 干支曆.日柱 == "甲辰") || (干支曆.年柱 =="辛亥" && 干支曆.日柱 == "乙巳") || (干支曆.年柱 =="壬寅" && 干支曆.日柱 == "丙申") || (干支曆.年柱 =="癸巳" && 干支曆.日柱 == "丁亥") || (干支曆.年柱 =="甲辰" && 干支曆.日柱 == "戊戌") || (干支曆.年柱 =="乙未" && 干支曆.日柱 == "己丑") || (干支曆.年柱 =="甲戌" && 干支曆.日柱 == "庚辰") || (干支曆.年柱 =="乙亥" && 干支曆.日柱 == "辛巳") || (干支曆.年柱 =="丙寅" && 干支曆.日柱 == "壬申") || (干支曆.年柱 =="丁巳" && 干支曆.日柱 == "癸亥")) {        
        EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.年柱 + "年" +干支曆.日柱 + "日.十惡大敗日", true, EventColor, 004, EventDay)));
    } // if 十惡大敗日
    
    
    if((農曆.日 == 3 && 干支曆.日柱 == "庚午") || (農曆.日 == 7 && 干支曆.日柱 == "辛未") || (農曆.日 == 13 && 干支曆.日柱 == "戊申") || (農曆.日 == 18 && 干支曆.日柱 == "己酉") || (農曆.日 == 22 && 干支曆.日柱 == "丙午") || (農曆.日 == 27 && 干支曆.日柱 == "丁未")) {
        EventCal.push(JSON.stringify(new 道教誦經元件(農曆.日中文 + "又逢" + 干支曆.日柱 + "日.三娘煞日" , true, EventColor, 004, EventDay)));
        //console.log(EventDay);
    } // end if 三娘煞日
       
    
     if((農曆.月 == 1 && 農曆.日 == 13) || (農曆.月 == 2 && 農曆.日 == 11) || (農曆.月 == 3 && 農曆.日 == 9) || (農曆.月 == 4 && 農曆.日 == 7) || (農曆.月 == 5 && 農曆.日 == 5) || (農曆.月 == 6 && 農曆.日 == 3) || (農曆.月 == 7 && 農曆.日 == 1) || (農曆.月 == 7 && 農曆.日 == 29) || (農曆.月 == 8 && 農曆.日 == 27) || (農曆.月 == 9 && 農曆.日 == 25) || (農曆.月 == 10 && 農曆.日 == 23) || (農曆.月 == 11 && 農曆.日 == 21) || (農曆.月 == 12 && 農曆.日 == 19)) {
        EventCal.push(JSON.stringify(new 道教誦經元件(農曆.月 + "月" + 農曆.日  + "日.楊公忌日" , true, EventColor, 004, EventDay)));
     } // end if 楊公忌日
    
    /*
    ①四離日：二十四節氣中的春分、秋分、夏至、冬至的前一天叫做離日。一年中共有四個離日。
    ②四絕日：二十四節氣中的立春、立夏、立秋、立冬的前一天，叫做絕日。一年中共有四個絕日。
    ③四廢日：春季：庚申、辛酉日。夏季：壬子、癸亥日。秋季：甲寅、乙卯日。冬季：丙午、丁巳日。
    ④十惡大敗日：日逢甲辰、乙巳、丙申、丁亥、戊戌、己丑、庚辰、辛巳、壬申、癸亥，為十惡大敗日。
    ⑤三娘煞日：初三又逢庚午日，初七又逢辛未日，十三又逢戊申日，十八又逢己酉日，廿二又逢丙午日，廿七又逢丁未日，共六日，這種機率就不會太高。
    ⑥楊公忌日：世傳為唐代風水宗師楊筠鬆所訂定。在玄空家的眼裡，
    在這十三個日子裡不宜辦大事。正月十三、二月十一、三月初九、四月初七、五月初五、六月初三 、七月初一、七月廿九、八月廿七、九月廿五、十月廿三、十一月廿一、十二月十九。杨公十三忌自古以来即受到玄空家的重视，在玄空家的眼里，这十三个日子决不能被选来做为开张、动工、嫁娶、签订合同等等。
    */
} // end function 民俗忌日


function 神煞節日(EventCal, EventDate, 干支曆, 農曆) {
    var EventDay, EventTime, EventBadColor = 'Red', EventGoodColor = 'Green';
    EventDay = EventDate.getFullYear() + "-" + Number(EventDate.getMonth()+ 1) + "-" + EventDate.getDate();
    
    //天赦日，四时专气，生育万物，宥罪赦过，乃天帝赦免众生罪过的吉日，最利于消灾化煞，祈福祈寿。春戊寅, 夏甲午, 秋戊申, 冬甲子
    
    if((干支曆.四季 == "春" && 干支曆.日柱 == "戊寅") || (干支曆.四季 == "夏" && 干支曆.日柱 == "甲午") || (干支曆.四季 == "秋" && 干支曆.日柱 == "戊申") || (干支曆.四季 == "冬" && 干支曆.日柱 == "甲子")) {
        EventCal.push(JSON.stringify(new 道教誦經元件(干支曆.四季 + "季" + 干支曆.日柱  + ".天赦日", true, EventGoodColor, 004, EventDay)));
    } // if 天赦日
    
} // end function 神煞節日