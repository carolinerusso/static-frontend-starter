import React, {Component} from 'react';
import {Hello} from './HelloWorld/Hello.jsx';
import {World} from './HelloWorld/World.jsx';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			value: "World"
		}

		this.handleLiftedValue = this.handleLiftedValue.bind(this);
	}

	handleLiftedValue(value){
		this.setState({
			value: value
		}, () => { 
			//callback here if needed
		});

	}

	render(){
		return ([
			<Hello text={this.state.value} key={0} />,
			<World liftedValue={this.handleLiftedValue} key={1} />
		]);
	}
}

export default App;
