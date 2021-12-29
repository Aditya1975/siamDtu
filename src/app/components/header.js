import React, {useState} from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import {Link as Scroll} from 'react-scroll';
import {CgMenuRound} from "react-icons/cg";
import {CgCloseO} from "react-icons/cg";

import dtuLogo from '../assets/dtulogo.jpg';
import logo from '../assets/logo.png';

export const Header = () => {
    const [open, setOpen] = useState(false);

    const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

    const [isHomePage, setIsHomePage] = useState(true);

    const routes = [
        { title: "Home", path: "/", webPage:true, onHomePage: true},
        { title: "Vision", path:"goal", webPage:false, onHomePage: true},
        { title: "Mission", path:"mission", webPage:false, onHomePage: true},
        { title: "Events", path: "/events", webPage:true, onHomePage: false},
        { title: "Series", path: "/series", webPage:true, onHomePage: false},
        { title: "Team", path: "/team", webPage:true, onHomePage: false},
        { title: "Contact Us", path: "footer", webPage:false, onHomePage: true}
    ];

    const navType = isMobile ? "mobile-navbar" : "navbar";


    const handleClick = (route) => {
        setOpen(false);
        setIsHomePage(route.onHomePage);
    };

    
    const navigation =(navType) =>{
        return (
            <div className={navType} style={{backgroundColor: "white"}}>
                <nav>
                    <Link to="/">
                            <img className= "nav-brand" src={logo} style={{height: '50px'}} alt="SIAM-DTU ogo."/>
                    </Link>
                    <div>
                        {!isMobile || open? 
                            (<ul>
                                {routes.map((route, index) => (
                                    isHomePage? 
                                        <li key={index}>
                                            {route.webPage ?<Link to={route.path} onClick={() =>handleClick(route)}>{route.title}</Link>
                                            :<Scroll to={route.path} onClick={()=>handleClick(route)}>{route.title}</Scroll>}
                                        </li>
                                        :
                                        route.webPage?
                                            <li key={index}>
                                                {<Link to={route.path} onClick={() =>handleClick(route)}>{route.title}</Link>}
                                            </li>:null
                                ))}
                            </ul>)
                        : null}
                        
                        {isMobile ? 
                        open ? <CgCloseO className= "menu-icon" onClick={() => setOpen(false)}/> : <CgMenuRound className="menu-icon" onClick={() => setOpen(true)}/>
                        : null}
                    </div>
                    <Link to="/">
                            <img className= "nav-dtu-logo" src={dtuLogo} style={!isMobile ? {height: '60px'} : {height: '60px', left: '26%'} } alt="DTU Logo."/>
                    </Link>
                </nav>
            </div>
        )
    }
    
    return (
        <div>
            {navigation(navType)}
        </div>
    )
}
