function myFunctionText() {
    document.getElementById('changeText').innerHTML = 
    'Hello JavaScript!';
}

function myFunctionCat() {
    document.getElementById('myImage').src = 
    './assets/images/cat1.jpg';
}

function myFunctionDog() {
    document.getElementById('myImage').src = 
    './assets/images/dog1.jpg';
}

function myFunctionFz() {
    document.getElementById('changeFz').style.fontSize = 
    '30px';
}

function myFunctionNone() {
    document.getElementById('changeStyle').style.display = 
    'none';
}

function myFunctionBlock() {
    document.getElementById('changeStyleBlock').style.display = 
    'block';
}

function myFunctionSum() {
    document.getElementById('statement').innerHTML = 
    'Answer for this problem is = ' + z;
}

function myFunctionVar() {
    document.getElementById('variable').innerHTML = 
    'Answer for this problem is ' + total;
}

function myFunctionCon() {
    document.getElementById('const').innerHTML = 
    'List of cars: ' + cars;
}

function myFunctionCon2() {
    document.getElementById('const2').innerHTML = 
    'Car owner is: ' + car.owner;
}

function myFunctionOper() {
    document.getElementById('oper').innerHTML = 
    'Answer is ' + c;
}

function myFunctionOper2() {
    document.getElementById('oper2').innerHTML = 
    text1;
}

function myFunctionData() {
    document.getElementById('data').innerHTML = 
    (first == second) + "<br>" + (first == total);
}

var sum = myFunctionFun(4, 3);
document.getElementById("fun").innerHTML = sum;

function myFunctionFun(a, b) {
    return a + b;
}

function toCelsius(f) {
    return (5/9) * (f-32);
}

document.getElementById('fToC').innerHTML = 
"The temperature is " + toCelsius(50) + " celsius";


const motor = {type: 'Honda', model: 'Civic', color: 'blue'};
document.getElementById("obj").innerHTML =
"The car type is " + motor.type + " color is " + motor.color;

const person = {
    name: 'Olzhas',
    surname: 'Mukanov',
    age: 20,
    status: 'retarded'
};

document.getElementById("olzhas").innerHTML = 
person.name + " " + person.surname + " is " + person.age +
" years old and his status is " + person.status;

function displayDate() {
    document.getElementById("elem").innerHTML = 
    Date();
}

let text = "ikillniggasnocapwithgunheadshot"
document.getElementById("str").innerHTML = 
text.length;

let string = "apple, banana, kiwi";
document.getElementById("meth").innerHTML = 
string.slice(7, 13);

function changeWord(){
    let strChange = document.getElementById("goF").innerHTML;
    document.getElementById("goF").innerHTML = 
    strChange.replace("yourself", "me");
}

let searchStr = "I can not live any longer";
document.getElementById("search").innerHTML = 
searchStr.indexOf("can");

let searchStrLast = "Locate where 'search' is";
document.getElementById("searchLast").innerHTML = 
searchStrLast.lastIndexOf("where");

let searchStr2 = "Please locate where 'locate' occurs!";
document.getElementById("search2").innerHTML = 
searchStr2.search("Please");

let textMatch = "The rain in SPAIN stays mainly in the plain"; 
document.getElementById("match").innerHTML = 
textMatch.match(/ain/gi);

let includes = "I can not live any longer";
document.getElementById("includes").innerHTML = 
includes.includes("can", 2);

let startsWith = "Hello world, welcome to the universe.";
document.getElementById("startsWith").innerHTML = 
startsWith.startsWith("Hello");

let endsWith = "Hello world, welcome to the universe.";
document.getElementById("endsWith").innerHTML = 
endsWith.endsWith(".");

let temp = 
`I will transform into "beast"
I will kill niggas
I will penetrate niggas with bullets`;
document.getElementById("temp").innerHTML = temp;

let firstViking = "Ragnar";
let lastViking = "Lothbrok";
let result = `${firstViking} ${lastViking} is a beast!`;

document.getElementById("literal").innerHTML = result;

let price = 50;
let VAT = .10;
let resultPrice = `Total ${(price * (1 + VAT)).toFixed(2)}`;

document.getElementById("taxes").innerHTML = resultPrice;

let numMeth = 100;
document.getElementById("numMeth").innerHTML = 
numMeth.toString();

