import React  from 'react';
import Logo from "../img/logo.png";
import {Link} from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <img src={Logo} alt=""/>
                </div>
                <div className='links'>
                    <Link className='link' to ="/?cat=research">
                        <h6>Research</h6>
                    </Link>
                    <Link className='link' to ="/?cat=Competition">
                        <h6>Competition</h6>
                    </Link>
                    <Link className='link' to ="/?cat=Internship">
                        <h6>Internship</h6>
                    </Link>
                    <Link className='link' to ="/?cat=sports">
                        <h6>Sports</h6>
                    </Link>
                    <Link className='link' to ="/?cat=arts">
                        <h6>Arts</h6>
                    </Link>
                    <span>John</span>
                    <span>Logout</span>
                    <span className='write'>
                        <Link className='link' to ="/write">Add</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;