import React ,{Component} from 'react';

class ReactFrom extends Component {
    constructor(props) {
        super(props);
        this.state={
            msg:'react表单',
            name:'',
            sex:'1',
            city:'',
            citys:[

                '北京','上海','深圳'
            ],
            hobby:[
                {
                    'title':"睡觉",
                    'checked':true
                },
                {
                    'title':"吃饭",
                    'checked':false
                },
                {
                    'title':"敲代码",
                    'checked':true
                }
            ],
            info:''
        }
        this.handleInfo=this.handleInfo.bind(this);
    }
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit = (e) => {
        //阻止submit表单提交事件  form提交惠刷新页面
        e.preventDefault();
        let {name,sex,city,hobby,info} = this.state;
        let hobbys=[];
        hobby.map(function (value,key) {
            if(value.checked==true) {
                hobbys.push(value.title);
            }
        })
        console.log(name,sex,city,hobbys,info)
    }
    handleSex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    handleCity=(e)=>{
        this.setState({
            city:e.target.value
        })
    }
    handleHobby=(key)=>{
        let hobby = this.state.hobby.slice();
        //hobby[e.target.value].checked=e.target.checked;
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }
    handleInfo(e){
        this.setState({
            info:e.target.value
        })
    }

    render(){
        return(
            <div >
                <h2>{this.state.msg}</h2>
                <form onSubmit={this.handleSubmit}>
                    用户：<input type='text' value={this.state.name} onChange={this.handleName}/><br/>
                    性别：<input type='radio' value={'1'} checked={this.state.sex==1?true:false} onChange={this.handleSex}/> 男
                          <input type='radio' value={'2'} checked={this.state.sex==2?true:false} onChange={this.handleSex}/> 女<br/>
                    居住城市:
                    <select value={this.state.city} onChange={this.handleCity}>
                        {
                            this.state.citys.map(function(value,key) {
                                return <option key={key} >{value}</option>
                            })
                        }

                    </select>
                    <br/>
                    爱好：
                    {
                       this.state.hobby.map((value,key)=>{
                          return  (
                              /*多行代码return()用div包住*/
                              <span key={key}>
                              <input type={'checkbox'} checked={value.checked}  onChange={this.handleHobby.bind(this,key)}/>{value.title}
                              </span>
                              )
                       })
                    }
                    <br/>
                    备注<textarea value={this.state.info} onChange={this.handleInfo}/>
                    <br/>
                    <input type={'submit'} value={'提交'} />
                </form>
            </div>

        )
    }
}
export  default  ReactFrom;