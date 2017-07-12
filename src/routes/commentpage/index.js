import React,{Component} from 'react';
import {Icon} from 'antd-mobile';
import style from  "./commentpage.css";




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
                            <dd className={style.designLogo}><img src="./images/images/designlogo.jpg" alt=""/></dd>
                            <dt className={style.shopInfo}>
                                <h6 className ={style.designer}>YUEL</h6>
                                 
                                <div className={style.guanzhu} > + 关注 </div>
                            </dt>
                        </dl>
                        <p className={style.description}>新品上架</p>
                        <ol className={style.imgLists}>
                            <li className={style.imgLis}><img src="./images/images/designerimg.jpg" alt=""/></li>
                            
                        </ol>
                        <div className={style.hudong}>
                            <div className={style.hudongbox}>
                                <div className={style.comment}>
                                    <Icon type="koubei" size="xxs" color="#999" />
                                    <p className={style.pinglun}>good</p>
                                </div>
                                <div className={style.like}>
                                    <Icon type="koubei-o" size="xxs" color="#999" />
                                    <p className={style.dianzan}>bad</p>
                                </div>
                            </div>
                            
                        </div>
                    </li>
                    
                </ul>
                
                <ol className={style.talkarea}>
                    <p className={style.alltalk}>全部评论</p>
                    <li className={style.talkList}>
                        <dl>
                            <dd className={style.userLogo}><img src="./images/images/designlogo.jpg" alt=""/></dd>
                            <dt className={style.userInfo}>
                                <h6 className ={style.userName}>王机智</h6>
                                <h6 className ={style.updateTime}>2017-06-15 11:10</h6>
                            </dt>
                        </dl>
                        <p className={style.discuss}>哎呦，不错呦</p>
                    </li>
                    <li className={style.talkList}>
                        <dl>
                            <dd className={style.userLogo}><img src="./images/images/designlogo.jpg" alt=""/></dd>
                            <dt className={style.userInfo}>
                                <h6 className ={style.userName}>王美丽</h6>
                                <h6 className ={style.updateTime}>2017-06-15 11:10</h6>
                            </dt>
                        </dl>
                        <p className={style.discuss}>老铁，没毛病，很喜欢</p>
                    </li>
                </ol>
            </div>
        )
    }
}
class Footer extends Component{
    render(){
        return (
            <div className={style.commentFooter}>
                <input type="text" defaultValue="发表评论"/>
                <button className={style.submit}>+</button>
            </div>
        )
    }
}
class ListPage extends Component{
    render(){
        return (
            <div className={style.noteslist}>
                <Header title="评论"/>
                <Content/>
            </div>

        )
    }
}

export default ListPage  