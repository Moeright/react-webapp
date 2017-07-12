import React,{Component} from 'react';
import dizhiStyle from './dizhi.scss';
import { NavBar, Icon } from 'antd-mobile';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import TestWrapper from '../picker/picker';
class BasicInputExample extends React.Component {
  state = {
    focused: false,
    focused1: false,
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List >
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="请输入街道地址："
            autoFocus
          >街道地址：
          </InputItem>
      
        </List>
       
        <List >
          <InputItem
            {...getFieldProps('label8')}
            placeholder="请输入姓名："
            labelNumber={6}
          >收货人姓名：</InputItem>
        </List>
       
        <List >
         
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="请输入手机号："
          >手机号码</InputItem>
         
         
        </List>
        {/*点击之后选择地区*/}
       <TestWrapper />
      </div>
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);
class Dizhi extends Component {
    render(){
        return (
            <div >
                <NavBar leftContent=""
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={"添加"}
                    >我的收获地址
                </NavBar>
                <div className={dizhiStyle.content}>
                    <BasicInputExampleWrapper />
                </div>
            </div>
        )
    }
}
export  default Dizhi