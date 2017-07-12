/**
 * Created by hasee on 2017/6/7.
 */
import React,{Component} from  "react";
import "./public.css"
import PublicStyle from './public.scss';
import {Link } from 'react-router';
//韩国帅使用的小组件-header  ---start
class Header extends Component {
    render(){
        return <div className="header">
            <ul>
                <li className="header-btn">
                    <a>{"<"}</a>
                </li>
                <li className="header-tit">{this.props.title}</li>
                <li className="header-btn">
                    <a>消息</a>
                </li>
            </ul>
        </div>
    }
}


class Content extends  Component {
    render(){
        return <div className="content">{this.props.children}</div>
    }
}

/*存组件   展示内容*/
/*const Content = (props)=>{
    return <div className="content">{props.children}</div>
};*/

//<Content/> === new Content()
class Footer extends Component {
    /*默认的数据 props  (静态属性)*/
    //static 是静态的意思
    static defaultProps ={
        footerData:[
            {title:"首页",path:"/"},
            {title:"列表",path:"/list"},
            {title:"购物车",path:"/cart"}
        ],
        active:0
    };
    render(){

        const {footerData,active} = this.props;
        //提前获取 属性，让 视图 更简洁
        return <div className="footer">
            <ul>
                {
                   footerData.map((ele,index)=><li key={index}>
                        <a className={active==index?'active':''}
                            href={"#"+ele.path}
                        >{ele.title}</a>
                    </li>)
                }
            </ul>
        </div>
    }
}
class HgsHeader extends Component{
    render(){
        return (
            <ul className={PublicStyle.header}>
                <li className={PublicStyle.headerLeft}>
                    <Link className={PublicStyle.leftarrow} >
                            <img src="./leftarrow.jpg" alt=""/>
                    </Link>
                    
                </li>
                <li className={PublicStyle.headerTitle}>{this.props.title}</li>
                <li className={PublicStyle.headerRight}>
                    <Link to={this.props.path}> </Link>
                </li>
            </ul>
        )
    }
}
//韩国帅使用的小组件-header  ---end

export  {Header,Content,Footer,HgsHeader}

