<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 2.1 - Lesson 1 

<small style="display:block;text-align:center">Introduction to JS Libraries</small>

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Learning Objectives

1. Describe a software library
  - How they are used
  - Common use cases
1. Build a library of string functions/utilities
1. Use JavaScript String methods
1. Use prototype to inherit methods

<!-- > -->

## JavaScript Libraries

<!-- > -->

### Why make JavaScript libraries? 

<!-- > -->

- You'been using npm time to get a closer look
- Practice your programming skills
- Industry best practices 

<!-- > -->

## Q: What is npm?

<!-- > -->

npm is the world’s largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

<!-- > -->

**NPM has three parts:**

- the website
- the Command Line Interface (CLI)
- the registry

<!-- > -->

Use **npm** to host and distribute your software frameworks and libraries as “packages”. 

This class you will write a library. Next class you will publish your library to npm.

<!-- > -->

### Q: What are libraries?

<!-- > -->

- A library is a collection of code. 
- Written to be used in any application. 
- Best when they handle a single task. 

<!-- > -->

**When to write a library?**

<!-- > -->

- Code that has a _very specific use case_ - **probably not**
- Code that _has general uses_ - **probably!**
- “I wish this was built in…” - **write a library**

<!-- > -->

### Q: Why make a library?

<!-- > -->

By putting the code in a library you are making it **portable** and packaging it in a form that is **easily shared**.

<!-- > -->

You're also **taking DRY to the next level!** 

<!-- > -->

The code in a library can be **shared across multiple projects**, and  changes, and bug fixes can all be made in a single location.

<!-- > -->

### Q: When to make a library?

<!-- > -->

Any time you find you are writing the same code in more than one project. 

<!-- > -->

When you have code that you want to share with other people.

<!-- > -->

### Q: What will I make in this class?

<!-- > -->

You will write several libraries. The libraries you write will be smaller and focus on utility functions at first. 

<!-- > -->

Think of the code in each of the libraries written in this class as a practice interview question.

<!-- > -->

Much of the code we write here has already been written. Normally we wouldn't want to reinvent the wheel, but the goal of this class is learning how to write code and how to turn it into libraries. From that perspective, recreating code that already exists is a great learning experience.

<!-- > -->

### Q: What kinds of libraries are people making in 2019?

<!-- > -->

Here is a list of libraries that you may have used before. Pair up and take a look at the list at the link below and discuss what's there.

https://tutorialzine.com/2019/04/10-interesting-javascript-and-css-libraries-for-april-2019

**Discussion:** What did you find on that list?

<!-- > -->

### Q: What kinds of libraries have you used in past projects?

<div>Pair and <strong>Discuss</strong></div> 

<!-- > -->

### Q: What about utility libraries?

https://blog.bitsrc.io/11-javascript-utility-libraries-you-should-know-in-2018-3646fb31ade

**Discussion:** What do you see there? What are these libraries good for?

<!-- > -->

### Q: What kind of code do you see?

Take a look at a couple of libraries below and look at the code. With your pair discuss the general features of the code.

Just skim the repos and look at a couple of files. Usually, the code will be in `index.js` or in `src` folder.

<!-- > -->

Answer these questions as you explore the repos below.

- How much code is there?
- How is it organized?
- What language?

Repos

- [has-values](https://github.com/jonschlinkert/has-values)
- [fill-range](https://github.com/jonschlinkert/fill-range/blob/master/index.js)
- [Lodash](https://github.com/lodash/lodash) (the most popular package on npm)

<!-- > -->

<!-- .slide: data-background="#087CB8" -->
## [**10m**] BREAK

<!-- > -->

## Writing your first library

The goal of the first homework assignment is to write a simple library.

Why write a simple library? If we keep it simple you will be able to do a good job and get it finished before the next class.

Why write a library at all? Remember all of the advantages of storing code in a central location. While it might not seem to add too much to your workflow today, this is how professionals handle code.

<!-- > -->

### String functions

Strings are one of, if not the most common data type you might work with. JavaScript provides many string functions such as:

- [`String.toUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [`String.charAt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [`String.endsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
- [And many more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<!-- > -->

**Uppercase the first letter of a word**

1. Split the string into an array of letters
1. Uppercase the first element
1. Join the elements in the array into a string

- [`String.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [`String.toUpperCase()`]()
- [`Array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

<!-- > -->

**Prototype**

Use the `prototype` to share methods by all members of a class.

<!-- > -->

Why use the prototype? 

You could write a function that takes a string as a parameter and returns a string: 

```js
function capitalize(str) {
   return str.charAt(0).toUpperCase() + str.slice(1)
}

const results = capitalize("hello") // "Hello"
```

<!-- > -->

Add your new methods to the `prototype`.

This makes the methods available to all instances of that class.

```js
String.prototype.capitalize = function() {
   return this.charAt(0).toUpperCase() + this.slice(1)
}

const result = "hello".capitalize() // "Hello"
```

<!-- > -->

## Homework

<div><a href="../assignments/assignment-01.md">Assignment 1 - String Lib</div>

<!-- > -->

## Wrap Up

- What is a library? 
- Why write a library? 
- What is the `prototype`?
- Why add methods to the `prototype`?

<!-- > -->

## Additional Resources

1. 
