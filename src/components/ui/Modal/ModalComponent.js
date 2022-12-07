import React from 'react';

export const ModalComponent = (props) => {    
    const { children, classExtra, backgroundColor, title, isActive} = props
    return(
        <div className={`modal is-active ${classExtra}`} >
            { children }
            <div className="modal-background" style={{ backgroundColor: backgroundColor }}> </div>
            <div className="modal-content">

                <p className="title-sucessfull">{title} </p>
                
                <button className = "button is-rounded">Aceptar</button>
                <button className = "button is-rounded">Rechazar</button>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
            
        </div>
    )
}

