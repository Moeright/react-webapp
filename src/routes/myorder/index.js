import React,{Component} from 'react'
import orderStyle from './index.scss'
import {Link} from 'react-router';
//list
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
//小列表组件
class Listzujian extends Component{
    
    render(){
        return (
             
                <Link to={this.props.path} className={orderStyle.orderzujian}>
                    <img src={this.props.img} alt=""/>
                    <span>{this.props.title}</span>
                 </Link>
           
        )
    }
}
class Myorder extends Component{
    static defaultProps={
        orderlist:[
            {icon:'./waitpay.jpg',name:'代付款',patch:'/'},
            {icon:'./waitplane.jpg',name:'代付款',patch:'/'},
            {icon:'./endplane.jpg',name:'代付款',patch:'/'},
            {icon:'./paydone.jpg',name:'代付款',patch:'/'},
            {icon:'./payagain.jpg',name:'代付款',patch:'/'}
        ]
            
    }
    render(){
        console.log(this.props)
        return(
            <div className={orderStyle.orderall}>
               <Listzujian path='/personcenter' img='./dingdan.jpg' title="我的订单" />
                <ul  className={orderStyle.order}>
                {
                   this.props.orderlist.map((ele,index)=>{
                       return (

                           <li key={index}>
                                <img src={ele.icon} alt=""/>
                                <span>{ele.name}</span>
                           </li>
                       )
                   }) 
                }
            </ul>
            </div>
            
        )
    }
}

export  {Myorder,Listzujian} 