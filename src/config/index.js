// 总体思路：在配置文件里面建项目总体的配置文件，在reducer里面建索引文件，是各个“管理员”，在config中，建store文件，将reducer引入，打包，
// 建一个仓库，管理员是打包的很多管理员。在首页的index文件中，设置各个组件，渲染，但是可以用仓库的各个管理程序了。渲染即可。在要渲染的页面调用store
// 的功能，比如点击添加 必须通过dispatch来调用

const config = {
  serverUrl : "http://www.zhayanwang.com/",
  serverUrl2:"http://datainfo.duapp.com/shopdata/"
};

export default config
