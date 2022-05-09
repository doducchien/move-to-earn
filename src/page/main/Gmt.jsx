import React from "react";
import { Row, Col } from "antd";
import BaseButton from "../../component/BaseButton";

const Item = ({ label, content, isBigger = true }) => {
  return (
    <div className={`wrapper-item ${!isBigger && "smaller"}`}>
      <Row>
        <Col span={24} className="label">
          {label}
        </Col>
      </Row>
      <Row>
        <Col span={24} className="content">
          {content}
        </Col>
      </Row>
    </div>
  );
};

export default function Gmt() {
  return (
    <div id="gmt-section">
      <Row gutter={48}>
        <Col span={8} className="item">
          <Row>
            <Col span={24} className="property">
              Security power
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Item label="TOTAL" content="500,000TH" />
            </Col>
            <Col span={24}>
              <Item label="1 GMT" content="0.001743 TH" isBigger={false} />
            </Col>
          </Row>
        </Col>
        <Col span={8} className="item middle-item">
          <Row>
            <Col span={24} className="property">
              The number of GMT in circulation
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Item label="TOTAL AMOUNT OF GMT" content="286,869,664" />
            </Col>
            <Col span={12}>
              <Item label="ERC-20" content="248,427,635" isBigger={false} />
            </Col>
            <Col span={12}>
              <Item label="ВЕР-20" content="38,442,029" isBigger={false} />
            </Col>
          </Row>
        </Col>
        <Col span={8} className="item">
          <Row>
            <Col span={24} className="property">
              Rewards in ВТС from the pool
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Item label="TOTAL" content="404.50" />
            </Col>
            <Col span={12}>
              <Item label="YESTERDAY" content="2.18" />
            </Col>
            <Col span={24}>
              <Item label="ACCRUED FOR THE CURRENT DAY" content="1.42" isBigger={false} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="under">
        <Col><BaseButton type="blue" content="Show device groups"/></Col>
      </Row>
    </div>
  );
}
