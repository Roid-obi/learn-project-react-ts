import { useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();
  const error = location.state && location.state.error;

  return (
    <div className="flex justify-center min-h-screen items-center flex-col gap-y-5">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred</p>
      <p>{error?.statusText || error?.message} 💀</p>
    </div>
  );
};

export default ErrorPage;
