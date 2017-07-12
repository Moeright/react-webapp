import React,{Component} from 'react';
import {connect} from 'react-redux';
import gouwucheStyle from './gouwuche.scss';
import { NavBar, Icon } from 'antd-mobile';
import HgsHeaderHomeWork from '../headerComponent/headerComponent';
import { Flex, WhiteSpace } from 'antd-mobile';
import { SwipeAction, List,Toast } from 'antd-mobile';
import {Link} from 'react-router';
import fetchJsonp from 'fetch-jsonp';
import config from '../../config/index';
import { Stepper } from 'antd-mobile';


class GouwuchePage extends Component{
    render(){
        const {changeNum,gouwucheData} = this.props;
        console.log(this.props.gouwucheData)
        return(
            <div>
                <NavBar leftContent=""
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                       
                        <Icon key="1" type="ellipsis" />,
                    ]}

                    >
                   购物车
                </NavBar>  
            {/*购物车具体内容*/}
             <HgsHeaderHomeWork />
                  {/*购物车的集体内容*/}
             
                <div className={gouwucheStyle.content}>
                    {
                        gouwucheData.map((ele,index)=>{
                            return (
                                <div> 
                               
                                   <SwipeAction
                                        style={{ backgroundColor: 'gray' }}
                                        autoClose
                                        right={[
                                            {
                                            text: 'Cancel',
                                            onPress: () =>console.log("取消"),
                                            style: { backgroundColor: '#ddd', color: 'white' },
                                            },
                                            {
                                            text: 'Delete',
                                            onPress: () => {this.props.delItem(index,ele.goodsID)},
                                            style: { backgroundColor: '#F4333C', color: 'white' },
                                            },
                                        ]}
                                        
                                        >
                                      <Flex className={gouwucheStyle.box}>
                                            <input type="checkbox"/>
                                            <Link className={gouwucheStyle.img}>
                                                <img src={ele.goodsListImg} alt=""/>
                                            </Link>
                                            <Flex.Item className={gouwucheStyle.item}>
                                                <p>{ele.goodsName}</p>
                                                <div>
                                                    <span>尺码：</span><span>m</span><span>价格：</span><span>{ele.price}</span>
                                                </div>
                                                <div><span>颜色：</span><span>绿色</span></div>
                                                <div>
                                                    <span>数量</span>
                                                    <List.Item extra={
                                                        <Stepper
                                                            style={{ width: '100%', minWidth: '100%' }}
                                                            showNumber
                                                            max={10}
                                                            min={1}
                                                            value={ele.number}
                                                            onChange={(num)=>{
                                                                changeNum(num,ele.goodsID,index)
                                                            }}
                                                        />}
                                                        wrap
                                                        >
                                                     </List.Item>
                                                </div>
                                            </Flex.Item>
                                            



                                      </Flex>


                                     </SwipeAction>
                                </div>
                            )
                        })
                    }
                </div> 
               
            </div>
        )
    }
    componentDidMount(){
        this.props.getInitial()
       
    }
}
function mapStateToProps(state){
    return {
        gouwucheData:state.gouwucheReducer.gouwucheData
        
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getInitial(){
            fetchJsonp(`${config.serverUrl2}/getCar.php?userID=huazai`,{timeout:20000})
            .then((res)=>res.json())
            .then((data)=>{
                return dispatch({type:'getgouwucheData',gouwucheData:data})
            })
           
        },
        changeNum(num,id,index){
                Toast.loading("正在加载")
                fetch(`${config.serverUrl2}/updatecar.php?userID=huazai&goodsID=${id}&number=${num}`,{timeout:2000})
                .then((res)=>res.json())
                .then((data)=>{
                    console.log(data)
                    dispatch({type:'CART_CHANGE_NUM',gouwucheData:{num,index}})
                    Toast.hide()
                })
           
                
           
        },
        delItem(index,id){
             Toast.loading("正在加载")
                fetch(`${config.serverUrl2}/updatecar.php?userID=huazai&goodsID=${id}&number=0}`,{timeout:2000})
                .then((res)=>res.json())
                .then((data)=>{
                    console.log(data)
                    dispatch({type:'CART_DEL_NUM',gouwucheData:{index,id}})
                    Toast.hide()
                })
        }
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(GouwuchePage)
