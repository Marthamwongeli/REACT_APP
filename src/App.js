import React, { useState } from "react";
import Login from "./Login";
import Users from "./Users";
import Modal from "./Modal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setModalIsOpen(false); 
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "block",
        padding: 30,
        margin: "auto",
      }}
    >
      {!isLoggedIn? (
        <>
          <h1 style={{ color: "rgb(59,123,59)" }}>You are new? WELCOME</h1>
          <button type="button" onClick={toggleModal}>
            Login
          </button>
          {modalIsOpen && (
            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
              <>
                <h1>Login Form</h1>
                <Login onLoginSuccess={handleLoginSuccess} />
              </>
            </Modal>
          )}
        </>
      ) : (
        <Users />
      )}
    </div>
  );
}

export default App;

