import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{

  constructor(){
    super()
    this.onDecrement = this.onDecrement.bind(this)
    this.onIncrement = this.onIncrement.bind(this)
  }
   
  onIncrement(){
    this.props.dispatch({type:'increment',payload:this.props.count})
  }

  onDecrement(){
    this.props.dispatch({type:'decrement',payload:this.props.count})
   }
  render(){
    return(
      <center>
      <div className="styleIt">
        <h3>COUNTER</h3>
        <Button onClick={this.onIncrement}  size="sm" outline color="primary"  style={{margin:10}}> + </Button>

        <span>{this.props.count}</span>

        <Button onClick={this.onDecrement}  size="sm" outline color="primary" style={{margin:10}}> - </Button>
      </div>
      </center>
    )
  }
}

const mapStateToProps = state =>{
  return{
    count:state.count
 }
}


export default connect (mapStateToProps)(App);
