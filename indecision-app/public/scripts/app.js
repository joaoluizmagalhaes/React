'use strict';

var appRoot = document.getElementById('app');

var visibility = false;

var toggle = function toggle() {
	visibility = !visibility;
	render();
};

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility Toggle'
		),
		React.createElement(
			'button',
			{ onClick: toggle },
			visibility ? 'Hide Details' : 'Show Details'
		),
		visibility && React.createElement(
			'p',
			null,
			'This are the details'
		)
	);
	ReactDOM.render(template, appRoot);
};

render();
