import React from 'react';
import { ButtonComponent } from './../components/ui/Buttons/PrimaryButton'


const Login = () => {
  return (
    <div>
      <div>Hola login..!</div>

      <div style={{ width: '80%', margin: 'auto', marginTop: '20px' }}>

      <ButtonComponent buttonText="Iniciar sesión" />
     
      </div>
    </div>
  )
}

export default Login