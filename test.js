let person1 = {
    lname:"Diep",
    age: 24,
    job: ["jangho","coder"],
};

let person2 = {
    lname:"lan",
    age: 24,
    company: ["PieTeam"],
};

let person3 = Object.assign(person1,person2);


//object.keys(obj) mang cac key
console.log(Object.keys(person1));
//object.values(obj) mang cac value
console.log(Object.values(person1));
//object.entries(obj) mang cac entri
console.log(Object.entries(person1));
//for-in: dueyt key => lap voi objet duoc