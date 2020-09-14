import React, { Component } from "react";
import "./user.css";
import {
  Row,
  Col,
  Card,
  Button,
  Input,
  Select,
  Table,
  Modal,
  Tag,
} from "antd";
import { TweenOneGroup } from "rc-tween-one";
import { isBrowser } from "react-device-detect";

class User extends Component {
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
          title: "ユーザー名",
          dataIndex: "nameUser",
        },
        {
          title: "フルネーム",
          dataIndex: "fullName",
        },
        {
          title: "Eメール",
          dataIndex: "email",
        },
        {
          title: "最終ログイン",
          dataIndex: "lastLogin",
        },
        {
          title: "ロール",
          dataIndex: "roll",
        },
        {
          title: () => <Button>作成</Button>,
          dataIndex: "button",
          render: (value) => <Button onClick={this.showModal}>{value}</Button>,
        },
      ],
      dataSource: [
        {
          key: 0,
          no: 1,
          nameUser: "管理者01",
          fullName: "A B C",
          email: "abc@gmail.com",
          lastLogin: "15:00:24 01/05/2020",
          roll: "管理者",
          button: "編集",
        },
        {
          key: 1,
          no: 2,
          nameUser: "マネージャー01 ",
          fullName: "マネージャー",
          email: "マネージャー@gmail.com",
          lastLogin: "15:00:24 01/05/2020",
          roll: "マネージャ",
          button: "編集",
        },
        {
          key: 2,
          no: 3,
          nameUser: "承認者01",
          fullName: "承認者",
          email: "承認者@gmail.com",
          lastLogin: "15:00:24 01/05/2020",
          roll: "承認者",
          button: "編集",
        },
      ],
      tags: ["田布施", "東埼玉"],
      inputValue: "",
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

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };
  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  saveInputRef = (input) => {
    this.input = input;
  };
  handleClose = (removedTag) => {
    const tags = this.state.tags.filter((tag) => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };
  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputValue: "",
    });
  };
  forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          this.handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: "inline-block" }}>
        {tagElem}
      </span>
    );
  };
  render() {
    let { dataSource, columns, inputValue, tags } = this.state;
    let tagChild = tags.map(this.forMap);
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Modal
          title="ユーザー編集"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="保存"
          cancelText="クリア"
        >
          <Row gutter={[32, 32]} align="middle" justify="center">
            <Col span={8}>ユーザー名</Col>
            <Col span={16}>
              <Input placeholder="管理者01"></Input>
            </Col>
            <Col span={8}>フルネーム</Col>
            <Col span={16}>
              <Input defaultValue="A B C"></Input>
            </Col>
            <Col span={8}>Eメール</Col>
            <Col span={16}>
              <Input defaultValue="abc@gmail.com"></Input>
            </Col>
            <Col span={8}>ロール</Col>
            <Col span={16}>
              <Select defaultValue="管理者"></Select>
            </Col>
            <Col span={8}>事業所</Col>
            <Col span={16}>
              <Input
                ref={this.saveInputRef}
                type="text"
                style={{ width: 200, margin: "12px 0" }}
                value={inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
              />
              <div style={{ padding: "12px", border: "1px solid #e0dddd" }}>
                <TweenOneGroup
                  enter={{
                    scale: 0.8,
                    opacity: 0,
                    type: "from",
                    duration: 100,
                    onComplete: (e) => {
                      e.target.style = "";
                    },
                  }}
                  leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                  appear={false}
                >
                  {tagChild}
                </TweenOneGroup>
              </div>
            </Col>
          </Row>
        </Modal>
        <Row style={{paddingBottom: '24px'}}>
          <h2 style={{ margin: 0 }}>ユーザー</h2>
        </Row>
        {/* <Row gutter={[8, 8]} style={{ padding: "16px 0" }}>
          <Breadcrumb style={{ paddingLeft: "6px", color: "#0000FF" }}>
            <Breadcrumb.Item>
              <Link to="/home">ホームページ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text strong>ユーザー</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row> */}
        <Card style={{ width: "100%" }}>
          <Row align="middle" justify="center" gutter={[32, 16]} className="rowNotMargin">
            <Col lg={{ span: 7 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center" gutter={[6, 6]}>
                <Col span={8}>ユーザー名</Col>
                <Col span={16}>
                  <Input></Input>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 7 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center" gutter={[6, 6]}>
                <Col span={8}>フルネーム</Col>
                <Col span={16}>
                  <Input></Input>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 7 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center" gutter={[6, 6]}>
                <Col span={6}>ロール</Col>
                <Col span={18}>
                  <Select style={{ width: "100%" }} />
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

export default User;
