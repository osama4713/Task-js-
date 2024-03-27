
let allProducts = document.querySelector(".products");
let Name_products = document.querySelector(".card_products div");
let Name_allProducts = document.querySelector(".card_products");
let show_products = document.querySelector(".Shopping_card");

let PriceProducts = document.querySelector(".Price-products")
let PriceProduct = 0;

let increment = document.querySelector(".num_inc");

let products = [
    {
        id: 1,
        title: "Classima 10718",
        imageUrl: "image/image-4.webp",
        price: 380
    }, {
        id: 2,
        title: "Classima 10414",
        imageUrl: "image/image-7.avif",
        price: 360
    }, {
        id: 3,
        title: "Classima 10714",
        imageUrl: "image/image-10.avif",
        price: 480
    }, {
        id: 4,
        title: "Riviera 10761",
        imageUrl: "image/image-6.avif",
        price: 500
    }, {
        id: 5,
        title: "Riviera 10749",
        imageUrl: "image/image-8.avif",
        price: 550
    }, {
        id: 6,
        title: "Riviera 10722",
        imageUrl: "image/image-9.avif",
        price: 590
    }, {
        id: 7,
        title: "Baume 10684",
        imageUrl: "image/image-5.avif",
        price: 440
    }, {
        id: 8,
        title: "Baume 10590",
        imageUrl: "image/image-11.avif",
        price: 470
    }
]

function drawItems() {
    let all = products.map((item) => {
        return `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-5 m-auto bg-dark" style="width: 20rem; height: 28rem; box-shadow: 1px 1px 15px 8px;">
                <img src="${item.imageUrl}" class="card-img-top ps-2 pe-2 pt-1" alt="Classima 10718" style="height: 75%;">
                <div class="card-body m-auto">
                    <h5 class="card-title text-light" style="display: inline; text-transform: uppercase;">${item.title}</h5>
                    <button class="btn btn1-home fst-italic" onclick="addToCart(${item.id})">Buy now</button>
                    <div>
                        <i class="fa-solid fa-star stat_1"></i>
                        <i class="fa-solid fa-star stat_1"></i>
                        <i class="fa-solid fa-star stat_1"></i>
                        <i class="fa-solid fa-star stat_1"></i>
                        <i class="fa-regular fa-star stat_2"></i>
                        <span class="span_price" >${item.price}$</span>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    allProducts.innerHTML = all;
}

drawItems()

let addItem = localStorage.getItem("Added_products_New_page") ? JSON.parse(localStorage.getItem("Added_products_New_page")) : [];

if (addItem) {
    addItem.map((item) => {

        Name_products.innerHTML += `<p>${item.title}<i class="fa-solid fa-trash ms-4 icon2" onclick="RemoveItem_in_bay(${item.id}"></i></p>`;

        PriceProduct += +(item.price);

    })
    increment.innerHTML = addItem.length;

    PriceProducts.innerHTML = 'Price : ' + PriceProduct + ' $';
}


if (localStorage.getItem("Usarname")) {

    function addToCart(id) {

        let chooseItem = products.find((item) => item.id === id);
        Name_products.innerHTML += `<p>${chooseItem.title}<i class="fa-solid fa-trash ms-4 icon2" onclick="RemoveItem_in_bay(${chooseItem.id})" ></i></p>`;

        PriceProduct += +(chooseItem.price)
        PriceProducts.innerHTML = 'Price : ' + PriceProduct + ' $'



        addItem = [...addItem, chooseItem]
        localStorage.setItem("Added_products_New_page", JSON.stringify(addItem))


        let icer = document.querySelectorAll(".card_products div p");
        increment.innerHTML = icer.length;

    }

} else {
    window.location = "./login.html"
}


show_products.addEventListener("click", show)

function show() {
    if (Name_products.innerHTML != "") {
        if (Name_allProducts.style.display == "block") {
            Name_allProducts.style.display = "none"
        } else {
            Name_allProducts.style.display = "block"
        }
    }
}

