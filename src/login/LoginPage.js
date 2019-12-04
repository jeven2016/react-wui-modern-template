import React from 'react';
import {useHistory} from 'react-router-dom';
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  IconWarning,
  Input,
  Row,
} from 'react-wui-modern';
import {IconAccount, IconResetPwd} from '../Icons';

const LoginPage = (props) => {
  const history = useHistory();
  const loginPage = <>
    <div className="demo-login-page">
      <Row>
        <Col sm={12} mdOffset={3} md={6} lgOffset={4} lg={4} xlOffset={5}
             xl={2}>
          <Card block extraClassName="demo-login-card" hasBox>
            <Card.Row style={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              padding: '2rem 0 0.5rem 0',
            }}>
              <Button color="green" size="large" circle
                      style={{marginRight: '1rem', color: '#fff'}}>S</Button>
              <span style={{focus: 'pointer', color: '#fff', fontSize: '2rem'}}>
                System Manager
              </span>
            </Card.Row>
            <Card.Body>
              <div className="demo-login-form">
                <Form>
                  <Form.Item type="row" style={{padding: '0.5rem 0'}}>
                    <Input.IconInput block leftIcon>
                      <IconAccount style={{color: "blue", fontSize: "1.5rem"}}/>
                      <Input placeholder="Username"
                             style={{borderRadius: "2rem", border: "none"}}/>
                    </Input.IconInput>
                  </Form.Item>
                  <Form.Item type="row" style={{padding: '0.5rem 0'}}>
                    <Input.IconInput block leftIcon>
                      <Input placeholder="Password"
                             style={{borderRadius: "2rem", border: "none"}}/>
                      <IconResetPwd/>
                    </Input.IconInput>
                  </Form.Item>
                  <Form.Item type="row" style={{padding: '0.5rem 0'}}>
                    <div>
                      <a href="#" className="pull-left text color-white">
                        忘记密码?
                      </a>
                      <span className="pull-right text color-white">
                          <Checkbox value="remember">记住登录</Checkbox>
                      </span>
                    </div>
                  </Form.Item>
                  <Form.Item type="row" style={{padding: '0.5rem 0'}}>
                    <Alert type="error" icon={<IconWarning/>}
                           body="用户名或密码错误"/>
                  </Form.Item>
                  <Form.Item type="row" style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                    <Button color="blue" onClick={() => {
                      history.push("main")
                    }}>
                      登录
                    </Button>
                    <Button>重置</Button>
                  </Form.Item>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </>;

  return loginPage;
};

export default LoginPage;