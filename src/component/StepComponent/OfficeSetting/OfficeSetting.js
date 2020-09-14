import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Breadcrumb,
  Typography,
  Button,
  Table,
  Modal,
  Select,
  Input,
  Checkbox,
} from "antd";
import { Link } from "react-router-dom";
import { isBrowser } from "react-device-detect";
const { Text } = Typography;

class OfficeSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          key: 0,
          no: 1,
          officeName: "田布施",
          numberOfTreatment: 2,
          numberOfCamera: 4,
          numberOfSensor: 5,
          button: "",
        },
        {
          key: 1,
          no: 2,
          officeName: "東埼玉",
          numberOfTreatment: 1,
          numberOfCamera: 2,
          numberOfSensor: 8,
          button: "",
        },
        {
          key: 2,
          no: 3,
          officeName: "...",
          numberOfTreatment: 2,
          numberOfCamera: 4,
          numberOfSensor: 10,
          button: "",
        },
      ],
      columns: [
        {
          title: "No",
          dataIndex: "no",
          width: "10%",
        },
        {
          title: "事業所名",
          dataIndex: "officeName",
        },
        {
          title: "処理場数",
          dataIndex: "numberOfTreatment",
        },
        {
          title: "カメラ数",
          dataIndex: "numberOfCamera",
        },
        {
          title: "センサー数",
          dataIndex: "numberOfSensor",
        },
        {
          title: () => (
            <Button type="primary" onClick={() => this.showModal("事業所追加")}>
              事業所追加
            </Button>
          ),
          dataIndex: "button",
          render: () => (
            <Row gutter={[6, 6]} align="middle">
              <Col span={10}>
                <Button
                  style={{ width: "100%" }}
                  onClick={() => this.showModal("事業所修正")}
                >
                  事業所修正
                </Button>
              </Col>
              <Col span={7}>
                <Button style={{ width: "100%" }}>処理場</Button>
              </Col>
              <Col span={7}>
                <Button
                  style={{ width: "100%" }}
                  onClick={() => this.showModal1()}
                >
                  センサー
                </Button>
              </Col>
            </Row>
          ),
        },
      ],
      visible: false,
      visible1: false,
      textHeader: "",
    };
  }
  showModal = (value) => {
    this.setState({
      visible: true,
      textHeader: value,
    });
  };
  showModal1 = () => {
    this.setState({
      visible1: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
      visible1: false,
    });
  };
  render() {
    let { columns, dataSource, textHeader } = this.state;
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Modal
          title={textHeader}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
          okText="保存"
          cancelText="クリア"
        >
          <Row align="middle">
            <Col span={6}>
              事業所 <span style={{ color: "red" }}>*</span>
            </Col>
            <Col span={18}>
              <Select style={{ width: "100%" }} />
            </Col>
          </Row>
        </Modal>
        <Modal
          title="センサー"
          visible={this.state.visible1}
          onOk={this.handleOk}
          onCancel={this.handleOk}
          okText="追加"
          cancelText="リセット"
        >
          <Row align="middle" justify="center" gutter={[6, 6]}>
            <Col span={12}>
              <Input placeholder="センサー名"></Input>
            </Col>
            <Col span={12}>
              <Input placeholder="リアルタイムに表示されるセンサー"></Input>
            </Col>
            <Col span={12}>
              <Select defaultValue="AA" style={{ width: "100%" }} />
            </Col>
            <Col span={12}>
              <Checkbox defaultChecked="true" />
            </Col>
            <Col span={12}>
              <Input defaultValue="BB" style={{ width: "100%" }} />
            </Col>
            <Col span={12}>
              <Checkbox />
            </Col>
          </Row>
        </Modal>
        <Row>
          <h2 style={{ margin: 0 }}>事業所一覧設定</h2>
        </Row>
        <Row gutter={[8, 8]}>
          <Breadcrumb style={{ paddingLeft: "6px", color: "#0000FF" }}>
            <Breadcrumb.Item>
              <Link to="/home">ホームページ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text strong>事業所設定</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Card style={{ width: "100%", marginTop: "36px" }}>
          <Row align="middle" justify="center">
            <Table
              style={{ width: "100%" }}
              bordered
              title={() => "事業所一覧"}
              dataSource={dataSource}
              columns={columns}
              scroll={{ x: "max-content" }}
            ></Table>
          </Row>
        </Card>
      </div>
    );
  }
}

export default OfficeSetting;
