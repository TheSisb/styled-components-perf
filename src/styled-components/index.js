import React from 'react';
import styled from 'styled-components';

// Styled
const Tag = styled.span`
  font-size: ${props => props.index}px;
`;

// Component
const StyledComponent = ({index}) => (
  <Tag index={index}>
    BOT
  </Tag>
);


// Perf
class Perf extends React.Component {
  render() {
    let items = []
    for (let i = 0; i < 1000; i++) {
      items.push(<StyledComponent index={i} key={i} />);
    }

    return <div>{items}</div>;
  }
}

export default Perf;
