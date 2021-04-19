import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const SectionOne = () => {
    return (
        <>
            <div className="contaner-fluid main_div"> 
                            <div className='row parentOne'>
                                <div className='col-5 editDiv1'>
                                <h1 className="welcomeH1" style={{left:'3rem'}}>Welcome to Youth Video</h1>
                                <h3 className="welcomeH3" style={{left:'3rem'}}>Join Youth to watch the latest movies, TV shows and award-winning Youth Originals</h3>
                                <NavLink to="/signin">
                                <button className="btn btn-primary freeTrial" style={{ top:'10rem'}}>
                                <span id="btnSpan" style={{fontSize: '1.1rem',fontWeight: '400'}}>Start your 30-day free trial</span>
                                </button>
                                </NavLink>
                            </div>
                            <div className="col-1 editDiv2"></div>
                            <div className="col-6 editDiv3"></div>
                         </div>
                    </div>
        </>
    )
};


export default SectionOne;
