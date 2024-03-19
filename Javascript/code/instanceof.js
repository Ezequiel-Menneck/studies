function a(b) {
    this.b = b
}

const j = new a("oi")
const k = 20;

console.log(j instanceof a)
// true

console.log(k instanceof a)
// false

const l = "oi"
console.log(l instanceof String)
// false, l é uma string primitva não uma "String"

const s = new String("oi2")
console.log(s instanceof String)
// true, s é uma String

const num = 32;
console.log(num instanceof Number)
// false, num é um numero primitivo não um "Number"

const num2 = new Number(32)
console.log(num2 instanceof Number)
// true, num2 é um Number

const myFunc = a => {
    return new String(a);
}
const func2 = myFunc("oi")
console.log(func2 instanceof String)
// true