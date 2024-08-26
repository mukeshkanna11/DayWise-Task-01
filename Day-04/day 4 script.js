// // Hoisting & Scope?

// //1. Hoisting:

var a=19      // Hoisting suport 'var' only & allocate ,emory spaces .
console.log(a); //19

// //Example:

console.log(a); // undefined
var a=19      // Hoisting suport 'var' only & allocate memory spaces .


let b=16
const c=169

console.log(b); //16 // Hoisting does not support 'let','const' & doesn't create any memoery space.
console.log(c); //169

// //Example:

console.log(d); //Cannot access 'd' before initialization

let d=16
const e=169
       
// // Initialize the scope top of the value only.

function hoisting(){
    let f=0.2
    console.log(f); // 0.2
    
}
hoisting()


hoist()
 function hoist(){
    let f=0.2
    console.log(f); //0.2
} 
 //  Normal function only access top & bottom call or declaration.

//Example:

const arrowFunction=()=>{
    console.log("AF"); // 'AF'
    
} 
arrowFunction()

arrowFunction1() // 'Cannot access 'arrowFunction' before initialization'

const arrowFunction1=()=>{
    console.log("AF"); // 'AF'
    
} 

//Scope:

let g=75

function scope(){
    let h=10
    console.log(g); //75
    console.log(h); //10
    
}
scope() //Because g=75 declare a global scope.

let f=75

function scope(){
    let g=10
    console.log(f); //75
    console.log(g); //10
     function nesFun(){
        console.log(g);
        
     }
}
scope()
nesFun() // 'nesFun' is not defined
console.log(f); //75
console.log(g); // 'g' is not defined because it's access only block of function .This is called Function Scope.


//Arrays:

let  array=[10,20,30,40,50];
console.log(array.length);  //Array length is 5
console.log(array[3]); //40
console.log(array[4]); //50

//Push & Pop Methods: Add or remove elements from the end of an array.

array.push(60)
console.log(array); //Array(6) [ 10, 20, 30, 40, 50, 60 ]

array.push(70)
console.log(array); //Array(7) [ 10, 20, 30, 40, 50, 60, 70 ]

array.pop()
console.log(array); //Array(6) [ 10, 20, 30, 40, 50, 60 ] // remove end of value is called pop method.

// Unshift & Shift: Add or remove elements from the beginning of an array.

array.unshift(700)
console.log(array); //Array(7) [ 700, 10, 20, 30, 40, 50, 60 ]

array.sfit()
console.log(array); //Array(6) [ 10, 20, 30, 40, 50, 60 ]

//Slice() & Slipce(): Extract or modify parts of an array. 

//Slice:

const retslice=array.slice(1,3) //[20,30] slice 1=>20,2=>30,3=>40-10(n-1)

console.log(retslice);//[20,30]
console.log(array); //Array(6) [ 10, 20, 30, 40, 50, 60 ]

//Splice: add,remove,replace.

const spliceret=array.splice(1)

console.log(spliceret);  //[20, 30, 40, 50, 60 ]
console.log(array); //[10]

//Map function (own example):

const mapReturn=array.map((item, index)=>{
    if(item>=30){
    console.log(item);
    console.log(index);
    return item*2+"number"
    }return null;
})
console.log(mapReturn);

// filter:

const filArr=array.filter(i=>i>20)
console.log(filArr);

// Add Filter in Map [Own Example]:

const mapReturnArr=array.map((item, index)=>{
    if(item>=40){
    console.log(item);
    console.log(index);
    return item*2+"number"
    }
    const filNum=array.filter(i => i<40)
    console.log(filNum);
})
console.log(mapReturnArr);

// Object iteration

const person = {
    name: "Mukesh",
    age: 24,
    occupation: "Web Developer"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// JSon implement filter & implement if inside the foreach

let employee=[
    {
        name:"Mukesh",
        age:23,
        role:"web Devloper"
    },
    {
        name:"Priya",
        age:24,
        role:"Associate"
    },
    {
        name:"Kavi",
        age:23,
        role:"Data Entry"
    },
    {
        name:"Menaga",
        age:23,
        role:"collection agent"
    },
    {
        name:"SureshBabu sir",
        age:35,
        role:"Senior Devloper"
    },
];

// filter in json:

const filtEmp=employee.filter(i => i.age<30)
console.log(filtEmp);

//foreach and if:

employee.forEach(item =>{
    if(item.age<30){
    console.log(`${item.name} age of ${item.age} worked as ${item.role} `);
    }else{
        console.log(`${item.name} age of ${item.age} worked as ${item.role}`);
    }
})





