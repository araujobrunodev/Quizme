import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/mainPage";
import MainLayout from "./pages";
import MakeQuiz from "./pages/makeQuiz";

const router = createBrowserRouter([{
    path: "/",
    errorElement: <h1>Page not found</h1>,
    children: [
        { 
            path: "/",
            element: <MainLayout accountOrBackToHome={true} logo={true} searchBar={true} childrens={<MainPage/>}/>
        }, 
        { 
            path: "/account",
            element: <MainLayout accountOrBackToHome={false} logo={true} searchBar={false} childrens={<p></p>}/>
        },
        { 
            path: "/makeaquiz",
            element: <MainLayout accountOrBackToHome={false} logo={false} searchBar={false} childrens={<MakeQuiz />}/>
        }
    ]
}])

export default router