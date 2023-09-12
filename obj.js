const user = {
    name: "choi",
    age: 20,
    addr: "jm",
    sayHi() {
        console.log(this.name);
    }
}

let json = JSON.stringify(user,['age','addr'],);

console.log(user);
console.log(json);