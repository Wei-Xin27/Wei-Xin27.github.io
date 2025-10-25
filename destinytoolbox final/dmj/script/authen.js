function EncodeUID(userid, expirydatestr, pwd){
    //expirydatestr = "20200730", 2020-07-30
    var charstr = "abcdefghijklmnopqrstuvwxyz";
    var numstr = "0123456789";
    
    // ****** Scrambling userid related ******
    var uidlen = userid.length, uidlenStr;
    var upwdlen = pwd.length, upwdlenStr;
    
    var uidPart1a; // 4 digit randon no. + userid length + 2 digit randon no.
    uidPart1a = GenRandonStr(numstr, 4) + zeroPad(uidlen, 2) + GenRandonStr(numstr, 2); //console.log(uidPart1a); 
    
    
    var uidPart2a; // username stuffed/trimmed to 12 chars
    var uidPart2b; // scrable uidPart2a into 18 chars
    
    if(uidlen > 12) uidPart2a = userid.substr(0, 12);
    if(uidlen < 12) uidPart2a = userid + GenRandonStr(charstr, 12 - uidlen); //console.log(uidPart2a);
    
    var uidPart2c, uidPart2d, uidPart2e;  //break 12 char uidPart2a into 3 parts & assembly as uidPart2b
    uidPart2c = uidPart2a.substr(0, 1) + uidPart2a.substr(3, 1) + uidPart2a.substr(6, 1) + uidPart2a.substr(9, 1);
    uidPart2d = uidPart2a.substr(1, 1) + uidPart2a.substr(4, 1) + uidPart2a.substr(7, 1) + uidPart2a.substr(10, 1);
    uidPart2e = uidPart2a.substr(2, 1) + uidPart2a.substr(5, 1) + uidPart2a.substr(8, 1) + uidPart2a.substr(11, 1);
    
    // Assembly with uidPart2e + 3 + uidPart2d + 3 + uidPart2c
    uidPart2b = uidPart2e + GenRandonStr(charstr, 3) + uidPart2d + GenRandonStr(charstr, 3) + uidPart2c; //console.log(uidPart2b);
    
    
    // ****** Get the expiry days count ******
    var baselinedate = new Date(2017, 3, 27);
    
    var ExpDate = new Date(Number(expirydatestr.substr(0,4)), Number(expirydatestr.substr(4,2))-1, Number(expirydatestr.substr(6,2)));  //console.log(ExpDate);
    var ExpDays = momentDateDiff(ExpDate, baselinedate, "days");  //console.log(ExpDays);
    var uidPart3;  // days to expiry in 5 chars str
    uidPart3 = zeroPad(ExpDays, 5);  //console.log(uidPart3);
    
    
    var uidPart4a; // 2 digit randon no. + pwd length + 4 digit randon no.
    uidPart4a = GenRandonStr(numstr, 4) + zeroPad(upwdlen, 2) + GenRandonStr(numstr, 2); //console.log(uidPart4a);
    
    var uidPart5a; // user pwd stuffed/trimmed to 12 chars
    var uidPart5b; // scramble uidPart5a into 18 chars
    
    if(upwdlen > 12) uidPart5a = pwd.substr(0, 12);
    if(upwdlen < 12) uidPart5a = pwd + GenRandonStr(charstr + numstr, 12 - upwdlen); //console.log(uidPart5a);
    
    var uidPart5c, uidPart2d, uidPart5e;  //break 12 char uidPart5a into 3 parts & assembly as uidPart5b
    uidPart5c = uidPart5a.substr(0, 1) + uidPart5a.substr(3, 1) + uidPart5a.substr(6, 1) + uidPart5a.substr(9, 1);
    uidPart5d = uidPart5a.substr(1, 1) + uidPart5a.substr(4, 1) + uidPart5a.substr(7, 1) + uidPart5a.substr(10, 1);
    uidPart5e = uidPart5a.substr(2, 1) + uidPart5a.substr(5, 1) + uidPart5a.substr(8, 1) + uidPart5a.substr(11, 1);
    
    // Assembly with uidPart5e + 3 + uidPart5d + 3 + uidPart5c
    uidPart5b = uidPart5e + GenRandonStr(charstr + numstr, 3) + uidPart5d + GenRandonStr(charstr + numstr, 3) + uidPart5c; //console.log(uidPart5b);
    
    var ProgID = uidPart1a + uidPart4a + uidPart3 + uidPart5b + uidPart2b;    
    var encodedUID = {"userid": userid, "useridscrabled": "", "usercode": ProgID};
    
    console.log(encodedUID);
}  // end function EncodeUID



