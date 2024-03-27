let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let signUp = document.getElementById("sign_up")

signUp.addEventListener("click" , function(e){ 

    e.preventDefault()

    if(username.value === ""){

        alert("Enter the Username")

    }else if(email.value === ""){

        alert("Enter the Email")

    }else if( password.value === ""){

        alert("Enter the Password")

    }else{

        localStorage.setItem("Usarname" , username.value);
        localStorage.setItem("Email" , email.value);
        localStorage.setItem("Password" , password .value);

        setTimeout(() => {
            window.location = "login.html"
        },1000)
    }
})