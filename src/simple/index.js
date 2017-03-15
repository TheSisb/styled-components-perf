import React from 'react';

// Component
const SimpleComponent = (props, context) => (
  <div className={context.theme}>
    BOT
  </div>
);

// Perf
class Perf extends React.Component {
  render() {
    let items = []
    for (let i = 0; i < 1000; i++) {
      items.push(<SimpleComponent key={i} />);
    }

    return <div>{items}</div>;
  }
}

export default Perf;
