import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import AppLayouts from "../layouts/AppLayouts";
import Collection from "../pages/Collection";
import Following from "../pages/Following";
import Trending from "../pages/Trending";
import Stores from "../pages/Stores";
import Shops from "../pages/Shops";
import Vendors from "../pages/Vendors";
import Video from '../pages/Video';
import ViewCart from "../components/Cart/ViewCart";
import Checkout from "../components/Cart/Checkout";
import Login from "../components/Auth/Login";
import ForgatePassword from "../components/Auth/ForgetPassword";
import Verification from "../components/Auth/verification";
import Registration from "../components/Auth/Registration";
import ProductDetails from "../components/Shop/ProductDetails";
import CategoryProduct from "../components/ShopTwo/CategoryProduct/CategoryProduct";
import Dashboard from "../components/UserAccount/Dashboard";
import MyAccount from "../components/UserAccount/MyAccount";
import Lives from '../pages/Lives';
import Streaming from '../pages/Streaming';
import Aboutus from '../components/footer_items/aboutus';
import Termsandcon from '../components/footer_items/Termsandcon';
import ReturnRefund from '../components/footer_items/ReturnRefund';
import Notfound from '../components/loading/Notfound';
import Coffee from '../components/loading/Coffee';
import PrivateRoute from './PrivateRoute';
import ProtectedRoute from './ProtectedRoute';
import Privacy from '../components/footer_items/Privacy';
import Sellerform from './../components/Sellerform/Sellerform';
import Invoice from './../pages/Invoice';
import Meeting from './../pages/Meeting';
import SellerAgreement from "../components/footer_items/SellerAgreement";
import DiscoverCampaign from './../pages/DiscoverCmpaign';
import Campaigns from "../pages/Campaigns";
import Live from "../components/Live/Live"
import Payments from "../components/Cart/Payments";
import Brand from "../pages/Brand";
import TradeLnc from "../components/loading/TradeLnc";
function Approutes() {
    return (
        <Routes>
            <Route
                element={
                    <AppLayouts>
                        <Outlet />
                    </AppLayouts>
                }
            >

                <Route path="/" element={<Trending />} />
                <Route path="/following" element={<Following />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/store" element={<Stores/>} />
                <Route path="/shop" element={<Shops/>} />
                <Route path="/vendors/videos/:uuid" element={<Vendors/>} />
                <Route path="/vendors/products/:uuid" element={<Vendors/>} />
                <Route path="/view-cart" element={<ViewCart />} />
                <Route path="/products/:slug" element={<ProductDetails />}/>
                <Route path="/categories/:name" element={<CategoryProduct /> } />
                <Route path="/videos/:slug" element={<Video/>} />
                <Route path="login" element={<PrivateRoute />}>
                    <Route path="/login" element={<Login />} /> 
                </Route>
                <Route path="forget-password" element={<PrivateRoute />}>
                    <Route path="/forget-password" element={<ForgatePassword/>} />
                </Route>
                <Route path="reset-password" element={<PrivateRoute />}>
                    <Route path="/reset-password" element={<Verification/>} />
                </Route>
                <Route path="registration" element={<PrivateRoute />}>
                    <Route path="/registration" element={<Registration />} /> 
                </Route>
                <Route path="checkout" element={<ProtectedRoute />}>
                    <Route path="/checkout" element={<Checkout />} /> 
                </Route>
                <Route path="payment" element={<ProtectedRoute />}>
                    <Route path="/payment" element={<Payments />} /> 
                </Route>
                <Route path="my-account" element={<ProtectedRoute />}>
                    <Route path="/my-account" element={<Dashboard />} />
                </Route>
                <Route path="order" element={<ProtectedRoute />}>
                    <Route path="/order/:orderCode" element={<Invoice />} />
                </Route>
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/lives" element={<Lives/>} />
                <Route path="/streaming" element={<Streaming/>} />
                <Route path="/about-us" element={<Aboutus/>} />
                <Route path="/terms-and-condition" element={<Termsandcon/>} />
                <Route path="/return-and-refund" element={<ReturnRefund/>} />
                <Route path="/partnership" element={<Coffee/>} />
                <Route path="*" element={<Notfound/>} />
                <Route path="/sellerform" element={<Sellerform/>} />
                <Route path ="/meeting" element={<Meeting/>}/>
                <Route path ="/seller-agreement" element={<SellerAgreement/>}/>
                <Route path ="/discover" element={<DiscoverCampaign/>}/>
                <Route path ="/discover/:slug" element={<Campaigns/>} />
                <Route path ="/live" element={<Live/>} />
                <Route path="/brand/:id" element={<Brand/>} />
                <Route path="/trade-license" element={<TradeLnc/>} />
            </Route>
        </Routes>
    )
}

export default Approutes;
