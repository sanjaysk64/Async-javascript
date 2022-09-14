function funOne(arg1 ,arg2,arg3){
console .log (arg1());
console .log (arg2());
console .log (arg3());
}
function funTwo(){
return "hello1"
}
function funThree(){
return "hello2"
}
function funFour(){
 return "hello3"
}
funOne(funTwo,funThree,funFour)


//......................................................
const calc = (num ,add)=>{
 add(num+5,true);

}
calc(10,(addRes,error)=>{
if(true){
    console.log(addRes);
}
})
