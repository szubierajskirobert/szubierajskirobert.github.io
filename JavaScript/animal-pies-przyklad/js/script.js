class Animal {
    constructor(name, waga) {
        this.name = name;
        this.waga = waga;
    }

    describeAnimal() {
        console.log(`Zwierze ma na imie ${this.name}`);   
    }
}

class Dog extends Animal {
    constructor(imie, wagaPsa, iloscNog) {
        super(imie, wagaPsa);

        this.iloscNog = iloscNog;
    }

    describeAnimal() {
        super.describeAnimal();
        console.log(`I ma ilość nóg: ${this.iloscNog}`); 
        console.log(`Nowa nadpisana metoda describeAnimal`);   
    }

    describeDog() {
        this.describeAnimal();
        console.log(`I ma ilość nóg: ${this.iloscNog}`);   
    }    
}

let pies = new Dog("Fafik", 40, 4)
pies.describeAnimal();
// pies.describeDog();
