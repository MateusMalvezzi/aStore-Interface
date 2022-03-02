function get (url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function createCard(product) {
    card = document.createElement('div');
    img = document.createElement('img');
    pName = document.createElement('h3');
    pPrice = document.createElement('p');
   


    img.src = product.image;
    pName.innerHTML = product.name;
    pPrice.innerHTML = product.price;

    card.appendChild(img);
    card.appendChild(pName);
    card.appendChild(pPrice);
    

    return card;

}

function createButton(){
    container = document.createElement('div')
    button = document.createElement('button');
    text = document.createElement('p');

    text.innerHTML = 'COMPRAR';

    container.appendChild(button);
    button.appendChild(text);

    return container;
}

class productList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `       
      <div class="shoes">
      <div class="line-father">
          <div class="line" id="card-component"></div>
          <div  class="buy" id="button"></div>
      </div>
      </div>       
      `;
    }
  }

function main() {
    let data = get("http://localhost:8888/api/V1/categories/3");
    let product = JSON.parse(data);
    let component = document.getElementById('card-component')
    let button2 = document.getElementById("button");
    const sliced = product.items.slice(0, 5);
    
    console.log(component);
    console.log(button2);

    //Para cada produto --> Criar um card --> Adicionar no component pai
    sliced.map(element => {
        let card = createCard(element);
        component.appendChild(card);
        let button = createButton(element);
        button2.appendChild(button);
        
    });
}



  customElements.define('product-list', productList);

main();