import React,{ Component} from 'react';
import icon_1 from '../assets/images/icon_1.png';
import '../assets/css/index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Icon,DatePicker } from 'antd';
import Content from './Content';

class New extends Component {

    constructor(props) {
        super(props); //父子组件传值

        //定义数据
        this.state={
            msg:"新闻",
            list:['11','22'],
            list2:[<h2 key={"1"}>我是一个h2</h2>,<h2 key={"2"}>我是一个h2</h2>],
            list3:[
                {
                    aid:'1',
                    title:"新闻11"
                },
                {
                    aid:'2',
                    title:"新闻22"
                },
                {
                    aid:'3',
                    title:"新闻33"
                },
                {
                    aid:'4',
                    title:"新闻44"
                },
            ]
        }
    }

    render() {
        let listResult = this.state.list.map(function(value,key) {
            return <li key={key}>{value}</li>
        })
        return (
            <div className="news">
                <h2>{this.state.msg}</h2>
                <DatePicker  />
                <Icon style={{width:'150px'}} type="pie-chart" />
                <img src={require('../assets/images/icon_1.png')} />
                {/*<img src="" />*/}
                <hr/>
                {this.state.list2}
                <hr/>
                <ul>
                    {listResult}
                </ul>
                <hr/>
                {
                    this.state.list3.map(function(value,key) {

                        return(<li key={key}>
                            <Link to={`/User/Content/${value.aid}`} >路由传值--{value.title}</Link><br/>
                            {/*<Link to={`/Content/${value.aid}?aid=${value.aid}`} >get传值---{value.title}</Link>*/}
                        </li>);
                    })
                }
            </div>
        )

    }
}
export default New;