import axios from "axios";
import React, { FC, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Button, Input, TextLink, Title } from "../../../atoms";
import { NotificationModal } from "../../../molecules";
import "./styles.css";

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
  const [showModal, setShowModal] = useState(false);

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
      .then(() => {
        setShowModal(true);
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
    history.push("/");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <Title text="Pra terminar, defina um nome de usuário e uma senha" />
        </Col>
      </Row>
      <Row>
        <Col xs={10} md={6} lg={4} className="ml-auto mr-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-8 text-center">
              <Input
                ref={register({ required: true })}
                name="nickname"
                placeholder="Nome de usuário"
                type="text"
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
                type="password"
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
                type="password"
                error={
                  errors.confirmPassword?.type === "required"
                    ? "Confirmação é obrigatória"
                    : errors.confirmPassword?.type === "validate"
                    ? "As senhas devem ser iguais"
                    : ""
                }
              />
            </Row>

            <Row className="justify-content-center mt-30 mb-30">
              <label className="label-default">
                Eu concordo com os termos e condições de uso
              </label>
            </Row>
            <Row>
              <Button type="primary" label="Concluir" />
            </Row>
            <Row className="justify-content-center mt-60">
              <TextLink
                text={"Já tem cadastro? Faça"}
                link={"login aqui"}
                onLinkClick={() => goToLogin()}
              />
            </Row>
          </form>
        </Col>
      </Row>
      <NotificationModal visible={showModal}/>
    </Container>
  );
};

export default SignUpFormStep2;
