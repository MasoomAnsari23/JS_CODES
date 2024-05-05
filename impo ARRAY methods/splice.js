const arr1=["item1", "item2", 23, 49];
arr1.splice(0,2); // deletaion done from index 0 to count 2(element);
console.log(arr1);

arr1.splice(0,0,"item11", "item22");
console.log(arr1); // insertion done from index 0  and 0 element is deleted and two item is added

arr1.splice(1,3,49,23);
console.log(arr1); // element index 1,2,3 is deleted and from index 1 two ited is added