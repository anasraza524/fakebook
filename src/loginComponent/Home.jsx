import React from 'react'
import { getAuth, signOut } from "firebase/auth";
const Home = () => {
  const logout = ()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }

  return (
    <div>home

      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Home