import React, {useState, useRef} from 'react';
import {
  useEvent,
  Notification,
  Form,
  Select,
  Button,
  IconInfo, Popover,
} from 'react-wui-modern';

export const AdvanceSearch = () => {
  const [activeRole, setActiveRole] = useState(false);
  const [activeUserGroup, setActiveUserGroup] = useState(false);
  const [activePopover, setActivePopover] = useState(false);

  const [roleType, setRoleType] = useState();
  const [userGroupType, setUserGroupType] = useState();

  const popupRef = useRef();

  //add event listener to document
  useEvent('click', (e) => {
    const isClickedPopup = popupRef.current.contains(e.target);

    //if this event is  fired by clicking the body of the popover, close the popover.
    if (!isClickedPopup) {
      setActivePopover(false);
    }
  });

  const search = () => {
    const text = `
        roleType = ${roleType.value},
        userGroupType = ${userGroupType.value}
    `;
    Notification.simple({
      title: 'Searching',
      body: text,
      icon: <IconInfo/>,
      closable: true,
    });
    setActivePopover(false);
  };

  const advanceSearch = <div>
    <h4 className="text comment">高级搜索</h4>
    <Form nativeType="div">
      <Form.Item type="block">
        <label>角色组</label>
        <Select placeholder="..." block
                active={activeRole}
                searchable={false}
                onActiveChange={(nextState) => {
                  setActiveRole(nextState);
                }}
                popupStyle={{zIndex: '1000'}}
                onChange={(item, e) => {
                  setRoleType(item);
                  setActiveRole(false);
                  e.stopPropagation();
                }}>
          <Select.Option value="admin">管理员</Select.Option>
          <Select.Option value="customer">客户</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item type="block">
        <label>用户组</label>
        <Select placeholder="..." block
                active={activeUserGroup}
                searchable={false}
                onActiveChange={(nextState) => {
                  setActiveUserGroup(nextState);
                }}
                popupStyle={{zIndex: '1000'}}
                onChange={(item, e) => {
                  setUserGroupType(item);
                  setActiveUserGroup(false);
                  e.stopPropagation();
                }}>
          <Select.Option value="admin">普通员工</Select.Option>
          <Select.Option value="customer">管理岗</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item type="block"
                 style={{display: 'flex', justifyContent: 'center'}}>
        <Button color="blue" onClick={search}>搜索</Button>
      </Form.Item>
    </Form>
  </div>;

  return <Popover body={advanceSearch} position="bottom" active={activePopover}
                  popupRef={popupRef}
                  onActiveChange={(nextState) => {
                    if (nextState)
                      setActivePopover(nextState);
                  }}>
    <Button>高级</Button>
  </Popover>;
};