import { PropsWithChildren, useEffect } from "react";
import { useSessionStorageState } from "../../hooks/useSessionStorageState";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [token] = useSessionStorageState("", "token");
  const navigate = useNavigate();

  console.log(token);
  useEffect(() => {
    if (!token) {
      navigate(routes.login);
    }
      
  }, [token, navigate]);

  return <>{children}</>;
};

export default AuthProvider;
