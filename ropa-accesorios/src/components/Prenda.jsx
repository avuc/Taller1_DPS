import React from "react";

const Prenda = ({
  ropa,
  id,
  precioU,
  cantidad,
  index,
  precio,
  deletePrenda,
  editPrenda,
}) => {
  const handleChange = (e) => editPrenda(index, precioU, e.target.value);

  return (
    <>
      <div className="list">
        <p>Nombre: {ropa}</p>
        <p>Precio Unitario: {precioU}</p>
        <p>Precio Total: {precio}</p>
        <div className="controles">
          <input
            type="number"
            name="prenda"
            onChange={handleChange}
            defaultValue={cantidad}
          />
          <button className="btn-delete" onClick={() => deletePrenda(index)}>
            X
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Prenda;
