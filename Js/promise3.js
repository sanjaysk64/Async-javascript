let promise1= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("hello1");
    },5000);
});

let promise2 = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        //error
    reject("Error");
    },10000);
})

let promise3 = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
    resolve("hello3");
    },15000);
})

     //all function will hilight only bad promises
    Promise.allSettled(([promise1,promise2,promise3])).then((posRes)=>{
        console.log(posRes);
    },  //imp
    (error)=>{
        console.log(error);

    });