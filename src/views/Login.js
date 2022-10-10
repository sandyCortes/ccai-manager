import React from 'react';
import { useNavigate  } from 'react-router-dom'

import { InputLabel } from '../components/ui/Inputs/InputLabel'
import { ButtonComponent } from '../components/ui/Buttons/PrimaryButton'
import { CardComponent } from '../components/ui/Cards/CardComponent'

const Login = () => {
  const navigate = useNavigate()

  const goToLink = (uri) => {
    navigate(uri)
  }

  return (
    <div className='section login-content'>
      <CardComponent classExtra="opacity-card">
        <figure className="image is-96x96 center-img">
          <img src={require("./../assets/logo.png" )} alt="" />
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
              <a href='/'>¿Haz olvidado tu contraseña?</a>
            </div>
            <div>
              <a href='/'>Fechas de servicio y residencias</a>
            </div>
          </div>       
        </div>

        <div className="buttons-content">
          <ButtonComponent
            buttonText="Iniciar sesión"
            hdlOnClickEvent={() => goToLink('/home')}
          />
          <ButtonComponent
            buttonText="Registrarse"
            hdlOnClickEvent={() => goToLink('/register')}
          />
        </div>

      </CardComponent>
    </div>
  )
}

export default Login