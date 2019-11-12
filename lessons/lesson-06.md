<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 2.1 - Lesson 6

<small style="display:block;text-align:center">Bundling Libraries for distribution</small>

This class session covers the concept of bundling. This is the process of combining files and processing them for use and distribution. 

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Why learn how to bundle files? 

All of the files you have been using that you imported from another source were bundled. Understanding the process gives you a better understanding of the JavaScript and web application ecosystem. 

Bundling your files allows them to be distributed so they can be used anywhere without extra work. 

Bundling files also processes your files for different environments. Your files need to be handled differently if they are used in the browser, or in NodeJS, or in a React project. 

<!-- > -->

## Learning Objectives 

- Describe reasons for bundling files
- Define UMD and ESM bundles 
- Use Rollup to bundle your library for distribution

<!-- > -->

### Bundling 

Bundling is the process of processing and combining files together into a single file. 

<!-- > -->

### Modules 

Modules are the concept of separating code into different scopes and making it available to your program. 

In the browser all code is global. A variable defined in one file is available in another file. 

This creates a few problems. 

```JavaScript
// my-code.js
function load() { /* does something important */}
// 
```

```JavaScript
<script src="my-code.js"></script>

<script>
  function load() {} // accidentally overwrites important code 
</script>
```

<!-- > -->

The module pattern uses scope to solve the problem above. Wrapping code in an anonymous function stores all of the variables and functions in the scope of that function. 

```JavaScript
// my-code.js
(function() {
  // Code safely scoped to function
  function load() { /* does something important */}
})() // Immediately executes the function above
```

```JavaScript
<script src="my-code.js"></script>
// ---------------------------------------
<script>
  function load() {} // global scoped 
</script>
```

<!-- > -->

This anonymous function is called an IIFE (Immediately Invoked Function Expression) pronounced 'Iffy'. Yeah, it's really a thing! The module pattern is based on the IIFE as it's base, and CommonJS and the other advanced patterns are based on this. 

