function HexStrToBinStr(s){
    var BinStr="";
    var BinChar;
    for(var i=0; i<s.length; i++){
        BinChar=Hex2Bin(s.substr(i,1));
        BinStr=BinStr+BinChar;
    }
    //console.log(s + ", " + BinStr);
    return BinStr;
} //end fuction Hex String to Binary String

function Hex2Bin(Hex){
    switch(Hex){
        case "0": return "0000";
        case "1": return "0001";
        case "2": return "0010";
        case "3": return "0011";
        case "4": return "0100";
        case "5": return "0101";
        case "6": return "0110";
        case "7": return "0111";
        case "8": return "1000";
        case "9": return "1001";
        case "A": return "1010";
        case "B": return "1011";
        case "C": return "1100";
        case "D": return "1101";
        case "E": return "1110";
        case "F": return "1111";
        default: return "";
    }
}  //end function Hex2Bnin

function GetUid(IDCode){
    var ExpCodeTemp1=IDCode.substr(11,10);
    var ExpCodeTemp2=ExpCodeTemp1.substr(5,5)+ExpCodeTemp1.substr(0,5);
    
    var usercodearr=[];
    var uidascii, uid;
    for(var i=0; i<ExpCodeTemp2.length; i++){
        uidascii=ExpCodeTemp2.charCodeAt(i);
        uidascii = uidascii-3;
        usercodearr.push(String.fromCharCode(uidascii));
    }
    uid=usercodearr.join("");
    uid=uid.replace("/", ""); uid=uid.replace("0", ""); uid=uid.replace(".", ""); uid=uid.replace("+", ""); uid=uid.replace(",", ""); uid=uid.replace("-", ""); 
    return uid;
}

function GetLicCode(LicKey){
    var LicCodeTemp=LicKey.substr(7,4);
    var LicStr=HexStrToBinStr(LicCodeTemp);
    return LicStr;
}

function GetExpiry(LicCode){
    var ExpCodeTemp=LicCode.substr(3,4);
    var ExpCode=Number(reverseStr(ExpCodeTemp));
    var BaseDate=new Date(2014, 6, 29);
    var ExpDate=new Date(BaseDate);
    ExpDate.setDate(ExpDate.getDate()+ExpCode);
    return ExpDate;
}


function 版本參數設定(){
    this.BodyImg="data:image/jpg;base64,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";
    this.CopyrightImg="data:image/gif;base64,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";
    this.版本名="大眾版"; //測試版,大眾版,專業版,私人版
    this.版本號 = "v0.8";
    this.版本顯示 = this.版本名 + this.版本號;
    this.平台標題 = "自 然 之 道 - 八 字 論 命";
    this.網頁標題 = "自然之道 網頁排盤";
    this.copyright="五虎遁+詹芸閑";
    //this.十神計算模式="普及"; //普及、象論
    this.HeaderImg="data:image/gif;base64,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";
    this.XiaoYunImg="data:image/gif;base64,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";
}


function 系統參數(){
    //this.userid="";
    this.progid="28016952A08huOhhVshqf";
    this.mode={"activated": true, "engineering": false};
    this.device="";
    this.browser="";
    this.screensize=0;
    this.inputdate = "";  //輸入的生日，轉換前的日期，non date format
    this.calcdate = "";   //輸入的生日，轉換後的日期, date format
    this.momentdate = "";
    this.timezone = "";
    this.country = "台灣";
    this.city = "台北";
    this.now = new Date();
    this.integrity=false;
    this.expired=false;
    this.expiry = new Date(2030, 10, 30);
    this.access= new AccessLic(this.progid);
    this.運算設定={
        "干支基數": 15,
        "刑沖合會害": new function(){
                        this.三會=12;
                        this.三合=9;
                        this.三刑=3;
                        this.半合=4;
                        this.六合=6;
                        this.暗合=1;
                        this.合而不化=1;
                        this.相沖=6;
                        this.相害=4;
                        this.相刑=2;         
                    }
        };

    this.用戶設定={
        "userid": "",
        "命盤顯示": new function(){
                        this.運星=false;
                        this.納音=true;
                        this.神煞=false;
                        this.大運=true;
                        this.流年=true;
                        this.小運=true;
                        this.流月=true;            
                    },
        "四柱歲數": new function(){
                        this.時柱="49-64";
                        this.日柱="33-48";
                        this.月柱="17-32";
                        this.年柱="1-16";
                    },

        "App": new function(){
                        this.五行開運速查=true;
                        this.精簡萬年曆=true;
                        this.十神格速查=true;
                        this.八字流年表=true;
                    },

        "輸入預設": new function(){
                        this.命盤預設八字用當下時間=true;
                        this.年=2016;
                        this.月=1;
                        this.日=1;
                        this.時=0;
                        this.分=0;
                        this.夜子時=true;
                        this.城市="台北";
                        this.區域節氣=true;
                        this.真太陽時=false;
                        this.象論盤=false;  //default check box status
                        this.象論盤輸入=false; // whether to show the check box or not
                    },

        "命盤提示": new function(){
                        this.日光節約=true;
                        this.上運交脫=true;
                        this.人元司令=true;
                        this.命身胎=true;
                        this.庫馬花=false;
                        this.正偏星=false;
                        this.五行四時=true;
                        this.八字提要=true;
                    }
    };
}


