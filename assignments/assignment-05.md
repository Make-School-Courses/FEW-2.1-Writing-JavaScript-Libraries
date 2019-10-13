# FEW 2.1 - Assignment 5 - Math Lib

---

- Sorten list of function
  - Choose more practical functions for required items
  - Add more stretch goals 
- Add assignment 6 - Publish Math Lib and add CI

---

## Description 

The goal of this assignment is to practice everything you learned so far in lessons 1 through 4 and practice those skills making another library! 

### Why this assignment?

Doing something once isn't enough. To claim mastery you need to put your skills to use everyday. You also need to revisit skills and put them to use in new places. 

Math and Numbers in JS can produce unexpected results sometimes. With this library you will dig into both and see how they work by writing a set of utilities.

## Project requirements

Create a new repo on GitHub to host your code.

The code you write should be a set of functions that solve the problems below. 

All of your code should be unit tested. 

Add continuous Integration. Your repo should be connected to Travis CI and code coverage. 

The README in your repo should inlcude Badges that show the status and meta information about your repo. 

- Version 
- Size
- Build Passing
- Coverage 

Your README should also include some professional documentation. This will include a description of the library, and formatted code samples. 

### Challenges 

- GoldenRatio - Add a new property to Number that is the [Golden Ratio](https://en.wikipedia.org/wiki/Golden_ratio)
- Number Methods - This method already exists, your job is to make a method that does the same thing. Rather than Math.round(x) your method will work like this: `x.round()`. 
  - `round()` - `x = 9.99` - `x.round()` -> 10  
  - `floor()` - `x = 9.99` - `x.floor()` -> 9
  - `ceil()` - `x = 1.03` - `x.ceil()` -> 2
- `pad(x, y)` - pads Number with x 0 before, and y 0 after. 
  - Example: `34.801.pad(4,4)` -> 0034.801
- `degToRad(n)` - 
- `radToDeg(n)` - 
- `toDollars(amount)` - 
  - `toDollars(3.9)` -> $3.90
  - `toDollars(0.99)` -> ¢0.99
  - Create a currency formatting function that simplifies the use of: [`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)
    - `intFormat(amount, countryCode, style)`
- `tax(rate)` - Returns the tax amount
- `withTax(rate)` - returns the amount with tax
- `interest()` - https://stackoverflow.com/questions/28325001/how-to-calculate-interest-javascript
- `mortage(principal, numberOfPayments, interestRate)` - https://stackoverflow.com/questions/17101442/how-to-calculate-mortgage-in-javascrip 
- `intToHex(int)` -> #332211 - https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
- Random functions 
  - `random(n)` - returns an integer from 0 to n - 1
  - `randomRange(min, max)` - returns an integer between min and max
  - `randomColor()` - Returns a random hex color

### Stretch 

- BigInt - Is class that tracks extra large integer values. I hear these are great for Incremental games. BigInt holds a large number as a string. It provides methods that perform math operation. 
  - `new BigInt(value = 0)` - Initialize with a value or 0. 
  - `BigInt.add(x)` - adds x to the value. Since value is a String you need add the first digit to the first digit held in value and carry the one if the total is over 10. Do the same with the 10s and 100s etc. This is just like adding numbers with pencil and paper.
    - Q: Is this legit? A: Yes! There are a couple libraries that do this. Computers have a limit to how large a number they can handle. In most cases this is enough. For some uses you need larger numbers. 
  - `BigInt.subtract(x)` - Subtracts x from the value of BigInt. 
    - Advanced
      - `BigInt.multiply(x)` - Multiplies the BigInt value by x. 
      - `BigInt.divide(x)` - Divides the BigInt value by x. 

### Deliverable

Include a link to your new repo in the course [progress tracker](https://docs.google.com/spreadsheets/d/1o-43DQx161lJKnmALW6NxnERggGn4lP5GOgCjDXcZBo/edit#gid=1456006823).  

### Due date

Class 6 

## Assessing the assignment

[Assignment Name Rubric](./assignment-05-rubric.md)




