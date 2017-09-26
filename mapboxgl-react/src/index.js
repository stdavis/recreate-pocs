import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/tileCacherSW.js')
  .then(function (registration) {
    console.log('tileCacherSW successfully registered');
  })
  .catch(function (error) {
    console.error('Error during tileCacherSW registration', error);
  });
} else {
  console.log('service workers are no supported');
}
