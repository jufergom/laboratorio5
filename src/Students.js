import React, { Component } from 'react';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [
                {nombre: 'Julio', apellido: 'Gomez', numeroCuenta: '21641301'},
                {nombre: 'Byron', apellido: 'Schneider', numeroCuenta: '21641124'},
                {nombre: 'Jasper', apellido: 'Juarez', numeroCuenta: '21642134'}
            ]
        };
    }

    render() {
        const listStudents = (student) => {
            return (
                <div>
                    <li>{student.numeroCuenta} - {student.nombre} - {student.apellido}</li>
                </div>
            );
        };
        return(
            <ul>
                {this.state.studentList.map(listStudents)}
            </ul>
        );
    }
}

export default Students;