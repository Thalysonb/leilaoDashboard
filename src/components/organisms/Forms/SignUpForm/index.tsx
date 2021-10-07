import React, { FC } from "react";
import { Col, Container, Row } from "react-grid-system";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Button, Input, TextLink, Title } from "../../../atoms";
import "./styles.css";

type SignUpFormData = {
  fullName: string;
  email: string;
  birthday: string;
  cpfCnpj: string;
};

const defaultValues: SignUpFormData = {
  fullName: "",
  email: "",
  birthday: "",
  cpfCnpj: "",
};

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const SignUpForm: FC = () => {
  const history = useHistory();

  const { register, errors, handleSubmit, getValues } = useForm<SignUpFormData>(
    {
      defaultValues,
      mode: "onBlur",
    }
  );

  const onSubmit = () => {
    const formData = getValues();
    localStorage.setItem("userBaseData", JSON.stringify(formData));
    history.push("/signup/step2");
  };

  const goToLogin = () => {
    history.push("/");
  };

  const validateCpf = (cpf: string) => {
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let soma = 0,
      resto;
    for (var i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (var i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <Title text="Preencha os campos para prosseguir com o cadastro" />
        </Col>
      </Row>
      <Row>
        <Col xs={10} md={6} lg={4} className="ml-auto mr-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-8">
              <Input
                ref={register({ required: true })}
                name="fullName"
                type="text"
                placeholder="Nome completo"
                error={errors.fullName ? "Nome é obrigatório" : ""}
              />
            </Row>
            <Row className="mb-8">
              <Input
                ref={register({ required: true, pattern: emailRegex })}
                name="email"
                placeholder="Email"
                type="text"
                error={
                  errors.email?.type === "required"
                    ? "Email é obrigatório"
                    : errors.email?.type === "pattern"
                    ? "Email inválido"
                    : ""
                }
              />
            </Row>
            <Row className="mb-8">
              <Input
                ref={register({ required: true })}
                name="birthday"
                placeholder="Data de nascimento"
                type="text"
                error={
                  errors.birthday ? "Data de nascimento é obrigatória" : ""
                }
              />
            </Row>
            <Row className="mb-8">
              <Input
                ref={register({
                  required: true,
                  validate: (value) => validateCpf(value),
                })}
                name="cpfCnpj"
                placeholder="CPF"
                type="text"
                maxLength={11}
                error={
                  errors.cpfCnpj?.type === "required"
                    ? "CPF é obrigatório"
                    : errors.cpfCnpj?.type === "validate"
                    ? "CPF inválido"
                    : ""
                }
              />
            </Row>
            <Row className="mt-20">
              <Button type="primary" label="Próxima" />
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
    </Container>
  );
};

export default SignUpForm;
