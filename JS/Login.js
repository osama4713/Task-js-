let username = document.getElementById("username");
let password = document.getElementById("password");
let signIn = document.getElementById("sign_in");

let getusername = localStorage.getItem("Usarname");

let getpassword = localStorage.getItem("Password");

signIn.addEventListener("click" , function(e){ 

    e.preventDefault()
    
    if(username.value === ""){

        alert("Enter the Username")

    }else if(password.value === ""){

        alert("Enter the Password")

    }else {

        if(getusername && getusername.trim() === username.value.trim() && getpassword && getpassword.trim()  === password.value.trim()) {

            setTimeout(() => {
                window.location = "about.html"
            },1000)

        }else{
            alert("Username or Password is incorrect")
        } 
    }
})