import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            name: authUser.displayName,
            email: authUser.email,
          })
        );
        console.log(authUser);
      }
      dispatch(setLoading(false));
      setIsLoading(false);
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);

  if (isLoading) {
  
    return <div className="text-5xl text-center">Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {user ? (
            <Route path="/" element={<Dashboard />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
