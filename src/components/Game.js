import React, { Component } from 'react';
import {gameStep} from 'bl';

class Cell extends Component {
  render() {
    return <td>{this.props.data.infected ? 8 : '_'}</td>
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
    return (
      <div>
        <table>
          <tbody>
            {this.state.data.map((x, i) => <Row data={x} key={i} />)}
          </tbody>
        </table>
        <p>
          {`Step ${this.state.step}`}
        </p>
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
