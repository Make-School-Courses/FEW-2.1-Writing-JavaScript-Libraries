# FEW 2.1 - Lesson 3 - Unit Testing

Quality code is test passing code. Unit testing is a system that is used to test units of code. Code that passes the test is deemed quality and fit for use. Unit testing is a part of the Agile Methodology. 

## Why use unit tests? 

Improves code quality by exposing edge cases and finding bugs. 

Spots bugs earlier. Using tests will bring bugs to light before you publish your app. 

Reduces defects when integrating new features. 

Professionals use unit tests. If you are planning to get a with a company that employs more than a single developer you will probably be writing unit tests at some point you should learn how to do it now. 

## Learning Objectives

1. Write Unit tests
1. Identify what to test
1. Install, setup and run unit tests

## Unit Testing

Q: What is a unit test?

A: A unit test is a test of a software system usually a function. A unit test most often testing that the expected output of a function is correct for a given input. 

Q: How do you do a unit test? 

Unit tests are run by software and can be automated. In this class, we will use Jest. 

Q: What is Jest?

A: [Jest](https://jestjs.io) is a JavaScript testing framework. I was written by Facebook. It works with: 

- TypeScript
- Node 
- React
- Vue 
- Angular 
- and more

Q: Why use Jest? 

A: Jest works well with React. Anyone that has built React apps may want to write unit tests for these. 

Q: What can you Test? 

A: Usually you are testing functions by looking at the output for a given input.

Q: How do you write a test? 

A: Before writing a test you'll want to think about what you are testing and what you should test for.

For example, you wrote a function that uppercased the first letter of a string. You might expect the input to be: 

widget -> Widget

Can you think of any edge cases? 

What about the capitalizeAll() function what would be a good test? What are the edge cases? 

## Testing example 

Create a new project

Add the sample code provided 

Write tests

These tests 












## Writing tests with Jest

Jest a framework and will be a dev dependency. A dev dependency is one that used for development but not used in the library itself. 

Add Jest: 

`npm install --save-dev jest`

`--save-dev` creates an entry under `"devDependencies"` in your package.json. Look for this right now. These dependencies are only used for development. 

Now that jest is installed, we need a test commend. Add this to package.json. Add/edit package.json to look like this: 

```
"scripts": {
        "test": "jest"
},
```

You'll just test by running:

`npm run test` 

Try it now. You should see an error: 

```
...
No tests found, exiting with code 1
...
```

You haven't written any tests yet so this makes sense. 

Add a new directory named "tests". 

`mkdir tests`

Now add a new file `tests/test.js` that will run your tests. 

`touch tests/test.js`

When you run Jest it will look for any files with `test.js` in the name and run any test code found there. It logs the results of all tests to the console. 

A test is run by calling the `test(desc, callback)` function. You supply two parameters a description string and a callback. 

Open `test.js` in your editor and write a test. Add the following  code to `test.js`:

```
test('Sanity check', () => {
  
})
```

Run your test. 

`npm run test`

You should see some output in the console. 

```
...
 PASS  tests/test.js
  ✓ Sanity check (1ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
...
```

Looks like one test suite passed out of a total of 1 test. 

What did we test? Nothing. The callback function will register an error if any code executed inside it throws an error, otherwise, the test is passing. 

Add the following inside the callback.

```
test('Sanity check', () => {
  expect(2+2).toBe(5)
})
```

Run your test again. The test should fail this time. 

```
...
Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
...
```

`expect().toBe()` is an assertion which like asking a question. Here you are saying you expect 2+2 to be 5. It isn't so the assertion fails. 

Fix the test by changing 5 to 4 and run it again. This time the test passes.

https://jestjs.io/docs/en/getting-started

## Testing the string functions

To use your library in your tests you'll need to import it. Tests are run in the Node environment use `require()` to import them as a module.

`const lib = require('../index.js')`

Modify the line above to suite your situation. The name of the var can be anything. The path and name to point to your string lib relative to `test.js`.

Note! If your functions are global or they are added to the prototype of a global object you can just use something: 

`require('../index.js')`

## Write some tests



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
| 0:20        | 0:30      | Writing Tests with Jest   |
| 0:50        | 0:10      | BREAK                     |
| 1:00        | 0:45      | Pair and write tests      |
| 1:45        | 0:05      | Wrap up review objectives |
| TOTAL       | 1:50      | -                         |
