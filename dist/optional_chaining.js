"use strict";
function getCar(brand) {
    if (brand === 'hundai')
        return { brand: brand, model: 'sonata' };
    else
        return null;
}
console.log(getCar('hundai')?.model?.toUpperCase());
let num = null;
console.log(num?.[0]);
let num2 = [1, 2, 3];
console.log(num2?.[2]);
//# sourceMappingURL=optional_chaining.js.map