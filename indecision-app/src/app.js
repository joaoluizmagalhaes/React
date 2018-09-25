console.log("App.js is running!");

//JSX - JavaScript XML
var template = (
  <div>
    <h1>Joao Magalhaes</h1>
    <p>This is some info!</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Joao Luiz Magalhaes</h1>
    <p>Age: 35</p>
    <p>Location: Sao Paulo</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);