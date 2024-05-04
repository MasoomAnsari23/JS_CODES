const username = [
    { name: "masoom", id: 23 },
    { name: "asif", id: 25 },
    { name: "sajjad", id: 29 },
    { name: "sahid", id: 26 },
]

const fun1 = function (darling) {
    return darling.name;
}

const result = username.map(fun1);
console.log(result);