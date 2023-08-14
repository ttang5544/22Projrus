import React, {Component} from 'react';

import { Form, Input, Button} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class LoginForm extends Component {
    state = {
        loading: false,
    };



    render() {
        return (
            <Form
                name="normal_login"
                onFinish={this.onFinish}
                style={{
                    width: 300,
                    margin: "auto",
                }}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: "Please input your Username!" }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "Please input your Password!" }]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={this.state.loading}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default LoginForm;