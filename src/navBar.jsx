import './App.css'
import { Link } from "react-router-dom";
import { BsSunFill  } from "react-icons/bs";
import { BsFillMoonFill  } from "react-icons/bs";
import { AiOutlineSearch  } from "react-icons/ai";
import { AiOutlinePlus  } from "react-icons/ai";
import { BsMessenger  } from "react-icons/bs";
import { AiFillBell  } from "react-icons/ai";
import { VscHome  } from "react-icons/vsc";
import {FiLogOut  } from "react-icons/fi";

import { AiOutlineBars  } from "react-icons/ai";
import { Button } from '@mui/material';
import { getAuth, signOut } from "firebase/auth";
function navBar(props){
  const logout = ()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
return(
<nav>
        <div className="nav-left">
            <img src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png" alt="Logo"/>
            <input type="text" placeholder="Search .."/>
        </div>

        <div className="nav-middle">

        <Link to="/Home" className="active">
            <VscHome className='homeicon'  />
            </Link>
            <Link to="/profile" >
            <svg
          viewBox="0 0 28 28"
          class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4"
          fill="currentColor"
          height="28"
          width="28"
        >
          <path d="M10.5 4.5c-2.272 0-2.75 1.768-2.75 3.25C7.75 9.542 8.983 11 10.5 11s2.75-1.458 2.75-3.25c0-1.482-.478-3.25-2.75-3.25zm0 8c-2.344 0-4.25-2.131-4.25-4.75C6.25 4.776 7.839 3 10.5 3s4.25 1.776 4.25 4.75c0 2.619-1.906 4.75-4.25 4.75zm9.5-6c-1.41 0-2.125.841-2.125 2.5 0 1.378.953 2.5 2.125 2.5 1.172 0 2.125-1.122 2.125-2.5 0-1.659-.715-2.5-2.125-2.5zm0 6.5c-1.999 0-3.625-1.794-3.625-4 0-2.467 1.389-4 3.625-4 2.236 0 3.625 1.533 3.625 4 0 2.206-1.626 4-3.625 4zm4.622 8a.887.887 0 00.878-.894c0-2.54-2.043-4.606-4.555-4.606h-1.86c-.643 0-1.265.148-1.844.413a6.226 6.226 0 011.76 4.336V21h5.621zm-7.122.562v-1.313a4.755 4.755 0 00-4.749-4.749H8.25A4.755 4.755 0 003.5 20.249v1.313c0 .518.421.938.937.938h12.125c.517 0 .938-.42.938-.938zM20.945 14C24.285 14 27 16.739 27 20.106a2.388 2.388 0 01-2.378 2.394h-5.81a2.44 2.44 0 01-2.25 1.5H4.437A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.25 14h4.501a6.2 6.2 0 013.218.902A5.932 5.932 0 0119.084 14h1.861z"></path>
        </svg>  
        </Link>

            <Link to="/vidoe">
            <svg
          viewBox="0 0 28 28"
          class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4"
          fill="currentColor"
          height="28"
          width="28"
        >
          <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path>
        </svg>
            </Link>

            <Link to="/group">
            <svg
          viewBox="0 0 28 28"
          class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4"
          fill="currentColor"
          height="28"
          width="28"
        >
          <path d="M17.5 23.75 21.75 23.75C22.164 23.75 22.5 23.414 22.5 23L22.5 14 22.531 14C22.364 13.917 22.206 13.815 22.061 13.694L21.66 13.359C21.567 13.283 21.433 13.283 21.34 13.36L21.176 13.497C20.591 13.983 19.855 14.25 19.095 14.25L18.869 14.25C18.114 14.25 17.382 13.987 16.8 13.506L16.616 13.354C16.523 13.278 16.39 13.278 16.298 13.354L16.113 13.507C15.53 13.987 14.798 14.25 14.044 14.25L13.907 14.25C13.162 14.25 12.439 13.994 11.861 13.525L11.645 13.35C11.552 13.275 11.419 13.276 11.328 13.352L11.155 13.497C10.57 13.984 9.834 14.25 9.074 14.25L8.896 14.25C8.143 14.25 7.414 13.989 6.832 13.511L6.638 13.351C6.545 13.275 6.413 13.275 6.32 13.351L5.849 13.739C5.726 13.84 5.592 13.928 5.452 14L5.5 14 5.5 23C5.5 23.414 5.836 23.75 6.25 23.75L10.5 23.75 10.5 17.5C10.5 16.81 11.06 16.25 11.75 16.25L16.25 16.25C16.94 16.25 17.5 16.81 17.5 17.5L17.5 23.75ZM3.673 8.75 24.327 8.75C24.3 8.66 24.271 8.571 24.238 8.483L23.087 5.355C22.823 4.688 22.178 4.25 21.461 4.25L6.54 4.25C5.822 4.25 5.177 4.688 4.919 5.338L3.762 8.483C3.729 8.571 3.7 8.66 3.673 8.75ZM24.5 10.25 3.5 10.25 3.5 12C3.5 12.414 3.836 12.75 4.25 12.75L4.421 12.75C4.595 12.75 4.763 12.69 4.897 12.58L5.368 12.193C6.013 11.662 6.945 11.662 7.59 12.193L7.784 12.352C8.097 12.609 8.49 12.75 8.896 12.75L9.074 12.75C9.483 12.75 9.88 12.607 10.194 12.345L10.368 12.2C11.01 11.665 11.941 11.659 12.589 12.185L12.805 12.359C13.117 12.612 13.506 12.75 13.907 12.75L14.044 12.75C14.45 12.75 14.844 12.608 15.158 12.35L15.343 12.197C15.989 11.663 16.924 11.663 17.571 12.197L17.755 12.35C18.068 12.608 18.462 12.75 18.869 12.75L19.095 12.75C19.504 12.75 19.901 12.606 20.216 12.344L20.38 12.208C21.028 11.666 21.972 11.666 22.62 12.207L23.022 12.542C23.183 12.676 23.387 12.75 23.598 12.75 24.097 12.75 24.5 12.347 24.5 11.85L24.5 10.25ZM24 14.217 24 23C24 24.243 22.993 25.25 21.75 25.25L6.25 25.25C5.007 25.25 4 24.243 4 23L4 14.236C2.875 14.112 2 13.158 2 12L2 9.951C2 9.272 2.12 8.6 2.354 7.964L3.518 4.802C4.01 3.563 5.207 2.75 6.54 2.75L21.461 2.75C22.793 2.75 23.99 3.563 24.488 4.819L25.646 7.964C25.88 8.6 26 9.272 26 9.951L26 11.85C26 13.039 25.135 14.026 24 14.217ZM16 23.75 16 17.75 12 17.75 12 23.75 16 23.75Z"></path>
        </svg>  
            </Link>

            <Link to="/page">
            <svg
          viewBox="0 0 28 28"
          class="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4"
          fill="currentColor"
          height="28"
          width="28"
        >
          <path d="M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z"></path>
        </svg>
            </Link>
        </div>

        <div className="nav-right">
        
       <a > <button type="button"
        className="toogleButton"
         onClick={props.toggleThemeMode}>
            {(props.mode === "light")
             ? <BsFillMoonFill />  : 
             <BsSunFill />}</button></a>
        
        
       
        
        
            <span className="profile"></span>

            <a to="/">
            <AiOutlinePlus />
            </a>

            <a to="/">
            <BsMessenger />
            </a>
            <a to="/">
            <AiFillBell />
            </a>
            <a to="/">
            <AiOutlineBars />
            </a>
            <Link to="/profile">
            
                        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/306786755_1202817790289152_518738169980312581_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGhdixRYXqpwfInQPFISuX6JYrz7428nSUlivPvjbydJTr03znpDJNKZOwteDQCzVK6M4gJhb1I13sdmEIXD2eo&_nc_ohc=Y3AQ1RETYSIAX9GOqp6&_nc_ht=scontent.fkhi20-1.fna&oh=00_AfC7NCY4TWlC1v882OeBjC0SfO8kifKYyXGprr6STtuuiw&oe=6365C500"
                        style={{height:'45px',
                        width:'45px',
                        borderRadius:'30px'

                        
                        }} alt="profile"/>
                    
            </Link >
          

            <Link onClick={logout}><FiLogOut/></Link>
        </div>
    </nav>
    ) ;
    
}

export default navBar;