import React from 'react';

export const ButtonComponent = (props) => {
  const {
    buttonText,
    classExtra,
    hdlOnClickEvent
  } = props

  return (
    <div className="buttons">
      <button
        className={`button is-rounded button-tese ${classExtra}`}
        onClick={() => hdlOnClickEvent()}
      >
        { buttonText }
      </button>
    </div>
  )
}
