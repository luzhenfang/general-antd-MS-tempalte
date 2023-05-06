/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-03 16:14:51
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-05-05 21:21:19
 * @FilePath: /general-antd-MS-tempalte/src/views/Home.tsx
 * @Description:
 *
 */
import { Breadcrumb, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Menu from "@/components/Menu";

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 左侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu></Menu>
      </Sider>
      {/* 右边栏 */}
      <Layout className="site-layout">
        {/* 右边头部 */}
        <Header
          style={{ padding: 0, background: "white", paddingLeft: "16px" }}
        >
          {/* 面包屑 */}
          {/* <Breadcrumb style={{ lineHeight: "64px" }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
        </Header>
        {/* 右边内容 */}
        <Content
          style={{
            margin: "16px 16px 0",
            border: "1px solid rgba(255,0,0,0)",
          }}
          className="site-layout-background"
        >
          <Outlet />
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
