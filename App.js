import logo from './logo.svg';
import './assets/estilotienda.css';
import './assets/estilo_base.css';
import{useState} from 'react';


function App() {
  const[compraList, setCompraList] = useState([{articulo:'herramienta',}])
const[compraName,setCompraName]= useState('')
  function addCompra(){
    
    setCompraList(compraList.concat({articulo:compraName}))
    
  }

  return (
    <main>
    <div className="contenedor">
        <nav class="nav">
            <ul>
                <li><a href="./index.html">NOSOTROS</a></li>
                <li><a href="./tienda">TIENDA</a></li>
                <li><a href="./contacto.html">CONTACTOS</a></li>
                <li><a href="./ubicacion.html">UBICACIÓN </a></li>
            </ul>

        </nav>
        </div>
        <div className="main">     
            
               
            
                <h1>  Pre_compras</h1>
        <form action="javascript:void(0);">
          <input id="articulos" type="text" value={compraName} name="articulo" onChange={(event)=>setCompraName(event.target.value)} placeholder=" articulo" ></input> 
          <select name="cantidad" id="cantidad">
            <option value="" disabled selected >cantidad</option>               
            <option value="1">1</option>
            <option value="2">2</option>
                       
          </select>

          <button id="comprar" onClick={addCompra}>Pre-compra</button>
          </form>
          
          <h3>Pre lista</h3>
           <ul id="listado">
             {
           compraList.map((value) => {
                return <li>{value.articulo}</li>
           })   
          
           }
              </ul> 
           </div>  
     
    </main>


  );
}

export default App;
          