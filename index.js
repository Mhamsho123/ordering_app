import { menuArray } from "./data.js";

const orderEl = document.getElementById('order-items')





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
                    <button data-id="${id}">+</button>
                </div>
            </div>
        `
    })

    





    orderEl.innerHTML = html
}

renderPage()