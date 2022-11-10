import NavBar from './navBar'
import PostLoader from './component/profile/PostLoader'
 import Rightpannel from './rightpannel'
import Middlepannel from './middlepannel'
 import Leftpannel from './leftpannel'
 import Home from './component/home/'
import Profile from './component/profile'
import Page from './component/page'
import Vidoe from './component/vidoe'
import Gruop from './component/group'
import Login from './loginComponent/login'
// import Signup from './component/signup'
import From from './loginComponent/from'
import Nav from './loginComponent/navBar'
import  { useState,useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  Navigate,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";


 function App() {
  
  const [themeMode, setThemeMode] = useState("dark")

  const [isLogin, setisLogin] = useState(false)
  useEffect(() => {
    const auth = getAuth();
  const Unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('user',user)
      setisLogin(true)
      // ...
    } else {
      // User is signed out
      // ...
      setisLogin(false)
    }
  });
  


  // const auth = getAuth();
  // const user = auth.currentUser;
  
  // if (user) {
  //   // User is signed in, see docs for a list of available properties
  //   // https://firebase.google.com/docs/reference/js/firebase.User
  //   // ...
  //   setisLogin(false)
  // } else {
  //   // No user is signed in.
  //   setisLogin(true)
  // }



   return()=>{
    console.log('cleanUp function')
   Unsubscribe()
 }
   
  }, [])
 
  const toggleThemeMode = () => {
    if (themeMode === "dark") {
    setThemeMode("light")
    }
    else{
    setThemeMode("dark")
    }
 
  }
 
  return (
   
   

      <div 
      style={{}}
       className={` ${themeMode==="dark"?"dark":"light"}`}>
      
{(isLogin)?
  <NavBar toggleThemeMode={toggleThemeMode} mode={themeMode}/>
  :
  <Nav/>
}

    

    {(isLogin)?
 <div className='container'>
 {/* <div><Rightpannel/></div> */}


<Routes>
      {/* <Route index element={<Home/>} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="profile" element={<Profile/>} />
      <Route path="page" element={<Page/>} />
      <Route path="vidoe" element={<Vidoe/>} />
      <Route path="gruop" element={<Gruop/>} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
    <div><Leftpannel/></div>
</div>

  :
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="From" element={<From/>} />
    <Route path="*" element={<Navigate to="/" replace={true} />} />    
          </Routes> 
 



    }
  
   
    </div>
    
  
   
  );
}
export default App;