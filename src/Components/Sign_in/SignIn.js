import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logof from "../../Assets/images/logo-facebook.png";
import logog from "../../Assets/images/logo-google.png";
import "./signin.css"
// react-router-dom
import { Link, useNavigate } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { loginCliente } from "../../features/userSlice";

export const SignIn = () => {
  // Hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  let navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginCliente({
      email: email,
      password: password,
      loggedIn: 'cliente'
    }));
    navigate('/home-propietario')
  }

  return (
    <>
    
      <form className="fondo1" action="#" onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
          <div className="fondo col-sm-5 rounded p-2">
              <div className="text-center pb-2">
                <h2 className="tittle fw-bold">Iniciar Sesión</h2>
                
              </div>
              <div className="col justify-content-center">
                <div className="col text-center">
                  <button
                    type="submit"
                    className="btn btn-outline-primary w-100 my-1 bgredes "
                  >
                    <div className="row align-items-center">
                      <div className="col-2 d-md-block">
                        <img src={logof} width="30" alt="F" />
                      </div>
                      <div className="col text-center"><a className="text-decoration-none" href="https://www.facebook.com/"> Sign in with Facebook</a></div>
                    </div>
                  </button>
                </div>
                <div className="col text-center">
                  <button
                    type="submit"
                    className="btn btn-outline-primary w-100 my-1  bgredes"
                  >
                    <div className="row align-items-center">
                      <div className="col-2 d-md-block">
                        <img src={logog} width="30" alt="G" />
                      </div>
                      <div className="col text-center"><a className="text-decoration-none" href="https://myaccount.google.com/">Sign in with Google</a></div>
                    </div>
                  </button>
                </div>
              </div>
            

            <div className="text-center mb-3 fs-5 color-text">or</div>
            <div className="mb-3">
              <div className="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp" 
                  placeholder="Email o Username" 
                  value = {email}
                  onChange = {(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Contraseña" 
                  value = {password} 
                  onChange = {(e) => setPassword(e.target.value)}
                />
              </div>
              <div id="emailHelp" class="color-text form-text mb-3">
                <a href="#" className="text-reset">¿Olvidaste tu contraseña?</a>
              </div>
              <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Ingresar
                  </button>
              </div>
              <div className="row text-center">
                <div id="emailHelp" className="color-text form-text mb-3 col">
                  ¿No tienes una cuenta?
                </div>
                <div id="emailHelp" className="color-text form-text mb-3 col">
                  <Link className="text-reset" to="/registro-usuario">Registrate aquí</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default SignIn;