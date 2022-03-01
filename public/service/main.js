function get (url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function createCard(product) {
    card = document.createElement('div');
    img = document.createElement('img');
    pName = document.createElement('p');
    pPrice = document.createElement('p');

    img.innerHTML = product.image;
    pName.innerHTML = product.name;
    pPrice.innerHTML = product.price;

    card.appendChild(img);
    card.appendChild(pName);
    card.appendChild(pPrice);

    return card;

}

function main() {
    let data = get("http://localhost:8888/api/V1/categories/3");
    let product = JSON.parse(data);
    let component = document.getElementById("card-component")
    //Para cada produto --> Criar um card --> Adicionar no component pai
    product.items.map(element => {
        let card = createCard(element);
        component.appendChild(card);
    });
}

main();