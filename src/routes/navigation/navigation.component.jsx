import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.util';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentuser } = useContext(UserContext);
  console.log(currentUser);
  const signOutHandler = async ()=>{
    await signOutUser()
    setCurrentuser(null)
  }
  return (
    <>
      <div className="navigation">
        <div className="log-container">
          <Link to="/">
            <CrwnLogo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <div className="nav-link">
            <Link to="/shop">SHOP</Link>
          </div>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
          ) : (
            <div className="nav-link">
              <Link to="/auth">SIGN IN</Link>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
