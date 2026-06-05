import Header from "./components/Layout/Header";
import {  Outlet } from "react-router-dom";
import SideBar from "./components/Layout/SideBar";
import { useSlimScroll } from "./assets/SlimScrollFunction";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Layout/Footer";

function App({user}) {
   useSlimScroll();
  // <Outlet />
 return (
  <>
    {user ? (
     <div className="d-flex body-main body-color" id="wrapper">
         {/* <!-- backdrop --> */}
         <div className="sidebar-backdrop"></div>
         {/* SiderBar */}
         <div className="sidebar-main">
            <SideBar />
         </div>
          {/* Page Content */}
          <div id="page-content-wrapper" className="position-relative">
             {/* Header */}
              <div className="bg-white shadow-sm px-3 py-2 mb-4 header m-auto position-fixed">
                   <Header />
                 </div>
              {/* Main Content */}
                 <Outlet />
              {/* footer */}
             <Footer/>
      
          </div>
     </div>
      ) :  (
      <div className="login-container">
        <Outlet />
      </div>
    )}
  </>

);
}

export default App;