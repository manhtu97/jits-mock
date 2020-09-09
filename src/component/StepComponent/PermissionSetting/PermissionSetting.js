import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Input,
  Table,
  Modal,
  Tag,
} from "antd";
import { Link } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import { isBrowser } from "react-device-detect";

class PermissionSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "#",
          dataIndex: "no",
          width: "10%",
        },
        {
          title: "ロール",
          dataIndex: "rule",
        },
        {
          title: "ランディングページ",
          dataIndex: "destinationPage",
        },
        {
          title: "権限",
          dataIndex: "role",
          render: (value) => this.renderRole(value),
        },
        {
          title: "備考",
          dataIndex: "comment",
        },
        {
          title: () => (
            <Button type="primary" onClick={() => this.showModal("ロール追加")}>
              ロール追加
            </Button>
          ),
          dataIndex: "button",
          align: "center",
          render: () => (
            <Button
              icon={<EditOutlined />}
              onClick={() => this.showModal("ロール編集")}
            />
          ),
        },
      ],
      dataSource: [
        {
          key: 0,
          no: 1,
          rule: "管理者",
          destinationPage: "/管理画面",
          role: ["P1", "P2"],
          comment: [],
          button: "",
        },
        {
          key: 1,
          no: 2,
          rule: "マネージャー",
          destinationPage: "/レポート",
          role: ["P2"],
          comment: [],
          button: "",
        },
        {
          key: 2,
          no: 3,
          rule: "承認者",
          destinationPage: "/警告履歴 ",
          role: ["P1"],
          comment: "確認、承認・拒否",
          button: "",
        },
      ],
      titleHeader: "",
      visible: false,
    };
  }
  renderRole = (value) => {
    let arrRole = [];
    value.forEach((ele, index) => {
      arrRole.push(
        <Tag
          key={index}
          color="default"
          style={{ margin: "6px", width: "50px", textAlign: "center" }}
        >
          {ele}
        </Tag>
      );
    });
    return arrRole;
  };
  showModal = (value) => {
    this.setState({
      visible: true,
      titleHeader: value,
    });
  };
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    let { dataSource, columns, titleHeader } = this.state;
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Modal
          title={titleHeader}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="保存"
          cancelText="クリア"
        >
          <Row gutter={[32, 32]} align="middle" justify="center">
            <Col span={6}>ロール名</Col>
            <Col span={18}>
              <Input defaultValue="管理者"></Input>
            </Col>
            <Col span={6}>ランディングページ</Col>
            <Col span={18}>
              <Input defaultValue="/ユーザー"></Input>
            </Col>
            <Col span={6}>備考</Col>
            <Col span={18}>
              <Input defaultValue="システムを管理する"></Input>
            </Col>
          </Row>
        </Modal>
        <Row style={{paddingBottom: '24px'}}>
          <h2 style={{ margin: 0 }}>権限設定</h2>
        </Row>
        {/* <Row gutter={[8, 8]} style={{ padding: "16px 0" }}>
          <Breadcrumb style={{ paddingLeft: "6px", color: "#0000FF" }}>
            <Breadcrumb.Item>
              <Link to="/home">ホームページ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text strong>権限設定</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row> */}
        <Card style={{ width: "100%" }}>
          <Row align="middle" justify="center" gutter={[12, 12]}>
            <Col lg={{ span: 9 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>ロール</Col>
                <Col span={18}>
                  <Input placeholder="複数選択" style={{ width: "100%" }} />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 9 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>権限</Col>
                <Col span={18}>
                  <Input placeholder="複数選択"></Input>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 4 }} xs={{ span: 24 }}>
              <Link to="/permission/edit">
                <Row justify="end">
                  <Button type="primary">検索</Button>
                </Row>
              </Link>
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
              pagination={{ position: ["bottomCenter"] }}
              title={() => "1000の12件の結果を表示"}
              scroll={{ x: "max-content" }}
            ></Table>
          </Row>
        </Card>
      </div>
    );
  }
}

export default PermissionSetting;
