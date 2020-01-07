import React from 'react';
import InnerHeader from '../main/InnerHeader';
import {
  Breadcrumb,
  Button, ButtonGroup,
  Card, Col, Dropdown, Form,
  IconHome, IconSearch, Input, InputGroup,
  Layout,
  Menu, Popover, Row, Select,
} from 'react-wui-modern';
import {Link, useHistory, useRouteMatch} from 'react-router-dom';
import {IconMore, IconResetPwd} from '../Icons';
import {AdvanceSearch} from './AdvanceSearch';

const UserIndex = (props) => {
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
        <Breadcrumb.Item active>
          用户
        </Breadcrumb.Item>
      </Breadcrumb>
    </InnerHeader>
    <Layout.Content>
      <div className="demo-layout-content">
        <Title/>
        <UserList style={{marginTop: '1rem'}}/>
      </div>
    </Layout.Content>
  </>;
};

const Title = () => {
  const history = useHistory();
  const {url} = useRouteMatch();
  const createUser = () => {
    history.push(`${url}/create`);
  };

  return <Row justify="between">
    <Col sm={12} md={3}>
      <InputGroup>
        <Input.IconInput leftIcon>
          <Input placeholder="查询用户"
                 style={{
                   borderTopLeftRadius: '4rem',
                   borderBottomLeftRadius: '4rem',
                 }}/>
          <IconSearch/>
        </Input.IconInput>
        <AdvanceSearch/>
      </InputGroup>
    </Col>
    <Col sm={12} md={9} style={{justifyContent: 'flex-end', display: 'flex'}}>
      <Button color="blue" onClick={createUser}>增加</Button>
      <Dropdown position="bottomRight">
        <Button><IconMore/>&nbsp;更多</Button>
        <Menu hasBorder>
          <Menu.List>
            <Menu.Item id={1} value={1} text="Action 1"/>
            <Menu.Item id={2} value={2} text="Action 2"/>
            <Menu.Item id={3} value={3} text="Action 3"/>
            <Menu.Item id={4} value={4} text="Action 4"/>
          </Menu.List>
        </Menu>
      </Dropdown>
    </Col>

  </Row>;
};

const UserList = (props) => {
  return <div style={{overflow: "auto"}}>
  <table className="table hover text align-center" {...props}>
    <thead>
    <tr>
      <th>用户名</th>
      <th>角色组</th>
      <th>用户组</th>
      <th>状态</th>
      <th>修改时间</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>User1</td>
      <td></td>
      <td></td>
      <td>正常</td>
      <td>2017-12-15 21:33:22</td>
      <td>
        <Button size="small" size="small" color="blue" extraClassName="demo-margin-right">修改</Button>
        <Button size="small" color="red" extraClassName="demo-margin-right">删除</Button>
        <Dropdown>
          <Button size="small"><IconMore/>&nbsp;更多</Button>
          <Menu hasBorder>
            <Menu.List>
              <Menu.Item id={1} value={1} text="Action 1"/>
              <Menu.Item id={2} value={2} text="Action 2"/>
              <Menu.Item id={3} value={3} text="Action 3"/>
              <Menu.Item id={4} value={4} text="Action 4"/>
            </Menu.List>
          </Menu>
        </Dropdown>
      </td>
    </tr>
    <tr>
      <td>User2</td>
      <td></td>
      <td></td>
      <td>正常</td>
      <td>2017-12-15 21:33:22</td>
      <td>
        <Button size="small" color="blue" extraClassName="demo-margin-right">修改</Button>
        <Button size="small" color="red" extraClassName="demo-margin-right">删除</Button>
        <Dropdown>
          <Button size="small"><IconMore/>&nbsp;更多</Button>
          <Menu hasBorder>
            <Menu.List>
              <Menu.Item id={1} value={1} text="Action 1"/>
              <Menu.Item id={2} value={2} text="Action 2"/>
              <Menu.Item id={3} value={3} text="Action 3"/>
              <Menu.Item id={4} value={4} text="Action 4"/>
            </Menu.List>
          </Menu>
        </Dropdown>
      </td>
    </tr>
    <tr>
      <td>User3</td>
      <td></td>
      <td></td>
      <td>正常</td>
      <td>2017-12-15 21:33:22</td>
      <td>
        <Button size="small" color="blue" extraClassName="demo-margin-right">修改</Button>
        <Button size="small" color="red" extraClassName="demo-margin-right">删除</Button>
        <Dropdown>
          <Button size="small"><IconMore/>&nbsp;更多</Button>
          <Menu hasBorder>
            <Menu.List>
              <Menu.Item id={1} value={1} text="Action 1"/>
              <Menu.Item id={2} value={2} text="Action 2"/>
              <Menu.Item id={3} value={3} text="Action 3"/>
              <Menu.Item id={4} value={4} text="Action 4"/>
            </Menu.List>
          </Menu>
        </Dropdown>
      </td>
    </tr>
    </tbody>
  </table>
  </div>;
};

export default UserIndex;