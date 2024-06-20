import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Pages/Layout/Layout";
import QuemPage from "./Pages/Quem Somos/QuemPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element:<HomePage/>
            },
            {
                path: '/QuemSomos',
                element:<QuemPage/>
            },
        ],
    }
])