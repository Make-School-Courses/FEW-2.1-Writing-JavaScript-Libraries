# FEW 2.1 - Bundling Libraries for distribution

This scless session covers the concept of bundling. This the process of combining files and processing them for use and distribution. 

## Why learn how to bundle files? 

All of the files you have been using that you imported from another source were bundled. Understanding the process gives you a better understanding of the JavaScript and web application ecosystem. 

Bundling your files means other you can distribute them and the world can use anywhere without extra work. 

Bundling files also processes your files for different environments. Your files need to be handled differently if they are used in the browser, or in NodeJS, or in a React project. 

### Bundling 

Bundling is the process of processing and combining files together into a single file. 

### Modules 

Modules is the concept of separating code into different scopes and making it avilable to your program. 

In the browsers all code is global. A variable defined in one file is avialable in another. 

This creates a few problems. 

```
// my-code.js
function load() { /* does something important */}
//
<script src="my-code.js"></script>
<script>
  function load() {} // accidentally overwrites important code 
</script>
```

The module pattern uses scope to solve the problem above

```
// my-code.js
(function() {
  // Code safely scoped to function
  function load() { /* does something important */}
})()

//
<script src="my-code.js"></script>
<script>
  function load() {} // global scoped 
</script>
```

You can read more about the [module pattern](https://coryrylan.com/blog/javascript-module-pattern-basics). While understanding how to write modules could be useful these days you'd be more likely to use a bundling utility to wrap your code in a module that is compatible with another system. 

## Bundling code with Rollup

There are several tools you can use to bundle your code and several patterns/standards that they follow. 

- [Common.js](http://www.commonjs.org)
- [Require.js](https://requirejs.org)
- [rollUp.js](https://rollupjs.org/guide/en/)

Rollup seems to be the most modern and up to date choice out of this list. 

Reollup describes itself as a "module bundler for JavaScript". Sounds like what we need! Rollup will bundle to files to different standards like CommonJS, CommonJS2, RequireJS, and ES Modules. That said we need to understand why we would want or need to bundle our files to these different standards. 

### Common JS 

Is the pattern used with Node JS projects. To use the code in a library you've written with Node.js and Expres.js projects by extension you'll need to bundle your code as a CommonJS Module. This will allow your code to be used like this: 

```
const yourCode = rewquire('your-code')
...
yourCode.yourMethod()
```

### UMD (Universal Module Definition) 

To wrap up code for use in the script tag in the browser you'll need to make a UMD module. 

```
<script src="your-code.js"></script>
<script>
  ...
  yourCode.method()
  ...
</script>
```

### ES Modules 

ES Modules are the modules used with React and modern JS. These use the `import` and `export` directives. These modules are further processed and bundled before they are used. 

```
import { yourMethod } from 'your-code'
...
yourMethod()
```

## Use Rollup

Follow the instructions below to bundle your project with rollup.js.

Intall rollup.js 

`npm install --save-dev rollup`

Create a config file for rollup. Make a new file named `rollup.config.js`. 

```
export default {
    input: 'src/index.js',
    output: {
        file: 'umd/your-module.js',
        format: 'umd',
        name: 'yourModule'
    }
};
```

This base config outputs a UMD file named "your-module.js". When loaded this file will create a global variable named 'yourModule'. Remember UMD format is meant to be loaded in the borwser. 

Move your source files into a folder named 'src' create this folder if you haven't yet. 

Rollup will automatically build from the `src` directory. 

Test your work so far. 

`npx rollup --config`

This should build the UMD module from your source files and save these a folder named `umd`. 

Test your module. 

Make a test file: example.html. Import your script with the script tag: 

`<script src="./umd/just-in-case.js"></script>`

Notice the path to your library uses. It points to the umd folder at the file named in your config file.

Write some test code in your test file. Load the text file in the browser. 

Examine the source code that was written. It is pretty obscure. Note that it is using one of the module patterns evolved from the IIFE. 

The source code has not been minified. You can minify using Terser.sj plugin for Rollup. 

Import Terser.js plugin for RollUp. 

`npm install --save-dev rollup-plugin-terser`

Modify `rollup.config.js`: 

```
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

Notice there are two outputs. The second 'esm' is for ES Modules. These don't need to be minified since they are consumed by other bundlers and won't benfit. 

Modify `package.json`. We need to make sure that importers of the library get the right file. 

Set "main" for Node JS environments.

```
  ...
  "main": "umd/jus-in-case.js",
  ...
```

Use "module" to designate ES Module.

```
  ...
  "module": "esm/index.js",
  ...
```

Use "files" to designate which files should be distributed by npm. 

```
  ...
  "files": [
    "esm/*",
    "emd/*"
  ]
  ...
```

Add "prepare" script. This script is run by npm each time you install or publish. 

```
  ...
  "scripts: {
    ...
    "prepare": "rollup --config",
    ...
  }
  ...
```

Test your work so far. 

`npm pack`

This command is like `npm publish` it prepares your files but doesn't send them to the server. Use `pack` to test your work locally. When you're satisfied use `publish` to upload to npm. 

Run your tests

`npm test`

If everything is good commit and push to GitHub. 

Check your Status on Travis. 

Check your Coverage on Coveralls.

Take a look at your package on npm. Check the version number. 

You can test the Node JS version of the package using the "RunKit" link.

(I had a problem with this showing an outdated version.)

Create a test project for your package. 

Create a new folder and initialize a new npm project. 

`npm init -y`

Import your package. 

`npm i your-module`

Make an html file to test in browser 'example.html'.

Add the script tag. 

```HTML
<script src="./node_modules/your-module/umd/your-module.js"></script>
<script>
 console.log(yourModule)
 console.log(yourModule.method())
</script>
```

Note the path is pointing to the a file in node_modules. You'll need to customize the second script to work with your code. 

Test your work in Node JS. Make a new file 'server.js'. 

```JavaScript
const yourModule = require('your-module')

console.log(yourModule)
console.log(yourModule.method())
```

Again, modify the code here to test your library code. 

Test your code in a React project. 

Create a new React app. 

`npx create-react-app your-module-react-test`

Import your module. 

`npm i your-module`

Write some test code in `App.js`

```JavaScript
import { yourMethod } from 'your-module'

console.log(yourMethod())
```

Wow that's some pretty thorough testing! If you did everything here you've done everything that all of the professional developers are doing when they publish to npm. The same process was done to all of the libraries that you are importing. 


### Code Coverage

Code coverage is a term that talks about what percentage of your code is covered by testing. You should strive for 100%. This is not always possible due to the nature of some code. As part of continuous integration code coverage is a metric that gives another way to look at the quality and reliability of our code. 

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

Let's read the coverage summary closely. 

- File - Which files were tested? 
- % Stmts - What percentage of statements in the program have been executed? 
- % Branch - Has each branch in a control structure been executed? 
- % Func - What percentage of functions have been executed? 
- % Lines - What percentage of executable lines of code have been executed? 
- Uncovered Line #s - Which lines have not been covered by testing?
  - The line numbers refer to code in the lib folder! This is the compiled code not the source code in the serc folder. In the example test.js imports from './lib'.

Take a look at your code and figure out: 

- What hasn't been tested
- Which branches havn't been executed
- Functions that have been tested

https://medium.com/@krishankantsinghal/how-to-read-test-coverage-report-generated-using-jest-c2d1cb70da8b

## Homework 

Your goal is to bundle your lib and publish an updated version to npm. 

Your code should work with: 

- Common JS - Node JS 
- UMD - In the browser
- ES Module - React with import

## Additional Resources

1. https://levelup.gitconnected.com/code-splitting-for-libraries-bundling-for-npm-with-rollup-1-0-2522c7437697

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

