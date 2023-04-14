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
  getItem("仪表盘", "/page1", <PieChartOutlined />),
  getItem("文章", "/page2", <DesktopOutlined />, [
    getItem("所有文章", "/all"),
    getItem("写文章", "/write"),
    getItem("文章分类", "/category"),
  ]),
  getItem("页面", "/sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("附件", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("评论", "/comment", <FileOutlined />),
  getItem("用户", "/users", <FileOutlined />),
  getItem("系统", "/sys", <FileOutlined />),
];

const defaultMenu: React.FC = () => {
  const navigateTo = useNavigate();
  const currentLocaton = useLocation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onMenuClick = (e: { key: string }) => {
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
