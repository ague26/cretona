import React,{Component } from 'react';
import PropTypes from 'prop-types'


class button extends Component{

	static propTypes = {
		email: PropTypes.string.isRequired, 
		formValues: PropTypes.shape({
			name: PropTypes.string.isRequired,
	        email: PropTypes.string.isRequired,
	        message: PropTypes.string.isRequired,
		}).isRequired,
	};

	constructor(props){
	    super(props);
	    this.state={

	    };
	    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
	}

	logFormDataToConsole(event){
		console.log('Form Values', this.props.formValues);
	}

	render(){
		
		const recipient = `mailto:${this.props.email}`;
		const subject = `?subject=Interested%20Client`;
		const body = `&body=${this.props.formValues.message}`;

		return(
			<form action={`${recipient}${subject}${body}`}>
			    <input type="submit" value="Contact Me!"  onClick={this.logFormDataToConsole} />
			</form>
			
		);
	}

}
export default button;