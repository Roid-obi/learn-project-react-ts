import FormRegister from "../components/Fragments/FromRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister></FormRegister>
    </AuthLayout>
  );
};

export default RegisterPage;
