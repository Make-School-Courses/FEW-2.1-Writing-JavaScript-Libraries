<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 2.1 - Lesson 11

<small style="display:block;text-align:center">Writing in TypeScript</small>

<!-- ([slides](https://docs.google.com/presentation/d/1ovt7YeAfqaiN8duWjwhYxldTwvca382QTHYyBUFZZ_8/edit)) -->

In this class, you will begin writing TypeScript code and learn how to adapt your existing JS code to TypeScript.

<!-- Put a link to the slides so that students can find them -->

<!-- ➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore') -->

<!-- > -->

## Learning Objectives

1. Describe enumerations
1. Use enums
1. Describe generic types
1. Use generics
1. Write types for functions


<!-- > -->

# Enumerations 

An enumeration is a named set values. These act like constants you might have define but work together to describe all of the possible choices that might be avaibale. 

Use enumerations, enum for short, to name the possible choices for a thing. Thing in this case can be any situation where you find there are fixed set possible values. 

For example, take the OpenWeatherMap API, possible values for unit are: imperial, metric, and standard. Here are the possible solutions you could use to represent this situation: 

Strings: Using a string at each location is prone to error. 

```JS
function getWeather(zip, apikey, unit = 'metric') {
  // ...
}
```

Constants: Defining contants is good but doesn't show that these values work together. Your constants are in a pool of variables. 

```JS
const METRIC = 'metric'
const IMPERIAL = 'imperial'
const STANDARD = 'standard'

function getWeather(zip, apikey, unit = METRIC) {
  // ...
}
```

Another possible choice might be an object: 

```JS
const Units = {
  metric: 'metric',
  imperial: 'imperial',
  standard: 'standard'
}

function getWeather(zip, apikey, unit = Units.metric) {
  // ...
}
```

With typescript you could define an enum! 

```JS
enum Unit {
  metric,
  imperial,
  standard
}

function getWeather(zip: string, apikey: string, unit: Unit = Unit.metric) {
  // ...
}
```

These are the possible choices for units in the openweathermap API. Unlike the methods above TypeScript would check against the enum and would show an error if we used a value not on the list! 

In many situations you have a limited set of choices and your program should always choose from that set. An enum guarantees that you will always choose from the possible choices! 

Under the hood enums are just objects with keys. You could have done this but TypeScript does it for you and adds error checking! 

Imagine you are making a game or mapping app. It needs to work with the compass directions. Add the 

Try this: 

```JS
// Define an enum that represents the possible directions 
enum Direction {
	N,
	S,
	E,
	W,
	// Challenge: Add the other directions SE, SW, NE, NW
}
```

Now imagine you have a function that needs to move the player or map locator based on a chosen direction. 

The function below takes `direction` as a parameter whose type is: `Direction`. With this in place you'll only be able to provide one of the directions in the Direction enum to this function! 

Notice the Switch case inside the function. Using an enum we can be sure that only one of these choices is ever used. This prevents errors before they happen! The value of the enum is also descriptive! Direction.N reads like Direction North. You could have defined your enum like this: 

```JS
// Define an enum that represents the possible directions 
enum Direction {
	North, South, East, West
}
```

An enum can be used as a value and a type. The function takes the `Direction` enum as the parameter and check it against possible cases in the switch block. 

```JS
let x = 0
let y = 0

function move(direction: Direction) { // direction is enum type
	switch(direction) {
		case Direction.E:
			x += 1
			break

		case Direction.W:
			x -= 1
			break 
		
		case Direction.N:
			y -= 1
			break
		
		case Direction.S: 
			y += 1
			break

		// Challenge: Add cases for the new directions: SE, SW, NE, NW
	}
}
```

So what's the value of an enum? 

`console.log(Direction.N) // 0`

Under the hood an enum is an array and each of the cases is just the index of that case. 

Some times it's useful to assign a value of an enum. For example maybe our program needs to print the direction.

Imagine a function that works with an array. The type might be hard to guess. 

```JS
let currentDirection = Direction.N

function printDirection() {
	console.log(`You are travelling ${currentDirection}`)
}

printDirection()
```

The output here is: `You are travelling 0` which isn't very useful. 

Each case for an enum can also be just about any value. Edit the enum you created above: 

```JS
// Modify your enum to work with directions as strings
enum Direction {
	N = 'North',
	S = 'South',
	E = 'East',
	W = 'West',
	// Challenge: Add the other directions SE, SW, NE, NW
}
```

With this change everything works the same as before but value of the enum is represented as the strings you defined: 

```JS
console.log(Direction.N) // 'North'
printDirection() // You are travelling North
```

Read more about enums here: 

- https://www.typescriptlang.org/docs/handbook/enums.html
- https://2ality.com/2020/01/typescript-enums.html
- https://en.wikipedia.org/wiki/Enumerated_type


## Functions as Types

In Typescript functions are also expressed as types. A function that receives a function as a parameter or returns a function must describe that function as a type.

For example: 

```JS
// This function returns a function that returns a string
function sayHello(): () => string {
	return () => 'Hello'
}
// This variable contains a function that returns a string
const hello = sayHello()
// Calling the function returns the string
console.log(hello())
```

Challenge modify the function above to take a string: Name as input and combine that with the output. The output of the returned function should read: Hello {name}.

Let's try that again. Write a function that takes a number as input and returns a function. The returned function should return value multiplied by the input number. 

```JS 
function mathematizer(n: ?): () => ? {
	let sum = n
	return () => { ? }
}

const m = mathematizer(3)
console.log(m()) // 9
console.log(m()) // 27
console.log(m()) // 81
console.log(m()) // 243

// Challenge - Write a function that takes a function doLater(). It should
// take a callback and a time in milliseconds. It should run the callback 
// after the time.

function doLater() {

}

doLater(() => {}, 2000) // executes the callback in 2 secs.
```

## Generic types 

Generic types solve the situation where you have a function that defines a parameter that can take an argument of different types.

Imagine the following: 

```JS
const a = 22
const b = 'Zen'
const c = { name: 'Yin', age: 44 }

// Imagine this function that takes in a value and returns that value
function sendItBack(thing: any): any {
  // ...
	return thing
}

console.log(sendItBack(a))
console.log(sendItBack(b))
console.log(sendItBack(c))
```

There is something subtle going on here. The function above takes any type as an input and returns any type as an ouput. So what's the problem? There is not guarantee that the input will match the output! If we are going to return the input object it should be the same type and we should be able to check it! 

Using `any` here works but it's not type safe since the return type could be anything. What if the function transformed the input into another type? 

While this example seems contrived, because it is, it is more common than you might think! The `sendItBack()` function can take any type and return the same type. You couldn't make a function like this for every single type since Object types are infinite! 

```JS
function sendItBackString(thing: string): string {...}
function sendItBackNumber(thing: number): number {...}
function sendItBackBoolean(thing: boolean): boolean {...}
// ... this tedious and impossible
```

Solve this problem with a generic:

```JS
// Solve sendItBack with a generic type <T>
// Challenge - replace any with a generic type T
function sendItBack<T>(thing: T): T {
	return thing
}
```

The generic type is expressed as `<T>` and you'll use `T` where that type is needed. Here the `thing` is type `T` and the return value of the function is type `T`.

Let's make a practical example!

Where generics come into play often is Arrays. Since an array must be typed we need a generic type to represent the type of the Array for functions that can work with any type of Array. Think about functions like: `push`, `slice`, `splice` and `reverse`. 

Imagine you have a function that takes in an array, of any type, and it prints the type of each item in the array: 

```JS
const numbers = [1,43,6,71,8]
const names = ['Ann', 'Bob', 'Cen', 'Dan']
const objs = [{name: 'Eun', age: 23}, { name: 'Fin', age: 32 }]

function getTypes<T>(arr: T[]) {
	arr.forEach(thing => console.log(typeof thing))
}

// One function can handle an array of any type! 
getTypes(numbers) // number, number, number, number, number
getTypes(names)   // string, string, string, string
getTypes(objs)    // object, object
```

Again this is a contrived example but it does something that is not possible without generics.

Consider this example. The function here reverses an array, nevermind that Array.reverse() is a thing! For the function below to work it needs to know the type of the input array and the type of the output array. 

```JS
const numbers = [1,2,3,4]

function reverse<T>(arr: T[]): T[] {
	const rra: T[] = []
	arr.forEach(item => rra.unshift(item))
	return rra
}

console.log(reverse(numbers)) // 4,3,2,1

// Challenge - write a shift function that takes an array. It should 
// return an array of the same type with first item moved to the end.  
```

What's going on there? The function takes an array of type `T` and returns an Array of type `T`. Inside the function we declare an array `rra` of type `T` and return this. 

Consider this idea. You need to create a function that returns the next item from an array. The function needs to take in an array of any type, and return a function that returns a value that matches the type of the input array. 

```JS
function iterate<T>(arr: T[]): () => T {
	let i = -1
	return () => {
		i += 1
		return arr[i]
	}
}

const nextNumber = iterate(numbers)
const nextName = iterate(names)
const nextObj = iterate(objs)

console.log(nextNumber()) // 1
console.log(nextNumber()) // 43
console.log(nextName())   // Ann
console.log(nextName())   // Bob
console.log(nextObj())    // { name: 'Eun', age: 23 }
console.log(nextObj())    // { name: 'Fin', age: 32 }

// Challenge - when iterate gets to the end of the array you'll get an undefined. 
// Try these: make iterate loop back to the first item after the last. 
```

Here the type of the input array needs to be known and the type of the the return value for the function that is returned. 

- https://www.typescriptlang.org/docs/handbook/generics.html

<!-- > -->

### Homework

<!-- [Assignment 8 - Typescript](../assignments/assignment-08.md) -->

Continue working your final project. 

<!-- > -->

## Additional Resources

1. https://exercism.io/my/tracks/typescript
1. https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

<!-- > -->
<!-- 
## Minute-by-Minute [OPTIONAL]

| **Elapsed** | **Time**  | **Activity**              |
| ----------- | --------- | ------------------------- |
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:15      | Overview                  |
| 0:20        | 0:30      | In Class Activity I       |
| 0:50        | 0:10      | BREAK                     |
| 1:00        | 0:45      | In Class Activity II      |
| 1:45        | 0:05      | Wrap up review objectives |
| TOTAL       | 1:50      | -                         | -->
