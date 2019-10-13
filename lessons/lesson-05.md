<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 2.1 - Lesson 5 

<small style="display:block;text-align:center">Numbers and Math Lib</small>

The goal of this lesson is to look at JS and see how it handles Math and Numbers and create a library that works with numbers.

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Why you should know this

Math and Numbers in JS can be a pain point which many people will complain about. Understanding how math and numbers work in JS will give you deeper insights into the language, it will help you at interviews and in your own work. 

Writing a library is always a good idea. Doing this again in another assignment will solidify your knowledge by giving you the chance to practice your skills and put professional best practices into use. 

<!-- > -->

## Learning Objectives

1. Use Math methods
1. Identify the limits of math and numbers on the computer
1. Implement Objects that allow for chained method calls

<!-- > -->

## Numbers in JS (really its been doing the right thing all along...)

**Q:** Why 0.1 + 0.2 != 0.3 ?

0.1 + 0.2 ->  0.30000000000000004

https://stackoverflow.com/questions/588004/is-floating-point-math-broken/588014#588014

**A:** Numbers are represented as series of 1s and 0s behind the scenes in a 64bit package.

<!-- > -->

> For 0.1 in the standard binary64 format, the representation can be written exactly as
> 0.1000000000000000055511151231257827021181583404541015625 in decimal, or
> 0x1.999999999999ap-4 in C99 hexfloat notation.

> You've just stumbled on a number ( 3/10 ) that happens to be easy to represent with the decimal system, but doesn't fit the binary system. It goes both ways (to some small degree) as well: 1/16 is an ugly number in decimal (0.0625), but in binary it looks as neat as a 10,000th does in decimal (0.0001)** - if we were in the habit of using a base-2 number system in our daily lives, you'd even look at that number and instinctively understand you could arrive there by halving something, halving it again, and again and again.

https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/

<!-- > -->

## Working with Math

JS Provides two ways of working with numbers. 

- `Number` - The Number object is a number it represents a numeric value. It has a few properties and a few methods

`new Number(37)` This is a thing, and it's different from `37`

Take a look at the properties and methods. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

<!-- > -->

### When something is Not a Number

What is NaN? Where and when does it appear? 

`Array(16).join('wtf' - 1) + ' Batman!'`

Methods that return a number for some numerical input will return `NaN` the input is non-numerical. It is returned when a method on the Math Object fails or when method trying to parse a number fails. 

<!-- > -->

```JavaScript
NaN === NaN;        // false (NaN is the only value NOT equsl to itself)
Number.NaN === NaN; // false 
isNaN(NaN);         // true (Use isNaN to check for NaN)
isNaN(Number.NaN);  // true
```

<!-- > -->

## Number Types 

There is only one type of number. There isn't much more to this. Except: 

- JS only has number (there are no Int, floats, Doubles, etc.)
- JS Numbers are always floats 

<!-- > -->

### new Number() vs Number()

The **Number** JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the **Number() constructor**. A primitive type object **number** is created using the **Number() function**.

```JavaScript
const n = new Number(123) // Creates a new Number Object
const y = new Number(123)

const x = 123 // Creates a new Number primitive

// These are not equivalent!
x === n // false (the primitive is equal to the object reference)
x !== y // true (not the same reference)

n.valueOf() === x === y.valueOf() // true (apples to apples to apples)
```

<!-- > -->

Use `Number()` to covert a value to a number. Remember the class constructor is a function!

```JavaScript
const a = Number('123') // Covert this string to a number
const b = 123

a === b

const c = Number('z')   // NaN (Not a Number)
const d = Number('234') // 234
```

<!-- > -->

Using `new Number(value)` wraps value in an object that gets converted to a number primitive when needed. 

```JavaScript
const a = new Number(3)
const b = new Number(3)

a !== b // true

a * b // 9
a + b // 6
// etc
```

<!-- > -->

There are very few cases where you would use `new Number()`. `Number()` on the other hand gets frequent use. In other words, a value wrapped in the Number Object is not very useful. Converting a value to a number is a common operation. 

This is true for all of the primitives:

- `new Boolean('true')` | `Boolean('false')`
- `new String('Hello')` | `String('Hello')`
- `new Number('123')` | `Number('456')`

<!-- > -->

The only advantage to having a primitive wrapped in an object would be if you needed to attach other properties to that value for some reason. But you'd probably be better off making an Object instead. 

```JavaScript 
const t = new Number(99)
t.status = 'Not quite a buck yet'
console.log(t.status) 
```

<!-- > -->

### Numbers and Exponents

```JS
1 === 1
1e+1 === 10 -> 1 * 10
23e+3 === 23000 -> 23 * 1000
44e-2 === 0.44 -> 44 * 0.01
```

Scientific notation and numbers: http://www.java2s.com/Tutorials/Javascript/Javascript_Tutorial/Data_Type/How_to_write_Scientific_notation_literal_in_Javascript.htm

<!-- > -->

### Number Properties

The Number object also holds many useful properties. 

- `Number.EPSILON` - The difference between 1 and the smallest floating point number greater than 1. Basically the smallest number you can work with.

<!-- > -->

