

function 系統參數(){
    //this.userid="";
    this.progid="88387512A08ljhu2IlyhW*a,A8IIT";  //last 7 digit is image code
    this.mode={"activated": true, "engineering": false};
    this.timezone = "";
    this.country = "馬來西亞";
    this.city = "馬來西亞";
    this.integrity=false;
    this.expired=false;
    this.expiry = new Date(2030, 10, 30);
    this.access = new AccessLic(this.progid);
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
    
    this.運算設定 = {
        "干支基數": 15,
        "命宮月數": 1, //0：依照農曆生月 1：生月中氣（八字）2：盲派
        
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
    this.運行狀態={
        "已輸入命盤": false,
        "已登陸": false,
        "大限數": -1,  //還沒有選擇大限，0為童限 
        "-": ""
        };

    this.用戶設定={
        "userid": "",
        "命盤顯示": new function(){
                        this.版本 = false;
                        this.版權 = true;
                        this.sysinfo = false;
                        this.八字 = true;
                        this.中宮流年 = true;
                        this.三合分色 = true;  // 三合宮位用不同顏色顯示
                        this.宮干四化顯示 = 2;  // 0: 換字體顏色, 1: 換背景顏色, 2: 換字體背景顏色, not in used !!
                        this.中宮切換 = true;
                        this.隱藏命盤選項 = true;
                        this.分析內容 = true;
                    },

        "輸入顯示": new function(){
                        this.夜子時=true;
                        //this.城市=true;
                        //this.區域節氣=true;
                        //this.真太陽時=true;
                        this.命盤格式=0;
                    },

        "功能": new function(){
                        this.版本 = "私家";  //大眾、專業、私家
                        //this.命盤分析 = true;
                        this.八卦速查 = true;
                        this.飛宮干四化 = true;
                        this.架構飛四化 = true;
                        this.架構飛四化高階 = true;
                    },          
        "App": new function(){
                        this.命盤設計 = true;
                    }, 

        "輸入預設": new function(){
                        this.命盤預設用當下時間=true;
                        this.年=1972;
                        this.月=8;
                        this.日=31;
                        this.時=0;
                        this.分=0;
                        this.夜子時=true;
						this.無夜子調整年=false;  //設定不用夜子時，在除夕夜，夜子時年份調整多一年
                        this.城市="馬來西亞";
                        this.區域節氣=false;
                        this.真太陽時=false;
                    }                           
    };
}

/*
function AccessLic(LicKey){
    var LicCode=GetLicCode(LicKey);
    
    this.internalmode=Boolean(Number(LicCode.substr(14,1)));
    this.debugmode=Boolean(Number(LicCode.substr(15,1)));
}
*/


function 版本參數設定(){
    this.BodyImg = "";
    this.CopyrightImg = "data:image/gif;base64,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";
    this.版本名 = "測試版"; //測試版,大眾版,專業版,私人版
    this.版本號 = "v0.4";
    this.版本顯示 = this.版本名 + " " +this.版本號;
    this.平台標題 = "虎 頭 牌 開 發 版";
    this.網頁標題 = "十八飛星 斗數排盤";
    this.HeaderImg = "data:image/gif;base64,R0lGODlhLAFmAHcAACH5BAEAAAAALAAAAAAsAWYAh/8A/wAAAAAICAcHBwsMDRAIEBISEhAYGBgYGBgYIRghISEhISQmJikhISkpKTExMTg4OTk5Qj0+PkNDQ0JCSkpKSkpSUlJSUlpaWl9fX2pqanNzc3t7e4ODg4eJh4yMjJSUlJSUnJiZmJycnKGhnqWlpaqqqK2tra21rbWtrbW1tbS0/r21tby7t729vcPCv8XFxcvLyc7Ozs7O/s//z9PT0dbW1t7e3tv+2+fn5+f/5+f//+zr6e/v7/fv7/X18vf39/j8+/P+/v8A//60tP7Ozvz7+P//5//+8/7+/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAj+AAEIHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQEcmAUI0SRKQSXrYgKFiBIgPUD+AKKECxo0eRz8aJQoka9CvYAUmuTEiAwQHCxw8wPBBhtGLSXK08IABwgIEBgboDcCX7wADBhYsgJABBAysGJPA4HDhQVoHEzSUyBG2ck8YGBYM6Ms5AIIKJ7xCTGIDRAUHBjqrXt337wIMk0U/BDICQurVAxZsuGG5d00gHBCw7mzgAu+HPUpUQLB5uHPWuTGoAAJRxoTmzxeMkO27e8ob15/+d17gouGNDprFqx9uAMII6guTlFiw3m8G+N7zm7zxIAD29QiooFAO6NVnIHQOvKfQCLcdiAF++kX4UQ8QHMjZAjAcJJ8DFnao2gAQlHeQCsJ5qAF3EqZoURIY+OdhAA5QRpANFzT44o0IbNBDQTbQ9+IAIKgoJEYl/OdhBlnJ5+ONTPr1QIZiVdDkAjZE9AFfC+zgERFYatkQl6xNIMRCYBr4QWVA9NckAjIAAMQGNlr4FwJ4AWbkgQhsB4AKcXqIAYoGXbnaCgQdseRqHUwQgAEzGISEoos2alAGB2Y5kKFNBpBBQ4/eeGZHRWYawAUuVHDncwhMkMEHJbggww3+OcSaww0yuFBCBxlMUGJ9BmwAA6RrVrkQpqwRCkCn9Rk7ELKMOgqsepYOVESfHS7AZwBiIlTmi8pmlMQFovpHLWsGVPABDDkYpe667K6bgwuJnsrarpl+utC02ApBrKYC7ctaCcBuShCy0RZEaQD2EtusQoJG+tC2F3q5EbEFYwTEoS8igLFzE4BwQ7sgh8yuDB+oOVxzA6CWaQWAktklABRrWWazyApM0ME2F3SlvQIJyvNDMQNQ5qfITgAuXz8PdHC3EOGb80U2jFsfAhn8Kt4AGMAg8tZcD6WClOJpgJnU6zkA4UGdFgwmzZDajPNAYGZ7M9IIUVowwRI75G/+Bsjy2zNfKyyN0L6W9j3cp5hWbJEL8q73gAtJHOwcBm51bfnWpT43wHYnbGwgAjImhOnCAODLNuAD+SxtanIrTbezfRFqeGetH9RwXxPoAKy9V5KeEL43Aox6Ric0Lh4GO35g/ARaX+781iVwOBwC5YGX8XGi+6is6ZJeWbDq/dLXur9MH/useuWbr1q0kttLKaPTPk0QxB0mOjxGxcsZQAXUwUAvcSB4ngC31oMNOOcBlKGQhxCAvcH5KFrcEwiXcgY+gdjNS7djzQdmtxr5ESSDnLHX0FLHlwxsS3EjnAiykkYRFRhvOA/YERAqxBoHuAAIPejKAHdolB7kkEH+w0ESAG7gOfGAblgYM4AK6HO6773OggGIFghVw7e2zY8vvjuI5FSzvdvYC3gr2NbPypS+hhCrjBKRAdnIJaIO3AllqclNBThwQx52DQgq2ICu9PK/ziAASiVY42oWcDaD+IsvGxDfmM5IQoStzmECMZwJcTcmwcHtZQoh1qaQpSxGug51R4CApAgCPNXQkFejvEgPiji5o+SgiANYiwY0kKvbNM+OIisBliqQAVpi4AHymsBRkgA2AwkTiViUVKeM5cmaNbJiRRtT7yR1sGyVcn15OwixRNiXnPWtdgM734vAWZEkiPM5BoASB1jDARu0CwgwAEG6cCkysthAh+r+AoIMttgXJQrkWgbiAEM8ab6FbVMgwJMiJj/5KS6x70AenFtfzuSvgh0yiwiNU5au6RzFXQQEL+wMBI7SA+l15gP0TKnIKGUklrnJpOr540AV+UjELWmDzxIT3nT2Ou9hUDxopBhA66PT85GzkQZdUkQnBFPxbEAgI/jPZjag0qq+U5xsEkiL6uNSZDrRkeqrT9LARym5VbB0qcHoss55IGs2yKORhBTPBKXWkChvPZsDADFVMwF8WvWvN+ijQAHQgalBCZlR1FLDiMbW1ZATTGfqlFnvh1ZIavNQp+znDOjHmbpedqJrjR1KgFBMdAooB/8zgDv/ylqjnEA1Dzj+SlTVM4CnmpGVjEVnKg3itMrarExiOiRoGSI5uQGPUWWyFKVY+EnNwsxzS+0If9Tjz1BxpgOtze63/Fgl6z7nAoV0YBDjKlqJYGpTkH0kUceUvSdq8rlI61vSOPoiz1pEBk1djT81MB6saJe1MpDqCAAw2+dUYEcOKSVOu0lesEpEskIQVLcaZjQqAqB9mWTiKFeovgno0rnhDFcA0Ag1k0GnBEnIbACw+9/WHq0vGiCs5pDXtNsoS1AC42RF3mc1+yZEUEfNaGI/SLfzYtiQSkVIKX0Mkh5ogGwcAAK9DPCxFrP2tZwRJj/9iN2IRFCCJWwwiRciqBHQB64O3cH+crmUrcRl84r5IjK/0puRfTG3JEkoVR/5UgE1ZtnKre0BvRZQ0nlloE0S+bLQwhzWMSvkmuOjz6r4YuaTqg+uUHRwpsWEY41skckiSYIMOnABtNAJLb36D4sB/dcXewakDnAAndLClo9RBF9qY3SnQC3e4QrZw5RmovQiqyhME3TTQogbDGzsshthGik4jBUQbICXzqiA1awtbGvukgMgxCqHLXMImL6aY0Xxum6c6RauDRgA4WknzLve7TOzWc1kY1HbDP4sk4JsEn4OYLXYruoIVDNYjoxbYkAeU7wt0rCK4bh3PQZiltL25spqGtnA+wDEmDtFiL6EiJ2dZ8D+VaqCzsTQI4L6arYWXpHkSmyF0zyY8EbsZiQnc1J8Ce4Dd7Cv6KI73zjZIgL8O/KUuoAzQPpIvRu5crlWpG+kW9sMLngwqOR82UMuVJJxHufFYsTOOhG6f3PwgToWvWs5OAEI/Hv01pTAI9FkOnsP9uyF8NNSwMtdsXeAY2LRsHbbUuvSwc7wLLP3JvztC+iMAgMsXqAEVT77ukgWHiobpeRu9wixWpdwMC/0IVsuoeRW4OaU870zNjskc5cOgNv5nGF8PXxN8L2oKnv7BBgo0QM2oAKiszrtGnhgBlQgcixjUUQcybic5cbB2EFMbv6yn2rOFDd7O4zwqk8I6y/+XKwGizjnsj9Jgflyy3zCoAM0HEAFQADw1urzA8CaQFv8apSBKx7RHKFrKjsfPlQumjMCc1yjlHBg5HkLc0131nrgJ1Go9zffl24rgXV9cW31VAK5xxcOoAHEV1U3cAIZIHwnEHkgQ3uE5hG9JWcolCwK6Gs/NjxV139ysy1jxn+NFEKZFjHw9SIJKBKrxBkB1DU9sBhqon6+N0A3cEoQ0AEyQH8hs0XHZBLL9HVnVnEqASavNyR65WpI8jw2MAIVMAEit0M2AAGwEYaWY2IdgIVqeBPj9wBMKHnOcwMNklVrWIcy8Uqt0X5w+DzGhy3hZoeAaBLsRmnuogIncIj+VWED3QZoPZADS2GIiBiGkmMAJxCIltgSeJhz6pID+eUfCPAAFYABG9ABI3ACrgIrRQgyjXgDTKF2HaABFzABDzAuEKBDqIU7f3iJuvgRIOUXzVNyHFACH8ABGoABFXAWzAEdCAAZF5ABHQACIMABGRCLqCEvA7CMRpMBowgCuBcAlQMCindYuziOJLFdfPEneRYAFMgu0XYDaqECwkiMxugYeYF0gQEBoagBHMCNS4RAPvSGBuROQCA9A5CG5HiQJNEDJqM1NxAAJ7I1kCEyOERED3AVb2gUEbk1toEVDfMnCPmRImED0uOGSYAWF4mRwsQ1GQmRI1VP+zMWt3H+YCA5kyBhA2pyIgOHUiKzkjuZkiy5NZRybZByAQhGk0bJETkAKQHUH5ATMjzplD65ky0JMgPHMvxlABoQXke5lRXxJqkxAqg1ACgGMk9JllHplFPJLoXlAAUURQHElXCpEUlwAhzSATa5P2anLmXZLnvJLg6QlklRAv0xATbQIhOAf3GZmBeRA/x1Aee3GRlYAvdUkmdpll3zACPVAzIwAhdoAB9wArP4AVqpmKQ5GieAFx3gAiXTT/2BAM9YAqYIAzJgAzZwAzfQIxBgm7dpAzIAAy5wAiUQjXkxi30BAZ+ZAbGEmKW5nBTBmNe4Aa4CL6WWjJmiMQ5wAR1QFbj+9xeiyZzeCTVPFksdAAM6pJm2Moy0lAEZgAHa2AEf0AHwKRVTcQKJuIhJ4QIa4AC50QGhox8H42MZkEVlFX4YMaAXYYUJ5pl1s4MxkQNemBqpogEjgC52BAQ34AIgUBepsQDDN5oYQUYmIVwj9mipkTM19yWMhi+to2gUQXdUGGIY9TY8AQRbtSit8YkV0IyjGJ9RwQEbMI0TIGvYsStdJhKlJDuNZWGINRxldEGY0josh1jCU03gQiidpmS38Wz6R1yW1kgM+hJAAAIGgAAaMABZaQMn8AGwaBd2Ah1jOhgXoAEgoAI3MEO6YQAOcG0iIV/0NRwVI6JcxBCc5C/+zVJcN8VbXqSi4iNpnKVp/nJU55UQzfcyOpYTMgABWEMr7QYyOLSKtpkDngqqFwkn02YqGNCfH2F6BbEv/GZxljURhjJx53MmoRdn3odefGE/sQgj4yI/9OM7UagtdPM+m4U6eUegMQEEbpSnRrFOIhgyOCQDJ2CGIVNyoaEkCIBiLFGAFHFsGTZinfI0F0SijAYm9iN9yZRC2teA8HVnPsNJvVWrjOYSl1pbRAcBsbU1tAIDFggBcpqXIJMDZqouPYCcGYCqULh3XpVNyscpilJFtvo3PkYEboUBqXGuDxtidVeD+RKpB9GoIvUcrSoUYmotWxEXtbU1KqABFcD+AJzBABpQOSIzAQvALqdJHioRrjP1qmF1hVBkLXFyJse6s31hsbyqKZFKKfLjdQaTWE+KrB03XmH1pSHRAy1SAWb4WuvYLjIgGJFxAjZQAghAAAswAdMhMleih+AxACiVEpTiaAdFSg3ypSIKeBrEdRCgYvGVsTtTEIYTZE+LEBLGfVkiXO6TdStxl6u2LmVKrVsRpB/wA+CWYgQAAhowAU0JMo23He1iQDSGERkkeBeHNgEDqNgEZyDGfefGLMXKrleidyOKqIEaYkFWJnrrSDr7N1T7ES6AF9fKl4C5LiowASfwA9JYOR3wACewmSeQiluBABcQMlGVmx86u03++3qTqh4rWqJaxxpaaoMKwWY4QB87aDgLQ3EIkb0KZVbnxhFJwCAOoIfq0pCLyy7w+APycQEqgL81sAAg8AIvwAFgGTI1cpH+gyH9FrHpCywQFCcjK7edNQOzg1GBNwN9ulGBcS2OdoP8gr4McVYZZSmx+qIiIaYHlksBkLk2S1VjkaMZgBWgaQIucH4ZMALOC47lxy5HSD0kAWEL4Ux+a0VAo2G/wzrhdzsTML5MOi0GUFjtG4WjI2+X4h59knr0QShpthJX8pAhgwED4LwskpU9sEQOABuXSkctYCsV8B4gIwMIszUXMACVOBI+bHc863kb/Ej8pqLIyn1iwln+zLQkG0uusRso2eElSst9PusRUbNi0LoALBMyIOAARiADdORDJUAYLbDJLaAC7vGGF1OZ6kIpsaURYFI+dawQBmpzi5yD6NOCvwW+YaXAEGE4qJyxK4jFw+M9NEC+K2FO7REAPzgybxwyLoBA6wID/uoCLqACLvACJMAAOtKEA+C46zSLBnkRURpaD7zKhry6SUo7fTxBJKQy3SI5S+tc2TtIWiKijGJJ+FIh7bsRJdcBaRIAv6suOCwyGzAAkGMESECjFxADMcAUzEwCHHqRurS1RgGO/FMjDUQRCAo7g+zNBXGCKDq6PFXIBUHOf4MavsO0l5QpxgKyCzjLg+z+Ed8ydGOhGTlcI2CcBOB4AfPkP4YBAzbgzDTM0OvSkCysLq8FAVjReLu7wJQVWoP8un3MfRytyk9Euk89N26DLYKRNw1TPg33oo+61CDctPOKEknwAD6pRggAcD1QHFtjAyljAkZxAxIQszOsAi9QKuy3NQ/gAOtydAswT2ftkS130kGMuLD8raDWp2HSx4kMX4kU0ixoXj4SXUUjgYgr0mBNs13RFcsWI4wXAJwrMh3gmhxwAzywAA/wAmmsAjKwAdB5kkngrEZBbQYgszYQALbVrdojXkkt2CB6cOLGFzNXXj+sKNkCJpX2AWWlxID9YJCSPiZNSQ7oNyqhS8j+oy7rVIt7JbO51AEiYBi2MQLN3AJpKgMxfXmaEhf0cUtJmU6FR8vq5WhLt0VTLdhOjauaMi0bC2Fp08sXMohRHRHEaju+bUUy6nmNbRIsEkVOMQFjuj9SErzSywAdU3KPtwEDzNpbQR+7SjWwGRwFmYtFfNSXcigJaNi10zeOZnqnDKKSKtzWx2ndVCYdkFZS7BD/rRBpcy05Y7tAN1obwBzPaQP4NgHjncxfmMl33SuOG7D66R/cqOB6sQDaqhBE0WtyI69M2n9KanPAfdG34VaOpGBGDbsXN0L/OeMfDOJch0lg53IqMRauAh/vi3tjKjYWbhTdlgMqEIxDnhT4KhCgvQKPw5QDszmaQtAVbhIEwjo8hu0c9B3BSxqxG1dTzXVz3KzEtQM85UbpVoLmTL0eyjIzZt7mX7MZC3ABZXcVuNQDN6ACHbAc/uGYHl4QRYFM2/vAG83pP+cwksTlHG04FZPYH/vV3trbTY3lCwhC4KTiMzEWplGPuQEBzbiPIwCbKlDt1g6cIzCMGVABD0Cd0DsCEY2FFHt49k3CXuYAof4RhjLP3jEUMlACG1AXeBFSegEYg4EBHLC8hv6d/A7WE7kUzGzthqjTsymqsd7vCJ/wCr/wDN/wDv/wEB/xEj/xFF/xFn/xGJ/xGr/xHN/xHj/xAQEAOw==";
}


// *************************************************




