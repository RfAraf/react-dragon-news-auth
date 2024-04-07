import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="p-4">
      {/*  */}
      <div className=" space-y-3 mb-6">
        <h2 className="text-2xl">Login with</h2>
        <button className="btn w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
      {/*  */}
      <div className="mb-6">
        <h2 className="text-2xl mb-3">Find us on</h2>
        <a className="flex gap-2 items-center p-4 border rounded-t-lg" href="">
          <FaFacebook /> Facebook
        </a>
        <a className="flex gap-2 items-center p-4 border-x" href="">
          <FaTwitter /> Twitter
        </a>
        <a className="flex gap-2 items-center p-4 border rounded-b-lg" href="">
          <FaInstagram /> Instagram
        </a>
      </div>

      {/*  */}
      {/* <div>
        <h2 className="text-2xl mb-6">Find us on</h2>
        <div className="border rounded-xl  space-y-3">
          <Link>
            <div className="flex gap-2 pt-3 pl-3  items-center ">
              <FaFacebook /> Facebook
            </div>
          </Link>
          <hr className="pb-3" />
          <Link>
            <div className="flex gap-2 pl-3 items-center ">
              <FaTwitter /> Twitter
            </div>
          </Link>
          <hr className="pb-3" />
          <Link>
            <div className="flex gap-2 pb-3 pl-3 items-center ">
              <FaInstagram /> Instagram
            </div>
          </Link>
        </div>
      </div> */}

      <div className=" space-y-3 ">
        <h2 className="text-2xl">Q Zone</h2>
        <div>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
