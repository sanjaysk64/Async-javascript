function funone(arg1 ){
    console.log(arg1);//definition
    console.log(arg1());//body
}
function funtwo(){
   console.log("from fun2");
}
 
funone(funtwo);