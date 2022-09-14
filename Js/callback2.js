function one(arg1,arg2,arg3){
    console.log(arg1(),arg2(),arg3()) //calling functions
}

//callingfunction inside just definition
one(function two(){
    return"hello1";
},function three(){
    return "hello2";
},function four(){
    return"hello3";
});