import React from 'react';
// import { InputLabel } from '../components/ui/Inputs/InputLabel'
import { TabsComponent } from './../components/commond/Tabs'
import { CardComponent } from './../components/ui/Cards'
import { HeaderComponent } from './../components/ui/Header/HeaderComponent';
import { DialogComponent } from '../components/ui/Dialog/DialogComponent';


const Login = () => {
  return (
    <div>
      <div>Hola login..!</div>

      <div style={{ width: '80%', margin: 'auto', marginTop: '20px' }}>

      <CardComponent />
      <HeaderComponent title ="titulo"/>
      <TabsComponent/>
      <DialogComponent titledialog ='¡REGISTRO EXITOSO!' message = 'Los Docentes se comunicarán con usted para informarle si su registro fue aceptado dentro de CCAI'/>
      
      </div>
    </div>
  )
}

export default Login