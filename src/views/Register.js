import React from 'react';
import { CardComponent } from './../components/ui/Cards/CardComponent'
import { InputLabel } from './../components/ui/Inputs/InputLabel'
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'

const Register = () => {
   return (
    <div className='container register-content'>
          <HeaderComponent title="Registro"/>
       <CardComponent classExtra="margin-top">
          <div style={{ margin: '2%' }}>
            <div className='title-register'>DATOS PERSONALES</div>
          </div>
              <div className = "container-personal ">     
                <div className="columns">
                  <div className="column is-3">
                    <InputLabel title="Nombre" />
                  </div>
                    <div className="column is-3">
                      <InputLabel title="Apellido paterno" />
                    </div>
                      <div className="column is-3">
                        <InputLabel title="Apellido materno" />
                      </div>
            </div>    
             <div className="columns">
                <div className="column is-3">
                  <InputLabel title="Dirección" />
                </div>
                  <div className="column is-3">
                    <InputLabel title="Telefono" />
                  </div>
                    <div className="column is-3">
                     <InputLabel title="Sexo" />
                    </div>
              </div>
        </div>
        <div style={{ margin: '2%' }}>
          <div className='title-register'>DATOS INSTITUCIONALES</div>
        </div>
        <div className = 'container-personal'>     
           <div className="columns">
              <div className="column is-3">
                <InputLabel title="Matricula" />
              </div>
                <div className="column is-3">
                 <InputLabel title="Carrera" />
                </div>
            <div className="column is-3">
             <InputLabel title="Servicio a prestar" />
            </div>
        </div>    
            <div className="columns">
              <div className="column is-3">
                <InputLabel title="Correo institucional" />
              </div>
                <div className="column is-3">
                  <InputLabel title="Contraseña" />
                </div>
          </div>
        </div>
        <div className="buttons has-addons is-right">
          <p className="control has-icon-right">
            <button className="button">
              <span className="icon is-medium">
                <span className="icon is-right">
                  <i className="mdi mdi-plus-circle-outline icon-blue"></i>
                </span>  
              </span>
            </button>
          </p>
        </div>
      </CardComponent>
     </div>
   )
}

export default Register
