// function alok(a, b, sum) {
//     console.log(a);
//     sum(2, 3);
//     console.log(b);
// }
// function sum(c, d) {
//     console.log(`sum is ${c + d}`);
// }
// alok(2, 3, sum)




// setTimeout(()=>{
//     console.log(1);
//     setTimeout(()=>{
//         console.log(2);
//         setTimeout(()=>{
//             console.log(3);
//             setTimeout(()=>{
//                 console.log(4);
//                 setTimeout(()=>{
//                     console.log(5);
//                     setTimeout(()=>{
//                         console.log(6);
//                         setTimeout(()=>{
//                             console.log(7);

//                         }, 1000)

//                     }, 1000)

//                 }, 1000)

//             }, 1000)

//         }, 1000)

//     }, 1000)
// }, 1000)

// let prntnumber = (tme, num) => {
//     return new Promise((res, rej) => {
//         if(num){
//             setTimeout(()=>{
//                 res(num());
//             }, tme)
//         }
//         else{
//             rej(console.log("No Number"))
//         }

//     })
// }

// prntnumber(0, ()=>console.log("Number"))
// .then(()=>{
//     prntnumber(1000, ()=>console.log("1"))
// })
// .then(()=>{
//     prntnumber(2000, ()=>console.log("2"))
// })
// .then(()=>{
//     prntnumber(3000, ()=>console.log("3"))
// })
// .then(()=>{
//     prntnumber(4000, ()=>console.log("4"))
// })
// .then(()=>{
//     prntnumber(5000, ()=>console.log("5"))
// })
// .then(()=>{
//     prntnumber(6000, ()=>console.log("6"))
// })
// .then(()=>{
//     prntnumber(7000, ()=>console.log("7"))
// })

// let x = function(state){
//     return new Promise((resolve, reject)=>{
//         if(state == 'yes'){
//             resolve('promise resolved')
//         }
//         else{
//             reject('promise rejected')
//         }
//     })
// }

// x('yes').then(response => console.log(response)).catch(err=>console.log(err))

// function alok() {
//     alok1()
//     function alok1() {
//         alok2()
//         function alok2() {
//             alok3()
//             function alok3() {
//                 alok4()
//                 function alok4() {
//                     console.log("Callback Functon");
//                 }
//             }
//         }
//     }
// }
// alok()


// let prntdata = (num) => {
//     return new Promise((res, rej) => {
//         if(num){
//             res(num())
//         }
//         else{
//             rej(console.log("No Data"))
//         }

//     })
// }

// prntdata(()=>console.log("Message"))
// .then(()=>{
//     prntdata(()=>console.log("Promse Functon"))
// })
// .catch(()=>console.log("No Data available"))


// let x=5;
// console.log(x);
// fun();
// console.log("Hello");
// function fun(){
//     setTimeout(()=>{
//         console.log("Functon Run");

//     }, 2000)
// }


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
    },1000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The second promise has resolved');
      resolve(20);
    }, 2000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3000);
  });
  
  Promise.all([p1, p2, p3]).then((results) => {
    const total = results.reduce((p, c) => p + c);
  
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
  });