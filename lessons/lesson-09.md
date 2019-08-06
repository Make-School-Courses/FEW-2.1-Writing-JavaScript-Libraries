# FEW 2.1 - FEW 2.1 - TypeScript Part 2 [[Slides](https://docs.google.com/presentation/d/1UZRdPDroEK1OftxLCZ-lf9Jxkj3UYs-y1vUmjHp1bPI/edit#slide=id.g4cf79cf4e3_0_202)]

Let's continue our work from last week on using TypeScript in an existing (or new) project!

## Learning Objectives 

1. Recall basic types from last class
1. Modify an existing code base to use TypeScript
1. Rewrite tests in TypeScript using Jest
1. Install and use linting software using eslint-typescript

### Course Progress Tracker

https://docs.google.com/spreadsheets/d/1o-43DQx161lJKnmALW6NxnERggGn4lP5GOgCjDXcZBo/edit#gid=1955777807

## Adding Types to FizzBuzz

If you haven't already, clone the FizzBuzz repository here: https://github.com/Make-School-Labs/fizz-buzz-test

Modify the FizzBuzz code _and_ tests to use types. Include at least one class or interface in your implementation.

## Testing using Jest

Instructions adapted from https://basarat.gitbooks.io/typescript/content/docs/testing/jest.html

Install Jest using npm:

```bash
npm i jest @types/jest ts-jest -D
```

Add a `jest.config.js` file to the root of your project and initialize it with the following:

```javascript
module.exports = {
  "roots": [
    "<rootDir>/tests"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
}
```

Now you can run `npx jest` to run your tests.

You can also add the following to your `package.json`:

```json
{
  "test": "jest"
}
```

This allows you to run with `npm t`.

## Linting with typescript-eslint



## Homework

No new homework

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
