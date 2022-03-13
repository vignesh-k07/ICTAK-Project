
//Login Form Validations
export function loginValidation ( values )  {
    const errors = {};
    
    if(!values.username){
        errors.email = 'Username is required';
    }else if (values.username !== "admin"){
        errors.email = 'Invalid Username';
    }
    if(!values.password){
        errors.password = 'Password is required'
    }else if (values.password !== "12345678"){
        errors.password = 'Invalid Password';
    }
    return errors;
}




