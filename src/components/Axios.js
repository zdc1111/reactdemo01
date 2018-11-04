import React,{Component} from 'react';
import axios from 'axios';

class Axios extends Component {
    constructor(props) {
        super(props);
        console.log('01构造函数')
        this.state={
            list:[],
            msg:'我是一个msg',
        }
    }
    componentWillMount() {
        console.log('02组件将要挂载');
    }
    componentDidMount(){
        //dom操作放在这里  请求数据也是
        console.log('04组件数据挂载完成') ;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('01是否更新数据');
        //是否更新数据
        console.log(nextProps.title+'---'+nextState.msg);
        return true ;
    }
    //将要更新数据时候触发
    componentWillUpdate(){
        console.log('02组件将要更新');
    }
    //跟新完成
    componentDidUpdate(){
        console.log('04组件数据跟新完成')
    }
    //用在组件销毁时候执行函数
    componentWillUnmount(){
        console.log('05组件销毁');
    }
    //父组件改变prop传值触发
    componentWillReceiveProps(){
        console.log('父子组件传值，父组件改变props值触发')
    }

    render() {
        console.log('03数据渲染');
        return (
            <div>
                <h2>axios获取服务器数据</h2>
                <button onClick={this.getData}>获取服务器api接口</button>
                <hr/>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return <li key={key}>{value.title}</li>
                        })
                    }
                </ul>
                <hr/>
                <h2>组件周期演示---{this.state.msg}---{this.props.title}</h2>
                <button onClick={this.changeMsg}> 更改msg 触发组件更新方法</button>
            </div>
        );

    }
    changeMsg=()=>{
        this.setState({msg:'我变了'});
    }
    getData=()=>{
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';   //接口后台允许了跨域

        axios.get(api)
            .then((response)=> {
                console.log(response.data.result);

                //用到this要注意this指向

                this.setState({

                    list:response.data.result

                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
export default Axios;