let numMethExp = 12.241;
document.getElementById("numMethExp").innerHTML = 
numMethExp.toExponential() + "<br>" + numMethExp.toExponential(5);

let numMethFix = 5.67;
document.getElementById("numMethFix").innerHTML = 
numMethFix.toFixed(2);

let numMethPre = 6.66;
document.getElementById("numMethPre").innerHTML = 
numMethPre.toPrecision(6);

let numMethVal = 100;
document.getElementById("numMethVal").innerHTML = 
numMethVal.valueOf();

document.getElementById("numMethNum").innerHTML =
Number(true) + "<br>" + 
Number(false) + "<br>" +
Number("  10") + "<br>" +
Number("10  ") + "<br>" +
Number(" 10  ") + "<br>" +
Number("10.33") + "<br>" + 
Number("10,33") + "<br>" +
Number("10 33") + "<br>" +
Number("John");

const vehicles = [];
vehicles[0] = "Dodge";
vehicles[1] = "McLaren";
vehicles[2] = "Lambo";
document.getElementById("arr").innerHTML = 
vehicles[2];

const vehicles2 = ["Dodge", "Mclaren", "Lambo"];
vehicles2[2] = "Bike"
document.getElementById("arr").innerHTML = 
vehicles2;

const vehiclesLength = ["Dodge", "Mclaren", "Lambo"];
document.getElementById("arrLength").innerHTML = 
vehiclesLength.length;

const vehiclesLast = ["Dodge", "Mclaren", "Lambo"];
document.getElementById("arrLast").innerHTML = 
vehiclesLast[vehiclesLast.length - 1];

const fruits = ["apple","lemon","peach"];
document.getElementById("arrPush").innerHTML = fruits;

function myFunctionArrPush(){
    document.getElementById("arrPush").innerHTML = fruits.push("dick");
    document.getElementById("arrPush2").innerHTML = fruits
}

const fruitsLen = ["apple","lemon","peach"];
document.getElementById("arrPushLen").innerHTML = fruitsLen;

function myFunctionArrPushLen(){
    fruitsLen[fruitsLen.length] = "dick";
    document.getElementById("arrPushLen").innerHTML = fruitsLen;
}

const isArr = ["apple","lemon","peach"];
document.getElementById("arrIsArr").innerHTML = 
Array.isArray(isArr);

const isArr2 = ["apple","lemon","peach"];
document.getElementById("arrIsArr2").innerHTML = 
isArr2 instanceof Array;

const arrMeth = ["apple","lemon","peach"];
document.getElementById("arrMeth").innerHTML = 
arrMeth.join("--");

const fruitsMethPop = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arrMethPop").innerHTML = fruitsMethPop;
document.getElementById("arrMethPop2").innerHTML = fruitsMethPop.pop();
document.getElementById("arrMethPop3").innerHTML = fruitsMethPop;

const fruitsMethShift = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arrMethShift").innerHTML = fruitsMethShift;
document.getElementById("arrMethShift2").innerHTML = fruitsMethShift.shift();
document.getElementById("arrMethShift3").innerHTML = fruitsMethShift;

const fruitsMethUnShift = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fruitsMethUnShift").innerHTML = 
fruitsMethUnShift;

function myFunctionUnshift() {
  fruitsMethUnShift.unshift("Lemon");
  document.getElementById("fruitsMethUnShift").innerHTML = 
  fruitsMethUnShift;
}

const fruitsMethSplice = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fruitsMethSplice").innerHTML = 
"Original:<br>" + fruitsMethSplice;

function myFunctionSplice() {
    fruitsMethSplice.splice(3, 0, "Dick", "Balls");
    document.getElementById("fruitsMethSplice2").innerHTML = 
    "New:<br>" + fruitsMethSplice;
}

const fruitsMethSpliceDel = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fruitsMethSpliceDel").innerHTML = 
fruitsMethSpliceDel;

function myFunctionSpliceDel() {
    fruitsMethSpliceDel.splice(0, 1);
    document.getElementById("fruitsMethSpliceDel").innerHTML =
    fruitsMethSpliceDel;
}

const guys = ["first", "second"];
const girls = ["third", "fourth"];
const totalDumbFucks = guys.concat(girls);
document.getElementById("arrMerge").innerHTML = 
totalDumbFucks;
