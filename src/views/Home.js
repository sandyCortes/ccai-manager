import React from 'react';
import ButtonDecorative from './../components/ui/Buttons/ButtonDecorative'

const Home = () => {
  return (
    <div className='section'>
      <div className='columns'>
        <div class="column is-6 content-title">
          <div class="card cart-title">
            Centro de Cooperación Academica Industria
          </div>
          <div class="card cart-title">
            CCAI
          </div>
        </div>
        <div class="column is-6">
          <div className='columns is-6'>
            <ButtonDecorative />
          </div>
          <div className='columns is-6'>
            <ButtonDecorative />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
