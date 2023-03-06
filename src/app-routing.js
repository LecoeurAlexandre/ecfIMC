import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import FormIMC from "./routes/form/FormIMC";
import DisplayIMC from "./routes/DisplayIMC";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/form",
                element: <FormIMC />
            },
            {
                path: "/displayimc",
                element: <DisplayIMC />
            }
        ]
    }
])

export default router