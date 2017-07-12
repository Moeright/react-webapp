import React,{Component} from "react";
import ReactDOM from 'react-dom';
import {connect} from "react-redux";
import fetchJsonp from "fetch-jsonp";
import style1 from "./goodsdetail.css";
import {Carousel} from "antd-mobile";


class DetailPage extends Component{
  render(){
    const {detailData} = this.props;
    console.log(detailData);

    return <ul className="prod">
          {
          detailData.data&&(
            <div>
            <Carousel
                className={style1['my-carousel']}
                autoplay={true}
                infinite
                selectedIndex={1}
                swipeSpeed={35}
                >
                {detailData.data.goodsPics.map((ele,ii) => (
                    <img  key={ii} className={style1.lunbo}
                        src={ele}
                        alt="icon"
                        onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                            this.setState({
                                initialHeight: null,
                            });
                        }}
                    />
                ))}
            </Carousel>
            <p className={style1.title}>{detailData.data.goodsName}</p>
            <p className={style1.area}>{detailData.data.goodsTitle}</p>
            <p className={style1.price}>￥：{detailData.data.goodsPrice/100}.00</p>
            <span className={style1.delivery}>快递：0.00</span>
            <span className={style1.delivery}>销量：{detailData.data.soldCount}</span>
            </div>

          )
          }
          </ul>
  }
  componentDidMount(){
    setTimeout(() => {
        this.setState({
            data: ['201706121127325478', '201706060952078048', '201705231641341027']
        });
    }, 100);

    console.log(this.props.params);
      this.props.getInitData(this.props.params.goodsId);
      console.log(this.detailData);

  }
}
function mapStateToProps(state) {
  return {
    detailData:state.detailReducer.detailData
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getInitData(goodsID){
      fetch("/api/goods/"+goodsID,{timeout:20000})
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        dispatch({type:"getdetailInitData",detailData:data})
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailPage)
