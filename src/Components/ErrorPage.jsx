import { Link, useRouteError } from "react-router-dom";
import { CiFaceSmile } from "react-icons/ci";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-8xl font-bold text-red-600 p-5">Oops!</h1>
      <p className="text-center text-2xl font-bold text-red-600 p-5">Sorry, an unexpected error has occurred.</p>
      <p className="text-center p-10">
        <i>{error.statusText || error.message}</i>
      </p>
      <p className="text-center text-green-800 "><Link to='/'>Go to Home page < CiFaceSmile className="inline ms-1"/></Link></p>
    </div>
  );
}