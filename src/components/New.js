import React,{ Component} from 'react';
import icon_1 from '../assets/images/icon_1.png';
import '../assets/css/index.css';
class New extends Component {

    constructor(props) {
        super(props); //父子组件传值

        //定义数据
        this.state={
            msg:"新闻",
            list:['11','22'],
            list2:[<h2 key={"1"}>我是一个h2</h2>,<h2 key={"2"}>我是一个h2</h2>],
            list3:[
                {title:"新闻11"},
                {title:"新闻22"},
                {title:"新闻33"},
                {title:"新闻44"},


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
                <img src={icon_1} />
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
                        return(<li key={key}>{value.title}</li>);
                    })
                }
            </div>
        )

    }
}
export default New;