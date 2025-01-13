import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCredentials } from "../componentss/organisms/login_detail/login_detail.types";
import { Environments } from "../environment";
import { routes } from "../router/routes";
import { useSessionStorageState } from "./useSessionStorageState";

export const useLoginUser = () => {

    const navigate = useNavigate();

    const [token, setToken] = useSessionStorageState("", "token");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (token) {
            navigate(routes.invoices, { replace: true });
        }
    }, [token, navigate]);

    const mutate = async (data: UserCredentials) => {
        setIsLoading(true);
        const response = await fetch(
            Environments.authLogin,
            {
                body: JSON.stringify(data),
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        setIsLoading(false);

        if (response.ok) {
            const { token } = await response.json();
            setToken(token);
            navigate(routes.invoices, { replace: true });
        }
    };

    return { mutate, isLoading };

}