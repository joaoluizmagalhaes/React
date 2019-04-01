console.log("App.js is running!");

const app = {
	title: 'Indecision App',
	subtitle: 'Subtitle',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if(option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
}

const removeAll = () => {
	app.options = [];
	render();
}

//JSX - JavaScript XML

const appRoot = document.getElementById('app');

const number = [55, 101, 1000];

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>
			<p>{app.options.length}</p>
			<button onClick={removeAll}>Revome All</button>
			{/*
				number.map((number) => {
					return <p key={number}>Number: {number}</p>;	
				})
			*/}
			<ol>
				{
					app.options.map((option) => {
						return <li key={option}>Option : {option}</li>;
					})
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
}

render();