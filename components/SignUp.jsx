import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth();
    const navigate = useNavigate();

    const onEmailChange = (event) => setEmail(event.target.value) 
    const onPasswordChange = (event) => setPassword(event.target.value) 

    const onSignUp = () =>{
        console.log('On Sign Up')
        console.log(email, password)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
              })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                  alert('The password is too weak.');
                } else {
                  alert(errorMessage);
                }
                console.log('There was an error signin up');
                console.log(error);
            });     
        
        setEmail('')
        setPassword('')
        navigate('/sign_in')
    }


    return (
        <div className="sign_up_container">
            <h1 className="page_header_container">Sign Up</h1>

            <div className="sign_up_container_inputs" style={{marginTop:'20px'}}>
                <div className="post_input_container">
                    <div className="post_input_title">
                        <h2>Email</h2>
                    </div>

                    <div className="post_input">
                        <Input 
                            placeholder="Email"   
                            onChange={onEmailChange}                                                       
                        />
                    </div>
                </div>

                <div className="post_input_container">
                    <div className="post_input_title">
                        <h2>Password</h2>
                    </div>

                    <div className="post_input">
                        <Input.Password 
                            placeholder="Password" 
                            onChange={onPasswordChange}                                                       

                        />
                    </div>
                </div>

                <div style={{ width: '100%'}}>
                    <div style={{ float: 'left'}}>
                        <a href="#">Already have an account, Sign In</a>
                    </div>
                    
                    <div className="post_input_button">
                        <Button                             
                            type="primary" 
                            size="large" 
                            onClick={onSignUp}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default SignUp;