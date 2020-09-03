import React, { Component } from "react";
import { Row, Col } from "antd";
import "./header.css";
import SrcImage from "@src/styles/icon/logoFPT.png";
import { Typography } from "antd";
import { BrowserView, MobileView } from "react-device-detect";

const { Link } = Typography;
class Header extends Component {
  render() {
    return (
      <>
        <BrowserView>
          <header className="header">
            <Row align="middle" justify="center">
              <Col span={4}>
                <img src={SrcImage} alt="" />
              </Col>
              <Col span={16}>
                <h1>
                  <b className="titleName">SHI 水量予測</b>
                </h1>
              </Col>
              <Col className="trans" span={4} align="middle">
                <Row gutter={[8, 0]} align="middle">
                  <Col span={24}>
                    <Link
                      style={{
                        color: "white",
                        fontSize: "16px",
                        marginBottom: 0,
                      }}
                    >
                      システム管理者
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </header>
        </BrowserView>
        <MobileView>
          <header className="header">
            <Row align="middle" justify="center">
              <Col span={6}>
                <img src={SrcImage} alt="" style={{height:30}} />
              </Col>
              <Col span={12}>
                <h1>
                  <b className="titleName" style={{fontSize: '16px'}}>SHI 水量予測</b>
                </h1>
              </Col>
              <Col className="trans" span={6} align="middle">
                <Row gutter={[8, 0]} align="middle">
                  <Col span={24}>
                    <Link
                      style={{
                        color: "white",
                        fontSize: "12px",
                        marginBottom: 0,
                      }}
                    >
                      システム管理者
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </header>
        </MobileView>
      </>
    );
  }
}

export default Header;
