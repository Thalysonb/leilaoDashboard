import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { toast } from "react-toastify";
import { Button, Input, Title } from "../../atoms";
import "./styles.css";

const Dashboard: FC = () => {
  const [user, setUser] = useState<any>(undefined);

  const customerPath =
    "http://travelingbetapi-env.eba-2riiwc2y.us-east-1.elasticbeanstalk.com/api/p/customer";

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    axios
      .get(customerPath, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response: any) => {
        setUser(response.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, []);

  const getCPFFormatted = (cpf: string) => {
    if (!cpf) {
      return "";
    }
    const visibleValue = cpf.substring(0, 3);
    return visibleValue.padEnd(11, "*");
  };

  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <Title text="Meu cadastro" />
      </Row>
      <Row>
        <Col md={6} lg={4} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Row className="mb-8">
            <Col md={12} className="text-left">
              <label className="label-default">Nome Completo</label>
            </Col>
            <Input type="text" value={user?.fullName} />
          </Row>
          <Row className="mb-8">
            <Col md={12} className="text-left">
              <label className="label-default">E-mail</label>
            </Col>
            <Input type="text" value={user?.email} />
          </Row>
          <Row className="mb-8">
            <Col md={12} className="text-left">
              <label className="label-default">Data de nascimento</label>
            </Col>
            <Input type="text" value={user?.birthday} />
          </Row>
          <Row className="mb-8">
            <Col md={12} className="text-left">
              <label className="label-default">CPF</label>
            </Col>
            <Input type="text" value={getCPFFormatted(user?.cpfCnpj)} />
          </Row>
          <Row className="mb-8">
            <Col md={12} className="text-left">
              <label className="label-default">Senha</label>
            </Col>
            <Input type="text" value={"**********"} />
          </Row>
          <Row style={{ marginTop: 50 }}>
            <Button type="primary" label="Salvar alterações" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
