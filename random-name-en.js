const crypto = require("crypto");
const N=3 //文字数(日本語換算)
const vowel_word="AIUEO"//使う母音
const consonant_word="KSTNB"//使う子音
//"KSTNPBMR"

var stringList = ""

var count = 0;
setInterval(function() {
    var result = getRandom();
    stringList = stringList +" "+ result;
    count++;
    if(count >= 10){
        outputRandomList();
        count = 0;
    }
}, 100);

function getRandom(){
    var consonant = Array.from(crypto.randomFillSync(new Uint8Array(N))).map((n)=>consonant_word[n%consonant_word.length]).join('')
    var vowel = Array.from(crypto.randomFillSync(new Uint8Array(N))).map((n)=>vowel_word[n%vowel_word.length]).join('')

    var vowelArg = "E" + vowel[0] + "I"　//完全ランダムではなく制限入れる処理
    var result = "";
    for (let index = 0; index < N; index++) {
        result =　result + consonant[index] + vowelArg[index]
    };
    return result
}

function outputRandomList(){
    console.log(stringList);
    stringList = ""    
}