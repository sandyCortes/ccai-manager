import React from 'react';

export const CardComponent = (props) => {
  const { children, classExtra } = props
  return (
    <div class={`card ${classExtra}`}>
      { children }
    </div>
  )
}
