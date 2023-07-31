import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormLogin: React.ComponentType<any> = () => {
  return (
    <form action="">
      <InputForm label="Email" type="email" placeholder="example@email.com" name="email"></InputForm>
      <InputForm label="Password" type="password" placeholder="*****" name="password"></InputForm>
      <Button className="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
