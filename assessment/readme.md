# FEW 2.4 Final Assessment

This assessment will give you a chance to show your skills by creating a library of code including unit test from scratch. 

## Description 

This assessment will measure your knowledge in a range of the learning objectives covered in class.

### Why this assignment?

A big piece of writing and working with modern JS deals with writing code, testing your code, and using modern extensions of the JS language. 

## Project requirements

Solve the programming problems. Write your code with TypeScript. Write unit tests.  

### Challenges 

- **Challenge 1:** Golden Ratio

The [Golden Ratio](https://en.wikipedia.org/wiki/Golden_ratio) is a value used in art and design. It also appears in nature. We need a function to calculate the value. 

Your function should take any number as a parameter and return that number times 1.61803398875

- **Challenge 2:** Golden Ratio unit tests

Write a unit test for the goldedRatio function. 

- **Challenge 3:** degrees to radians

I'm surprised this function is not included with JS! your job is to write a function that takes a number in degrees and returns the value in radians. 

The formula is: deg * PI / 180

Your function should take a number in degrees and return a number in radians. 

- **Challenge 4:** degrees to radians unit test

Write a unit test for degreesToRadians.

- **Challenge 5:** radians to degrees 

We also need a function to to convert radians into degrees. 

The formula is: rad * 180 / PI

Your function should take a number in radians and return degrees. 

- **Challenge 6:** radians to degrees unit test

Write a unit test for radiansToDegrees

- **Challenge 7:** Convert value to dollars

The goal is to make a function that converts an input number to a string in dollar format. It should include the $, and round to 2 decimal places. 

For example: toDollars(23) returns "$23.00"

- **Challenge 8:** Convert value to dollars unit test

Write a unit test for toDollars.

- **Challenge 9:** Random function

The `Math.random()` function built into JS is not easy to work with. Your goal is to make function that takes a min value and a max value and returns a number in that range. 

For example: 

- random(1, 3) returns 1 or 2 or 3
- random(5, 9) returns 5 or 6 or 7 or 8 or 9

- **Challenge 10:** Random function unit test

Write Unit test for random function. Note! writing tests for functions that return unpredictable values is not easy and not a great use of unit testing. These types of situations don't work well with unit testing. Do your best.

- **Challenge 11:** Check your coverage

Run coverage and check that you have covered 100% of your code. 

- **Challenge 12:** Crazy API problem

I need a function that gets the weather from the openweathermap API and translates the **description** into pig-latin. 

You need to write a function that takes in the location in the form of a zip code, fetches the weather data, then passes the description to the funtranslate API, and final returns the pig-latin version of the description. Alternately you can write a function that does the translation.

Here are the api end points: 

-  `https://api.openweathermap.org/data/2.5/weather?zip={zip}&appid={apiKey}&units={units}`
- `https://api.funtranslations.com/translate/pig-latin?text={desc}`

### Submit your work on GradeScope

Submit your work via GradeScope. 

## Assessing the assessment

| Expectations | Does not meet | Meets | Exceeds |
|:-------------|:--------------|:------|:--------|
| Completion   | <100% of functions written | All functions written | Includes all stretch functions   |
| Quality      | code is sloppy and throws errors or shows linting errors |Well written few to no errors | Includes comments, and variable, parameter, and function names are self documenting  |
| Comprehension| Can't explain the code written | Can explain the code | Could write the code again from scratch |
| Tests        | <100% test coverage | 100% Test coverage | - |