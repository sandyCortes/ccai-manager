import React from 'react';

import { HeaderComponent } from './../components/ui/Header/HeaderComponent'
import { TableComponent } from './../components/commond/Table'
import { ButtonIcon } from './../components/ui/Buttons/ButtonIcon'
import { CardComponent } from './../components/ui/Cards/CardComponent'

const Proyects = () => {

    return (
        <div className='section'>
                <HeaderComponent title="Proyectos"/> 
                    <div className="column is-14">
                        <ButtonIcon title="Agregar" icon="plus-circle" />
                        <ButtonIcon title="Generar reportes" icon="file-download-outline" />
                    </div>
                    <CardComponent classExtra="opacity-card card-proyects">             
                        <div>
                            <table className="table tab-proyect">
                                <thead>
                                    <tr>
                                        <th title="ID">ID.</th>
                                        <th>Nombre del proyecto.</th>
                                        <th title="Objetivo">Objetivo.</th>
                                        <th title="Beneficios">Beneficios.</th>
                                        <th title="Asesores">Asesores.</th>
                                        <th title="Cronograma de actividades">Cronograma de actividades.</th>
                                        </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td title="ID">ID.</td>
                                        <td>Nombre del proyecto.</td>
                                        <td title="Objetivo">Objetivo.</td>
                                        <td title="Beneficios">Beneficios.</td>
                                        <td title="Asesores">Asesores.</td>
                                        <td title="Cronograma de actividades">Cronograma de actividades.</td>
                                        <td><i className='mdi mdi-eye'></i><i className='mdi mdi-trash-can-outline '></i></td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                </CardComponent>
        </div>

        )
}

export default Proyects
