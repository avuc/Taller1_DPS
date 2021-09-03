import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Form = () => {
  let ropas = require("../json/ropa.json");
  const [ropa, setRopa] = useState(ropas[0].nombre);
  const [prendas, setPrendas]=useState([]);

  /*console.log(ropas[0].nombre);*/
  /*const nombres = ropas.map((ropa) => ropa.nombre);*/

  const handleClick=e=>{
    if(ropa!=null){
      setPrendas([...prendas,ropa])
    }
    else{
      alert("Seleccione una prenda")
    }
  }

  return (
    <>

    <div>{console.log(prendas)}</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <br />
        <Autocomplete
          options={ropas}
          getOptionLabel={(option) => option.nombre}
          ropa={ropa}
          onChange={(event, newRopa) => {
              setRopa(newRopa);
          }}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Ropas" variant="outlined" />
          )}
        />
        <button onClick={handleClick}>Agregar</button>
      </form>
    </>
  );
};

export default Form;
