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

## Here are a few ideas

<!-- > -->

Set up some callbacks. You'll need one for success and one for error. 

```JS
// -------------------------------------------------------------------
// Use a callback to handle data and errors. This is old school and 
// is the basis for all of the other examples here. 
function getWeather(zip, apiKey, success, error) {
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  console.log('**** getWeather ****')
  fetch(path)
    .then(res => res.json())
    .then(json => success(json))
    .catch(err => error(err))
}
```

Externally you would use the function above like this: 

```JS 
getWeather('94010', 'mykey', onSuccess, onError)

function onSuccess(json) { ... }

function onError(err) { ... }
```

<!-- > -->

Your code could return a Promise. Simplest would be to return 

```JS 
// -------------------------------------------------------------------
// Use a promise to handle data and errors
function getWeatherPromise(zip, apiKey) {
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  // Return a Promise 
  return fetch(path).then(res => res.json())
}
```

Externally uou would use the code above like this: 

```JS 
getWeatherPromise('94102', 'mykey')
  .then(onSuccess)
  .catch(onError)

function onSuccess(json) { ... }

function onError(err) { ... }
```

<!-- > -->

```JS
async function getWeatherAsync(zip, apiKey) {
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  
  // Await each of these Promises to resolve 
  // (await only works inside functions marked async)
  const res = await fetch(path) // waits for the promise to resolve
  const json = await res.json() // waits for the promise to resolve

  return json
}
```

This works exactly the same as the previous example and would be called the same from outside. 

```JS 
getWeatherPromise('94102', 'mykey') // async function returns a Promise!
  .then(onSuccess)
  .catch(onError)

function onSuccess(json) { ... }

function onError(err) { ... }
```

## Improving the Experience

The current data from OpenWeatherMap is really hard to parse.

- Has multiple levels of data stored
- Some of the keys use the same names
- Some of the keys are confusing

You can improve on this. 


Currently OpenWeatherMap is returning something that looks like this: 

```JS
{
  base: "stations",
  clouds: {all: 75},
  cod: 200,
  coord: {lon: -122.48, lat: 37.76},
  dt: 1588021159,
  id: 0,
  main: {
    feels_like: 47.68
    humidity: 55
    pressure: 1021
    temp: 62.76
    temp_max: 66.2
    temp_min: 57.99
  },
  name: "San Francisco",
  sys: {type: 1, id: 5817, country: "US", sunrise: 1587993483, sunset: 1588042595},
  timezone: -25200,
  visibility: 16093,
  weather: [
    {id: 803, main: "Clouds", description: "broken clouds", icon: "04d"}
  ],
  wind: {speed: 25.28, deg: 270}
}
```

That's really hard to grasp. What's the difference between `main` and `weather`? Main has the temperature but weather has the description of the weather conditions. Main really seems to be about the temp and air pressure. 

Why is weather an array with only one value? Everything else is objects.

You could improve on this, developers would thank you. 

<!-- > -->

```JS
async function getWeatherAsync(zip, apiKey) {
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  
  const res = await fetch(path) 
  const json = await res.json() 

  // Get all of the relavant info 
  const { base, clouds, cod, coord, dt, id, main, name, sys, timezone, visibility, weather, wind } = json
  const { temp, pressure, humidity, temp_max, temp_min } = main
  const { description, icon } = weather[0]
  // Reformat the object that is returned
  return { temp, pressure, humidity, temp_min, temp_max, clouds, cod, visibility, wind, description, icon }
}

```

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
