# FEW 2.1 - Lesson 8 - Writing in TypeScript

In this class, you will begin writing TypeScript code and learn how to adapt your existing JS code to TypeScript.

## Learning Objectives (5 min)

1. Define static & dynamic typing
2. Explain the pros & cons of static vs. dynamic typing
3. Implement functions, classes, & interfaces using TypeScript
4. Convert existing JS code to TypeScript

### Course Progress Tracker

https://docs.google.com/spreadsheets/d/1o-43DQx161lJKnmALW6NxnERggGn4lP5GOgCjDXcZBo/edit#gid=1955777807

## Static vs. Dynamic Typing

### Q: What is static typing?

In a statically typed language, variables' types are *static*, meaning that once a variable is set to a type, it cannot be changed. Statically typed languages generally check *at compile time* that a variable is being assigned the correct type of data. 

Examples of statically typed languages include Java, C, C++, and Swift.

Q: Can you use static typing in JS
A: Nope. TypeScript is another separate from JS and must be compiled into vanilla JS to be used. 

### Q: What is dynamic typing?

In a dynamically typed language, a variable's type can change over the course of the program. Consider the following code:

```JavaScript
let x = 10;
x = 'hello';
```

In a dynamically typed language, we do not know *until runtime* what type of data a particular variable holds.

Examples of dynamically typed languages include Python, JavaScript, PHP, and Ruby.

## Why use one or the other?

Discussion: Write down 3 reasons each for using either a statically typed or dynamically typed language.

### Static typing catches errors earlier in program development.

Q: What is happening on each line of code below? 

```JavaScript
const intFuncs = [];

intFuncs.push((x) => 2 * x);
intFuncs.push((x) => x * x);

intFuncs.push((x) => x.toString() + x.toString());
// intFuncs.push((x) => x.toFixed(2)); // ?

let total = 0;
intFuncs.forEach((func) => total += func(10));
```

We catch the bug *at runtime*.

```
const intFuncs: Array<(x: number) => number> = [];
```

### Static typing improves readability.

Consider this code:

```JavaScript
function mystery(x) {
  if (x.powerLevel <= 100) {
    x.leave();
  } else {
    x.display();
  }
}
```

Now, consider the following questions:
- What is x? 
- What other fields, data, and behavior does x have? How else can I interact with x?
- How would I find this information?

Now, let's take a look at this code with some types added.

```TypeScript
class Cat {
  powerLevel: number;
  personality: string;
  appearance: string;
  photo: Image;
  leave(): void {...}
  display(): void {...}
}

function mystery(x: Cat) {
  ...
}
```

### Static typing can improve your workflow.

Since our types are set in stone at compile time, many code editors will use that information to give you smart autocomplete suggestions based on that particular data type. If you use VSCode, you can use Intellisense to browse available methods from a class while writing code. You can also Cmd+Click on a method name to go directly to its definition.

### Advantages of dynamic typing

There isn't just one right answer that works in all scenarios; you will need to decide which style is right for your project. Here are some pros of dynamic typing to consider:

- It's faster to write, thus might be better for scripting
- It's more succinct
- It's more tolerant to change: a code refactor will have a smaller area of effect
- Doesn't require extra compilation step

## Features of TypeScript

### Variables

The most basic types are `string`, `number`, and `boolean`, and we can use them in the same way as in regular JavaScript; we just can't reassign a variable to a different type.

```TypeScript
let sum: number = 10;
const title: string = 'hello';
let done: boolean = false;

sum = undefined; // OK
sum = null; // OK
sum = '100'; // Not OK - will result in a compile error
```

There are two ways to declare an array, which are completely equivalent (if you've used Java before, these should look familiar):

```TypeScript
let list1: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];
```

What if we want an array with mixed values of different types? In that case, we can use the 'tuple' type:

```TypeScript
let person1: [string, number] = ['Jane', 20];
```

You can also easily make your own enum type. If you try to print the value of an enum, you'll see that it's actually a number, with the first value defaulting to 0.

```TypeScript
enum Fruit { Apple, Orange, Pear };

let f: Fruit = Fruit.Pear;

console.log(Fruit.Apple); // 0
console.log(Fruit.Orange); // 1
console.log(Fruit.Pear); // 2
```

Finally, if you don't know what type a piece of data will be, e.g. if you're receiving it from an API, you can always use the `any` type:

```TypeScript
let someValue: any = 10;
someValue = [1, 2, 3];
```

### Functions & Function Variables

We can add types to the parameters and return values of functions:

```TypeScript
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(4, 6);
```

We can also use default and optional parameters. If you want to skip one, just pass in `undefined`:

```TypeScript
function greet(greeting = 'Hello', person?: string) {
  if (person) {
    console.log(`${greeting}, ${person}!`);
  } else {
    console.log(`${greeting}!`);
  }
}

greet(); // prints 'Hello!'
greet('Hola'); // prints 'Hola!'
greet(undefined, 'Jane'); // prints 'Hello, Jane!'
```

### Classes & Interfaces

In addition to primitive types, we can denote the shape of a JavaScript object using type annotations:

```TypeScript
let person: { name: string, age: number } = { name: 'Jane', age: 22 };
```

We can also define the type ahead of time using an interface:

```TypeScript
  // lesson 9?
```

### Interfaces

## Activity: Get Your Project Up and Running with TypeScript

Let's try out what we learned by modifying an existing project with TypeScript. Go ahead and clone the `justincase` NPM library:

```
git clone https://github.com/soggybag/justincase
```

Now, we just need to make a few small changes to get it working again!

### Add Types

Rename the files to use a TypeScript extension (e.g. `index.js` to `index.ts`), and modify the functions to use types.

To get the string prototype functions to compile, you will need to add the following interface definition to `index.js`:

```TypeScript
declare global {
  interface String {
    capitalize(): string;
    capitalizeAll(): string;
    allCaps(): string;
    oddCaps(): string;
    evenCaps(): string;
    kabobCase(): string;
    snakeCase(): string;
    stripSpaces(): string;
    stripExtraSpaces(): string;
  }
}
```

### Modify package.json & rollup.config.js

Go to package.json and update the 'input' filenames to use their new TypeScript file extensions. Then add the following line after the main and module:

```JSON
"types": "esm/index.d.ts",
```

Next, modify the 'prepare' (or 'build') script to run the `tsc` compiler so that we get our nifty typings files:

```JSON
"scripts": {
    "prepare": "rollup --config && tsc",
}
```

We also need to install a TypeScript plugin for Rollup which will allow us to transpile the TypeScript code into good old JavaScript. You can install with npm in your terminal:

```
npm install --save-dev typescript rollup-plugin-typescript2
```

Then go to rollup.config.js and enter the following into your plugins for both output files:

```JavaScript
output: {
  ...
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ]
  ...
}
```

Try it out! The `rollup --config` command should work and give us the JS output files. Now we just need to configure tsc.

### Add tsconfig.json

Add a new file `tsconfig.json` with the following content:

```
{
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "./esm",
    "outDir": "./esm",
    "module": "es6",
    "target": "es5",
    "noImplicitAny": true,
    "moduleResolution": "node"
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

For a more thorough explanation of each of these lines, see [here](https://hackernoon.com/building-and-publishing-a-module-with-typescript-and-rollup-js-faa778c85396).

Now running `npm run prepare` should do everything you need to get your files ready. To verify, try going through the steps in Lesson 6 to test out your module.

## Wrap Up (5 min)

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
