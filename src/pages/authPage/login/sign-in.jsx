import React from 'react';
import './sign-in.styles.scss';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../../../form-label/form-label';
import CustomButton from '../../../custom-button/custom-button';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            displayName: '',
            PhoneNumber: ''
        }
    }

    handleSubmit= async event => {
        event.preventDefault();
        const {displayName, PhoneNumber}= this.state;
        console.log(event);
        try{
            this.setState({displayName: '', PhoneNumber: ''})
        }catch(error){
            console.log(error);
        }

        let navigate= useNavigate();
        navigate('/profile');
    }

    handleChange= event => {
        const {value, name}= event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your name and mobile number</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type= "text"
                        name="displayName"  
                        value={this.state.displayName}
                        label="name"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="number"
                        name="PhoneNumber"
                        value={this.state.PhoneNumber}
                        label="Phone Number"
                        handleChange={this.handleChange}
                        required
                    />

                    
                    <div className='button'>
                    <Link to={'/profile'}>
                        <CustomButton type="submit">Sign in</CustomButton>
                    </Link>
                        <span className='register'>New user? <Link to={'/'}>Register</Link></span>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;