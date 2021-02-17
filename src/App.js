/* eslint-disable */
import React from 'react'; 
import './App.css';
import Header from './Header';
import sirokuma from './img/sirokuma_icon.png';
import Main from './Main';

class App extends React.Component{
  render(){
    const image = sirokuma;
  return(
    <div className="overall">
      <Header image={image}/>
      <Main />
    </div>
  )
  }
}


export default App;
