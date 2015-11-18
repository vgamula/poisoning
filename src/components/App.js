import React, { Component } from 'react';
import GameInitializer from 'components/GameInitializer';
import {generateCells} from 'bl';

export class App extends Component {
  constructor(props) {
    super(props);
    this.onInitializeGame = this.onInitializeGame.bind(this);
    this.state = {
      'gameInitialized': false,
      'n': null,
    };
  }
  onInitializeGame(value) {
    if (value % 2 !== 1) {
      alert('Value should be even!');
      return;
    }
    this.setState({
      gameInitialized: true,
      n: value,
      data: generateCells(value)
    });
  }
  render() {
    return (
      <div>
        {this.state.gameInitialized
          ? (
            <span>Game initialized!</span>
          ) : (
            <GameInitializer onInitializeGame={this.onInitializeGame} />
          )}
      </div>
    );
  }
}
