import React from 'react'
import App from '../App'
import Nav from '../Pages/Nav'
import Footer from '../Pages/Footer'

const MainLayout = () => {
  return (
    <>
    <div className="grid xl:grid-cols-8 grid-cols-1 md:grid-cols-1">
      <div className="col-span-1">
         
      </div>
      <div className="col-span-6">
      
      <Nav/>

        <App/>
        <Footer/>
         
      </div>
      <div className="col-span-1">
        
      </div>
    </div>
  </>
  )
}

export default MainLayout