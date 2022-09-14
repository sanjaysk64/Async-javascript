var promise1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("i will discuss dom manipulations tomorrow");
    },5000)
    
});
promise1.then((posRes)=>{
    console.log(posRes);
},
(errRes)=>{
    console.log(errRes);

});