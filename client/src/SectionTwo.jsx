import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const SectionTwo = () => {
    return (
        <>

             <div className="contaner-fluid main_divTwo"> 
                            <div className='row'>
                            <div className="col-6"></div>
                           
                                <div id="editID" className='col-6 editDiv1' style={{height:'60vh'}}>
                                <h1 id="IDH1" className="welcomeH1" style={{top:'5rem'}}>Great Entertainment</h1>
                                <h3 id="IDH3" className="welcomeH3" style={{top: '6rem', wordSpacing: '0'}}>With your Youth membership, you have access to exclusive Youth Originals, 
                                blockbuster Bollywood movies, regional movies and more.</h3>
                               <NavLink to="/signin"> 
                                    <button id="btnTwo" className="btn btn-primary freeTrial" style={{left:'0', top:'8rem'}}>
                                        <span style={{fontSize: '1.1rem',fontWeight: '400'}}>Get Started</span>
                                    </button>
                                </NavLink>
                            </div>
                         </div>
                    </div>
        </>
    )
};


export default SectionTwo;