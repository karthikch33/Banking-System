import React from 'react'
import { ToastContainer } from 'react-toastify';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <div className="col-12" style={{height:"10.5vh",width:"100%"}}>
        <Header />
    </div>
        <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />  
            <div className="col-12" style={{height:"78vh",width:"100%"}}>
        <Outlet/>
            </div>
            <div className="col-12" style={{height:"8vh",width:"100%"}}>
        <Footer/>
          </div>
    </>
  )
}

export default Layout