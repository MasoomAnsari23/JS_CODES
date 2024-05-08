const obj1={
    key1:"value1",
    key2:"value2"
};
console.log(obj1);
const obj2=obj1;
console.log(obj1);  // obj1 and obj2 both points same memory location of same object
console.log(obj2);

const obj3=obj1;
obj3.key3="value3";
console.log(obj1);
console.log(obj3); // both gets updated

// cloning method 1
const obj4={...obj1};
obj4.key4="value4";
console.log(obj1);
console.log(obj4);

// cloning method 2
obj6={
    key5:"value5",
    key6:"value6",
    key7:"value7"
}
const obj5=Object.assign({},obj6);
obj1.key5="value5";
console.log(obj6);
console.log(obj5);