import { menuArray } from "./data.js";

const orderEl = document.getElementById('order-items')

const cart = [];

const symbol = cart.isAdded ? "-" : "+";

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
                    <button id=${id} data-id="${id}">${symbol}</button>
                </div>
            </div>
        `
    })

    

    orderEl.innerHTML = html
}

renderPage()