const number=new Set([1,2,3,4,5,5]);
console.log(number);
// set only accepts unique element it ignores repeated element

//adding element in set
number.add(6); //addding element 6
number.add(6); //this get ignore becaure already 6 is added and it is present in set 
console.log(number);

//index based access doesn't work in set
// console.log(numbwe[1]); // error
// hence order of set is not guarented

// adding array in set
number.add(["item1" , "item2"]);
console.log(number);

//adding duplicate of array
//it is possible because both are different array in memory
number.add(["x","y","z"]);  //both are part of set
number.add(["x","y","z"]);
console.log(number);

