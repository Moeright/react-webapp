import React,{Component} from 'react';
import {render} from "react-dom";
import ReactDOM from 'react-dom';
import store from "./config/store";
import {Provider} from "react-redux";
import {Button,NavBar,Icon} from "antd-mobile";
import {Router,Route,hashHistory,IndexRoute} from "react-router";

import Home from './routes/Home';
import Index from './routes/Index';
import ClothPage from './routes/clothpage';
import GoodsList from './routes/goodslist';
import NotesList from './routes/noteslist';
import PersoncenterPage from './routes/personcenter/index';
import Mine from './routes/myinfo';

import Myaddress from './routes/myaddress';
import Dizhi from './routes/dizhi/dizhi';
import Hehuoren from './routes/hehuoren/hehouren';
import Gerenxinxi from './routes/gerenxinxi/gerenxinxi';
import Gouwuche from './routes/gouwuche/gouwuche';
import Listview from './routes/listview/listview';

import DetailPage from "./routes/goodsdetail/goodsdetail";
import RegistPage from "./routes/registpage/registpage";
import LoginPage from "./routes/loginpage/loginpage";
import CommentPage from "./routes/commentpage/index";
import LimitPage from "./routes/limitpage";



          const App = ()=>{
              return <Provider store={store}>
                  <Router history={hashHistory}>
                      <Route path="/" component={Home}>
                          <IndexRoute component={Index} />
                          <Route path="clothpage" component={ClothPage } />
                          <Route path="goodslist" component={GoodsList } />
                          <Route path="noteslist" component={NotesList } />
                          <Route path="mine" component={Mine } />
                         
                      </Route>

                  <Router path='/personcenter' component={PersoncenterPage}></Router>
                  <Router path='/myaddress' component={Myaddress}></Router>
                  <Router path='/dizhi' component={Dizhi}></Router>
                  <Router path='/hehuoren' component={Hehuoren}></Router>
                  <Router path='/gerenxinxi' component={Gerenxinxi}></Router>
                  <Router path='/gouwuche' component={Gouwuche}></Router>
                  <Router path='/listview' component={Listview}></Router>
                  <Router path="/detail(/:goodsId)" component={DetailPage} />
                  <Router path="/regist" component={RegistPage} />
                  <Router path="/login" component={LoginPage} />
                  <Router path="/commentpage" component={CommentPage} />
                   <Router path="/limitpage" component={LimitPage} />
                 

                  </Router>
              </Provider>
          }

ReactDOM.render(<App/>, document.getElementById('root'));
