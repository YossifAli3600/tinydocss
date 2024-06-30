import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home/Home";
import { Journey } from "../features/pages/Home/Journey/Journey";
import { Parent } from "../pages/Parent/Parent";

const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }, {
                path: "/parent",
                element: <Parent />
            }
        ]
    }
])
export default router;