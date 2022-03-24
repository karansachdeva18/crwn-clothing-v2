import React from 'react'
import { signInWithGooglePopup , createUserDocument} from '../../utils/firebase/firebase.util'

const SignIn = () => {

        const loginwithGoogle =  async()=>{
            const {user}  = await signInWithGooglePopup();
           const userDocRef =  createUserDocument(user)
        }

  return (
    <div>SignIn page
        <button onClick={loginwithGoogle}>sign in with google popup</button>
    </div>
  )
}

export default SignIn