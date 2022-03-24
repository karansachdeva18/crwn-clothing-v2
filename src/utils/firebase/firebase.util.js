// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBe2BnIvHESAI3zhxQzLzkfgGgIieTFcIw',
  authDomain: 'crwn-clothing-db-0987.firebaseapp.com',
  projectId: 'crwn-clothing-db-0987',
  storageBucket: 'crwn-clothing-db-0987.appspot.com',
  messagingSenderId: '976515469889',
  appId: '1:976515469889:web:372b754e07f996c9102cc0',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider);
const db = getFirestore();
  export const createUserDocument = async (userAuth) =>{
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    if(!(userSnapshot.exists())){
      const {displayName, email} = userAuth;
      const createDate = new Date();
      try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createDate
      })
    
    }
      catch(err){
        console.log('error with user creation')
      }

    }
    return userDocRef;
  }

