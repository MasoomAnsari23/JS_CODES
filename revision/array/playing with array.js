let fruits=["apple", "mango","banana"];
console.log(fruits[2]);
console.log(fruits[0]);
console.log(fruits);//prints all element of array
let mixed=["hello" , 2, "34",2.5];
console.log(mixed[0]);
console.log(mixed);

//checking it is array or not
console.log(Array.isArray(fruits));
console.log(Array.isArray(mixed));

//replacing element in array
fruits[2]="kela";
console.log(fruits);

//array push and pop
let number=[2,4,5,6,77,10];
console.log(number);
number.push(12); // add in last index
console.log(number);

number.pop();//remove last index
console.log(number);

//array shift(remove element from starting) and unshift(add element from start)
number.shift();//removes 2
console.log(number);

number.unshift(12);//12 added at index 0
console.log(number);

//pop and push are faster then shift and unshift because they dont need to deal with index


// primitive vs reference type
let num1=23;
let num2=num1;
console.log(num1);//23
console.log(num2);//23
num1++;
console.log(num1);//24
console.log(num2);//23

//refrence type
let num=[23,4,6,4,2];
let num3=num;
console.log(num);
console.log(num3);
num.push(49);
console.log(num);
console.log(num3);

//cloning array
// normal method
let clone=[2,3,4,9];
let clone1=[2,3,4,9];
console.log(clone===clone1);
console.log(clone);
console.log(clone1);
clone1.push(3);
console.log(clone===clone1);
console.log(clone);
console.log(clone1);

//method 2:slice(0) method
let clone3=clone.slice(0);
console.log(clone);
console.log(clone3);
clone.push(69);
console.log(clone);
console.log(clone3);

//method 3:concatination
let clone4=[].concat(clone);
console.log(clone);
console.log(clone4);
clone.pop();
console.log(clone);
console.log(clone4);

//method 4:spread operator
let clone5=[...clone];
console.log(clone);
console.log(clone5);
clone.push(0);
console.log(clone);
console.log(clone5);

//1.cloning + adding element
let clone6=clone.slice(0).concat([23,49]);
console.log(clone);
console.log(clone6);

//2.cloning + adding element
let clone7=[].concat(clone,[23,49,23,56]);
console.log(clone);
console.log(clone7);

//loops in array
let looop=[2,3,4,9,23,49,2349];
console.log(looop.length);
console.log(looop[looop.length-1]);
//for loop
for(let i=0;i<=looop.length-1; i++){
    console.log(looop[i]);
}


//creating array using const
const pi=[2,3,5,7];
console.log(pi);
pi.push(2349);
console.log(pi);
// const pi[4,6,4] error;

//while loop
const numx=[2,3,4,9,5,6];
let i=0;
while(i<numx.length){
    console.log(numx[i]);
    i++;
}

//for of loop
const numm=[2,3,5,6,8,1];
for(let number of numm){
    console.log(number);
}

const fruitsx=["mango","apple","banana"];
for(let frut of fruitsx){
    console.log(frut);
}

//for in loop
const numxx=[2,3,4,5,6,7];
for(let index in numxx){
    console.log(index);
    console.log(numxx[index]);
}

//array destructuring
const xyz=[2,3,5,6];
//method 1
let var1=xyz[0];
let var2=xyz[1];
let var3=xyz[2];
console.log(var1);
console.log(var2);
console.log(var3);

//method2 2
let[var4, ,var5,var6]=xyz;//value skip leave space
console.log(var4);
console.log(var5);
console.log(var6);

//creating new array from old array
console.log(xyz);
let newxyz=xyz.slice(2);
console.log(newxyz);