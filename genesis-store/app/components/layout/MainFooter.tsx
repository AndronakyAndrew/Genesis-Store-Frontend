'use client';

import { Layout, Typography } from "antd";
import { GithubOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Link } = Typography;

export function MainFooter() {
  return (
    <Footer style={{ 
      textAlign: "center",
      background: '#001529',
      color: 'white',
      padding: '24px'
    }}>
      <div style={{ marginBottom: '16px' }}>
        <Link 
            href="https://github.com" 
            target="_blank" 
            style={{ color: 'white', fontSize: '24px', margin: '0 16px' }}
        >
          <GithubOutlined />
        </Link>
        <Link 
            href="https://twitter.com" 
            target="_blank" 
            style={{ color: 'white', fontSize: '24px', margin: '0 16px' }}
        >
          <TwitterOutlined />
        </Link>
        <Link 
            href="https://linkedin.com" 
            target="_blank" 
            style={{ color: 'white', fontSize: '24px', margin: '0 16px' }}
        >
          <LinkedinOutlined />
        </Link>
      </div>
      <div>
        Created by Genesis Industries company. All rights reserved ©.
      </div>
    </Footer>
  );
}