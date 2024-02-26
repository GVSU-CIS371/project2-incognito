import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    const mainContainer = document.getElementById('main-container');
    if (mainContainer) {
        let html = '';
    for(var product of prods){
        html += generateProductHTML(product);
    }
    mainContainer.innerHTML = html;
}
}

function getByCategory(category: string): Product[]{
    return products.filter(product => product.category === category);
}

function getByRating(minRating: number): Product[] {
    return products.filter(product => product.rating > minRating);;
}


export { renderProducts, getByCategory, getByRating };