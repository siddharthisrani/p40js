




// const letsgo=()=>{  
    

//     let text0=`This "is" 'a' String`;
//      // supports "" '' 

//      let text= `this is This
//       string`;
//      //support multiline 

//     console.log(text)

//     let s=56;
//     let s2=5;
//      let text2= `the sum of  ${s} + ${s2}  is ${s+s2} `;
//      //support dynamic expressions
//     console.log(text2)   
      
//     //  let text2="This is another string";
//     //  console.log(text.concat(text2))     
//     //  console.log(text.length)
//     // console.log(text.slice(10,15))
//     // console.log(text.substring(1,8))
//     // console.log(text.replace(/This/gi,"Hello"))
// }
// letsgo()

 
// (function(){
//     // console.log("Hello World")
// }())

// function letsgo(){

// }

//letsgo();

//=============== Parameter function=========

function go(a,b){
    return a+b;
}

 let ans= go(2,7)
console.log(ans*2)

let start=(a)=>{

    let pe=document.querySelector("#demo")
    pe.innerHTML=a;
    
}
// console.log(start(7))
let start2=(a,b)=>a+b
console.log(start2(4,3))
