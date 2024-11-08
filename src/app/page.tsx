import Image from "next/image"

function Mainpage(){
    return(
        <main className="w-screen max-w-full scroll-smooth">
            {/* Image */}
            <section className="relative">
            <Image src={"/slider-bg.jpg"} alt={"Truck"} width={"500"} height={"100"} id="Home" className="w-[100%] md:h-auto w-350:h-[63vh]"></Image>
                
            <section className="bg-black opacity-80 absolute inset-0"></section>

                {/* Image Section Text and Header */}
                <section className="md:w-1/2 absolute inset-0 text-white md:mt-24 md:ml-28 w-350:mt-[8vh] w-350:ml-[4vw] w-350:w-[80%]">
                    <h1 className="md:text-4xl lg:text-5xl font-bold w-350:text-3xl">WE PROVIDE BEST TRANSPORT SERVICE</h1>
                    <p className="text-justify md:pt-5 md:text-sm w-350:text-lg w-350:pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla id, suscipit sint harum, Lorem ipsum dolor sit amet dicta voluptate dolor sit amet consectetur adipisicing fugiat voluptatem dolore doloribus, obcaecati provident veniam quis minus!</p>

                    {/* Button */}
                    <button className="bg-cyan-500 md:w-48 md:h-12 md:mt-[2vw] hover:bg-cyan-900 w-350:w-[40vw] w-350:h-[5.5vh] w-350:mt-[5vw]">Get A Quote</button>
                </section>
            </section>


            {/* Service Section */}
            
                <h2 className="font-bold md:text-[3vw] md:mt-[5vw] md:ml-[5.5vw] w-350:mt-10 w-350:text-[8vw] w-350:ml-5">Our <span className="text-cyan-500">Services</span></h2>
                <p className="md:ml-[5.5vw] w-350:ml-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                
                
                <section id="services" className="flex flex-wrap md:justify-evenly md:gap-10 md:ml-3 ">

                    {/* Aeroplane Section */}
                    <section className="bg-gray-200 sm:w-[90vh] md:w-[90vh] rounded-xl md:h-44 w-350:h-64 w-350:pl-5 w-350:pr-5 w-350:ml-4 w-350:mr-5 w-350:w-[50vh] w-350:mt-10">
                        {/* Image Section */}
                        <section className="flex md:flex-row md:gap-0 w-350:flex-col w-350:gap-3 md:ml-5 md:pt-5">
                            <Image src={"/s1.png"} alt="" height={"1"} width={"80"} className="md:mt-1 w-350:mt-5"></Image>
                            <h3 className="font-bold md:text-2xl md:pl-[2vw] w-350:text-3xl">AIR TRANSPORT</h3>
                        </section>
                        {/* Text Section */}
                        <section>
                        <p className="md:ml-[9.2vw] md:-mt-8 text-justify w-350:mt-2">fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                        <button className="md:ml-[9.2vw] md:mt-2 hover:text-cyan-500 w-350:mt-2">Read More</button>
                        </section>
                       
                    </section>

                    
                    {/* Ship Section */}
                    <section className="bg-gray-200 sm:w-[90vh] md:w-[90vh] rounded-xl md:h-44 w-350:h-64 w-350:pl-5 w-350:pr-5 w-350:ml-4 w-350:mr-5 w-350:w-[50vh] w-350:mt-10">
                        {/* Image Section */}
                        <section className="flex md:flex-row md:gap-0 w-350:flex-col w-350:gap-3 md:ml-5 md:pt-5">
                            <Image src={"/s2.png"} alt="" height={"1"} width={"80"} className="md:mt-1 w-350:mt-5"></Image>
                            <h3 className="font-bold md:text-2xl md:pl-[1.8vw] w-350:text-3xl">CARGO TRANSPORT</h3>
                        </section>
                        {/* Text Section */}
                        <section>
                        <p className="md:ml-[9.2vw] md:mt-1 text-justify w-350:mt-2">fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                        <button className="md:ml-[9.2vw] md:mt-2 hover:text-cyan-500 w-350:mt-2">Read More</button>
                        </section>
                       
                    </section>


                   {/* TRUCK Section */}
                   <section className="bg-gray-200 sm:w-[90vh] md:w-[90vh] rounded-xl md:h-44 w-350:h-64 w-350:pl-5 w-350:pr-5 w-350:ml-4 w-350:mr-5 w-350:w-[50vh] w-350:mt-10">
                        {/* Image Section */}
                        <section className="flex md:flex-row md:gap-0 w-350:flex-col w-350:gap-3 md:ml-5 md:pt-5">
                            <Image src={"/s3.png"} alt="" height={"1"} width={"80"} className="md:mt-1 w-350:mt-5"></Image>
                            <h3 className="font-bold md:text-2xl md:pl-[1.8vw] w-350:text-3xl">TRUCK TRANSPORT</h3>
                        </section>
                        {/* Text Section */}
                        <section>
                        <p className="md:ml-[9.2vw] md:mt-1 text-justify w-350:mt-2">fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                        <button className="md:ml-[9.2vw] md:mt-3 hover:text-cyan-500 w-350:mt-3">Read More</button>
                        </section>
                       
                    </section>


                    {/* TRAIN Section */}
                    <section className="bg-gray-200 sm:w-[90vh] md:w-[90vh] rounded-xl md:h-44 w-350:h-64 w-350:pl-5 w-350:pr-5 w-350:ml-4 w-350:mr-5 w-350:w-[50vh] w-350:mt-10">
                        {/* Image Section */}
                        <section className="flex md:flex-row md:gap-x-6 w-350:flex-col w-350:gap-3 md:ml-5 md:pt-5">
                            <Image src={"/s4.png"} alt="" height={"1"} width={"40"} className="md:mt-1 md:ml-3 w-350:mt-5"></Image>
                            <h3 className="font-bold md:text-2xl md:pl-[2vw] w-350:text-3xl">TRAIN TRANSPORT</h3>
                        </section>
                        {/* Text Section */}
                        <section>
                        <p className="md:ml-[9.2vw] md:-mt-8 text-justify w-350:mt-2">fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                        <button className="md:ml-[9.2vw] md:mt-3 hover:text-cyan-500 w-350:mt-3">Read More</button>
                        </section>
                       
                    </section>        

                </section>


            <section className="flex w-350:flex-col md:flex-row md:gap-28">

                {/* ABOUT SECTION */}
                <section id="about" className="md:w-[45%] md:mt-10">
            
            <h3 className="font-bold md:text-[3vw] w-350:text-[10vw] ml-[5.5vw] mt-16 text-cyan-500">About <span className="text-black">Us</span></h3>

            <p className="ml-[5.5vw] text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words 
            which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there anything embarrassing hidden in the middle of text. All</p>
            
            <button className="bg-cyan-500 md:w-48 md:text-lg w-350:w-32 md:h-12 w-350:h-9 w-350:text-sm ml-[5.5vw] mt-5 text-white hover:bg-cyan-900 ">Read More</button>    
            
            </section>

            {/* Image Section */}
            <section className="w-350:ml-3 md:mt-16 w-350:mt-10">

            <Image src={"/about-img.jpg"} alt={"About"} width={"500"} height={"0"} className=" w-350:w-[70vh] md:w-[90vh] md:mt-3 w-350:mt-3 w-350:ml-5 md:pr-5 w-350:pr-5"></Image>
                
        
            </section>

            </section>

            
            {/* Track Section */}
            <section className="relative mt-24">

            <Image src={"/track-bg.jpg"} alt={"Track"} width={"500"} height={"1"} className="w-full md:h-[400px] w-350:h-[550px]"></Image>
               <section className="absolute inset-0 bg-gray-700 opacity-70"></section> 

                {/* Track text */}
                <section className="text-white md:ml-[6vw] absolute inset-0 md:w-[550px] w-350:w-full w-350:ml-5 w-350:pr-5 text-justify mt-[100px] ">
                    <h3 className="font-bold text-4xl ">Track Your Shipment</h3>
                    <p className="pt-5 w-350:pr-5">Iste reprehenderit maiores facilis saepe cumque molestias. Labore iusto excepturi, laborum aliquid pariatur veritatis autem, mollitia sint nesciunt hic error porro. Deserunt officia unde repellat beatae ipsum sed. Aperiam tempora consectetur voluptas magnam maxime asperiores quas similique repudiandae, veritatis reiciendis harum fuga atque.</p>
                
                     {/* INPUT AND BUTTON SECTION */}
                <section className="pt-5">
                    <input type="text" placeholder="Enter Your Tracking Number" className="md:w-[28vw] w-350:w-[90%] h-10 placeholder:pl-2"/>
                    <button className="bg-cyan-500 md:w-[10.7vw] md:mt-0 h-10 w-350:w-[35vw] w-350:mt-3 hover:bg-cyan-900">TRACK</button>
                </section>    
                </section>
                
            </section>


            {/* Client Section */}
            <h3 className="text-4xl font-bold ml-[5.5vw] mt-10">What Our <span className="text-cyan-500">Client</span> Says</h3>
            
            <section className="flex md:flex-row md:gap-x-10 w-350:flex-col mt-5 " >
                <section  className="border-2 md:w-[30vw] w-350:w-[85%] text-justify px-5 py-5 md:ml-[5.5vw] w-350:ml-10"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti veritatis debitis, perferendis aperiam vel eos nihil facilis aliquam, dignissimos et quasi fugit architecto quisquam voluptatem. Repellendus accusantium nobis repellat sint.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </section>
                

                <section className="border-2 md:w-[30vw] text-justify px-5 py-5 md:ml-[5.5vw] w-350:hidden md:block md:opacity-100 w-350:opacity-0"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti veritatis debitis, perferendis aperiam vel eos nihil facilis aliquam, dignissimos et quasi fugit architecto quisquam voluptatem. Repellendus accusantium nobis repellat sint.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </section>

                <section className="flex md:flex-col md:gap-y-5 w-350:flex-row w-350:gap-x-5 justify-center  ml-8">
                <p className="bg-cyan-500 h-12 w-12 text-xl pt-2 text-center hover:bg-cyan-900 hover:text-white"><i className="ri-arrow-left-line"></i></p>
                <p className="bg-cyan-500 h-12 w-12 text-xl pt-2 text-center hover:bg-cyan-900 hover:text-white"><i className="ri-arrow-right-line"></i></p>
                </section>

            </section>
            <section className="flex">
            
            <section className="flex md:ml-[5.5vw] md:mt-5 w-350:ml-10 w-350:-mt-8">
                    {/* Client 1 Image */}
            <Image src={"/client-1.png"} alt={"Client 1"} height={"0"} width={"70"}></Image>
            <p className="pt-5 pl-3 w-350:opacity-0 md:opacity-100">Client 1</p>
            </section>

            {/* Client 2 Image */}
            <section className="flex md:ml-[28.5vw] pt-5 w-350:hidden md:flex md:opacity-100 w-350:opacity-0 ">
            <Image src={"/client-2.png"} alt={"Client 2"} height={"0"} width={"70"}></Image>
            <p className="pt-5 pl-3 ">Client 2</p>
            </section>
            </section>
            
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
export default Mainpage