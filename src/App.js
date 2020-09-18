import React, { useEffect } from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import { Layout, Row, Col, Button, Popover } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MoreOutlined,
  LoginOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import RouterRoot from "./component/routers/Router";
import { useSelector, useDispatch } from "react-redux";
import { collapsed } from "@src/redux";
import SideBar from "./component/Sidebar/SideBar";
const { Content, Header } = Layout;
function App() {
  let collapsedTab = useSelector((state) => state.tabCollapsed);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    history.push("/detail-office/dashboard/1");
  });
  let content = () => (
    <div>
      <div className="buttonClick">
        プロフィール情報 <InfoCircleOutlined />
      </div>
      <div className="buttonClick">
        ログアウト <LoginOutlined />
      </div>
    </div>
  );
  const toggleButton = () => {
    collapsedTab = !collapsedTab;
    dispatch(collapsed(collapsedTab));
  };
  return (
    <div className="App">
      <Layout style={{ height: "100%" }}>
        <SideBar />
        <Layout className="site-layout">
          <Header className="site-layout-background">
            <Row>
              <Col flex="auto">
                <Row justify="start" style={{ height: "100%" }}>
                  <Col>
                    {React.createElement(
                      collapsedTab ? MenuUnfoldOutlined : MenuFoldOutlined,
                      {
                        className: "trigger",
                        onClick: toggleButton,
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

export default App;
