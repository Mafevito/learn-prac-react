import React, { Component } from "react";
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }
    
    createTasks(item) {
        //Imprimir el valor de la lista, donde valor es la clave y el texto
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }

    //Obtenemos el valor y renderizamos
    render() {
        //Recuperando valores insertados
        var todoEntries = this.props.entries;
        // Toma cada item de la matriz y itero sobre cada uno
        var listItems = todoEntries.map(this.createTasks);

        return(
            // Una vez tiene los valores, se imprime en pantalla
            <ul className="theList">
             <FlipMove duration={250} easing="ease-out">
               {listItems} 
              </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;
