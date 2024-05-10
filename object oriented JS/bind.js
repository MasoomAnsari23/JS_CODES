//bind return function
function gaza(touchWith, reason,resist){
    console.log(this.firstName,this.age,touchWith,reason,resist);
}

const user1={
    firstName:"childrens, womens, mens",
    age:"0-99",
}

const user2={
    firstName:"people",
    age:"above-18",
}

const user3={
    firstName:"Hamas",
    age:"infinte"
}

gaza.call(user1,"beloved brothers, sisters,mothers" , "american and zionist nazis killed","more than 40k innocent unarmed civilian");
gaza.apply(user2,["fight" ,"share, never forget these brutal nazis","we need to take down this nazis to stablish peace they are mother of terrorism"]);
const love=gaza.bind(user3,"support resistance against new era of nazis","we never surrender either we die or we win" ,"Allah said us that death is not end and standing against crime and injustice that's real islam" )
love();
