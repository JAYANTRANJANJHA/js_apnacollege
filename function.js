function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
print1to5();
function isAdult(){
    let age=100;
    if(age>=18){
        console.log("adult")
    }else{
        console.log("kid")
    }
}
isAdult();
function printPoem(){
    console.log("Johnny Johhny yes papa esting sugar no papa telling lies no papa")
    console.log("open your mouth ha ha ha ")
}
printPoem();

function rollDice(){


let rand=Math.floor(Math.random()*6)+1;
console.log(rand)
}
rollDice();
rollDice();
function myNameFunc(meraName){
    console.log(meraName)
    //kuch likho
}

myNameFunc("Mera Naam Jayant")

function myInfoFunc(meraName,meriAge){
    console.log(`${meraName}'s age is ${meriAge}`)
    //kuch likho
}
myInfoFunc("Jayant",22)
myInfoFunc("Raju",23)
myInfoFunc("Jayant")
myInfoFunc("",22)
myInfoFunc(22)

function sum(a,b){
    return(a+b)
}
console.log(sum(1,2) )
console.log(sum(4,5))

function avgofthree(a,b,c){
    console.log((a+b+c)/3)
}
avgofthree(1,2,3);
avgofthree(2,2,3);
avgofthree(4,2,7);
avgofthree(6,2,7);

function printTable(n){
    for (let index = n; index <= n*10; index+=n) {
        console.log(index)
    }
}
console.log("-----------")
printTable(100);
printTable(9);
printTable(8);
printTable(700000);
printTable(6);
printTable(5);
printTable(4);
printTable(3);
arr=[1,2,3,4,5];
console.log(arr.slice(1,3))
console.log(sum(20,30)) 
console.log(sum(sum(100,200),300))
let str =["hi","hello","hey","bye"]
function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
} 
console.log(concat(str));
let greet ="hello";
function changeGreet(){
    let greet="namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
    innerGreet()
}
console.log(changeGreet())
console.log(greet)

let hello=function(){
    console.log("Hello")

}
hello()

function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}
let greet = function () {
    console.log("hello")
}
multipleGreet(greet, 10);
multipleGreet(function () { console.log("namaste") }, 10)
greet()

function oddEvenTest(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!n % 2 == 0);
        }
    }

    else if (request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    }

    else {
        console.log("wrong request")
    }
}
let request ="odd"
let func =oddEvenTest(request);
func(5)
func(2)

const student ={
    name:"jayant",
    age:23,
    eng:97,
    math:98,
    phy:99,
    getAvg(){
        let avg=(this.eng+this.math+this.phy)/3;
        return avg
    }

}
console.log(student.getAvg()) 
let a=7;
try{
    console.log(a)
}
catch{
    console.log("a is not defined bro")
}
finally{
    console.log("Thank you")
}
console.log("hello world")
const sum = (a, b) => {
    console.log(a + b)
}

sum(400, 600)

const cube = (n) => {
    return n ** 3;
}

console.log(cube(6))

const mlt=(a,b)=>a*b;

console.log(mlt(2,3)) ;

console.log("hi there!");
setTimeout(() => {
    console.log("Apna College")    
}, 4000);

console.log("thank you set timeout")

let id = setInterval(() => {
    console.log("India")
}, 2000);

let square = (n) => n ** 2;
console.log(square(4))

let hello5 = setInterval(() => {
    console.log("Hello World")
}, 5000);

setTimeout(() => {
    clearInterval(hello5);
    console.log("khatam")
}, 26000)
arr=[1,2,3,4,5]
let print=function(el){
    console.log(el)
}

arr.forEach(print)

arr.forEach(function(el){
    console.log(el)
})

arr.forEach((el)=>{
    console.log(el);
});

let students = [{
    name: "Aman",
    marks: 99
},
{
    name: "Jayant",
    marks: 100
},
{
    name: "Ram",
    marks: 101
},
{
    name: "Shyam",
    marks: 98
},
{
    name: "Raju",
    marks: 97
}]

// arrofobj.forEach((student)=>{
//     console.log(student)
// })
// let num=[1,2,3,4,5]
// let double=num.map((el)=>{
//     return el*el
// })
// console.log(double)
// let gpa=students.map((el)=>{
//     return el.marks/10;
// });
// console.log(gpa)

// let nums = [2,4,1,5,6,2,7,8,9]; 
// let even=nums.filter((num)=>(num>3));
// console.log(even)

// let numevery=[2,4,6,8]
// let evenevery=numevery.every((el)=>(el%2==0));
// console.log(evenevery)


// numreducearr=[1,2,3,4,5,6,7,8,9,10]
// let reducerfunc=numreducearr.reduce((res,el)=>{
//     console.log(res)
//     return res+el});
// console.log(reducerfunc)

// let arrmax=[1,2,3,56,70,45,74,45,60];
// let max=-1;
// for (let i=0;i<arrmax.length;i++){
//     if(max<arrmax[i]){
//         max=arrmax[i];
//     }
// }
// console.log(max)

// let max=arrmax.reduce((max,el)=>{
//     if(el>max){
//         return el
//     }else {
//         return max;
//     }
// });
// console.log(max)

// arrof10=[10,20,30,40,50,55]
// let ans=arrof10.every((el)=>{
//     return el%10==0
// })
// console.log(ans)
// let arrmin = [90, 46, 66, 76, 89, 54, 67, 77, 75, 58, 54, 54, 88, 65]
// let min = arrmin.reduce((min, el) => {
//     if (el > min) {
//         return min;
//     } else {
//         return el
//     }
// })
// console.log(min)

// console.log("default parameters")
// function added(a = 0, b = 0) {
//     return a + b;
// }

// console.log(added(6, 8))

// console.log("Spread")

// let arrmin = [90, 46, 66, 76, 89, 54, 67, 77, 75, 58, 54, 54, 88, 65]

// let minimum=Math.min(...arrmin)

// console.log(minimum)

// console.log(...arrmin)

// let newarr=[...arrmin]

// console.log(newarr)

// let chars=[..."hello"];

// console.log(chars)

// let odd=[1,3,11,5,7,9];

// let even=[2,4,6,8,12,10];

// let numbers=[...odd, ...even];

// console.log(numbers)

// let data={
//     email:"ironman@gmail.com",
//     password:"abcd"
// };

// const dataCopy={ ...data,id:123,country:"India"}
//  console.log(data)
//  console.log(dataCopy)

// let objeven={...even}

// console.log(objeven)

// let objstr={..."hello"}

// console.log(objstr)

// function restarray(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("you gave us",args[i])
//     }
// }

// console.log(restarray(1,2,3,4,4,5,6,7,8,9,6,0,0))
  
let names=['raju','shyam','alice','peter','gopal','sujata']

let [winner,runnerup,...others]=names;

console.log(winner);
console.log(runnerup);
console.log(others);

const student={
    names:"karan",
    age:22,
    class:9,
    subjects:['hindi',"english","math"],
    username:"karan@123",
    password:"123456"

}

let {username,password,city:shahar="bharat"}=student
let{names:naam}=student

console.log(username)
console.log(password)
console.log(shahar)
console.log(naam)
