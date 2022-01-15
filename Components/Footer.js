import Image from "next/image";
import gmail from '../public/icons/gmail.png';
import facebook from '../public/icons/facebook.png';
import instagram from '../public/icons/instagram.png';
import twitter from '../public/icons/twitter.png';

const Footer = () => {
    return (
        <div className=" flex flex-col sm:flex-row bg-violet-800 text-white mt-16 sm:mt-32 bg-opacity-75">
            <div className=" flex flex-col sm:w-2/3 p-6 sm:px-12 sm:py-8">
               <div className=" text-4xl font-semibold text-orange-300 mb-4">For Collaboration</div>
               <div>
                <a href="tel:+917080268945" className=" text-xl">
                    <span className=" text-cyan-500 mr-2">Tel :</span> +91 7080268945<br className=" sm:hidden"/>
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=+917080268945&text=Hi,%20I%20would%20like%20to%20Collabrate%20with%20you.." className=" text-green-400">
                    <i className="fab fa-whatsapp text-2xl font-bold sm:ml-5"></i> Whatsapp</a>
                </a>
               </div>
               <div className=" mt-4 sm:mt-0">
                <a href="mailto:anandkumarsingh1783@gmail.com?subject=Hey,%20Anand%20Kumar%20Singh" className=" text-xl">
                    <span className=" text-red-500 mr-2">Email: </span>anandkumarsingh1783@gmail.com
                </a>
               </div>
               <div className=" flex mt-4">
                  <a className=" pr-4" href="https://www.facebook.com/profile.php?id=100005278422691" target="_blank" rel="noopener noreferrer" title="Facebook"><Image src={facebook}  alt="socialMediaLogo" width={40} height={40}/></a>
                  <a className=" px-4" href="https://instagram.com/anandk.singhaks?utm_medium=copy_link" target="_blank" rel="noopener noreferrer" title="Instagram"><Image src={instagram}  alt="socialMediaLogo" width={40} height={40}/></a>
                  <a className=" px-4" href="#" target="_blank" rel="noopener noreferrer" title="Twitter"><Image src={twitter}  alt="socialMediaLogo" width={40} height={40}/></a>
                  <a className=" px-4" href="mailto:anandkumarsingh1783@gmail.com?subject=Hey,%20Anand%20Kumar%20Singh" target="_blank" rel="noopener noreferrer" title="Gmail"><Image src={gmail}  alt="socialMediaLogo" width={40} height={40}/></a>
               </div>
            </div>
            <div className=" hidden sm:block w-px bg-white h-40 my-auto"></div>
            <div className=" sm:w-1/3 text-3xl p-10 sm:p-12">
                <div className=" sm:pr-10 text-justify">
                <div className=" mb-5">All the information given above are 100% correct.</div>
                <div className=" text-right">Anand &#xa9; 2022</div>
               </div>
            </div>
         </div>
    )
}

export default Footer
