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