//using callbacks  addition ,subtraction ,multip ,division

let add =(numb,callback)=>{
return callback(numb+5,false);

};

let sub=(num,callback)=>{
return callback(num-2,false);
}

let mul =(num,callback)=>{
callback(num*2,false)
}
add(5,(addRes,error)=>{
if(!error){
    console.log(addRes);
    sub(addRes,(subRes,error)=>{
        if(!error){
            console.log(subRes);

            mul(subRes,(mulRes,error)=>{
                if(!error){
                    console.log(mulRes);
                }
            })
        }
    })

}
});

//callbackhell