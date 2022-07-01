import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram, TiSocialYoutube } from "react-icons/ti";
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }

    // the a tag below was used to link a component in this case <TiSocialFacebook/> to an external link
    // I should change it later to link to my accounts instead og google.com
    return (
        <div className="h-52 w-full bg-slate-700 mb-0 mt-32 flex flex-col justify-center items-center gap-4">
            <p onClick={navigateToHome} className=" font-myFont text-white text-xl opacity-60 hover:cursor-pointer">Tasty</p>
            <div className="flex flex-row justify-center items-center gap-8 opacity-60 hover:cursor-pointer">
                <a href="https://google.com" target="_blank" rel="noreferrer"><TiSocialFacebook size={40} color={"white"} /></a>
                <a href="https://google.com" target="_blank" rel="noreferrer"><TiSocialTwitter size={40} color={"white"} /></a>
                <a href="https://google.com" target="_blank" rel="noreferrer"><TiSocialLinkedin size={40} color={"white"} /></a>
                <a href="https://google.com" target="_blank" rel="noreferrer"><TiSocialInstagram size={40} color={"white"} /></a>
                <a href="https://google.com" target="_blank" rel="noreferrer"><TiSocialYoutube size={40} color={"white"} /></a>
            </div>
            <p className=" font-myFont text-white opacity-60 mt-4">Copyright ©2022 All rights reserved </p>

        </div>
    );
}

export default Footer;