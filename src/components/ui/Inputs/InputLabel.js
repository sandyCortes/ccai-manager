import React from 'react';

export const InputLabel = () => {
  return (
    <div>
      <label className="float-label">
        <input
          class="input input-radious"
          type="text"
        />
        <span className="float-span">Nombre</span>
      </label>
      
    </div>
  )
}
