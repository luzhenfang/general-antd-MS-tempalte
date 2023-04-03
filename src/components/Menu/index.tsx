import { Menu, MenuProps, theme } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { useNavigate } from "react-router-dom";
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from "@ant-design/icons"


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}


const items: MenuItem[] = [
    getItem('栏目 1', '/page1', <PieChartOutlined />),
    getItem('栏目 2', '/page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const defaultMenu: React.FC = () => {
    const navigateTo = useNavigate();

    const {
        token: { colorBgContainer },
    } = theme.useToken();


    const onMenuClick = (e: { key: string }) => {
        navigateTo(e.key)
    };



    return (
        <Menu theme="dark" defaultSelectedKeys={['/page1']} mode="inline" items={items} onClick={(e) => onMenuClick(e)} />
    )
}
export default defaultMenu;