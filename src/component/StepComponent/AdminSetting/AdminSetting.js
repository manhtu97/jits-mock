import React, { Component } from "react";
import "./AdminSetting.css";
import {
  Row,
  Col,
  Card,
  Breadcrumb,
  Typography,
  Input,
  Tag,
  Button,
} from "antd";
import { Link } from "react-router-dom";
import { TweenOneGroup } from "rc-tween-one";
import { isBrowser } from "react-device-detect";
const { Text } = Typography;
class AdminSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ["abc01@gmail.com", "abc02@gmail.com"],
      inputValue: "",
    };
  }
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
    let { inputValue, tags } = this.state;
    let tagChild = tags.map(this.forMap);
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Row>
          <h2 style={{ margin: 0 }}>システム設定</h2>
        </Row>
        <Row gutter={[8, 8]} style={{ padding: "16px 0" }}>
          <Breadcrumb style={{ paddingLeft: "6px", color: "#0000FF" }}>
            <Breadcrumb.Item>
              <Link to="/home">ホームページ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text strong>システム設定</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Card style={{ textAlign: "start" }}>
          <Row gutter={[8, 8]} align="middle">
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Row gutter={[8, 8]} align="middle" justify="start">
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>失敗時のリトライ回数</Col>
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                  <Input placeholder="数値を入力してください" />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Row gutter={[8, 8]} align="middle" justify="start">
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>n分ごとにクレンジングデータを取得する</Col>
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                  <Input placeholder="数値を入力してください" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ padding: "6px 0" }}>
            <Col>エラーが出るときのメール送信</Col>
            <Col span={24}>
              <Input
                ref={this.saveInputRef}
                type="text"
                style={{ width: 200, margin: "12px 0" }}
                value={inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
              />
              <div style={{ padding: "12px", border: "1px solid grey" }}>
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
          <Row style={{ padding: "6px 0" }}>
            <Col>警報が出るときのメール送信</Col>
            <Col span={24}>
              <Input
                ref={this.saveInputRef}
                type="text"
                style={{ width: 200, margin: "12px 0" }}
                value={inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
              />
              <div style={{ padding: "12px", border: "1px solid grey" }}>
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
          <Row justify="end" style={{ padding: "6px 0" }}>
            <Button type="primary">保存</Button>
          </Row>
        </Card>
      </div>
    );
  }
}

export default AdminSetting;
