function getHypotenous(base: number, height: number) : number {
    let squaredBase = base**2;
    let squaredHeight = height**2;
    let sum = squaredBase + squaredHeight;
    let ans: number = Math.sqrt(sum);

    return ans;
}

console.log(getHypotenous(3, 4));

// object 

let object : {
    id: number,
    name: string,
    greet: () => void
} = {
    id: 123,
    name: 'Bilal',
    greet: function() {
        console.log(`hello ${this.name}`);
    }
};
object.greet()