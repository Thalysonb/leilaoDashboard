import React, { FC } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Button, Input } from "../../../atoms";
import "./styles.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

type SignUpFormData = {
  fullName: string;
  email: string;
  birthDate: string;
  cpfCnpj: string;
};

const defaultValues: SignUpFormData  = {
  fullName: '',
  email: '',
  birthDate: '',
  cpfCnpj: '',
}

const SignUpForm: FC = () => {
  const { register, errors, handleSubmit, getValues } = useForm<SignUpFormData>({
    defaultValues,
    mode: "onBlur"
  });

  const signUpPath =
    "http://travelingbetapi-env.eba-2riiwc2y.us-east-1.elasticbeanstalk.com/api/o/customer";

  const onSubmit = () => {
    const formData = getValues();
    localStorage.setItem('userBaseData', JSON.stringify(formData));
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
                name="fullName"
                type='text'
                placeholder="Nome completo"
                error={errors.fullName ? "Nome é obrigatório" : ""}
              />
            </Row>
            <Row className="mb-8">
              <Input
                ref={register({ required: true })}
                name="email"
                placeholder="Email"
                type='text'
                error={errors.email ? "Email é obrigatório" : ""}
              />
            </Row>
            <Row className="mb-8">
              <Input
                ref={register({ required: true })}
                name="birthDate"
                placeholder="Data de nascimento"
                type='text'
                error={errors.birthDate ? "Data de nascimento é obrigatória" : ""}
              />
            </Row>
            <Row className="mb-8">
              <Input
                ref={register({ required: true })}
                name="cpfCnpj"
                placeholder="CPF"
                type='text'
                error={errors.cpfCnpj ? "CPF é obrigatório" : ""}
              />
            </Row>
            <Row>
              <Button type="primary" label="Próxima" />
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
