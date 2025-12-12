
const  Email1= document.querySelector(".Email");
const Password1= document.querySelector(".Password");
const btn1 = document.querySelector(".btn");
const message = document.querySelector(".msg");


btn1.addEventListener("click", () => {
    const UserEmail = Email1.value.trim();
    const UserPassword =Password1 .value.trim();




    if (UserEmail === "" || UserPassword === "") {
        message.textContent = "Please fill all fields!";
        return;
    }

    if (UserEmail === "khan@gmail.com" && UserPassword === "12345") {

        
       message.style.color = "green";
    message.textContent = "Login Successful! Redirecting...";

    setTimeout(() => {
        window.location.href = "ListIndex.Html";   
    }, 1000);
        message.textContent = "Login Successful!";
    } 
    else
   {
        message.style.color = "red";
        message.textContent = "Incorrect Email or Password!";
    }

    
});




const StuName = document.querySelector(".Name");
const StEmail = document.querySelector(".Email");
const NePassword = document.querySelector(".Password");
const ConfrPass = document.querySelector(".ConformPassword");
const btn2 = document.querySelector(".btn");
const message1 = document.querySelector(".msg1");


btn2.addEventListener("click", () => {

    const StudName = StuName.value.trim();
    const StuEmail = StEmail.value.trim();
    const NeePassword = NePassword.value.trim();
    const ConfrmPass = ConfrPass.value.trim();

    if (StudName === "" || StuEmail === "" || NeePassword === "" || ConfrmPass === "") {
        message1.style.color = "red";
        message1.textContent = "Please fill all fields!";
        return;
    }
      
     if (/^[@a-zA-Z0-9]{1,10}$/.test(NeePassword)) {
         message1.style.color = "green";
        message1.textContent ==" ";
    } else {
        message1.style.color = "red";
        message1.textContent = "Incorrect enter value!";
        return;
    }

    
    const Emailcheak = /^[A-Za-z0-9]{1,10}@gmail\.com$/;

    if (Emailcheak.test(StuEmail)) {
        message1.style.color = "green";
        message1.textContent = "Email correct!";
    } else {
        message1.style.color = "red";
        message1.textContent = "Incorrect email value!";
        return;
    }

    if (ConfrmPass === NeePassword) {
        message1.style.color = "green";
        message1.textContent = "Password Match!";
    } else {
        message1.style.color = "red";
        message1.textContent = "Password not match!";
    }

       message1.style.color = "green";
    message1.textContent = "Login Successful! Redirecting...";

    setTimeout(() => {
        window.location.href = "Index.html";   
    }, 1000);
  
});
