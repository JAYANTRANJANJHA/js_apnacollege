// console.log("one");
// console.log("two");


// function hello(){
//     console.log("hello");
// }

// setTimeout(()=>{
//     console.log("hi bro")
//     hello()
// },4000)  //timeout  

// console.log("three");
// console.log("four")

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(10,20,sum)

// const hello=()=>{
//     console.log("hello bachoo")
// }

// setTimeout(hello,3000)

// function getData(dataId,getNextData){

//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData) {
//         getNextData();
//     }
//     },2000)
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// });

// let promise =new Promise((resolve,reject)=>{
//     console.log("i am a promise")
//     resolve("resolve")
// })



// const getPromise=()=>{
//    return  new Promise ((resolve,reject)=>{
//         console.log("I am a promise");
//          resolve("success");
//         // reject(" network error");
//     });
// };

// let promise=getPromise();

// promise.then((res)=>{
//     console.log("promise fulfilled",res)
// });

// promise.catch((err)=>{
//     console.log(("promise rejected",err ));
// });

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data 1")
//             resolve("sucess")
//         }, 4000)
//     })
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data 2")
//             resolve("sucess")
//         }, 4000)
//     })
// }

// console.log("fetching data 1")

// asyncFunc1().then((res) => {
//     console.log("fetching data 2")
//      asyncFunc2().then((res) => { })
// })


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then(() => {
//         console.log(res)
//     })
// });

// getData(1)
// .then((res) => {
//     return getData(2);
// }).
// then((res) => {
//     return getData(3);
// }).
// then((res) => {
//     console.log("success")
// })

async function hello(){
    console.log("hello")
}

(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
    await getData(7);
    await getData(8);
    await getData(9);
    await getData(10);
    await getData(11);
    await getData(12);

    
})();
 
// getallData()