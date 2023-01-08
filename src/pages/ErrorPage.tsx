import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as Record<string, any>;
  console.error(error);

  return (
    <div className="u-flex u-h-center u-f-column u-v-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
