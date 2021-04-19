import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThird from './SectionThird';
import SectionFour from './SectionFour';
import Footer from './Footer';
import PersonIcon from '@material-ui/icons/Person';




const HomeNav = () => {
    return (
        <>
           <nav className="navbar" >
            <a href="#top" className="navbar-brand"><h1>Youth Video</h1></a>
             <form className="form-inline">
                 <LanguageIcon className="langSign"/>
                 <select className="select">
             
                     <option>EN</option>
                     <option>Hindi</option>
                     <option>Gujrati</option>
                     <option>Tamil</option>
  
                </select>

                 <h5 className="videoSignIn">
                 <NavLink exact activeClassName="active_class" to='/signin' style={{textDecoration:'none', color:'#8197a4'}}> 
                 Sign In
                 </NavLink></h5>
                 <NavLink className="mobile" to='/signin'><PersonIcon /></NavLink>
             </form>
            </nav>

            <SectionOne />
            <SectionTwo />
            <SectionThird />
            <SectionFour />
            <Footer />
        </>
    )
};



export default HomeNav;