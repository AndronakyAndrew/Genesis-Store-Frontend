'use client';

import { Menu } from "antd";
import Link from "next/link";
import { HomeOutlined, ShoppingOutlined } from '@ant-design/icons';

const items = [
  { 
    key: "home", 
    icon: <HomeOutlined />,
    label: <Link href={"/"}>Home</Link> 
  },
  { 
    key: "product", 
    icon: <ShoppingOutlined />,
    label: <Link href={"/products"}>Goods</Link> 
  },
  {
    key: "product2",
    icon: <ShoppingOutlined />,
    label: <Link href={"/productsUser"}>2nd Page with goods</Link> 
  }
];

export function MainMenu() {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={items}
      style={{ 
        flex: 1, 
        minWidth: 0,
        fontSize: '16px',
      }}
    />
  );
}