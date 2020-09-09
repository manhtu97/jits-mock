import React, { Component } from "react";
import "./DetailOffice.css";
import { Row, Col, Card, Breadcrumb, Typography } from "antd";
import { Link } from "react-router-dom";
import IconSysReport from "@src/styles/icon/icons-system-administrator.png";
import IconReportHistory from "@src/styles/icon/icons-report.png";
import IconDashboard from "@src/styles/icon/icons-dashboard.png";
import IconDetectError from "@src/styles/icon/icons-target.png";
import IconDetectAbnormal from "@src/styles/icon/icons-detect-abnormal.png";
import IconReportSetting from "@src/styles/icon/icons-report-setting.png";
import IconOffice from "@src/styles/icon/icons-office.png";
import { BrowserView, MobileView, isBrowser } from "react-device-detect";
const { Text } = Typography;
const { Meta } = Card;
class DetailOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Row>
          <h2 style={{ margin: 0 }}>田布施</h2>
        </Row>
        <Row gutter={[8, 8]} style={{ padding: "16px 0" }}>
          <Breadcrumb style={{ paddingLeft: "6px", color: "#0000FF" }}>
            <Breadcrumb.Item>
              <Link to="/home">ホームページ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/office">事業所</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text strong>田布施</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <BrowserView>
          <Row gutter={[8, 8]}>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/dashboard">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconDashboard} alt="ダッシュボード" />}
                    title="ダッシュボード"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/report-history">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconReportHistory} alt="警報履歴" />}
                    title="警報履歴"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/detect-error">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconDetectError} alt="精度誤差検知" />}
                    title="精度誤差検知"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/abnormal">
                <Card hoverable>
                  <Meta
                    avatar={
                      <img
                        src={IconDetectAbnormal}
                        alt="入力値が正常か異常か判別"
                      />
                    }
                    title="入力値が正常か異常か判別"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/warning-history">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconSysReport} alt="システム警報履歴" />}
                    title="システム警報履歴"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
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
              <Link to="/office/1/office-detail-setting">
                <Card hoverable>
                  <Meta
                    avatar={<img src={IconOffice} alt="事業所設定" />}
                    title="事業所設定"
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
              <Link to="/office/1/dashboard">
                <Card hoverable>
                  <Meta
                    title="ダッシュボード"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/report-history">
                <Card hoverable>
                  <Meta
                    title="警報履歴"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/detect-error">
                <Card hoverable>
                  <Meta
                    title="精度誤差検知"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/abnormal">
                <Card hoverable>
                  <Meta
                    title="入力値が正常か異常か判別"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
              <Link to="/office/1/warning-history">
                <Card hoverable>
                  <Meta
                    title="システム警報履歴"
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 12 }} lg={{ span: 6 }}>
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
              <Link to="/office/1/office-detail-setting">
                <Card hoverable>
                  <Meta
                    title="事業所設定"
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

export default DetailOffice;
