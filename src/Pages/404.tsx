import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError(); // Panggil useRouteError sebagai fungsi untuk mendapatkan nilai error.

    return (
        <div className="flex justify-center min-h-screen items-center flex-col gap-y-5">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="text-xl">Sorry, an unexpected error has occured</p>
            <p>{error?.statusText || error?.message}💀</p> {/* Gunakan optional chaining (?) untuk mengakses statusText dan message */}
        </div>
    );
}

export default ErrorPage;
