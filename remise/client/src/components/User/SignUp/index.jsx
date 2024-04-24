import React from 'react';
import RegisterForm from '../SignUpForm';

Register.prototype = {
    
};

function Register(props) {
    const handleRegisterSubmit=(values)=>{
        console.log('Form submit: ', values);
    };
    return (
        <div>
            <RegisterForm onSubmit={handleRegisterSubmit}/>
        </div>
    );
}

export default Register;