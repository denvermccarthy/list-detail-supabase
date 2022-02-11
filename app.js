import { 
    getFoods,
} from './fetch-utils.js';
import {
    displayFood
} from './render-utils.js';

function appendFoodByTier(html, object) {
    const destination = document.getElementById(`${object.tier}-items`); 
    destination.append(html);
}


window.addEventListener('load', async() => {
    const food = await getFoods();
    food.forEach((item) => {
        appendFoodByTier(displayFood(item), item);
    });
});