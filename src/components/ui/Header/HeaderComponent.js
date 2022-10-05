import React from 'react';
export const HeaderComponent = (props) => {
  return (
    <div class="header">    
      <header class="card-header"> 
        <a href="icons" class="button" >
        <i className="mdi mdi-chevron-left"></i>  
        </a> 
        <p class="card-header-title" >
          {props.title}
        </p>
      </header>  
    </div>  
  )
}
