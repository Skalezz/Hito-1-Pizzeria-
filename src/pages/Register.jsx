import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Register = () => {

    const {validador, mensaje, error, email, password, confirmarPassword} = useContext(UserContext)

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmarPassword, setConfirmarPassword] = useState("")

    // Estado del mensaje para los errores
    // const [mensaje, setMensaje] = useState("")
    // const [error, setError] = useState ("")

    // const validador = (e)=> {
    //     e.preventDefault()

    //     if  (!email.trim() || !password.trim() || !confirmarPassword.trim()){            
    //         setMensaje("Debe llenar todos los campos")
    //         setError("mensaje_error")
    //         return

    //     }else if (password != confirmarPassword){
    //         setMensaje("las contraseñas deben ser iguales")
    //         setError("mensaje_error")
    //         return

    //     }else if (password.length < 6){
    //         setMensaje("la contraseña debe contener minimo 6 caracteres")
    //         setError("mensaje_error")
    //         return
        
    //     }
    //         setMensaje("Felicitaciones")
    //         setError("mensaje_exito")
            
    //         // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
    //         setEmail ("")
    //         setPassword ("")
    //         setConfirmarPassword ("")
    // }
    




  return (
    <div className='container col-4 my-5'>
        <p className= {error}>{mensaje}</p>
        <form className="formulario" onSubmit={validador}>
            <div className="form-group mt-3">
                <label>Email</label>
                <input
                type="text"
                name="email"
                className="form-control"
                {...email}
                // onChange={ (e)=> setEmail(e.target.value) }
                // value={email}
                />
            </div>
            <div className="form-group mt-3">
                <label>Contraseña</label>
                <input
                type="text"
                name="password"
                className="form-control"
                {...password}
                // onChange={ (e)=> setPassword(e.target.value) }
                // value={password}
                />
            </div>
                <div className="form-group mt-3">
                <label>Confirmar contraseña</label>
                <input
                type="text"
                name="password"
                className="form-control"
                {...confirmarPassword}
                // onChange={ (e)=> setConfirmarPassword(e.target.value) }
                // value={confirmarPassword}
                />
            </div>

            <button type="submit" className="btn btn-primary mt-3">Enviar</button>
        </form>
    </div>
  )
}

export default Register