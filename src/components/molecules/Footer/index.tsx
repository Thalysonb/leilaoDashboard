import { FC } from "react";
import { Col, Row } from "react-grid-system";
import fbIcon from "../../../assets/icon/facebook.svg";
import instaIcon from "../../../assets/icon/instagram.svg";
import twIcon from "../../../assets/icon/twitter.svg";
import ytIcon from "../../../assets/icon/youtube.svg";
import { Button } from "../../atoms";
import "./styles.css";

const Footer: FC = () => {
  const linkList = [
    "Pagina inicial",
    "Minha conta",
    "Meus leilões",
    "Favoritos",
  ];
  const linkList2 = ["Comprar", "Meus arremates", "Pagamentos", "Retirada"];
  const linkList3 = ["Como funciona", "Termos de serviço", "Central de ajuda"];

  return (
    <footer className="secondary-color">
      <Row>
        <Col md={8}>
          <Row className="footer-content">
            <Col md={1}>
              <Button type="logo" label="logo" />
            </Col>
            <Col md={2}>
              <ul>
                {linkList.map((link, index) => (
                  <li
                    key={index}
                    style={{
                      color: "#D8E0F2",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={2}>
              <ul>
                {linkList2.map((link, index) => (
                  <li
                    key={index}
                    style={{
                      color: "#D8E0F2",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={2}>
              <ul>
                {linkList3.map((link, index) => (
                  <li
                    key={index}
                    style={{
                      color: "#D8E0F2",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={2}>
              <label>Acompanhe:</label>
              <img src={instaIcon} />
              <img src={twIcon} />
              <img src={fbIcon} />
              <img src={ytIcon} />
            </Col>
          </Row>
          <Row>
            <label
              style={{
                color: "#D8E0F2",
              }}
            >
              Copyright © 2021 site.com.br LTDA
            </label>
            <label
              style={{
                color: "#D8E0F2",
              }}
            >
              CNPJ n.º 00.000.000/0000-00 / Av. Lorem ipsum dolor sit amet, nº
              000, Austin, Nova Iguaçu/RJ - CEP 00000-000 - empresa do grupo 4U.
            </label>
          </Row>
        </Col>

        <Col md={4}>
          <Row>
            <div className="divider-footer"></div>
            {/* <Col md={4} style={{marginLeft: '100px'}}>
        <Input
          name="searchInput"
          placeholder="o que você está procurando?"
          type="search"
        />
      </Col>
      <Col md={3}>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <div style={{color: '#828BA1'}}>
            <label>Entre</label>
          </div>
          <div style={{color: '#828BA1'}}>
            <label>Cadastre-se</label>
          </div>
        </div>
      </Col> */}
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
