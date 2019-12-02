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
        <Popover body={<AdvanceSearch/>} position="bottomRight">
          <Button>高级</Button>
        </Popover>
      </InputGroup>
    </Col>
    <Col sm={12} md={9} style={{justifyContent: 'flex-end', display: 'flex'}}>
      <Button color="blue" onClick={createUser}>增加</Button>
      <Dropdown position="bottomRight">
        <Dropdown.Title>
          <Button><IconMore/>&nbsp;更多</Button>
        </Dropdown.Title>
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

const AdvanceSearch = () => {
  return <div>
    <h4 className="text comment">高级搜索</h4>
    <Form>
      <Form.Item type="block">
        <label>角色组</label>
        <Select placeholder="search..."
                onChange={(item) => console.log(item)}>
          <Select.Option value="admin">管理员</Select.Option>
          <Select.Option value="customer">客户</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item type="block">
        <label>用户组</label>
        <Select placeholder="search..."
                onChange={(item) => console.log(item)}>
          <Select.Option value="admin">普通员工</Select.Option>
          <Select.Option value="customer">管理岗</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item type="block">
        <Button color="blue">搜索</Button>
      </Form.Item>
    </Form>
  </div>;
};

const UserList = (props) => {
  return <table className="table hover text align-center" {...props}>
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
        <Button color="blue">修改</Button>
        <Button color="red">删除</Button>
        <Dropdown>
          <Dropdown.Title>
            <Button><IconMore/>&nbsp;更多</Button>
          </Dropdown.Title>
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
        <Button color="blue">修改</Button>
        <Button color="red">删除</Button>
        <Dropdown>
          <Dropdown.Title>
            <Button><IconMore/>&nbsp;更多</Button>
          </Dropdown.Title>
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
        <Button color="blue">修改</Button>
        <Button color="red">删除</Button>
        <Dropdown>
          <Dropdown.Title>
            <Button><IconMore/>&nbsp;更多</Button>
          </Dropdown.Title>
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
      <td>User4</td>
      <td></td>
      <td></td>
      <td>正常</td>
      <td>2017-12-15 21:33:22</td>
      <td>
        <Button color="blue">修改</Button>
        <Button color="red">删除</Button>
        <Dropdown>
          <Dropdown.Title>
            <Button><IconMore/>&nbsp;更多</Button>
          </Dropdown.Title>
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
      <td>User5</td>
      <td></td>
      <td></td>
      <td>正常</td>
      <td>2017-12-15 21:33:22</td>
      <td>
        <Button color="blue"><IconResetPwd/></Button>
        <Button color="red"><IconHome/></Button>
        <Dropdown>
          <Dropdown.Title>
            <Button><IconMore/></Button>
          </Dropdown.Title>
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
  </table>;
};

export default UserIndex;