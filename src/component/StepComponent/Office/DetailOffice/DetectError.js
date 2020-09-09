import React, { Component } from "react";
import "./DetailOffice.css";
import {
  Row,
  Col,
  Card,
  DatePicker,
  Button,
  Input,
  Select,
} from "antd";
import Chart from "@src/component/Util/HighChart";
import Highcharts from "highcharts";
import moment from "moment";
import { BrowserView, MobileView, isBrowser } from "react-device-detect";
const {Option} = Select;
class DetectError extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let chartOption = {
      chart: {
        type: "spline",
      },
      credits: {
        enabled: false,
      },
      title: {
        text: "流入量",
      },

      yAxis: {
        title: {
          text: "(mm)",
        },
      },

      xAxis: {
        category: "datetime",
      },

      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
        borderColor: "#C98657",
        borderWidth: 1,
        title: {
          text: "流入量",
        },
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
        },
      },
      series: [
        {
          name: "実績流入量",
          data: [
            43934,
            52503,
            57177,
            69658,
            57031,
            45931,
            37133,
            54175,
            34000,
            23123,
          ],
          color: "#FF0000",
        },
        {
          name: "予測流入量",
          data: [
            24916,
            24064,
            29742,
            29851,
            32490,
            30282,
            38121,
            40434,
            44000,
            33123,
          ],
          color: "#1E04BC",
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                align: "center",
                verticalAlign: "bottom",
                layout: "horizontal",
              },
            },
          },
        ],
      },
    };
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Row style={{ paddingBottom: "24px" }}>
          <Col flex="auto">
            <Row justify="start">
              <h2 style={{ margin: 0 }}>精度誤差検知</h2>
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
              <Text strong>精度誤差検知</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row> */}
        <Card style={{ width: "100%" }}>
          <Row align="middle" justify="center" gutter={[32, 16]}>
            <Col lg={{ span: 10 }} xs={{ span: 24 }}>
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
            <Col lg={{ span: 10 }} xs={{ span: 24 }}>
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
            <Col lg={{ span: 4 }} xs={{ span: 24 }}>
              <Row justify="end">
                <Button type="primary">フィルタ</Button>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card style={{ width: "100%", marginTop: "36px" }}>
          <Row align="middle" justify="center" gutter={[32, 16]}>
            <Col lg={{ span: 10 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>精度(%)</Col>
                <Col span={18}>
                  <Input placeholder="Basic usage" defaultValue={10} />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 10 }} xs={{ span: 0 }}></Col>
            <Col lg={{ span: 4 }} xs={{ span: 24 }}>
              <Row justify="end">
                <Button type="primary">保存</Button>
              </Row>
            </Col>
          </Row>
        </Card>
        <BrowserView>
          <Card style={{ width: "100%", marginTop: "36px" }}>
            <Row align="middle" justify="center">
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Chart highcharts={Highcharts} options={chartOption} />
              </Col>
            </Row>
            <Row justify="end">
              <Button type="primary">エクセルファイル出力</Button>
            </Row>
          </Card>
        </BrowserView>
        <MobileView>
          <Card style={{ width: "100%", marginTop: "36px" }} bodyStyle={{padding: '6px'}}>
            <Row align="middle" justify="center">
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Chart highcharts={Highcharts} options={chartOption} />
              </Col>
            </Row>
            <Row justify="end">
              <Button type="primary">エクセルファイル出力</Button>
            </Row>
          </Card>
        </MobileView>
      </div>
    );
  }
}

export default DetectError;
