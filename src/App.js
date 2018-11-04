import React, { Component } from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './model/router';
import {Layout,Menu,Header} from 'antd';
class App extends Component {
    //render jsx
  constructor(props){
    super(props);
    this.state={
      view:false
    }
  }
  changeView = ()=>{
    let view = this.state.view;
    this.setState({
        view:!view,
    })
  }

  render() {
      const {view} = this.state.view;   /*在return中调用view 不能在{}内*/
      const { SubMenu } = Menu;
      const { Header, Content, Sider } = Layout;
    return (
        <Router>
          <div className="App">
              <Layout>
                  <Header className="header">
                      <div className="logo" > </div>
                      <Menu
                          theme="dark"
                          mode="horizontal"
                          defaultSelectedKeys={['2']}
                          style={{ lineHeight: '64px' }}
                      >
                          <Menu.Item key="1"><Link to={'/'}>首页</Link></Menu.Item>
                          <Menu.Item key="2"><Link to={'/User'}>用户操作</Link></Menu.Item>
                          <Menu.Item key="3"><Link to={'/ReactFrom'}>表单提交</Link></Menu.Item>
                          <Menu.Item key="4"> <Link to={'/User/home'}>HOME</Link></Menu.Item>
                      </Menu>
                  </Header>
              </Layout>
              <hr/>
              {
                  routes.map((value,key)=>{
                      if(value.exact) {
                          return <Route exact key={key}  path={value.path}
                                        render={props =>(
                                            <value.component {...props} routes={value.routes} />
                                        )}
                          />
                      }else{
                          return <Route  key={key}  path={value.path}
                                         render={props =>(
                                             <value.component {...props} routes={value.routes} />
                                         )}
                              />
                      }

                  })
              }
          </div>
        </Router>
    );
  }
}

export default App;
