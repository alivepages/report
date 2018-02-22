const sleeep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const asyncValidateConfirmPassword = (values) => {
    return sleeep(100).then(() => {
        if(values.Password !== values.ConfirmPassword) {
            throw { 
                ConfirmPassword: 'Las contraseñas no coinciden',
            }
        }
    })
};