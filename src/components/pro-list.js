import React,{Component} from "react";
import {Link} from "react-router"
import "./pro-list.css"

// 都通过props来获取.这里不配置样式，在路由里面配置样式
const ProductList = (props)=>{
              console.log(props.listData.data)
  return <ul className="product-list">
          {

              props.listData.data&&props.listData.data.goodsList.map((ele,index)=>{
              return  <li key={index} className="proitem">
                      <Link to={`/detail/${ele.goodsId}`}>
                      <img src={ele.goodsIcon} alt=""/>
                      </Link>
                      <div className="zgoodsname">
                        <p>{ele.goodsName}</p>
                      </div>
                      <div className="zgoodsprice">
                        <p>￥：{ele.goodsPrice/100}</p>
                      </div>
                      </li>
            }
          )
          }
        </ul>
};

export default ProductList;
