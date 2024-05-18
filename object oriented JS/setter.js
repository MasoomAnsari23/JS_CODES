class person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    setfullName(firstName,lastName){  //this is updating the value
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

const person1=new person("Masoom","Ansari");
  person1.setfullName("asif","ansari");   //method 1 updated value
  console.log(person1.fullName);

  person1.firstName="sajjad";  //method 2
  person1.lastName="ansari";
  console.log(person1.fullName);