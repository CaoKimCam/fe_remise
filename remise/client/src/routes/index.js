import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProfilePage from "../pages/UserPages/ProfilePage/ProfilePage";
import ResetPassword from "../pages/login/ResetPassword";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";
import CompareProduct from "../pages/CompareProduct";
import Tesiapi from  "../api/testapi"
import testPostApi from "../api/testpostapi"

export const routes=[
    {
        path:'/',
        page: HomePage,
        isShowHeader:true,
    },
    {
        path:'/product',
        page: ProductPage,
        isShowHeader:true,
    },
    {
        path:'/profile',
        page: ProfilePage,
        isShowHeader:true,
    },
    {
        path:'/reset-password',
        page: ResetPassword,
        isShowHeader:false,
    },
    {
        path:'/signin',
        page: SignIn,
        isShowHeader:false,
    },
    {
        path:'/signup',
        page: SignUp,
        isShowHeader:false,
    },
    {
        path:'/compare',
        page: CompareProduct,
        isShowHeader:false,
    },
    {
        path:'/testapi',
        page: Tesiapi,
        isShowHeader:false,
    },
    {
        path:'/testpostapi',
        page: testPostApi,
        isShowHeader:false,
    },
    {
        path:'*',
        page: NotFoundPage
    }
]