function DecodeUID(uidcode){
    //if(consolelog === undefined) consolelog = false;
    var uidPart1a = uidcode.substr(0, 8);
    var uidPart4a = uidcode.substr(8, 8);
    var uidPart3 = uidcode.substr(16, 5);
    var uidPart5b = uidcode.substr(21, 18);
    var uidPart2b = uidcode.substr(39, 18);
    var baselinedate = new Date(2017, 3, 27);
    
    var UserID = {
        "id_length": Number(uidPart1a.substr(4,2)),
        "pwd_length": Number(uidPart4a.substr(4,2)),
        "expiry": new Date(2017, 3, 27),  // baseline date !!
        "expired": true,
        "pwd": uidPart5b,
        "id": uidPart2b
    }; // end var UserID
    
    UserID.expiry.setDate(UserID.expiry.getDate() + Number(uidPart3));
    //console.log(UserID.expiry instanceof Date && !isNaN(UserID.expiry.valueOf()));
    
    UserID.expired = (UserID.expiry < new Date()) ? true: false;
    if(UserID.expiry instanceof Date && !isNaN(UserID.expiry.valueOf()) != true) UserID.expired = true;  //if the date is invalid, set to expired
        
    var upwd1 = uidPart5b.substr(0,4) + uidPart5b.substr(7,4) + uidPart5b.substr(14,4);
    var upwd2a = upwd1.substr(8,4);
    var upwd2b = upwd1.substr(4,4);
    var upwd2c = upwd1.substr(0,4);
    var upwd3 = upwd2a.substr(0,1) + upwd2b.substr(0,1) + upwd2c.substr(0,1) + upwd2a.substr(1,1) + upwd2b.substr(1,1) + upwd2c.substr(1,1) + upwd2a.substr(2,1) + upwd2b.substr(2,1) + upwd2c.substr(2,1) + upwd2a.substr(3,1) + upwd2b.substr(3,1) + upwd2c.substr(3,1);
    UserID.pwd = upwd3.substr(0, UserID.pwd_length);
    
    var uid1 = uidPart2b.substr(0,4) + uidPart2b.substr(7,4) + uidPart2b.substr(14,4);
    var uid2a = uid1.substr(8,4);
    var uid2b = uid1.substr(4,4);
    var uid2c = uid1.substr(0,4);
    var uid3 = uid2a.substr(0,1) + uid2b.substr(0,1) + uid2c.substr(0,1) + uid2a.substr(1,1) + uid2b.substr(1,1) + uid2c.substr(1,1) + uid2a.substr(2,1) + uid2b.substr(2,1) + uid2c.substr(2,1) + uid2a.substr(3,1) + uid2b.substr(3,1) + uid2c.substr(3,1);
    UserID.id = uid3.substr(0, UserID.id_length);
    
    //if(consolelog) console.log(UserID);
    
    return UserID;
} // end function DecodeUID


// --------------------------------

function EncodeImgURI(URIcode, Start1, Len1, Start2, Len2, Start3, Len3){
    if(Start3===undefined) { Start3 = URIcode.length-1; Len3 = 0; }
    if(Start2===undefined) { Start2 = URIcode.length-1; Len2 = 0; }
    
    var hashcode = URIcode.substr(Start1-1, Len1) + URIcode.substr(Start2-1, Len2) + URIcode.substr(Start3-1, Len3);
    
    //console.log(hashcode);
    return hashcode;
}  // end function EncodeImgURI


function 用戶認證(用戶名稱, 輸入密碼) {
	//var 用戶資料 = UserDB();
    var 用戶資料 = UserGroup();
    
    var userinfo = {
        "id": 用戶名稱,
        "用戶正確": false,
        "pwd": 輸入密碼,
        "密碼正確": false,
        "expiry": new Date(),
        "alive": false,
        "remark": ""
    };
    
    var 資料索引=_.findIndex(用戶資料, {用戶: 用戶名稱});
    var dbinfo;
    //var 解碼資料 = "abcdefghijklmn";
    //var 密碼資料 = "abcdefghijklmn";
    
    if (資料索引 != -1) {
        userinfo.用戶正確 = true;
        dbinfo = DecodeUID(用戶資料[資料索引].解碼);
        
        if(輸入密碼 == dbinfo.pwd) {
            userinfo.密碼正確 = true;
            if(userinfo.expiry < dbinfo.expiry) userinfo.alive = true;
        } // end if pwd OK
    }  // end if valid user
    
    //console.log(userinfo);
    return userinfo; 
}  //end function 用戶認證


