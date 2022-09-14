let promise1= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("hello1");
    },5000);
});

let promise2 = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
    resolve("hello2");
    },10000);
})

let promise3 = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
    resolve("hello3");
    },15000);
})

    Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
    });
    (error)=>{
        console.log(error);
    }
    //to know which promise will exicute first
    Promise.race(([promise1,promise2,promise3])).then((posRes)=>{
        console.log(posRes);
    }),
    (error)=>{
        console.log(error);

    }