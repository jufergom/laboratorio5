import React, { Component } from 'react';

class Classes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classesList: [
                {nombre: 'Experiencia de Usuario', codigoClase: 'CCC 307'},
                {nombre: 'Teoria de Base de Datos 2', codigoClase: 'CCC 304'}
            ]
        }
    }
    render() {
        const listClasses = (classItem) => {
            return(
                <div>
                    <li> {classItem.codigoClase} - {classItem.nombre}</li>
                </div>
            );
        };
        return(
            <ul>
                {this.state.classesList.map(listClasses)}
            </ul>
        );
    }
}

export default Classes;