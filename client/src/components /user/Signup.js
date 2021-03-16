import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


const SignupSchema = yup.object().shape({
    userName: yup.string().required(),
    email: yup.string().email().required(),
    password_digest: yup.string().required('Password is required'),
    password_confirmation: yup.string().oneOf([yup.ref('password_digest'),null],'Passwords must match')
});

export default function Signup() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SignupSchema)
    });

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label>User Name: </label>
            <input type="text" name="userName" ref={register} />
            {errors.UserName && <p>{errors.userName.message}</p>}

            <label>Email: </label>
            <input type="text" name="email" ref={register} />
            {errors.email && <p>{errors.email.message}</p>}

            <label>Password: </label>
            <input type="password" name="password_digest" ref={register}/>
            {errors.password_digest && <p>{errors.password_digest.message}</p>}

            <label>Password Confirmation</label>
            <input type="password" name="password_confirmation" ref={register}/> 
            {errors.password_confirmation && <p>{errors.password_confirmation.message}</p>}
             
            <input type="submit"/>
        </form>
    )

}

