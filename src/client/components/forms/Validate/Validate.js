export const Required = value => value ? undefined : ' '

export const password = value => value && !/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/i.test(value) ?
  'Debes tener al menos un caracter especial, una letra mayúscula y un número, sin espacios y mín. 6 caracteres' : undefined

export const whiteSpace = value => /\s/g.test(value) ? "El campo no puede contener espacios" : undefined

export const validatePhoneLength =  value => value.length < 10  ? 'El campo debe contener 10 digitos' : undefined

export const NumberType = value => value && isNaN(value) ? 'El campo debe ser númerico' : undefined

export const validateSalary = (value, allValues) => {
  if((allValues.VacanteSalaryMin != null) && (allValues.VacanteSalaryMax != null) ) {
    if(parseFloat(value) < parseFloat(allValues.VacanteSalaryMin)) {
      return 'El valor mínimo no puede ser mayor que el valor máximo'
    }
  }
}

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'No tienes formato completo' : undefined

export const recoveryEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Debes ingresar el correo de recuperación' : undefined