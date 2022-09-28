import React from 'react';

export const InputLabel = (props) => {
  const { title, iconName, typeInput, isPassword } = props
  return (
    <div className="field">
      <p className="control has-icons-right">
        <label className="float-label">
          <input
            className="input input-radious"
            type={ typeInput }
          />
          {
            title ?
              <span className='float-span'>{ title }</span> :
              <span className="icon is-right">
                <i className={`mdi ${iconName} icon-blue`}></i>
              </span>
          }
          {
            isPassword
          }
        </label>
      </p>
    </div>
  )
}
