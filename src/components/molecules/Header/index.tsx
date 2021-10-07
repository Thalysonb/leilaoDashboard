import { FC } from "react";
import { Col, Row } from "react-grid-system";
import { Button, Input } from "../../atoms";
import "./styles.css";

const Header: FC = () => {
  return (
    <header className="secondary-color custom-header">
      <Row className="w-100">
        <Col md={8} className="ml-auto mr-auto">
          <Row className="header-content">
            <Col md={2}>
              <Button type="logo" label="logo" />
            </Col>
            <Col md={6} >
              <Input
                name="searchInput"
                placeholder="o que você está procurando?"
                type="search"
              />
            </Col>
            <Col md={3}>
              <div className="header-link-container">
                <div style={{ color: "#828BA2" }}>
                  <label>Entre</label>
                </div>
                <div style={{ color: "#828BA2" }}>
                  <label>Cadastre-se</label>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
