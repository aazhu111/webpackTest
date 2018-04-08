import React from 'react';
import menuConfig from '../configJSON/menuConfig.json';//导入菜单项配置文件
import 'antd/dist/antd.css';
import './css/Component.less';
import {HTBlog_createMenu as createMenu} from './common/createComponent.js';
import {Layout, Menu, Breadcrumb, Icon,Button} from 'antd';
const {Component} = React;
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;
const subMenu = menuConfig;
const dataSource = ['12345', '23456', '34567'];
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
    <Button icon="search">search</Button>
    </React.Fragment>
  );
  }
}
// 容器组件
class Greeter extends Component{
  constructor(props){
    super(props);
    this.state = {
      handleClick:this.handleClick.bind(this)
    }
  }
  createMenu(ele){
      
  }
  handleClick(){
    alert("触发点击事件")
  }
  render() {
    return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1" onClick={(e) => this.handleClick(this)}><span >首页</span></Menu.Item>
          <Menu.Item key="2">导航</Menu.Item>
          <Menu.Item key="3">帮助</Menu.Item>
        </Menu>
      </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
         {createMenu(subMenu)}
         </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <Clock />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        HTBlog ©2016 Created by 豪~
      </Footer>
      </Layout>
    </Layout>
  </Layout>
    );
  }
}

export default Greeter