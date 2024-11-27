import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const SignIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth();
    const navigate = useNavigate();


    const onEmailChange = (event) => setEmail(event.target.value) 
    const onPasswordChange = (event) => setPassword(event.target.value) 


    const onSignIn = () =>{

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log('User signed in');
                const user = userCredentials.user;
              // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
            }).catch((error) => {
                // Handle error.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('There was an error signin in');
                console.log(error);
            });

            setEmail('')
            setPassword('')
            navigate('/blogs/:uid/posts')
    }


    return (
        <div className="sign_up_container">
            <h1 className="page_header_container">Sign In</h1>

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
                        <a href="/sign_up">Don't have an account, Sign Up</a>
                    </div>
                    
                    <div className="post_input_button">
                        <Button                             
                            type="primary" 
                            size="large" 
                            onClick={onSignIn}
                        >
                            Sign In
                        </Button>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default SignIn;