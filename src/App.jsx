import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'
import productos from './pizzas.json'
import Pizza from './components/Pizza'




function App  () {

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/*<Register/>*/}
      {/*<Login/>*/}
      {/* <Cart productos={productos}/> */}
      <Pizza/>
      <Footer/>
    </>
  )
}

export default App
