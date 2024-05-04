import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import Shop from "./pages/Shop"
import Transportation from "./pages/Transportation"
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, TRANSPORTATION_ROUTE } from "./utils/consts"



export const authRoutes = [
    {
       path: ADMIN_ROUTE,
       Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
     },
     {
        path: REGISTRATION_ROUTE,
        Component: Auth
     },
     {
        path: LOGIN_ROUTE,
        Component: Auth
     },
     {
        path: TRANSPORTATION_ROUTE + '/:id',
        Component: Transportation
     },
     
     
      
]