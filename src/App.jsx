import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'
import productos from './pizzas.json'



function App() {

  return (
    <>
      <Navbar/>
      <Cart productos={productos}/>
      {/*<Home/>*/}
      {/*<Register/>*/}
      {/*<Login/>*/}
      <Footer/>
    </>
  )
}

export default App
