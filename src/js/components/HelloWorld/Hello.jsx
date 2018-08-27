import React, {Component} from 'react';

export class Hello extends Component {
	constructor(props){
		super(props);

		this.state = {
			active: false
		}

		this.toggle = this.toggle.bind(this);
	}

	toggle(e){
		e.preventDefault();

		this.setState(prevState => ({
		  active: !prevState.active
		}));
	}

	render(){
		return (
				<p className={this.state.active ? 'hello active' : 'hello'} onClick={this.toggle}>Hello {this.props.text}</p>
		);
	}
}
