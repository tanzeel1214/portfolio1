import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (<>linkedIn<FaLinkedin size={30} /> </>),
            href: "https://linkedin.com",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (<>gitHub<FaGithub size={30} /> </>),
            href: "https://github.com"
        },
        {
            id: 3,
            child: (<>mail <HiOutlineMail size={30}/> </>),
            href: "mailto: tanzeelabbaskhan7@gmail.com",
        },
        {
            id: 4,
            child: (<>Resume<BsFillPersonLinesFill size={30} /> </>),
            href: "/resume.pdf",
            download: true,
            style: "rounded-br-md"
        }
    ]
    return (
        <div className="hidden lg:flex flex-col fixed top-[35%] left-0">

            <ul>
                {links.map(({id, child, href, download, style}) => {
                  return  <li 
                    key={id} 
                    className={
                        "flex items-center justify-between w-40 h-14 bg-gray-500 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 "
                         + " " 
                         + style}
                     >
                        <a className="flex items-center justify-between w-full text-white" 
                        href={href}
                         download={download}
                         rel="noreferrer">
                           {child}
                        </a>
                    </li>
                })}

            </ul>
        </div>)
}
export default SocialLinks