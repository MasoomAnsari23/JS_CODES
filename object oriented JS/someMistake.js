const user1={
    firstName:"masoom",
    age:20,
    about:function(){
        console.log(this.firstName,this.age);
    }
}

user1.about();
//we need to staore result in other variable
const myfunc=user1.about(); // this will print but here we are not calling myfunc
const myfun=user1.about;
myfun();  //this is undefined
//to avoid above mistake we need to use bind method
const myfuxn=user1.about.bind(user1);
myfuxn();//this is correct