- `Number.MAX_SAFE_INTEGER` - The largest safe integer you can work with. 
- `Number.MAX_VALUE` - The maximum mueric value representable in JS. 
- `Number.MIN_SAFE_INTEGER` - The smallest safe integer you can work with. 
- `Number.MIN_VALUE` - The smallest positive numeric value representable in JS.  

<!-- > -->

- `Number.NEGATIVE_INFINITY` - Represents negative infinity
- `Number.POSITIVE_INFINITY` - Positive infinity
- `Number.NaN` - Not a Number. 

<!-- > -->

### Number Methods 

- `Number.isFinite()` - Tests for inifinity
- `Number.isInteger()` - Determines whether a number is an integer
- `Number.isNaN()` - Checks if something a number
- `Number.isSafeInteger()` 

<!-- > -->

- `Number.parseFloat()` - Converts a value to a float
- `Number.parseInt()` - Convert a non-numeric value into an int (in a specified base)
- `Number.prototype.toExponential()`
- `Number.prototype.toFixed()` - Returns a string with fixed number of decimal places
- `Number.prototype.toLocaleString()` - Returns a language sensitive string from the number

<!-- > -->

- `Number.prototype.toPrecision()` - Returns a String
- `Number.prototype.toString()`
- `Number.prototype.valueOf()`

<!-- > -->

### Math

The Math object holds all of the properties and functions that handle math operations. 

<!-- > -->

- **Properties**
  - `Math.E`
  - `Math.LN10`
  - `Math.LN2`
  - `Math.LOG10E`
  - `Math.LOG2E`
  - `Math.PI`
  - `Math.SQRT1_2`
  - `Math.SQRT2`

<!-- > -->

- **Methods**
  - `Math.abs()`
  - `Math.acos()`
  - `Math.acosh()`
  - `Math.asin()`
  - `Math.asinh()`
  - `Math.atan()`
  - `Math.atan2()`
  - `Math.atanh()`
  - `Math.cbrt()`
  - `Math.ceil()`
  - `Math.clz32()`
  - `Math.cos()`
  - `Math.cosh()`
  - `Math.exp()`
  - `Math.expm1()`
  - `Math.floor()`
  - `Math.fround()`
  - `Math.hypot()`
  - `Math.imul()`
  - `Math.log()`
  - `Math.log10()`
  - `Math.log1p()`
  - `Math.log2()`
  - `Math.max()`
  - `Math.min()`
  - `Math.pow()`
  - `Math.random()`
  - `Math.round()`
  - `Math.sign()`
  - `Math.sin()`
  - `Math.sinh()`
  - `Math.sqrt()`
  - `Math.tan()`
  - `Math.tanh()`
  - `Math.trunc()`

Wow that's a lot of Math!

<!-- > -->

## Exercise 

Your goal is to define a class that tracks money. Money can be hard to work with and if you make a mistake customers get really angry and or it might cost your company a lot of money. 

When working with money you want to be very careful. Rounding errors can be costly. 

<!-- > -->

**The Problem**

You need to define an object that holds a value in dollars and provides methods to work with currency.

- Write the currency class 
- Write tests for your methods 
- Add continuous integration
- Publish to npm

<!-- > -->

Currency class should have the following methods: 

- Initialize with a value
- Returns formatted value
- implements the following methods
  - `add(n)`
  - `subtract(n)`
  - `multiply(n)`
  - `divide(n)`
  - `split(n)` - Returns an array of values use this to split a bill. 
    - `new Currency(7).split(3) -> [2.33, 2.33, 2.34]`

<!-- > -->

Use `Intl.NumberFormat` to format your currency in a local language format.  

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat

<!-- > -->

## Chaining methods

An object can return itself. Doing this allows you to call other methods by following the last method call with a dot and the new method. 

`me.watch().whip().watch().nayNay()`

<!-- > -->

Each of the methods above need to return `this`. Here is an example: 

```JavaScript
class Thing {
  constructor(value = 0) {
    this.value = value
  }

  multiply(n) {
    this.value *= n
    return this
  }

  add(n) {
    this.value += n
    return this
  }

  divide(n) {
    this.value /= n
    return this
  }

  subtract(n) {
    this.value -= n
    return this
  }
}

const thing = new Thing(10)
thing.add(1)
  .multiply(2)
  .subtract(3)
  .divide(4)

console.log((((10 + 1) * 2) - 3) / 4, thing.value) // 4.75 = 4.75
```

<!-- > -->

### Homework

[Assignment 5 - Math Lib](../assignments/assignment-05.md)

<!-- > -->

## Wrap Up

- Review

<!-- > -->

## Additional Resources

1. https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
1. https://itnext.io/how-to-build-a-money-data-type-in-javascript-7b622beabe00
1. https://exercism.io/tracks/javascript/exercises

<!-- > -->

## Minute-by-Minute [OPTIONAL]

| **Elapsed** | **Time**  | **Activity**              |
| ----------- | --------- | ------------------------- |
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:15      | Overview                  |
| 0:20        | 0:30      | In Class Activity I       |
| 0:50        | 0:10      | BREAK                     |
| 1:00        | 0:45      | In Class Activity II      |
| 1:45        | 0:05      | Wrap up review objectives |
| TOTAL       | 1:50      | -                         |
