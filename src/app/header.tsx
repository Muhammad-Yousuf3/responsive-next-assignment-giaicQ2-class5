"use client"
import Link from "next/link"
import { useState } from "react"

function Header(){
    
    const [navOpen,navClose]= useState(false)

    const navBtn=()=>navClose(!navOpen);
    
    return(
        <main className="w-screen max-w-full sm:border-b-2">
              <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            
            <section className="w-[100%] sm:bg-cyan-950 sm:h-[3vw] sm:flex sm:justify-between sm:items-center sm:text-opacity-100 text-white  w-350:text-opacity-0 w-350:hidden ">

            <p className=" hover:text-cyan-500 pl-[1vw]"> <i className="fa fa-phone"></i> Call : +01 123456789</p>
            <p className=" hover:text-cyan-500 "> <i className="fa fa-envelope"></i> Email: demo@gmail.com</p>
            <p className=" hover:text-cyan-500 pr-[1vw]"> <i className="fa fa-map-marker"></i> Location</p>
    
            </section>

            {/* NavBar */}
            <section className={` flex justify-between items-center sm:h-[10vh] md:mt-[0vw] -mt-[0vw] h-[20vw] ${navOpen? 'h-[40vw]': 'h-[20vw]'}`}>
                <h2 className="md:pl-[1vw] sm:text-[2.2vw] font-bold w-350:text-[8vw] w-350:pl-[2vw]">TruckIn</h2>

                <button onClick={navBtn} className="hover:text-cyan-500 sm:hidden block text-[7vw] pr-[2vw]"><i className="ri-menu-line"></i></button>
                
                <nav className={`bg-cyan-500 h-[15%] w-[50%] sm:h-auto sm:w-auto sm:bg-white fixed top-0 right-0 ${navOpen? 'translate-x-0' : 'translate-x-full'} sm:static  sm:mr-96`}>
                    <ul className="flex flex-col sm:flex-row -mt-5 sm:mt-0 sm:gap-4 pr-[2vw] text-white sm:text-black pl-2">
                        <button onClick={navBtn} className="ml-36 mt-10 sm:hidden ">X</button>
                    <li className="sm:hover:text-cyan-500"><Link href={"/"}>Home</Link></li>
                <li className="sm:hover:text-cyan-500"><Link href={"/components/service"}>Services</Link></li>
                <li className="sm:hover:text-cyan-500"><Link href={"/components/about"}>About</Link></li>
                <li className="sm:hover:text-cyan-500"><Link href={"/components/contact"}>Contact</Link></li>
                <li className="sm:hover:text-cyan-500"><i className="fa fa-user"></i> <Link href={""}>LOGIN</Link></li>
                    </ul>
                </nav>
               
            </section>
            

        </main>
    )
}
export default Header