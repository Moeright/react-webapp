import React,{Component} from 'react';
import personcenterStyle from './index.scss';
import {HgsHeader} from '../../components/public/public';
import {Link} from 'react-router';

class Personcenter extends Component {
    static defaultProps={
        dingdanData:[{path:'/',name:'代付款'},{path:'/',name:'代发货'},{path:'/',name:'代收货'},{path:'/',name:'已完成'},{path:'/',name:'退款'}]
    }
    render(){
        return (
            <ul className={personcenterStyle.hgsall}>
                <HgsHeader />
                <ul className={personcenterStyle.tabbar}>
                    {
                        this.props.dingdanData.map((ele,index)=>{
                            return <li key={ele.index}>
                                <Link to={ele.path}>
                                    {ele.name}
                                </Link>
                            </li>
                        })
                    }
                </ul>
                <div className={personcenterStyle.tabcontent}>
                   {/*工作室，外加订单*/}
                   <div className={personcenterStyle.hgsworkhome}>
                        <div className={personcenterStyle.hgsworkhomeName}>
                            <span>工作室：</span><span>lighting bar</span>
                        </div>
                        <div className={personcenterStyle.hgsworkhomeContent}>
                            <input type="checkbox"/>
                            <Link>
                                <img className={personcenterStyle.hgsimg} src="https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg" alt=""/>
                                
                            </Link>
                            <Link className={personcenterStyle.hgsshopdetail}>
                                <p>商品的名称</p>
                                <div>
                                    <span>尺码：m</span>价格：<span className={personcenterStyle.hgsprice}>￥188.0</span>
                                </div>
                                <div>
                                    <span>颜色：白色</span><span>数量：1</span>
                                </div>

                            </Link>
                            <Link className={personcenterStyle.imgbox}>
                                <img className={personcenterStyle.img} src="./message.jpg" alt=""/>
                            </Link>
                           
                        </div>
                        <div className={personcenterStyle.hgsjiesuan}>
                            <Link className={personcenterStyle.jiesuanLeft}>
                                <div>
                                    <span>合计：</span><span className={personcenterStyle.hgsprice}>￥198.00</span>
                                </div>
                                <div>
                                    <span>订单号：</span><span>11111111</span>
                                </div>
                            </Link>
                            <div className={personcenterStyle.jiesuanRight}>
                                <Link className={personcenterStyle.fukuan}>付款</Link>
                            </div>
                        </div>
                   </div>
                </div>
            {/* 底部组件*/}
            <div className={personcenterStyle.hgsfooter}>
                <div className={personcenterStyle.footerLeft}>
                    <span>总价：</span> <span>0元</span><strong>(不含运费)</strong>
                </div>
                <div className={personcenterStyle.footerRight}>
                    <Link className={personcenterStyle.hebing}>合并订单</Link>
                </div>
            </div>
                
            </ul>
            
        )
    }
}
export default Personcenter