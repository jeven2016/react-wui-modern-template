import React from 'react';
import {
  Breadcrumb,
  Button,
  IconHome,
  IconList,
  Layout,
  Menu, Tooltip,
} from 'react-wui-modern';
import {IconMore} from '../Icons';

const InnerHeader = (props) => {
  const {collapse, setCollapse, children} = props;
  return <Layout.Header extraClassName="demo-inner-layout-header">
    <Menu block menuDirection="horizontal" setItemPaddingLeft={false}>
      <Menu.List>
        <Menu.Item>
          <Tooltip body="折叠左侧菜单" position="right">
            <Button extraClassName="demo-switch-btn" circle
                    onClick={() => setCollapse(val => !val)}>
              {collapse ? <IconList/> : <IconMore/>}
            </Button>
          </Tooltip>
        </Menu.Item>
        <Menu.Item>
          {children}
        </Menu.Item>
      </Menu.List>
    </Menu>
  </Layout.Header>;
};

export default InnerHeader;