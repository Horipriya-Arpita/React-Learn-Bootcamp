//_________________ Synchronous____________

// console.log("one");
// let x = 10;
// console.log(x);
// console.log("two");
// console.log("three");
// console.log("four");
// console.log("five");


//__________________Asynchronous____________

// console.log("one");
// let y = 10;
// console.log(y);
// console.log("two");

// function hello(){
//     console.log("hello");
// }

// setTimeout(hello,2000);

// console.log("three");
// console.log("four");
// console.log("five");


//__________________CallBack_____________

// function sum(a,b){
//     console.log(a+b);
// }

// function sub(a,b){
//     console.log(a-b);
// }

// function Calculator(a,b,cbfun){
//     cbfun(a,b);
// }

// Calculator(2,3,sum);
// Calculator(5,3,sub)

// Calculator(1,3,(a,b)=>{
//     console.log(a+b);
// });

//____________________Callback________________

// function getData(Id, getNextData){
//     setTimeout(()=>{
//         console.log("Data",Id);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }

// console.log("fetching data1....");
// getData(1,()=>{
//     console.log("fetching data2....");
//     getData(2,()=>{
//         console.log("fetching data3....");
//         getData(3);
//     });
// }); 


//______________Promise_______________

// Promise State - Resolve, Reject, pending

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am promise");
//     resolve("success");
//     reject("error")
// })

// console.log(promise);


function getData(Id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data", Id);
            resolve("okkk");
            //reject("error");
        },2000)
    })
}


// getData(1).then((res)=>{
//     console.log("Data fetched successfully", res);
//     getData(2).then((res)=>{
//         console.log("Data fetched successfully", res);
//     });
// });

// getData(1).then((res)=>{
//     console.log(res);
//     return getData(2);
// }).then((res)=>{
//     console.log(res);
//     return getData(3);
// }).then((res)=>{
//     console.log(res);
//     return getData(4);
// }).then(()=>{
//     console.log("all done");
// })

//________________Async Await______________

async function getData(Id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data", Id);
            resolve();
        }, 2000)
    })
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    console.log("all done");
}

getAllData();

