import logo from "../Header../../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <div className="text-center mt-6">
        <p className="text-lg font-normal text-[#706F6F] mb-3">
          Journalism Without Fear or Favour
        </p>
        <h3 className="text-xl font-medium text-[#403F3F]">
          {moment().format("dddd, MMMM D, YYYY")}
        </h3>
      </div>
    </div>
  );
};

export default Header;
