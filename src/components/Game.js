import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return <td>{this.props.data.injurence}</td>
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
        data: props.data
    };
  }
  render() {
    return (
      <table>
        <tbody>
          {this.state.data.map((x, i) => <Row data={x} key={i} />)}
        </tbody>
      </table>
    );
  }
}
