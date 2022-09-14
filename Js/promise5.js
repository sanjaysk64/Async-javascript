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



let sub =(num,callback)=>{

}

sub