function AccessLic(LicKey){
    var LicCode=GetLicCode(LicKey);
    
    this.internalmode=Boolean(Number(LicCode.substr(14,1)));
    this.debugmode=Boolean(Number(LicCode.substr(15,1)));
}


// *************************************************
function IntegrityAudit(命盤){
    // 自然之道=40NE
    // 紫芸居=G9D0
    // 紫綾命坊=G9D0
    
    var vTitle=false;
    var vHeaderImg=false;
    var vBodyImg=false;
    var vCopyright=false;
    var vNExp=true;
    var curDate=new Date();
    var 正標題=[];

    // ******* System Integrity *******
    var ChartTitle=系統.版本.平台標題.substr(0,1)+系統.版本.平台標題.substr(2,1);
    var CopyrightTitle=系統.版本.copyright.substr(1,1);
    var BodyImgTitle=系統.版本.BodyImg.substr(88,1) + 系統.版本.BodyImg.substr(136,1) + 系統.版本.BodyImg.substr(217,1)+系統.版本.BodyImg.substr(305,1);
    //console.log(BodyImgTitle);

    系統.設定.userid=GetUid(系統.設定.progid);
    GetLicCode(系統.設定.progid);

    正標題.push("自然"); 正標題.push("紫芸"); 正標題.push("八字"); 正標題.push("紫綾"); 正標題.push("八易"); 正標題.push("Pa"); 正標題.push("象論"); 

    if(正標題.indexOf(ChartTitle)>=0) vTitle=true;
    if(BodyImgTitle=="40NE" || BodyImgTitle=="G9D0" || BodyImgTitle=="ko9d") vBodyImg=true;
    if(curDate>GetExpiry(系統.設定.progid)) vNExp=false;
    
    //console.log(vTitle + ", " + vBodyImg+ ", " + vNExp); 
    if(vTitle && vBodyImg && vNExp){
        系統.設定.integrity=true;
        //console.log("正版！！");
    }
    else {
        var ErrCode="+";
        if(!vNExp) ErrCode="-";
        $("#debuginfo").html(ErrCode);
        系統.設定.expired=true;
        命盤.年干.天干=天干字數轉換(Math.floor(Math.random() * 9));
        命盤.月干.天干=天干字數轉換(Math.floor(Math.random() * 9));
        命盤.日干.天干=天干字數轉換(Math.floor(Math.random() * 9));
        命盤.時干.天干=天干字數轉換(Math.floor(Math.random() * 9));
        命盤.年支.地支=地支字數轉換(Math.floor(Math.random() * 11));
        命盤.月支.地支=地支字數轉換(Math.floor(Math.random() * 11));
        命盤.日支.地支=地支字數轉換(Math.floor(Math.random() * 11));
        命盤.時支.地支=地支字數轉換(Math.floor(Math.random() * 11));
    }
}


function 系統初始(){
    this.版本= new 版本參數設定();
    this.設定=new 系統參數();
}



// ************************ Generate Rotating Quotes ***********************

