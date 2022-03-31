import React from 'react'
import FormInput from '../../../form-label/form-label';
import CustomButton from '../../../custom-button/custom-button';
import './register.styles.scss';
import { Link } from 'react-router-dom';


class Register extends React.Component{
    constructor(){
        super();
        this.state={
            displayName: '',
            email: '',
            PhoneNumber: '',
            standard: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, standard, PhoneNumber}= this.state;

        try{
            

            this.setState({
                displayName: '',
                email: '',
                standard: '',
                PhoneNumber: ''
            })

        }catch(error){
            console.log(error);
        }
    }

    handleChange = event => {
        const {name, value}= event.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Register with your name and mobile number</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='number'
                        name='standard'
                        value={this.state.standard}
                        onChange={this.handleChange}
                        label='class'
                        required
                    />
                    <FormInput
                        type='number'
                        name='PhoneNumber'
                        value={this.state.PhoneNumber}
                        onChange={this.handleChange}
                        label='Phone Number'
                        required
                    />
                    <div className='button'>
                        <CustomButton type='submit'>SIGN UP</CustomButton>
                        <span className='login'>Already have an account? <Link to={'/login'}>Click here</Link></span>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;