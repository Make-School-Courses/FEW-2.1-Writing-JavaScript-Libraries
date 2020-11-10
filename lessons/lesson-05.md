<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 2.1 - Date Lab

<small style="display:block;text-align:center">API Libraries</small>

<!-- Put a link to the slides so that students can find them -->

<!-- ➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore') -->

<!-- > -->

## Why you should know this or industry application (optional) (5 min)

Dates are important they appear in one form or another in almost every application you might create and they are a core part of programming. 

## Learning Objectives (5 min)

1. 

## Date review

- What is a date?
- What is the Unix Epoch?
- What is UTC? 
- What is minimum unit of time in a JS Date?
- Which of these is correct?	
	- `new Date()`
	- `new Date(0)`
	- `new Date('9/26/65')`
	- `new Date(1983, 09, 31)`


## Composition 

The goal of the current assignment is to create a class that manages a date. It will provide helper methods that make it easier to work with dates. 

You can call your class anything you like. For the examples I'm calling my class `D`.

```JS
class D {

}
```

## args

It would be nice if our custom date class could be initialized in the same way that the built in Date class can be initialized. The built in Date class if you recall can be initialized with a variable number of arguments of different types. 

You'll solve this problem like this: 

```JS
class D {
	constructor(...args) {
		this.date = new Date(...args)
	}
}
```

Here our custom date class stores a date in a property, and initializes that date with all of the arguments passed. 

The `args` is an array of all arguments supplied to the constructor. 

This technique allows you to create functions that take a variable number of parameters. 

## Human Readable values 

Your class should provide human readable values for components of date. 

JS Date provides these methods: 

- date.getFullYear() - Returns a number like 2020
- date.getMonth() - Returns a number 0 to 11. This is index of the month starting at 0.
- date.getDate() - Returns a number like 1 to 31. This is a calendar date. 
- date.getDay() - Returns a number 0 to 6. This is 0 indexed day of the week. Sun to Sat. 

The goal is to create some helper methods that return human readable forms of these. 

- D.year() - 2020
- D.yr() - 20
- D.month() - November
- D.mon() - Nov
- D.day() - Tuesday
- D.dy() - Tue
- D.date() - 10 (date on the calendar)


**Year** 

To get the year you can use `getFullYear()`. To get the short year you'll need to get last two digits of the full year. You could do this by converting to a string and getting the last two characters with `substr()`. 

**Month**

The month should return a human readable month. To make this work you'll need an array of the months. Use `getMonth()` to get the index of the month in your array. 

Follow this same idea for the short month. 

## Date format

You're date lib really needs a good formatter. The format function will use the idea of a 'mask'. The mask is a string that describes the date. Your format function will replace special characters with components of the date. See the homework description for more details. 

The general solution is to create a string by looping over each character in the mask string. With each iteration look at the current character or the mask string if it matches one of the special characters append the date component otherwise append the character. 

For example, image the mask string is: 'y/m/d'

1. 'y' -> replace with the short year '20'
2. '/' -> not special append it '20/'
3. 'm' -> replace with the short month '20/Nov'
4. '/' -> not special append it '20/Nov/'
5. 'd' -> replace with the date '20/Nov/10'

Use the helper methods you created earlier rather than reproducing code that generates the short year etc. 

## When method 

The when method will require you to look at a date and provide a human readable string describing relative time between dates. It should return something like: '1 year ago' or 'three weeks from now'. 

To get started you'll need to compare two dates. Find the difference in year. Here are a few ideas. 

Get the difference in years by numbers. Alternatively you could get the years and subtract. 

```JS
const a = new Date(1965, 8, 26)
const b = new Date()
const c = new Date(b - a)
// Calculate the year mathematically
console.log(c / 1000 / 60 / 60 / 24 / 365.25)
// 55.12536939092326

// Get the numeric year
console.log(b.getFullYear() - a.getFullYear())
// 55
```

You can use these same ideas to calculate the difference in months and days. 

Once you've got the differnece you can start putting together the relative date string. 

The best tactic to is to calculate the difference in months. From here you can check if the total months is more than 12 and reply with "years ago." If the total months is less than 12 you can reply with "months ago." 

Here is a rough idea of calculating the difference in months. 

```JS
const a = new Date(2019, 8, 26)
const b = new Date()
const dy = (b.getFullYear() - a.getFullYear())
const dm = b.getMonth() - a.getMonth()
const totalmonths = dy * 12 + dm
console.log(dy, dm) // 1 year, 2 months
console.log(totalmonths) // 14 months
```

You can calculate the total days between two dates like this: 

```JS
const dd = (b - a) / 86400 / 1000
console.log(dd)
```

Get the difference between the dates and divide by one day or 86400 seconds then divide by milliseconds. 

## After class 

Continue the current assignment.

[Assignment 7 - Date Lib](../assignments/assignment-07.md)
