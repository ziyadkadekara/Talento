import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <Login/>,
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

const Layout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

export default App;
