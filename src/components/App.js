import React, { Component } from 'react';

import GameInitializer from 'components/GameInitializer';
import Game from 'components/Game';

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
    if (value>40){
    	alert('value shuld be less than 40')
    	return;
    }
    this.setState({
      gameInitialized: true,
      n: value,
      data: generateCells(value)
    });
  }
  render() {
    let pStyle = {
        fontFamily: 'Raleway',
    }
    return (
      <div style={pStyle}>
        {this.state.gameInitialized
          ? (
            <Game data={this.state.data} />
          ) : (
            <GameInitializer onInitializeGame={this.onInitializeGame} />
          )}
      </div>
    );
  }
}
