import FormLogin from "../components/Fragments/FromLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin/>
        </AuthLayout>
    );
};

export default LoginPage;