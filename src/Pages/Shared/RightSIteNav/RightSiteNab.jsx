import { BsGoogle } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";

import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Zone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSiteNab = () => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-2xl">Login With</h2>
        <div>
          <button className="btn btn-outline flex gap-2 items-center border rounded-md p-3 mb-4 mt-8">
            <BsGoogle></BsGoogle>
            Login with Google
          </button>
          <button className="btn btn-outline flex gap-2 items-center border rounded-md p-3">
            <VscGithubInverted></VscGithubInverted>
            Login wiht GitHub
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-2xl">Find Us On</h2>
        <div className="mt-5">
          <a className="flex gap-2 items-center border rounded-t-md border-black p-3">
            <GrFacebookOption className="bg-gray-300 text-[#3B599CFF] w-8 h-8 p-2 rounded-full"></GrFacebookOption>
            Facebook
          </a>
          <a className="flex gap-2 items-center border-r border-l border-black p-3">
            <FaTwitter className="bg-gray-300 text-[#58A7DEFF] w-8 h-8 p-2 rounded-full"></FaTwitter>
            Twitter
          </a>
          <a className="flex gap-2 items-center border rounded-b-md border-black p-3">
            <FaInstagram className="bg-gray-300 text-[#fb52a1] w-8 h-8 p-2 rounded-full"></FaInstagram>
            Instagram
          </a>
        </div>
      </div>

      <div className="bg-gray-100 p-4 mt-12 rounded-lg">
        <h2 className="text-xl font-bold text-[#403F3F]">Q-Zone</h2>
        <div>
          <img className="w-full mt-8 mb-8" src={Zone1} alt="" />
        </div>
        <div>
          <img className="w-full mb-8" src={qZone2} alt="" />
        </div>
        <div>
          <img className="w-full" src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSiteNab;
