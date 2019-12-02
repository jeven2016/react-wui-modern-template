import React from 'react';
import {Badge, IconHome, Menu, Tooltip} from 'react-wui-modern';
import {DemoIconDashboard, IconBuild, IconUser} from '../Icons';
import {Link, useRouteMatch, useHistory} from 'react-router-dom';

const SliderContent = (props) => {
  const history = useHistory();
  const {url} = useRouteMatch();

  const clickItem = (itemInfo) => {
    switch (itemInfo.id) {
      case 'userSummary':
        history.push(`${url}/userSummary`);
        break;
      case 'user':
        history.push(`${url}/user`);
        break;
    }
  };

  return <>
    <div className="demo-slider-content">
      <IconUser style={{fontSize: '5rem'}}/>
      <span className="demo-slider-info">
        My Name
      </span>
      <span>
        <span style={{marginRight: '1rem'}}>
          <a href="#">Edit Profile</a>
        </span>
        <span>
          <a href="#">Sign Out</a>
        </span>
      </span>
    </div>
    <div className="demo-menu-content">
      <Menu type="primary" block menuDirection="vertical"
            defaultOpenedMenus={['userMenu']}
            onClickItem={clickItem}
            extraClassName="demo-slider-menu">
        <Menu.SubMenu id="userMenu">
          <Menu.Header>
            <IconUser/>
            <span>用户管理</span>
          </Menu.Header>
          <Menu.List>
            <Menu.Item id="userSummary">
              概览
            </Menu.Item>
            <Menu.Item id="itemUserGroup">用户组</Menu.Item>
            <Menu.Item id="user">
              用户
            </Menu.Item>
            <Menu.Item id="itemRoleGroup">角色组</Menu.Item>
            <Menu.Item id="itemRole">角色</Menu.Item>
            <Menu.Item id="itemPrivilege">权限</Menu.Item>
            <Menu.Item id="itemOrg">组织结构</Menu.Item>
          </Menu.List>
        </Menu.SubMenu>
        <Menu.SubMenu id="sub2">
          <Menu.Header>
            <DemoIconDashboard/>
            <span>系统设置</span>
          </Menu.Header>
          <Menu.List>
            <Menu.Item id="itemOptmize">
              站内优化
            </Menu.Item>
            <Menu.Item id="itemSettings">
              默认参数
            </Menu.Item>
            <Menu.Item id="item2">
              <Menu.Item.Left><IconBuild/></Menu.Item.Left>
              <Menu.Item.Center> item2</Menu.Item.Center>
              <Menu.Item.Right>
                <Tooltip body={<span>您有<span style={{
                  color: 'red',
                  fontWeight: 'bold',
                }}>99</span>个未读的信息</span>} position="right" margin={20}>
                <span>
                <Badge type="tag" color="error">
                  99
                </Badge>
                </span>
                </Tooltip>
              </Menu.Item.Right>
            </Menu.Item>
          </Menu.List>
        </Menu.SubMenu>
      </Menu>
    </div>
  </>;
};

export default SliderContent;