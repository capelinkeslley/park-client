import { Route, Routes } from "react-router-dom";
import { CreateUserPage } from "../../pages/CreateUserPage";
import { LoginPage } from "../../pages/LoginPage";

export function SignRoutes(){
  return(
    <Routes>
      <Route path="/" element={<CreateUserPage/>}/>
      <Route path="/signup" element={<CreateUserPage/>}/>
      <Route path="*" element={<CreateUserPage/>}/>
    </Routes>
  );
}