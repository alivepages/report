import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import { RenderField } from './Fields/RenderField';
import { Required, email, password, } from './Validate/Validate';

let RegisterForm = () => {
  return (
    <div>

		<Field
			name="Name"
			component={RenderField}
      validate={[Required]}
			type="text"
			placeholder="Nombre completo"
			label="Nombre completo*"
			className="form-control"
		/>

		<Field
			name="Email"
			component={RenderField}
			validate={[Required, email]}
			type="email"
			label="Correo electrónico*"
			placeholder="correo@ejemplo.com"
			maxLength={256}
			className="form-control"
		/>

		<Field
			name="Password"
			component={RenderField}
			validate={[Required, password]}
			type="password"
			label="Contraseña*"
			placeholder="Mín. 6 caracteres sin espacios"
			className="form-control"
		/>

		<Field
			name="ConfirmPassword"
			component={RenderField}
			type="password"
			label="Repetir contraseña*"
			validate={[Required, password]}
			placeholder="Mín. 6 caracteres sin espacios"
			className="form-control"
		/>

		<div className="form-group mb-4">
			<Field name="Role" component="input" type="hidden"  />
		</div>
    </div>
  )
}

export default RegisterForm;
