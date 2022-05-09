import { async } from '@firebase/util';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/user.context';
import {
  createUserAuthwithEmailAndPassword,
  createUserDocument,
  signInAuthwithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.util';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formfields, setFormFileds] = useState(defaultFormFields);
  const { email, password } = formfields;
  const {setCurrentuser} = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFileds({ ...formfields, [name]: value });
  };
  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
  };
  const resetForm = () => {
    setFormFileds(defaultFormFields);
  };
  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formfields);
    try {
      const res = await signInAuthwithEmailAndPassword(email, password);
      setCurrentuser(res)
      resetForm();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onFormSubmit} method="POST">
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
        <div className="btn-container">
          <Button type={'submit'}>Sign In</Button>
          <Button
            type={'button'}
            buttonType={'google'}
            onClick={SignInWithGoogle}
          >
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
