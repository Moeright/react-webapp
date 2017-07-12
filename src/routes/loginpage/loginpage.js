/**
 * Created by Administrator on 2017/6/13.
 */
import React ,{Component} from 'react';
import {connect} from  "react-redux"
import {hashHistory} from "react-router";
import { Popover, NavBar, Icon,Toast, Tabs, WhiteSpace } from 'antd-mobile';
import LoginStyle  from  "./loginpage.css"
import fetchJsonp from "fetch-jsonp";
 const Item = Popover.Item;
 const TabPane = Tabs.TabPane;

function callback(key) {
    console.log('onChange', key);
}
function handleTabClick(key) {
    console.log('onTabClick', key);
}

class LoginPage extends Component {
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
        const{username,password,filterUsername,filterPassword,login}=this.props
        let offsetX = -10;
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
            offsetX = -26;
        }
        return (<div >
            <NavBar className={LoginStyle.Header}
                    onLeftClick={() => hashHistory.push('/')}
                mode="light"
                rightContent={
                    <Popover onClick={()=>hashHistory.push("/register")}>
                            <span className={LoginStyle.register}></span>
                    </Popover>
                }
            >
                登录
            </NavBar>

           <div>
            <WhiteSpace />
            <Tabs defaultActiveKey="2" animated={false} onChange={callback} onTabClick={handleTabClick} style={{height:'100%'}}>

            <TabPane key="2">
                <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',width:'100%' }}>
                    <div style={{width:'100%',height:'100%'}}>
                <ul className={LoginStyle.List}>
                    <li>
                        <input type="text" placeholder="请输入手机/邮箱"
                         value={username} onChange={filterUsername}/>
                    </li>
                    <li>
                        <input type="text" placeholder="请输入密码"
                         value={password} onChange={filterPassword}/>
                    </li>
                </ul>
                <div className={LoginStyle.login}
                      onClick={()=>login(username,password)}>
                    登录
                 </div>
                <div className={LoginStyle.otherway}>
                    </div>
                </div>
                </div>
             </TabPane>
             </Tabs>
             <WhiteSpace />
             </div>
    </div>)
    }
}

function mapStateToProps(state) {
    console.log(JSON.stringify(state.loginReducer))
    return {
        // username:state.loginReducer.username,
        // password:state.loginReducer.password
    }
}

function mapDispatchToProps(dispatch) {
    return {
       filterPassword(ev){
			var str=ev.target.value.replace(/[\u4e00-\u9fa5]/g,'');
			console.log("打印密码"+str,ev);
			// dispatch({type: "getLoginInitPasswordData", password: str})
		},
		filterUsername(ev){
			var str=ev.target.value.replace(/[\u4e00-\u9fa5]/g,'');
			// dispatch({type: "getLoginInitUserData", username: str})
		},
         login(username,password){
   var url=`http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID=${username}&password=${password}`
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
                 default:
                 successToast()
                     hashHistory.push("/list")
	              console.log("登录成功")
             }
            // dispatch({type:"getLoginInitData",loginData:data})
            localStorage.setItem("loginData",data);
         });
    }
 }
}
function failToast() {
  Toast.fail('用户名不存在', 1);
}
function offline() {
  Toast.offline('用户名密码不符', 1);
}
function successToast() {
  Toast.success('登录成功!!!', 1);
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)
