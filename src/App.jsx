
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

import { loginUser, setLoading} from "./features/userSlice";

import Dashboard from "./pages/Dashboard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(loginUser({
          uid: authUser.uid,
          name: authUser.displayName,
          email: authUser.email,
        }));
        
        console.log(authUser);
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("no authUser");
      }
    })
  }, [])
  
  const user = useSelector((state) => state.data.user.user);
  

 

  return (
    <>
      <BrowserRouter>
        <Routes> 
         {user ? <Route path="/" element={<Dashboard />} /> : <Route path="/" element={<Login />} />} 
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
