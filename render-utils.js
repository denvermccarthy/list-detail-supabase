export function displayFood(object) {
    const a = document.createElement('a');
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    a.href = `/details/?id=${object.id}`;    
    h4.textContent = object.name;
    img.src = `/assets/${object.name}.jpg`;
    div.append(h4, img);
    a.append(div);
    return a;
}

export function renderDetails(object) {
    const a = document.createElement('a');
    const div = document.createElement('div');
    div.classList.add('detail-card');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const tier = document.createElement('p');
    tier.classList.add('detail-tier');
    const description = document.createElement('p');
    description.classList.add('detail-desc');
    a.href = `https://www.google.com/maps/search/${object.name}/`;    
    h2.textContent = object.name;
    img.src = `/assets/${object.name}.jpg`;
    tier.textContent = `Tier: ${object.tier}`;
    description.textContent = object.about;
    div.append(h2, img, tier, description);
    a.append(div);
    return a;
}