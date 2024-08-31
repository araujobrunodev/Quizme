import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
    path: "/",
    errorElement: <h1>Page not found</h1>,
    children: [
        { 
            path: "/",
            element: <h1>main page</h1>
        }, 
        { 
            path: "/account",
            element: <h1>account page</h1>
        },
        { 
            path: "/makeaquiz",
            element: <h1>make a quiz page</h1>
        }
    ]
}])

export default router