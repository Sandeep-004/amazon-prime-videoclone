import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import divImg1 from './Images/divImg1.png';
import divImg4 from './Images/divImg4.png';
import divImg5 from './Images/divImg5.png';

const SectionFour = () => {
    return (
        <>
          <div className = "container-fluid upper_Div">
                <div className="row parentRow">
                    <div className="col-4 childDiv">
                        <div className="divWithImg">
                            <img src={divImg1}  alt="divImg1" />
                        </div>
                        <div className="content">
                            <h2 className="contentH2">Watch anywhere</h2>
                            <p className="contentPara">Enjoy from the web or with the Youth Video app on your phone,
                             tablet, or select Smart TVs — on up to 3 devices at once.</p>
                        </div>
                    </div>

                    <div className="col-4 childDiv">

                    <div className="divWithImg">
                            <img src={divImg4}  alt="divImg1" />
                        </div>
                        <div className="content">
                            <h2 className="contentH2">Download and go</h2>
                            <p className="contentPara">Watch offline on the Youth Video app when you download titles to your 
                            iPhone, iPad, Tablet, or Android device.</p>
                        </div>

                    </div>

                    <div className="col-4 childDiv">

                    <div className="divWithImg">
                            <img src={divImg5}  alt="divImg1" />
                        </div>
                        <div className="content">
                            <h2 className="contentH2" style={{left:'8rem'}}>Data saver</h2>
                            <p className="contentPara">Control data usage while downloading &nbsp; 
                            and watching videos on select phones <br /> or tablets.</p>
                        </div>
                    </div>
                </div>
          </div>  
        </>
    )
}

export default SectionFour;