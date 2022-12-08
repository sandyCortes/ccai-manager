import React from 'react';

export const ModalComponent = (props) => {    
    const { children, classExtra, title, isActive} = props
    return(
        <div className={`modal ${isActive ? 'is-active':''} ${classExtra}`} >
            {children}
            <div className={`modal-background ${classExtra}`} >{children}</div>
            
            <div className="modal-card">
                <header className="modal-card-head" >
                    <p className="modal-card-title title-sucessfull">{title}</p>
                    <button className="delete" aria-label="close" > </button>
                    
                </header>

                <section className="modal-card-body" >
                    <p>Nombre:</p>
                    <p>Matricula:</p>
                    <p>Calificación:</p>
                    <p>Carrera:</p>
                    <p>Periodo:</p>
                </section>

                <footer className="modal-card-foot">
                    <button  
                        className="button is-rounded is-medium is-success"
                    
                    >
                        Aceptar
                    </button>
                    <button className="button is-rounded is-medium is-danger">Rechazar</button>
                </footer>

            </div>
        </div>
    )
}

/* modal card

onClick={`${isActive ? 'is-close':""}`}

*/

/* modalOld
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
*/