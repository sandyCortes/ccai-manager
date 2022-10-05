import React from 'react';
import { CardComponent } from './../components/ui/Cards/CardComponent'
import { InputLabel } from './../components/ui/Inputs/InputLabel'
import { ButtonComponent } from '../components/ui/Buttons/PrimaryButton'
import { HeaderComponent } from './../components/ui/Header/HeaderComponent' 

const Register = () => {
   return (
    <div className='container register-content'>
       <HeaderComponent title="Registro"/>
       <CardComponent classExtra="opacity-card margin-top">
        <div className = "container-personal">
          <div class="columns">
            <div className='column is-12 title-register'>DATOS PERSONALES</div>
              <div class="column is-3">
                <InputLabel title="Nombre" />
              </div>
              <div class="column is-3">
                <InputLabel title="Nombre" />
              </div>
              <div class="column is-3">
                <InputLabel title="Nombre" />
              </div>
              <div class="column is-3">
                <InputLabel title="Nombre" />
              </div>
              <div class="column is-3">
                <InputLabel title="Nombre" />
              </div>
              <div class="column is-3">
                <InputLabel title="Nombre" />
              </div>

            <div className='column is-12 title-register'>
              DATOS Inst
            </div>
          </div>
        </div>
      </CardComponent>
     </div>
   )
}

export default Register
