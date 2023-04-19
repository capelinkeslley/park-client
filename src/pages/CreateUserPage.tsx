import axios from "axios";
import { ChangeEvent, useState } from "react";
import { IUserSignUp } from "../commons/interfaces";
import AuthService from "../service/AuthService";


export function CreateUserPage(){

  const [form, setForm] = useState({
    name: "",
    email: "",
    document: "",
    phone: "",
    password: "",
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target

    setForm( (previousForm) => {
      return {
        ...previousForm,
        [name]: value

      }
    })
  }

  const onClickSignup = () => {
    const userSignUp: IUserSignUp = {
      name: form.name,
        email: form.email,
        phone: form.phone,
        document: form.document,
        password: form.password,
    };

    AuthService.signup(userSignUp).then((response) => {
      console.log(response.data)
    }).catch((responseError) => {
      console.log(responseError.data);
    }).finally(() => {

    });;
  }

  return (
    <div className="container p-5">
      <h1> Create User</h1>
      <div className="border rounded">
        <div className="p-3">
        <div className="col-12 mb-3">
          <label>Informe seu nome</label>
          <input 
            className="form-control"
            type="text"
            placeholder="Informe seu nome"
            name="name"
            onChange={onChange}
            value={form.name}
          />
        </div>

        <div className="col-12 mb-3">
          <label>Informe seu e-mail</label>
          <input 
            className="form-control"
            type="text"
            placeholder="Informe seu e-mail"
            name="email"
            onChange={onChange}
            value={form.email}
          />
        </div>

        <div className="col-12 mb-3">
          <label>Informe seu CPF</label>
          <input 
            className="form-control"
            type="text"
            placeholder="Informe seu CPF"
            name="document"
            onChange={onChange}
            value={form.document}
          />
        </div>

        <div className="col-12 mb-3">
          <label>Informe seu telefone</label>
          <input 
            className="form-control"
            type="text"
            placeholder="Informe seu telefone"
            name="phone"
            onChange={onChange}
            value={form.phone}
          />
        </div>

        <div className="col-12 mb-3">
          <label>Informe sua senha</label>
          <input 
            className="form-control"
            type="password"
            placeholder="Informe sua senha"
            name="password"
            onChange={onChange}
            value={form.password}
          />
        </div>
        <div className="text-center">
          <button 
            onClick={onClickSignup}
            className="btn btn-primary">
            Cadastrar
          </button>
      </div>
        </div>
      </div>
    </div>
  );
}