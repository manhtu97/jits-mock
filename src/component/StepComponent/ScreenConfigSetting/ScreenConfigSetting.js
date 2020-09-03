import React, { Component } from "react";
import { Row, Col, Card, Typography, Select, Breadcrumb, Button } from "antd";
import { Link } from "react-router-dom";
import { isBrowser } from "react-device-detect";
const { Meta } = Card;
const { Option } = Select;
const { Text } = Typography;
class ScreenConfigSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Row>
          <h2 style={{ margin: 0 }}>画面構成設定</h2>
        </Row>
        <Row gutter={[8, 8]} style={{ padding: "16px 0" }}>
          <Breadcrumb style={{ paddingLeft: "6px", color: "#0000FF" }}>
            <Breadcrumb.Item>
              <Link to="/home">ホームページ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text strong>画面構成設定</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Card style={{ width: "100%" }}>
          <Row style={{ paddingBottom: "12px" }}>
            <Text strong>ダッシュボード</Text>
          </Row>
          <Row align="middle">
            <Col span={4}>端末</Col>
            <Col span={20}>
              <Row justify="start">
                <Select defaultValue="デスクトップ" style={{ width: 200 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Row>
            </Col>
          </Row>
          <Row style={{ paddingTop: "24px" }}>
            <Col span={4} lg={{ span: 4 }} xs={{ span: 24 }} style={{paddingBottom: '12px'}}>
              <Row justify="start">配置位置</Row>
            </Col>
            <Col lg={{ span: 20 }} xs={{ span: 24 }}>
              <Row gutter={[32, 32]} style={{ width: "100%" }}>
                <Col span={12}>
                  <Card hoverable>
                    <Meta title="位置１" description="グラフ" />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card hoverable>
                    <Meta title="位置 2" description="リアルタイム監視" />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card hoverable>
                    <Meta title="位置 3" description="グラフ" />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card hoverable>
                    <Meta title="位置 4" description="グラフ" />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify="end">
            <Button type="primary">保存</Button>
          </Row>
        </Card>
      </div>
    );
  }
}

export default ScreenConfigSetting;
