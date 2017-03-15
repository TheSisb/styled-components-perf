import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';

import simple from './simple';
import HoC from './hoc';
//import styled from './styled-components';

const ITERATION_COUNT = 1;
const ROOT_NODE = document.getElementById('root');

function measure(Tag) {
  Perf.start();
  ReactDOM.render(
    <Tag />,
	  ROOT_NODE
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


/** !!! Why does calling the function on HoC before simple give different results? !!! */

console.log('Simple');
measureAverage(simple);
measureAverage(simple);
measureAverage(simple);
console.log('HoC');
measureAverage(HoC);
measureAverage(HoC);
measureAverage(HoC);
//console.log('Styled');
//measureAverage(styled);