import { FaGoogle, FaTwitter, FaGithub, FaInstagram  } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <h2 className="text-xl font-bold">Login With</h2>
            <div className="my-3">
                <button className="btn btn-outline w-full mb-2">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full mb-2">
                    <FaGithub />
                    Login With Github
                </button>
            </div>
            <div>
                <h2 className="text-xl font-bold my-3">Find Us On</h2>
                <div className="flex gap-3 items-center border rounded-t-lg p-4">
                <IoLogoFacebook className="bg-[#3B599C] text-[#F3F3F3] rounded-full border-red text-xl"/>
                    <p className="text-lg text-[#706F6F]">Facebook</p>
                </div>
                <div className="flex gap-3 items-center border-x p-4">
                <FaTwitter className="bg-[#F3F3F3] text-[#58A7DE] rounded-full border-red text-xl"/>
                    <p className="text-lg text-[#706F6F]">Twitter</p>
                </div>
                <div className="flex gap-3 items-center border rounded-b-lg p-4">
                <FaInstagram className="bg-[#F3F3F3] text-[#D82D7E] rounded-full border-red text-xl"/>
                    <p className="text-lg text-[#706F6F]">Instagram</p>
                </div>
            </div>
            <div className="bg-[#F3F3F3] mt-5">
                <h2 className="text-xl font-bold p-4">Q-Zone</h2>
                <img className="border-2 border-[#a8a7a7ab] border-dashed" src={qZone2} alt="" />
                <img className="border-2 border-[#a8a7a7ab] my-5 border-dashed" src={qZone1} alt="" />
                <img className="border-2 border-[#a8a7a7ab] border-dashed" src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;