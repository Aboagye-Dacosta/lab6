import { useForm } from "react-hook-form";
import { UserCredentials } from "./login_detail.types";
import Container from "../../atoms/container/Container.component";
import InputLabel from "../../atoms/input_label/InputLabel.component";
import Button from "../../atoms/button/Button.component";
import Headline from "../../atoms/head_line/Headline.component";

import styles from "./login_detail_styles.module.css";
import { useLoginUser } from "../../../hooks/useLoginUser";


const LoginDetail: React.FC = () => {
    const { isLoading, mutate } = useLoginUser()
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>();
    
  const handleFormSubmit = (data: UserCredentials) => {
    console.log(data);
    mutate(data)
  };
    
  return (
    <div className={styles.login_detail}>
      <Container>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className={styles.login_form}
        >
          <div className={styles.logo}>
            <img src="/assets/logo.svg" alt="" width="100" />
          </div>
          <Headline as="h2">Login</Headline>

          <InputLabel
            id="username"
            label="Your Email"
            error={errors.username?.message}
            input={
              <input
                type="text"
                id="username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Please enter your email",
                  },
                })}
              />
            }
          />
          <InputLabel
            label="Password"
            input={
              <input
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
              />
            }
          />
          <Button type="submit" disabled={isLoading}>
            {" "}
            {isLoading ? "Logging you in ..." : "login"}
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default LoginDetail;
