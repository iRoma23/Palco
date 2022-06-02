import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const RegistroPropietarioPage = () => {
  const [OwnerList, setOwnerList] = React.useState([]);
  const [newEmail, setNewEmail] = React.useState([]);
  const [newName, setNewName] = React.useState([]);
  const [newLast_name, setNewLast_name] = React.useState([]);
  const [newDni, setNewDni] = React.useState([]);
  const [newPhone, setNewPhone] = React.useState([]);

  function addOwner() {
    fetch("https://palco-app.herokuapp.com/api/owner", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: newEmail,
        name: newName,
        last_name: newLast_name,
        dni: newDni,
        phone: newPhone
       })
       }).then((response)=>{
        return response.json()
      }).then((data) =>{
        getOwner()
    })
  }
  function handleNewEmailChange(event) {
    setNewEmail(event.target.value);
  }
  function handleNewNameChange(event) {
    setNewName(event.target.value);
  }
  function handleNewLast_nameChange(event) {
    setNewLast_name(event.target.value);
  }
  function handleNewDniChange(event) {
    setNewDni(event.target.value);
  }
  function handleNewPhoneChange(event) {
    setNewPhone(event.target.value);
  }
  function getOwner() {
    fetch("https://palco-app.herokuapp.com/api/owner")
      .then((response) => response.json())
      .then((data) => setOwnerList(data));
  }
  React.useEffect(() => {
    getOwner();
  }, []);

  return (
    <>
      <form action="#" className="formulario ">
        <div className="container ">
          <div className="col-sm-6">
            <div className="text-center pb-2">
              <h3>Registrar Propietario</h3>
            </div>
            <div className="mb-3">
              <div className="mb-3">
                <input
                  id="email"
                  value={newEmail}
                  onChange={handleNewEmailChange}
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Correo Electronico"
                  // value = {email}
                />
              </div>
              <div class="mb-3">
                <input
                  id="nombres"
                  value={newName}
                  onChange={handleNewNameChange}
                  type="text"
                  class="form-control"
                  placeholder="Nombres"
                  // value = {password}
                />
              </div>

              <div class="mb-3">
                <input
                  id="apellidos"
                  value={newLast_name}
                  onChange={handleNewLast_nameChange}
                  type="text"
                  class="form-control"
                  placeholder="Apellidos"
                  // value = {password}
                />
              </div>

              <div class="mb-3">
                <input
                  id="dni"
                  value={newDni}
                  onChange={handleNewDniChange}
                  type="text"
                  class="form-control"
                  placeholder="Dni"
                  // value = {password}
                />
              </div>
              <div class="mb-3">
                <input
                  id="telefono"
                  value={newPhone}
                  onChange={handleNewPhoneChange}
                  type="number"
                  class="form-control"
                  placeholder="Telefono"
                  // value = {password}
                />
              </div>

              <div class="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label
                  className="form-check-label color-text bold"
                  for="gridCheck"
                >
                  Acepto los Términos y condiciones
                </label>
              </div>

              <div className="text-center">
                <Link
                  to="/registro_palco"
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  Registrar
                </Link>
              </div>
              <button
                onClick={addOwner}
                className="text-center, btn btn-primary btn-lg"
              >
                Registrarnew
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="text-center">
        <h2>LISTA DE PROPIETARIOS:</h2>
        <ul>
          {OwnerList.map((owner) => {
            return (
              <li>
                {owner._id}, {owner.name}, {owner.email}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RegistroPropietarioPage;
