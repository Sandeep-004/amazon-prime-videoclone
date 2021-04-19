import React, { useEffect, useState } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserSecOne from './UserSecOne';
import SectionTwo from './SectionTwo';
import SectionThird from './SectionThird';
import SectionFour from './SectionFour';
import Footer from './Footer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';

const UserProfile = () => {

    const [userData, setUserData] = useState({});

    const history = useHistory();

    const calluserProfilePage = async () => {
        try {

            const res = await fetch('/userProfile',  {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            
            const data = await res.json();
            console.log(data);
            setUserData(data);

            if(!res.status === 200) {
                    const error = new Error(res.error);
                    throw error; 
            }

        } catch (err) {
            console.log(err);
            history.push('/signin');
        }
    }

    useEffect( () => {
        calluserProfilePage();

    }, []);

    return (
        <>
            
    <nav className="navbar navbar-expand-lg navbar-light ">
        <a href="#top" className="navbar-brand"><h1>Youth Video</h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <AccountCircleIcon/>
            </button>

    <form method="GET" className="form-inline">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
             <ul className="navbar-nav">
                <li className="nav-item">
                    <LanguageIcon className="langSign"/>
                <select className="select">
             
                    <option>EN</option>
                    <option>Hindi</option>
                    <option>Gujrati</option>
                    <option>Tamil</option>
  
               </select>
                </li> 
                
                <li className="nav-item">
                    <AccountCircleIcon className="userLogo"/>
                </li>
                <li className="nav-item">
                    <h5 className="userSignIn" > {userData.name}</h5>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                    <NavLink to="/logout" style={{textDecoration:'none'}}><h5 id="logout"  className="userSignIn">
                        Logout
                    </h5></NavLink>
                </li>
            </ul>
        </div>
    </form>
</nav>
            <UserSecOne />
            <SectionTwo />
            <SectionThird />
            <SectionFour />
            <Footer />
        </>
    )
};



export default UserProfile;