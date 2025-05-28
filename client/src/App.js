import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
// import './styles/styles.scss'

function App() {
  

//  useEffect(() => {
//     async function fetchAmount(){
//       try{
//         const res = await axios.get(`http://localhost:4000/api/matches`)
//         // console.log(res.data)
//         setMensaje(res.data[0].home_team)
//       } catch (error){
//         console.log(error)
//         setMensaje("Error")
//       }
//     }
//     fetchAmount()
//   }, [])

  return (
    <>
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
    
    
    </>
  )
}

export default App
