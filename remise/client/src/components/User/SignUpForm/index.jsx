import {yupResolver} from '@hookform/resolvers/yup'
import { PropTypes } from 'prop-types'
import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../../FormControl/InputField'
import { Avatar, Button, Grid, Link, Typography} from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined'


RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    // const classes = useStyles();
    const schema=yup.object().shape({
        firstname: yup.string().required('Please enter title').min(5, 'Title is too short'),
        lastname: yup.string().required('Please enter your lastname'),
        email: yup.string().email('Invalid email').required('Please enter your email'),
        password: yup.string().min(6, 'Password must be at lease 6 characters'),
        confpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Please confirm your password'),
    })
    const form 
        = useForm({
        defaultValues:{
            firstname:'',//khai báo hết để không bị undefinded
            lastname:'',
            email:'',
            password:'',
            confpassword:'',
        },
        resolver: yupResolver(schema),
    });
    const submitHandler= async(values)=>{
        const {onSubmit}= props;//??sao bỏ
        if (onSubmit){
            try{
                await onSubmit(values);
            } catch(error){
                console.error('Error submitting form: ', error);
            }
        }
        form.reset();
    }
    return (
        <Grid className='root'>
            <Avatar className='avatar' sx={{margin: '0 auto', bgcolor:'primary.main'}}>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography className='title' component="h3" variant="h5">
                Sign Up
            </Typography>
            <form onSubmit={form.handleSubmit(submitHandler)}>
                <InputField name="firstname" id="firstname" label ="First Name" form={form} width="48%" marginRight="4%"/>
                <InputField name="lastname" id="lastname" label ="Last Name" form={form} xs={12} sm={6} width="48%"/>
                <InputField name="email" id="email" label ="Email" form={form} xs={12}/>
                <InputField name="password" id="password" label ="Password" form={form} type='password' autoComplete="new-password" fullWidth/>
                <InputField name="confpassword" id="confpassword" label ="ConffirmPassword" form={form} xs={12} type='password' autoComplete="new-password"/>
                <Button variant='contained' color='primary' fullWidth sx={{ mt: 3, mb: 2 }} type='submit'>Sign Up</Button>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
            </form>
        </Grid>
    );
}

export default RegisterForm;
