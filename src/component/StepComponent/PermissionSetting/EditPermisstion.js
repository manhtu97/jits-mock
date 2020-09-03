import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Breadcrumb,
  Typography,
  Button,
  Input,
  Modal,
  Checkbox,
} from "antd";
import { Link } from "react-router-dom";
import "./PermissionSetting.css";
import { isBrowser } from "react-device-detect";
const { Text } = Typography;
const CheckboxGroup = Checkbox.Group;

class EditPermission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayWaring: [
        "警告履歴",
        "システム警告",
        "運転監視警告",
        "警報承認操作",
        "警報承認の修正",
      ],
      arraySetting: ["システム権限", "運転管理設定"],
      arraySettingRole: [
        "権限閲覧",
        "ロール閲覧",
        "ロール追加",
        "ロール編集",
        "ロール削除",
      ],
      arrayUser: ["ユーザー閲覧", "ユーザー追加", "ユーザー編集"],
      checkedList1: [],
      checkedList2: [],
      checkedList3: [],
      checkedList4: [],
      checkAll1: false,
      checkAll2: false,
      checkAll3: false,
      checkAll4: false,
    };
  }
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
  onChange1 = (checkedList1) => {
    let { arrayWaring } = this.state;
    this.setState({
      checkedList1,
      checkAll1: checkedList1.length === arrayWaring.length,
    });
  };

  onCheckAllChange1 = (e) => {
    let { arrayWaring } = this.state;
    this.setState({
      checkedList1: e.target.checked ? arrayWaring : [],
      checkAll1: e.target.checked,
    });
  };
  onChange2 = (checkedList2) => {
    let { arraySetting } = this.state;
    this.setState({
      checkedList2,
      checkAll2: checkedList2.length === arraySetting.length,
    });
  };

  onCheckAllChange2 = (e) => {
    let { arraySetting } = this.state;
    this.setState({
      checkedList2: e.target.checked ? arraySetting : [],
      checkAll2: e.target.checked,
    });
  };
  onChange3 = (checkedList3) => {
    let { arraySettingRole } = this.state;
    this.setState({
      checkedList3,
      checkAll3: checkedList3.length === arraySettingRole.length,
    });
  };

  onCheckAllChange3 = (e) => {
    let { arraySettingRole } = this.state;
    this.setState({
      checkedList3: e.target.checked ? arraySettingRole : [],
      checkAll3: e.target.checked,
    });
  };
  onChange4 = (checkedList4) => {
    let { arrayUser } = this.state;
    this.setState({
      checkedList4,
      checkAll4: checkedList4.length === arrayUser.length,
    });
  };

  onCheckAllChange4 = (e) => {
    let { arrayUser } = this.state;
    this.setState({
      checkedList4: e.target.checked ? arrayUser : [],
      checkAll4: e.target.checked,
    });
  };
  render() {
    let {
      titleHeader,
      arrayWaring,
      arraySetting,
      arrayUser,
      arraySettingRole,
    } = this.state;
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
        <Row>
          <h2 style={{ margin: 0 }}>権限編集</h2>
        </Row>
        <Row gutter={[8, 8]} style={{ padding: "16px 0" }}>
          <Breadcrumb style={{ paddingLeft: "6px", color: "#0000FF" }}>
            <Breadcrumb.Item>
              <Link to="/home">ホームページ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text strong>権限設定</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Card style={{ width: "100%" }}>
          <Row align="middle" justify="center" gutter={[12, 12]}>
            <Col span={4}>権限</Col>
            <Col span={16}>
              <Input placeholder="複数選択"></Input>
            </Col>
            <Col span={4}>
              <Button type="primary">検索</Button>
            </Col>
          </Row>
        </Card>
        <Row
          align="top"
          justify="center"
          gutter={[36, 36]}
          style={{ paddingTop: "24px" }}
        >
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <Card style={{ width: "100%" }}>
              <Row style={{ padding: "16px 0" }}>
                <Text strong>全体</Text>
              </Row>
              <Row style={{ padding: "16px 0" }}>
                <Checkbox>ダッシュボード</Checkbox>
              </Row>
              <Row style={{ padding: "16px 0" }} justify="start">
                <Col
                  span={24}
                  style={{ textAlign: "start", paddingBottom: "8px" }}
                >
                  <Checkbox
                    onChange={this.onCheckAllChange1}
                    checked={this.state.checkAll1}
                  >
                    警告
                  </Checkbox>
                </Col>
                <Col
                  span={24}
                  style={{ textAlign: "start", paddingLeft: "24px" }}
                >
                  <CheckboxGroup
                    className="checkBoxColumn"
                    options={arrayWaring}
                    value={this.state.checkedList1}
                    onChange={this.onChange1}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12} lg={{ span: 12 }} xs={{ span: 24 }}>
            <Card style={{ width: "100%" }}>
              <Row style={{ padding: "16px 0" }}>
                <Text strong>設定</Text>
              </Row>
              <Row style={{ padding: "16px 0" }} justify="start">
                <Col
                  span={24}
                  style={{ textAlign: "start", paddingBottom: "8px" }}
                >
                  <Checkbox
                    onChange={this.onCheckAllChange2}
                    checked={this.state.checkAll2}
                  >
                    設定
                  </Checkbox>
                </Col>
                <Col
                  span={24}
                  style={{ textAlign: "start", paddingLeft: "24px" }}
                >
                  <CheckboxGroup
                    className="checkBoxColumn"
                    options={arraySetting}
                    value={this.state.checkedList2}
                    onChange={this.onChange2}
                  />
                </Col>
              </Row>
              <Row style={{ padding: "16px 0" }} justify="start">
                <Col
                  span={24}
                  style={{ textAlign: "start", paddingBottom: "8px" }}
                >
                  <Checkbox
                    onChange={this.onCheckAllChange3}
                    checked={this.state.checkAll3}
                  >
                    権限設定
                  </Checkbox>
                </Col>
                <Col
                  span={24}
                  style={{ textAlign: "start", paddingLeft: "24px" }}
                >
                  <CheckboxGroup
                    className="checkBoxColumn"
                    options={arraySettingRole}
                    value={this.state.checkedList3}
                    onChange={this.onChange3}
                  />
                </Col>
              </Row>
              <Row style={{ padding: "16px 0" }} justify="start">
                <Col
                  span={24}
                  style={{ textAlign: "start", paddingBottom: "8px" }}
                >
                  <Checkbox
                    onChange={this.onCheckAllChange4}
                    checked={this.state.checkAll4}
                  >
                    ユーザー
                  </Checkbox>
                </Col>
                <Col
                  span={24}
                  style={{ textAlign: "start", paddingLeft: "24px" }}
                >
                  <CheckboxGroup
                    className="checkBoxColumn"
                    options={arrayUser}
                    value={this.state.checkedList4}
                    onChange={this.onChange4}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditPermission;
