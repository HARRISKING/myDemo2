import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// function tick(){
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
// setInterval(tick,1000);


class Welcome extends React.Component{
  render() {
    return <h1>Hello, Component</h1>;
  }
}



ReactDOM.render(
  <Welcome/>,
  document.getElementById('root')
)
