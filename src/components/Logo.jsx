import { BsHousesFill } from "react-icons/bs";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <BsHousesFill className="text-primary text-[22px]" />
      <span className="text-primary font-bold text-[22px]">TheReal</span>
    </div>
  );
};
export default Logo;
