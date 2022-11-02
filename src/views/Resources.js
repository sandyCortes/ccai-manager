import React from 'react';
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { TabsComponent } from './../components/commond/Tabs'
import { TableComponent } from './../components/commond/Table'
import { ButtonIcon } from './../components/ui/Buttons/ButtonIcon'

const Resources = () => {
  return (
    <div className='section'>
      <div className="columns" style={{ width: '100%' }}>
        <div className="column is-12">
          <HeaderComponent title="Recursos" />
        </div>
        <div className="column is-12">
          <TabsComponent />
        </div>
        <div className="column is-12 columns">
          <div className="column is-12">
            <ButtonIcon
              title="Generar reportes"
              icon="file-download-outline"
              extraClass="aling-right"
            />
            <ButtonIcon
              title="Agregar"
              icon="plus-circle"
              extraClass="aling-right margin-right"
            />
          </div>
          <div className="column is-12">
            <TableComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