function UserGroup(){
    //Generated using EncodeUID
    
    var udb = [
        {"用戶":"espua","解碼":"8232052586520428043538o4agse07ndnvb889upaufksksaqdsseeuee", "pwd":"rpq5wxbz", "title":"", "備註":""},
        {"用戶":"zyx","解碼":"6758036968880448047692qpqgwi3qliy0b02kgxqeuqfbyiqbbioztyk", "pwd":"kxqf88o1", "title":"", "備註":""},
        {"用戶":"joan","解碼":"2931041812640419041720aqux350sqb7ko00wjappkfapoeuxcgmjnit", "pwd":"hh4frvev", "title":"", "備註":""},
        {"用戶":"guest","解碼":"1550051293250493003377eyp5p29ij5l7h041memqodgfutjgpckgsuz", "pwd":"3dd89e01", "title":"", "備註":""},
        {"用戶":"ljc","解碼":"2038037779620435020728hleky44wstuvu98vachhlxisjtboihjlebt", "pwd":"wutdcki7", "title":"", "備註":"林金城"},
        {"用戶":"spencer","解碼":"307207215711042402072602cy8a1hvye8q98ndeeguhmcpcnvmktsnrd", "pwd":"4iacwv0v", "title":"", "備註":"李應聰"},
        {"用戶":"wjq","解碼":"0134030769770473020720idptfe3iz8c2b076nqiuodqpjwizlqpwvsn", "pwd":"og4fg0b1", "title":"", "備註":"王俊錡"},
        {"用戶":"wys","解碼":"54010345670904660207207muvgo58vz52n08c6syeskxuyzzocmhwodc", "pwd":"zhjg5yvl", "title":"", "備註":"王宥善"},
        {"用戶":"ljl","解碼":"1551032198360458020722l8xbcl9gdmgsl0228lszvpscjcnhrodleoj", "pwd":"vmj0g0vv", "title":"", "備註":"李佳玲"},
        {"用戶":"u19q4","解碼":"6337051935960470009771z4kkhx4cmzefd136n9smcjhp14phiphuqrl", "pwd":"lop6lj1l", "title":"", "備註":""},
        {"用戶":"u20q1","解碼":"0741050643390475010679qs3kde27c5mmv38600piqnie21kzhfnuquu", "pwd":"pgui5mjj", "title":"", "備註":""},
        {"用戶":"u20q2","解碼":"5142053954810427011597rv6egs22n0byk18i30luojav22anztiuqds", "pwd":"wciem60k", "title":"", "備註":""},
        {"用戶":"u20q3","解碼":"0729056218510430012519z8gwcn4ole82s76oh0wmgmse23bmegruqbj", "pwd":"oioh9330c", "title":"", "備註":""},
        {"用戶":"u20q4","解碼":"4668053016700428013423yfzn7f4i1whsx166z0ynhowv24rsmbjuqla", "pwd":"qwuk410z", "title":"", "備註":""},
        {"用戶":"u21q1","解碼":"42810565069604730143296k91yz2982y0k38yg1lpejhj21rzhmzuqsa", "pwd":"lpui5mjj", "title":"", "備註":""},
        {"用戶":"u21q2","解碼":"3728054902370421015247t0p06c29dn79g18sa1oydldn22tztibuquy", "pwd":"kcph210f", "title":"", "備註":""},
        {"用戶":"u21q3","解碼":"0472055113720490016169oh8wyy4rfrb2l765q1fubqaq23ubpnzuqqd", "pwd":"hk4frvtv", "title":"", "備註":""},
        {"用戶":"u21q4","解碼":"62950533207604860170732ppikv4etous3164k1mdjyrr24clectuqqz", "pwd":"mcsl664f", "title":"", "備註":""},
        {"用戶":"u22q1","解碼":"1650058101480445017979i58dqu2kmen3p38uu2nppfqc21rrkxluqbt", "pwd":"lpui5mjj", "title":"", "備註":""},
        {"用戶":"u22q2","解碼":"0922050673010486018897atdzct27alrdh18rz2cjxchh22yxaceuqyb", "pwd":"drii522r", "title":"", "備註":""},
        {"用戶":"u22q3","解碼":"0781055081910482019819gaevct4g5cdpr76ud2yrwpdm23ftpdduqhv", "pwd":"tgwk043v", "title":"", "備註":""},
        {"用戶":"u22q4","解碼":"4640053730900400020723vzembj4ih5w0416h82sdjwqr24uhyetuqcv", "pwd":"vsps139l", "title":"", "備註":""},
        {"用戶":"u23q1","解碼":"7050055613580453021629dez1f42ttlteg380m3jmxjwr21vapeluqrs", "pwd":"lpui5moj", "title":"", "備註":""},
        {"用戶":"u23q2","解碼":"73650541856504290225474mfs9x29qm5vt186c3cyzquk22jbvgguqyc", "pwd":"hcyg554f", "title":"", "備註":""},
        {"用戶":"u23q3","解碼":"9999052159890432023469g70k3t4y1a1h276qz3uucnjm23ukjqvuqqf", "pwd":"sjpa721d", "title":"", "備註":""},
        {"用戶":"u23q4","解碼":"4877050168330421024373ht1vki4fczkw716ho3thnrwh24gtajvuqun", "pwd":"uqhd972k", "title":"", "備註":""},
        {"用戶":"u24q1","解碼":"66200503853204440252898wi28y2lqmkpe38lr4fgdpvh21halqyuqcb", "pwd":"lpui5mjj", "title":"", "備註":""},
        {"用戶":"u24q2","解碼":"29210587450704470262077es1pz2n6lnob18wp4gbrlhv22krpftuqrb", "pwd":"yxox818x", "title":"", "備註":""},
        {"用戶":"u24q3","解碼":"1195054273980480027129c3alvd4iv1qe676hn4srxqwt23ssxycuqbt", "pwd":"xmsy903g", "title":"", "備註":""},
        {"用戶":"u24q4","解碼":"0468057028080411028033hxd0wl4uhp32c16by4ipvtco24kfioiuqpl", "pwd":"wdfp258u", "title":"", "備註":""},
        {"用戶":"u25q1","解碼":"5750055099980427028939009hdj2d5q8rd38us5oklwzr21whuisuqxx", "pwd":"zpui5mjp", "title":"", "備註":""},
        {"用戶":"u25q2","解碼":"866805563553042302985758nzdj2tkkygb18rc5unvkwe22aftfbuqqa", "pwd":"jums568y", "title":"", "備註":""},
        {"用戶":"u25q3","解碼":"7958051016630439030779ampopo451jyni76ev5oopqcl23gydkquqqc", "pwd":"ebcu301e", "title":"", "備註":""},
        {"用戶":"u25q4","解碼":"2073059226440496031683wl0i0v4ejvgc416vp5hdkode24pwcfsuqpc", "pwd":"kfpw329a", "title":"", "備註":""},
        {"用戶":"user0349","解碼":"7895085737190479003376k0vehe53kbhaj979ke3jjcyas09vixcur4w", "pwd":"2u1vy3rj", "title":"", "備註":""},
        {"用戶":"lastuser","解碼":"449108701549106400612247c5zx109manv0204ssuotvsaurenzplteo", "pwd":"vsw3bj6e", "title":"", "備註":""},
        {"用戶":"expired","解碼":"60700786088709990-513dlygl0viaeqs7pmvl7pefzngtxrvjfyteidm", "pwd":"j6qobjp4", "title":"", "備註":""}
    ];
    
    return udb;
}  // end function UserGroup()



