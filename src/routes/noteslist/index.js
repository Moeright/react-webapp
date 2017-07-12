import React,{Component} from 'react';
import {Icon} from 'antd-mobile';
import style from  "./noteslist.css";
import {Link} from 'react-router';


class  Header  extends  Component{
    render(){
        return (
            <div className = {style.notesListHeader}>{this.props.title}</div>
        )
    }
}
class Content extends Component{
    render(){
        return (
            <div className={style.notesListContent}>
                <ul className={style.notes}>
                    <li className={style.notesLis}>
                        <dl>
                            <dd className={style.designLogo}>
                                <img src="./images/images/designlogo.jpg" alt=""/>
                            </dd>
                            <dt className={style.shopInfo}>
                                <h6 className ={style.designer}>YUEL</h6>
                                <h6 className ={style.updateTime}>2017-06-15 11:10</h6>
                                <Icon type="down" size="md" color="#999" />
                            </dt>
                        </dl>
                        <p className={style.description}>新品上架</p>
                        <ol className={style.imgLists}>
                            <li className={style.imgLis}>
                                <img src="./images/images/designerimg.jpg" alt=""/>
                            </li>
                        </ol>
                        <div className={style.hudong}>
                            <div className={style.hudongbox}>
                                <div className={style.comment}>
                                    <Icon type="koubei" size="xxs" color="#999" />
                                    <Link to={this.props.path} ><p className={style.pinglun}>评论</p></Link>
                                </div>
                                <div className={style.like}>
                                    <Icon type="koubei-o" size="xxs" color="#999" />
                                    <p className={style.dianzan}>点赞</p>
                                </div>
                            </div>
                            
                        </div>
                    </li>
                    
                </ul>
            </div>
        )
    }
}
class ListPage extends Component{
    render(){
        return (
            <div className={style.noteslist}>
                <Header title="手记"/>
                <Content path='/commentpage'/>
            </div>

        )
    }
}

export default ListPage  