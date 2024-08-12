import React, { useState } from 'react'

export default function Login () {

    const [mail, setMail] = useState ("")
    const [password, setPasword] = useState ("")
    const [successMessage, setSuccessMessage] = useState ("")

    const handleLogin = (e) => {
        e.preventDefault()
        if (!mail.trim() || !password.trim()){
            alert ("Debes completar todos los Campos");
            setSuccessMessage("")
        } else {
            alert("Cuenta iniciada con exito")
            setSuccessMessage("Cuenta iniciada con exito")
            setMail("")
            setPasword("")
        }
    }
    
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <p>Email</p>
                <input type="email" value={mail} className="form-control" onChange={(e) => setMail(e.target.value)} />
            </div>
            <div className="form-group">
                <p>Contraseña</p>
                <input type="password" value={password} className="form-control" onChange={(e) => setPasword(e.target.value)} />
            </div>
            <button className="btn btn-dark mt-3" type="submit">Ingresar</button>
            <br></br>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </form>
      </div>
    )
}





