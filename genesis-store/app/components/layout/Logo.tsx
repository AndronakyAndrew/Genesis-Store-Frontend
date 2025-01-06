'use client';

import { Typography } from 'antd';
import { RocketOutlined } from '@ant-design/icons';

const { Title } = Typography;

export function Logo() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: '8px'
    }}>
      <RocketOutlined style={{ 
        fontSize: '24px', 
        color: '#1890ff' 
      }} />
      <Title level={4} style={{ 
        margin: 0,
        color: 'white',
      }}>
        Genesis-Market
      </Title>
    </div>
  );
}