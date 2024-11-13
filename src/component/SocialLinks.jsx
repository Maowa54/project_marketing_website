import {
    
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
  } from "react-icons/fa";
const SocialLinks = () => {
  return (
    <div>
       <div className="flex justify-between">
                <a
                  href="https://www.facebook.com/attireidyllbd/"
                  aria-label="Facebook"
                  className="flex items-center justify-center size-8 md:size-9 rounded-full hover:bg-white hover:text-blue-800 bg-[#6f52e4] text-white transition duration-300 ease-in-out"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://whatsapp.com"
                  className="flex items-center justify-center size-8 md:size-9 rounded-full hover:bg-white hover:text-blue-800 bg-[#6f52e4] text-white transition duration-300 ease-in-out"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/attire_idyll/channel/"
                  aria-label="Instagram"
                  className="flex items-center justify-center size-8 md:size-9 rounded-full hover:bg-white hover:text-blue-800 bg-[#6f52e4] text-white transition duration-300 ease-in-out"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center size-8 md:size-9 rounded-full hover:bg-white hover:text-blue-800 bg-[#6f52e4] text-white transition duration-300 ease-in-out"
                >
                  <FaLinkedinIn />
                </a>
              </div>
    </div>
  )
}

export default SocialLinks
