import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
        <div className='navigation'>
            <div className='log-container'>
                <Link to='/'>
                    <CrwnLogo className='logo' />
                </Link>
            </div>
            <div className='nav-links-container'>
                <div className='nav-link'>
                    <Link to='/shop'>SHOP</Link>
                </div>
                <div className='nav-link'>
                    <Link to='/auth'>SIGN-IN</Link>
                </div>
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default Navigation