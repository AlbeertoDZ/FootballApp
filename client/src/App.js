import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [mensaje, setMensaje] = useState('');

 useEffect(() => {
    async function fetchAmount(){
      try{
        const res = await axios.get(`http://localhost:4000/api/matches`)
        // console.log(res.data)
        setMensaje(res.data[0].home_team)
      } catch (error){
        console.log(error)
        setMensaje("Error")
      }
    }
    fetchAmount()
  }, [])

  return (
    <>
   <div>
      <h1>Prueba de conexión</h1>
      <p>{mensaje}</p>
    </div>
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
    <Footer />
    
    </>
  )
}

export default App
