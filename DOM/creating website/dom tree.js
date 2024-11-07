//finding rootnode
const rootnode=document.getRootNode();
console.log(rootnode);

//child of rootnode
console.log(rootnode.childNodes);
//nodelist:arraylike object
console.log(rootnode.childNodes[1]);
console.log(rootnode.childNodes[0]);

const htmlElementNode=rootnode.childNodes[1];
// console.log(htmlElementNode);
// console.log(htmlElementNode);
console.log(htmlElementNode[0]);
