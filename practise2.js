// 2)написать интерфейс Animal который описывает:
//     -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг
// -и функцию которая возвращает информацию о животном
//
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию
var Cat = /** @class */ (function () {
    function Cat(movement, speak) {
        this.movement = movement;
        this.speak = speak;
    }
    Cat.prototype.information = function () {
        return "Cat can " + this.movement + " and say " + this.speak;
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(movement, speak) {
        this.movement = movement;
        this.speak = speak;
    }
    Bird.prototype.information = function () {
        return "Bird can " + this.movement + " and say " + this.speak;
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(movement, speak) {
        this.movement = movement;
        this.speak = speak;
    }
    Fish.prototype.information = function () {
        return "Fish can " + this.movement + " and say " + this.speak;
    };
    return Fish;
}());
var cat = new Cat('run', 'meow');
console.log(cat.information());
var bird = new Bird('fly', 'chirp');
console.log(bird.information());
var fish = new Fish('swim', 'blub');
console.log(fish.information());
