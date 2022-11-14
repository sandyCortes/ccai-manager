import React from 'react';
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { CardComponent } from './../components/ui/Cards/CardComponent'

const ProyectDetail = () => {
  return (
    <div className='section'>
      <div className="columns" style={{ width: '100%' }}>
        <div className="column is-12">
          <HeaderComponent title="Proyecto 3: Gestor del ccai" />
        </div>

        <div className='column is-12'>
          <CardComponent classExtra="opacity-card card-proyects">

            {/* Collapsive */}

          </CardComponent>
        </div>
      </div>
    </div>
  )
}

export default ProyectDetail
