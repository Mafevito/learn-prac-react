import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Circle(props) {
  var color = "white"
  if(props.cell === 1) {
    color = "black"
  } else if(props.cell === 2) {
    color = "red"
  }
  var style = {
      backgroundColor: color,
      border: "1px solid black",
      borderRadius: "100%",
      paddingTop: "98%"
  }
  return (
    <div style = {style}></div>
  )
}

function Cell(props) {
  var style = {
    height: 50,
    width: 50,
    border: "1px solid black",
    backgroundColor: "yellow"
  }
  return (
    <div style = {style} onClick = {() => props.handleClick(props.row, props.col)}>
      <Circle cell = {props.cell}/>
    </div>
  )
}

function Row(props) {
  var style = {
    display: "flex"
  }

  var cells = []
  for(let i = 0; i < 7; i++) {
    cells.push(<Cell key = {i} cell = {props.cells[i]} row = {props.row} col = {i} handleClick = {props.handleClick}/>)
  }
  return (
    <div style = {style}>{cells}</div>
  )
}

function Board(props) {
  var rows = []
  
  for(let i = 5; i >=0; i--) {
    rows.push(<Row key = {i} row = {i} cells = {props.cells[i]} handleClick = {props.handleClick}/>)
  }
  return (
    <div> {rows}</div>
  )
}

//mantendrá todo el estado de la aplicación y abarcara los demás componentes,
//se usan luego para construir una nueva matriz 2-D llamada temp.
//la fila y columna seleccionadas de la nueva matriz se modifican y luego el estado de las celdas se actualiza para igualar la matriz temporal 2-D
class Game extends React.Component {
  constructor(props) {
      super(props)

      var cells = []
      for(let i = 0; i < 6; i++){
        cells.push(new Array(7).fill(0))
      }

      this.state = {
        player: false, 
        cells: cells, 
        winner: 0 }

      this.handleClick = this.handleClick.bind(this)
      }

      //El método slice () se utiliza para generar una copia superficial de las matrices internas de la matriz de celdas 2-D
      handleClick(row, col){
        console.log("clicked -->")
        console.log("row: " + row + " | col: " + col)
        console.log(this.state.cells)

        var temp = [];
        for(let i = 0; i < 6; i++) {
          temp.push(this.state.cells[i].slice())
        }
        temp[row][col] = this.state.player ? 1 : 2
        this.setState({cells: temp, player: !this.state.player})
      }

//PASO 6, COMENZAR AQUÍ

  render() {
      return (
          <div>
          <h1>{this.state.player ? "Turno negro" : "Turno rojo"}</h1>
          <Board cells = {this.state.cells} handleClick = {this.handleClick}/>
          <button>Restart</button>
          </div>
      )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Game/>
      </div>
    );
  }
}

export default App;
