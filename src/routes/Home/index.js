
import React from 'react';
import ReactDOM from 'react-dom';

import {hashHistory} from "react-router"
import { TabBar, Icon } from 'antd-mobile';


/* eslint global-require: 0 */

class TabBarExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }

  render() {
    const {pathname} =this.props.location //获取当前路径
      // console.log(pathname)
      //1、设置二级路由
      //2、把TabBar.Item之间的renderContent =>  {this.props.children}
      //3、tabbar点击切换  做路由切换 setState =>  hashHistory.push("/")
      //4、选中的效果selected  = {判断按钮的路径  和  当前的路径  是否相等} {pathname="/"}
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          icon={<Icon type={require('../../svg/icon-core/adduser.svg')} size="md" />}
          // <Icon type="menu-fold" />
          selectedIcon={<Icon type="koubei" size="md" />}
          title="首页"
          key="首页"
          selected={pathname==="/"}

          onPress={() => {
            //window.location.hash = "#/"
            hashHistory.push("/")
          }}
          data-seed="logId"
        >
          {this.props.children}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type="koubei-o" size="md" />}
          selectedIcon={<Icon type="koubei" size="md" />}
          title="分类"
          key="分类"
          selected={pathname==="/clothpage"}
          onPress={() => {
           hashHistory.push("/clothpage")
          }}
          data-seed="logId1"
        >
        {this.props.children}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type="koubei-o" size="md" />}
          selectedIcon={<Icon type="koubei" size="md" />}
          title="作品"
          key="作品"
          selected={pathname==="/goodslist"}
          onPress={() => {
           hashHistory.push("/goodslist")
          }}
          data-seed="logId2"
        >
        {this.props.children}
        </TabBar.Item>

        <TabBar.Item
          icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          title="手记"
          key="手记"
          selected={pathname=="/noteslist"}
          onPress={() => {
            hashHistory.push("/noteslist")
          }}
          data-seed="logId3"
        >
         {this.props.children}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="个人"
          key="个人"
          selected={pathname==="/mine"}
          onPress={() => {
            hashHistory.push("/mine")
          }}
          data-seed="logId4"
        >
          {this.props.children}
        </TabBar.Item>
      </TabBar>
    );
  }
}

export default TabBarExample
