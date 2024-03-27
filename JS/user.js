
let user = document.querySelector("#user");

if (localStorage.getItem("Usarname")) {
    user.innerHTML = localStorage.getItem("Usarname")
}

// *********************************************************

let logout = document.querySelector("#logout")

logout.addEventListener("click", () => {
    localStorage.clear()

    setTimeout(() => {
        window.location = "./login.html"
    }, 500)
})