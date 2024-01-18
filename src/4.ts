class Key{
    private signature: number = Math.random();

    getSignature() : number {
        return this.signature;
    }
};

class Person{
    constructor(public key: Key) { }
    
    getKey(): number{
        return key.getSignature();
    }
}

abstract class House{
    protected door: true | false = false;
    protected tenants: Person[] = [];

    constructor(protected key: Key){}

    comeIn(person: Person) {
        if (this.door === true) {
            this.tenants.push(person);
        }
        
    };
    abstract openDoor(trueKey: number): void;
};

class MyHouse extends House{

    constructor(key: Key) {
        super(key)
    }
    openDoor(key: number) {
        if (this.key.getSignature() === key) {
            this.door = true;
        }
        this.door = false;
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};