# FEW 2.1 JS Libs 

https://levelup.gitconnected.com/code-splitting-for-libraries-bundling-for-npm-with-rollup-1-0-2522c7437697

- Bundling and modules 
  - best practices 
    - functions do one thing
    - a lib solves one problem or provides a single service
  - What the heck is a module? 
    - How many different formats are there? MNy head is spinning...
    - ES Module (ECMAScript Module)
    - Scope Hoisting
    - Tree Shaking
  - Use RollUp
    - What kind of bundles for which purposes
      - single bundle - script tag
        - ...example code...
      - CommonJS - require() node
        - ...example code...
    - install 
      - `npm install --save-dev rollup`
      - touch rollup.config.js
```
export default {
    input: 'src/main.js',
    output: {
        file: 'umd/module-name.js',
        format: 'umd',
        name: 'moduleName'
    }
};
```
  - This instructs RollUp to look at src/main.js and bundle it and it's dependencies into a UMD (Universal Module Definition) in the file umd/module-name.js. The name option tells rollup to which global variable to create when the script is used in the script tag: moduleName in this case. This will only be use when the module is not used in a Node environment. 
  - Test this yourself by running `npx rollup --config`
  - UMD bundles should be minified to save space. You can do this with TerserJS which is a fork of Uglify.js that supports modern ES2015 JS. 
    - npm install --save-dev rollup-plugin-terser
  - Add it to the rollup.config.js
```
import {terser} from 'rollup-plugin-terser';
export default [
    {
        input: 'src/main.js',
        plugins: [terser()],
        output: {
            file: 'umd/fancy-case.js',
            format: 'umd',
            name: 'fancyCase',
            esModule: false
        }
    },
    {
        input: 'src/main.js',
        output: {
            file: 'esm/index.js',
            format: 'esm'
        }
    }
];
```
  - Modify package.json to make sure that importers of the your library receive the correct UMD file: see "main", for the ESM file: see "module", Make sure the files are included with NPM: see "files". Add a "prepare" script which is run by npm when you run npm install or publish. 
```
{
  "name": "fancy-case",
  "version": "1.0.0",
  "main": "umd/fancy-case.js",
  "module": "esm/index.js",
  "scripts": {
    "prepare": "rollup --config"
  },
  "files": [
    "esm/*",
    "umd/*"
  ],
  "devDependencies": {
    "rollup": "^1.1.0",
    "rollup-plugin-terser": "^4.0.2"
  }
}
```
  - publish your lib
    - `npm publish`
    

## Best practices

- functions should do one thing
- a library should solve one problem

Code bundling 
Code splitting
Modules CommonJS, CommonJS2, ES Modules
- ES Module https://exploringjs.com/es6/ch_modules.html
Scope Hoisting https://medium.com/adobetech/optimizing-javascript-through-scope-hoisting-2259ef7f5994
Tree Shaking https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80

## Publishing NPM libs 

Write a lib with x utility functions. 

### Testing 

Write unit test for your lib from the previous assignment. 

### Continuous Integration

Setup Travis CI and Code Climate and score some sweet badges!

## Higher Order Components 

Higher order component used for a library served through NPM. 

Writing a function that takes a component and possibly other things returning component with super powers. 

### Testing React Components with Jest

Write tests for your component from the previous assignment. 

