import React ,{Component} from 'react';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:'我是msg',
        }
    }
    inputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render(){
        return(
            <div>
                {/*model 改变影响 view（react默认）    view改变印象model（自己实现）*/}
                <h2>双休数据绑定</h2>
                <input value={this.state.value} onChange={this.inputChange}/>
                {this.state.value}
                <hr/><br/>
                {/*m->v 用defaultValue   v->m value*/}
                <input defaultValue={this.state.value} />
            </div>

        )
    }
}
export  default  Todolist;