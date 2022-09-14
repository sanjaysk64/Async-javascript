function one(arg1){

    arg1("hello1");
};
one(function two(arg1){
console.log(arg1)
});