# FEW 2.1 - Math Lib

The goal of this lesson is to look at JS and see how it handles Math and Numbers and create a library that works with numbers. 

## Why you should know this

Math and Numbers in JS can be a pain point which many people will complain about. Understanding how math and numbers work in JS will give you deeper insights into the language, it will help you at interviews and in your own work. 

Writing a library is always a good idea. Doing this again in another assignment will solidify your knowledge by giving you the chance to practice your skills and put professional best practices into use. 

## Learning Objectives

1. Use Math methods
1. Identify the limits of math and numbers on the computer
1. 

## Numbers in JS (really its been doing the right thing all along...)

Q: Why 0.1 + 0.2 != 0.3 ?

0.1 + 0.2 ->  0.30000000000000004

https://stackoverflow.com/questions/588004/is-floating-point-math-broken/588014#588014

A: Numbers are represented as series of 1s and 0s behind the scenes in a 64bit package.

Can this be done with a calculator as a classroom exercise?

> For 0.1 in the standard binary64 format, the representation can be written exactly as

> 0.1000000000000000055511151231257827021181583404541015625 in decimal, or
> 0x1.999999999999ap-4 in C99 hexfloat notation.

Exercise with calculators and binary math

> You've just stumbled on a number ( 3/10 ) that happens to be easy to represent with the decimal system, but doesn't fit the binary system. It goes both ways (to some small degree) as well: 1/16 is an ugly number in decimal (0.0625), but in binary it looks as neat as a 10,000th does in decimal (0.0001)** - if we were in the habit of using a base-2 number system in our daily lives, you'd even look at that number and instinctively understand you could arrive there by halving something, halving it again, and again and again.

## Working with Math

JS Provides two things for working with numbers. 

- Number - The Number object is a number it represents a numeric value. It has a few properties and a few methods

Take a look at the properties and methods. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

What is NaN? Where does it appear? (Batman example: Array(16).join(“wtf” - 1) + “ Batman!”)

Scientific notation and numbers: http://www.java2s.com/Tutorials/Javascript/Javascript_Tutorial/Data_Type/How_to_write_Scientific_notation_literal_in_Javascript.htm

### new Number() vs Number()

The **Number** JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the **Number() constructor**. A primitive type object **number** is created using the **Number() function**.

```
// Create a new Number Object
var n = new Number(123) // Creates a new Number Object

var x = 123 // Creates a new Number primitive

// These are not equivalent!
x === n // false
```

Use `Number()` to covert a value to a number. 

```
var a = Number('123')
var b = 123

a === b

var c = Number('z') // NaN (Not a Number)
var d = Number('234') // 234
```

Using `new Number(value)` wraps value in an object that gets converted to a number primitive when needed. 

There are very few cases where you would use `new Number()`. `Number()` on the other hand gets frequent use. In other words, a value wrapped in the Number Object is not very useful. Converting a value to a number is a common operation. 

### Numbers 

`1` === 1
`1e+1` === 10 -> 1 * 10
`23e+3` === 23000 -> 23 * 1000
`44e-2` === 0.44 -> 44 * 0.01

There isn't much more to this. Except: 

- JS only has number (there are no Int, floats, Doubles, etc.)
- JS Numbers are always floats 

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

- Number.isFinite() - Tests for inifinity
- Number.isInteger() - Determines whether a number is an integer
- Number.isNaN() - 
- Number.isSafeInteger()
- Number.parseFloat()
- Number.parseInt()
- Number.prototype.toExponential()
- Number.prototype.toFixed()
- Number.prototype.toLocaleString()
- Number.prototype.toPrecision()
- Number.prototype.toSource()
- Number.prototype.toString()
- Number.prototype.valueOf()

What's happening there in JS style computeriness (functions as constructor)

---

- Math - 

Properties

- Math.E
- Math.LN10
- Math.LN2
- Math.LOG10E
- Math.LOG2E
- Math.PI
- Math.SQRT1_2
- Math.SQRT2

----
Arithmetic operators 

- +, -, *, /, **, %
- ++, --
--- 

https://exercism.io/tracks/javascript/exercises

## Initial Exercise

- Funny comic
- Prime the Pump (e.g. think and jot, think pair share, etc)
- Productivity Tip/Tool
- Review of current event (e.g. tech news relevant to your track/topic)
- Quiz on homework or topic(s) of past class
- Concept Test

## Wrap Up

- Continue working on your current tutorial
- Complete reading
- Complete challenges

## Additional Resources

1. Links to additional readings and videos

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
