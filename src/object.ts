type Employee = {
    id: number,
    name: string,
    title: string,
    intro: () => void
};

let emp1: Employee = {
    id: 123,
    name: 'Bilal',
    title: 'ASE',
    intro: function() {
        console.log(`Hello my name is ${this.name} and I'm a ${this.title}`);
    }
}

emp1.intro();