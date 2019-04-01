const appRoot = document.getElementById('app');

let visibility = false;

const toggle = () => {
    visibility = !visibility;
    render();
}

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggle}>{visibility ? 'Hide Details' : 'Show Details'}</button>
			{visibility && (<p>This are the details</p>)}
		</div>
	);
	ReactDOM.render(template, appRoot);
}

render();