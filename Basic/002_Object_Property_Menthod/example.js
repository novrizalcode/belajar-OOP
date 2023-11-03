class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age:
    }
    
    greet() {
        console.log(`hai nama saya ${this.name} saya berumur ${this.age} tahun`);
    }
}

const person1 = new Person("budi", 21);
console.log(person1.name);
person1.greet();