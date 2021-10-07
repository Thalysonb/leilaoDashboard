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
      <Row className="w-100">
        <Col md={8} className="ml-auto mr-auto">
          <Row className="footer-content">
            <Col md={2}>
              <Button type="logo" label="logo" />
            </Col>
            <Col md={2}>
              <ul>
                {linkList.map((link, index) => (
                  <li key={index} className="footer-link">
                    {link}
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={2}>
              <ul>
                {linkList2.map((link, index) => (
                  <li key={index} className="footer-link">
                    {link}
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={2}>
              <ul>
                {linkList3.map((link, index) => (
                  <li key={index} className="footer-link">
                    {link}
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={3}>
              <Col md={12} className="text-left">
                <label className="footer-link">Acompanhe:</label>
              </Col>
              <img className="mr-5" src={instaIcon} />
              <img className="mr-5" src={twIcon} />
              <img className="mr-5" src={fbIcon} />
              <img className="mr-5" src={ytIcon} />
            </Col>
            <Col md={12} className="text-left mt-10">
              <label className="copyright">
                Copyright © 2021 site.com.br LTDA
              </label>
            </Col>
            <Col md={12} className="text-left mb-20">
              <label className="copyright">
                CNPJ n.º 00.000.000/0000-00 / Av. Lorem ipsum dolor sit amet, nº
                000, Austin, Nova Iguaçu/RJ - CEP 00000-000 - empresa do grupo
                4U.
              </label>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
