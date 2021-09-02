import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Form = () => {
  let ropas = require("../json/ropa.json");
  console.log(ropas[0].nombre);
  const nombres = ropas.map((ropa) => ropa.nombre);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <br />
        <Autocomplete
          options={nombres}
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
