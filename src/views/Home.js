import React from 'react';
import ButtonDecorative from './../components/ui/Buttons/ButtonDecorative'
import TableComponent from './../components/ui/Table/TableComponent'; 


const Home = () => {
  return (
    <div className='section'>
      <div className='columns is-vcentered' style={{ height: '70vh' }}>
        <div className="column is-6 content-title">
          <div className="cart-title">
            Centro de Cooperación Academica Industria
          </div>
          <div className="cart-title">
            CCAI
          </div>
        </div>
        <div className="column is-6">
          <div className='columns is-vcentered'>
            <div className='column is-6'>
              <ButtonDecorative />
            </div>
            <div className='column is-6'>
              <ButtonDecorative />
            </div>
            <div className='column is-6'>
              <ButtonDecorative />
            </div>
            <div className='column is-6'>
              <ButtonDecorative />
            </div>
            <div className='column is-6'>
              <ButtonDecorative />
            </div>
            <div className='column is-6'>
              <ButtonDecorative />
            </div>
            <div className='column is-6'>
              <ButtonDecorative />
            </div>
          </div>
          <div>
            <TableComponent/>
          </div>
        </div>
      </div>       
    </div>
    
  )
}

export default Home
