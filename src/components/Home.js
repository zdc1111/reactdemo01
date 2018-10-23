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
            color:'red',
            msg:'我是一个msg',
            message:'我是一个message',
            something:'我是一个something'
        }
        //初始化绑定
        this.getSomething = this.getSomething.bind(this);
    }
    run (){
        alert('我是一个方法');
    }
    getData() {
        alert(this.state.msg);
    }
    getMessage=()=> {
        alert(this.state.message)
    }
    getSomething() {
        alert(this.state.something)
    }
    setDate = ()=> {
        this.setState({
            msg: '这个改变后的message'

        })
        this.getData(); //第二次才改变
    }
    setMessage = (message)=> {
        this.setState({
            message: message

        })
        this.getMessage();

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
                <hr/>
                <button onClick={this.run}>执行方法</button>
                <br/>
                <button onClick={this.getData.bind(this)}>获取数据第一种:改变this指向的方法</button>
                <br/>
                <button onClick={this.getMessage}>获取数据第二种:箭头函数默认bind</button>
                <br/>
                <button onClick={this.getSomething}>获取数据第三种:初始化函数中进行bind</button>
                <br/>
                <button onClick={this.setDate}>设置state</button>
                <br/>
                <button onClick={this.setMessage.bind(this,'张三')}>执行方法传值</button>
                <br/>
                <button onClick={()=>this.setMessage('李四')}>执行方法传值箭头函数</button>
            </div>
        )
    }
}

export default Home;