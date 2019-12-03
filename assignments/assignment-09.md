# FEW 2.1 - API Lib

## Description 

People are using APIs to do all sorts of amazing things. They often writing lots of boilerplate/utility code to make their jobs easier. 

The goal of this assignment is to create to lib that will simplify, improve and, speed up the workflow of developers using an API. 

You will choose an API to work with and make a lib that you will publish to npm. Your lib should define one or more helper functions or classes that make working with your chosen API easier to work with. 

### Why this assignment?

APIs are the backbone of the web. Developers have writing these kinds of libraries for years. You have probably used a few already. By doing this assignment you will expand your abilities in new areas. 

## Project requirements

You will write and publish a library that works with an API. Choose an API from the list or choose one of your own. 

Keep in mind that you are not building a product. You are building a tool that facilitates the use of the API you choose. The tool should make development easier and faster. 

- [Yoda Speak](https://rapidapi.com/ismaelc/api/yoda-speak)
- [AccuWeather](https://rapidapi.com/stefan.skliarov/api/AccuWeather)
- [Hearthstone](https://rapidapi.com/omgvamp/api/hearthstone)
- [Breaking News](https://rapidapi.com/MyAllies/api/breaking-news)
- [Natural Language Nutritional Analysis](https://rapidapi.com/edamam/api/edamam-nutrition-analysis)
- [Measure the Happiness of large populations](https://rapidapi.com/andyreagan/api/hedonometer)
- [Sentiment Analysis](https://rapidapi.com/peckjon/api/algorithmia-nlp-sentimentanalysis)

Explore these sites to find other APIs

- https://rapidapi.com/
- https://www.programmableweb.com/

Your goal is to simplify using your chosen API. This can be done in a few ways. Use any or all of the ideas below, or come up with your own ideas.

### Follow these steps

Following these steps will make your easiest while also illustrating why your would want to make a library of code. 

- Make a simple project uses your chosen API. This should be a simple project, it can just be an HTML file with some JS. 
- Decouple the API code. Find the things that connect your project code with the API code. The code that handles the API should be able to take in any information that that it needs as parameters. 
- Move the API code into it's own file. 

Follow the tutorial here: https://www.youtube.com/playlist?list=PLoN_ejT35AEjGBv8nfv4GDszPvltjwmgL

### Stretch Challenges 

- Make an object that holds the configuration data for the API. Give the object methods that handle standard requests and or organize parameters that are passed to the API. 
- Organize and improve on the return data from your API. A JSON repsonse from an API might long and complex. Your code can read the response and return a more organized response. 
- Create a system built around the API. This could handle calling the API repeatedly over a time period for example. 
- Your code can handle errors more gracefully. 

## Working in steps 

Following these steps will help you complete this project.

### Deliverable

A GitHub link to your API project source code. 

Your code should be built and published to npm. 

### Due date

Class 12

## Assessing the assignment

[Assignment Name Rubric](./assignment-09-rubric.md)
