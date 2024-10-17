import Link from "next/link"

function Header(){
    return(
        <main className="w-screen max-w-full">
              <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            
            <section className="w-[100%] sm:bg-cyan-950 sm:h-[3vw] sm:flex sm:justify-between sm:items-center sm:text-opacity-100 text-white  w-350:text-opacity-0 w-350:hidden ">

            <p className=" hover:text-cyan-500 pl-[1vw]"> <i className="fa fa-phone"></i> Call : +01 123456789</p>
            <p className=" hover:text-cyan-500 "> <i className="fa fa-envelope"></i> Email: demo@gmail.com</p>
            <p className=" hover:text-cyan-500 pr-[1vw]"> <i className="fa fa-map-marker"></i> Location</p>
    
            </section>

            {/* NavBar */}
            <section className="flex justify-between items-center sm:h-[10vh] md:mt-[0vw]  w-350:-mt-[0vw] w-350:h-[20vw]">
                <h2 className="md:pl-[1vw] sm:text-[2.2vw] font-bold w-350:text-[8vw] w-350:pl-[2vw]">TruckIn</h2>

                <nav className="w-350:hidden sm:block">
                    <ul className="flex sm:gap-[4vw] pr-[2vw] ">
                    <li className="hover:text-cyan-500"><Link href={"/"}>Home</Link></li>
                <li className="hover:text-cyan-500"><Link href={"#services"}>Services</Link></li>
                <li className="hover:text-cyan-500"><Link href={"#about"}>About</Link></li>
                <li className="hover:text-cyan-500"><Link href={"#contact"}>Contact</Link></li>
                <li className="hover:text-cyan-500"><i className="fa fa-user"></i> <Link href={""}>LOGIN</Link></li>
                    </ul>
                </nav>
                <p className="hover:text-cyan-500 md:hidden sm:hidden w-350:block w-350:text-[7vw] w-350:pr-[2vw]"><i className="ri-menu-line"></i></p>
            </section>
            

        </main>
    )
}
export default Header