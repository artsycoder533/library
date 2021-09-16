# Book Library

This is my solution to The Odin Project's [Project Library](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/library).

[![wakatime](https://wakatime.com/badge/github/artsycoder533/library.svg)](https://wakatime.com/badge/github/artsycoder533/library)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

I am currently following The Odin Project's Full Stack Javascript Curriculum.  This project focused on Factory Functions and the Module Pattern. 

### The challenge

We were tasked with turning an exercise from a previous lesson into a Library app with the following requirements:

Part One: 
- 1. If you haven’t already, set up your project with skeleton HTML/CSS and JS files.
- 2. All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

- 3. Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
- 4. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
- 5. Add a button on each book’s display to remove the book from the library.
  - 1. You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
- 6. Add a button on each book’s display to change its read status.
  - 1. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
- 7. Optional - we haven’t learned any techniques for actually storing our data anywhere, so when the user refreshes the page, all of their books will disappear! If you want, you are capable of adding some persistence to this library app using the Web Storage API.
 - 1. localStorage (docs here) allows you to save data on the user’s computer. The downside here is that the data is ONLY accessible on the computer that it was created on. Even so, it’s pretty handy! Set up a function that saves the whole library array to localStorage every time a new book is created, and another function that looks for that array in localStorage when your app is first loaded. Additionally, here are a couple of quick tips to help you not get tripped up:
    - 1. Make sure your app doesn’t crash if the array you retrieve from localStorage isn’t there!
    - 1. localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. You will learn more about this language in a later lesson, but it doesn’t hurt to get your feet wet now. Keep in mind you cannot store functions in JSON, so you’ll have to figure out how to add methods back to your object properties once you fetch them. Good luck!

Part Two:

We were tasked to go back and refactor our application so that it implemented classes instead of a plain constructor:


### Screenshot

- Desktop Screenshot [Desktop Screenshot](./assets/images/desktop.png)

### Links

- Solution URL: [https://github.com/artsycoder533/library.git](https://github.com/artsycoder533/library.git)
- Live Site URL: [https://artsycoder533.github.io/library/](https://artsycoder533.github.io/library/)

## My process

To start this project, I used my Book constructor that from a previous exericse.  I then created an array to store the book objects.  I thought about all the actions that would be needed to operate a book libarary and translated those actions into functions.  I  created helper functions to streamline the process such as handling form input, clearing form input, open/closing the modal, adding a book and deleting a book.  As I got a feature to work I work add a new method.  Once all functionality was implemented, I then went back and added CSS to style the application.

### Built with

- HTML5
- CSS3
- Javascript
- OOP

### What I learned

I learned how to work with local storage and how to use JSON.stringify.  The biggest challenge I faced was figuring out how to retrieve elements back out of local storage.  I learned that object methods are not saved when they are parsed.  I found a stackoverflow answer that clarified how to accomplish this task.  For part two, I learned how to refactor my application into a class and how similar the implementation are.  I also practiced the Git workflow of creating a new branch to work on a feature and then merge it back to the main branch.

### Continued development

I would like to continue to add features to this application such as using the Google Books API to display a cover image and other information about the book the user adds to the library.  I also want to make this app responsive so that it can be used on mobile.

### Useful Resources

I found the following websites to be helpful in providing further understanding on topics I was not familiar with.

-  [JavascriptTutorial.net](https://www.javascripttutorial.net/web-apis/javascript-localstorage/)
    - Topic: Local Storage

-  [Stackoverflow.com](https://stackoverflow.com/questions/64141609/saving-objects-in-localstorage-which-has-a-method)
    - Topic:  Object methods and Local Storage

- [JavascriptTutorial.net](https://www.javascripttutorial.net/javascript-dom/javascript-page-load-events/)
    - Topic: DOM Load Event

- [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
    - Topic: Object.create()

## Author

- Personal Portfolio - [](https://artsycoder533.github.io/portfolio/)
 
