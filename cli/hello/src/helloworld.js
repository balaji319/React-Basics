/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/

import React, { Component } from 'react' ;

class Hello1 extends Component{
custom_css={
  color:'red',
  textDecoration:'underline'
}

    render(){


/*       
       this.state -----mutable changebale 
        this.props -----Imutable unchangebale
*/
      return(
        /*React.cloneElement('a',{href:this.props.link},this.props.linktext)*/
        <a href={this.props.link} style={this.custom_css}>{this.props.linktext}</a>
        )
    }
}
export default Hello1;