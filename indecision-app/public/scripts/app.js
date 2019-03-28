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
			'p',
			null,
			app.options.length
		),
		React.createElement(
			'button',
			{ onClick: removeAll },
			'Revome All'
		),
		React.createElement(
			'ol',
			null,
			React.createElement(
				'li',
				null,
				'Item one'
			),
			React.createElement(
				'li',
				null,
				'Item two'
			)
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
