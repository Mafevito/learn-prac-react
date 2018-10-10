import React, { Component } from "react";
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        //Las tareas se van a almacenar en un array
        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

//Evento de añadir
    addItem(e) {
        if(this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";
        console.log(this.state.items);
        e.preventDefault();
    }

    deleteItem(key) {
        console.log("Key in deleteItem: " + key);
        console.log("Items at delete: " + this.state.items);
        var filteredItems = this.state.items.filter(function(item){
            return(item.key !== key)
        });
    

    this.setState({
        items: filteredItems
    });
    }
    render() {
        return (
            <div className="todoListMain">
                <h1>My todo list</h1>
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="Introducir tarea"/>
                        <button type="submit">Añadir</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem}/>
            </div>
        )
    }
}

export default TodoList;