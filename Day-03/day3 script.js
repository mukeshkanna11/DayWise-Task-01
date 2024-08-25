//DAY-03!!!

//function

//normal function:

//function guvi(){} // This is the syntax of function 

// function guvi(){
//     console.log("HTML");
    
// } 
// guvi()

// let a=60
// function guvi(){
//     console.log("Block of Code");
//     console.log(a);
    
// } 
// guvi()

//Arrow Function:

// const arrFun=()=>{ }  // This is the syntax of arrow function

// const arrFun=()=>{
//     console.log("Shortout Hoisting Issue");
    
//  }
//  arrFun()

//  const arrFun1=()=>{
//     console.log("minimize size");
    
//  }
//  arrFun1()

//  const arrFun2=()=>{
//     console.log("retuen value");
    
//  }
//  arrFun2()

 //Annonymous Function:
     
//  const parameter=function(){}  //annonymous function syntax

// const parameter=function(a,b){

//     console.log(a,b);
    
// }
// parameter(10,30);

//IIFE Function:

// (function(){})();  Syntax of IIFE Function

// (function(){
//     console.log("IIFE");
    
// })()    //Automatically call

// let y=132;

// (function(){
//     console.log("IIFE");
//     let y=456
//     console.log(y);
                          
// })()
// console.log(y); // it's only access of own block

//HOF (Higher Order Function)

// function retFun(a,b){    // (a,b) params
//      console.log("ReturnFunction");
     
//      return(a+b);  //return function
// }
// let val=(retFun(100,50))
// console.log(val);

// function vag(x,y){
//      console.log("bot");
//      return(x-y)
// }
// let val=(vag(10,25))
// console.log(val);

// function java(){
//      console.log("JavaScript");
     
//      function node(){
//           console.log("Node.js");
          
//      }
     
// }
// java()
// node()   // node() is not define because, node is local scope not global scope
         // How to call node() outside of java() // This is interview Questions?

     //     function java(){
     //      console.log("JavaScript");
          
     //       return function node(){
     //           console.log("Node.js");
               
     //      }
          
     // }
     // const node=java()
     // node() // Got it Output From Return Function Method

     // function java(){
     //      console.log("JavaScript");
          
     //        global.node=function node(){
     //           console.log("Node.js");
               
     //      }
          
     // }
     // java()
     // node()  // Another way to get output from global scope

     // function top(){
     //      console.log("topFun");

     //      function bot(){
     //           console.log("botFun");
               
     //      }
          
     // }
     // top()
     // bot()

     // function top(){
     //      console.log("topFun");

     //       return function bot(){
     //           console.log("botFun");
               
     //      }
          
     // }
     // const bot=top() 
     // bot()             //  1st Method (call return function)

// function top(){
//      console.log("topFun");

//      globalThis.bot= function(bot){
//           console.log("botFun");
          
//      }
// }
// top()
// bot()       // 2nd Method (call local to global function)

// If Else - Condition:

// let age=18

// if(age>18){
//      console.log("Adult");
     
// } else;{
//      console.log("Not Adult");
     
// }

// let mark=86

// if(mark>=80){
//      console.log("A Grade");
     
// } else if(mark>=70){
//      console.log("b Grade");
     
// } else if(mark>=60){
//      console.log("grade c");
     
// }esle;{
//      console.log("not eligible");
     
// }

let attendance=81

if(attendance<=80){
     console.log("NO IR CRITERIA");
     
}else if(attendance<=70){
     console.log("NO IR CRITERIA");
     
}else if(attendance<=60){
     console.log("NO IR CRITERIA");
     
}else;{
     console.log("IR CRITERIA");
     
} //