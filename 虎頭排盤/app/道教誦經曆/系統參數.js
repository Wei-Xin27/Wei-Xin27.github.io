function 系統參數(){
     var todaydate = new Date();
    
    //this.userid="";
    this.progid="88387512A08ljhu2IlyhW*a,A8EME";  //last 7 digit is image code
    this.mode={"activated": true, "engineering": false};
    this.timezone = "";
    this.country = "馬來西亞";
    this.city = "馬來西亞";
    this.integrity=false;
    this.expired=false;
    this.expiry = new Date(2030, 10, 30);
    //https://varvy.com/tools/base64/up.php
    this.logo = "";
    this.system = {
        "瀏覽器": "",
        "瀏覽器版本": "",
        "平台系統": "",
        "平台系統版本": "",
        "ViewportWidth": 0,
        "ViewportHeight": 0,
        "ViewportOrientation": "",
        "UserAgent": "",
        "date":  new Date(),
        "city": "",
        "IP": "",
        "LatLong": "",
        "country": "",
        "-": ""
        };

    this.用戶設定={
        "userid": "",
        "輸入預設": new function(){
                this.前月 = 1;
                this.後月 = 11;
                this.StartDate = new Date(todaydate.setMonth(todaydate.getMonth() - this.前月));
                this.EndDate = new Date(todaydate.setMonth(todaydate.getMonth() + this.後月));
        },
        
        "節日設定": new function(){
                this.道教聖誕 = true;
                this.三元三會 = true;
                this.八節齋日 = true;
                this.五臘日 = true;
                this.北斗下日 = true;
                this.雷祖下巡日 = true;
                this.初一十五 = true;
                this.本命日 = "壬子";
                this.戊不朝真 = true;
                this.傳統節日 = true;
                this.禁忌燒香行道日 = true;
                this.開光吉日 = true;
                this.節會日 = true;
                this.十直日 = true;
                this.四始日 = true;
                this.小攢會日 = true;
                this.二十四節氣 = true;
                this.民俗忌日 = true;
                this.神煞節日 = true;
        }
    };

    
    this.運行狀態 = {
        "已輸入命盤": false,
        "已登陸": false,
        "今年": todaydate.getFullYear(),
        "今月": Number(todaydate.getMonth() + 1),
        "今日": todaydate.getDate(),
        "今日日期字串": todaydate.getFullYear() + "-" + Number(todaydate.getMonth()+ 1) + "-" + todaydate.getDate(),
        "dateStart": new Date(this.用戶設定.輸入預設.StartDate.getFullYear() +"-" + Number(this.用戶設定.輸入預設.StartDate.getMonth()+1) + "-1"),
        "dateEnd": new Date(this.用戶設定.輸入預設.EndDate.getFullYear() +"-" + Number(this.用戶設定.輸入預設.EndDate.getMonth()+1) + "-1"),
        "-": ""
        };
    
    //console.log(this.運行狀態);
     
}  // end function 系統參數
