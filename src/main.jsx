import ReactDOM from 'react-dom/client'
import { ProveedorUsuario } from './context/usuarioContexto.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProveedorUsuario>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProveedorUsuario>
)
