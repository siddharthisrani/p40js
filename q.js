let double=(a)=>{

      let pera=document.querySelector("#pera")


   if(a%2==0){
        pera.innerHTML="Even";

    }else{
        pera.innerHTML="Odd";
    }

      pera.innerHTML=`
      
          Square is ${a*a} <br>
          Cube is ${a*a*a} <br>
          ${(a%2==0)?"Even":"Odd"} 
      
      `;

}
