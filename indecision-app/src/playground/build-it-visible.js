class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
		this.state = {
			visibility: false
		}

	}

	handleToggle() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			}
		})
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
				{this.state.visibility && (<p>This are the details</p>)}
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggle = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
// 	const template = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick={toggle}>{visibility ? 'Hide Details' : 'Show Details'}</button>
// 			{visibility && (<p>This are the details</p>)}
// 		</div>
// 	);
// 	ReactDOM.render(template, appRoot);
// }

// render();