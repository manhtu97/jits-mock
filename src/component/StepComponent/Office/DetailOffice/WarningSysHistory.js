import React, { Component } from "react";
import "./DetailOffice.css";
import { Row, Col, Card, DatePicker, Button, Select, Table, Modal } from "antd";

import moment from "moment";
import { isBrowser } from "react-device-detect";
const { Option } = Select;

class Abnormal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          key: 0,
          no: 1,
          time: "2020/01/29 16:29",
          warningType: "システム処理エラー ",
          warningLevel: "高警報",
        },
        {
          key: 1,
          no: 2,
          time: "2019/12/31 14:19",
          warningType: "Matlabデータの送信エラー",
          warningLevel: "高警報",
        },
        {
          key: 2,
          no: 3,
          time: "2019/10/31 10:13",
          warningType: "気象ーデータの取得エラー",
          warningLevel: "高警報",
        },
      ],
      columns: [
        {
          title: "No",
          dataIndex: "no",
          width: "10%",
        },
        {
          title: "警報種別",
          dataIndex: "warningType",
          width: "30%",
        },
        {
          title: "時間",
          dataIndex: "time",
          width: "30%",
        },
        {
          title: "警報レベル",
          dataIndex: "warningLevel",
          width: "30%",
          render: (value, record) => (
            <span
              style={{ color: "red", cursor: "pointer" }}
              onClick={this.showModal}
            >
              {value}
            </span>
          ),
        },
      ],
      visible: false,
    };
  }
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
        >
          <Row>
            <Col span={4}>警報</Col>
            <Col span={2}>:</Col>
            <Col>気象ーデータの取得エラー</Col>
          </Row>
          <Row>
            <Col span={4}>警報レベル</Col>
            <Col span={2}>:</Col>
            <Col style={{ color: "red" }}>高警報</Col>
          </Row>
          <Row>
            <Col span={4}>更新時間</Col>
            <Col span={2}>:</Col>
            <Col> 2020/07/13 13:55 </Col>
          </Row>
          <Row>
            <Col span={4}>内容</Col>
            <Col span={2}>:</Col>
            <Col>警報の内容はここで表示されます。</Col>
          </Row>
        </Modal>
        <Row style={{ paddingBottom: "24px" }}>
          <Col flex="auto">
            <Row justify="start">
              <h2 style={{ margin: 0 }}>システム警報履歴</h2>
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
              <Text strong>システム警報履歴</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row> */}
        <Card style={{ width: "100%" }}>
          <Row align="middle" justify="center">
            <Col span={15} lg={{ span: 15 }} xs={{ span: 24 }}>
              <Row className="rowNotMargin" gutter={[16, 16]}>
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
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
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
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
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
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
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
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
              </Row>
            </Col>
            <Col lg={{ span: 6 }} xs={{ span: 0 }}></Col>
            <Col lg={{ span: 3 }} xs={{ span: 24 }}>
              <Row justify="end">
                <Button type="primary">検索</Button>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card style={{ width: "100%", marginTop: "36px" }}>
          <Row className="rowNotMargin" align="middle" justify="center">
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

export default Abnormal;
