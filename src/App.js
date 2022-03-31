import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Register from './pages/authPage/register/register';
import Header from './header/header';
import SignIn from './pages/authPage/login/sign-in';
import Profile from './pages/profilePage/profile';


class App extends React.Component {
  constructor(){
    super();

    this.state= {
      currentUser: null
    };
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
