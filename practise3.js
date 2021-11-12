// 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.perimeter = function () {
        return 0;
    };
    Shape.prototype.area = function () {
        return 0;
    };
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    Triangle.prototype.area = function () {
        var p = this.perimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    };
    return Triangle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return (this.a + this.b) * 2;
    };
    Rectangle.prototype.area = function () {
        var p = this.perimeter() / 2;
        return this.a * this.b;
    };
    return Rectangle;
}(Shape));
var triangle = new Triangle(3, 4, 5);
var rectangle = new Rectangle(6, 7);
var shapes = [triangle, rectangle];
var shapes2 = [triangle, rectangle];
var shapes3 = [triangle, rectangle];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    var P = shape.perimeter();
    var S = shape.area();
    console.log("Perimeter: " + P);
    console.log("Area: " + S);
    console.log('--------------------------');
}
for (var _a = 0, shapes2_1 = shapes2; _a < shapes2_1.length; _a++) {
    var shape = shapes2_1[_a];
    var P = shape.perimeter();
    var S = shape.area();
    console.log("Perimeter: " + P);
    console.log("Area: " + S);
    console.log('--------------------------');
}
for (var _b = 0, shapes3_1 = shapes3; _b < shapes3_1.length; _b++) {
    var shape = shapes3_1[_b];
    var P = shape.perimeter();
    var S = shape.area();
    console.log("Perimeter: " + P);
    console.log("Area: " + S);
    console.log('--------------------------');
}
