'use strict';
function getValueOfProduct(product) {
    return product.price / product.weight;
}

function calculate(products, maxWeight) {
    const resultProducts = [];
    let totalWeight = 0;
    products = products.sort((A, B) => {
        const vA = getValueOfProduct(A);
        const vB = getValueOfProduct(B);
        if (vA === vB) return B.weight - A.weight;
        return vA - vB;
    });

    for (const product of products) {
        if (totalWeight + product.weight > maxWeight) {
            continue;
        }

        totalWeight += product.weight;
        resultProducts.push(product);
    }

    return resultProducts;
}

console.log(calculate([
    { weight: 6, price: 30 },
    { weight: 3, price: 14 },
    { weight: 4, price: 12 },
    { weight: 2, price: 9 },
    { weight: 1, price: 5 },
], 5));
