# FEW 2.1 Assignment 1 - String Lib

The goal of this assignment is to create a JavaScript Library of String functions. 

Create a GitHub Repo for your project and add a link to the project tracker. 

https://docs.google.com/spreadsheets/d/1o-43DQx161lJKnmALW6NxnERggGn4lP5GOgCjDXcZBo/edit#gid=1955777807

## Writing your first library

In your repo create a file named: `index.js`. You'll add code to this file that solves the problems below.

## What code to write

The goal of this first library is to make write utilities that work with Strings. Strings are one of the most common data types that you work on a regular basis. There are very few programs that don't make use of Strings in one form or another.

JavaScript has a built in String Object/Class that has many methods built into it. These do a lot but often you want to more. 

JavaScript provides many methods to manipulate strings already but it doesn't do some of the things that we might want to do. It's your job to write functions that solve the problems below. 

- **Challenge 1** `capitalize()` - makes the **first character** of a given string uppercase.
    - Example: **h**ello world -> **H**ello world
    - Strategies:
        - 1) Use [`str.substring()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) to get the first character and [`str.toUppercase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) to convert that character to an uppercase character. Then concatenate the uppcase first character with the the original string starting from the second character. 
        - 2) Use [`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to convert the string into an array of characters, upper case the first element of the array with [`str.toUppercase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), and then join the array with [`array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
        - 3) (Advanced) Use a regular expression. 
- **Challenge 2** `allCaps()` - makes all characters uppercase. (this is the same as [`str.toUppercase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase))
    - Example: foo bar -> FOO BAR
    - Strategy: Make a new function that uses `str.toUpperCase()`. You can make an alias with a shorter easier to remember name.  
- **Challenge 3** `capitalizeWords()` - makes the first character of each word uppercase. Imagine that each word is separated by a space. 
    - Example: **d**o **a**ll **t**he **t**hings -> **D**o **A**ll **T**he **T**hings
    - Advanced: `capitalizeHeadline()` - capitalizes all of the words except the words: the, in, a, an, and, but, for, at, by, from unless one of these words is the first word of the string!
    - Example: **t**he **m**ost **f**oo in **b**ar -> **T**he **M**ost **F**oo *in* **B**ar
    - Strategies: 
        - 1) Use [`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and split on a ' ' space. Use your `capitalize()`, loop through all of the elements (you can use `array.map()` here) and use your `capitalize()` function from challenge 1 on each element, last [`array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) all of the elements into a single string. 
        - 2) (advanced) Use a regular expression. 
- **Challenge 4** `removeExtraSpaces()` - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space. 
  - Example: `"   Hello    world!   "` -> `"Hello world!"`
  - Strategies: 
    - 1) [`string.trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) will remove white space from the beginning and ending of a string. If you [`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) on the ' ' (space) you can trim each of these strings and then [`array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) with a ' '. 
- **Challenge 5** `kabobCase()` - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase. 
  - Example: `"   Hello    world   "` -> `"hello-world"`
    - Advanced: Remove special characters from the string. For example: `"Hello World!"` -> `"hello-world"` (notice the ! is removed)
  - Strategies: 
    - 1) You need to remove all of the white space follow the challenge above. If you use [`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) you shopuld have an array of strings you use [`str.toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) and [`array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) with a '-'.
    - Advanced use [`str.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) to remove special characters (~!@#$% etc.) from the string before joining. 
- **Challenge 6** `snakeCase()` - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase. 
  - Example:` "  what the    heck   "` -> `"what_the_heck"`
  - Strategies: 
    - 1) Follow the `kabobcase()` example above and use the '_' in place of '-'.
- **Challenge 7** `camelCase()` - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces. 
  - Example: `Camel Case` -> `camelCase`
  - Strategies: 
    - 1) Use the ideas from `capitalizeWords()` function you wrote earlier. [`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) the string on the ' ' to get and array of words. Then loop starting on index 1 (you could use `array.map()`) and capitalize each word (use your function for this) then [`array.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) on the '' (empty string).
- **Challenge 8** `shift()` this method will take the first character of a string and move to the end of a string: 
  - Example: Hello World -> ello WorldH
  - Strategies: Use `String.slice()`
  - Advanced: Include an optional second parameter that sets the number of characters to shift. 
  - Example: shift('foo bar', 3) -> ' barfoo'

These functions should all take a string as input and return a string as output. 

## Deliverable 

Your completed work is your Github repo and the files in it. Post the link to your work in the progress tracker. 

You will use this project for future assignments that wil include: 

- Publishing to npm
- Writing unit tests


## Due

Class 4 - April 8

Mark your progress in the class [Progress Tracker](https://docs.google.com/spreadsheets/d/1AcrDA3QnL4Vet2XThzITj67MblcY9PQ9ZZWEbHru2f8/edit?usp=sharing) and post a link to your GitHub repo in the Repos tab. 

## Assessment

Your work will be assessed by a rubric. You can self assess your work by looking at the rubric. Wonder what is expected of your work check the rubric. 

# FEW 2.1 - Assignment 1 - String Lib - Rubric

| Expectations | Does not meet | Meets | Exceeds |
|:-------------|:--------------|:------|:--------|
| **_Completion_** | < 100% of functions written | All functions written | Includes all stretch functions, comments, and documentation |
| **_Quality_** | Code is sloppy and/or throws errors | Code is well written with no errors | Considers edge cases |
| **_Comprehension_** | Can't explain the code written | Can explain the code | Could write the code again from scratch |
| **_Work ethic_** | Few massive commits | Commits outline progress, for example a commit for each challenge as it is completed | Commit messages are clearly describe what was changed |
