// DAY-02!!

// 1.Alerts & Prompts:

alert("Welcome to Full Stack Development"); // its has only OK Button.

 let names=prompt ("Enter the age") // sting value
 console.log(names); // It's display browser console and it's shows OK & CANCEL button.

 let a=number(prompt ("Enter the value")) // number value
console.log(a); 

// 2. Operators- Arithmetic & Logical

     // Arithmetic Operators:
          
     let b=12
     let c=4
     console.log(b+c); //16
     console.log(b-c); //8
     console.log(b*c); //48
     console.log(b/c); //3
     console.log(b%c); //0
     console.log(b**c); //20736

     //Logical Operators:

     let d=true
     let e=false
     console.log(d&&e); //false  
     console.log(d||e); //true  
     console.log(d!=e); //true  


     //and:    // && syntax od And // Output true means both values are true

let f=true
let g=false
console.log(f&&g); //false

let i=true
let h=true
console.log(h&&i); //false

let j=false
let k=false
console.log(j&&k); //false

//or :    // || syntax od OR // Output true means atleast values are true
 
let l= false
let m= false
console.log(l||m); //false

let n= false
let o= true
console.log(n||o); //true

let p= true
let q= true
console.log(p||q); //true

//not :   // != syntax od NOT // totally opposite of OR


let r= true
let s= true
console.log(r!=s); //false

let t= true
let u= false
console.log(t!=u); //true


//3.Variables and Datatypes?

var name="Mukesh"         // var define Global Scope
console.log(name);

let age=23                // let define Local Scope
console.log(age);

const state="Tamilnadu"    // const define cannot reassigned
console.log(state);