// objects are key value pair 
// declaration object.create() let obj={l}

// concatation in obect can be handled by spread operators  

//  all methods are similar like dictonary key - object.key(object name ) similar like objet.value(obj name)

let obj1 = {
    name:'AYush',
    class: 12,
    age:10
}
let obj2={
    name:"ayush2",
    class:10,
    gender:"Male"
}

// using object assigning  


const obj3 = Object.assign(obj1,obj2)
console.log(obj3);

// using Spread Operator
const obj4= {...obj1,...obj2}
console.log(obj4);

console.log(Object.keys(obj3));
console.log(Object.values(obj3));


