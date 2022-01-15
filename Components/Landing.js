import Image from "next/image";
import Typewriter from 'typewriter-effect';
import {Link} from 'react-scroll';

const Landing = () => {
    return (
        <div className=" font-montserrat my-16 sm:my-32" id="header">
            <div className=" flex flex-col sm:flex-row sm:w-2/3 mx-auto">
                <div className=" sm:w-1/2">
                    <div className=" p-2 shadow-md rounded-2xl w-fit bg-gray-300 mx-auto"><Image className=" rounded-2xl" src="https://imgur.com/5H2MOzB.png" width={300} height={300} alt="image"/></div>
                </div>
                <div className=" flex flex-col p-10 sm:p-0 sm:w-1/2 justify-center">
                    <div className="typingEffect text-2xl sm:text-4xl font-semibold">
                    <Typewriter
                    onInit={(typewriter)=>{
                        typewriter.typeString("Hello, I'm<br>Anand Kumar Singh.")
                        .start();
                    }}
                    />
                    </div>
                    <div className=" text-base sm:text-xl font-semibold text-gray-600 my-4">Advocate</div>
                    <div className=" text-base sm:text-lg text-gray-600 sm:w-96 text-justify">High Level experience in Litigation, Legal Research and Client Management, producing quality work.</div>
                    <Link to="footer" smooth={true} duration={1000}><button className=" w-40 mt-6 h-12 text-white font-semibold rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 align-middle">Contact me<i className="fas fa-angle-double-right ml-3 text-lg align-middle"></i></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Landing
