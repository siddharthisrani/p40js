let Sub=()=>{

   let name=document.querySelector("#name").value;
   let number=document.querySelector("#num").value;
   let email=document.querySelector("#email").value;
   let pass=document.querySelector("#pass").value;
   let cpass=document.querySelector("#cpass").value;

   let errorname=document.querySelector("#errorname");
   let errornum=document.querySelector("#errornum");
   let erroremail=document.querySelector("#erroremail");
   let errorpass=document.querySelector("#errorpass");
   let errorcpass=document.querySelector("#errorcpass");

       if(name===""){
        document.querySelector("#name").placeholder="Enter Name"
        // name.placeholder="Please enter your name";
        errorname.style.color="red";
        errorname.style.fontSize="30px";
        return false;
       }

       else if(number===""){
        errornum.textContent="Please enter your number";
        errornum.style.color="red";
        errornum.style.fontSize="30px";
        return false;
       }

       else if(isNaN(number)){
      
        errornum.innerHTML="Please enter number only";
        return false;

       }

       else if(number.length!==10){
        errornum.innerHTML="Please enter valid number 10";
        return false 

       }

       
       else if(!(email.includes("@") && email.includes(".com"))){
        erroremail.textContent="Please enter valid email";
        erroremail.style.color="red";
        erroremail.style.fontSize="30px"; 
        return false;
       }


       else if(!
        (
            pass.match(/[1234567890]/) 
             && 
            pass.match(/[!@#$%^&*()]/) 
             && 
            pass.match(/[a-z]/) 
             && 
            pass.match(/[A-Z]/)
        )
    ){
        errorpass.innerHTML = "Password contain atleast 1 lower, upper ,special and number";
        document.querySelector('#errorpass').style.color = "red";
        let passinp=document.querySelector("#pass")
        passinp.style.borderColor = "red"
        passinp.style.outlineColor = "red"
        return false;
    }

    else if(pass !== cpass){
        errorcpass.innerHTML = "Password and confirm password should be same";
        document.querySelector('#pass').value = "";
        document.querySelector('#cpass').value = "";
        document.querySelector('#pass').focus();
        return false;
    }


}