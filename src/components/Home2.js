import React,{Component} from 'react';
import Axios from './Axios';

class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'我是一个父组件传值'
        }
    }
    setTitle = () =>{
        this.setState({
            title:'我是改变后的title'
        })
    }

    render() {
        return (
            <div>
                <Axios title={this.state.title}/>
                <button onClick={this.setTitle}>改变title（父组件给子组件的值）</button>
            </div>
        );

    }
}
export default Home2;
