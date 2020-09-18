import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  ShopOutlined,
  SettingOutlined,
  AppstoreOutlined,
  CameraOutlined,
  ClusterOutlined,
  FundOutlined,
  WarningOutlined,
  IssuesCloseOutlined,
  ClockCircleOutlined,
  AuditOutlined,
  QuestionCircleOutlined,
  HistoryOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
const { SubMenu } = Menu;
const { Sider } = Layout;
const mapStateToProps = (state) => {
  return {
    collapsed: state.tabCollapsed,
  };
};
function SideBar(props) {
  const history = useHistory();
  useEffect(() => {
    console.log(props)
    history.push("/detail-office/dashboard/1");
  });
  const toggle = () => {
    return !props.collapsed;
  };
  return (
    <Sider
      collapsible
      collapsed={props.collapsed}
      onCollapse={toggle}
      width={260}
      className="site-layout-background"
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        style={{ borderRight: 0 }}
        defaultSelectedKeys={props.tabChild}
        defaultOpenKeys={[props.tabParent]}
      >
        <SubMenu key="detailOffice" icon={<HomeOutlined />} title="事業所">
          <Menu.Item key="dashboard" icon={<FundOutlined />}>
            <Link to="/detail-office/dashboard/1">ダッシュボード</Link>
          </Menu.Item>
          <Menu.Item key="detectError" icon={<QuestionCircleOutlined />}>
            <Link to="/detail-office/detect-error/1">精度誤差検知</Link>
          </Menu.Item>
          <Menu.Item key="abnormal" icon={<IssuesCloseOutlined />}>
            <Link to="/detail-office/abnormal/1">入力値が正常か異常か判別</Link>
          </Menu.Item>
          <Menu.Item key="officeDetail" icon={<AuditOutlined />}>
            <Link to="/detail-office/office-detail-setting/1">事業所設定</Link>
          </Menu.Item>
          <SubMenu key="warning" icon={<WarningOutlined />} title="警報">
            <Menu.Item
              key="systemWarningHistory"
              icon={<ClockCircleOutlined />}
            >
              <Link to="/detail-office/system-warning-history/1">
                システム警報履歴
              </Link>
            </Menu.Item>
            <Menu.Item key="reportHistory" icon={<HistoryOutlined />}>
              <Link to="/detail-office/warning-history/1">警報履歴</Link>
            </Menu.Item>
            <Menu.Item key="warningSetting" icon={<WarningOutlined />}>
              <Link to="/detail-office/warning-setting/1">警報設定</Link>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="office" icon={<ShopOutlined />}>
          <Link to="/office">事業所管理</Link>
        </Menu.Item>
        <SubMenu key="userManage" icon={<UserOutlined />} title="ユーザー管理">
          <Menu.Item key="user" icon={<UserOutlined />}>
            <Link to="/user">ユーザー</Link>
          </Menu.Item>

          <Menu.Item key="permission" icon={<ClusterOutlined />}>
            <Link to="/permission">権限設定</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="setting" icon={<SettingOutlined />} title="設定">
          <Menu.Item key="adminSetting" icon={<UserOutlined />}>
            <Link to="/admin-setting">システム設定</Link>
          </Menu.Item>
          <Menu.Item key="screenConfigSetting" icon={<AppstoreOutlined />}>
            <Link to="/screen-config-setting">画面構成設定</Link>
          </Menu.Item>
          <Menu.Item key="cameraSetting" icon={<CameraOutlined />}>
            <Link to="/camera-setting">カメラ設定</Link>
          </Menu.Item>
          <Menu.Item key="fileSetting" icon={<FileOutlined />}>
            ファイル管理
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
export default connect(mapStateToProps)(SideBar);
