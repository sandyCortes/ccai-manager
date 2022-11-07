import React from 'react';
import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { TabsComponent } from './../components/commond/Tabs'
import { TableComponent } from './../components/commond/Table'
import { ButtonIcon } from './../components/ui/Buttons/ButtonIcon'

const Resources = () => {
  return (
    <div className='section'>
      <div className="columns">
        <div className="column is-12">
          <HeaderComponent title="Recursos" />
        </div>
        <div className="column is-12">
          <TabsComponent />
        </div>
        <div className="column is-12 columns">
          <div className="column is-12">
            <ButtonIcon title="Agregar" icon="plus-circle " />
            <ButtonIcon title="Generar reportes" icon="file-download-outline" />
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
