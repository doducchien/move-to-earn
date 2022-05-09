import React from "react";
import { Row, Col } from "antd";
import { RocketOutlined } from "@ant-design/icons";
import ImageBlurred from "../../component/ImageBlurred";

export default function Mine() {
  return (
    <div id="mine-section">
      <ImageBlurred pos="left" />

      <Row>
        <Col span={12} className="left">
          <h3>A better way to mine</h3>
        </Col>
        <Col span={12} className="right">
          <Row className="group-item">
            <Col span={2}>
              <RocketOutlined />
            </Col>
            <Col span={22}>
              <Row>
                <Col span={24} className="title">
                  Quick start
                </Col>
                <Col span={18}>
                  No need to think about purchasing equipment, configuring,
                  maintaining, and updating it. With GMT, the token holder can
                  start mining Bitcoin just 24 hours after purchasing their
                  tokens.
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="group-item">
            <Col span={2}>
              <RocketOutlined />
            </Col>
            <Col span={22}>
              <Row>
                <Col span={24} className="title">
                  Quick start
                </Col>
                <Col span={18}>
                  No need to think about purchasing equipment, configuring,
                  maintaining, and updating it. With GMT, the token holder can
                  start mining Bitcoin just 24 hours after purchasing their
                  tokens.
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="group-item">
            <Col span={2}>
              <RocketOutlined />
            </Col>
            <Col span={22}>
              <Row>
                <Col span={24} className="title">
                  Quick start
                </Col>
                <Col span={18}>
                  No need to think about purchasing equipment, configuring,
                  maintaining, and updating it. With GMT, the token holder can
                  start mining Bitcoin just 24 hours after purchasing their
                  tokens.
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="group-item">
            <Col span={2}>
              <RocketOutlined />
            </Col>
            <Col span={22}>
              <Row>
                <Col span={24} className="title">
                  Quick start
                </Col>
                <Col span={18}>
                  No need to think about purchasing equipment, configuring,
                  maintaining, and updating it. With GMT, the token holder can
                  start mining Bitcoin just 24 hours after purchasing their
                  tokens.
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
