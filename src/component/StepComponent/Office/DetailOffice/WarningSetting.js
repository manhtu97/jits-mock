import React, { Component } from "react";
import "./DetailOffice.css";
import { Row, Col, Card, Button, Select, Table, Tag, Modal, Input } from "antd";
import { isBrowser } from "react-device-detect";
const { Option } = Select;
class WarningSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource1: [
        {
          key: 0,
          no: 1,
          office: "田布施",
          treatmentPlant: "A",
          sensor: "AA ",
          lightWarning: "3500",
          mediumWarning: "4500",
          highWarning: "5500",
          superWarning: "7000",
          button: "",
        },
        {
          key: 1,
          no: 2,
          office: "田布施",
          treatmentPlant: "B",
          sensor: "BB ",
          lightWarning: "3300 ",
          mediumWarning: "4000",
          highWarning: "4500",
          superWarning: "5500",
          button: "",
        },
        {
          key: 2,
          no: 3,
          office: "田布施",
          treatmentPlant: "C",
          sensor: "CC ",
          lightWarning: "4000",
          mediumWarning: "5000",
          highWarning: "6000",
          superWarning: "7000",
          button: "",
        },
      ],
      dataSource2: [
        {
          key: 0,
          no: 1,
          office: "田布施",
          treatmentPlant: "A",
          sensor: "AA ",
          lightWarning: "3000",
          mediumWarning: "4000",
          highWarning: "5000",
          superWarning: "6000",
          button: "",
        },
        {
          key: 1,
          no: 2,
          office: "田布施",
          treatmentPlant: "B",
          sensor: "BB ",
          lightWarning: "3300 ",
          mediumWarning: "4000",
          highWarning: "4500",
          superWarning: "5500",
          button: "",
        },
        {
          key: 2,
          no: 3,
          office: "田布施",
          treatmentPlant: "C",
          sensor: "CC ",
          lightWarning: "4000",
          mediumWarning: "5000",
          highWarning: "6000",
          superWarning: "7000",
          button: "",
        },
      ],
      columns: [
        {
          title: "No",
          dataIndex: "no",
        },
        {
          title: "事業所",
          dataIndex: "office",
        },
        {
          title: "処理場",
          dataIndex: "treatmentPlant",
        },
        {
          title: "センサー",
          dataIndex: "sensor",
        },
        {
          title: "軽警報(mm)",
          dataIndex: "lightWarning",
        },
        {
          title: "中警報(mm)",
          dataIndex: "mediumWarning",
        },
        {
          title: "高警報",
          dataIndex: "highWarning",
        },
        {
          title: "重警報(mm)",
          dataIndex: "superWarning",
        },
        {
          title: "",
          dataIndex: "button",
          render: () => <Button onClick={this.showModal}>修正</Button>,
        },
      ],
      visible: false,
    };
  }
  renderTag = (value) => {
    let arrayRender = [];
    value.forEach((ele, index) => {
      arrayRender.push(
        <Tag key={index} color={ele.value} style={{ marginRight: "5px" }}>
          {ele.text}
        </Tag>
      );
    });
    return arrayRender;
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };
  render() {
    let { columns, dataSource1, dataSource2 } = this.state;
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Modal
          title="警報設定"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
          okText="保存"
          cancelText="クリア"
        >
          <Row gutter={[16, 16]}>
            <Col span={6}>軽警報</Col>
            <Col span={14}>
              <Input placeholder="数値を入力してください"></Input>
            </Col>
            <Col span={4}>mm</Col>
            <Col span={6}>中警報</Col>
            <Col span={14}>
              <Input placeholder="数値を入力してください"></Input>
            </Col>
            <Col span={4}>mm</Col>
            <Col span={6}>高警報</Col>
            <Col span={14}>
              <Input placeholder="数値を入力してください"></Input>
            </Col>
            <Col span={4}>mm</Col>
            <Col span={6}>重警報</Col>
            <Col span={14}>
              <Input placeholder="数値を入力してください"></Input>
            </Col>
            <Col span={4}>mm</Col>
          </Row>
        </Modal>
        <Row style={{ paddingBottom: "24px" }}>
          <Col flex="auto">
            <Row justify="start">
              <h2 style={{ margin: 0 }}>警報設定</h2>
            </Row>
          </Col>
          <Col flex="200px">
            <Row justify="end">
              <Select defaultValue="田布施" style={{ width: 120 }}>
                <Option value="田布施">田布施</Option>
                <Option value="東埼玉">東埼玉</Option>
                <Option value="東京">東京</Option>
              </Select>
            </Row>
          </Col>
        </Row>
        {/* <Row gutter={[8, 8]} style={{ padding: "16px 0" }}>
          <Breadcrumb style={{ paddingLeft: "6px", color: "#0000FF" }}>
            <Breadcrumb.Item>
              <Link to="/home">ホームページ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/office">事業所</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/office/1">田布施</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text strong>警報設定</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row> */}
        <Card style={{ width: "100%" }}>
          <Row style={{ padding: "16px" }} align="middle" justify="start">
            <Col lg={{ span: 2 }} xs={{ span: 2 }}>
              <Row justify="start">単位</Row>
            </Col>
            <Col lg={{ span: 4 }} xs={{ span: 4 }}>
              <Select style={{ width: "100%" }} defaultValue="mm"></Select>
            </Col>
          </Row>
          <Row align="middle" justify="center" gutter={[32, 32]}>
            <Col span={24}>
              <Table
                style={{ width: "100%" }}
                bordered
                dataSource={dataSource1}
                columns={columns}
                title={() => "発生警報"}
                scroll={{ x: "max-content" }}
              ></Table>
            </Col>
            <Col span={24}>
              <Table
                style={{ width: "100%" }}
                bordered
                dataSource={dataSource2}
                columns={columns}
                title={() => "復帰警報"}
                scroll={{ x: "max-content" }}
              ></Table>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default WarningSetting;
