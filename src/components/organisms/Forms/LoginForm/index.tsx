import axios from "axios";
import React, { FC } from "react";
import { Col, Container, Row } from "react-grid-system";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import chave from "../../../../assets/icon/chave.svg";
import userIcon from "../../../../assets/icon/user.svg";
import { Button, Input, TextLink, Title } from "../../../atoms";
import "./styles.css";

type LoginForm = {
  username: string;
  password: string;
};

const LoginForm: FC = () => {
  const history = useHistory();
  const { register, errors, handleSubmit, getValues } = useForm<LoginForm>({
    mode: "onBlur",
    defaultValues: { username: "", password: "" },
  });

  const loginPath =
    "http://travelingbetapi-env.eba-2riiwc2y.us-east-1.elasticbeanstalk.com/api/o/customer-login/login";

  const onSubmit = () => {
    const formData = getValues();
    const payload = {
      id: formData.username,
      password: formData.password,
    };
    axios
      .post(loginPath, payload)
      .then((response: any) => {
        localStorage.setItem('userToken', response.data.token)
        history.push("/dashboard");
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
  };

  const goToSignUp = () => {
    history.push("/signup/step1");
  };

  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <Title text="Olá! Seja bem-vindo ao EasyBind4U" />
      </Row>
      <Row style={{ justifyContent: "center" }} className="mb50">
        <label className="label-default">Entre com seu nome de usuário e senha.</label>
      </Row>
      <Row>
        <Col xs={10}  md={6} lg={4} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-8">
              <Input
                ref={register({ required: true })}
                name="username"
                type="text"
                placeholder="Usuário"
                icon={userIcon}
                error={errors.username ? "Usuário é obrigatório" : ""}
              />
            </Row>
            <Row className="mb-8">
              <Input
                ref={register({ required: true })}
                name="password"
                type="password"
                placeholder="Senha"
                icon={chave}
                error={errors.password ? "Senha é obrigatório" : ""}
              />
            </Row>
            <Row style={{ justifyContent: "end" }}>
              <TextLink
                link={"Esqueceu a senha?"}
              />
            </Row>
            <Row style={{ marginTop: 50 }}>
              <Button type="primary" label="Entrar" />
            </Row>
            <Row style={{ justifyContent: "center", marginTop: 60 }}>
              <TextLink
                text={"Não tem uma conta?"}
                link={"Cadastre-se"}
                onLinkClick={() => goToSignUp()}
              />
            </Row>
            <Row style={{ justifyContent: "center", marginTop: 30, position: 'relative' }}>
              <div className="left-line"></div>
              <label className='label-default'>OU</label>
              <div className="right-line"></div>
            </Row>
            <Row style={{ justifyContent: "center", marginTop: 30 }}>
              <Col md={8}>
                <Button type="google" label="Entrar com Google" disabled/>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", marginTop: 30 }}>
              <Col md={8}>
                <Button type="facebook" label="Entrar com Facebook" disabled />
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
