# battleship
popular battleship game's web version

# Preface
this project was made as a part of ca3 of my subject INT219, the project can be accessed here:  
https://prince-thind.github.io/battleship/

# Branches
this project has three branches
+ main--> production level code written integrated with the webpack tool
+ vanilla--> purely vanilla JS code, this code is same as the main branch except for the presence of webpack
+ gh-pages--> optimized production level code to display on gihtub pages, compiled using webpack for better performance

# Warning
if you clone this project locally, the index.html page from vanilla branch won't work as my project uses ES6 modules, due to securuty reasons broswers cannot access files from OS and hence imports within my index.js fail. The right way to view this project locally is using VSCode's live server or custom built server that can serve static files.