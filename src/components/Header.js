import { HEADER_LOGO } from "../utils/CDN";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/UseOnlineStatus";

const Header = () => {
    const [logoutbtn, setLogoutbtn] = useState("Login");
    const onlineStatus = UseOnlineStatus();
    return(
            <div className='header'>
                <div className='logo'>
                <Link to ="/"><img src= {HEADER_LOGO}/></Link>                

                    
                </div>
                <div className='nav'>
                   <ul className="no-underLine">
                    
                    <li><a href="/about">About</a></li>
                      {/* link is very powerfull component to link our routte/page instant of anchar tag */}
                    <li><Link to ="contact">Contact</Link></li>
                    <li><a href="/order">order</a></li>
                    <li>OnlineStatus {onlineStatus? "🟢" : "🔴"}</li>
                     <li>Cart</li>
                    <li><button className='btn' onClick={ () =>{
                        
                        if(logoutbtn === "Login"){
                            setLogoutbtn("Logout");
                            
                        }else{
                            setLogoutbtn("Login");
                        }
                        
                    }
                        
                    }>{logoutbtn}</button></li>
                    
                   </ul>

                </div>
            </div>

    )
}

export default Header;