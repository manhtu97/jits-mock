import React, { Component } from "react";
import "./DetailOffice.css";
import {
  Row,
  Col,
  Card,
  Breadcrumb,
  Typography,
  Button,
  DatePicker,
  Select,
  Modal,
  Input,
} from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import Highcharts from "highcharts";
import Chart from "@src/component/Util/HighChart";
import { ReloadOutlined } from "@ant-design/icons";
import { isBrowser, BrowserView, MobileView } from "react-device-detect";
const { Text } = Typography;
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartOption: {
        title: {
          text: "流入水量",
        },
        xAxis: [
          {
            categories: [0, 10, 20, 30, 40, 50, 60],
            plotLines: [
              {
                value: 3,
                dashStyle: "dash",
                width: 1,
                color: "#d33",
              },
            ],
          },
        ],
        yAxis: [
          {
            labels: {
              style: {
                color: Highcharts.getOptions().colors[1],
              },
            },
            title: {
              text: "水位",
              style: {
                color: Highcharts.getOptions().colors[1],
              },
            },
          },
          {
            title: {
              text: "降雨量",
              style: {
                color: Highcharts.getOptions().colors[0],
              },
            },
            labels: {
              style: {
                color: Highcharts.getOptions().colors[0],
              },
            },
            opposite: true,
          },
        ],
        tooltip: {
          shared: true,
        },
        plotOptions: {
          series: {
            color: "#1E04BC",
          },
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: "降雨量",
            type: "column",
            yAxis: 1,
            data: [
              { y: 0, color: "#999999" },
              { y: 900, color: "#999999" },
              { y: 3200, color: "#999999" },
              { y: 600, color: "#999999" },
              { y: 2200, color: "#3D85C6" },
              { y: 0, color: "#3D85C6" },
              { y: 1400, color: "#3D85C6" },
            ],
          },
          {
            name: "流入水量",
            type: "spline",
            data: [900, 3200, 5000, 2375, 3000, 100, 6000],
            zoneAxis: "x",
            zones: [
              { value: 0, color: "blue" },
              { value: 3, color: "red" },
            ],
          },
        ],
      },
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

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Modal
          title="ユーザー編集"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="ダウンロード"
          cancelText="クリア"
        >
          <Row gutter={[16, 16]} align="middle" justify="center">
            <Col span={8}>
              カメラ<span style={{ color: "red" }}>*</span>
            </Col>
            <Col span={16}>
              <Input defaultValue="カメラ01"></Input>
            </Col>
            <Col span={8}>
              開始時間<span style={{ color: "red" }}>*</span>
            </Col>
            <Col span={16}>
              <DatePicker
                style={{ width: "100%" }}
                showTime
                defaultValue={moment("2019/10/25", "YYYY/MM/DD")}
              />
            </Col>
            <Col span={8}>
              終了時間<span style={{ color: "red" }}>*</span>
            </Col>
            <Col span={16}>
              <DatePicker
                style={{ width: "100%" }}
                showTime
                defaultValue={moment("2019/10/25", "YYYY/MM/DD")}
              />
            </Col>
          </Row>
        </Modal>
        <Row>
          <h2 style={{ margin: 0 }}>田布施</h2>
        </Row>
        <Row gutter={[8, 8]} style={{ padding: "16px 0" }}>
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
              <Text strong>ダッシュボード</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Card style={{ width: "100%", margin: "16px 0" }}>
          <Row align="middle" justify="center" gutter={[16, 16]}>
            <Col lg={{ span: 6 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>開始時間</Col>
                <Col span={18}>
                  <DatePicker
                    style={{ width: "100%" }}
                    showTime
                    defaultValue={moment(
                      "2019/10/25 06:00:00",
                      "YYYY/MM/DD HH:mm:ss"
                    )}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 6 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>終了時間</Col>
                <Col span={18}>
                  <DatePicker
                    style={{ width: "100%" }}
                    showTime
                    defaultValue={moment(
                      "2019/12/31 18:00:00",
                      "YYYY/MM/DD HH:mm:ss"
                    )}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 6 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>処理場</Col>
                <Col span={18}>
                  <Select style={{ width: "100%" }} defaultValue="A"></Select>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 4 }} xs={{ span: 24 }}>
              <Row justify="end">
                <Button type="primary">フィルタ</Button>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card style={{ width: "100%", margin: "16px 0" }} bodyStyle={{ padding: '6px' }}>
          <Card
            title="処理場A"
            bodyStyle={{ padding: 0 }}
            bordered
            style={{ marginBottom: "32px" }}
          >
            <Row align="middle" justify="center" style={{ padding: "16px 0" }}>
              <Col lg={{ span: 10 }} xs={{ span: 24 }}>
                <Row
                  style={{ textAlign: "start", paddingLeft: "12px" }}
                  align="middle"
                >
                  <Col span={20}>
                    <Text strong>最終更新：13:25:00 2020/06/20</Text>
                  </Col>
                  <Col span={4}>
                    <Button icon={<ReloadOutlined />} />
                  </Col>
                </Row>
              </Col>
              <Col span={14} lg={{ span: 14 }} xs={{ span: 24 }}>
                <Row
                  style={{ textAlign: "start", paddingLeft: "12px" }}
                  align="middle"
                  gutter={[12, 12]}
                >
                  <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                    <Text strong>降雨量: 100mm</Text>
                  </Col>
                  <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                    <Text strong>流入水量: 300m</Text>
                  </Col>
                  <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                    <Text strong>水位: 4800mm</Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>

          <Row gutter={[16, 16]} align="middle" justify="center">
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Row
                justify="center"
                align="middle"
                style={{ height: "200px", border: "1px solid gray" }}
              >
                <span style={{ padding: "20px", border: "1px solid gray" }}>
                  カメラ 1 リアルタイム監視
                </span>
              </Row>
            </Col>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Row
                justify="center"
                align="middle"
                style={{ height: "200px", border: "1px solid gray" }}
              >
                <span style={{ padding: "20px", border: "1px solid gray" }}>
                  カメラ 2 リアルタイム監視
                </span>
              </Row>
            </Col>
            <Col lg={{ span: 14 }} xs={{ span: 24 }}>
              <Chart
                options={this.state.chartOption}
                highcharts={Highcharts}
              ></Chart>
            </Col>
            <Col span={5} lg={{ span: 5 }} xs={{ span: 12 }}>
              <Row
                align="middle"
                justify="start"
                style={{ border: "1px solid gray", padding: "16px" }}
              >
                <Col span={4}>
                  <Row align="center">
                    <Col
                      style={{
                        border: "1px solid red",
                        backgroundColor: "red",
                        height: "5px",
                        width: "100%",
                      }}
                    ></Col>
                  </Row>
                </Col>
                <Col span={20}>過去の流入水量</Col>
                <Col span={4}>
                  <Row align="center">
                    <Col
                      style={{
                        border: "1px solid blue",
                        backgroundColor: "blue",
                        height: "5px",
                        width: "100%",
                      }}
                    ></Col>
                  </Row>
                </Col>
                <Col span={20}>予測流入量</Col>
                <Col span={4}>
                  <Row align="center">
                    <Col
                      style={{
                        border: "1px solid gray",
                        backgroundColor: "#999999",
                        height: "20px",
                        width: "20px",
                      }}
                    ></Col>
                  </Row>
                </Col>
                <Col span={20}>過去の降雨量</Col>
                <Col span={4}>
                  <Row align="center">
                    <Col
                      style={{
                        border: "1px solid gray",
                        backgroundColor: "#3D85C6",
                        height: "20px",
                        width: "20px",
                      }}
                    ></Col>
                  </Row>
                </Col>
                <Col span={20}>降雨量</Col>
                <Col span={4}>
                  <Row align="center">
                    <Col
                      style={{
                        border: "1px solid gray",
                        backgroundColor: "black",
                        height: "20px",
                        width: "20px",
                      }}
                    ></Col>
                  </Row>
                </Col>
                <Col span={20}>水位</Col>
              </Row>
            </Col>
            <Col span={5} lg={{ span: 5 }} xs={{ span: 12 }}>
              <Row
                align="middle"
                justify="start"
                style={{ border: "1px solid gray", padding: "16px" }}
              >
                <Col span={12}>警報数 :</Col>
                <Col span={12}>
                  <Text strong style={{ color: "blue" }}>
                    50
                  </Text>
                </Col>
                <Col span={12}>対応済 :</Col>
                <Col span={12}>
                  <Text strong style={{ color: "blue" }}>
                    40
                  </Text>
                </Col>
                <Col span={12}>対応中 :</Col>
                <Col span={12}>
                  <Text strong style={{ color: "blue" }}>
                    {" "}
                    6
                  </Text>
                </Col>
                <Col span={12}>未対応 :</Col>
                <Col span={12}>
                  <Text strong style={{ color: "blue" }}>
                    4
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify="end">
            <Button type="primary" onClick={this.showModal}>
              動画ダウンロード
            </Button>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
