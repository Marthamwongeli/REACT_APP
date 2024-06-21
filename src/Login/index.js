import './index.css';
import { useState } from 'react';
import {login} from './utils';
import { Link } from 'react-router-dom';




const Login= ()=>{
    // help you remember
    const [username,setUsername] = useState('');
    const [password,setPassword]= useState('');


    const handleSubmit = async(event) =>{
        event.preventDefault();
        const results = await login({username,password});
        navigate('./users')
        console.log({results});
    }
    return(
        <form onSubmit={handleSubmit}>
            
            <h2>Login</h2>
            <Link to="/users"> <button type="submit">Login</button> </Link>
            <input placeholder="Enter username" type="text" onChange={(event) => setUsername(event.target.value)}/>
            {/* to help us remember what the user inputed */}
            <br/>
            <input placeholder="Enter password" type="password" onChange={(event) => setPassword(event.target.value)}/>
            <br/>

            

        </form>
    )
}

export default Login;


