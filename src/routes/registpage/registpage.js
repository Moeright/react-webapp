/**
 * Created by Administrator on 2017/6/13.
 */
import React ,{Component} from 'react';
import {hashHistory} from "react-router";
import { Popover, NavBar, Icon,Toast,Tabs} from 'antd-mobile';
import RegisterStyle  from  "./registpage.css"
import {connect} from  "react-redux"
import fetchJsonp from "fetch-jsonp"

 const Item = Popover.Item;

class RegistPage extends React.Component {
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    render() {
        const{username,vercode,password,cnofimpassword,confimvercode,
            filterUsername,filterPassword,register,getVercode}=this.props
        let offsetX = -10; 
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
            offsetX = -26;
        }
        return (<div >
            <NavBar className={RegisterStyle.Header}
                    iconName={null}
                    mode="light"
                    rightContent={
                        <Popover mask
                                 overlayClassName="fortest"
                                 overlayStyle={{ color: 'currentColor' }}
                                 visible={this.state.visible}
                                 overlay={[
                                     (<a href="#/"><Item key="4" value="home"
                                                         icon={<Icon type={require('../../svg/icon-core/chats.svg')} size="xs" />}
                                     >首页</Item></a>),
                                     (<a href="#/cart"><Item key="6" value="cart" icon={<Icon type={require('../../svg/icon-core/checkbox.svg')} size="xs" />} style={{ whiteSpace: 'nowrap' }}>购物车</Item></a>),

                                 ]}
                                 align={{
                                     overflow: { adjustY: 0, adjustX: 0 },
                                     offset: [offsetX, 15],
                                 }}
                                 onVisibleChange={this.handleVisibleChange}
                                 onSelect={this.onSelect}
                        >
                            <div style={{
                                height: '100%',
                                padding: '0 0.3rem',
                                marginRight: '-0.3rem',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                                <Icon type="ellipsis" />
                            </div>
                        </Popover>
                    }
            >
                注册
            </NavBar>

          <div>
            <ul className={RegisterStyle.List}>
                    <li>
                        <input type="text" placeholder="请输入手机号码"
                        value={username} onChange={filterUsername} />
                    </li>
                    <li className={RegisterStyle.VCode}>
                        <input type="text" placeholder="请输入验证码"
                        value={vercode} onChange={confimvercode}/>
                        <span className={RegisterStyle.VerCode}
                        onClick={getVercode}>获取验证码</span>
                    </li>
                    <li>
                        <input type="password" placeholder="设置密码"
                         value={password} onChange={filterPassword} id="pass"/>
                    </li>
                    <li>
                        <input type="password" placeholder="请再次输入密码"
                         value={cnofimpassword} onChange={cnofimpassword}/>
                    </li>
            </ul>
          <div className={RegisterStyle.tip}>
        <p>请设置密码（6到12位，英文+数字）</p>
        </div>

       <div className={RegisterStyle.register}
         onClick={()=>register(username,password,vercode,cnofimpassword)}>
                创建账户
       </div>
    </div>


        </div>)
    }
}

function mapStateToProps(state) {
    console.log(JSON.stringify(state.registerReducer))
    return {
        // username:state.registerReducer.username,
        // password:state.registerReducer.password
    }
}

function mapDispatchToProps(dispatch) {
    return {
        filterUsername(ev){
			var str=ev.target.value.replace(/[\u4e00-\u9fa5]/g,'');
           // var reg = /^\d{11}$/g;
            // if(reg.test()){
            //        showToast("用户名格式正确")
            // }
			// dispatch({type: "getRegisterInitusernameData", username: str})
		},
       filterPassword(ev){
			var str=ev.target.value.replace(/[\u4e00-\u9fa5]/g,'');
            // var reg = /^[a-z0-9]{6,12}$/g;
            // if(reg.test()){
            //       showToast("密码格式正确")
            // }
			console.log("打印密码"+str);
			// dispatch({type: "getRegisterInitpasswordData", password: str})
		},
        getVercode(event){
			 event.preventDefault();
			var random=parseInt(Math.random()*Math.pow(32,4));
			var v=('00000'+random.toString(16)).substr(-4);
			showToastNoMask(v)
            console.log(v)
             return v
        },

        // confimpassword(ev){
        //     var str=ev.target.value;
        //     var rightpassword = document.getElementById("pass").value;
        //     if(str===rightpassword){
        //          showToast("与上次密码一致")
        //     }else{
        //         return
        //     }
        //      dispatch({type:"cnofimpassword",cnofimpassword:str})
        // },

         register(username,password){

   var url=`http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID=${username}&password=${password}`
         fetch(url,{timeout:"20000"})
        .then(res=>res.json()).then(data=>{
           console.log(data);
            switch(data){
                 case 0:
                  failToast();
                 break;
                 case 2:
                  offline();
                 break;
                 case 1:
                 successToast();
                  hashHistory.push("/login")
	              console.log("	注册成功")
             }
           dispatch({type:"getregisterInitData",registerData:data})

         });
    }
 }
}
function failToast() {
  Toast.fail('用户名重名', 1);
}
function offline() {
  Toast.offline('数据库报错', 1);
}
function successToast() {
  Toast.success('注册成功!!!', 1);

}
function showToastNoMask(v) {
  Toast.info(v, 2, null, false);
}
function showToast(a) {
  Toast.info(a, 1);
}
export default connect(mapStateToProps,mapDispatchToProps)(RegistPage)
