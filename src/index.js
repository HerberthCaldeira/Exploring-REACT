import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './components/Home';
import MyInfo from './components/MyInfo'
import ToDo from './components/ToDo'
import Jokes from './components/Jokes'
import FirstBasedClass from './components/FirstBasedClass'
import FirstState from './components/FirstState'
import SecondState from './components/SecondState'
import FirstHandleEvents from './components/FirstHandleEvents'
import Count from './components/Count'
import ConditionalRendering from './components/ConditionalRendering'
import WorkingApi from './components/WorkingApi'
import FormAirline from './components/FormAirline'




import * as serviceWorker from './serviceWorker';

//Functional Components
function List(){
  return ( 
    <ul>
      <li>1</li>
      <li>teste weqwe das dasd </li>
      <li>teste weqwe</li>
    </ul>
  )
}

ReactDOM.render(<FormAirline />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
