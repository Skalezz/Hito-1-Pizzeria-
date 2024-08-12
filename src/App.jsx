import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'


function App() {

  return (
    <>
      <Navbar/>
      {/*<Home/>*/}
      {/*<Register/>*/}
      <Login/>
      <Footer/>
    </>
  )
}

export default App
