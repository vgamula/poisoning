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
    let inputBlockStyle = {
        'display': 'block',
        'margin': 0 + ' auto',
        'position': 'absolute',
        'top': 50 + '%',
        'left': 45 + '%',
        'text-align': 'center'
    };
    let buttonStyle = {
        'margin-top': 20 + 'px',
        'cursor': 'pointer',
        'border': 2 + 'px solid #39AC42',
        'border-radius': 5 + 'px',
        'padding': 5 + 'px',
        'background-color': '#42DD38',
    };
    let inputStyle = {
        'text-align': 'center',
        'padding': 5 + 'px',
    };
    return (
      <div style={inputBlockStyle}>
        <input style={inputStyle} ref='n' type='number' defaultValue={31} />
        <br/>
        <div style={buttonStyle} onClick={this.initializeGame}>
          Start
        </div>
      </div>
    );
  }
}
