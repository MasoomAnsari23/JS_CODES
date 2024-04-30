let scpe=()=>{

    let scpe2=()=>{
        let sc=2349;
     console.log("value" ,sc);
    }
    scpe2();
}
scpe();

//this shows lexical scope

let scpe1=()=>{
    let sc=23;  //this will print now

    let scpe3=()=>{
        // let sc=2349;  
     console.log("value" ,sc);
    }
    scpe3();
}
scpe1();