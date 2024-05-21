function fullName(firstName,lastName){
    function printName(){
        console.log(firstName , lastName);
    }
    return printName;
}

const ans=fullName("masoom","ansari");
console.log(ans);
ans();

