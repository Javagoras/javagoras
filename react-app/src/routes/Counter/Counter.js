import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 2
    });
  }

  render() {
    return (
      <div>
        <Header as='h1'>Counter</Header>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <Button primary onClick={this.incrementCounter}>Increment</Button>
      </div>
    );
  }
}
