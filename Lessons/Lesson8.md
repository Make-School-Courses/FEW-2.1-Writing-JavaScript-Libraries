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

### Q: What is dynamic typing?

In a dynamically typed language, a variable's type can change over the course of the program. Consider the following code:

```
let x = 10;
x = "hello";
```

In a dynamically typed language, we do not know *until runtime* what type of data a particular variable holds.

Examples of dynamically typed languages include Python, JavaScript, PHP, and Ruby.

## Why use one or the other?

Discussion: Write down 3 reasons each for using either a statically typed or dynamically typed language.

### Static typing catches errors earlier in program development.

```
const intFuncs = [];

intFuncs.push((x) => 2*x);
intFuncs.push((x) => x*x);

intFuncs.push((x) => x.toString() + x.toString());

let total = 0;
intFuncs.forEach((func) => total += func(10));
```

We catch the bug *at runtime*.

```
const intFuncs: Array<(x: number) => number> = [];
```

### Static typing improves readability.

Consider this code:

```
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

```
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

Since our types are set in stone at compile time, many code editors will use that information to give you smart autocomplete suggestions based on that particular data type.

### Advantages of dynamic typing

There isn't just one right answer that works in all scenarios; you will need to decide which style is right for your project. Here are some pros of dynamic typing to consider:

- It's faster to write, thus might be better for scripting
- It's more succinct
- It's more tolerant to change: a code refactor will have a smaller area of effect

## Features of TypeScript

### Variables (including function variables)



### Classes

### Interfaces

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
