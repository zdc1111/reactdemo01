import React ,{Component} from 'react';

class Home1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            msg:'我是msg',
            uesrname:null,
        }
    }
    run=(event)=> {
        //alert(this.state.msg);
        //console.log(event)
        console.log(event.target.getAttribute("aid"));  //获取执行事件的dom节点
        event.target.style.backgroundColor = 'blue';
    }
    inputChange=(e) =>{
        this.setState({
            //ref获取 dom  给元素定义ref属性
            username:this.refs.username.value
            //username:e.target.value    e事件获取dom

        })
    }
    //回车获取值
    inputKeyUp = (e) =>{
        if(e.keyCode == 13) {
            alert(e.target.value)
        }
    }
    render(){
        return(
            <div>

                <h2>事件对象演示</h2>
                <button aid='button1' onClick={this.run}>事件对象</button>
                <hr/><br/>
                <h2>表单事件</h2>
                {/*获取表单的值*/}
                <input ref="username" onChange={this.inputChange}/>
                <button onClick={()=>{alert(this.state.username)}}>获取input的值</button>
                <hr/><br/>
                <h2>键盘事件</h2>
                <input  onKeyUp={this.inputKeyUp}/>
            </div>

        )
    }
}
export  default  Home1;