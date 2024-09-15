//creating object
const person={name:"masoom",age:22};
console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.age);
//adding key pair value we can also add array
person.hobbies=["study","play"];
console.log(person);
person.gender="male";
console.log(person);
//bracket notation
console.log(person["name"]);
console.log(person["age"]);
//dot vs bracket
person["permanent address"]="serenghatu";//here we cant use dot
console.log(person);
console.log(person["permanent address"]);//space wala mai dot use nhi krr sakte hai
//to insert key as email and value as masoom6ansari@gmail.com
const key="email";
person[key]="masoom6ansari@gmail.com";//avoid using dot and sq bracket with string it will give error
console.log(person);

//itersting object
//1.for in loop
//2.objct.key
for(let key in person){
    console.log(key);//prints keys like name , age etc not value
}

for(let key in person){
    console.log(person[key]);//prints key value like masoom , 22 etc
}

// for(let key in person){
// console.log(person.key);//undefine
// }

//object key method
console.log(Object.keys(person));
console.log(typeof Object.keys(person));
console.log(Array.isArray(Object.keys(person)));

for(let key of Object.keys(person)){
    console.log(person[key]);
}
//computed values
const key1="value1";
const key2="value2";
const val1=23;
const val2=49;
const obj={
    [key1]:val1,
    [key2]:val2
}
console.log(obj);

//spread operator
const obj1={
    key1:23,
    key2:49
}
const obj2={
    key3:23,
    key4:56
}
const newobj={...obj1,...obj2};
console.log(newobj);
//example 2 of spread operator
const roll={no1:23,no2:49}
const rolll={no3:23,no4:56};
const rollno={...roll,...rolll};
console.log(rollno);

const spred={..."abcdefg"}
console.log(spred);//sare letter spread ho jayega
//we cant spread number but we can spread string

//object destructuring
const per={naam:"asif",agee:17};
const naam=per.naam;
const agee=per.agee;
console.log(naam,agee);
//method 2
const band={
    bandname:"jihad",
    famousbook:"Quran"
};
const{bandname,famousbook}=band; // to change bandname to famouswork
console.log(bandname);          //bandname:famouswork
console.log(famousbook);