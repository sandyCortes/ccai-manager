import React from 'react';
// import { InputLabel } from '../components/ui/Inputs/InputLabel'
// import { TabsComponent } from './../components/commond/Tabs'
import { CardComponent } from './../components/ui/Cards'
import { HeaderComponent } from './../components/ui/Header/HeaderComponent';
import { ButtonComponent } from './../components/ui/Buttons/PrimaryButton'

const Login = () => {
  return (
    <div>
      <div>Hola login..!</div>

      <div style={{ width: '20%', margin: 'auto', marginTop: '20px' }}>

      <CardComponent />
      <HeaderComponent />
      <ButtonComponent buttonText = "Iniciar sesión" />
      
      </div>
    </div>
  )
}

export default Login