console.log("love gaza");

setTimeout(()=>{//setTimeout is taken by browser it does not worked in global execution context but after tiime metion on it in millisecond brwser gives it to callback queue and event checks callstack when its free then it is exeuted and printed
    console.log("free gaza");//print after 1 sec i.e 1000 millisecond
},1000);

console.log("love palastine");