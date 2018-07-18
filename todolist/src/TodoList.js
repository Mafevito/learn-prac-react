import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);

        //Las tareas se van a almacenar en un array
        this.state = {
            tasks: []
        }

        this.addTask = this.addTask.bind(this);
    }

//Evento de añadir
    addTask(e) {
        if(this._inputElement.value !== "") {
            var newTask = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    tasks: prevState.tasks.concat(newTask)
                };
            });
        }

        this._inputElement.value = "";
        console.log(this.state.tasks);
        e.preventDefault();

    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addTask}>
                        <input ref={(a) => this._inputElement = a} placeholder="Introducir tarea"/>
                        <button type="submit">Añadir</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;