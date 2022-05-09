import React from "react";
import { Row, Col } from "antd";
import img1 from "../../asset/img/logo-bmc.3700595.png";
import ImageBlurred from "../../component/ImageBlurred";
import {
  MediumOutlined,
  CodeSandboxOutlined,
  AlipayCircleOutlined,
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  IeOutlined,
  ChromeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import BaseButton from "../../component/BaseButton";
import BaseSpace from "../../component/BaseSpace";
export default function Brand() {
  return (
    <div id="brand-section">
      <ImageBlurred pos='right'/>
      <Row className="above-1" align="middle">
        <Col span={3}>
          <Row gutter={4}>
            <Col>
              <MediumOutlined />
            </Col>
            <Col>
              <span>Audited</span>
              <p>by CertiK</p>
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <Row gutter={4}>
            <Col>
              <CodeSandboxOutlined />
            </Col>
            <Col>
              <span>Available for purchase</span>
              <p>TRUST WALLET</p>
            </Col>
          </Row>
        </Col>
        <Col span={3}>
          <Row gutter={6} align="top">
            <Col>
              <AlipayCircleOutlined />
            </Col>
            <Col>
              <span>Member</span>
              <p>Is the best</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="above-2" justify="start">
        <Col span={12}>
          <h1>Brand-new way of mining</h1>
        </Col>
      </Row>
      <Row className="above-3" justify="start">
        <Col span={12}>
          <h2>
            GMT is a token for mining Bitcoin, backed with real computing power
          </h2>
        </Col>
      </Row>
      <BaseSpace height="5rem" />
      <Row className="above-4">
        <Col span={12}>
          <Row justify="start">
            <Col span={8}>
              <BaseButton content="Buy GMT" />
            </Col>
            <Col span={16}>
              <BaseButton content="White paper" type="white" />
            </Col>
          </Row>
        </Col>
        <Col className="right">
          <Row>
            <Col span={24} className="group-icons">
              <AndroidOutlined />
              <AppleOutlined />
              <WindowsOutlined />
              <IeOutlined />
              <ChromeOutlined />
              <GithubOutlined />
            </Col>
            <Col span={24}>Smart contract address:</Col>
            <Col span={24}>0x7Ddc52c4De30e94Be3A6A0A2b259b2850f421989</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
