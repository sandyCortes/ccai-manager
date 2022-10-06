import React from 'react';

export const CardComponent = (props) => {
  const { children, classExtra } = props
  return (
    <div className={`card ${classExtra}`}>
      { children }
    </div>
  )
}
