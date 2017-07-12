import React,{Component} from 'react';
import {HgsHeader} from '../../components/public/public';

import myaddressStyle from './index.scss';
import {Link} from 'react-router';
class AddressComponent extends Component{
  render(){
    return (
      <div className={myaddressStyle.box}>
          <div>
            <input type="radio"/><span>默认地址</span>
          </div>
          <div>
            <span>姓名</span><span>111111111</span>
          </div>
          <div>
              <span>地址：</span><span>*********</span>
          </div>
          <div>
              <Link >
                  <img src="" alt=""/>
                  <span>编辑</span>
              </Link>
              <Link>
                  <img src="" alt=""/>
                  <span>删除</span>
              </Link>
          </div>
      </div>
    )
  }
}
class Myaddress extends Component{
    render(){
        return (
            <div className={myaddressStyle.content}>
                <HgsHeader title="我的收货地址" path='/dizhi' />
                <AddressComponent />
            </div>
        )
    }
}
export default Myaddress





