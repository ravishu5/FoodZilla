import { useState } from "react";
import Logo from '../assets/img/e3797f623665fbd5863fb1f78e849f30.png';
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () =>{
    return (
        <a href='/'>
            <img className='h-20 px-10' alt='foodzilla' src={Logo} />
        </a>
    );
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const isOnline = useOnline();

    return (
        <div className="flex h-20 justify-between bg-green-100 shadow-lg">
            <Title/>
            <div>
                <ul className="py-7 flex space-x-4 mr-10">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
            <h1 className="mr-10 py-7">Status : {isOnline? '✅' : '🛑'}</h1>
            {
                isLoggedIn? <button className='mr-8' onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button className='mr-8' onClick={()=>setIsLoggedIn(true)}>Login</button>
            }
        </div>
    );
};

export default Header;