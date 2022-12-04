import React,{Fragment,useState,useEffect} from 'react'
import DesktopNav from '../components/Navigation/DesktopNav';
import Mobilenav from '../components/Navigation/Mobilenav';
import ScrollToTop from "react-scroll-to-top";
import { CustomScrollToTop } from "../components/Atomics/ScrollToTop/ScrollToTop";
import Linkmenu from '../components/Navigation/Linkmenu';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import VendorMenu from '../components/Navigation/VendorMenu';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { showCart } from '../features/CartSlice';
import { showFilter } from '../features/AppSlice';

function AppLayouts({children}) {
    const location = useLocation();
    // link menu, vendor menu and footer manage states
    const [linkHide,setLinkHide] = useState(false);
    const [vendorMenuHide,setVendorMenuHide] = useState(false);
    const [footerHide,setFooterHide] = useState(false);
    const [vendorUuid,setVendorUuid] = useState(null);
    // width and scroll manage state 
    const [width, setWidth] = useState(window.innerWidth);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    const windowWidth = () => {
        const position = window.innerWidth;
        setWidth(position);
    };

    const vendorId = useCallback(() =>{
        const {pathname} = location;
        const lastChar = pathname.charAt(pathname.length-1);
        let url = pathname.slice(1);
        if(lastChar === '/'){
            url = url.slice(0, -1);
            url = url.split('/');
        }else{
            url = url.split('/');
        }
        setVendorUuid(url[2]);
    },[location]);
    const [showpronav,setPronavshow] = useState(false);
    const pronavshow = useCallback(() =>{
        const {pathname} = location;
        const lastChar = pathname.charAt(pathname.length-1);
        let url = pathname.slice(1);
        if(lastChar === '/'){
            url = url.slice(0, -1);
            url = url.split('/');
        }else{
            url = url.split('/');
        }
        if(url[0] === 'products'){
            setPronavshow(true);
        }else{
            setPronavshow(false);
        }
    },[location]);

    // hide cart and search bar
    const dispatch = useDispatch();

    const hideHandler = () =>{
        dispatch(showCart(false));
        dispatch(showFilter(false));
    }

    useEffect(() => {
        const {pathname} = location;
        
        if(pathname === '/' || pathname.includes('following') || pathname.includes('discover')){
            setLinkHide(false);
            setVendorMenuHide(true);
        }else if (pathname.includes('vendors')){
            setLinkHide(true);
            setVendorMenuHide(false);
            vendorId();
        }else{
            setLinkHide(true);
            setVendorMenuHide(true);
        }

        if(pathname.includes('view-cart')){
            setFooterHide(true);
        }else{
            setFooterHide(false);
        }
        pronavshow();
 
        window.addEventListener('resize', windowWidth);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', windowWidth);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [vendorId,location]);

    return (
        <div>
            <DesktopNav/>
            {linkHide ? null : <Linkmenu />}   
            {!vendorMenuHide && <VendorMenu uuid={vendorUuid}/>}  
            <div onClick={hideHandler}>{children}</div>
            {width< 600 && !showpronav ? <Mobilenav/> : null}
            <ScrollToTop
                smooth
                component={<CustomScrollToTop />}
                className="scroll-to-top outline-0"
                color="white"
            />
            {!footerHide && <Footer/>}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default AppLayouts
