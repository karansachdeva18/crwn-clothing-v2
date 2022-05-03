import { getRedirectResult } from 'firebase/auth';
import React, { useEffect } from 'react';
import SignInForm from '../../Compnents/sign-in-form/sign-in-form.component';
import SignUpForm from '../../Compnents/sign-up-form/sign-up-form.component';
import {
  auth,
} from '../../utils/firebase/firebase.util';
import './authentication.styles.scss'


const Authentication = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      console.log(response);

      if (response) {
        // const userDocRef = await createUserDocument(response.user)
      }
    })();
  }, []);

  return (
    <>
      <div className='authentication-container'>
        <SignInForm />

        <SignUpForm />
      </div>
    </>
  );
};

export default Authentication;
