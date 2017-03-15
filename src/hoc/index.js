import React from 'react';

// Component
const SimpleComponent = (props, context) => (
  <div className={context.theme}>
    BOT
  </div>
);

// Wrapping enhancer
const Enhance = ComposedComponent => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  componentDidMount() {
    this.setState({ data: 'Hello' });
  }
  render() {
    return <ComposedComponent {...this.props} data={this.state.data} />;
  }
};

// HoC
const HoC = Enhance(SimpleComponent);

// Perf
class Perf extends React.Component {
  render() {
    let items = []
    for (let i = 0; i < 1000; i++) {
      items.push(<HoC key={i} />);
    }

    return <div>{items}</div>;
  }
}

export default Perf;
