'use client';

import { Layout } from "antd";
import "./globals.css";
import { Inter } from 'next/font/google';
import { MainMenu } from "./components/layout/MainMenu";
import { MainFooter } from "./components/layout/MainFooter";
import { ConfigProvider } from "antd";
import { Logo } from "./components/layout/Logo";

const { Header, Content } = Layout;
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#1890ff',
              borderRadius: 8,
              colorBgContainer: '#ffffff',
              colorBgLayout: '#f5f5f5',
              fontFamily: inter.style.fontFamily,
            },
          }}
        >
          <Layout style={{ minHeight: "100vh" }}>
            <Header style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '0 24px',
              background: '#001529',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}>
              <Logo />
              <MainMenu />
            </Header>
            <Content style={{ 
              padding: '48px 24px',
              background: '#f5f5f5'
            }}>
              <div style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}>
                {children}
              </div>
            </Content>
            <MainFooter />
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
