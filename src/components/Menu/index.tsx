/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-15 17:24:03
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-04-23 00:52:02
 * @FilePath: /general-antd-MS-tempalte/src/components/Menu/index.tsx
 * @Description:
 *
 */
import { Menu, MenuProps, theme } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("仪表盘", "/dashboard", <PieChartOutlined />),
  getItem("文章", "", <DesktopOutlined />, [
    getItem("所有文章", "/articleList"),
    getItem("写文章", "/write"),
    getItem("分类标签", "/category"),
  ]),
  getItem("评论", "/comment", <FileOutlined />),
  getItem("系统", "/system", <FileOutlined />),
];

const defaultMenu: React.FC = () => {
  const navigateTo = useNavigate();
  const currentLocaton = useLocation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onMenuClick = (e: { key: string }) => {
    console.log(e);
    navigateTo(e.key);
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentLocaton.pathname]}
      mode="inline"
      items={items}
      onClick={(e) => onMenuClick(e)}
    />
  );
};
export default defaultMenu;
