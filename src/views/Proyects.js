import React from 'react';

import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { TableComponent } from './../components/commond/Table'
import { ButtonIcon } from './../components/ui/Buttons/ButtonIcon'

const Proyects = () => {

        return (
            <div className='section'>
                <HeaderComponent title="Proyectos"/>
                
                    <div className="column is-14">
                        <ButtonIcon title="Agregar" icon="plus-circle " />
                        <ButtonIcon title="Generar reportes" icon="file-download-outline" />
                    </div>
            </div>
        )
}

export default Proyects
