import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormRegister: React.ComponentType<any> = () => {
  return (
    <form action="">
      <InputForm label="Fullname" type="text" placeholder="insert your name here..." name="fullname"></InputForm>
      <InputForm label="Email" type="email" placeholder="example@email.com" name="email"></InputForm>
      <InputForm label="Password" type="password" placeholder="*****" name="password"></InputForm>
      <InputForm label="Confirm Password" type="password" placeholder="*****" name="confirmpassword"></InputForm>
      <Button className="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
