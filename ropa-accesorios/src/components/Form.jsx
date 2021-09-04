import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Prenda from "./Prenda";

const Form = () => {
  let ropas = require("../json/ropa.json");
  const [prenda, setPrenda] = useState(null);
  const [prendas, setPrendas]=useState([]);
  const [total, setTotal]=useState(0);

  /*console.log(ropas[0].nombre);*/
  /*const nombres = ropas.map((ropa) => ropa.nombre);*/

  const handleClick=e=>{
    if(prenda!=null){
      if (!handleRepetido(prenda.nombre)) {
        setPrendas([...prendas,prenda])
        handleChange(prenda.precio)
      } else {
        alert("Seleccione una prenda no repetida")
      }
    }
    else{
      alert("Seleccione una prenda")
    }
  }

  const handleRepetido=(nombre)=>{
    var Verificador=false;
    prendas.forEach(element => {
      if (element.nombre===nombre) {
        Verificador=true;
      }
    });
    return Verificador;
  }

  const handleChange=(sum)=>{
    var suma=0;
    console.log(prendas)
    prendas.forEach(prenda => {
      suma+=prenda.precio
    });
    suma+=sum;
    setTotal(suma);
  }

  const deletePrenda=index=>{
    const newPrendas=[...prendas]
    const sum=newPrendas[index].precio
    newPrendas.splice(index,1)
    setPrendas(newPrendas)
    handleChange(-sum)
  }

  const editPrenda=(index,price,quantity)=>{
    const newPrendas=[...prendas]
    newPrendas[index].cantidad=quantity
    newPrendas[index].precio=price*quantity
    setPrendas(newPrendas)
    handleChange(0)
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <br />
        <div className="autocomp">
        <Autocomplete
          options={ropas}
          getOptionLabel={(option) => option.nombre}
          prenda={prenda}
          onChange={(event, newRopa) => {
              setPrenda(newRopa);
          }}
          style={{ 
            width: 300 
          }}
          renderInput={(params) => (
            <TextField {...params} label="Ropas" variant="outlined" />
          )}
        />
        </div>
        <button className="submit" onClick={handleClick}>Agregar</button>
      </form>
      <div className="tabla">
      {
        prendas.map((objeto,index)=>(
          //console.log(objeto.nombre+'--'+objeto.precio+'--'+objeto.cantidad+'--'+objeto.id)
          <Prenda ropa={objeto.nombre} precioU={objeto.precioU} index={index} key={index} id={objeto.id} cantidad={objeto.cantidad} precio={objeto.precio} deletePrenda={deletePrenda} editPrenda={editPrenda}/>
        ))
      }
      </div>
      <div className="total">
        <p>Total a Pagar: {total}</p>
      </div>
    </>
  );
};

export default Form;
