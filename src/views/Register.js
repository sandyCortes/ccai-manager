import React from 'react';
import { CardComponent } from './../components/ui/Cards/CardComponent'
import { InputLabel } from './../components/ui/Inputs/InputLabel'

const Register = () => {
   return (
    <div className='container'>
      <CardComponent classExtra="opacity-card">
        <div>Hola Mundo, aqui te registras...!!</div>
        <InputLabel title="Nombre" />
      </CardComponent>
     </div>
   )
}

export default Register
