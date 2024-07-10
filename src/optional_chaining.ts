type Car = {
    model?: string,
    brand?: string
}

function getCar(brand: string) : Car | null {
    if (brand === 'hundai')
        return { brand: brand, model: 'sonata' };
    else
        return null;
}


console.log(getCar('hundai')?.model?.toUpperCase());

let num = null;
console.log(num?.[0]);

let func: any = null;

func?.();