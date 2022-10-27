import React from 'react';

export const ButtonIcon = (props) => {
    const { title, icon } = props

  return (
    <>
      <button className="button button-tables delete-events">
        <span>{title}</span>
        <span className="icon">
          <i className={`mdi mdi-${icon} icon-blue`}></i>
        </span>
      </button>
    </>
  )
}
