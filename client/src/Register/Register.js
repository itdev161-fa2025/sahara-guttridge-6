import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Register = ({ authenticateUser}) => {
    const navigate = useNavigate();
    const[userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    
    });
    const [errorData, setErrorData] = useState({errors: null});
    const{name, email, password, passwordConfrim } = userData;
    const{ errors}= errorData;
}

const registerUser = async() => {
    if(password !== passwordConfirm){
        console.log('Passwords do not match');
    }
    else{
        const newUser ={
            name: name,
            email: email,
            password: password
        }
        try{
            const config ={
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(newUser);
            const res = await axios.post('http://localhost:3001/api/users', body, config);

            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch(error){
            localStorage.removeItem('token');
            setErrorData({
                ...errors,
                errors: error.reponse.data.errors
            })
        }
        authenticateUSer();
        }
       
}

<><div>
    <button onClick={() => registerUser()}>Register</button>
</div><div>
        {errors && errors.map(error => <div key={error.msg}>{error.msg}</div>)}
    </div></>