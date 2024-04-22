import {yupResolver} from '@hookform/resolvers/yup'
import { PropTypes } from 'prop-types'
import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../../FormControl/InputField'
import { Avatar, Button, Grid, IconButton, Link, Typography} from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined'
import { style } from '@mui/system'

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    // const classes = useStyles();
    const schema=yup.object().shape({
        firstname: yup.string().required('Please enter title').min(5, 'Title is too short'),
    })
    const form=useForm({
        defaultValues:{
            firstname:'',//khai báo hết để không bị undefinded
            lastname:'',
            email:'',
            password:'',
            confpassword:'',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit=(values)=>{
        const {onSubmit}= props;
        if (onSubmit){
            onSubmit(values);
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
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="firstname" label ="First Name" form={form} width="48%" marginRight="4%"/>
                <InputField name="lastname" label ="Last Name" form={form} xs={12} sm={6} width="48%"/>
                <InputField name="email" label ="Email" form={form} xs={12}/>
                <InputField name="password" label ="Password" form={form} fullWidth/>
                <InputField name="confpassword" label ="ConffirmPassword" form={form} xs={12}/>

                <Button variant='contained' color='primary' fullWidth sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
            </form>
        </Grid>
    );
}

export default RegisterForm;
