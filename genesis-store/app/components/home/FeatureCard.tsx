'use client';

import { Card, Typography } from 'antd';
import { ReactNode } from 'react';

const { Title, Paragraph } = Typography;

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card 
      hoverable
      style={{ 
        height: '100%',
        textAlign: 'center',
        transition: 'all 0.3s ease'
      }}
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}
    >
      <div style={{ 
        fontSize: '48px',
        color: '#1890ff'
      }}>
        {icon}
      </div>
      <Title level={3} style={{ margin: 0 }}>
        {title}
      </Title>
      <Paragraph style={{ 
        margin: 0,
        fontSize: '16px'
      }}>
        {description}
      </Paragraph>
    </Card>
  );
}