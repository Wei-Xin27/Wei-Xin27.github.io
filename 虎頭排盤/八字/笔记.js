const 笔记 = (命盤)=>{
    const 天干 = [命盤.時柱.天干,命盤.日柱.天干,命盤.月柱.天干,命盤.年柱.天干]
    const 地支 = [命盤.時柱.地支,命盤.日柱.地支,命盤.月柱.地支,命盤.年柱.地支]

    const 三会 = {
        "亥子丑":"三会水",
        "寅卯辰":"三会木",
        "巳午未":"三会火",
        "申酉戌":"三会金",
    }
    const 三合 = { 
        "申子辰":"三合水",
        "亥卯未":"三合木",
        "寅午戌":"三合火",
        "巳酉丑":"三合金",
    }
    const 六合 = {
        "子丑": "子丑合",
        "寅亥": "寅亥合",
        "卯戌": "卯戌合",
        "辰酉": "辰酉合",
        "巳申": "巳申合",
        "午未": "午未合",
    }
    const 六冲 = {
        "子午": "子午冲",
        "丑未": "丑未冲",
        "寅申": "寅申冲",
        "卯酉": "卯酉冲",
        "辰戌": "辰戌冲",
        "巳亥": "巳亥冲",
    }
    const 六害 = {
        "子未": "子未害",
        "丑午": "丑午害",
        "寅巳": "寅巳害",
        "卯辰": "卯辰害",
        "申亥": "申亥害",
        "酉戌": "酉戌害",
    }

    const 无恩之刑 = {
        "寅巳": "寅刑巳",
        "巳申": "巳刑申",
        "申寅": "申刑寅",
    }

    const 恃势之刑 = {
        "丑戌": "丑刑戌",
        "戌未": "戌刑未",
        "未丑": "未刑丑",
    }

    const 自刑 = {
        "子子": "子自刑",
        "卯卯": "卯自刑",
        "辰辰": "辰自刑",
        "午午": "午自刑",
        "酉酉": "酉自刑",
        "亥亥": "亥自刑",
    }




    const combination = [三会,三合,六合,六冲,六害,无恩之刑,恃势之刑,自刑]

    combination.forEach((combo)=>{
        Object.keys(combo).forEach(key => {
            if(isSubset([...key],地支)){
                console.log(`Key: ${key}, Value: ${combo[key]}`);
            }
        });
    });

    


    
};

// const isSubset = (subset, superset) => {
//   return subset.every(item => superset.includes(item));
// }

const isSubset = (subset, superset) => {
  const countItems = arr => arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const subsetCounts = countItems(subset);
  const supersetCounts = countItems(superset);

  return Object.entries(subsetCounts).every(([item, count]) =>
    (supersetCounts[item] || 0) >= count
  );
};

