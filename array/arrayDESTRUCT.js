//normal way(general method)
let arr1=[1,3,4,6,8,10];
let no1=arr1[0]
let no2=arr1[1]
let no3=arr1[2]
let no4=arr1[3]
let no5=arr1[4]
let no6=arr1[5]
console.log(no1);
console.log(no2);
console.log(no3);
console.log(no4);
console.log(no5);
console.log(no6);

//destructuring method
let arr2=[12,23,34,45,56];
let [no7,no8,no9,no10,no11]=arr2;
console.log(no7);
console.log(no8);
console.log(no9);
console.log(no10);
console.log(no11);

//case in desturcturing method
let arr3=["a","b","c","d"];
let [va,vb,vc]=arr3; //here d is not destructured
console.log(va);
console.log(vb);
console.log(vc);

let[vx, ,vy]=arr3; // here b is left
console.log(vx);
console.log(vy);

let[vm,vn,vo,vp,vq]=arr3;
console.log(vm);
console.log(vn);
console.log(vo);
console.log(vp);
console.log(vq);// undefined

//making array from array:special case
let arr4=[1,4,7,9];
let newarr=arr4.slice(1);
console.log(newarr);