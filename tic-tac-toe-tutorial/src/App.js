import React from 'react';
import './App.css';

function getWinnerOrNull(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/*
Square is a functional component. They are used when a component only needs a render()-method.
Note the difference props is passed as a parameter, compared to an attribute in class component.
*/
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
/*
  Game needed to have export and default for this class,
  because in React only one component is imported per file and it is marked with default
*/
export default class Game extends React.Component {
  /*
    props are basically parameters that are given to the Board component see Game.render() to see how
    props are made available by React.Component-constructor and are immutable.
    state is components mutable state, but should be changed only with setState() so React knows and can optimise the changes
    if component needs state it will a constructor like below.
  */
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (getWinnerOrNull(squares) || squares[i]) {
      return;
    }
    const playerMarker = this.state.xIsNext ? 'X' : 'O';
    squares[i] = playerMarker;
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = getWinnerOrNull(current.squares);

    let status;
    if (winner) {
      status = 'Player ' + winner + ' wins';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    /*
    In the Board-tag, squares and onClick are props that are given values, see Game constructor for explanation of state and props
    */
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div> {status} </div>
          <ol> {/* TODO */} </ol>
        </div>
      </div>
    );
  }
}
