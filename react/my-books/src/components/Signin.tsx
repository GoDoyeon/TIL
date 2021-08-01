import { Button, Col, Row } from 'antd';

export default function Signin() {
  return (
    <Row align="middle">
      <Col span={24}>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <div>My Books</div>
            <div>Please Note Your Opinion</div>
            <div />
            <div>
              Email
              <span>*</span>
            </div>
            <div>
              <input placeholder="Email" autoComplete="emial" name="email" />
            </div>
            <div>
              Password
              <span>*</span>
            </div>
            <div>
              <input
                placeholder="password"
                autoComplete="current-password"
                name="password"
              />
            </div>
            <div>
              <Button size="large">Sign In</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
