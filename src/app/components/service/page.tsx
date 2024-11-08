import Image from "next/image";

function Service(){
    return(

        <main>

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

        </main>

    )
}

export default Service