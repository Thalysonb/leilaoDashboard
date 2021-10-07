import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Button, Input } from "../../../atoms";
import "./styles.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

type SignUpFormData = {
  nickname: string;
  password: string;
  confirmPassword: string;
};

const defaultValues: SignUpFormData = {
  nickname: "",
  password: "",
  confirmPassword: "",
};

const SignUpFormStep2: FC = () => {
  const history = useHistory();

  const { register, errors, handleSubmit, getValues, clearErrors } =
    useForm<SignUpFormData>({
      defaultValues,
      mode: "onBlur",
    });

  const signUpPath =
    "http://travelingbetapi-env.eba-2riiwc2y.us-east-1.elasticbeanstalk.com/api/o/customer";

  const onSubmit = () => {
    const formData = getValues();
    const storageData = localStorage.getItem("userBaseData");
    const parsedStorageData = storageData ? JSON.parse(storageData) : null;
    const payload = {
      ...parsedStorageData,
      nickname: formData.nickname,
      account: {
        id: parsedStorageData.email,
        pass: formData.password,
        checkPass: formData.confirmPassword,
      },
    };
    axios
      .post(signUpPath, payload)
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

  const validatePassword = () => {
    const password = getValues().password;
    const confirmPassword = getValues().confirmPassword;
    if (password !== confirmPassword) {
      return false;
    }
    if (password === confirmPassword && !errors.confirmPassword) {
      clearErrors(["password", "confirmPassword"]);
      return true;
    }
  };

  const goToLogin = () => {
    history.push('/')
  }

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
                name="nickname"
                placeholder="Nome de usuário"
                type='text'
                error={errors.nickname ? "Nome é obrigatório" : ""}
              />
            </Row>
            <Row className="mb-8">
              <Input
                ref={register({
                  required: true,
                  validate: () => validatePassword(),
                })}
                name="password"
                placeholder="Senha"
                type='password'
                error={
                  errors.password?.type === "required"
                    ? "Senha é obrigatória"
                    : errors.password?.type === "validate"
                    ? "As senhas devem ser iguais"
                    : ""
                }
              />
            </Row>
            <Row className="mb-8">
              <Input
                ref={register({
                  required: true,
                  validate: () => validatePassword(),
                })}
                name="confirmPassword"
                placeholder="Confirmar senha"
                type='password'
                error={
                  errors.confirmPassword?.type === "required"
                    ? "Confirmação é obrigatória"
                    : errors.confirmPassword?.type === "validate"
                    ? "As senhas devem ser iguais"
                    : ""
                }
              />
            </Row>

            <Row
              style={{
                justifyContent: "center",
                marginTop: 30,
                marginBottom: 30,
              }}
            >
              <label className="label">
                Eu concordo com os termos e condições de uso
              </label>
            </Row>
            <Row>
              <Button type="primary" label="Concluir" />
            </Row>
            <Row style={{ justifyContent: "center", marginTop: 60 }}>
              <label className="label">
                Já tem cadastro? Faça
                &nbsp;
                <span className="text-underline cp" onClick={() => goToLogin()}>login aqui</span>
              </label>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpFormStep2;
