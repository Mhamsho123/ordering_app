import { menuArray } from "./data.js";

const orderEl = document.getElementById('order-items')
const cartEl = document.getElementById('cart-container')

const cart = [];


document.addEventListener('click', function(e){

    if(e.target.dataset.id)
        addItemToCart(e.target.dataset.id)

})


function addItemToCart(id){
    const cartAdded = menuArray.filter(function(items){
        return items.id == id
    })
    const cartIds = cart.map((items) => items.id)
    
    !cartIds.includes(Number(id)) ? cart.push({...cartAdded[0], isAdded: true }) : ""
    console.log(cart)
    renderCartItems()

}









function renderCartItems(){
    let html = ''
    cart.forEach(({name, price})=>{
        html += `
            <div class='cart-item'>
                <h4 class="item-name">${name}</h4>
                <h5>remvoe</h5>
            </div>
            <h5 class="item-price">${price}</h5>
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