const About = () => {
    return (
        <div className=" font-montserrat">
            <div className=" sm:w-2/3 p-10 mx-auto" id="aboutme">
                <div className=" text-4xl text-center font-bold">About Me</div>
                <div className=" text-base my-2 font-light text-center">My Introduction</div>
                <div className=" text-justify font-medium mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, beatae, libero aspernatur voluptatem possimus ducimus amet quia cupiditate ut laboriosam enim esse distinctio, necessitatibus pariatur inventore blanditiis! Nihil omnis hic quas sapiente, optio deserunt dicta non maiores enim, at dolorem. Laboriosam omnis, ad quisquam deserunt ducimus dolorem harum. Eum, optio qui sed beatae eveniet enim ab culpa nobis deserunt reiciendis sapiente adipisci odit rerum accusamus nesciunt sit modi nulla.
                </div>
                <div className=" mt-10">
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1vztwNB2_LgU4zwWwM4xxsswYLrJLpBlR/view?usp=sharing" className=" bg-violet-500 w-40 p-3 text-white text-center font-semibold rounded-lg">Download CV<i class="fas fa-download ml-2 "></i></a>
                </div>
            </div>
            <div className=" sm:w-2/3 mx-auto p-10" id="skills">
                <div className=" text-4xl text-center font-bold">Skills</div>
                <div className=" text-base my-2 font-light text-center">My professional level</div>
                <div className=" flex flex-col sm:flex-row justify-around text-2xl text-gray-500 mt-4 mx-auto">
                    <ul className=" text-center leading-10">
                        <li>Litigation</li>
                        <li>Client Advocacy</li>
                        <li>Law Knowledge</li>
                    </ul>
                    <ul className=" text-center leading-10">
                        <li>Mediation</li>
                        <li>Trial Preparation</li>
                        <li>Legal Research</li>
                    </ul>
                    <ul className=" text-center leading-10">
                        <li>Settlement</li>
                        <li>Documentation</li>
                        <li>Legal Procedure</li>
                    </ul>
                </div>
            </div>
            <div className=" sm:w-2/3 py-10 mx-auto" id="">
                <div className=" text-4xl text-center font-bold">Qualifications</div>
                <div className=" text-base my-2 font-light text-center">My personal journey</div>
                <div className=" flex w-80 mx-auto mt-6">
                    <div className=" flex flex-col">
                        <div className=" w-36 h-24">Bachelor of Commerce(B.Com)<br/>Rajasthan, India</div>
                        <div className=" w-36 h-24"></div>
                        <div className=" w-36 h-24">Bachelor of Commerce(B.Com)<br/>Rajasthan, India</div>
                        <div className=" w-36 h-24"></div>
                    </div>
                    <div className=" flex flex-col items-center w-8">
                        <div className=" w-4 h-4 rounded-full bg-violet-500"></div>
                        <div className= " w-0.5 h-20 bg-violet-500"></div>
                        <div className=" w-4 h-4 rounded-full bg-violet-500"></div>
                        <div className= " w-0.5 h-20 bg-violet-500"></div>
                        <div className=" w-4 h-4 rounded-full bg-violet-500"></div>
                        <div className= " w-0.5 h-20 bg-violet-500"></div>
                        <div className=" w-4 h-4 rounded-full bg-violet-500"></div>
                    </div>
                    <div className=" flex flex-col">
                        <div className=" w-36 h-24"></div>
                        <div className=" w-36 h-24">Bachelor of Commerce(B.Com)<br/>Rajasthan, India</div>
                        <div className=" w-36 h-24"></div>
                        <div className=" w-36 h-24">Bachelor of Commerce(B.Com)<br/>Rajasthan, India</div>
                    </div>
                </div>
            </div>
            <div className=" sm:w-2/3 p-10 mx-auto" id="services">
                <div className=" text-4xl text-center font-bold">Services</div>
                <div className=" text-base my-2 font-light text-center">What I offer</div>
                <div className=" flex flex-col sm:flex-row items-center sm:justify-between mx-auto mt-6">
                    <div className=" flex flex-col justify-around items-center w-52 h-52 shadow-2xl bg-gray-50 rounded-lg p-6 text-center text-xl font-semibold mb-5 sm:mb-0">
                        <i class="fas fa-balance-scale text-violet-500 text-5xl"></i>
                        <div>Recovery<br/>Cases</div>
                    </div>
                    <div className=" flex flex-col justify-around items-center w-52 h-52 shadow-2xl bg-gray-50 rounded-lg p-6 text-center text-xl font-semibold mb-5 sm:mb-0">
                        <i class="fas fa-house-user text-violet-500 text-5xl"></i>
                        <div>Property<br/>Dispute</div>
                    </div>
                    <div className=" flex flex-col justify-around items-center w-52 h-52 shadow-2xl bg-gray-50 rounded-lg p-6 text-center text-xl font-semibold mb-5 sm:mb-0">
                        <i class="fas fa-hand-holding-heart text-violet-500 text-5xl"></i>
                        <div>Matrimonial<br/>Cases</div>
                    </div>
                    <div className=" flex flex-col justify-around items-center w-52 h-52 shadow-2xl bg-gray-50 rounded-lg p-6 text-center text-xl font-semibold mb-5 sm:mb-0">
                        <i class="fas fa-dungeon text-violet-500 text-5xl"></i>
                        <div>Criminal<br/>Cases</div>
                    </div>
                </div>
            </div>
            <div className=" sm:w-2/3 py-10 mx-auto" id="interests">
                <div className=" text-4xl text-center font-bold">Interests</div>
                <div className=" text-base my-2 font-light text-center">My favourite hobby is writing</div>
                <div className=" flex justify-around mx-auto mt-6">
                    <div className=" w-2/5 h-40 bg-violet-500 rounded-lg"></div>
                    <div className=" w-2/5 h-40 bg-sky-500 rounded-lg"></div>
                </div>
            </div>
            <div className=" sm:w-2/3 p-10 mx-auto" id="contactme">
                <div className=" text-4xl text-center font-bold">Contact me</div>
                <div className=" text-base my-2 font-light text-center">Get in touch</div>
                <div className=" flex flex-col sm:flex-row items-center sm:justify-between mx-auto mt-6">
                    <div className=" flex flex-col justify-between items-center w-48 h-48 p-6 shadow-xl rounded-lg text-center">
                        <i className="fas fa-phone-square-alt text-violet-500 text-5xl mb-5"></i>
                        <div className=" text-xl font-semibold">Call me</div>
                        <div className=" text-gray-500 text-sm">7080268945</div>
                    </div>
                    <div className=" flex flex-col justify-between items-center w-48 h-48 p-6 shadow-xl rounded-lg text-center">
                        <i class="fas fa-envelope text-violet-500 text-5xl mb-5"></i>
                        <div className=" text-xl font-semibold">Email</div>
                        <div className=" text-gray-500 text-sm">anandkumarsingh<br/>1783@gmail.com</div>
                    </div>
                    <div className=" flex flex-col justify-between items-center w-48 h-48 p-6 shadow-xl rounded-lg text-center">
                        <i class="fas fa-address-card text-violet-500 text-5xl mb-5"></i>
                        <div className=" text-xl font-semibold">Address</div>
                        <div className=" text-gray-500 text-sm">Siristi, Shivdasha, (Chaubeypur), Varanasi, India</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
