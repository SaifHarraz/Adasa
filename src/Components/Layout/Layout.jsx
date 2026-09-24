import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from './Navbar';
import ScrollToTop from './../Ui/ScrollToTop';

export default function Layout() {
  return (
    <>
    <div className="min-h-screen flex flex-col ">
      <ScrollToTop />
     <Navbar/>
     <main className="grow">
     <Outlet />
      </main>
     <Footer/> 
    </div>         
    </>
  )
}
