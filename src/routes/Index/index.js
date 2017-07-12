import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import style from "./index.css"
import fetchJsonp from "fetch-jsonp"
import {NavBar,Icon,Carousel, WhiteSpace, WingBlank,List} from "antd-mobile";
import { Grid } from 'antd-mobile';
import ProductList from "../../components/pro-list";
import LoginPage from "../loginpage/loginpage";
import RegistPage from "../registpage/registpage";
import {Link} from "react-router";

const data = Array.from(new Array(5)).map((_val, i) => ({
  // icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png'

}));
const Item = List.Item;
const Brief = Item.Brief;
class Index extends Component {
    state = {
        data: ['', '', '','',''],
        initialHeight: 400,
    }
    render(){
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        const {listData,classData,changeClas} = this.props;
        return (
            <div>
             <NavBar iconName={false}
                 leftContent={[
                            <Icon key="0"  type={require('../../svg/icon-core/adduser.svg')} />
                            ]}
                 rightContent={[
                           <Link to={`/regist`}>
                           <p>注册</p>
                           </Link>,
                            <Link to={`/login`}>
                            <p>登录</p>
                            </Link>

                            ]}
                            >
                 <div className="navcenter">
                    <input value="搜索商品"/>
                 </div>
                </NavBar>

                 <div className={style.content}>
                    <Carousel
                        className={style['my-carousel']}
                        autoplay={true}
                        infinite
                        selectedIndex={1}
                        swipeSpeed={35}
                        >
                        {this.state.data.map(ii => (
                            <a href="http://www.baidu.com" key={ii} style={hProp}>
                            <img
                                src={`http://back.zhayanwang.com/yingwangkeji/banner/${ii || '201706121127325478'}.jpg`}
                                alt="icon"
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                    this.setState({
                                        initialHeight: null,
                                    });
                                }}
                            />
                            </a>
                        ))}
                    </Carousel>
                    <div className={style.ztab}>
                      <ul>
                        <li><a><img src="http://back.zhayanwang.com/yingwangkeji/studio_src/temp/201704180952598061.jpg"/></a></li>
                        <li><a><img src="http://back.zhayanwang.com/yingwangkeji/studio_src/temp/201704201140087905.jpg"/></a></li>
                        <li><a><img src="http://back.zhayanwang.com/yingwangkeji/studio_src/temp/201705031411314143.jpg"/></a></li>
                        <li><a><img src="http://back.zhayanwang.com/yingwangkeji/studio_src/temp/201704180952598061.jpg"/></a></li>
                        <li><a><img src="http://images.iwinking.com/imgs/studio_src/temp/201605091330148886.png"/></a></li>
                      </ul>
                    </div>

                    <p className={style.renqi}>人气单品</p>
                    <ProductList listData={listData} />

                 </div>
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['201706121127325478', '201706060952078048', '201705231641341027',
                '201705251522536347', '201706061050279966']
            });
        }, 100);
        if(!this.props.listData.length){
        this.props.getInitData()
      }

   }
}
function mapStateToProps(state) {
    return {
      listData:state.listReducer.listData,
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
        getInitData(){
          fetch("/api/merchant/qinyuan/goods?__t=1497428539615&page=2&size=20",{timeout:20000})
          .then(res=>res.json())
          .then(data=>{
            dispatch({type:"getProductInitData",listData:data})
          });
        }
      }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Index);
