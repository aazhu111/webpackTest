import React, {Component} from 'react'
// 时钟组件
class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      date:new Date(),
      color:"#000"
    }
  }
  componentWillUnmount(props){
    clearInterval(this.timeID);
  }
  componentDidMount(props){
    this.timeID = setInterval(()=>{
      this.setDate();this.setColor();
    },1000);
  }
  setDate(){
    this.setState({
      date:new Date()
    })
  }
  setColor(){
    this.setDate({
      color:this.changeColor()
    })
  }
  changeColor(props){
      let result = "#";
      for(let i =0;i<6;i++){
        result += Math.floor(Math.random()*16).toString(16);
      }
      return result;
  }
  render(){
    return (
    <span style={{color:this.state.color}}> clock:{this.state.date.toLocaleTimeString()} </span>
  );
  }
}

// 容器组件
class Greeter extends Component{
  render() {
    return (
      <ul>
        <li>第一行</li>
        <li>第二行</li>
        <li><Clock /></li>
      </ul>
    );
  }
}

export default Greeter