const user={
    name:"masoom",
    age:20,
    id:'2349',
    //address:{Hno:'2349'}
}
console.log(user);
console.log(user.age);

// lets assume address in commented out and it may appera soon in this case instead og getting error we want undefined
console.log(user?.age);
//console.log(user.address.Hno); //this is error
console.log(user?.address?.Hno);//correct this prints undefined ,this is optional chaining

