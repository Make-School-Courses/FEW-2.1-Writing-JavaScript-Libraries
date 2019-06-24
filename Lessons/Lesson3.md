# FEW 2.1 - Unit Testing

Quality code is test passing code. Unit testing is a system that is used to test units of code. Code that passes the test is deemed quality and fit for use. Unit testing is a part of the Agile Methodology. 

## Why use unit tests? 

Improves code quality by exposing edge cases and finding bugs. 

Spots bugs ealier. Using tests will bring bugs to light before you publish your app. 

Reduces defects when integrating new features. 

Professionals use unit tests. If you are planning to get a with a company that employs more than a single developer you will probably be writing unit tests at some point you should learn how to do it now. 

## Learning Objectives (5 min)

1. Write Unit tests
1. Identify what to test
1. Install, setup and run unit tests

## Unit Testing

Q: What is a unit test?

A: A unit test a test of a software system usully a function. A unit test most often testing that the expected output of a function is correct for a given input. 

Q: How do you do a unit test? 

Unit tests are run by software and can be automated. In this class we will use Jest. 

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

A: Usually you are testing functions by looking the output for a given input.

Q: How do you write a test? 

A: Before writing a test you'll want to think about what you are testing and what you should test for.

For example you wrote a function that uppercased the first letter of a string. You might expect the input to be: 

widget -> Widget

Can you think of any edge cases? 

What about the capitalizeAll() function what would be a good test? What are the edge cases? 

## Writing tests with Jest

Jest a framework and will be a dev dependency. A dev dependency is one that used for development but not used in the library itself. 

Add Jest: 

`npm install --save-dev jest`

`--save-dev` creates an entry under `"devDependencies"` in your package.json. Look for this right now. These dependencies are only used fro development. 

Now that jest is installed, we need a test commend. Add this to package.json. Add/edit package.json to look like this: 

```
"scripts": {
		"test": "jest"
},
```

You'll just tests by running:

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

Looks like one test suite passed out of a total tests of 1. 

What did we test? Nothing. The callback function will register an error if any code excuted inside it throws an error, otherwise the test is passing. 

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

To use you










## Overview/TT I (20 min)

- Why learn this?
- Industry examples of usage
- Best practices
- Personal anecdote

## In Class Activity I (30 min)

- I do, We do, You do
- Reading & Discussion Questions in small groups
- Draw a picture/diagram
- Complete Challenges solo or in pair
- Q&A about tutorials
- Pair up and code review
- Pair program
- Formative assessment
- Form into groups
- etc (get creative :D)

## Overview/TT II (optional) (20 min)

## In Class Activity II (optional) (30 min)

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
