import React from 'react';
import { Menu} from 'antd';
const { SubMenu } = Menu;

function createMenu(subMenu){
    return subMenu.map((ele) =>{
        return (<SubMenu key={ele.key} title={<span><Icon type={ele.Icon} />{ele.subName}</span>}>
            {
              ele.menu.map((ele,index) => {
                return <Menu.Item key={index}>{ele}</Menu.Item>
              })
            }
        </SubMenu>)
      })
}

// 暴露方法
exports.HTBlog_createMenu = createMenu;