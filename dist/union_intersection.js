"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return 2.2 * parseInt(weight);
}
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
//# sourceMappingURL=union_intersection.js.map