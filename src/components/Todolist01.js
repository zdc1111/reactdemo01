import React from 'react';
import '../assets/css/index.css'
//引入自定义模块
import storage from '../model/storage'

class Todolist01 extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            inputValue:'',
            list:[]
        }
    }
    inputChange = (e) => {
        this.setState({
            inputValue:e.target.value
        })

    }
    addData =(e)=> {

        if(e.keyCode === 13) {
            let tmplist = this.state.list;
            tmplist.push({title:this.refs.title.value,checked:false});
            //让输入框为空
            this.refs.title.value='';
            this.setState({
                list:tmplist
            })
            console.log(tmplist);
            console.log(JSON.stringify(tmplist));
            //执行缓存数据   localStorage只能缓存字符串 数组需要转换成json
            storage.set('todolist',tmplist)
        }


    }
    deleteData =(key)=>{
        let tmplist = this.state.list;
        tmplist.splice(key,1);
        this.setState({
            list:tmplist
        })
        //执行缓存数据   localStorage只能缓存字符串 数组需要转换成json
        storage.set('todolist',tmplist)
    }
    changeCheck =(key)=>{
        let tmplist = this.state.list;
        tmplist[key].checked = !tmplist[key].checked;
        this.setState({
            list:tmplist
        })
        //执行缓存数据   localStorage只能缓存字符串 数组需要转换成json
        storage.set('todolist',tmplist)
    }
    //生命周期函数   页面渲染触发方法
    componentDidMount() {
        //json解析成 数组
        let list = storage.get('todolist');
        if(list) {
            this.setState({
                list:list
            })
        }

    }
    render (){
        return (
            <div>
                <header className="title"> TodoList :   <input ref="title"  onKeyUp={this.addData}/> </header>



                <ul>
                    <h2>待办事项</h2>
                    <hr/>
                    {
                        /*用到this要注意this指向 这里map方法改成箭头函数*/
                        this.state.list.map((value,key) => {
                            if(value.checked == false) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" onChange={() => this.changeCheck(key)} checked={false}></input>
                                        {value.title} ------
                                        <button onClick={() =>this.deleteData(key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                <h2>已完成事件</h2>
                <hr/>
                    {
                        /*用到this要注意this指向 这里map方法改成箭头函数*/
                        this.state.list.map((value,key) => {
                            if(value.checked == true) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" onChange={() => this.changeCheck(key)} checked={true}></input>
                                        {value.title} ------
                                        <button onClick={() =>this.deleteData(key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}
export  default Todolist01