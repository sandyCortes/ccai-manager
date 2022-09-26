import React from 'react';

export const InputLabel = (props) => {
  const { title, iconName } = props
  return (
    <div className="field">
      <p className="control has-icons-right">
        <label className="float-label">
          <input
            className="input input-radious"
            type="text"
          />
          {
            title ?
              <span className='float-span'>{ title }</span> :
              <span className="icon is-small is-right">
                <i className={`mdi ${iconName} icon-blue`}></i>
              </span>
          }
        </label>
      </p>
    </div>
  )
}
