import { 
    getFoodByTier,
    getFoods,
} from './fetch-utils.js';



window.addEventListener('load', async() => {
    const food = await getFoods();
    console.log('hey', food);
    // const cTier = await getFoodByTier('c');
    // console.log('hy', cTier);
});



function displayFood(object) {
    const a = document.createElement('a');
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');

    h4.textContent = object.name;
    img.src = `/assets/${object.name}`;
    div.append(h4, img);
    return a;
}

displayFood({
    id: 1,
    name: 'cereal',
    tier: 'c',
});

function appendFoodById(html, object) {
    const destination = document.getElementById(`${object.tier}-items`); 
    // console.log(destination);    
}

appendFoodById(displayFood({ id: 1, name: 'cereal', tier: 'c', }), { id: 1, name: 'cereal', tier: 'c', });
// function displayFoods(data) {

// }