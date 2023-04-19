import { ChangeEvent, useEffect, useState } from "react";
import { IUserLogin } from "../commons/interfaces";
import AuthService from "../service/AuthService";

export function LoginPage(){
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  
  const [successLogin, setSuccessLogin] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target

    setForm( (previousForm) => {
      return {
        ...previousForm,
        [name]: value,
      }
    })
  }

  const onClickLogin = () => {
    const userLogin: IUserLogin = {
      email: form.email,
      password: form.password,
    }

    AuthService.login(userLogin).then((response) => {
      setSuccessLogin(true);
      setFailedLogin(false);
      setShowAlert(true);
      localStorage.setItem('token', JSON.stringify(response.data.token));
      window.location.reload();
    }).catch((responseError) => {
      setSuccessLogin(false);
      setFailedLogin(true);
      setShowAlert(true);
      console.log(responseError.message)
    }).finally(() => {

    });
  }

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-md-9"></div>
        { failedLogin && showAlert && <div className="col-md-3 position top-0 end-0 vh-25 alert alert-danger"> Erro ao realizar o login </div>}
        { successLogin && showAlert && <div className="col-md-3 position top-0 end-0 vh-25 alert alert-success"> Login realizado com sucesso </div>} 
      </div>
      <h1> Login</h1>
      <div className="border rounded">
        <div className="p-3">
          <div className="col-12 mb-3">
            <label>Email</label>
            <input 
              className="form-control"
              type="text"
              placeholder="Email"
              name="email"
              onChange={onChange}
              value={form.email}
            />
          </div>

          <div className="col-12 mb-3">
            <label>Senha</label>
            <input 
              className="form-control"
              type="password"
              placeholder="Senha"
              name="password"
              onChange={onChange}
              value={form.password}
            />
          </div>
          <div className="text-center">
            <button 
              onClick={onClickLogin}
              className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}