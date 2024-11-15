const mypromise=Promise.resolve(5);
mypromise.then(value=>{
    console.log(value);
});

// example 2
const newpromise=Promise.resolve(23);
newpromise.then(value=>{
    console.log(value);
});

//example 3
const expromise=Promise.resolve(49);
expromise.then((value)=>{
    console.log(value);
})