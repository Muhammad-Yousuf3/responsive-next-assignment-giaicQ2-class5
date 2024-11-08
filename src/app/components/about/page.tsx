import Image from "next/image";

function About(){
    return(
        <main>

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

        </main>
    )
}
export default About