const crypto = require("crypto");
const N=3 //文字数(日本語換算)
const one_word="えけせてねへめべぺ"
const two_word="いきしちにひみびぴ"
const free_text = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよわ"
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
    var one = Array.from(crypto.randomFillSync(new Uint8Array(N))).map((n)=>one_word[n%one_word.length]).join('')
    var free = Array.from(crypto.randomFillSync(new Uint8Array(N))).map((n)=>free_text[n%free_text.length]).join('')
    var two = Array.from(crypto.randomFillSync(new Uint8Array(N))).map((n)=>two_word[n%two_word.length]).join('')
    return one[0] + free[0] + two[0]
}

function outputRandomList(){
    console.log(stringList);
    stringList = ""    
}