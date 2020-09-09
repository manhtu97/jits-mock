import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Layout, Menu, Row, Col, Button, Popover } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  ShopOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  AppstoreOutlined,
  CameraOutlined,
  ClusterOutlined,
  MenuFoldOutlined,
  MoreOutlined,
  LoginOutlined,
  InfoCircleOutlined,
  FundOutlined,
  WarningOutlined,
  IssuesCloseOutlined,
  ClockCircleOutlined,
  AuditOutlined,
  QuestionCircleOutlined,
  HistoryOutlined
} from "@ant-design/icons";
import RouterRoot from "./component/routers/Router";
const { SubMenu } = Menu;
const { Content, Sider, Header } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
    arrayKey: ['detailOffice'],
    arraySelectedKeys: ["dashboard"],
    visibleUser: false,
  };
  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    let { collapsed, arrayKey, arraySelectedKeys } = this.state;
    const content = (
      <div>
        <div className="buttonClick">プロフィール情報  <InfoCircleOutlined /></div>
        <div className="buttonClick">ログアウト  <LoginOutlined /></div>
      </div>
    );

    return (
      <div className="App">
        <Layout style={{ height: "100%" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={this.toggle}
            width={260}
            className="site-layout-background"
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              style={{ borderRight: 0 }}
              // defaultSelectedKeys="dashboard"
              // defaultOpenKeys="detailOffice"
              // openKeys={arrayKey}
              // selectedKeys={arraySelectedKeys}
            >
              <SubMenu
                key="detailOffice"
                icon={<HomeOutlined />}
                title="事業所"
              >
                <Menu.Item key="dashboard" icon={<FundOutlined />}>
                  <Link to="/detail-office/dashboard/1">ダッシュボード</Link>
                </Menu.Item>
                <Menu.Item key="detectError" icon={<QuestionCircleOutlined />}>
                  <Link to="/detail-office/detect-error/1">精度誤差検知</Link>
                </Menu.Item>
                <Menu.Item key="abnormal" icon={<IssuesCloseOutlined />}>
                  <Link to="/detail-office/abnormal/1">
                    入力値が正常か異常か判別
                  </Link>
                </Menu.Item>
                <Menu.Item key="systemWarningHistory" icon={<ClockCircleOutlined />}>
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
                <Menu.Item key="officeDetail" icon={<AuditOutlined />}>
                  <Link to="/detail-office/office-detail-setting/1">
                    事業所設定
                  </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="office" icon={<ShopOutlined />}>
                <Link to="/office">事業所管理</Link>
              </Menu.Item>
              <Menu.Item key="user" icon={<UserOutlined />}>
                <Link to="/user">ユーザー管理</Link>
              </Menu.Item>
              <Menu.Item key="permission" icon={<ClusterOutlined />}>
                <Link to="/permission">権限設定</Link>
              </Menu.Item>
              <SubMenu key="setting" icon={<SettingOutlined />} title="設定">
                <Menu.Item key="adminSetting" icon={<UserOutlined />}>
                  <Link to="/admin-setting">システム設定</Link>
                </Menu.Item>
                <Menu.Item
                  key="screenConfigSetting"
                  icon={<AppstoreOutlined />}
                >
                  <Link to="/screen-config-setting">画面構成設定</Link>
                </Menu.Item>
                <Menu.Item key="cameraSetting" icon={<CameraOutlined />}>
                  <Link to="/camera-setting">カメラ設定</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background">
              <Row>
                <Col flex="auto">
                  <Row justify="start" style={{ height: "100%" }}>
                    <Col>
                      {React.createElement(
                        this.state.collapsed
                          ? MenuUnfoldOutlined
                          : MenuFoldOutlined,
                        {
                          className: "trigger",
                          onClick: this.toggle,
                        }
                      )}
                    </Col>
                  </Row>
                </Col>
                <Col flex="160px" className="nameUser">
                  システム管理者
                  <Popover content={content} trigger="click">
                    <Button
                      type="text"
                      icon={<MoreOutlined />}
                      shape="circle"
                    ></Button>
                  </Popover>
                </Col>
              </Row>
            </Header>
            <Content>
              <RouterRoot></RouterRoot>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