function GenRotatingQuotes(){
    var RotQuote = [];

/*
子平八字重月令，
財官印食格局成。
有殺先論命中訣，
病藥用忌要分清。
自然之道分陰陽，
五行通變在其中！
*/
    var 名師名句矩陣=[];
    名師名句矩陣.push('<li data-author="--- 自然之道：李應聰">子 平 八 字 重 月 令， 財 官 印 食 格 局 成。 有 殺 先 論 命 中 訣， 病 藥 用 忌 要 分 清。 自 然 之 道 分 陰 陽， 五 行 通 變 在 其 中！</li>');
    var 名師名句=名師名句矩陣.join("");

    var 滴天髓十干矩陣=[];
    滴天髓十干矩陣.push('<li data-author="甲為根幹之木，純陽之本，參天雄壯，火者，木之子也，旺木得火而愈敷榮，生於春，則助火而不能容金也，生於秋則助金而不能容土也，寅午戌丙丁多見而坐辰，能攝之，申子辰壬癸多見而坐寅，則能納之，土氣不乾，水氣不消，則能長生矣。辰為水庫，能制火滋木，而土能洩火，則甲之根潤，故不怕火，甲祿於寅，寅屬艮，土厚，故能納水。">甲 木 參 天， 脫 胎 要 火， 春 不 容 金， 秋 不 容 土， 火 熾 乘 龍， 水 蕩 騎 虎， 地 潤 天 和， 植 立 千 古。</li>');
    滴天髓十干矩陣.push('<li data-author="乙為枝葉之木，柔如花卉，然坐丑未能制之，（丑未陰土，故乙能制）如宰羊割牛，只要有一丙丁，則雖申酉之月，亦不畏怯，生於子月，（木葉凋零之時，水多益寒）而又辛壬癸透者，則雖得午，亦難發生，（乙雖生午，然午能洩乙，況一火不能敵眾水也）若甲與寅多見，譬之縢蘿附喬木，春月秋月皆可。">乙 木 雖 柔， 刲 羊 解 牛， 懷 丁 抱 丙， 跨 雞 乘 猴， 虛 濕 之 地， 騎 馬 亦 憂， 藤 蘿 繫 甲， 可 春 可 秋。</li>');
    滴天髓十干矩陣.push('<li data-author="丙為焚烈之火，純陽之性，故不畏秋而欺霜，不畏冬而侮雪，庚金雖頑，力能煆之，辛金雖柔，合而反弱，土其子也，見戊己多而慈惠之德，水其君也，遇壬癸旺而顯忠節之風，至丙遂炎上之性，而寅午戌更露甲木，（身旺遇印）則燥而焚滅也。">丙 火 猛 烈， 欺 霜 侮 雪， 能 煆 庚 金， 逢 辛 反 怯， 土 眾 成 慈， 水 猖 顯 節， 虎 馬 犬 鄉， 甲 來 焚 滅。</li>');
    滴天髓十干矩陣.push('<li data-author="丁為溫煖之火，其性雖烈而屬陰，則柔而得其中矣，外柔順而內文明，豈不昭融乎，乙乃丁之母，畏辛而丁抱之，不若丙抱甲而反能焚甲也，不若己抱丁而反能晦丁也，其孝異乎人矣，壬為丁之君，壬所畏者戊，外則撫恤戊土，使土不來欺壬也，內則暗化木神，使戊不能抗壬也，其忠異乎人矣，生於夏合，其燄不至於烈，生於秋冬，得一甲木，雖衰不至於窮，故曰可秋可冬，皆柔道也。">丁 火 柔 中， 內 性 昭 融， 抱 乙 而 考， 合 壬 而 忠， 旺 而 不 烈， 衰 而 不 窮， 如 有 嫡 母， 可 秋 可 冬。</li>');
    滴天髓十干矩陣.push('<li data-author="戊為山岡之，土非城牆之謂，較己土特高厚剛燥，乃己土之發源地也，得乎中氣，而且正，大春夏則氣闢而生萬物，秋冬則氣翕而成萬物，故為司命，其氣屬陽，喜潤下惡燥，坐寅怕申，坐申怕寅，蓋沖則根動，非地道之正也，故宜靜。">戊 土 固 重， 既 中 且 正， 靜 翕 動 闢， 萬 物 司 合， 水 旺 物 生， 火 燥 喜 喜 潤， 若 在 坤 艮， 怕 沖 宜 靜。</li>');
    滴天髓十干矩陣.push('<li data-author="己為田園之，土其性卑濕，乃戊土枝葉之地，亦主中正，蓄藏萬物，柔土能生木，非木所能克，故不愁木盛，土深能納水，非水所能蕩，故不畏水旺，無根之火，不能生濕土，故火少而光晦，濕土能潤金，故金多而金之光彩，反精瑩可觀，此其無為而有為之妙用，若欲充盛長旺乎萬物，則宜幫助為佳。">己 土 卑 濕， 中 正 蓄 藏， 不 愁 木 盛， 不 畏 水 旺， 火 少 火 晦， 金 多 金 明， 若 要 物 昌， 宜 助 宜 幫。</li>');
    滴天髓十干矩陣.push('<li data-author="庚乃陽金，是太白之精，帶煞而剛健，健而得水，則氣流而清，剛而得火，則氣純而粹，有水之土，能全其生，有火之土，能使其脆，甲木雖強，力足伐之，乙木雖柔，合而輸之。">庚 金 帶 煞， 剛 強 為 最， 得 水 而 清， 得 火 而 銳， 土 潤 則 生， 土 乾 則 脆， 能 勝 申 兄， 輸 於 乙 妹。</li>');
    滴天髓十干矩陣.push('<li data-author="辛乃陰金，非珠玉之謂，特溫柔清潤耳，戊土多則埋故之，壬水多則秀故樂之，辛為丙之臣也，撫恤壬水，使不剋丙火，而匡扶社稷，辛為甲之君也，合化丙火，使不焚甲木，而救援生靈，生於九夏，而得己土，則能晦火而存之，生於隆冬，而得丁火，則能敵寒而養之，故辛金生於冬月，見丙則男命不貴，（丙辛合而化水）雖貴亦不忠，女命剋夫，不剋亦不和，若見丁則男女皆貴且順。">辛 金 軟 弱， 溫 潤 而 清， 畏 土 之 疊， 樂 水 之 盈， 能 扶 社 稷， 能 救 生 靈， 熱 則 喜 母， 寒 則 喜 丁。</li>');
    滴天髓十干矩陣.push('<li data-author="壬乃癸水之源，有分有合，運行不息，為百川，亦為雨露，不可岐而二之，壬水能洩西方金氣，其德剛中而又周流不滯，若遇申子辰，而又透癸，則其勢不可遏也，合丁化木，又生丁火，可謂有情，能制丙火，不奪丁之愛，故為夫義而為君仁，生於九夏，則巳午未中土之氣，得壬水薰蒸而成雨露，故雖從火土，未嘗不相濟也。">壬 水 汪 洋， 能 洩 金 氣， 剛 中 之 德， 周 流 不 滯， 通 根 透 癸， 沖 天 奔 地， 化 則 有 情， 從 則 相 濟。</li>');
    滴天髓十干矩陣.push('<li data-author="癸乃純陰而至弱，然上達天津，凡柱中有甲乙寅卯，皆能運用水氣，生木制火，潤土養金，如龍能運水，火土雖多不畏，至於庚辛，則不賴其生，亦不忌其多，惟合戊化火，必通火根，乃為真也。">癸 水 至 弱， 達 於 天 津， 龍 德 而 運， 功 化 斯 神， 不 畏 火 土， 不 論 庚 辛， 合 戊 見 火， 火 根 乃 真。</li>');
    var 滴天髓十干=滴天髓十干矩陣.join("");

    var 滴天髓輯要1矩陣=[];
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：形象論">兩 氣 合 而 成 象， 象 不 可 破 也。 五 氣 聚 而 成 形， 形 不 可 害 也。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：形象論">獨 象 喜 行 化 地，而 化 神 要 昌。 全 象 喜 行 財 地， 而 財 神 要 旺。 形 全 者 宜 損 其 有 餘， 形 缺 者 宜 補 其 不 足。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：方局論">方 是 方 兮 局 是 局， 方 要 得 方 莫 混 局。 局 混 方 兮 有 純 庛， 行 運 喜 南 或 喜 北。 若 然 方 局 一 齊 來， 須 是 干 頭 無 反 覆。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：方局論">成 方 干 透 一 元 神， 生 地 庫 地 皆 非 福。 成 局 干 透 一 官 星， 左 邊 右 邊 空 碌 碌。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：格局論">財 官 印 綬 分 偏 正， 兼 論 食 傷 格 局 定。 影 響 遙 繫 既 為 虛， 雜 氣 財 官 不 可 拘。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：格局論">官 煞 相 混 來 問 我， 有 可 有 不 可。 傷 官 見 官 果 難 辨， 可 見 不 可 見。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：從化論">從 得 真 者 只 論 從， 從 神 又 有 吉 和 凶。 化 得 真 者 只 論 化， 化 神 還 有 幾 般 話。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：從化論">真 從 之 象 有 幾 人， 假 從 亦 可 發 其 身。 假 化 之 人 亦 可 貴， 孤 兒 異 姓 能 出 類。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：性情論">五 行 不 戾， 惟 正 清 和， 濁 亂 偏 枯， 性 情 乖 逆。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：性情論">火 烈 而 性 燥 者， 遇 金 水 之 激。 水 奔 而 性 柔 者， 全 金 木 之 神。 木 奔 南 而 軟 怯。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：性情論">金 見 水 以 流 通。 最 拗 者 ， 西 水 還 南。 至 剛 者 東 火 轉 北。</li>');
    滴天髓輯要1矩陣.push('<li data-author="--- 滴天髓：性情論">順 生 之 機， 遇 擊 神 而 抗。 逆 折 之 序， 見 閒 神 而 狂。 陽 明 遇 金， 鬱 而 多 煩。 陰 濁 藏 火， 包 而 多 滯。</li>');
    var 滴天髓輯要1=滴天髓輯要1矩陣.join("");

    var 滴天髓輯要2矩陣=[];
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：寒暖論">天 道 有 寒 暖， 發 育 萬 物， 人 道 得 之， 不 可 過 也。 地 道 有 燥 濕， 生 成 品 彙， 人 道 得 之， 不 可 偏 也。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：剛柔論、順逆論">剛 柔 不 一 也， 不 可 制 者， 引 其 性 情 而 已 矣。 順 逆 不 齊 也， 不 可 逆 者， 順 其 氣 勢 而 己 矣。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：月令論">月 令 提 綱， 譬 之 宅 也， 人 元 用 事 之 神， 宅 之 向 也， 不 可 以 不 卜。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：生時論">生 時 歸 宿， 譬 之 墓 也， 人 元 用 事 之 神， 墓 之 穴 也， 不 可 以 不 辨。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：源流論">何 處 起 根 源， 流 向 可 方 住， 機 括 此 中 求， 知 來 亦 知 去。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：通隔論">兩 意 本 相 通， 中 間 有 關 隔， 此 關 若 通 也， 到 處 歡 相 得。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：清濁論">一 清 到 底 有 清 神， 管 取 平 生 富 貴 真， 澄 濁 求 清 清 得 去， 時 來 寒 谷 也 生 春。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：清濁論">滿 盤 濁 氣 令 人 苦， 一 局 清 枯 也 苦 人， 半 濁 半 清 無 去 取， 多 成 多 敗 度 晨 昏。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：真假論">令 上 尋 真 聚 得 真， 假 神 休 要 亂 真 神， 真 神 得 用 平 生 貴， 用 假 終 為 碌 碌 人。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：真假論">真 假 參 差 難 辨 論， 不 明 不 暗 受 邅 迍， 提 綱 不 與 真 神 照， 暗 處 尋 真 也 有 真。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：隱顯論、眾寡論">吉 神 太 露，起 爭 奪 之 風， 凶 物 深 藏， 成 養 虎 之 患。抑 強 扶 弱 者 常 理， 用 強 舍 弱 者 元 機。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：奮鬱論">局 中 顯 奮 發 之 機 者， 神 舒 意 暢， 局 內 多 沉 埋 之 氣 者， 心 鬱 志 灰。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：恩怨論">兩 意 情 通 中 有 媒， 雖 然 遙 立 意 尋 追， 有 情 郤 被 人 離 間， 怨 起 中 間 死 者 灰。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：順反論">一 出 門 來 要 見 兒， 見 兒 成 氣 轉 相 楣， 從 兒 不 論 身 強 弱， 只 要 吾 兒 又 遇 兒。</li>');
    滴天髓輯要2矩陣.push('<li data-author="--- 滴天髓：順反論">君 賴 臣 生 理 最 微， 兒 能 生 母 洩 天 機， 母 慈 滅 子 關 頭 異， 夫 健 何 為 又 怕 妻。</li>');
    var 滴天髓輯要2=滴天髓輯要2矩陣.join("");
    
    var 滴天髓輯要3矩陣=[];
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：戰合論">天 戰 猶 自 可， 地 戰 急 如 火。 合 有 宜 不 宜， 合 多 不 為 奇。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：震兌論、坎離論">震 兌 勢 不 兩 立， 而 有 相 成 者 存。 坎 離 氣 不 並 行， 而 有 相 濟 者 在。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：君臣論">君 不 可 抗 也， 貴 乎 損 上 以 益 下。 臣 不 可 過 也， 貴 乎 損 下 益 上。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：母子論">知 慈 母 恤 孤 之 道， 方 有 瓜 瓞 無 疆 之 慶。 知 孝 子 奉 親 之 方， 始 能 克 諧 大 順 之 風。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：才德論">德 勝 才 者， 局 全 君 子 之 風， 才 勝 德 者， 用 顯 多 能 之 象。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：閒神論">閒 神 一 二 未 為 疵， 不 去 何 妨 莫 動 伊， 半 局 閒 神 任 閒 著， 要 緊 之 地 立 根 基。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：絆神論">出 門 要 向 天 涯 遊， 何 似 裙 釵 恣 意 留， 不 管 白 雲 與 明 月， 任 君 策 馬 上 皇 州</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：貞元論">造 化 生 生 不 息 機， 貞 元 往 復 運 誰 知， 有 人 識 得 其 中 數， 貞 下 開 元 是 處 宜。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：貴賤貧富吉凶壽夭論">何 知 其 人 貴， 官 星 有 理 會。 何 知 其 人 賤， 官 星 總 不 見。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：貴賤貧富吉凶壽夭論">何 知 其 人 富， 財 氣 通 門 戶。 何 知 其 人 貧， 財 神 終 不 真。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：貴賤貧富吉凶壽夭論">何 知 其 人 吉， 喜 神 為 輔 弼。 何 知 其 人 凶， 忌 神 輾 轉 攻。</li>');
    滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓：貴賤貧富吉凶壽夭論">何 知 其 人 壽， 性 定 元 氣 厚。 何 知 其 人 夭， 氣 濁 神 枯 了。</li>');
    //滴天髓輯要3矩陣.push('<li data-author="--- 滴天髓："></li>');

    var 滴天髓輯要3=滴天髓輯要3矩陣.join("");

    var QuoteNum = (Math.floor(Math.random() * 4) + 1);
    var SelectedQuote;
    switch(QuoteNum) {
        case 1:
            SelectedQuote = 滴天髓十干;
            break;
        case 2:
            SelectedQuote = 滴天髓輯要1;
            break;
        case 3:
            SelectedQuote = 滴天髓輯要2;
            break;
        case 4:
            SelectedQuote = 滴天髓輯要3;
            break;
        default:
            SelectedQuote = 滴天髓輯要2;
    } // end switch

    RotQuote.push('<ul class="word-container">');
    RotQuote.push(名師名句);
    RotQuote.push(SelectedQuote);
    RotQuote.push('</ul>');
    RotQuote.push('<div class="quote">');
    RotQuote.push('<blockquote>');
    RotQuote.push('<p class="quote-content"></p>');
    RotQuote.push('</blockquote>');
    RotQuote.push('<cite class="quote-author"></cite>');
    RotQuote.push('</div>');

    return RotQuote.join("");  
}  //end GenRotatingQuotes