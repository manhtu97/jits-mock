import React, { Component } from "react";
import "./DetailOffice.css";
import {
  Row,
  Col,
  Card,
  Typography,
  DatePicker,
  Button,
  Select,
  Table,
  Tag,
  Modal,
} from "antd";
import moment from "moment";
import { isBrowser } from "react-device-detect";
const { Text } = Typography;
const { Option } = Select;
class ReportHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          key: 0,
          no: 1,
          warningCode: "警報01",
          time: "2020/01/29 16:29",
          warningType: "発生 ",
          warningLevel: { text: "高警報- 89%", high: true },
          handleLocation: "処理場 A",
          status: [
            { text: "対応済", value: "blue" },
            { text: "確認済", value: "green" },
          ],
          user: "ユーザー01 -A B C",
        },
        {
          key: 1,
          no: 2,
          warningCode: "警報02",
          time: "2019/12/31 14:19",
          warningType: "復帰",
          warningLevel: { text: "中警報- 69%", high: false },
          handleLocation: "処理場 C",
          status: [{ text: "対応済", value: "orange" }],
          user: "",
        },
        {
          key: 2,
          no: 3,
          warningCode: "警報03",
          time: "2019/10/31 10:13",
          warningType: "発生",
          warningLevel: { text: "軽警報- 59%", high: false },
          handleLocation: "処理場 D",
          status: [{ text: "対応済", value: "processing" }],
          user: "ユーザー02 -A 01 ",
        },
      ],
      columns: [
        {
          title: "No",
          dataIndex: "no",
        },
        {
          title: "警報コード",
          dataIndex: "warningCode",
        },
        {
          title: "時間",
          dataIndex: "time",
        },
        {
          title: "警報レベル",
          dataIndex: "warningLevel",
          render: (value, record) =>
            value.high ? (
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={this.showModal}
              >
                {value.text}
              </span>
            ) : (
              <span
                style={{ color: "#F6BF6E", cursor: "pointer" }}
                onClick={this.showModal}
              >
                {value.text}
              </span>
            ),
        },
        {
          title: "処理場",
          dataIndex: "handleLocation",
        },
        {
          title: "警報種別",
          dataIndex: "warningType",
        },
        {
          title: "状態",
          dataIndex: "status",
          render: (value) => this.renderTag(value),
        },
        {
          title: "ユーザー",
          dataIndex: "user",
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
    let { columns, dataSource } = this.state;
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Modal
          title="詳細"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
          okText="対応済"
          cancelText="未対応"
        >
          <Row style={{ paddingBottom: "10px" }}>
            <Col span={6}>日付</Col>
            <Col span={2}>:</Col>
            <Col>06:15:24 2020/06/02</Col>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <Col span={6}>事業所</Col>
            <Col span={2}>:</Col>
            <Col style={{ color: "red" }}>田布施</Col>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <Col span={6}>処理場</Col>
            <Col span={2}>:</Col>
            <Col>A</Col>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <Col span={6}>警報 レベル</Col>
            <Col span={2}>:</Col>
            <Col>高警報89%</Col>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <Col span={6}>警報種別</Col>
            <Col span={2}>:</Col>
            <Col>発生</Col>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <Col span={6}>状態</Col>
            <Col span={2}>:</Col>
            <Col>
              <Tag color="orange" style={{ marginRight: "5px" }}>
                対応中
              </Tag>
              <Tag color="success">確認済</Tag>
            </Col>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <Col span={6}>備考</Col>
            <Col span={2}>:</Col>
            <Col></Col>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <Col span={6}>確認日付</Col>
            <Col span={2}>:</Col>
            <Col> 2020/06/02 06:17:00 </Col>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <Col span={6}>対応日付</Col>
            <Col span={2}>:</Col>
            <Col>2020/06/02 06:17:05</Col>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <Col span={6}>確認者</Col>
            <Col span={2}>:</Col>
            <Col>ユーザーA</Col>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <Col span={6}>対応者</Col>
            <Col span={2}>:</Col>
            <Col>ユーザーB</Col>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <Col>
              <Text strong style={{ color: "blue" }}>
                カメラ監視
              </Text>
            </Col>
          </Row>
        </Modal>
        <Row style={{ paddingBottom: "24px" }}>
          <Col flex="auto">
            <Row justify="start">
              <h2 style={{ margin: 0 }}>警報履歴</h2>
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
              <Text strong>警報履歴</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row> */}
        <Card style={{ width: "100%" }}>
          <Row align="middle" justify="center" gutter={[16, 16]}>
            <Col lg={{ span: 7 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>開始時間</Col>
                <Col span={18}>
                  <DatePicker
                    style={{ width: "100%" }}
                    showTime
                    defaultValue={moment("2019/10/25", "YYYY/MM/DD")}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 7 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>終了時間</Col>
                <Col span={18}>
                  <DatePicker
                    style={{ width: "100%" }}
                    showTime
                    defaultValue={moment("2019/12/31", "YYYY/MM/DD")}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 7 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>警報レベル</Col>
                <Col span={18}>
                  <Select
                    defaultValue="全部"
                    style={{ width: "100%" }}
                  ></Select>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 3 }} xs={{ span: 0 }}></Col>
            <Col lg={{ span: 7 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>警報種別</Col>
                <Col span={18}>
                  <Select
                    defaultValue="全部"
                    style={{ width: "100%" }}
                  ></Select>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 7 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>状態</Col>
                <Col span={18}>
                  <Select
                    defaultValue="全部"
                    style={{ width: "100%" }}
                  ></Select>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 7 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>処理場</Col>
                <Col span={18}>
                  <Select
                    defaultValue="全部"
                    style={{ width: "100%" }}
                  ></Select>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 3 }} xs={{ span: 24 }}>
              <Row justify="end">
                <Button type="primary">検索</Button>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card style={{ width: "100%", marginTop: "36px" }}>
          <Row align="middle" justify="center">
            <Table
              style={{ width: "100%" }}
              bordered
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

export default ReportHistory;
