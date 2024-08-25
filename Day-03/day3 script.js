//DAY-03!!!

//Function:

//Normal function:

//function guvi(){} // This is the syntax of function 

function guvi(){
    console.log("HTML");
    
} 
guvi() //'HTML'

let a=60
function normFun(){
    console.log("Block of Code"); // 'Block of Code'
    console.log(a);
    
} 
normFun()

//Arrow Function:

//const arrFun=()=>{ }  // This is the syntax of arrow function

const arrFun=()=>{
    console.log("Shortout Hoisting Issue"); // 'Shortout Hoisting Issue'
    
 }
 arrFun()

 const arrFun1=()=>{
    console.log("Minimize Size"); // 'Minimize Size'
    
 }
 arrFun1()

 const arrFun2=()=>{
    console.log("Return Value"); // 'Return Value'
    
 }
 arrFun2()

 //Annonymous Function:
     
 //const parameter=function(){}  //annonymous function syntax

const parameter=function(a,b){

    console.log(a,b); // [10,30]
    
}
parameter(10,30);

//IIFE Function:

// (function(){})();  Syntax of IIFE Function

(function(){
    console.log("IIFE"); // 'IIFE'
    
})()    //Automatically call

let y=132;

(function(){
    console.log("IIFE"); // 'IIFE'
    let y=456
    console.log(y); // 456
                          
})()
console.log(y); // 132
 // it's only access of own block

//HOF (Higher Order Function)

function retFun(a,b){    // (a,b) params
     console.log("ReturnFunction"); // 'ReturnFunction'
     
     return(a+b);  //return function
}
let val=(retFun(100,50))
console.log(val); // 150

function vag(x,y){
     console.log("bot");
     return(x-y)
}
let value=(vag(10,25))
console.log(value); // -15

// function java(){
//      console.log("JavaScript"); // 'JavaScript'
     
//      function node(){
//           console.log("Node.js");
          
//      }
     
// }
// java()
// node()  

// node() is not define because, node is local scope not global scope
         // How to call node() outside of java() // This is interview Questions?

         function java1(){
          console.log("JavaScript1"); // 'JavaScript1'
          
           return function node1(){
               console.log("Node.js1"); // 'node.js1'
               
          }
          
     }
     const node1=java1()
     node1()  // Got it Output From Return Function Method

     function java(){
          console.log("JavaScript");  // 'JavaScript1'
          
            global.node=function node(){
               console.log("Node.js"); // 'node.js1'
               
          }
          
     }
     java()
     node()  // Another way to get output from global scope.


     function top(){
          console.log("topFun"); // 'topFun'

          function bot(){
               console.log("botFun");
               
          }
          
     }
     top()
     bot() // bot() cannot access

     function top(){
          console.log("topFun"); // 'topFun'

           return function bot(){
               console.log("botFun");  // 'botFun'
               
          }
          
     }
     const bot=top() 
     bot()             //  1st Method (call return function)

function top(){
     console.log("topFun"); // 'topFun'

     globalThis.bot= function(bot){
          console.log("botFun"); // 'botFun'
          
     }
}
top()
bot()       // 2nd Method (call local to global function).


// If Else - Condition:

let age=18

if(age>18){
     console.log("Adult");
     
} else;{
     console.log("Not Adult"); // 'Not Adult'
     
}

let mark=86

if(mark>=80){
     console.log("A Grade"); // 'A Grade'
     
} else if(mark>=70){
     console.log("b Grade");
     
} else if(mark>=60){
     console.log("grade c");
     
}esle;{
     console.log("not eligible");
     
}

let attendance=81

if(attendance<=80){
     console.log("NO IR CRITERIA");
     
}else if(attendance<=70){
     console.log("NO IR CRITERIA");
     
}else if(attendance<=60){
     console.log("NO IR CRITERIA");
     
}else;{
     console.log("IR CRITERIA"); // 'IR CRITERRIA'
     
} //