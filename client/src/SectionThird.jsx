import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const SectionThird = () => {
    return (
       <>
             <div className="contaner-fluid main_divThree"> 
                            <div className='row'>
                        
                                <div id="thirdSecID" className='col-6 editDiv1' style={{height:'60vh'}}>
                                <h1 className="welcomeH1" style={{top:'5rem', left:'2rem'}}>One membership,
                                 many benefits</h1>
                                <h3 className="welcomeH3" style={{top: '6rem', left:'2rem', wordSpacing: '0'}}>
                                Your Youth membership now also includes ad-free music along with unlimited free, 
                                fast delivery on eligible items, exclusive access to deals & more.</h3>
                                <NavLink to="/signin">
                                   <button id="btnThree" className="btn btn-primary freeTrial" style={{left:'2rem', top:'8rem'}}>
                                        <span style={{fontSize: '1.1rem', fontWeight: '400'}}>Get Started</span>
                                    </button>
                                </NavLink>
                            </div>

                            <div className="col-6 imgDiv"></div>
                         </div>
                    </div>
        </>
       
    )
}


export default SectionThird;