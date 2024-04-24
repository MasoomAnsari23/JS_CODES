let winningNO=23;
let userguess=prompt("guess a number");
console.log(typeof userguess);
userguess=+userguess;
console.log(typeof userguess);
if(userguess===winningNO){
    console.log("right guess");
}
else{
    console.log("wrong guess");
}if(userguess>winningNO){
    console.log("too high");
}
else{
    console.log("too low");
}