

function 各宮星曜互涉表 (命盤){
    // 讀取各地支已經分析好的星曜互涉與格局，排列成表格
    // 輸出到 命盤.人事宮[xxx].分析.分析總論表, in HTML table format
    
    var 地支人事宮;
    var 地支干支;
    var 人事宮主星;
    
    for(var i=0; i<12; i++){
        
        地支人事宮 = 命盤.地支宮位[i].宮位;
        地支干支 = 命盤.地支宮位[i].宮干 + 命盤.地支宮位[i].地支;
        人事宮主星 = 命盤.地支宮位[i].星曜架構.中宮分析總結.主星;
        
        var 星曜互涉表矩陣 =[];
        星曜互涉表矩陣.push('<table style="text-align: left;" width="900px" border="1" cellpadding="0" cellspacing="0">');
        星曜互涉表矩陣.push('<tbody>');
        星曜互涉表矩陣.push('<tr>');
        星曜互涉表矩陣.push('<td colspan="1" rowspan="3" class="shpp-xyhstbl-宮名地支"><span class="shpp-xyhstbl-宮名">' + 地支人事宮 + '</span><br><br><span class="shpp-xyhstbl-主星">' + 人事宮主星 + '</span><br><br><span class="shpp-xyhstbl-干支">' + 地支干支 + '</span></td>');
        星曜互涉表矩陣.push('<td class="shpp-xyhstbl-三方四正星曜標題">三方四正</td>');
        星曜互涉表矩陣.push('<td class="shpp-xyhstbl-吉曜標題">吉曜</td>');
        星曜互涉表矩陣.push('<td class="shpp-xyhstbl-煞曜標題">煞曜</td>');
        星曜互涉表矩陣.push('<td class="shpp-xyhstbl-格局標題">格局</td>');
        星曜互涉表矩陣.push('</tr>');


        星曜互涉表矩陣.push('<tr>');
        星曜互涉表矩陣.push('<td id="星曜互涉表_三方諸曜" class="shpp-xyhstbl-互涉星曜內容">' + 命盤.地支宮位[i].星曜架構.中宮分析總結.宮位星曜 + '</td>');
        星曜互涉表矩陣.push('<td id="星曜互涉表_吉曜" class="shpp-xyhstbl-互涉星曜內容">' + 命盤.地支宮位[i].星曜架構.中宮分析總結.宮位吉曜 + '</td>');
        星曜互涉表矩陣.push('<td id="星曜互涉表_煞曜" class="shpp-xyhstbl-互涉星曜內容">' + 命盤.地支宮位[i].星曜架構.中宮分析總結.宮位煞曜 + '</td>');
        星曜互涉表矩陣.push('<td id="星曜互涉表_格局" class="shpp-xyhstbl-互涉星曜內容">' + 命盤.地支宮位[i].星曜架構.中宮分析總結.格局 + '</td>');
        星曜互涉表矩陣.push('</tr>');


        星曜互涉表矩陣.push('</tbody>');
        星曜互涉表矩陣.push('</table>');
        
        命盤.人事宮[地支人事宮].分析.分析總論表 = "<div>" + 星曜互涉表矩陣.join("") + "</div>";
    } // end for i

} // end function 各宮星曜互涉表