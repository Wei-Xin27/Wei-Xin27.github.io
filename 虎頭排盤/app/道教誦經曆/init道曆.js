  $(document).ready(function() {
    //console.log(DaoEvents);
    //document.addEventListener('DOMContentLoaded', function() {
    var 系統 = new 系統參數();
    var todaydate = new Date();
    var DaoEvents = 道教誦經節日(系統.運行狀態, 系統.用戶設定.節日設定);

    $('#dao_calendar').fullCalendar({

        //var calendarEl = document.getElementById('dao_calendar');
        //var calendar = new FullCalendar.Calendar(calendarEl, {
        //plugins: [ 'interaction' ],
        header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,listMonth,listWeek'
        }, // end header
        
        views: {
        month: { buttonText: '月曆' },
        listMonth: { buttonText: '月節表' },
        listWeek: { buttonText: '週節表' }
        }, // view
        
        eventClick: function(info) {
            //var eventObj = info.event;
            //console.log(info);
            // when user click on individual event
        },
        
        select: function(info) {
            var 該日總論 = [], 該日資訊 = [], 二十八星宿宜忌 = [], 歲建宜忌 = []; 黃道黑道宜忌 =[];
            var 該日曆法 = 五虎遁曆法編輯(info._d);

            var 干支資訊 = 該日曆法.干支曆.年柱 + " " + 該日曆法.干支曆.月柱 + " " + 該日曆法.干支曆.日柱;
            var 季節資訊 = "（" + 該日曆法.干支曆.四季 + "季，" + 該日曆法.干支曆.節氣 + "，" + 該日曆法.干支曆.司令 + "干司令，七曜日：" + 該日曆法.七曜日 + "）";
            var 交節日資訊 = "";
            if(該日曆法.干支曆.交節.成立) 交節日資訊 = "今日為" + 該日曆法.干支曆.交節.節令 + "的" + 該日曆法.干支曆.交節.交節字 + "日 @ " + 該日曆法.干支曆.交節.時分;

            該日資訊.push("日期：" + 該日曆法.中文西曆 + "，第" + 該日曆法.週數 + "週，" + 該日曆法.星期天);
            該日資訊.push("農曆：" + 該日曆法.農曆.日期 + "，" + 干支資訊 + 季節資訊);
            if(交節日資訊 !="")  該日資訊.push(交節日資訊);

            該日曆法.干支曆.交節.時分

            // ***************** 擇日類 *****************
            二十八星宿宜忌.push("星宿：" + 該日曆法.擇日.二十八宿.名);
            二十八星宿宜忌.push(該日曆法.擇日.二十八宿.註解);
            二十八星宿宜忌.push("宜：" + 該日曆法.擇日.二十八宿.喜 + "<br>忌：" + 該日曆法.擇日.二十八宿.忌);
            //二十八星宿宜忌.push("忌：" + 該日曆法.擇日.二十八宿.忌);

            歲建宜忌.push("歲建：" + 該日曆法.擇日.歲建十二神.名 + "日，" + 該日曆法.擇日.歲建十二神.註解);
            //歲建宜忌.push(該日曆法.擇日.歲建十二神.註解);
            歲建宜忌.push("宜：" + 該日曆法.擇日.歲建十二神.喜 + "<br>忌：" + 該日曆法.擇日.歲建十二神.忌);
            //歲建宜忌.push("忌：" + 該日曆法.擇日.歲建十二神.忌);

            歲建宜忌.push("彭祖百忌：" + 該日曆法.擇日.彭祖百忌.天干 + 該日曆法.擇日.彭祖百忌.地支 + 該日曆法.擇日.彭祖百忌.歲建);
            黃道黑道宜忌.push("神煞宜忌：" + 黃道黑道神煞(該日曆法.干支曆.日柱.substr(1,1)).註解);
            
            該日總論 = 該日資訊.concat(二十八星宿宜忌, 歲建宜忌, 黃道黑道宜忌);

            $('#該日簡易曆法').html(該日總論.join("<br><br>"));
            },  // end select
        
        dateClick: function(info) {
            var 該日總論 = [], 該日資訊 = [], 二十八星宿宜忌 = [], 歲建宜忌 = []; 黃道黑道宜忌 =[];
            var 該日曆法 = 五虎遁曆法編輯(info._d);

            var 干支資訊 = 該日曆法.干支曆.年柱 + " " + 該日曆法.干支曆.月柱 + " " + 該日曆法.干支曆.日柱;
            var 季節資訊 = "（" + 該日曆法.干支曆.四季 + "季，" + 該日曆法.干支曆.節氣 + "，" + 該日曆法.干支曆.司令 + "干司令，七曜日：" + 該日曆法.七曜日 + "）";
            var 交節日資訊 = "";
            if(該日曆法.干支曆.交節.成立) 交節日資訊 = "今日為" + 該日曆法.干支曆.交節.節令 + "的" + 該日曆法.干支曆.交節.交節字 + "日 @ " + 該日曆法.干支曆.交節.時分;

            該日資訊.push("日期：" + 該日曆法.中文西曆 + "，第" + 該日曆法.週數 + "週，" + 該日曆法.星期天);
            該日資訊.push("農曆：" + 該日曆法.農曆.日期 + "，" + 干支資訊 + 季節資訊);
            if(交節日資訊 !="")  該日資訊.push(交節日資訊);

            該日曆法.干支曆.交節.時分

            // ***************** 擇日類 *****************
            二十八星宿宜忌.push("星宿：" + 該日曆法.擇日.二十八宿.名);
            二十八星宿宜忌.push(該日曆法.擇日.二十八宿.註解);
            二十八星宿宜忌.push("宜：" + 該日曆法.擇日.二十八宿.喜 + "<br>忌：" + 該日曆法.擇日.二十八宿.忌);
            //二十八星宿宜忌.push("忌：" + 該日曆法.擇日.二十八宿.忌);

            歲建宜忌.push("歲建：" + 該日曆法.擇日.歲建十二神.名 + "日，" + 該日曆法.擇日.歲建十二神.註解);
            //歲建宜忌.push(該日曆法.擇日.歲建十二神.註解);
            歲建宜忌.push("宜：" + 該日曆法.擇日.歲建十二神.喜 + "<br>忌：" + 該日曆法.擇日.歲建十二神.忌);
            //歲建宜忌.push("忌：" + 該日曆法.擇日.歲建十二神.忌);

            歲建宜忌.push("彭祖百忌：" + 該日曆法.擇日.彭祖百忌.天干 + 該日曆法.擇日.彭祖百忌.地支 + 該日曆法.擇日.彭祖百忌.歲建);
            黃道黑道宜忌.push("神煞宜忌：" + 黃道黑道神煞(該日曆法.干支曆.日柱.substr(1,1)).註解);
            
            該日總論 = 該日資訊.concat(二十八星宿宜忌, 歲建宜忌, 黃道黑道宜忌);

            $('#該日簡易曆法').html(該日總論.join("<br><br>"));
            },  // end dateClick
        
        defaultView: 'month',  
        contentHeight: 600,
        defaultDate: new Date(),
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        selectable: true,
        eventLimit: true, // allow "more" link when too many events
        locale: 'zh-tw',
        events: JSON.parse("[ " + DaoEvents + " ]")
        
        });  // end calendar
        //calendar.render();
      
    }); // end  #dao_calendar 


