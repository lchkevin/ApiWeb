import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import "./store/table.css";
import Form from "antd/lib/form";
import axios from 'axios';
import "antd/dist/antd.css";

class App extends Component {

    handleSubmit = event  => {
        if(event) event.preventDefault();
        let nodes = { };
        for(let i = 0; i < event.target.length - 1; i++) {
            nodes[event.target[i].id] = event.target[i].value
        }
        return nodes;
    };

    submitValue =  async e => {
        if (e) e.preventDefault();
        const params = this.handleSubmit(e);
        console.log("params:", params);
        const res = await axios.post('/addapi/apiInfo', params);
        if (res.status === 200) {
            console.log(res.data)
        }else {
            console.log(res.status.code)
        }
    };

    render() {
        console.log('thisProps', this.props);
        return (
            <div className="App div-width" id="list-view">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <form onSubmit={this.submitValue}>
                <table id="apiInfo" align="center">
                    <tbody>
                    <tr>
                        <td>
                            <th className="table-bordered table-text-left table-width">环境 <input className="table-input" placeholder="哪个测试环境，如：SIT/UAT/Online" id="evm"/></th>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <th className="table-bordered table-text-left table-width">所属系统 <input className="table-input" placeholder="后台哪个系统哪个模块,如：user_cms, admin_cms，指定user或admin开头，特殊字符只支持_" id="systemName"/></th>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <th className="table-bordered table-text-left table-width">服务地址</th>
                            <input className="table-input" placeholder="服务所在的地址，如:http://192.168.1.57:8010" id="baseUrl"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <th className="table-bordered table-text-left table-width">用例名称</th>
                            <input className="table-input" placeholder="如：UserCMS01.1001会员查询消息-正向用例" onChange={this.handleChange} id="remark"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <th className="table-bordered table-text-left table-width">压力测试脚本名称</th>
                            <input className="table-input" placeholder="gatling压力测试脚本名称，如：userGetMessage" onChange={this.handleChange} id="gatlingTestName"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <th className="table-bordered table-text-left table-width">预期Http响应Code</th>
                            <input className="table-input" placeholder="如：200,204,400等" onChange={this.handleChange} id="status_code"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <th className="table-bordered table-text-left table-width">预期结果</th>
                            <input className="table-input" placeholder="只能填写Success/Failed，二选一" onChange={this.handleChange} id="expectResult"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <th className="table-bordered table-text-left table-width">uri</th>
                            <input className="table-input" placeholder="uri地址，如：/api/v1/cms/Message/playerMessages?access_token=XXXX，带有用户或者子账号token的用【XXXX】代替" onChange={this.handleChange} id="uri"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <th className="table-bordered table-text-left table-width">请求方法</th>
                            <input className="table-input" placeholder="Http请求方法，如：get，post，put，delete等" onChange={this.handleChange} id="httpMethod"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <th className="table-bordered table-text-left table-width">请求头</th>
                            <input className="table-input" placeholder="HttpHeader，如：Content-Type: application/json, Accept: */*" onChange={this.handleChange} id="header"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <th className="table-bordered table-text-left table-width">请求体</th>
                            <input className="table-input" placeholder='HttpBody，如：{"gameId":"HF_AHK3"}' onChange={this.handleChange} id="setBody"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                    < div className="div-width">
                        <input className="aui-button aui-button-primary" id="create-ApiInfo-submit" name="Edit" type="submit" value="保存"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form.create()(App)
