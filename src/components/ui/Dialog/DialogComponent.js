import React from 'react';

export const DialogComponent = (props) => {
  return (
    <div class="dialog">
      <header class="dialog-header">
        <p class="dialog-header-title">{props.titledialog}</p>
      </header>
      <div class="dialog-content">{props.message}
      </div>
    </div>
  )
}