// **************************


function GenRandonStr(BaseStr, NumChar) {
    // generate a random string based on given BaseStr & no. of characters wanted
    var BaseStrLength = BaseStr.length;
    var RandomStr = "";
    var RandomChar;
    
    for(var i=0; i < NumChar; i++){
        RandomChar = BaseStr.substr(Math.floor(Math.random() * BaseStrLength), 1);
        RandomStr = RandomStr + RandomChar;
    }  // end for
    
    //console.log(RandomStr);
    return RandomStr;
}  // end function GenRandonStr


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
    // old Excel Generated passcode
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
}  // end function GetUid


function GetLicCode(LicKey){
    // old Excel Generated passcode
    var LicCodeTemp=LicKey.substr(7,4);
    var LicStr=HexStrToBinStr(LicCodeTemp);
    return LicStr;
}  // end function GetLicCode


function GetExpiry(LicCode){
    // old Excel Generated passcode
    var ExpCodeTemp=LicCode.substr(3,4);
    var ExpCode=Number(reverseStr(ExpCodeTemp));
    var BaseDate=new Date(2014, 6, 29);
    var ExpDate=new Date(BaseDate);
    ExpDate.setDate(ExpDate.getDate()+ExpCode);
    return ExpDate;
} //end function GetExpiry


function GetImgId(LicCode){
    // old Excel Generated passcode
    ImgID = LicCode.substr(LicCode.length -7, 7);
    return ImgID;
} //end function GetExpiry


