import AuthService from "../../service/AuthService";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { SignRoutes } from "../SignRoutes";

export function BaseRoutes(){
  const isAuthenticated = AuthService.isAuthenticated();

  console.log("ta autenticado?");
  console.log(isAuthenticated);
  return isAuthenticated ? <AuthenticatedRoutes /> : <SignRoutes/>
  return <AuthenticatedRoutes />
}