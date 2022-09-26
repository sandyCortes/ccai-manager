import React from 'react';

export const ButtonComponent = (props) => {
  const { buttonText } = props 
  return (
    <div>
      <div class="buttons">
        <button class="button is-rounded button-tese">{ buttonText }</button>
      </div>
    </div>
  )
}
