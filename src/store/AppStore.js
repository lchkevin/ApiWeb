/**
 * Created by kevin-jx on 2018/6/7.
 */
import {observable} from "mobx";


class AppStore {
    columns = [{
    title: '编号',
    dataIndex: 'id',
    key: 'id',
}, {
    title: '用例名称',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '所属系统',
    dataIndex: 'systemName',
    key: 'systemName',
}, {
    title: '环境',
    dataIndex: 'evm',
    key: 'evm',
}, {
    title: '服务器地址',
    dataIndex: 'ip:port',
    key: 'baseUrl',
}, {
    title: 'uri',
    dataIndex: 'uri',
    key: 'uri',
}, {
    title: '请求方法',
    dataIndex: 'httpMethod',
    key: 'httpMethod',
}, {
    title: '请求头',
    dataIndex: 'httpHeaders',
    key: 'httpHeaders',
}, {
    title: '请求体',
    dataIndex: 'requestBody',
    key: 'requestBody',
}, {
    title: '预期结果',
    dataIndex: 'success/failed',
    key: 'expectResult',
}, {
    title: '是否压力测试',
    dataIndex: 'true/false',
    key: 'name',
}, {
    title: '压力测试脚本名称',
    dataIndex: 'gatlingShellName',
    key: 'gatlingShellName',
}, {
    title: '预期StatusCode',
    dataIndex: 'httpStatusCode',
    key: 'httpStatusCode',
}];

}
const appStore = new AppStore();
export default appStore