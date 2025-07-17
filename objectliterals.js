let delhi={
    latitide:"28.7041",
    longitude:"77.1025"
};

const student ={
    name:"jayant",
    age:22,
    marks:94,
    city:"delhi"

};
console.log(student)
const item ={
    price:100,
    discount:50,
    colors:["red","pink"]

};


console.log(delhi)
console.log(item)

const post={
    username:"jrj@108",
    content:"this is my #firstpost",
    repost:5,
    tags:["@jrj","@first"]
};
console.log(post) // pura object
console.log(student.name)
console.log(post["tags"])
console.log(post.username)
console.log(post.content)
let prop="repost";
console.log(post[prop])
const obj={
    1:"a",
    2:"b",
    true:"c",
    undefined:"d",
    null:"e"
}
console.log(obj)

const classInfo={
    aman:{marks:99,city:'Delhi'},
    shradha:{marks:98,city:'Mumbai'},
    karan:{marks:97,city:'Pune'}
};
console.log(classInfo)

const classInform=[
    {name:"amanbhai",
    Bg:"A+",
    city:"delhi"
    },

    {name:"Shradhadidi",
    Bg:"O+",
    city:"chennai"},

    {name:"karanbhai",
    Bg:"B+",
    city:"Noida"},

    {name:"jayant",
    Bg:"B+",
    city:"Gurugram"}
];
console.log(classInform)

let num = Math.random();
num=num*5;
num=Math.floor(num);
num=num+21
console.log(num)
const max = prompt("enter the maximum number");
console.log(max);
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quit")
        break;
    }
    if(guess == random){
        console.log("you are right the number is", random);
        break;
    }
    else if(guess > random){
        guess=prompt("Try with a smaller value")
    }
    else{
        guess=prompt("Try with a larger value")
    }
     
}