import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logof from "../../Assets/images/logo-facebook.png";
import logog from "../../Assets/images/logo-google.png";
import NavbarVisit from "../Navbar/NavbarVisitante/NavbarVisit";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <>
    <div>
      <NavbarVisit />
    </div>
    <form action="#">
      <div className="container">
        <div className="col-sm-5 border border-secondary border-2 rounded p-3">
            <div className="text-center pb-2">
              <h3>Iniciar Sesión</h3>
              
            </div>
            <div className="col justify-content-center">
              <div className="col text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 my-1"
                >
                  <div className="row align-items-center">
                    <div className="col-2 d-md-block">
                      <img src={logof} width="30" alt="F" />
                    </div>
                    <div className="col text-center">Sign in with Facebook</div>
                  </div>
                </button>
              </div>
              <div className="col text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 my-1"
                >
                  <div className="row align-items-center">
                    <div className="col-2 d-md-block">
                      <img src={logog} width="30" alt="G" />
                    </div>
                    <div className="col text-center">Sign in with Google</div>
                  </div>
                </button>
              </div>
            </div>
          

          <div className="text-center mb-3">or</div>
          <div className="mb-3">
            <div className="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Correo Electronico"
              />
            </div>
            <div class="">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Contraseña"
              />
            </div>
            <div id="emailHelp" class="form-text mb-3">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="text-center">
              <Link to=""type="submit" className="btn btn-primary btn-lg">
                Ingresar
              </Link>
            </div>
            <div className="row text-center">
              <div id="emailHelp" className="form-text mb-3 col">
                ¿No tienes una cuenta?
              </div>
              <div id="emailHelp" className="form-text mb-3 col">
                <Link to="/registro-usuario">Registrate aquí</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
    
  );
};
<<<<<<< HEAD

=======
export default SignIn;
>>>>>>> a886836999c89eb07e9f490bd005e6e3cd4ba8da
