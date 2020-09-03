import React, { Component } from "react";
import "./Office.css";
import { Row, Col, Card, Breadcrumb, Typography } from "antd";
import DetailOffice from "@src/component/StepComponent/Office/DetailOffice/DetailOffice";
import { Switch, Link, Route, BrowserRouter } from "react-router-dom";
import { isBrowser } from "react-device-detect";
const { Text } = Typography;
const { Meta } = Card;
class Office extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const arrayDetailOffice = [
      {
        name: "田布施",
        id: 1,
      },
      {
        name: "東埼玉",
        id: 2,
      },
      {
        name: "東京",
        id: 3,
      },
      {
        name: "大阪",
        id: 4,
      },
    ];
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Row>
          <h2 style={{ margin: 0 }}>事業所一覧</h2>
        </Row>
        <Row gutter={[8, 8]} style={{ padding: "16px 0" }}>
          <Breadcrumb style={{ paddingLeft: "6px", color: "#0000FF" }}>
            <Breadcrumb.Item>
              <Link to="/home">ホームページ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text strong>事業所</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row gutter={[8, 8]}>
          {arrayDetailOffice.map((obj) => (
            <Col xs={{ span: 12 }} lg={{ span: 6 }} key={obj.id}>
              <Link to={{ pathname: "/office/" + obj.id }}>
                <Card hoverable>
                  <Meta
                    title={obj.name}
                    description="This is the description"
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <BrowserRouter>
          <Switch>
            <Route exact path="/office/1" children={<DetailOffice />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Office;
