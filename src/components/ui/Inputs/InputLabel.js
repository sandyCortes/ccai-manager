import React from 'react';

export const InputLabel = (props) => {
  
  return (
    <div>
      <label className="float-label">
        <input
          class="input input-radious"
          type="text"
        />
        <span className="float-span">{ props.title }</span>
      </label>
      
    </div>
  )
}
