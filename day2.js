

//function run(){

//===================== scope =============

//    const num=55;
  
//    {
//       const num=10;
//       console.log(num)
//    }   
//    console.log(num)

//  =============== Redeclaration=================== 

//   const num=44;
//   const num=55;
//   console.log(num)
// ====================Reassignment=============
//   const pi=3.14;
//   console.log(num)
//   var num=44;


//   var hi=7656667876766885n;
//  console.log(typeof(hi))


//   var hello="i am SId"
//   console.log(hello)




  


// }
// run();


//function oper(){


    //Alert   Prompt   Confirm  
    
   // alert("Hello i am Alert message")
      //prompt("Hello i am Prompt message")
    //  confirm("Hello Confirmed")


// let num1=2;
    //let num2=3;
    // console.log(num1+num2)
    //alert("The sum is " +  (num1+num2))


  //  let num1=  prompt("Enter 1st number"); 
  //  let num2=  prompt("Enter 2nd number");
  //  alert(num1-num2);     

  // let num=prompt("Enter your age")

  // if(num>=18){
  //   alert("YEs")
  // }else{
  //   alert("NO")
  // }



//} 

//oper();

//  document.getElementById("name")
//  document.getElementsByClassName("name")
//  document.querySelector("")

//   function run(){
    
//  let pera=document.querySelector("#text")
   
// //  pera.style.display="none";
 
//  if(pera.style.display==="none"){
//   pera.style.display="block";
//  }else{
//   pera.style.display="none";
//  }   
     
//   }



function run1(){

  let ptext=document.querySelector("#text")

  ptext.innerHTML="Hello Cybrom";
 

}

function run2(){
  let ptext=document.querySelector("#text")
  ptext.innerHTML="hello";
}



let count=0;

function inc(){
 
   count++;
   let para=document.querySelector("#text")
   para.innerHTML=count;
}

function dec(){
  count--;
  let para=document.querySelector("#text")
  para.innerHTML=count;

}


  //  condition? ontrue : onfalse;