'use client';

import { Typography, Card, Row, Col, Button } from 'antd';
import { RocketOutlined, BulbOutlined, TeamOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div>
      <Title level={1} style={{ textAlign: 'center', marginBottom: '48px' }}>
        Welcome to Genesis Store
      </Title>

      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} lg={8}>
          <Card 
            hoverable
            style={{ height: '100%' }}
            cover={<RocketOutlined style={{ fontSize: '48px', margin: '24px 0', color: '#1890ff' }} />}
          >
            <Title level={3}>Innovation</Title>
            <Paragraph>
              Leading the way in technological advancement and creative solutions.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card 
            hoverable
            style={{ height: '100%' }}
            cover={<BulbOutlined style={{ fontSize: '48px', margin: '24px 0', color: '#faad14' }} />}
          >
            <Title level={3}>Expertise</Title>
            <Paragraph>
              Our team brings years of experience and deep industry knowledge.
            </Paragraph>
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={8}>
          <Card 
            hoverable
            style={{ height: '100%' }}
            cover={<TeamOutlined style={{ fontSize: '48px', margin: '24px 0', color: '#52c41a' }} />}
          >
            <Title level={3}>Collaboration</Title>
            <Paragraph>
              Working together with our clients to deliver exceptional results.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Title level={2}>Why Choose Us</Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={12} sm={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={3}>500+</Title>
              <Paragraph>Projects Completed</Paragraph>
            </Card>
          </Col>
          <Col xs={12} sm={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={3}>50+</Title>
              <Paragraph>Team Members</Paragraph>
            </Card>
          </Col>
          <Col xs={12} sm={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={3}>300+</Title>
              <Paragraph>Happy Clients</Paragraph>
            </Card>
          </Col>
          <Col xs={12} sm={8}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
              <Title level={3}>15+</Title>
              <Paragraph>Years Experience</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Title level={3}>Ready to start working with us?</Title>
        <Button type="primary" size="large" style={{ margin: '16px' }}>
          Contact Us for best prices
        </Button>
      </div>
    </div>
  );
}
