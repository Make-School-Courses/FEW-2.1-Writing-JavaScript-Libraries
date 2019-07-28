# FEW 2.1 - Dates and Date Lib

Time for another lib! This time you'll make a library that works with Dates. You will take everything covered so far: Code, testing, and bundling. 

## Why you should know this?

While reusing the skills from the previous classes is not adding new knowledge, you need to practice your current skills writing more code and tests. 

## Learning Objectives (5 min)

1. Define the Date Object and its important methods
1. Use the Date Object to generate dates and times, and format dates and times. 
1. Construct methods that build and expand the core functionality of the Date object

### Course Progress Tracker

https://docs.google.com/spreadsheets/d/1o-43DQx161lJKnmALW6NxnERggGn4lP5GOgCjDXcZBo/edit#gid=1955777807

## UTC and JS Date

What's a Date? 

A date is the day of the month or year specified as a number. 

In JS this will also include the year and the time. It pinpoints a point in time as a number. 

Dates in JS are represented as the number of milliseconds since 1970! As such you can define or locate almost any point in time. 

UNIX Epoch! What is this? Also known as a timestamp. It's a number that represents the number of seconds since **Thursday, 1 January 1970**. The basic premise that each day takes 86,400 seconds. 

Dates before the epoch can be expressed as a negative number.

Are there any weird? Plenty, just think of leap years? 

Can you do Math with this stuff? 

Yes! The Date Object like the Number Object is a wrapper around a primitive value. JS will convert it to a number when needed. 

Make a new date with `new Date()` this returns a new date which represents the moment in time when the command was executed. 

```JS 
var a = new Date()
```

Try this in the console: 

```JS
// Make a date object
var a = new Date()
// Make another Date object
var b = new Date()
// Subtract one from the other
b - a // 5009 ms between dates
```

**Internally a Date is a number in Milliseconds**

Try this with your birthday. You can initialize a date with almost any human readable date string. For example: 

```JS 
var age = new Date('9/26/65')
var now = new Date()
console.log(now - age) // 1698830617401
```

Challenge: Find the number of:

- seconds
- minutes
- hours
- days 
- years

Since your birthday. 

Q: Is the number accurate? 
Q: What's the difference? 

## Date methods 

The Date object has many instance methods most are getters and setters. There are a few class methods also.

### Getters 

These mostly get at components of a date such as a year, month, day, hours, minutes, etc. 

- Date Components 
  - `new Date().getFullYear()  // 2019`
  - `new Date().getMonth()     // 6`
  - `new Date().getHours()     // 10`
- Formatted Dates 
  - `new Date().toLocaleString() // "7/27/2019, 10:15:36 AM"`
  - `new Date().toDateString()   // "Sat Jul 27 2019"`

### Setters 

Setters change the value of various components of a date. 

- `myDate.setMonth(6)` Sets the month to July
  - January === 0
- `myDate.setMinutes(30)`

_Never mutate s source object always make a copy and mutate that to avoid side effects._

```JS
const d = new Date(2019, 0, 10)
const newDate = new Date(d)
newDate.setMonth(5)

console.log(d) // 10 January 2019
console.log(newDate) // 10 June 2019
```

### Class Methods 

Date provides a couple of class methods. 

- `Date.now() // 1564251902406` the ms at the current moment
- `Date.UTC(year, month, day, hour, min, sec, ms)` create date from UTC parameters 
- `Date.parse(string)` creates a date from date string or returns NaN if unable to parse the string. 

## Timezones 

- Local time refers to the timezone your computer is in.
- UTC is synonymous with Greenwich Mean Time (GMT) in practice.

By default, almost every date method in JavaScript (except one) gives you a date/time in local time. You only get UTC if you specify UTC.

https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/

## Offset dates

```JS
const date = new Date() // Get today 7/27 (or any date)
const startDate = new Date(date) // copy the date
const dueDate = new Date(date) // copy the date

// Start date have been 7 days ago
startDate.setDate(date.getDate() - 7) // 7/20

// Due date is 3 days from now
dueDate.setDate(date.getDate() + 3) // 7/30
```

Here is an alternate approach

```JS 
var a = new Date()
var b = new Date(a.getYear(), a.getMonth(), a.getDate() - 7)
var c = new Date(a.getYear(), a.getMonth(), a.getDate() + 3)
```

Here b and c have lost the hours, mins, secs, ms. These could have been included if they were needed. 

**Delta/difference in dates**

```JS
a.getDate() - b.getDate() // 7
a - b // 59958877622077
```

You can also do the math! 

```JS
const date1 = new Date('7/13/2019');
const date2 = new Date('7/15/2019');
// const diffTime = Math.abs(date2.getTime() - date1.getTime());
const diffTime = date2 - date1;
const diffDays = diffTime / (1000 * 60 * 60 * 24); 
console.log(diffDays);
```

It's probably best to stick with the built-in methods over math more often. 

## Activity 



## Wrap Up (5 min)

- Review Dates
- Review challenges 
- Review Homework

## Additional Resources

1. https://javascript.info/rest-parameters-spread-operator
1. https://javascript.info/date
1. https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
1. https://javascript.info/object-toprimitive

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
