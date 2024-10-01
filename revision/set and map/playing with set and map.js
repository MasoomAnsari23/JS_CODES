//syntax of set
const numbers=new Set([2,3,4,2,5,6,"hello","hello"]);
//ignore duplicate value and unordered and any type of value
console.log(numbers);

//adding values
numbers.add(56);
console.log(numbers);
numbers.add("takla=asif");
console.log(numbers);
numbers.add("item1");
console.log(numbers);
numbers.add([23,49]);//see line 15 we can do this because both array in memory are different
console.log(numbers);
numbers.add([23,49]);
console.log(numbers);

//deleting value
numbers.delete(56);
console.log(numbers);

//checking value exist in set or not
console.log(numbers.has(2));//t or f

//checking number of element
console.log(numbers.size);

//for of loop
for(let number of numbers){
    console.log(number);
}
//finding length using for of loop
let length=0;
for(number of numbers){
    length++;
}
console.log(length);

//deleting all element of set
numbers.clear();
console.log(numbers);

//map
//synatx
const person=new Map();
person.set('name','masoom');
person.set('id',2349);
console.log(person);
person.set('age',20);
console.log(person);
//accessing specific key value
console.log(person.get('id'));
console.log(person.get("name"));
console.log(person.get("age"));

console.log(person);

//for of loop
for(let per of person){
    console.log(per);
}

//priniting key
for(let key of person.keys()){
    console.log(key);
}

for(let key of person.keys()){
    console.log(typeof key);
}

//destructuring array
for(let [key,value] of person){
    console.log(key,value);
}

//method 2 of making map
const pers=new Map([['name', 'masoom'],['age',22],['id',2349]]);
console.log(pers);