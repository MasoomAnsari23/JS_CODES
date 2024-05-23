function myfunc(power){
    function yourfunc(number){
        return number**power; //this ** means power
    }
}

const sqr=myfunc(2);
const ans=sqr(3);
console.log(ans);
ans();