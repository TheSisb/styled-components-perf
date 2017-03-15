import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';

import simple from './simple';
import HoC from './hoc';
import styled from './styled-components';

const ITERATION_COUNT = 50;

function measure(Tag) {
  Perf.start();
  ReactDOM.render(
    <Tag />,
	document.getElementById('root')
  );
  Perf.stop();
  return Perf.getLastMeasurements()[0].duration;
}

function measureAverage(Tag, count=ITERATION_COUNT) {
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += measure(Tag);
  }

  console.log(sum/count);
}


console.log('Simple');
measureAverage(simple);
console.log('HoC');
measureAverage(HoC);
console.log('Styled');
measureAverage(styled);



/* Average == 1 
100
120
800
*/


/* Average == 20
simple: 37
hoc: 58
styled: 110
*/


/* Average == 50
simple: 34
hoc: 57
styled: 91
*/