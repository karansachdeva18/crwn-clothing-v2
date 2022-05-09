import { async } from '@firebase/util';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/user.context';
import {
  createUserAuthwithEmailAndPassword,
  createUserDocument,
} from '../../utils/firebase/firebase.util';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formfields, setFormFileds] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formfields;
  const {setCurrentuser} = useContext(UserContext);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFileds({ ...formfields, [name]: value });
  };
  const resetForm = () => {
    setFormFileds(defaultFormFields);
  };
  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formfields);
    if (password !== confirmPassword) return;
    try {
      const { user } = await createUserAuthwithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName });
      setCurrentuser(user)
      resetForm();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('email id already exist');
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onFormSubmit} method="POST">
        <FormInput
          label="Display name"
          type="text"
          required
          value={displayName}
          onChange={handleChange}
          name={'displayName'}
        />
        <FormInput
          label="Email"
          type={'email'}
          required
          value={email}
          onChange={handleChange}
          name={'email'}
        />
        <FormInput
          label={'Password'}
          type={'password'}
          required
          value={password}
          onChange={handleChange}
          name={'password'}
        />
        <FormInput
          label={'Confirm password'}
          type={'password'}
          required
          value={confirmPassword}
          onChange={handleChange}
          name={'confirmPassword'}
        />
        <Button type={'submit'}>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
