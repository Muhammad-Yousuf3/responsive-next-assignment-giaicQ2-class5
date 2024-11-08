import Link from "next/link";

function Footer(){

    return(

        <main>

         {/* Footer */}
         <section className="bg-cyan-900 w-full h-auto grid md:grid-cols-4 sm:grid-cols-2 w-350:grid-cols-1 mt-20 justify-items-center">
                
                {/* Address */}
                <section className="text-white mt-7">
                    <h4 className="font-bold text-xl w-350:text-center sm:text-left">Address</h4>
            <p className=" hover:text-cyan-500 pt-3"> <i className="fa fa-phone"></i> Call : +01 123456789</p>
            <p className=" hover:text-cyan-500 pt-2"> <i className="fa fa-envelope"></i> Email: demo@gmail.com</p>
            <p className=" hover:text-cyan-500 pt-2"> <i className="fa fa-map-marker"></i> Location</p>
    
            {/* Social Media */}
            <section className="flex gap-3 text-white text-2xl mt-6 ">
            <i className="fa fa-facebook hover:text-cyan-500"></i>
            <i className="fa fa-instagram hover:text-cyan-500"></i>
            <i className="fa fa-twitter hover:text-cyan-500"></i>
            <i className="fa fa-linkedin hover:text-cyan-500"></i>
            </section>
                </section>

                {/* Info Section*/}
                <section className="text-white mt-7 w-72 sm:ml-0">
                <h4 className="font-bold text-xl w-350:text-center ">Info</h4>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elitiure officia 
                expedita excepturi odit beatae, laudantium suscipit </p>
                </section>

                {/* Links Section */}
                <section className="text-white mt-7 sm:-ml-24  md:ml-0">
                <h4 className="font-bold text-xl w-350:text-center sm:text-left">Links</h4>

                <ul className="pt-3">
                <li className="hover:text-cyan-500 "><Link href={"/"}>Home</Link></li>
                <li className="hover:text-cyan-500 pt-3"><Link href={"/components/service"}>Services</Link></li>
                <li className="hover:text-cyan-500 pt-3"><Link href={"/components/about"}>About</Link></li>
                <li className="hover:text-cyan-500 pt-3"><Link href={"/components/contact"}>Contact</Link></li>
                </ul>   
                </section>

                
                {/* Subscribe Section */}
                <section className="text-white mt-7 sm:-ml-8 md:ml-0 " >
                <h4 className="font-bold text-xl w-350:text-center sm:text-left">Subscribe</h4>
                <input type="email" placeholder="Enter Email" className="bg-transparent placeholder:text-white mt-2 border-b-2 border-white"/>
                        <br />
                <button className="bg-cyan-500 hover:bg-cyan-700 w-44 h-12 mt-5">Subscribe</button>
                </section>

            </section>

        </main>
        
    )
}

export default Footer