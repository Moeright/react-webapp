import React,{Component} from 'react';
import {NavBar,Icon} from "antd-mobile";
import style from "./limitpage.css";
import {Link} from 'react-router';


class Header extends Component{
    render(){
        return (
            <div className={style.limitHeader}>
                <p className={style.limitTitle}>每周限时</p>
                <Link to={this.props.path}>
                    <img src="./images/header_gwc.jpg" alt=""  className={style["header_gwc"]} />
                </Link>
            </div>
        )
    }
}

class Content extends Component{
    render(){
        return (
            <div className={style.limitContent}>
                <ul className={style.limitList}>
                    <li className={style.Lis}>
                        <dl>
                            <dd className={style.productPic}>
                                <img src="./images/limit1.jpg" alt=""/>
                            </dd>
                            <dt>
                                <ol className={style["goods-descrip"]}>
                                    <li className={style["goods-des-lis","goods-daojishi"]}>倒计时</li>
                                    <li className={style["goods-des-lis","goods-lastTime"]}>
                                        <ul className={style.Timeout}>
                                            <li className={style.times}>0</li>
                                            <li className={style.times}>6</li>
                                            <li className={style.times+''+style.hanzi}>天</li>
                                            <li className={style.times}>1</li>
                                            <li className={style.times}>9</li>
                                            <li className={style.times+''+style.hanzi}>时</li>
                                            <li className={style.times}>5</li>
                                            <li className={style.times}>1</li>
                                            <li className={style.times+''+style.hanzi}>分</li>
                                            
                                        </ul>
                                    </li>
                                    <li className={style["goods-des-lis","goods-pname"]}>糖果马卡龙色拼接圆领短袖</li>
                                    <li className={style["goods-des-lis","goods-thisprice"]}>￥199</li>
                                    <li className={style["goods-des-lis","goods-oldprice"]}>￥299</li>
                                    
                                </ol>
                            </dt>
                        </dl>
                    </li>
                    <li className={style.Lis}>
                        <dl>
                            <dd className={style.productPic}>
                                <img src="./images/limit2.jpg" alt=""/>
                            </dd>
                            <dt>
                                <ol className={style["goods-descrip"]}>
                                    <li className={style["goods-des-lis","goods-daojishi"]}>倒计时</li>
                                    <li className={style["goods-des-lis","goods-lastTime"]}>
                                        <ul className={style.Timeout}>
                                            <li className={style.times}>0</li>
                                            <li className={style.times}>2</li>
                                            <li className={style.times+''+style.hanzi}>天</li>
                                            <li className={style.times}>1</li>
                                            <li className={style.times}>8</li>
                                            <li className={style.times+''+style.hanzi}>时</li>
                                            <li className={style.times}>5</li>
                                            <li className={style.times}>4</li>
                                            <li className={style.times+''+style.hanzi}>分</li>
                                        </ul>
                                    </li>
                                    <li className={style["goods-des-lis","goods-pname"]}>女士时尚休闲款短袖T恤</li>
                                    <li className={style["goods-des-lis","goods-thisprice"]}>￥185</li>
                                    <li className={style["goods-des-lis","goods-oldprice"]}>￥230</li>
                                    
                                </ol>
                            </dt>
                        </dl>
                    </li>
                   
                </ul>
            </div>
        )
    }
}

class ListPage extends Component{
    render(){
        return (
            <div>
                <Header path='/gouwuche' />
                <Content/>
            </div>
        )
    }
}


export default ListPage 