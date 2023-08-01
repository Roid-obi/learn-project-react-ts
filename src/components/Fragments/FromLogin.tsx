import InputForm from "../Elements/input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const FormLogin: React.ComponentType<any> = () => {
  return (
    <form action="">
      <InputForm label="Email" type="email" placeholder="example@email.com" name="email"></InputForm>
      <InputForm label="Password" type="password" placeholder="*****" name="password"></InputForm>
      <Link to="/">
        <Button className="w-full">Login</Button>
      </Link>
    </form>
  );
};

export default FormLogin;
