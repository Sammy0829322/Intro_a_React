
import { useState } from "react";

function ListaCompras() {
  // Definir el estado para la lista de compras
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");


 // Función para agregar un nuevo producto a la lista
 //EXTRA se agrego una condicion para que no se repitan los productos
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "" && !productos.includes(nuevoProducto)) {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  else if (productos.includes(nuevoProducto))
  alert("el producto esta repetido")

  else{
    alert("escriba un producto")
  }

  };

const eliminarProducto = (index) => {
setProductos(
  productos.filter((producto,lugar)=>lugar !==index)
);
}

  return (
    <div>
      <h2>Lista de Compras</h2>
      <input
        type="text"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />
      <button onClick={agregarProducto}>Agregar</button>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto}
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;