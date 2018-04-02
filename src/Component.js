import React, {Component} from 'react';
import { AutoComplete,Carousel} from 'antd';
import 'antd/dist/antd.css';
// import './css/Component.less';
const dataSource = ['12345', '23456', '34567'];
const fetchOptions = {
  method:"get",
  mode:"cors",

}
const ButtonCommonStyle = {
  "vertical-align":"middle"
}
// 走马灯
class Banner extends Component {
  render(){
    return <Carousel autoplay>
      {dataSource.map((ele,index) =>{
        return <div key={index}><h2>{ele}</h2></div>
      })}
    </Carousel>
  }
}
// 按钮
class Button extends Component{
  constructor(props){
    super(props);
    this.state = {
      isToggleOn : true,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState((preState) =>{
      return {
        isToggleOn:!preState.isToggleOn
      }
    })
  }
  render(){
    return <button style={{ButtonCommonStyle}} onClick={this.handleClick}>{this.state.isToggleOn?"ON":"OFF"}</button>
  }
}
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
      this.setDate();
      this.setColor();
    },1000);
  }
  setDate(){
    this.setState({
      date:new Date()
    })
  }
  setColor(){
    this.setState({
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
    <React.Fragment>
    <span>clock:<a style={{color:this.state.color}}>{this.state.date.toLocaleTimeString()}</a></span>
    <Button />
    </React.Fragment>
  );
  }
}
const liEleArray = ["第一行","第二行",<Clock />,<AutoComplete dataSource={dataSource} />,<Banner />]
const LiListArray = liEleArray.map((ele,index) =>{
  return <li key={index}>{ele}</li>
})
function LiComponent () {
  return <React.Fragment>
      {LiListArray}
     </React.Fragment>
}

// 容器组件
class Greeter extends Component{
  render() {
    return (
      <ul>
        {/* <li>第一行</li>
        <li>第二行</li>
        <li> clock:<Clock /></li> */}
        <LiComponent />
      </ul>
    );
  }
}

export default Greeter