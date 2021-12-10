import React from 'react'
import { Card, Table, Button} from 'antd'

function Home() {
    return (
        <div>
           <Card title="商品列表" extra={<Button type="primary">增加</Button>}>
               <Table></Table>
           </Card>
        </div>
    )
}

export default Home
