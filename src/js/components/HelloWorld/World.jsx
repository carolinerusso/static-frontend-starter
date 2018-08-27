import React, {Component} from 'react';

export class World extends Component {
	constructor(props){
		super(props);

		this.state = {
			
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.liftedValue(e.target.value);
	}

	render(){
		return (
			<input type="text" onChange={this.handleChange} />
		);
	}
}
