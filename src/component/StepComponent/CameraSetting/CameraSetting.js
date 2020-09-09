import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Input,
  Modal,
} from "antd";
import { isBrowser } from "react-device-detect";

class CameraSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textHeader: "",
      visible: false,
    };
  }
  showModal = (value) => {
    this.setState({
      visible: true,
      textHeader: value,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };
  render() {
    let { visible, textHeader } = this.state;
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Modal
          title={textHeader}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
          okText="保存"
          cancelText="クリア"
        >
          <Row align="middle" gutter={[16, 16]}>
            <Col span={6}>
              カメラリンク <span style={{ color: "red" }}>*</span>
            </Col>
            <Col span={18}>
              <Input
                defaultValue="https://docs.google.com/presentation/d/15_xWNre3BNMlCUsFeCuxC-794qDN6aq_LEPn_TPhAUI/edit#slide=id.g8c774afe6c_2_199"
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={6}>カメラ名</Col>
            <Col span={18}>
              <Input defaultValue="カメラ 09" style={{ width: "100%" }} />
            </Col>
            <Col span={6}>
              事業所 <span style={{ color: "red" }}>*</span>
            </Col>
            <Col span={18}>
              <Input defaultValue="事業所05" style={{ width: "100%" }} />
            </Col>
            <Col span={6}>
              処理場 <span style={{ color: "red" }}>*</span>
            </Col>
            <Col span={18}>
              <Input defaultValue="A" style={{ width: "100%" }} />
            </Col>
          </Row>
        </Modal>
        <Row>
          <h2 style={{ margin: 0 }}>カメラ設定</h2>
        </Row>
        {/* <Row gutter={[8, 8]} style={{ padding: "16px 0" }}>
          <Breadcrumb style={{ paddingLeft: "6px", color: "#0000FF" }}>
            <Breadcrumb.Item>
              <Link to="/home">ホームページ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text strong>カメラ設定</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row> */}
        <Card style={{ width: "100%", marginTop: "24px" }}>
          <Row align="end" style={{ paddingBottom: "32px" }}>
            <Button type="primary" onClick={() => this.showModal("事業所追加")}>
              カメラ追加
            </Button>
          </Row>
          <Row align="middle" justify="center" gutter={[32, 32]}>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Row gutter={[16, 16]}>
                <Col span={6}>カメラ 01</Col>
                <Col span={12}>
                  <Input defaultValue="処理場 A - 事業所 01" disabled />
                </Col>
                <Col span={6}>
                  <Button
                    type="primary"
                    onClick={() => this.showModal("カメラ修正")}
                  >
                    修正
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Row gutter={[16, 16]}>
                <Col span={6}>カメラ 02</Col>
                <Col span={12}>
                  <Input defaultValue="処理場 A - 事業所 02" disabled />
                </Col>
                <Col span={6}>
                  <Button
                    type="primary"
                    onClick={() => this.showModal("カメラ修正")}
                  >
                    修正
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Row gutter={[16, 16]}>
                <Col span={6}>カメラ 03</Col>
                <Col span={12}>
                  <Input defaultValue="処理場 A - 事業所 03" disabled />
                </Col>
                <Col span={6}>
                  <Button
                    type="primary"
                    onClick={() => this.showModal("カメラ修正")}
                  >
                    修正
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Row gutter={[16, 16]}>
                <Col span={6}>カメラ 04</Col>
                <Col span={12}>
                  <Input defaultValue="処理場 A - 事業所 04" disabled />
                </Col>
                <Col span={6}>
                  <Button
                    type="primary"
                    onClick={() => this.showModal("カメラ修正")}
                  >
                    修正
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Row gutter={[16, 16]}>
                <Col span={6}>カメラ 05</Col>
                <Col span={12}>
                  <Input defaultValue="処理場 A - 事業所 05" disabled />
                </Col>
                <Col span={6}>
                  <Button
                    type="primary"
                    onClick={() => this.showModal("カメラ修正")}
                  >
                    修正
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Row gutter={[16, 16]}>
                <Col span={6}>カメラ 06</Col>
                <Col span={12}>
                  <Input defaultValue="処理場 A - 事業所 06" disabled />
                </Col>
                <Col span={6}>
                  <Button
                    type="primary"
                    onClick={() => this.showModal("カメラ修正")}
                  >
                    修正
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Row gutter={[16, 16]}>
                <Col span={6}>カメラ 07</Col>
                <Col span={12}>
                  <Input defaultValue="処理場 A - 事業所 07" disabled />
                </Col>
                <Col span={6}>
                  <Button
                    type="primary"
                    onClick={() => this.showModal("カメラ修正")}
                  >
                    修正
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Row gutter={[16, 16]}>
                <Col span={6}>カメラ 08</Col>
                <Col span={12}>
                  <Input defaultValue="処理場 A - 事業所 08" disabled />
                </Col>
                <Col span={6}>
                  <Button
                    type="primary"
                    onClick={() => this.showModal("カメラ修正")}
                  >
                    修正
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default CameraSetting;
