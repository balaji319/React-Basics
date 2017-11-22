import React, { Component } from 'react' ;

import Digiclock from './slessclock'

import Analogclock from './analogclock'
class Sclock extends Component{

  constructor(props){
    super(props);
    this.state = {
      currenTime: new Date().toLocaleString()
    }
    this.updateTime();
  }

  updateTime(){

    setInterval(() =>{
      this.setState({

         currenTime: new Date().toLocaleString()
      })
    },1000)
  }
    render(){

      return(
              <div>
     
              <Digiclock time={this.state.currenTime} />
              <Analogclock time={this.state.currenTime} />
              </div>
        )
    }
}
export default Sclock;


         /*React.cloneElement('a',{href:this.props.link},this.props.linktext)*/
              /*<h1> {this.state.currenTime}</h1>*/