import React, { Component } from 'react' ;

class Clock extends Component{

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
        /*React.cloneElement('a',{href:this.props.link},this.props.linktext)*/
        <h1> {this.state.currenTime}</h1>
        )
    }
}
export default Clock;