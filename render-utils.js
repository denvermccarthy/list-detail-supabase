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