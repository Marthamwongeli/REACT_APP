
import { Routes , Route, Link} from 'react-router-dom';
import Login from "./Login";
import Users from "./Users";
export const Introduction = () =>{ 
  return(
    <h2>What is React?</h2>
  );
  
};
const App = () =>{
  return(
    <div>
    <Login/>
    <h1>My app</h1>
    <nav>
      <Link to="./login">Login</Link>
    </nav>
    <Users/>
    <Routes>
      <Route path='./login' element={<Login />}/>
      <Route path='/users' element={<Users/>}/>
    </Routes>
    </div>
  )
}
export default App;           