function AccessLic(LicKey){
    // old Excel Generated passcode
    var LicCode=GetLicCode(LicKey);
    
    this.internalmode=Boolean(Number(LicCode.substr(14,1)));
    this.debugmode=Boolean(Number(LicCode.substr(15,1)));
}  // end function AccessLic


function ImgCodeReader(ImgCode){
    // old Excel Generated passcode
	return ImgCode.substr(7,1) + ImgCode.substr(21,1) + ImgCode.substr(49,1) + ImgCode.substr(64,1) + ImgCode.substr(88,1) + ImgCode.substr(106,1) + ImgCode.substr(123,1);
} // end function ImgCodeReader




// ****************************************

function DSIntegrityAudit(命盤){
    var vTitle=false;
    var vHeaderImg=false;
    var vCopyright=false;
    var vNExp=false;
    var 正標題=[];

    // ******* System Integrity *******
    //var ChartTitle=系統.版本.平台標題.substr(0,1)+系統.版本.平台標題.substr(2,1);
    //var CopyrightTitle=系統.版本.copyright.substr(1,1);
    var vCode = 系統.設定.progid;
    var ImgCode = ImgCodeReader(系統.版本.HeaderImg);
    var dtCode = GetExpiry(vCode);
    //console.log(ImgCode);
    //console.log(dtCode);

    vNExp = (dtCode > 系統.設定.system.date) ? true : false;
    vHeaderImg = (GetImgId(vCode) == ImgCode) ? true: false;

    //vHeaderImg = false;
    系統.設定.userid=GetUid(vCode);
    系統.設定.integrity = true;
    //系統.設定.progid = "30624700-534202-19342";
    GetLicCode(vCode);

    if(!(vNExp && vHeaderImg)) {
        命盤.紫微位置.地支數 = Math.floor(Math.random() * 12);
        命盤.紫微位置.地支 = 地支字數轉換(命盤.紫微位置.地支數);
        if(!vNExp) 命盤.五行局.局名 = 命盤.五行局.局名 + ".";
        if(!vHeaderImg) 命盤.五行局.局名 = 命盤.五行局.局名 + "_";
    }     
} //end function DSIntegrityAudit


// ---------------------------------

function shhpIntegrityAudit(hashcode, imghash, 橫盤橫幅, 安星組合, systemstatus){
    var vTitle=false;
    var vHeaderImg=false;
    var vCopyright=false;
    var vNExp=false;
    var 正標題=[];

    // ******* System Integrity *******

    vNExp = !DecodeUID(hashcode).expired;
    vHeaderImg = (EncodeImgURI(橫盤橫幅, 101, 9, 555, 5, 705, 5) == imghash) ? true: false;

    //系統.設定.userid=GetUid(vCode);
    //系統.設定.integrity = true;
    //系統.設定.progid = "30624700-534202-19342";
    //GetLicCode(vCode);

    if(!(vNExp && vHeaderImg)) {
        systemstatus.正常 = false;
        安星組合.紫微地支.地支數 = Math.floor(Math.random() * 12);
        安星組合.紫微地支.地支 = 地支字數轉換(安星組合.紫微地支.地支數);
        if(!vNExp) systemstatus.錯誤碼 = ".";
        if(!vHeaderImg) systemstatus.錯誤碼 = "..";
    }     
} //end function shhpIntegrityAudit