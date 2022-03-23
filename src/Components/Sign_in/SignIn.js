import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logof from "../../Assets/images/logo-facebook.png";
import logog from "../../Assets/images/logo-google.png";

export const SignIn = () => {
  return (
    <form action="#">
      <div className="container">
        <div className="col-sm-5">
            <div className="text-center fs-4 mb-3">
              Iniciar Sesión
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
              <button type="submit" className="btn btn-primary btn-lg">
                Ingresar
              </button>
            </div>
            <div className="row text-center">
              <div id="emailHelp" className="form-text mb-3 col">
                ¿No tienes una cuenta?
              </div>
              <div id="emailHelp" className="form-text mb-3 col">
                <a href="#">Registrate aquí</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SignIn;
