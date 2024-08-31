import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages";

const router = createBrowserRouter([{
    path: "/",
    errorElement: <h1>Page not found</h1>,
    children: [
        { 
            path: "/",
            element: <MainLayout accountOrBackToHome={true} logo={true} searchBar={true} childrens={<p></p>}/>
        }, 
        { 
            path: "/account",
            element: <MainLayout accountOrBackToHome={false} logo={true} searchBar={false} childrens={<p></p>}/>
        },
        { 
            path: "/makeaquiz",
            element: <MainLayout accountOrBackToHome={false} logo={false} searchBar={false} childrens={<p></p>}/>
        }
    ]
}])

export default router