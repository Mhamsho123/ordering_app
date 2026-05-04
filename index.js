import { menuArray } from "./data.js";

const orderEl = document.getElementById('order-items')
const cartEl = document.getElementById('cart-container')
const completeOrderEl = document.getElementById('complete-btn')

let cart = [];


document.addEventListener('click', function(e){

    if(e.target.dataset.id)
        addItemToCart(e.target.dataset.id)
    if(e.target.dataset.remove)
        removeItemFromCart(e.target.dataset.remove)

})

function renderingFunctions(){
    renderCartItems()
    completeOrder()
}


function addItemToCart(id){
    const cartAdded = menuArray.filter(function(items){
        return items.id == id
    })
    const cartIds = cart.map((items) => items.id)
    
    !cartIds.includes(Number(id)) ? cart.push({...cartAdded[0], isAdded: true }) : ""
    console.log(cart)
    renderingFunctions()

}


function removeItemFromCart(id){
    cart = cart.filter((item) =>{
        return item.id !== Number(id)
    })
    renderingFunctions()
}

function completeOrder(){
    completeOrderEl.style.display = ""
     cart.length > 0 ? completeOrderEl.style.display = "block" : "none";
}




function renderCartItems(){
    let html = ''

    cart.forEach(({name, ingredients, price, id})=>{
        html += `
            <div class="cart-item">
                <div class="cart-left">
                    <h4 class="item-name">${name}</h4>
                    <button class="remove-btn" data-remove="${id}">remove</button>
                </div>
                <div class="cart-item-ingredients">
                    <h5 class="item-cart-ingredients">${ingredients.join(', ')}</h5>
                </div>

                <h5 class="item-price">$${price}</h5>
            </div>
        `
    })

    cartEl.innerHTML = html
}



function renderPage(){
    let html = ''
    menuArray.forEach(function({ name, ingredients, id, price, emoji }) {
        html += `
            <div class="menu-item-container">
                <div class="emoji-container">
                    <p class="emoji">${emoji}</p>
                </div>
                <div class="item-container">
                    <h3>${name}</h3>
                    <p>${ingredients.join(', ')}</p>
                    <p>$${price}</p>
                </div>
                <div class="item-add-btn">
                    <button id=${id} data-id="${id}">+</button>
                </div>
            </div>
        `
    })

    

    orderEl.innerHTML = html
}

renderPage()