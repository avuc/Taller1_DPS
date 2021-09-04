import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Prenda from "./Prenda";

const Form = () => {
  let ropas = require("../json/ropa.json");
  const [prenda, setPrenda] = useState(ropas[0].nombre);
  const [prendas, setPrendas]=useState([]);

  /*console.log(ropas[0].nombre);*/
  /*const nombres = ropas.map((ropa) => ropa.nombre);*/

  const handleClick=e=>{
    if(prenda!=null){
      setPrendas([...prendas,prenda])
    }
    else{
      alert("Seleccione una prenda")
    }
  }

  const deletePrenda=index=>{
    const newPrendas=[...prendas]
    newPrendas.splice(index,1)
    setPrendas(newPrendas)
  }

  return (
    <>
    <div>{console.log(prendas)}</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <br />
        <Autocomplete
          options={ropas}
          getOptionLabel={(option) => option.nombre}
          prenda={prenda}
          onChange={(event, newRopa) => {
              setPrenda(newRopa);
          }}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Ropas" variant="outlined" />
          )}
        />
        <button onClick={handleClick}>Agregar</button>
      </form>
      {
        prendas.map((objeto,index)=>(
          //console.log(objeto.nombre+'--'+objeto.precio+'--'+objeto.cantidad+'--'+objeto.id)
          <Prenda ropa={objeto.nombre} index={index} key={index} id={objeto.id} cantidad={objeto.cantidad} precio={objeto.precio} deletePrenda={deletePrenda}/>
        ))
      }
    </>
  );
};

export default Form;
