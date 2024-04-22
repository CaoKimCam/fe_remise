import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../SignUpForm';

Register.propTypes = {
    
};

function Register(props) {
    const handleSubmit=(values)=>{
        console.log('Form submiti: ', values);
    };
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;