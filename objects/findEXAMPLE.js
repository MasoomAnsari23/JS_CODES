//finding details by userId as userId is unique

const users=[
    {userId:1, username:"masoom"},
    {userId:2, username:"asif"},
    {userId:3, username:"sahid"},
    {userId:4, username:"sajjad"},
]

const result=users.find((id)=>{
    return id.userId===3;
});  
console.log(result);