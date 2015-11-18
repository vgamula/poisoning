import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.initializeGame = this.initializeGame.bind(this);
  }

  initializeGame(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.onInitializeGame) {
      this.props.onInitializeGame(parseInt(this.refs.n.value, 10) || 0);
    } else {
      console.warn(`You have'n set onInitializeGame callback for the GameInitializer Component`);
    }
  }

  render() {
    return (
      <div>
        <input ref='n' type='number' />
        <button onClick={this.initializeGame}>
          Start
        </button>
      </div>
    );
  }
}