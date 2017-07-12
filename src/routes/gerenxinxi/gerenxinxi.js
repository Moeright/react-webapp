import React,{Component} from 'react';
import gerenxinxiStyle from './gerenxinxi.scss';
import { NavBar, Icon } from 'antd-mobile';
import { ImagePicker } from 'antd-mobile';

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

class ImagePickerExample extends React.Component {
  state = {
    files: data,
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  render() {
    const { files } = this.state;
    return (
      <div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
        />
      </div>
    );
  }
}


class Gerenxinxi extends Component {
    render(){
        return (
            <div>
                <NavBar leftContent=""
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={"注销"}
                    >
                 </NavBar>
                 {/*头像加昵称*/}
                 <div>
<ImagePickerExample />
                 </div>
            </div>
        )
    }
}
export default Gerenxinxi