You can read more about the [module pattern](https://coryrylan.com/blog/javascript-module-pattern-basics). 

While understanding how to write modules could be useful these days you'd be more likely to use a bundling utility to wrap your code in a module that is compatible with another system. 

<!-- > -->

## Bundling code with Rollup

There are several tools you can use to bundle your code and several patterns/standards that they follow. 

- [Common.js](http://www.commonjs.org)
- [Require.js](https://requirejs.org)
- [rollUp.js](https://rollupjs.org/guide/en/)

Rollup seems to be the most modern and up to date choice out of this list. 

<!-- > -->

Rollup describes itself as a "module bundler for JavaScript". Sounds like what we need! 

Rollup will bundle files to different standards like CommonJS, CommonJS2, RequireJS, and ES Modules. That said we need to understand why we would want or need to bundle our files to these different standards. 

<!-- > -->

### Common JS 

**CommonJS is the pattern used with Node JS projects.** To use the code in a library you've written for Node.js and Expres.js projects by extension you'll need to bundle your code as a CommonJS Module. This will allow your code to be used like this: 

```JavaScript
const yourCode = require('your-code')
...
yourCode.yourMethod()
```

<!-- > -->

### UMD (Universal Module Definition) 

**UMD is used for code used in a script tag in the browser.** A UMD module be imported via the script tag _and can be imported with `require()` in a Node JS environment._ 

```JavaScript
<script src="your-code.js"></script>
<script>
  ...
  yourCode.method()
  ...
</script>
```

<!-- > -->

### ES Modules 

**ES Modules are used with ES6 Import from syntax.** ES Modules are the modules used with React and modern JS. These use the `import` and `export` directives. 

```JavaScript
import { yourMethod } from 'your-code'
...
yourMethod()
```

These modules might be further processed with babel before they are used. 

<!-- > -->

## Recap: Modules

- Modules are used to make code compatible across different environments. 
- There are several different module formats
  - CommonJS
  - UMD 
  - ES

<!-- > -->

## Bundling files with rollup

Follow the instructions below to bundle your project with rollup.js.

Install rollup.js 

`npm install --save-dev rollup`

or 

`npm install --global rollup`

<!-- > -->

Create a config file for rollup. Make a new file named `rollup.config.js`. 

```JavaScript
export default {
  input: 'src/index.js',
  output: {
    file: 'umd/your-module.js',
    format: 'umd',
    name: 'yourModule'
  }
};
```

**You will change the `input`, `output.file`, and  `output.name` to match your files.**

This base config takes an input file from: `src/index.js` and outputs a UMD file `umd/your-module.js`. 

<!-- > -->

When loaded this file will create a global variable named `yourModule`. Remember UMD format is meant to be loaded in the browser. The code is also wrapped in a function following the CommonJS module pattern for use with Node JS. 

Move your source files into a folder named `src` create this folder if you haven't yet. 

<!-- > -->

Test your work so far. 

`npx rollup --config`

This should build the UMD module from your source files and save these a folder named `umd`. 

Rollup should have created `umd/your-module.js`. Take a look at this file. it contains the boiler plate code that manages your module/bundle. 

<!-- > -->

If you saw a warning: `(!) Generated an empty bundle` you need to export code from  `src/index.js`. For example 

```JS 
function getWeather() {
  ...
}

export { getWeather }
// or 
export default getWeather
```

<!-- > -->

**Test your module.** 

Make a test file: `example.html`. Import your script with the script tag: 

`<script src="./umd/just-in-case.js"></script>`

Notice the path to your library, it points to the `umd` folder at the file named in your config file.

Write some test code in your test file. Load the text file in the browser. 

<!-- > -->

Examine the source code that was written. It is pretty obscure. Note that it is using one of the module patterns evolved from the IIFE. 

The source code has not been minified. You can minify using Terser.js plugin for Rollup. 

Import `Terser.js` plugin for RollUp. 

`npm install --save-dev rollup-plugin-terser`

<!-- > -->

Modify `rollup.config.js`: 

```JavaScript
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.js',
    plugins: [terser()],
    output: {
        file: 'umd/your-module.js',
        format: 'umd',
        name: 'yourModule',
        esModule: false
    }
  },
  {
    input: 'src/index.js',
    output: {
      file: 'esm/index.js',
      format: 'esm'
    }
  }
];
```

<!-- > -->

Notice there are two outputs. The second 'esm' is for ES Modules. These don't need to be minified since they are consumed by other bundlers and won't benefit from minification. 

Modify `package.json`. We need to make sure that importers of the library get the right file. Set "main" for Node JS environments.

```JSON
  ...
  "main": "umd/jus-in-case.js",
  ...
```

<!-- > -->

Use "module" to designate ES Module.

```JSON
  ...
  "module": "esm/index.js",
  ...
```

<!-- > -->

Use "files" to designate which files should be distributed by npm. 

```JSON
  ...
  "files": [
    "esm/*",
    "emd/*"
  ]
  ...
```



<!-- > -->

Add "prepare" script. This script is run by npm each time you install or publish. 

```jSON
  ...
  "scripts: {
    ...
    "prepare": "rollup --config",
    ...
  }
  ...
```

<!-- > -->

### Testing your work

Pair up with someone you haven't paired with before. The goal will be to test the build system. You'll do this by following the instructions below. 

Start here: 

`npm pack`

<!-- > -->

This command is like `npm publish` it prepares your files but doesn't send them to the server. Use `pack` to test your work locally. When you're satisfied use `publish` to upload to npm. 

Run your tests

`npm test`

<!-- > -->

If everything is good commit and push to GitHub. 

Check your Status on Travis. 

Check your Coverage on Coveralls.

<!-- > -->

Take a look at your package on npm. Check the version number. 

You can test the Node JS version of the package using the "RunKit" link.

(I had a problem with this showing an outdated version.)

Create a test project for your package. 

<!-- > -->

Create a new folder and initialize a new npm project. 

`npm init -y`

Import your package. 

`npm i your-module`

Make an HTML file to test in browser 'example.html'.

Add the script tag. 

```HTML
<script src="./node_modules/your-module/umd/your-module.js"></script>
<script>
 console.log(yourModule)
 console.log(yourModule.method())
</script>
```

<!-- > -->

Note the path is pointing to the file in node_modules. You'll need to customize the second script to work with your code. 

Test your work in Node JS. Make a new file `server.js`. 

```JavaScript
const yourModule = require('your-module')

console.log(yourModule)
console.log(yourModule.method())
```

<!-- > -->

Again, modify the code here to test your library code. 

Test your code in a React project. 

Create a new React app. 

`npx create-react-app your-module-react-test`

<!-- > -->

Import your module. 

`npm i your-module`

Write some test code in `App.js`

```JavaScript
import { yourMethod } from 'your-module'

console.log(yourMethod())
```

<!-- > -->

Wow, that's some pretty thorough testing! If you did everything here you've done everything that all of the professional developers are doing when they publish to npm. 

<!-- > -->

### Code Coverage

Code coverage is a term that talks about what percentage of your code is covered by testing. You should strive for 100%. This is not always possible due to the nature of some code. As part of continuous integration, code coverage is a metric that gives another way to look at the quality and reliability of our code. 

<!-- > -->

**Run Coverage**

`npx jest --coverage`

You should see something like this: 

```
...
  console.log lib/index.js:14
    index.js

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |    73.33 |    36.36 |    61.54 |     69.7 |                   |
 index.js |    73.33 |    36.36 |    61.54 |     69.7 |... 26,34,51,56,61 |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.583s
Ran all test suites.
...
```

<!-- > -->

Let's read the coverage summary closely. 

- File - Which files were tested? 
- % Stmts - What percentage of statements in the program have been executed? 
- % Branch - Has each branch in a control structure been executed? 
- % Func - What percentage of functions have been executed? 
- % Lines - What percentage of executable lines of code have been executed? 
- Uncovered Line #s - Which lines have not been covered by testing?
  - The line numbers refer to code in the lib folder! This is the compiled code not the source code in the 'src' folder. In the example test.js imports from './lib'.

<!-- > -->

Take a look at your code and figure out: 

- What hasn't been tested
- Which branches haven't been executed
- Functions that have been tested

https://medium.com/@krishankantsinghal/how-to-read-test-coverage-report-generated-using-jest-c2d1cb70da8b

<!-- > -->

### Pair programming 

Take some time to pair program and solve issues with your code. You'll split the time half focussed on one project and half focussed on the other. 

The goal of this session is to 

Pair up with someone you haven't paired with before. 

<!-- > -->

## Homework 

Your goal is to bundle your lib and publish an updated version to npm. 

Your code should work with: 

- Common JS - Node JS 
- UMD - In the browser
- ES Module - React with import

[Assignment 6 - Publish to npm](../assignments/assignment-06.md)

<!-- > -->

## Additional Resources

1. https://levelup.gitconnected.com/code-splitting-for-libraries-bundling-for-npm-with-rollup-1-0-2522c7437697

<!-- > -->

## Minute-by-Minute [OPTIONAL]

| **Elapsed** | **Time**  | **Activity**              |
| ----------- | --------- | ------------------------- |
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:15      | Overview                  |
| 0:20        | 0:30      | Bundle files with RollUp  |
| 0:50        | 0:10      | BREAK                     |
| 1:00        | 0:45      | Code Coverage pair and test |
| 1:45        | 0:05      | Wrap up review objectives |
| TOTAL       | 1:50      | -                         |

