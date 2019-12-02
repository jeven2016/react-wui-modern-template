import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import InnerHeader from '../main/InnerHeader';
import {
  Breadcrumb,
  Button, Col,
  Form, Modal,
  IconHome, Input,
  Layout, Row, Notification,
  Select,
} from 'react-wui-modern';
import {useHistory} from 'react-router-dom';

const UserUpdate = (props) => {
  const {action} = props;
  const history = useHistory();

  useEffect(()=>{
    Notification.config({
      position: "topCenter",
    });
  },[]);

  const back = () => {
    history.push('/main/user');
  };

  const confirm = () => {
    Modal.confirm({
      type: 'primary',
      header: '确认保存',
      body: '您确认要保存此用户吗？',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        setTimeout(() => {
          Notification.ok('用户已经成功创建。');
        }, 500);
        back();
      },
      onCancel: () => {
      },
    });
  };

  return <>
    <InnerHeader collapse={props.collapse} setCollapse={props.setCollapse}>
      <Breadcrumb separator="/">
        <Breadcrumb.Item>
          <IconHome/>
          <span>首页</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          用户管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          用户
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          增加用户
        </Breadcrumb.Item>
      </Breadcrumb>
    </InnerHeader>
    <Layout.Content>
      <div className="demo-layout-content">
        <Button onClick={back}>返回</Button>
        <h4 className="text comment">增加用户</h4>
        <Row>
          <Col sm={12} md={6}>
            <Form nativeType="div">
              <Form.Item type="block">
                <label>用户名</label>
                <Input block/>
              </Form.Item>
              <Form.Item type="block">
                <label>角色组</label>
                <Select placeholder="search..." block
                        onChange={(item) => console.log(item)}>
                  <Select.Option value="admin">管理员</Select.Option>
                  <Select.Option value="customer">客户</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item type="block">
                <label>用户组</label>
                <Select placeholder="search..." block
                        onChange={(item) => console.log(item)}>
                  <Select.Option value="admin">普通员工</Select.Option>
                  <Select.Option value="customer">管理岗</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item type="block">
                <label>状态</label>
                <Select block
                        searchable={false}
                        defaultValue="enable"
                        onChange={() => {}}>
                  <Select.Option value="enable">启用</Select.Option>
                  <Select.Option value="disable">禁用</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item type="block">
                <label>描述</label>
                <Input type="textarea" rows="5" block placeholder=""/>
              </Form.Item>
              <Form.Item type="block">
                <Button color="blue" onClick={confirm}>保存</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>

      </div>
    </Layout.Content>
  </>;
};

export default UserUpdate;