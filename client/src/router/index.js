import About from "../pages/About";
import ArtPage from "../pages/ArtPage";
import Admin from "../pages/Admin";
import Auth from "../pages/Auth";
import Gallery from "../pages/Gallery";


export const privateRoutes = [
    {path: '/admin', element: <Admin/>},
]

export const publicRoutes = [
    {path: '/about', element: <About/>},
    {path: '/login', element: <Auth/>},
    {path: '/registration', element: <Auth/>},
    {path: '/gallery', element: <Gallery/>},
    {path: '/artpage/:id', element: <ArtPage/>},
]