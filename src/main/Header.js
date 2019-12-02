import React from 'react';
import {
  Button,
  Card,
  Divider,
  Dropdown,
  IconArrowDown,
  IconHome,
  IconList,
  IconSearch,
  Input,
  Menu,
  NavBar,
  Popover,
  Tooltip,
} from 'react-wui-modern';
import {
  IconAccount,
  IconBuild,
  IconLogout,
  IconResetPwd,
  IconUser,
} from '../Icons';
import {useHistory} from 'react-router-dom';

const Catalog = (props) => {
  const body = <>
    <Card block>
      <Card.Header>
        Header
      </Card.Header>
      <Card.Body>
        Body
      </Card.Body>
      <Card.Row>
        Row
      </Card.Row>
      <Card.Footer>
        Footer
      </Card.Footer>
    </Card>
  </>;

  const content = <>
    <Popover body={body} margin={18} triggerBy="click" position="bottomLeft">
      <span style={{focus: 'pointer'}}>
        System Manager &nbsp;&nbsp;
        <IconArrowDown style={{fontSize: '1.5rem', verticalAlign: '-0.35rem'}}/>
      </span>
    </Popover>
  </>;

  return content;
};

const Header = (props) => {
  const history = useHistory();

  const clickHandler = (itemInfo) => {
    const {value} = itemInfo;
    console.log(value);
    switch (value) {
      case 'signOut':
        history.push('/login');
        break;

    }
  };

  return <NavBar type="primary" style={{lineHeight: '4rem'}}
                 extraClassName="clear-radius">
    <NavBar.Title>
      <Button color="green" circle style={{marginRight: '1rem'}}>S</Button>
      <span><Catalog/></span>
      <NavBar.Switch extraClassName="pull-right">
        <IconList/>
      </NavBar.Switch>
    </NavBar.Title>
    <NavBar.List>
      <NavBar.Item hasBackground hasBar>
        <IconHome position="bottom" style={{fontSize: '2rem'}}/>
        <Tooltip body="您可以在此进行系统的网关设置" position="bottom" margin={20}>
          <span>网关管理</span>
        </Tooltip>
      </NavBar.Item>
      <NavBar.Item hasBackground hasBar>
        <IconHome style={{fontSize: '2rem'}}/>
        <Tooltip body="您可以在此进权限配置" position="bottom" margin={20}>
          <span>权限管理</span>
        </Tooltip>
      </NavBar.Item>
      <NavBar.Item hasBackground hasBar>
        <IconHome style={{fontSize: '2rem'}}/>
        <span>Dashboard</span>
      </NavBar.Item>
      <NavBar.Item hasBackground hasBar>
        <IconHome style={{fontSize: '2rem'}}/>
        <span>工具管理</span>
      </NavBar.Item>
      <NavBar.Item alignRight>
        <Popover position="bottom" body={<div>
          No Data Found
        </div>}>
          <Input.IconInput>
            <Input placeholder="Search......"
                   style={{borderRadius: '4rem'}}/>
            <IconSearch/>
          </Input.IconInput>
        </Popover>
        <Dropdown position="bottomRight" triggerBy="click" margin={5}
                  style={{marginLeft: '1rem'}}
                  onSelect={clickHandler}>
          <Button color="green"
                  extraClassName="clear-border text color-white"
                  outline={true}>
            <IconUser style={{fontSize: '1.5rem'}}/>
          </Button>
          <Menu hasBorder>
            <Menu.List>
              <Menu.Item value="profile">
                <Menu.Item.Left>
                  <IconAccount/>
                </Menu.Item.Left>
                <Menu.Item.Center>
                  User Profile
                </Menu.Item.Center>
              </Menu.Item>
              <Menu.Item value="profile">
                <Menu.Item.Left>
                  <IconResetPwd/>
                </Menu.Item.Left>
                <Menu.Item.Center>
                  Change Password
                </Menu.Item.Center>
              </Menu.Item>
              <Menu.Item value="profile">
                <Menu.Item.Left>
                  <IconBuild/>
                </Menu.Item.Left>
                <Menu.Item.Center>
                  Settings
                </Menu.Item.Center>
              </Menu.Item>
              <Divider/>
              <Menu.Item value="signOut">
                <Menu.Item.Left>
                  <IconLogout/>
                </Menu.Item.Left>
                <Menu.Item.Center>
                  Sign Out
                </Menu.Item.Center>
              </Menu.Item>

            </Menu.List>
          </Menu>
        </Dropdown>
      </NavBar.Item>

    </NavBar.List>
  </NavBar>;

};

export default Header;