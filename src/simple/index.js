import React from 'react';



// Perf
class Perf extends React.Component {
  render() {
    let items = []
    for (let i = 0; i < 1000; i++) {
      // Component
      const SimpleComponent = (props, context) => (
        <div className={context.theme}>
          BOT
        </div>
      );

      items.push(<SimpleComponent key={i} />);
    }

    return <div>{items}</div>;
  }
}

export default Perf;
