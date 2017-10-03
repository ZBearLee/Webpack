// var name = require('./name');
//require('./style.css');

import name from './name'
import './style.css'
document
  .getElementById('app')
  .innerText = 'hello ~' + name;
