import React from "react";
import { Row, Col } from "antd";
import logoHeader from '../asset/img/logo-header.jpeg';
export default function Header() {
  return (
    <header>
      <Row align="middle" className="header-row">
        <Col lg={{ span: 16 }}>
          <Row align="middle">
            <Col span={3}><img src={logoHeader} alt="" /></Col>
            <Col span={3}>Main</Col>

            <Col span={3}>Token</Col>

            <Col span={3}>Buy GMT</Col>

            <Col span={3}>About GMT</Col>

            <Col span={3}>FAQ</Col>

            <Col span={6}>GMT Anniversary</Col>
          </Row>
        </Col>
        <Col lg={{ span: 8 }} className='right'>
          <Row>
            <Col span={6}>Log in</Col>
            <Col span={6}>Sign up</Col>
            <Col span={4}></Col>
            <Col span={8}>ENGLISH</Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
}
