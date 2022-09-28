import React from 'react';
import { InputLabel } from '../components/ui/Inputs/InputLabel'
import { ButtonComponent } from '../components/ui/Buttons/PrimaryButton'
import { CardComponent } from '../components/ui/Cards/CardComponent'

const Login = () => {
  return (
    <div className='container login-content'>
      <CardComponent classExtra="opacity-card">
        <figure class="image is-96x96 center-img">
          <img src={require("./../assets/logo.png" )}/>
        </figure>

        <div className='center-img inputs-content'>
          <InputLabel
            iconName="mdi-account"
            typeInput="text"
          />
          <InputLabel
            iconName="mdi-eye-outline"
            typeInput="password"
            isPassword={true}
          />

          <div className='text-actions'>
            <div>
              <a>¿Haz olvidado tu contraseña?</a>
            </div>
            <div>
              <a>Fechas de servicio y residencias</a>
            </div>
          </div>       
        </div>

        <div className="buttons-content">
          <ButtonComponent classExtra="margin-bottom" buttonText="Iniciar sesión" />
          <ButtonComponent buttonText="Registrarse" />
        </div>

      </CardComponent>
    </div>
  )
}

export default Login