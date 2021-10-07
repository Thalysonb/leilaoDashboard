import axios from "axios";
import React, { FC } from "react";
import { Col, Container, Row } from "react-grid-system";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import chave from "../../../../assets/icon/chave.svg";
import userIcon from "../../../../assets/icon/user.svg";
import { Button, Input } from "../../../atoms";
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
      .then((response) => {
        console.log(response);
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
      <Row className="mb50">
        <label>Entre com seu nome de usuário e senha.</label>
      </Row>
      <Row>
        <Col md={6} lg={4} style={{ marginLeft: "auto", marginRight: "auto" }}>
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
              <label className="text-underline label cp">
                Esqueceu a senha?
              </label>
            </Row>
            <Row style={{ marginTop: 100 }}>
              <Button type="primary" label="Entrar" />
            </Row>
            <Row style={{ justifyContent: "center", marginTop: 30 }}>
              <label className="label">
                Não tem uma conta? &nbsp;
                <span
                  className="text-underline cp"
                  onClick={() => goToSignUp()}
                >
                  Cadastre-se
                </span>
              </label>
            </Row>
            <Row style={{ justifyContent: "center", marginTop: 30 }}>
              <label>OU</label>
            </Row>
            <Row style={{ justifyContent: "center", marginTop: 30 }}>
              <Col md={8}>
                <Button type="google" label="Entrar com Google" />
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", marginTop: 30 }}>
              <Col md={8}>
                <Button type="facebook" label="Entrar com Facebook" />
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
