function  funone(arg1,arg2,arg3){
return arg1("hello1") +" "+arg2("hello2")+"   "+arg3("hello3");
}
funone(function funtwo(arg1)
{console.log(arg1)},
function funthree(arg1){console.log(arg1)},
function funfour(arg1){console.log(arg1)});