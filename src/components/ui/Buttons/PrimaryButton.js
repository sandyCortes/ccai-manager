import React from 'react';

export const ButtonComponent = (props) => {
  const { buttonText, classExtra } = props 
  return (
    <div>
      <div class="buttons">
        <button class={`button is-rounded button-tese ${classExtra}`}>{ buttonText }</button>
      </div>
    </div>
  )
}
