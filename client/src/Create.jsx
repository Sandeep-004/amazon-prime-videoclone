import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {

    const history  = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        
        const data = res.json();
        
        if(res.status === 400 || !data) {
            toast.error("Invalid Credentials");
        }else {
            toast.success("Login Successfull");

            history.push("/userprofile");
        }
    }

    return (
       <>
            <div className="container-fluid createAcc">
                <h1 className="createAccH1">Youth Video</h1>
                <div className="createForm">
                    <form method="POST">
                        <legend className="legendSign">Sign-In </legend>
                        
                         <label className="formLabel">Email or mobile phone number</label><br />

                         <input value={email} onChange={(e)=> setEmail(e.target.value)} 
                         className="formInput" placeholder="Enter Email or mobile"/><br />

                         <label className="formLabel">Password</label> &nbsp; &nbsp; 
                         <span className="formLabel" style={{ left:'6rem', fontSize:'.8rem'}}>
                         <NavLink to="/">Forgot your password?</NavLink></span><br />

                         <input value={password} onChange={(e)=> setPassword(e.target.value)} 
                         className="formInput" type="password" placeholder="Enter Password"/><br />

                         <input onClick={loginUser} className="inputClass" type="submit" value="Sign-In"/>
                        <hr/><p className="paraForNew">New to Youth?</p>
                        <NavLink to="/accountCreate">
                        <input className= "inputClassCreate" type="submit" value="Create your Youth account"/>
                        </NavLink>
                        <hr />

                    </form>
                </div>
            </div>
        <ToastContainer />
       </>
    )
}


export default Create;