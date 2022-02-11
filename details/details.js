import { getFoodById } from "../fetch-utils.js";
import { renderDetails } from "../render-utils.js";

const header = document.getElementById('header');
const displayEl = document.getElementById('display');

// console.log('html', header, displayEl);

const params = new URLSearchParams(window.location.search);

// console.log('id', params.get('id'));

window.addEventListener('load', async() => {
    const food = await getFoodById(params.get('id'));
    header.textContent = `Want to learn more about ${food.name}?`;
    displayEl.append(renderDetails(food));

});