import React from 'react'
import { Form, Card, Button, Input } from 'antd'

function Home(props) {
    console.log(props);
    return (
        <Card title="公司说明">
            <Form>
                <Form.Item label="名字" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder="请输入名字" />
                </Form.Item>
                <Form.Item><Button type="primary">保存</Button></Form.Item>
            </Form>
            
        </Card>
    )
}

export default Home
