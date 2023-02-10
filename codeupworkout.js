let a = 1;
let b = a++;
let c = ++a;
// 3, 1 , 3

let d = "hello";
let e = false;

d++; //NaN
e++; //1

let perplexed; // undefined
perplexed + 2;
//NaN

let price = 2.7;
price.toFixed(2);
//'2.70'

var price = "2.7";
price.toFixed(2);
console.log(parseFloat)

isNaN(0)
// false

isNaN(1)
// false

isNaN("")
//true

isNaN("string")
//true


isNaN("0")
//false

isNaN("1")
//false

isNaN("3.145")
// false
isNaN(Number.MAX_VALUE)
//false
isNaN(Infinity)
//false
isNaN("true")
//true
isNaN(true)
//false
isNaN("false")
//true
isNaN(false)
//false
// to illustrate why the isNaN() function is needed:
NaN == NaN
//
!true
//false
!false
//true
!!true
//true
!!false
//false
!!0
//false
!!-0
//false
!!1
// true
!!-1
// true
!!0.1
//true
!!"hello"
// true
!!""
//false
!!''
//false
!!"false"
//true
!!"0"
//true


//let sample = ("Hello Codeup");
//sample += "Students";
//let length = sample.length;
//let result = sample.toUpperCase();
//let result2 = sample.replace("Students!", "Class");
//let cIndex = sampleJoinReplace.indexof('c');
//console.log(sample.indexOf('c'));
//let capCindex = sampleJoinReplace.indexOf('C')
//console.log(sample.indexOf('C'));
//let codeupWord = sampleJoinReplace.substring(capCIndex, 12);
//console.log(sample.substring(6,12));

//let TLM = 3
//let BB = 5
//let H = 1
//let total = (TLM + BB + H)*3





//let googleTotal = 400
//let googlePay = (googleTotal * 6);
//let amazonTotal = 380
//let amazonPay = (amazonTotal * 4);
//let facebookTotal = 350
//let facebookPay = (facebookTotal * 10)

//let classnotfull = true
//let classschedule = true
//let enrolled = classnotfull && classschedule;

//let scheduleConflicts = false;
//let maxClassSize = 30;
//let currentClassSize = 24;
//let canEnroll = !scheduleConflicts && (currentClassSize < maxClassSize);



//let haspremium = true
//let cartsize = 4
//let validoffer = true
//let HaveDiscount = validoffer && (cartsize > 2 || haspremium);




let username = "codeup";
let password = "notastrongpassword"

if (password.length >= 5){
    let password_length_pass = true;
} else {
    let password_length_pass = false;
}
if (password.search(username) < 0)
{
    let password_user_pass = true;
} else {
    let password_user_pass = false;
}

if (username.length <= 20) {
    let user_length_pass = true;
} else {
    let user_length_pass = false;
}

console.log(username.trim());
console.log(password.trim());










