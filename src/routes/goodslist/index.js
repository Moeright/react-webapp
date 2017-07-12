import React,{Component} from "react" ; 
import style from "./goodslist.css" ;
import { Icon, Grid } from 'antd-mobile';
import {Footer,Content} from '../../components/public/public';
import fetchJsonp from  "fetch-jsonp" 


function ClassList (props){
    return <div className = {style['cart-sub-header']}>
        <ul className={style['cart-class-list']}>
            {
                props.classData.map(
                    (ele,index)=>{
                        return (
                            <li key={index}  
                            onClick={()=>props.changeClass(ele.classID)}
                            >{ele.className}</li>
                        )
                    }    
                )
            }
        </ul>
    </div>
}
class Header extends Component{
    render (){
        return (
            <div className={style['cart-header']}>
                <input type="text" className={style['cart-headerInput']}/>
                <Icon type="search" size={"sm"}   />
                <img src="./images/header_gwc.jpg" alt="" className={style["cart-header_gwc"]}/>
            </div>
        )
    }
}


class ListPage extends Component{
    /*构造器：设置初始值*/
    constructor(props){
        super(props);
        //设置默认state
        this.state={
            listData:[],
            classData:[],
       
        };

        /*自己定义的函数， 需要绑定this （es6需要，es5不需要）*/
        this.changeClass = this.changeClass.bind(this)
    }
    render(){
        const {listData,classData} = this.state ;
        return (
            <div>
                <Header />
                <ClassList classData={classData} changeClass={this.changeClass} />
                <Content>
                    <ul className={style['cart-product-list']}>
                        {
                            listData.map((ele,index)=><li key={index}>
                                <img src={ele.goodsListImg} />
                                <div className={style['ovfl-e']}>
                                    <h6>{ele.goodsName}</h6>
                                    <h6>￥：{ele.price}元</h6>
                                </div>
                            </li>)
                        }
                    </ul>
                </Content>
                <Footer />
            </div>
        )
    }
    changeClass(id){
        var url = "http://datainfo.duapp.com/shopdata/getGoods.php" ;
        fetchJsonp(url + "?classID="+id,{timeout:20000})
        .then(
            (res)=>res.json()
        )
        .then(
            (data)=>{
                return this.setState({listData:data})      
            }
        )
        
    }
    componentDidMount(){
        fetch("http://datainfo.duapp.com/shopdata/getclass.php",{timeout:20000})
        .then( (res)=>res.json() )
        .then( (data)=>{
                console.log(data);
                this.setState({
                    classData:data,
              
                })
            } )
        fetchJsonp("http://datainfo.duapp.com/shopdata/getGoods.php",{timeout:20000})
        .then( (res)=>res.json() )
        .then( (data)=>{
                console.log(data);
                this.setState({
                    listData:data
                })
            } )
    }
    

}

export default ListPage ;