let promise1 = new Promise((reslove,reject)=>{
reslove("hello");
});

async function myfunction(){
    let result = await promise1;
    console.log(result);
}
myfunction();