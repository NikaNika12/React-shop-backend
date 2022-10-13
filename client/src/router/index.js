import About from "../pages/About";
import Users from "../pages/Users";
import ArtPage from "../pages/ArtPage";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import UserItemPage from "../pages/UserItemPage";
import Login from "../pages/Login";
import Gallery from "../pages/Gallery";


export const privateRoutes = [
    {path: '/admin', element: <Admin/>},
    {path: '/basket', element: <Basket/>},
    {path: '/login', element: <Login/>},
]

export const publicRoutes = [
    {path: '/about', element: <About/>},
    {path: '/users', element: <Users/>},
    {path: '/users/:id', element: <UserItemPage/>},
    
    {path: '/registration', element: <Login/>},
    {path: '/gallery', element: <Gallery/>},
    {path: '/artpage/:id', element: <ArtPage/>},
]