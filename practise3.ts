// 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

abstract class Shape {
    abstract perimeter(): number;
    abstract area(): number;
}

class Triangle extends Shape {
    a: number;
    b: number;
    c: number;


    constructor(a: number, b: number, c: number) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    perimeter(): number {
        return this.a + this.b + this.c;
    }

    area(): number {
        const p = this.perimeter() / 2;

        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}

class Rectangle extends Shape {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        super();
        this.a = a;
        this.b = b;
    }

    perimeter(): number {
        return (this.a + this.b) * 2;
    }

    area(): number {
        const p = this.perimeter() / 2;

        return this.a * this.b;
    }
}

const triangle = new Triangle(3,  4, 5);
const rectangle = new Rectangle(6,  7);

const shapes: Shape[] = [triangle, rectangle];
const shapes2: Array<Shape> = [triangle, rectangle];
const shapes3: [Shape, Shape] = [triangle, rectangle];

for (const shape of shapes) {
    const P = shape.perimeter();
    const S = shape.area();

    console.log(`Perimeter: ${P}`);
    console.log(`Area: ${S}`);
    console.log('--------------------------');
}

for (const shape of shapes2) {
    const P = shape.perimeter();
    const S = shape.area();

    console.log(`Perimeter: ${P}`);
    console.log(`Area: ${S}`);
    console.log('--------------------------');
}

for (const shape of shapes3) {
    const P = shape.perimeter();
    const S = shape.area();

    console.log(`Perimeter: ${P}`);
    console.log(`Area: ${S}`);
    console.log('--------------------------');
}
