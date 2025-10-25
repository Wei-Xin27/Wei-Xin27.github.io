

function GenBaziChart(){
    var BaziChart = [];

    BaziChart.push('<table class="BaziChartTbl">');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlignNoBorder"><div class="命盤豎標題">資訊</div></td>');
    BaziChart.push('<td colspan="8" class="tdAlignNoBorder"><div class="生日資訊" id="mpxs-生日資訊">陽男</div></td>');
    BaziChart.push('<td colspan="4" rowspan="4" class="tdAlignNoBorder" id="mpxs-通訊標題"><div class="通訊內容格子"><img class="displayed" alt="Logo" height="116px" width="180px" style="margin: 0px 0px 0px 0px" src=' + 系統.版本.HeaderImg+'></div></td>');    
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlignNoBorder"><div class="命盤豎標題">西曆</div></td>');
    BaziChart.push('<td colspan="8" class="tdAlignNoBorder"><div class="生日資訊" id="mpxs-西曆生日">1972</div></td>');
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlignNoBorder"><div class="命盤豎標題">農曆</div></td>');
    BaziChart.push('<td colspan="8" class="tdAlignNoBorder"><div class="生日資訊" id="mpxs-農曆生日">1972（壬子）年5（閏）月5日早子時</div></td>');
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlignNoBorder"><div class="命盤豎標題">起運</div></td>');
    BaziChart.push('<td colspan="8" class="tdAlignNoBorder"><div class="生日資訊" id="mpxs-起運">---</div></td>');
    BaziChart.push('</tr>');
    //BaziChart.push('<tr>');
    //BaziChart.push('<td class="tdAlignNoBorder"><div class="命盤豎標題">宮位</div></td>');
    //BaziChart.push('<td colspan="8" class="tdAlignNoBorder"><div class="生日資訊" id="mpxs-命宮胎元">---</div></td>');
    //BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td colspan="13" class="tdAlign"><div class="主題橫幅" id="橫幅名稱">八 字 排 盤</div></td>');
    BaziChart.push('</tr>');


    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlign"><div class="命盤豎標題">四柱</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="四柱格子">時柱</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="四柱格子">日柱</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="四柱格子">月柱</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="四柱格子">年柱</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="四柱格子">大運</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="四柱格子">流年</div></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlign"><div class="命盤豎標題">歲數</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="歲數格子" id="mpxs-時柱歲數">*49-64*</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="歲數格子" id="mpxs-日柱歲數">*33-48*</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="歲數格子" id="mpxs-月柱歲數">*17-32*</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="歲數格子" id="mpxs-年柱歲數">*1-16*</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="歲數格子" id="mpxs-大運歲數">--</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="歲數格子" id="mpxs-流年歲數">--</div></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlign"><div class="命盤豎標題">主星</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="主星格子 mpxs-本命十神" id="mpxs-時干十神">時十</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="主星格子" id="mpxs-日元">日元</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="主星格子 mpxs-本命十神" id="mpxs-月干十神">月十</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="主星格子 mpxs-本命十神" id="mpxs-年干十神">年十</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="主星格子 mpxs-流運十神" id="mpxs-大運十神">大十</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="主星格子 mpxs-流運十神" id="mpxs-流年十神">流十</div></td>');
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlign"><div class="命盤豎標題干支">天干</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="八字格子 mpxs-本命八字干支" id="mpxs-時干">甲</div ></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="八字格子 mpxs-本命八字干支" id="mpxs-日干">乙</div ></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="八字格子 mpxs-本命八字干支" id="mpxs-月干">丙</div ></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="八字格子 mpxs-本命八字干支" id="mpxs-年干">丁</div ></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="八字格子 mpxs-流運八字干支" id="mpxs-大運干">戊</div ></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="八字格子 mpxs-流運八字干支" id="mpxs-流年干">己</div ></td>');
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlign"><div class="命盤豎標題干支">地支</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="八字格子 mpxs-本命八字干支" id="mpxs-時支">子</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="八字格子 mpxs-本命八字干支" id="mpxs-日支">丑</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="八字格子 mpxs-本命八字干支" id="mpxs-月支">寅</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="八字格子 mpxs-本命八字干支" id="mpxs-年支">卯</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="八字格子 mpxs-流運八字干支" id="mpxs-大運支">辰</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="八字格子 mpxs-流運八字干支" id="mpxs-流年支">巳</div></td>');
    BaziChart.push('</tr>');
    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlign"><div class="命盤豎標題藏干">藏干</div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="藏干格子" id="mpxs-時藏干"><span class="mpxs-本命八字干支" id="mpxs-時支藏干1">癸</span><span class="mpxs-本命八字干支" id="mpxs-時支藏干2"></span><span class="mpxs-本命八字干支" id="mpxs-時支藏干3"></span></div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="藏干格子" id="mpxs-日藏干"><span class="mpxs-本命八字干支" id="mpxs-日支藏干1">己</span><span class="mpxs-本命八字干支" id="mpxs-日支藏干2">癸</span><span class="mpxs-本命八字干支" id="mpxs-日支藏干3">辛</span></div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="藏干格子" id="mpxs-月藏干"><span class="mpxs-本命八字干支" id="mpxs-月支藏干1"></span><span class="mpxs-本命八字干支" id="mpxs-月支藏干2"></span><span class="mpxs-本命八字干支" id="mpxs-月支藏干3"></span></div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="藏干格子" id="mpxs-年藏干"><span class="mpxs-本命八字干支" id="mpxs-年支藏干1"></span><span class="mpxs-本命八字干支" id="mpxs-年支藏干2"></span><span class="mpxs-本命八字干支" id="mpxs-年支藏干3"></span></div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="藏干格子" id="mpxs-大運藏干"><span class="mpxs-流運八字干支" id="mpxs-大運藏干1"></span><span class="mpxs-流運八字干支" id="mpxs-大運藏干2"></span><span class="mpxs-流運八字干支" id="mpxs-大運藏干3"></span></div></td>');
    BaziChart.push('<td colspan="2" class="tdAlign"><div class="藏干格子" id="mpxs-流年藏干"><span class="mpxs-流運八字干支" id="mpxs-流年藏干1"></span><span class="mpxs-流運八字干支" id="mpxs-流年藏干2"></span><span class="mpxs-流運八字干支" id="mpxs-流年藏干3"></span></div></td>');
    BaziChart.push('</tr>');

    if(系統.設定.用戶設定.命盤顯示.運星){
        BaziChart.push('<tr>');
        BaziChart.push('<td class="tdAlign"><div class="命盤豎標題">運星</div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="運星格子"><span id="mpxs-時運星">死</span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="運星格子"><span id="mpxs-日運星"></span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="運星格子"><span id="mpxs-月運星"></span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="運星格子"><span id="mpxs-年運星"></span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="運星格子"><span id="mpxs-大運運星"></span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="運星格子"><span id="mpxs-流年運星"></span></div></td>');
        BaziChart.push('</tr>');
    }
    
    if(系統.設定.用戶設定.命盤顯示.納音){
        BaziChart.push('<tr>');
        BaziChart.push('<td class="tdAlign"><div class="命盤豎標題">納音</div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="納音格子"><span class="mpxs-本命纳音" id="mpxs-時柱納音">---</span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="納音格子"><span class="mpxs-本命纳音" id="mpxs-日柱納音">---</span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="納音格子"><span class="mpxs-本命纳音" id="mpxs-月柱納音">---</span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="納音格子"><span class="mpxs-本命纳音" id="mpxs-年柱納音">---</span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="納音格子"><span class="mpxs-流運纳音" id="mpxs-大運納音">---</span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="納音格子"><span class="mpxs-流運纳音" id="mpxs-流年納音">---</span></div></td>');
        BaziChart.push('</tr>');
    }

    if(系統.設定.用戶設定.命盤顯示.神煞) {
        BaziChart.push('<tr>');
        BaziChart.push('<td class="tdAlign"><div class="命盤豎標題">神煞</div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="神煞格子"><span id="mpxs-時柱神煞">天乙貴人<br>學堂<br>金轝<br>劫殺<br>將星</span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="神煞格子"><span id="mpxs-日柱神煞">----</span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="神煞格子"><span id="mpxs-月柱神煞">----</span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="神煞格子"><span id="mpxs-年柱神煞">----</span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="神煞格子"><span id="mpxs-大運神煞">----</span></div></td>');
        BaziChart.push('<td colspan="2" class="tdAlign"><div class="神煞格子"><span id="mpxs-流年神煞">----</span></div></td>');
        BaziChart.push('</tr>');
    }
    BaziChart.push('<tr>');
    BaziChart.push('<td rowspan="3" class="tdAlign"><div class="命盤豎標題大運流年">大運</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運9起年">1972</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運8起年">1972</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運7起年">1979</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運6起年">1989</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運5起年">1999</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運4起年">2009</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運3起年">2019</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運2起年">2029</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運1起年">2039</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運0起年">2049</div></td>');
    BaziChart.push('<td colspan="2" rowspan="3" class="tdAlign"><div class="資訊格子1"><img class="displayed" alt="Logo" height="92px" width="94px" style="margin: 0px 0px 0px 0px" src=' + 系統.版本.BodyImg+'></div></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運9起歲">1</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運8起歲">1</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運7起歲">8</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運6起歲">18</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運5起歲">28</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運4起歲">38</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運3起歲">48</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運2起歲">58</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運1起歲">68</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-大運0起歲">7</div></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlign"><div class="大運干支格子" id="mpxs-大運9干支" data-大運數="9">月柱</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="大運干支格子" id="mpxs-大運8干支" data-大運數="8">月柱</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="大運干支格子" id="mpxs-大運7干支" data-大運數="7">乙丑</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="大運干支格子" id="mpxs-大運6干支" data-大運數="6">乙丑</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="大運干支格子" id="mpxs-大運5干支" data-大運數="5">丙寅</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="大運干支格子" id="mpxs-大運4干支" data-大運數="4">丁卯</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="大運干支格子" id="mpxs-大運3干支" data-大運數="3">戊辰</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="大運干支格子" id="mpxs-大運2干支" data-大運數="2">己巳</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="大運干支格子" id="mpxs-大運1干支" data-大運數="1">庚午</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="大運干支格子" id="mpxs-大運0干支" data-大運數="0">辛未</div></td>');
    BaziChart.push('</tr>');    

    BaziChart.push('<tr>');
    BaziChart.push('<td rowspan="3" class="tdAlign"><div class="命盤豎標題大運流年">流年</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年9年份">2009</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年8年份">2010</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年7年份">2011</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年6年份">2012</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年5年份">2013</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年4年份">2014</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年3年份">2015</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年2年份">2016</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年1年份">2017</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年0年份">2018</div></td>');
    //BaziChart.push('<td colspan="2" rowspan="3" class="tdAlign"><div class="資訊格子2">程式：<br><span id="CopyrightID">-</span><br><br>版本：<br><span id="版本名稱">-</span></div></td>');
    BaziChart.push('<td colspan="2" rowspan="3" class="tdAlign"><div class="資訊格子1"><img class="displayed" alt="Logo" height="92px" width="94px" style="margin: 0px 0px 0px 0px" src=' + 系統.版本.CopyrightImg+'></div></td>');
	BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年9歲數">38</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年8歲數">39</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年7歲數">40</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年6歲數">41</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年5歲數">42</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年4歲數">43</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年3歲數">44</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年2歲數">45</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年1歲數">46</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流運年歲格子" id="mpxs-流年0歲數">47</div></td>');
    BaziChart.push('</tr>');

    BaziChart.push('<tr>');
    BaziChart.push('<td class="tdAlign"><div class="流年干支格子" id="mpxs-流年9干支" data-流年數="9">甲子</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流年干支格子" id="mpxs-流年8干支" data-流年數="8">乙丑</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流年干支格子" id="mpxs-流年7干支" data-流年數="7">丙寅</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流年干支格子" id="mpxs-流年6干支" data-流年數="6">丁卯</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流年干支格子" id="mpxs-流年5干支" data-流年數="5">戊辰</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流年干支格子" id="mpxs-流年4干支" data-流年數="4">己巳</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流年干支格子" id="mpxs-流年3干支" data-流年數="3">庚午</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流年干支格子" id="mpxs-流年2干支" data-流年數="2">辛未</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流年干支格子" id="mpxs-流年1干支" data-流年數="1">壬申</div></td>');
    BaziChart.push('<td class="tdAlign"><div class="流年干支格子" id="mpxs-流年0干支" data-流年數="0">癸酉</div></td>');
    BaziChart.push('</tr>');
    
    if(系統.設定.用戶設定.命盤顯示.小運) {
        BaziChart.push('<tr>');
        BaziChart.push('<td class="tdAlign"><div class="命盤豎標題小運">小運</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="小運干支格子" id="mpxs-小運9干支" data-小運數="9">甲子</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="小運干支格子" id="mpxs-小運8干支" data-小運數="8">乙丑</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="小運干支格子" id="mpxs-小運7干支" data-小運數="7">丙寅</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="小運干支格子" id="mpxs-小運6干支" data-小運數="6">丁卯</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="小運干支格子" id="mpxs-小運5干支" data-小運數="5">戊辰</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="小運干支格子" id="mpxs-小運4干支" data-小運數="4">己巳</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="小運干支格子" id="mpxs-小運3干支" data-小運數="3">庚午</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="小運干支格子" id="mpxs-小運2干支" data-小運數="2">辛未</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="小運干支格子" id="mpxs-小運1干支" data-小運數="1">壬申</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="小運干支格子" id="mpxs-小運0干支" data-小運數="0">癸酉</div></td>');
        BaziChart.push('<td class="tdAlign" colspan="2"><div class="小運資訊格子" id="mpxs-小運空格"><img class="displayed" alt="Logo" height="50px" width="94px" style="margin: 0px 0px 0px 0px" src=' + 系統.版本.XiaoYunImg+'></div></td>');
        BaziChart.push('</tr>');
    }

    if(系統.設定.用戶設定.命盤顯示.流月){
        BaziChart.push('<tr>');
        BaziChart.push('<td rowspan="2" class="tdAlign"><div class="命盤豎標題流月">流月</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流運年歲格子">十二</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流運年歲格子">十一</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流運年歲格子">十月</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流運年歲格子">九月</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流運年歲格子">八月</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流運年歲格子">七月</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流運年歲格子">六月</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流運年歲格子">五月</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流運年歲格子">四月</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流運年歲格子">三月</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流運年歲格子">二月</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流運年歲格子">正月</div></td>');
        BaziChart.push('</tr>');

        BaziChart.push('<tr>');
        BaziChart.push('<td class="tdAlign"><div class="流月干支格子" id="mpxs-流月11干支" data-流月數="11">甲子</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流月干支格子" id="mpxs-流月10干支" data-流月數="10">甲子</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流月干支格子" id="mpxs-流月9干支" data-流月數="9">甲子</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流月干支格子" id="mpxs-流月8干支" data-流月數="8">甲子</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流月干支格子" id="mpxs-流月7干支" data-流月數="7">甲子</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流月干支格子" id="mpxs-流月6干支" data-流月數="6">甲子</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流月干支格子" id="mpxs-流月5干支" data-流月數="5">甲子</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流月干支格子" id="mpxs-流月4干支" data-流月數="4">甲子</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流月干支格子" id="mpxs-流月3干支" data-流月數="3">甲子</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流月干支格子" id="mpxs-流月2干支" data-流月數="2">甲子</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流月干支格子" id="mpxs-流月1干支" data-流月數="1">甲子</div></td>');
        BaziChart.push('<td class="tdAlign"><div class="流月干支格子" id="mpxs-流月0干支" data-流月數="0">甲子</div></td>');
        BaziChart.push('</tr>');
    }
    
    BaziChart.push('</table>');

    return BaziChart.join("");
}
