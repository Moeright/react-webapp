import React,{Component} from 'react';
import { Tabs, WhiteSpace} from 'antd-mobile';
import  style from "./clothpage.css";
import {Link} from 'react-router';



const TabPane = Tabs.TabPane;

function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}

const girlClassData = [
  {name:"外套",id:"gCoat",enname:"Coat",img:"./images/images/1.jpg"},
  {name:"连衣裙",id:"gDress",enname:"Dress",img:"./images/images/2.jpg"},
  {name:"长裤",id:"gPants",enname:"Pants",img:"./images/images/3.jpg"},
  {name:"短裤",id:"gShorts",enname:"Shorts",img:"./images/images/4.jpg"},
  {name:"卫衣",id:"gFleece",enname:"Fleece",img:"./images/images/6.jpg"},
  {name:"衬衫",id:"gShirt",enname:"Shirt",img:"./images/images/5.jpg"},
  {name:"毛衣/针织衫",id:"gSweater",enname:"Sweater",img:"./images/images/7.jpg"},
  {name:"T恤",id:"gTshirt",enname:"T-shirt",img:"./images/images/8.jpg"},
  {name:"半身裙",id:"gSkirts",enname:"Skirts",img:"./images/images/9.jpg"},
  {name:"期待更多",id:"wishmore",enname:"BestWish",img:""}
] ;
const boyClassData = [
  {name:"T恤",id:"bTshirt",enname:"T-shirt",img:"./images/images/8.jpg"},
  {name:"衬衫",id:"bShirt",enname:"Shirt",img:"./images/images/5.jpg"},
  {name:"牛仔",id:"bJeans",enname:"Jeans",img:"./images/images/1.jpg"},
  {name:"毛衣/针织衫",id:"bSweater",enname:"Sweater",img:"./images/images/7.jpg"},
  {name:"外套",id:"bCoat",enname:"Cxoat",img:"./images/images/1.jpg"},
  {name:"卫衣",id:"bFleece",enname:"Fleece",img:"./images/images/6.jpg"},
  {name:"休闲裤/西裤",id:"bCasual",enname:"Casual/Trousers",img:"./images/images/3.jpg"},
  {name:"短裤",id:"bShorts",enname:"Shorts",img:"./images/images/4.jpg"}
]

class  GirlMenu  extends  Component{
  render(){
    return (
        <ul className={style.clothGirlMenu}>
          {
             girlClassData.map((ele,index)=>{
                return <li className={style.clothGirlList} key={index} >
                          <Link to={this.props.path} >
                              <dl>
                                <dd><img src={ele.img} alt=""/></dd>
                                <dt>
                                  <div>
                                    <h6>{ele.name}</h6>
                                    <h6>{ele.enname}</h6>
                                  </div>   
                                </dt>
                              </dl>
                          </Link>
                </li>
            })
          }
        </ul>
    )
  }
}
class  BoyMenu  extends  Component{
  render(){
    return (
      <ul className={style.clothBoyMenu}>
          {
             boyClassData.map((ele,index)=>{
                return <li className={style.clothBoyList}  key={index}>
                          <Link to={this.props.path} >
                            <dl>
                                <dd><img src={ele.img} alt=""/></dd>
                              <dt>
                                  <div>
                                    <h6>{ele.name}</h6>
                                    <h6>{ele.enname}</h6>
                                  </div>  
                              </dt>
                            </dl>
                          </Link>
                </li>
            })
          }
        </ul>
    )
  }
}
class Qgpage extends Component{
  render(){
    return (
      <div className={ style.qgbox }>
           <button  className={style.qgpage}><Link  to = {this.props.path} className={style.fontcolor}>限时抢购</Link></button> 
      </div>
    )
  }
}

const TabExample = ()=>(
  <div>
      <Tabs defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick}>
          <TabPane tab="女装" key="1">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' ,display:'block'}}>
              <GirlMenu  path='/goodslist'/>
            </div>
          </TabPane>
        <TabPane tab="男装" key="2">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',display:'block' }}>
            <BoyMenu  path='/goodslist'/>
          </div>
        </TabPane>
      </Tabs>
      <Qgpage  path='/limitpage'/>
  </div>
)



export default TabExample 