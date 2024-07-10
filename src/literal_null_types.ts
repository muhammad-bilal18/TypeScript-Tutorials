// literal types to limit the value

type Size = 'small' | 'medium' | 'large';

let size: Size = 'medium';

// nullable types

function sayHello(name: string | null | undefined) : void {
    if(name)
        console.log(`Hello ${name}`);
    else
        console.log('undefined or null');
}

sayHello('Bilal');