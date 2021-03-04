const data = require('./data.json')
console.log(data[0])


/*

Imagine the data in data.json contains information about 
car purchases. Youre job is to format and print the data. 

You can print the data to the console with node or in the 
browser with html. 

The data includes the follow fields:

{
  "id": 1,
  "first_name": "cherin",
  "last_name": "ladlow",
  "purchased": "2021-12-17T13:14:43Z",
  "phone": "1657488363",
  "make": "Plymouth",
  "model": "Voyager",
  "lastpayment": "5/24/2020",
  "city": "Buenos Aires"
}

You should print the first name and last name. Convert the 
first letter of each name to uppercase. 

Print the purchased date to a a date and format it as: 
Month date, Year for example January 21, 2019

Print out last payment showing the date as "when". 
For example: Last payment: 3 months ago

Format the phone number as: (xxx) xxx-xxxx. You'll need to 
write a function to do the formatting. It should take a 10
digit number/string and return a string formatted as:
(415) 544-8375

Bonus question: Print the weather for the city where the 
purchase was made. 

If possible you should use your library to solve any 
problems here. 

*/
