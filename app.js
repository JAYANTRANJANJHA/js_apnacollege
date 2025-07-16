console.log("Helloworld");
console.log("YO Yo")
a=10;
b=1;
console.log("sum is:",a+b);
let pencilPrice=10;
let eraserPrice=5;
console.log("The total price is:",pencilPrice+eraserPrice,"rupees");
console.log(`Your Bill amount is ${pencilPrice+eraserPrice} Rupees.`)
console.log("Before if statement");
let marks=75;
if(!(marks<33)){
    console.log("pass");
    console.log("a++");

let str="apple";
if(str[0]=="a" && str.length>3){
    console.log("goodstring");
}
let num=12;
if ((num%3===0)&&((num+1==15)||(num-1==11))) {
    console.log("safe");
}else{
    console.log("unsafe");
}
console.log
("this is asimple log");
console.error("this is an error");
console.warn("this is a warn");
let firstName=prompt("enter your first name");
let lastName=prompt("enter your last name");
console.log("Welcome",firstName,"",lastName,"!");
let msg="    Aloo   ";
let n=5;
let m=10;
for (let i = 1; i<=m; i++) {
    console.log(`${n} x ${i} = ${n * i}`)
}
for( let i=10;i>=1;i--){
    console.log(i)
}

for(let i =0;i<=10;i+=2){
    console.log(i)
}

for(let i=1;i<=3;i++){
    console.log(`outer loop`)
    for(let j=1;j<=3;j++){
        console.log(j)
    }
}
let i=5;
while (i>=1){
    console.log(i)
    i--;
}

let i=1;
while(i<=10){
    if(i==5){
        break;
    }
    console.log(i);
    i++;
}
console.log("we use break at 3")
let fruits=["mango","apple","banana","litchi","orange","guava"];
fruits.push("Dates")
fruits.unshift("Tomato")

for (let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
for (let i=fruits.length-1;i>=0;i--){
    console.log(i,fruits[i])
}
let heroes=[["ironman","loki","thor"],
["superman","batman","flash"]]
console.log("Array of heroes: ",heroes)
for(i=0;i<heroes.length;i++){
    console.log(i,heroes[i])
    for(let j=0;j<heroes[i].length;j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}
let student =[["aman",95],["shradha",94],["karan",100]];
for(let i=0;i<student.length;i++){
    console.log(`info of student ${i+1}`)
    for(let j=0;j<student[i].length;j++){
        console.log(student[i][j]);
    }
}
let fruits=["mango","apple","banana","litchi","orange"]
for  (fruit of fruits){
    console.log(fruit)
}
for (char of "apnacollege"){
    console.log(char)
}
let heroes=[["ironman","loki","thor"],
 ["superman","batman","flash"]]
 for (list of heroes){
    console.log(list)
    for(hero of list){
        console.log(hero)
    }
 }