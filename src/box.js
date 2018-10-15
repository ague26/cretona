import React from 'react';
import PropTypes from 'prop-types'


const box = (props) => (
	<div>
		<label> {props.label} </label>
		<input
		onChange={props.onChange}
		type={props.textarea ? 'textarea' : 'text'}
		value={props.value}
		/>
	</div>
);

box.propTypes = {
	onChange: PropTypes.func.isRequired, 
	value: PropTypes.string.isRequired, 
	textarea: PropTypes.bool.isRequired,
};  

box.defaultProps = {
	textarea: false, 
}

export default box; 