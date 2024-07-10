"use strict";
function getHypotenous(base, height) {
    let squaredBase = base ** 2;
    let squaredHeight = height ** 2;
    let sum = squaredBase + squaredHeight;
    let ans = Math.sqrt(sum);
    return ans;
}
console.log(getHypotenous(3, 4));
let object = {
    id: 123,
    name: 'Bilal',
    greet: function () {
        console.log(`hello ${this.name}`);
    }
};
object.greet();
//# sourceMappingURL=function.js.map