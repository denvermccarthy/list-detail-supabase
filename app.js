import { 
    getFoodByTier,
    getFoods,
} from './fetch-utils.js';


function appendFoodByTier(html, object) {
    const destination = document.getElementById(`${object.tier}-items`); 
    console.log('destination', destination);
    destination.append(html);
}


function displayFood(object) {
    const a = document.createElement('a');
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    h4.textContent = object.name;
    img.src = `/assets/${object.name}`;
    div.append(h4, img);
    a.append(div);
    return a;
}

// displayFood({
//     id: 1,
//     name: 'cereal',
//     tier: 'c',
// });

 

// appendFoodById(displayFood({ id: 1, name: 'cereal', tier: 'c', }), { id: 1, name: 'cereal', tier: 'b', });
// function displayFoods(data) {

// }

window.addEventListener('load', async() => {
    const food = await getFoods();
    food.forEach((item) => {
        appendFoodByTier(displayFood(item), item);
    });
});

// function appendFoodById(html, object) {
//     const destination = await document.getElementById(`${object.tier}-items`); 
//     console.log('destination', destination);
//     await destination.append(html);
//     return destination;
// }

// for (let item of food) {
//     console.log('items', item);
    
//     let destination = document.getElementById(`${item.tier}-items`);
//     console.log('destination', destination);
    
//     const html = displayFood(item);
//     console.log('html', html);

//     destination.append(html);
// }