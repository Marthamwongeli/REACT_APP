
import Login from "./Login";
import Users from "./Users";
import { useState } from "react";
import Modal from "./Modal";



function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleLoginSuccess = ()=>{
    setIsLoggedIn(true)
    setOpen(false);
  };

  return(
    <div
    style={{
      textAlign: "center",
      display:"block",
      padding : 30,
      margin: "auto"
    }} 
    >
      {!isLoggedIn ?(
        <>
      <h1 style={{color:"rgb(59,123,59)"}}>Welcome</h1>
      <h4>Login to view your details</h4>
      <button type="button" onClick={handleOpen}>Login</button>
      <Modal isOpen ={open} onClose= {handleClose}>
      <>
      <h1>Login Form</h1>
      <Login onLoginSuccess={handleLoginSuccess}/>
      </>
      </Modal>
      </>
      ):(
      <Users/>

      )}


    </div>
  );

}

export default App;
