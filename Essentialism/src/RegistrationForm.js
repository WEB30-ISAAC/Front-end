//This component is a form used for creating a new pair of login credentials for a user that does not have an account yet
//form should have validation visible to user

//Form inputs should include:
//username
//password
//submit button

import React, { useState } from 'react';

const RegistrationForm = props => {
//   const [user, setUser] = useState({
//     email: '',
//     password: '',
//     passwordConfirm: '',
//     passError: ''
//   });

    console.log(props)
    const [user, setUser] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        passError: '',
        successMess: ''
    });

    const handleChanges = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user)
    };

    const submitForm = e => {
        e.preventDefault();
    }

  return (
    <div>
     <h5>Register New User</h5>
        <form onSubmit={submitForm}>
            <div className="namestuff">
                <label htmlFor="email"> E-Mail: </label>
                <div className="inputForm">
                    <input id='email' type='email' name='email' onChange={handleChanges} placeholder=' E-Mail' value={user.email} required />
                </div>
                
            </div>
            <div className="namestuff">
                <label htmlFor="Password"> Password: </label>
                <div className="inputForm">
                    <input id='Password' name='password' type='password' onChange={handleChanges} placeholder=' Password' value={user.password} required />
                </div>
            </div>
            <div className="namestuff">
                <label htmlFor="passwordConfirm"> Confirm  Password: </label>
                <div className="inputForm">
                    <input id='passwordConfirm' name='passwordConfirm' type='password' onChange={handleChanges} placeholder=' Confirm Password' value={user.passwordConfirm} required />
                </div>
            </div>
            <div>
                {user.passError}
                {user.successMess}
            </div>
        <div className='buttonL'>
          <button type='submit'> Sign-up </button>
        </div>
      </form>
    </div>
  );
}


export default RegistrationForm;
