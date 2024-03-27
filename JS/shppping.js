
let allproducts = document.querySelector(".products_sopping")

let getAdded_products_New_page = localStorage.getItem("Added_products_New_page")

let increment = document.querySelector(".num_inc");

if(getAdded_products_New_page){

    let show_allProduct = JSON.parse(getAdded_products_New_page)
    drawNewItems(show_allProduct)

    increment.innerHTML = show_allProduct.length;

    function RemoveFromProduct(id){

        let RemoveItem = show_allProduct.map((x) => {return x.id }).indexOf(id)
    
        if(RemoveItem !== -1){
            show_allProduct.splice(RemoveItem , 1) 
            drawNewItems(show_allProduct)

            localStorage.setItem('Added_products_New_page' , JSON.stringify(show_allProduct))
            increment.innerHTML = show_allProduct.length;
        }
    } 
}

function drawNewItems(products_sopping) {
    let all = products_sopping.map((item) => {
        return `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-5 m-auto bg-dark" style="width: 20rem; height: 28rem; box-shadow: 1px 1px 15px 8px;">
                <img src="${item.imageUrl}" class="card-img-top ps-2 pe-2 pt-1" alt="Classima 10718" style="height: 75%;">
                <div class="card-body m-auto">
                    <h5 class="card-title text-light" style="display: inline; text-transform: uppercase;">${item.title}</h5>
                    <button class="btn btn1-home fst-italic" onclick="RemoveFromProduct(${item.id})">Remove</button>
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

    allproducts.innerHTML = all;
}
