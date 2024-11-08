import Image from "next/image";

function Contact(){

    return(

        <main>

          {/* Contact Section */}
          <h3 className="text-4xl font-bold ml-[5.5vw] mt-16"><span className="text-cyan-500 pr-2">Contact</span>Us</h3>
            <section id="contact" className="flex md:flex-row w-350:flex-col md:gap-24 w-350:gap-16">
                <section className="flex flex-col gap-7 ml-[5.5vw] mt-5">
                    <input type="text" placeholder="Name" className="md:w-[33vw] h-10 shadow-md shadow-gray-700 pl-2"/>
                    <input type="number" placeholder="Phone Number" className="md:w-[33vw] h-10 shadow-md shadow-gray-700 pl-2"/>
                    <input type="email" placeholder="Email" className="md:w-[33vw] h-10 shadow-md shadow-gray-700 pl-2"/>
                    <input type="text" placeholder="Message" className="md:w-[33vw] h-28 shadow-md shadow-gray-700 pl-2"/>
                    <button className="bg-cyan-500 w-40 h-12 font-bold text-white pt-1 rounded-lg hover:bg-cyan-900">SEND</button>
                </section>
                
                    {/* IMAGE */}
                <Image src={"/map.png"} alt={"Map"} width={"500"} height={"0"} className="w-350:w-full md:w-[48vw] sm:h-[58vh] md:h-[65vh] ml-3 mr-3"></Image>
                
            </section>

        </main>

    )

}

export default Contact