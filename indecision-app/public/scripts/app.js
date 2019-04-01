'use strict';

console.log("App.js is running!");

var app = {
	title: 'Indecision App',
	subtitle: 'Subtitle',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};

var removeAll = function removeAll() {
	app.options = [];
	render();
};

//JSX - JavaScript XML

var appRoot = document.getElementById('app');

var makeDecision = function makeDecision() {
	var randomNum = Math.floor(Math.random() * app.options.length);
	var option = app.options[randomNum];
	alert(option);
};

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subtitle && React.createElement(
			'p',
			null,
			app.subtitle
		),
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Here are your options: ' : 'No options'
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: makeDecision },
			'What should I do?'
		),
		React.createElement(
			'button',
			{ onClick: removeAll },
			'Revome All'
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (option) {
				return React.createElement(
					'li',
					{ key: option },
					'Option : ',
					option
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

render();
