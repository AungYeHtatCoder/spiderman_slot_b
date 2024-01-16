import React from 'react'
import { Link } from 'react-router-dom'

const HeroSideBar = () => {
    const sidebar=[
        {icon:<i className="fa-regular fa-envelope"></i>,title:"Messages"},
        {icon:<i className="fa-solid fa-wallet"></i>,title:"Wallet"},
        {icon:<i className="fa-solid fa-bars"></i>,title:"Menu"}
    ]
  return (
    <div className='d-none d-lg-flex flex-column heroSidebar shadow'>
     {
        sidebar.map((item)=>{
            return <Link className='text-decoration-none text-white' to={item.title === "Wallet" ? '/wallet' : ""} key={item.title}>
                {item.icon}
                <p >{item.title}</p>
            </Link>
        })
     }
    </div>
  )
}

export default HeroSideBar
