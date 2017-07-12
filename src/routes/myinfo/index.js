import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Myinfo from "./index.scss";
import {Myorder,Listzujian}    from '../myorder/index'

//list
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
// 我的订单的组件

class PersonCenter extends Component{
    render(){
        return (
            <div className={Myinfo.zongti}>
                
                <div className={Myinfo.nav}>
                    <li className={Myinfo.navLeft}></li>
                    <li className={Myinfo.navTitle}>个人中心</li>
                    <li className={Myinfo.navRight}>
                        <img src="./gouwuche.jpg" alt=""/>
                    </li> 
                    <li className={Myinfo.navRight1}>
                        <img src="./message.jpg" alt=""/>
                    </li>
                </div>
                <div className={Myinfo.fengedian}> 
                    <div className={Myinfo.allscroll}>
                     {/*头像部分*/}
                <div className={Myinfo.touxiang}>
                    <img src="https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg" alt=""/>
                    <p>我的名字</p>
                    <ul className={Myinfo.guanzhu}>
                        <li></li>
                        <li>关注</li>
                        <li>聚焦</li>
                        <li></li>
                        
                    </ul>
                </div>
                {/*我的订单*/}
                <Myorder  />
                <div className={Myinfo.alllist}>
                    <Listzujian  img='./order01.jpg'  title="分享领礼券" />
                    <Listzujian path='/myaddress' img='./order02.jpg' title="我的地址" />
                    <Listzujian img='./order03.jpg' title="我的钱包" />
                    <Listzujian img='./order05.jpg' title="我的私信" />
                    <Listzujian img='./order06.jpg' title="我的私藏" />
                </div>
                <div className={Myinfo.myset}>
                    <Listzujian img='./order01.jpg'  title="我的设置" />
                    <Listzujian img='./order01.jpg'  title="清理缓存" />
                    
                </div>
                <div className={Myinfo.myset}>
                    <Listzujian img='./order01.jpg'  title="客服电话" />
                    <Listzujian img='./order01.jpg'  title="意见反馈" />
                    
                </div>
                </div>
                </div>
                
               
                
                
                
               
            </div>
            
        )
    }
}
export default PersonCenter

