import React,{Component} from 'react';
import HeaderComponentStyle from './headerComponent.scss';
class HgsHeaderHomeWork extends Component {
    render(){
        return (
            <div>
                <div className={HeaderComponentStyle.hgsworkhomeName}>
                       <span>工作室：</span><span>lighting bar</span>
                </div>
            </div>
        )
    }
}
export default HgsHeaderHomeWork