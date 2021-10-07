import { FC } from "react";
import { Col, Row } from "react-grid-system";
import { Button, Input } from "../../atoms";
import './styles.css';

const Header: FC = () => {
  return (
    <header className="secondary-color custom-header">
      <Row className="header-content">
        <Col md={1}>
          <Button type="logo" label="logo" />
        </Col>
        <Col md={4} style={{ marginLeft: "100px" }}>
          <Input
            name="searchInput"
            placeholder="o que você está procurando?"
            type="search"
          />
        </Col>
        <Col md={3}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ color: "#828BA1" }}>
              <label>Entre</label>
            </div>
            <div style={{ color: "#828BA1" }}>
              <label>Cadastre-se</label>
            </div>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
