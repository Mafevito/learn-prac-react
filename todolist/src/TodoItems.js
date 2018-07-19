import React, { Component } from "react";

class TodoItems extends Component {
    createTasks(item) {
        //Imprimir el valor de la lista, donde valor es la clave y el texto
        return <li key={item.key}>{item.text}</li>
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
              {listItems} 
            </ul>
        );
    }
}

export default TodoItems;
