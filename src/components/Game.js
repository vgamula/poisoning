import React, { Component } from 'react';
import {gameStep} from 'bl';

class Cell extends Component {
  render() {
    const isInfected = this.props.data.infected;
    const isHealing = this.props.data.infected && this.props.data.ticks > 6;
    let style = {
      backgroundColor: 'green',
    };
    if (isInfected) {
      style.backgroundColor = 'red';
    }
    if (isHealing) {
      style.backgroundColor = 'blue';
    }
    return <td width='10' height='10' style={style}></td>
  }
}

class Row extends Component {
  render() {
    return <tr>{this.props.data.map((x, i) => <Cell data={x} key={i} />)}</tr>
  }
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: props.data,
        step: 0
    };
  }
  render() {
    let sterStyle = {
        'font-size': 16 + 'px',
        'text-align': 'center',
        'border': 1 + 'px solid #E81515',
        'borderRadius': 5 + 'px',
        'background-color': '#CBF3C4',
        'padding': 20 + 'px',
    };
    let tableStyle = {
        'margin': 0 + ' auto',
    }
    return (
      <div>
        <p style={sterStyle}>
          {`Step ${this.state.step}`}
        </p>
        <table style={tableStyle}>
          <tbody>
            {this.state.data.map((x, i) => <Row data={x} key={i} />)}
          </tbody>
        </table>
      </div>
    );
  }
  componentWillUnmount() {
    clearTimeout(this.gameTimer);
  }
  componentDidMount() {
    this.gameTimer = setInterval(() => {
      this.setState({
        data: gameStep(this.state.data),
        step: this.state.step + 1
      });
    }, 500);
  }
}
