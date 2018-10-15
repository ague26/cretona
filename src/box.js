import React from 'react';
import PropTypes from 'prop-types'


const box = (props) => (
	<div style={{marginBottom:"5px"}}>
		<label style={{paddingRight: "5px", width: "70px"}}> {props.label} </label>
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