import React from 'react';
import { reduxForm } from 'redux-form';

let Form = props => {

  const { handleSubmit, pristine, submitting, children } = props;

	return(
		<form onSubmit={handleSubmit}>
			{children}
		</form>
	)

}

Form = reduxForm()(Form);

export default Form;
