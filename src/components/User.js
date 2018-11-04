import React,{ Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from './Content';
import New from "./New";
import Todolist01 from "./Todolist01";
import Home from "./Home";
import routes from "../model/router";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

class User extends Component {

    constructor(props) {
        super(props); //父子组件传值
        //定义数据
        this.state={
        }
    }
    componentDidMount(){
        console.log(this.props.routes)
    }
    render() {
        const { SubMenu } = Menu;
        const { Header, Content, Sider } = Layout;
        return (
            <div className="news">
                <div className={'content'}>
                        <Layout>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                    <SubMenu key="sub1" title={<span><Icon type="user" />新闻</span>}>
                                        <Menu.Item key="1">
                                            <Link to={'/User/'}>新闻</Link>
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" title={<span><Icon type="laptop" />记事簿</span>}>
                                        <Menu.Item key="5">
                                            <Link to={'/User/todolist'}>Todolist</Link>
                                        </Menu.Item>
                                        <Menu.Item key="6">option6</Menu.Item>
                                        <Menu.Item key="7">option7</Menu.Item>
                                        <Menu.Item key="8">option8</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                                    {/*嵌套路由写在对应div下*/}
                                    {/*<Route path={`${this.props.match.url}/Content/:aid`} component={Content} />*/}
                                    {
                                        this.props.routes.map((value,key)=>{
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
                                </Content>
                        </Layout>
                </div>

            </div>
        )

    }
}
export default User;