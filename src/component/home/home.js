import React, { Component } from "react";
import "./home.css";
import { Row, Col, Card } from "antd";
import IconOffice from "@src/styles/icon/icons_office.png";
import IConCamera from "@src/styles/icon/icons-camera.png";
import IconOfficeSetting from "@src/styles/icon/icons-office.png";
import IconMonitor from "@src/styles/icon/icons-monitor.png";
import IconReport from "@src/styles/icon/icons-report.png";
import IconReportSetting from "@src/styles/icon/icons-report-setting.png";
import IconUser from "@src/styles/icon/icons-user.png";
import IconSetting from "@src/styles/icon/icons-settings.png";
import IconSysAdmin from "@src/styles/icon/icons-system-administrator.png";
import { Link } from "react-router-dom";
import { BrowserView, MobileView,isBrowser } from "react-device-detect";
const { Meta } = Card;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Row>
          <h2>ホームページ</h2>
        </Row>
        <BrowserView>
          <Row gutter={[8, 8]}>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconOffice} alt="事業所" />}
                    title="事業所"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/warning-history">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconReport} alt="警報履歴" />}
                    title="警報履歴"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/permission">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconSetting} alt="権限設定" />}
                    title="権限設定"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/user">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconUser} alt="ユーザー" />}
                    title="ユーザー"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/admin-setting">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconSysAdmin} alt="システム設定" />}
                    title="システム設定"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office-setting">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconOfficeSetting} alt="事業所設定" />}
                    title="事業所設定"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/camera-setting">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IConCamera} alt="カメラ設定" />}
                    title="カメラ設定"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/warning-setting">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconReportSetting} alt="警報設定" />}
                    title="警報設定"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/screen-config-setting">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconMonitor} alt="画面構成設定" />}
                    title="画面構成設定"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
          </Row>
        </BrowserView>

        <MobileView>
          <Row gutter={[8, 8]}>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office">
                <Card hoverable>
                  <Meta title="事業所" description="This is the description" />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/warning-history">
                <Card hoverable>
                  <Meta
                    title="警報履歴"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/permission">
                <Card hoverable>
                  <Meta
                    title="権限設定"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/user">
                <Card hoverable>
                  <Meta
                    title="ユーザー"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/admin-setting">
                <Card hoverable>
                  <Meta
                    title="システム設定"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office-setting">
                <Card hoverable>
                  <Meta
                    title="事業所設定"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/camera-setting">
                <Card hoverable>
                  <Meta
                    title="カメラ設定"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/warning-setting">
                <Card hoverable>
                  <Meta
                    title="警報設定"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/screen-config-setting">
                <Card hoverable>
                  <Meta
                    title="画面構成設定"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
          </Row>
        </MobileView>
      </div>
    );
  }
}

export default Home;
