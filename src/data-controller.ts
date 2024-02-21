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
    for(var product of prods){
        var html = generateProductHTML(product);
        mainContainer?.insertAdjacentHTML('beforeend', html);
    }
}

function getByCategory(category: string): void {
    products.filter(product => product.category.includes(category));
}

function getByRating(minRating: number): void {
    products.sort((p1,p2) => {return p2.rating - p1.rating;});
}

export { renderProducts, getByCategory, getByRating };