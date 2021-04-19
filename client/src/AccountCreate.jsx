import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useHistory } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountCreate = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        cpassword:"" 
    })

    let name, value; 
    const handleChange = (e) => {
        console.log(e);
        name  = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    
    const postData = async (e) => {
        e.preventDefault();

        const { name, email, password, cpassword } = user;

        const res = await fetch('/userprofile', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        });

        const data = await res.json();
        
        if(res.status===422 || !data) {
            toast.error("Invalid Resgistration");
            console.log("Invalid Resgistration");
        }else {
            toast.success("Resgistration Successful");
            console.log("Resgistration Successful");

            history.push("/signin")
        }
    }

    return (
       <>
            <div className="container-fluid createAcc">
                <h1 className="createAccH1">Youth Video</h1>
                <div className="createForm"  style={{height:'90vh'}}>
                    <form method = "POST">
                        <legend className="legendSign" style={{top:'0.1rem'}}>Create account </legend>
                        <label className="formLabel" style={{top:'0.1rem'}}>Your name</label><br />
                         <input className="formInput" style={{top:'0.1rem'}} 
                         value={user.name} onChange={handleChange} name="name"
                         placeholder="Enter name"/><br /> 

                         <label className="formLabel" style={{top:'0.1rem'}}>Email </label><br />
                         <input className="formInput" style={{top:'0.1rem'}} 
                         value={user.email} onChange={handleChange} name="email"
                         placeholder="Enter Email"/><br />

                         <label className="formLabel" style={{top:'0.1rem'}}>Password</label>  
                         <input className="formInput" type="password" style={{top:'0.1rem'}} 
                         value={user.password} onChange={handleChange} name="password"
                         placeholder="At least 6 characters"/>
                         <p className="createPara">
                         <span style={{color: '#1597bb'}}> <InfoIcon /> </span>
                         Passwords must be at least 6 characters. </p>
                         <label className="formLabel" style={{top:'-1rem'}}>Re-enter password</label>  
                         <input className="formInput" style={{top:'-1rem'}} type="password" 
                         value={user.cpassword} onChange={handleChange} name="cpassword"
                         placeholder="Enter password again"/>
                         
                             <input id="createAccInput" onClick={postData} className="inputClass" type="submit" style={{top:'0.1rem'}} value="Create your Youth account"/>
                         
                        <hr/><p className="paraForNew" style={{top:'0.1rem'}}>
                            Already have an account? 
                         <NavLink to="/signin">Sign-In</NavLink> 
                         </p>
                        <hr />

                    </form>
                </div>
            </div>
            <ToastContainer />
       </>
    )
}


export default AccountCreate;