/*
let add =(num, callback)=>{
return callback(num+5,false);
};
add( 5,(addRes,error)=>{
    if(!error){
        console.log(addRes);
    }else{
        console.log(error);
    }
});


*/
// same with Promise
let add = (num)=>{

return new Promise((reslove,reject)=>{
    reslove(num+5);
});
}

let sub =(num)=>{
    return new Promise((reslove,reject)=>{
        reslove(num-5);

    })
};

async function myfunction(){

    let res =await add(5);
    console.log(res);
}
myfunction();

async function function2(){
    let res = await sub(15)
    console.log(res);
}
function2();