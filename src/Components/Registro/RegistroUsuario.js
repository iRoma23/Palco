import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Notification from "../Notification/Notification";

const RegistroUsuario = () => {
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('') 
  const [newName, setNewName] = useState('') 
  const [newEmail, setNewEmail] = useState('')
  const [message, setMessage] = useState({msg: null, success: null})

  const notifier = (msg, success) => {
    const msgObject = {
      msg: msg,
      success: success
    }
    setMessage(msgObject)
    setTimeout(() => {
      setMessage({msg: null, success: null})
    }, 5000)
  }

  const baseUrl = 'https://codigo-palco.herokuapp.com/api/user'

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newUsername, newPassword, newName, newEmail)
    const userObject = {
      username: newUsername,
      password: newPassword,
      name: newName,
      email: newEmail
    }
    axios.post(baseUrl, userObject)
      .then(response => 
        {
          console.log(response.data)
          notifier('Se registro exitosamente, ingrese sus credenciales en Login', true)
        })

    setNewUsername('')
    setNewPassword('')
    setNewEmail('')
    setNewName('')
  }

  const handleUsernameChange = e => setNewUsername(e.target.value)
  const handlePasswordChange = e => setNewPassword(e.target.value)
  const handleNameChange = e => setNewName(e.target.value)
  const handleEmailChange = e => setNewEmail(e.target.value)

  return (
    <>
      <Notification message={message} />
      <form className="fondo1" action="#" onSubmit={handleSubmit}>
        <div className="container">
          <div className="col-md-6 p-2 border border-secondary border-2 rounded">
            <div className="text-center">
              <h3>Registro de usuario</h3>
            </div>

            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Usuario
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                value={newUsername}
                onChange={handleUsernameChange}
              />
            </div>

            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                value={newPassword}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Nombres Completos
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Ej. Romario Jara"
                value={newName}
                onChange={handleNameChange} 
              />
            </div>

            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input 
                type="email"
                className="form-control"
                id="inputEmail4"
                value={newEmail}
                onChange={handleEmailChange} 
              />
            </div>

            <div className="col-md-4">
              <label for="inputState" className="form-label">
                Pais
              </label>
              <select id="inputState" className="form-select">
                <option selected>Perú</option>
                <option>Argentina</option>
                <option>Ecuador</option>
                <option>Uruguay</option>
                <option>Chile</option>
                <option>Bolivia</option>
                <option>Brasil</option>
              </select>
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Acepto los Términos y condiciones
                </label>
              </div>
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary rounded-pill btn-lg">
                Registrar
              </button>
            </div>

            <div className="form-text mb-3">
              <Link to="/login">Ya tengo una cuenta</Link>
            </div>
          </div>
        </div>
      </form>

    </>

  );
};

export default RegistroUsuario;
