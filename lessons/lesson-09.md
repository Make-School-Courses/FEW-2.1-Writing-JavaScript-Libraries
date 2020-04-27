<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 2.1 - Lesson 9

<small style="display:block;text-align:center">API Lib</small>

The last Library you will work on is a library that works with an API. APIs are used everywhere and are an important part of the ecosystem. Libraries that make working with APIs easier are an important part of the ecosystem. 

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Learning Objectives 

1. Describe and define callback functions
1. Use callback functions
1. Describe Promise it's uses and states
1. Use Promise in Aynchronous code 
1. Describe uses and functions of `aysnc` and `await`
1. Use `aysnch` and `await` to handle asynchronous calls

<!-- > -->

## What's a callback? 

Implement a function with a callback. 

```JS 
function getWeather(callBack) {
  // gets the weather data...
  // Then executes the callback function
  callback()
}
```

<!-- > -->

How would you use this? 

```JS 
function getWeather(callBack) {
  // gets the weather data...
  // Then executes the callback function
  callback()
}

getWeather(handleWeather)

function handleWeather() {
  // Something happens here after the weather data is loaded. 
}
```

<!-- > -->

Or use an inline function. 

```JS 
function getWeather(callBack) {
  // gets the weather data...
  // Then executes the callback function
  callback()
}

getWeather(function () {
  // something happens here after the weather data is loaded
})

// Do the same thing with an arrow function
getWeather(() => {
  // something happens here after the weather data is loaded
})

```

<!-- > -->

Might be good if it had some parameters. 

```JS 
function getWeather(callBack, apikey, units) {
  // Gets the weather with apikey and units...
  // Calls the callback

  callback()
}
```

<!-- > -->

How do we get data from a callback? Pass it as a parameter!

```JS 
function getWeather(callBack, apikey, units) {
  // loads json with apikey and units
  callback(json) // passes json to callback
}

getWeather(function (data) { // receives json here!
  // do stuff with data received from callback
})
```

<!-- > -->

What if there is an error? Add an error callback! 

This is how most JS methods handled errors before promises. Many systems still use this arranegment. 

```JS 
function getWeather(apikey, units, onSuccess, onError) {
  fetch(...)
    .then((data) => {
      onSuccess(data)
    })
    .catch((error) => {
      onError(error)
    })
}

getWeather('myapikey', 'metric', function (data) { // receives json here!
  // do stuff with data received from callback
}, function(err) {
  // something went wrong
})
```

<!-- > -->

Or write all of that in separate functions. 

```JS 
function getWeather(apikey, units, onSuccess, onError) {
  fetch(...)
    .then((data) => {
      onSuccess(data)
    })
    .catch((error) => {
      onError(error)
    })
}

getWeather('myapikey', 'metric', handleData, handleError)

function handleData(data) { // receives json here!
  // do stuff with data received from callback
}

function handleError(err) {
  // something went wrong
}
```

<!-- > -->

## Using a callback with an API

<!-- > -->

Start with some no frills code. Start here: 

https://github.com/Make-School-Labs/weather-api

<!-- > -->



<!-- > -->

<!-- > -->

<!-- > -->

## Homework

- See the main page for the schedule of assignments.

<!-- > -->

## Wrap Up

- Continue working on your current tutorial
- Complete reading
- Complete challenges

<!-- > -->

## Additional Resources

1. 

<!-- > -->

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
