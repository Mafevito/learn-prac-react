//mantendrá todo el estado de la aplicación y abarcara los demás componentes
import React, { Component } from 'react';
import Board from '../App.js'
class Game extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <h1>Turno de la ficha negra</h1>
            <Board/>
            <button>Restart</button>
            </div>
        )
    }
}

export default Game;