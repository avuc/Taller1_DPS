import React from "react";

const Prenda=({ropa,id,cantidad,index,precio,deletePrenda})=>{

    return(
    <>
        <div className="list">
            <p>{ropa}</p>
            <p>{precio}</p>
            <input type="number" name="prenda" defaultValue={cantidad} />
            <button className="btn-delete" onClick={
              ()=>deletePrenda(index)
          }>X</button>
        </div>
    </>
    )
}

export default Prenda;