import { useRouteError } from "react-router-dom";

export default function ErrorPage(): JSX.Element {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <div >
        <h1>Error</h1>
        <p>
          Oops, wrong station! Seems like an error occurred. You may wanna try
          again.
        </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
