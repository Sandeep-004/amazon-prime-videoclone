import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const UserSecOne = () => {
return (
<>
<div className="contaner-fluid main_div" style={{height:'100vh'}}> 
	<div className='row'>
		<div id="col5_Div" className='col-5 editDiv1'style={{height:'100vh'}}>
			<h1 className="welcomeH1" style={{top:'3rem', left:'3rem'}}>Welcome to Youth Video</h1>
			<h3 className="welcomeH3" style={{top:'4rem', left:'3rem'}}>Join Youth to watch the latest movies, TV shows and award-winning Youth Originals</h3>
			<NavLink to="/signin">
				<button className="btn btn-primary freeTrial" style={{width:'18rem'}}>
					<span style={{fontSize: '1.1rem',fontWeight: '400'}}>Get 3 months of Youth at &#8360; 329</span>
				</button>
			</NavLink>
			<p className="paraUser">With any electronic payment method</p>
			
			<div className="hr_Div1"></div>
			<span style={{color:'#fff', position:'relative',top:'5rem',left:'10.5rem'}}>Or</span>  
			<div className="hr_Div2"></div>

            <NavLink to="/signin">
				<button className="btn btn-primary freeTrial" style={{width:'18rem'}}>
					<span style={{fontSize: '1.1rem',fontWeight: '400'}}>Start yuor 30-day free trial</span>
				</button>
			</NavLink>
            <p className="paraUser">With any credit card or select debit cards</p><br />
            <p className="paraUser" style={{left:'9rem'}}>You can also</p>

            <NavLink to="/signin">
				<button className="btn btn-primary freeTrial" style={{width:'18rem'}}>
					<span style={{fontSize: '1.1rem',fontWeight: '400'}}>Get a year of Youth at &#8360;999 </span>
				</button>
			</NavLink>
            <p className="paraUser">With all electronic payment methods and <br /> Pay on Delivery for select pin codes</p>
		</div>
		<div id="smallDiv" className="col-1 editDiv2" style={{height:'100vh'}}></div>
		<div className="col-6"></div>
	</div>
</div>
</>
)
};


export default UserSecOne;
