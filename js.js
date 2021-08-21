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
