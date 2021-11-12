// 2)написать интерфейс Animal который описывает:
//     -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг
// -и функцию которая возвращает информацию о животном
//
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию

interface IAnimal {
    movement: string;
    speak: string;

    information(): string;
}

class Cat implements IAnimal{
    movement: string;
    speak: string;


    constructor(movement: string, speak: string) {
        this.movement = movement;
        this.speak = speak;
    }

    information(): string {
        return `Cat can ${this.movement} and say ${this.speak}`;
    }

}

class Bird implements IAnimal{
    movement: string;
    speak: string;


    constructor(movement: string, speak: string) {
        this.movement = movement;
        this.speak = speak;
    }

    information(): string {
        return `Bird can ${this.movement} and say ${this.speak}`;
    }

}

class Fish implements IAnimal{
    movement: string;
    speak: string;

    constructor(movement: string, speak: string) {
        this.movement = movement;
        this.speak = speak;
    }

    information(): string {
        return `Fish can ${this.movement} and say ${this.speak}`;
    }
}

const cat = new Cat('run', 'meow');
console.log(cat.information());

const bird = new Bird('fly', 'chirp');
console.log(bird.information());

const fish = new Fish('swim', 'blub');
console.log(fish.information());
