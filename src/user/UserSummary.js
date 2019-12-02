import React from 'react';
import InnerHeader from '../main/InnerHeader';
import {Breadcrumb, IconHome, Layout} from 'react-wui-modern';

const UserSummary = (props) => {
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
          概览
        </Breadcrumb.Item>
      </Breadcrumb>
    </InnerHeader>
    <Layout.Content>
      <div className="demo-layout-content">
      </div>
    </Layout.Content>
  </>;
};

export default UserSummary;