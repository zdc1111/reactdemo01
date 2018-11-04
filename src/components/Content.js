import React,{ Component } from 'react';
import url from 'url';
class Content extends Component{

    constructor(){
        super();

        //定义数据
        this.state={
            name:"张三",
            age:"30",
        }
    }
    componentDidMount(){
        if(!this.props.location.search){
            console.log("路由的值"+this.props.match.params.aid);
        } else{
            console.log("get的值");
            var aid = url.parse(this.props.location.search,true).query;
            console.log("get的值"+aid);
        }

    }
    render(){
        return (
            <div>
                {
                    !this.props.location.search?
                        <h2>我是新闻组件 --路由页面传值{this.props.match.params.aid}</h2>
                        :
                        {/*<h2>我是新闻组件 --get页面传值{url.parse(this.props.location.search,true).query}</h2>*/}
                }
            </div>
        )
    }
}

export default Content;