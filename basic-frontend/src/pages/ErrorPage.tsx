import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { getHTTPStatusName } from "../config/constants/httpStatus";

function ErrorPage() {
    let errorTitle: string = "Error!";
    let errorMessage: string = "An unknown error has occured";
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        errorTitle = error.status.toString();
        errorMessage = getHTTPStatusName(error.status);
    } else if (error instanceof Error) {
        errorTitle = error.name;
        errorMessage = error.message;
    }
    return (
        <div>
            <h1>{errorTitle}</h1>
            <p>{errorMessage}</p>

            <button>
                <Link to="/">Return to Home</Link>
            </button>
        </div>
    );
}

export default ErrorPage;
