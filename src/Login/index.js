import './index.css';
import { useState } from 'react';
import { login } from './utils';


function Login ({onLoginSuccess}){

const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
const [modalIsOpen, setModalIsOpen] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false)

const handleSubmit = async (event) => {
event.preventDefault();
const results = await login ({username,password})
onLoginSuccess();


if (results.token){
    localStorage.setItem('token', results.token)
    setIsLoggedIn(true)
    setModalIsOpen(false)
    }
};

return(
    <div>
   
    <form onSubmit={handleSubmit}>
        {/* <h2>Login</h2> */}
        <input placeholder="Enter Username" type="text" onChange={(event)=> setUsername(event.target.value)}/>
        <br/>
        <input placeholder="Enter Password" type="password" onChange={(event)=> setPassword(event.target.value)}/>
        <br/>
        <button type="submit">Login</button>

    </form>
    
    </div>

);

}

export default Login;
