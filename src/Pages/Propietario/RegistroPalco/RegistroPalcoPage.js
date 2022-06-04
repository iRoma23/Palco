import React from "react";
import { Link } from "react-router-dom";
import palco from "./img/palco.jpg";

const RegistroPalcoPage = () => {
  const [PrivateBoxList, setPrivateBoxList] = React.useState([]);
  const [newBoxNumber, setNewBoxNumber] = React.useState([]);
  const [newZona, setNewZona] = React.useState([]);
  const [newDetail, setNewDetail] = React.useState([]);

  function addPrivatebox(e){
    e.preventDefault()
    fetch("https://palco-app.herokuapp.com/api/privatebox", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        boxnumber: newBoxNumber,
        zone: "newZona",
        detail: newDetail,
      }),
    })
    .then((response) => {
      console.log("registro exitoso")
      return response.json();
      
    })
    .then((data) => {
      getPrivateBox();
      console.log("mostrando nueva data")
      });
  }
  function handleNewBoxNumberChange(event) {
    setNewBoxNumber(event.target.value);
  }
  function handleNewZonaChange(event) {
    setNewZona(event.target.value);
  }
  function handleNewDetailChange(event) {
    setNewDetail(event.target.value);
  }
  // function handleNewZona2Change(event) {
  //   setNewZona(event.target.value);
  // }
  // function handleNewZona3Change(event) {
  //   setNewZona(event.target.value);
  // }
  // function handleNewZona4Change(event) {
  //   setNewZona(event.target.value);
  // }

  function getPrivateBox() {
    fetch("https://palco-app.herokuapp.com/api/privatebox")
      .then((response) => response.json())
      .then((data) => setPrivateBoxList(data));
  }
  React.useEffect(() => {
    getPrivateBox();
  }, []);

  return (
    <>
      <form onSubmit={(e)=>addPrivatebox(e)}>
        <div className="card-body">
          <h3 className="text-muted p-1 text-center">
            INGRESA LOS DATOS Y UBICACIÓN DE TU PALCO
          </h3>
        </div>
        <div className="card">
          <div className="card-body row g-0">
            <div className=" card-body col-md-6 ">
              <div className="text-center">
                <h3 className="card-title">ESTADIO NACIONAL</h3>
              </div>
              <img
                src={palco}
                className="img-fluid rounded img-thumbnail"
                alt="Imagen Estadio"
              />
            </div>

            {/* aca va el formlario */}
            <div className=" col-md-6">
              <div className="card-body">
                <h3 className="text-center">REGISTRA TU PALCO</h3>
              </div>
              <div className="card p-3">
                <div className="">
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                  >
                    <option selected>Seleccione Estadio</option>
                    <option value="1">Estadio Nacional</option>
                    <option value="2">Estadio Monumental</option>
                    <option value="3">Monumental UNSA</option>
                    <option value="4">Alejandro Villanueva</option>
                    <option value="5">Inca Garcilazo de la Vega</option>
                    <option value="6">Estadio Mansiche</option>
                  </select>
                  {/* Aca va los checkbox */}
                  <div>
                    <fieldset>
                      <legend>Selecciona la ubicación de tu Palco:</legend>
                      <div>
                        <input
                          type="radio"
                          id="norte"
                          name="zona"
                          // value={newZona}
                          // onChange={handleNewZonaChange}
                        />
                        <label for="norte">Zona Norte</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="oriente"
                          name="zona"
                          value={newZona}
                          onChange={handleNewZonaChange}
                        />
                        <label for="oriente">Zona Oriente</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="poniente"
                          name="zona"
                          // value={newZona}
                          // onChange={handleNewZona3Change}
                        />
                        <label for="poniente">Zona Poniente</label>
                      </div>
                      <div>
                        <input 
                          type="radio" 
                          id="sur" 
                          name="zona" 
                          // value={newZona}
                          // onChange={handleNewZona4Change} 
                        />
                        <label for="sur">Zona Sur</label>
                      </div>
                    </fieldset>
                  </div>
                  <br/>
                  <input
                    type="text"
                    class="form-control"
                    value={newBoxNumber}
                    onChange={handleNewBoxNumberChange}
                    id="exampleFormControlInput1"
                    placeholder="Numero de Palco"
                  />
                  <br />
                  <input
                    type="text"
                    class="form-control"
                    value={newDetail}
                    onChange={handleNewDetailChange}
                    id="exampleFormControlInput1"
                    placeholder="Detalle"
                  />
                </div>

                <div className="card-body">
                  {/* Aca va el Boton */}
                  <div className=" gap-2 d-md-flex justify-content-md-end mt-2">
                    <Link
                      type="button"
                      class="btn btn-primary"
                      to="/registro_propietario"
                    >
                      Atras
                    </Link>
                    <Link
                      type="button"
                      class="btn btn-primary "
                      to="/registro_exitoso"
                      // onClick={addPrivatebox}
                    >
                      Registrar
                    </Link>
                  </div>
                  <button type="submit">Registrar2</button>
                  
                  {/* <p className="text-center ">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
       <div className="text-center">
        <h2>LISTA DE PALCOS:</h2>
        <ul>
          {PrivateBoxList.map((box) => {
            return (
              <li>
                {box._id}, {box.zone}, {box.detail}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RegistroPalcoPage;
