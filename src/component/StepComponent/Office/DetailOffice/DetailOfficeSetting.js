import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Table,
  Modal,
  Select,
  Input,
  Checkbox,
} from "antd";
import { isBrowser } from "react-device-detect";
const { Option } = Select;
class DetailOfficeSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          key: 0,
          no: 1,
          treatmentName: "A",
          numberOfTreatment: 2,
          numberOfSensorAvail: 4,
          numberOfSensor: 2,
          button: "",
        },
        {
          key: 1,
          no: 2,
          treatmentName: "B",
          numberOfTreatment: 1,
          numberOfSensorAvail: 2,
          numberOfSensor: 2,
          button: "",
        },
        {
          key: 2,
          no: 3,
          treatmentName: "...",
          numberOfTreatment: 2,
          numberOfSensorAvail: 4,
          numberOfSensor: 2,
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
          title: "処理場",
          dataIndex: "treatmentName",
        },
        {
          title: "処理場数",
          dataIndex: "numberOfTreatment",
        },
        {
          title: "リアルタイムに表示されるセンサー",
          dataIndex: "numberOfSensorAvail",
        },
        {
          title: "センサー数",
          dataIndex: "numberOfSensor",
        },
        {
          title: () => (
            <Button type="primary" onClick={() => this.showModal("処理場追加")}>
              処理場追加
            </Button>
          ),
          dataIndex: "button",
          render: () => (
            <Row gutter={[6, 6]} align="middle">
              <Col span={12}>
                <Button
                  style={{ width: "100%" }}
                  onClick={() => this.showModal("処理場修正")}
                >
                  処理場修正
                </Button>
              </Col>
              <Col span={12}>
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
          <Row align="middle" gutter={[16,16]}>
            <Col span={16}>
              <Select style={{ width: "100%" }} />
            </Col>
            <Col span={4}><Button type="primary">クリア</Button></Col>
            <Col span={4}><Button type="primary">追加</Button></Col>
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
          <Col flex="auto">
            <Row justify="start">
              <h2 style={{ margin: 0 }}>事業所設定</h2>
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
              <Text strong>事業所設定</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row> */}
        <Card style={{ width: "100%", marginTop: "36px" }}>
          <Row align="middle" justify="center">
            <Table
              style={{ width: "100%" }}
              bordered
              title={() => "事業所"}
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

export default DetailOfficeSetting;
