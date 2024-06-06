import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Pages/Layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element:<HomePage/>
            },
        ],
    }
])