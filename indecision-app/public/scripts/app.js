"use strict";

console.log("App.js is running!");

//JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Joao Magalhaes"
  ),
  React.createElement(
    "p",
    null,
    "This is some info!"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Joao Luiz Magalhaes"
  ),
  React.createElement(
    "p",
    null,
    "Age: 35"
  ),
  React.createElement(
    "p",
    null,
    "Location: Sao Paulo"
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
