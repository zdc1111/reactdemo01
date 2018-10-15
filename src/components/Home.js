import React,{ Component } from 'react';
import "../assets/css/index.css";
class Home extends Component{

    constructor(){
        super();

        //定义数据
        this.state={
            name:"张三",
            age:"30",
            userInfo: {
                userName:"道春",
            },
            title:"我是一个title",
            color:'red'
        }
    }
    render(){
        return (
            <div>
                <h2>你好react 我是Home组件</h2>
                <div className={this.state.color} title={this.state.title}> 我是一个红色的div </div>
                {/*style={} 中间绑定一个对象 style={this.state.style}*/}
                <div style={{color:'yellow'}} title={this.state.title}> 我是一个红色的div </div>
                <p>姓名：{this.state.name}</p>
                <p>年龄：{this.state.age}</p>
                <p>用户对象：{this.state.userInfo.userName}</p>
                <label htmlFor="name">姓名</label>
                <input id="name"/>
            </div>
        )
    }
}

export default Home;