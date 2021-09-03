import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Form = () => {
  let ropas = require("../json/ropa.json");
  const [nombre, setNombre] = useState(ropas[0].nombre);
  const [precio, setPrecio] = useState(ropas[0].precio);

  /*console.log(ropas[0].nombre);*/
  const nombres = ropas.map((ropa) => ropa.nombre);

  const handleChange = (e) => {
    console.log(nombre + "---" + precio);
  };

  return (
    <>
    <div>{console.log(nombre + "---" + precio)}</div>
    <div>{console.log(nombre)}</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <br />
        <Autocomplete
          options={ropas}
          getOptionLabel={(option) => option.nombre}
          nombre={nombre}
          onChange={(event, newNombre) => {
            setNombre(newNombre);
          }}
          precio={precio}
          onInputChange={(event, newPrecio) => {
            setPrecio(newPrecio);
          }}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Ropas" variant="outlined" />
          )}
        />
        <button>Agregar</button>
      </form>
    </>
  );
};

export default Form;
