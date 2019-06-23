# FEW 2.1 Assignment - 1 - String Lib

The goal of this assignment is create a JavaScript Library of String functions. 

Create a GitHub Repo for your project and add a link to the project tracker. 

https://docs.google.com/spreadsheets/d/1o-43DQx161lJKnmALW6NxnERggGn4lP5GOgCjDXcZBo/edit#gid=1955777807

## Writing your first library

In your repo create a file named: `index.js`. You'll add code to this file that solves the problems below. 

## What code to write

The goal of this first library is to make some String functions. These will be generic utilities that help you work with Strings. 

JavaScript provides many method to manipulate strings already but it deosn't do some of the things that we might want to do. It's your job to write functions that solve the problems below. 

1. capitalize() - makes first character of a given string uppercase. 
  - Example: hello world -> Hello world
2. allCaps() - makes all characters uppercase. (this is the same as .toUppercase())
  - Example: foo bar -> FOO BAR
3. capitalizeWords() - makes the first character of each word uppercase. Imagine that each word is separated by a space. 
  - Example: do all the things -> Do All The Things
    - Advanced: capitalizeHeadline() - capitalizes all of the words except the words: the, in, a, an, and, but, for, at, by, from
      - Example: the mot foo in bar -> The Most Foo in Bar
4. oddCaps() - Makes all odd characters uppercase and even characters lowercase. 
  - Example: hello world -> hElLo wOrLd
    - Advanced: Don't count spaces
      - Example: hello world -> hElLo WoRlD
  - evenCaps() - Make all even characters uppercase and the odd characters lowercase. 
    - Example: foo bar -> FoO BaR
      - Advanced: Don't count the spaces
        - Example: foo bar -> FoO bAr
5. removeExtraSpaces() - Removes all spaces from the beginning and ending of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space. 
  - Example: "   Hello    world!   " -> "Hello world!"
6. kabobCase() - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase. 
  - Example: "   Hello    world   " -> "hello-world"
7. snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase. 
  - Example: "  what the    heck   " -> "what_the_heck"
8. camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces. 
  - Example: Camel Case -> camelCase

These functions should all take a string as input and return a string as output. 

You will use this assignment in class 2
