# FEW 2.1 - Math Lib

The goal of this lesson is to look at JS and see how it handles Math and Numbers and create a library that works with numbers. 

## Why you should know this

Math and Numbers in JS can be a pain point which many people will complain about. Understanding how math and numbers work in JS will give you deeper insights into the language, it will help you at interviews and in your own work. 

Writing a library is always a good idea. Doing this again in another assignment will solidify your knowledge by giving you the chance to practice your skills and put professional best practices into use. 

## Learning Objectives

1. Use Math methods
1. Identify the limits of math and numbers on the computer
1. Implement Objects that allow for chained method calls

## Numbers in JS (really its been doing the right thing all along...)

Q: Why 0.1 + 0.2 != 0.3 ?

0.1 + 0.2 ->  0.30000000000000004

https://stackoverflow.com/questions/588004/is-floating-point-math-broken/588014#588014

A: Numbers are represented as series of 1s and 0s behind the scenes in a 64bit package.

> For 0.1 in the standard binary64 format, the representation can be written exactly as
> 0.1000000000000000055511151231257827021181583404541015625 in decimal, or
> 0x1.999999999999ap-4 in C99 hexfloat notation.

Exercise with calculators and binary math

> You've just stumbled on a number ( 3/10 ) that happens to be easy to represent with the decimal system, but doesn't fit the binary system. It goes both ways (to some small degree) as well: 1/16 is an ugly number in decimal (0.0625), but in binary it looks as neat as a 10,000th does in decimal (0.0001)** - if we were in the habit of using a base-2 number system in our daily lives, you'd even look at that number and instinctively understand you could arrive there by halving something, halving it again, and again and again.

https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/

## Working with Math

JS Provides two ways of working with numbers. 

- Number - The Number object is a number it represents a numeric value. It has a few properties and a few methods

Take a look at the properties and methods. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

### When something is Not a Number

What is NaN? Where does it appear? 

`Batman example: Array(16).join('wtf' - 1) + ' Batman!'`

Methods that return a number for some numerical input will return `NaN` the input is non-numerical. It is returned when a method on the Math Object fails or when method trying to parse a number fails. 

```JavaScript
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true
```

## Number Types 

There is only one type of number. There isn't much more to this. Except: 

- JS only has number (there are no Int, floats, Doubles, etc.)
- JS Numbers are always floats 

### new Number() vs Number()

The **Number** JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the **Number() constructor**. A primitive type object **number** is created using the **Number() function**.

```JavaScript
// Create a new Number Object
var n = new Number(123) // Creates a new Number Object

var x = 123 // Creates a new Number primitive

// These are not equivalent!
x === n // false
```

Use `Number()` to covert a value to a number. 

```JavaScript
var a = Number('123')
var b = 123

a === b

var c = Number('z') // NaN (Not a Number)
var d = Number('234') // 234
```

Using `new Number(value)` wraps value in an object that gets converted to a number primitive when needed. 

There are very few cases where you would use `new Number()`. `Number()` on the other hand gets frequent use. In other words, a value wrapped in the Number Object is not very useful. Converting a value to a number is a common operation. 

### Numbers and Exponents

`1` === 1
`1e+1` === 10 -> 1 * 10
`23e+3` === 23000 -> 23 * 1000
`44e-2` === 0.44 -> 44 * 0.01

Scientific notation and numbers: http://www.java2s.com/Tutorials/Javascript/Javascript_Tutorial/Data_Type/How_to_write_Scientific_notation_literal_in_Javascript.htm

### Number Properties

The Number object also holds many useful properties. 

- `Number.EPSILON` - The difference between 1 and the smallest floating point number greater than 1. Basically the smallest number you can work with.  
- Number.MAX_SAFE_INTEGER - The largest safe integer you can work with. You can use larger numbers but math operations may not work as expected. 
- Number.MAX_VALUE - The maximum mueric value representable in JS. 
- Number.MIN_SAFE_INTEGER - The smallest safe integer you can work with. 
- Number.MIN_VALUE - The msallest positive numeric value representable in JS.  
- Number.NEGATIVE_INFINITY - Represents negative infinity
- Number.NaN - Not a Number. 
- Number.POSITIVE_INFINITY - Positive infinity

### Number Methods 

- `Number.isFinite()` - Tests for inifinity
- `Number.isInteger()` - Determines whether a number is an integer
- `Number.isNaN()` - Checks if something a number
- `Number.isSafeInteger()` 
- `Number.parseFloat()` - Converts a value to a float
- `Number.parseInt()` - Convert a non-numeric value into an int (in a specified base)
- `Number.prototype.toExponential()`
- `Number.prototype.toFixed()`
- `Number.prototype.toLocaleString()`
- `Number.prototype.toPrecision()`
- `Number.prototype.toSource()`
- `Number.prototype.toString()`
- `Number.prototype.valueOf()`

What's happening there in JS style computeriness (functions as constructor)

- Math - 

Properties

- `Math.E`
- `Math.LN10`
- `Math.LN2`
- `Math.LOG10E`
- `Math.LOG2E`
- `Math.PI`
- `Math.SQRT1_2`
- `Math.SQRT2`

https://exercism.io/tracks/javascript/exercises

## Exercise 

Your goal is to define a class that tracks money. Money can be hard to work with and if you make a mistake customers get really angry and or it might cost your company a lot of money. When working with money you want to be very careful. Rounding errors can be costly. 

You need to define an object that holds a value in dollars and provides methods to work with currency.

- Write the currency class 
- Write tests for your methods 
- Add continuous integration
- Publish to npm

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

Use `Intl.NumberFormat` to format your currency. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat

## Chaining methods

An object can return itself. Doing this allows you to call other methods by following the last method call with a dot and the new method. 

`me.watch().whip().watch().nayNay()`

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
thing.add(1).multiply(2).subtract(3).divide(4)
console.log((((10 + 1) * 2) - 3) / 4, thing.value) // 4.75 4.75
```

## Wrap Up

- 

## Additional Resources

1. https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
1. https://itnext.io/how-to-build-a-money-data-type-in-javascript-7b622beabe00

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
