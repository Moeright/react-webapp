import React,{Component} from 'react';
import hehuuorenStyle from './hehuoren.scss';
import { NavBar, Icon } from 'antd-mobile';
class Hehuoren extends Component {
    render(){
        return (
            <div>
                <NavBar leftContent=""
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                       
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >眨眼合伙人
                 </NavBar>
                 <div className={hehuuorenStyle.content}>
                        <img src="./hehuoren.jpg" alt=""/>
                 </div>
            </div>
        )
    }
}
export default Hehuoren