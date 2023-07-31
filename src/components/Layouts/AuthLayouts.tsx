import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  type: "login" | "register"; // Menambahkan tipe untuk prop "type" yang hanya dapat bernilai "login" atau "register".
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => { // Menyatakan tipe dari AuthLayout sebagai React functional component dengan prop AuthLayoutProps.
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p> {/* Teks "Pleace" diganti menjadi "Please". */}
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login" ? "Don't have an account? " : "Already have an account? "}
          {type === "login" ? ( // Menggunakan ternary operator untuk kondisional jika "type" adalah "login".
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          ) : (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
