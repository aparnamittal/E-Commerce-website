let carts = document.querySelectorAll('.add-cart')

let products = [
    {
        name: "Black Coffee",
        tag: "BlackCofee",
        price: 100,
        inCart: 0
    },
    {
        name: "espresso",
        tag: "espresso",
        price: 100,
        inCart: 0
    },
    {
        name: "Latte",
        tag: "Latte",
        price: 100,
        inCart: 0
    },
    {
        name: "Cappuccino",
        tag: "Cappuccino",
        price: 100,
        inCart: 0
    },
    {
        name: "Macchiato",
        tag: "Macchiato",
        price: 100,
        inCart: 0
    },
    {
        name: "IrishCofee",
        tag: "IrishCofee",
        price: 100,
        inCart: 0
    },
    {
        name: "ColdBrew",
        tag: "ColdBrew",
        price: 100,
        inCart: 0
    },
    {
        name: "NitroColdBrew",
        tag: "NitroColdBrew",
        price: 100,
        inCart: 0
    },
    {
        name: "FreshlyBrewedCoffee",
        tag: "FreshlyBrewedCoffee",
        price: 100,
        inCart: 0
    },

]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);//convert into number

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

}

function totalCost(products) {
    // console.log("prise is ",products.price);
    let cartcost = localStorage.getItem("totalcost");
    console.log("my cart cost", cartcost);

    if (cartcost != null) {
        cartcost = parseInt(cartcost);
        localStorage.setItem("totalcost", cartcost + products.price);
    } else {
        localStorage.setItem("totalcost", products.price);
    }
}

onLoadCartNumbers();