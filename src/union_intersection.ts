// this code is from the video

function kgToLbs(weight: string | number): number {
    if(typeof weight === 'number')
        return weight * 2.2;
    else
        return 2.2 * parseInt(weight);
}

console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));

// intersection isn't possible
let weight: number & string; // we can't assign both string and number at same time

// we can implement intersection with our own created types
type Dragable = {
   drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Dragable & Resizable;

let textBox : UIWidget = {
    drag: () => {},
    resize: () => {}
}