import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeTitles = ({ title, link, linkText }) => {
  return (
    <>
      <h2 className="px-3 text-[30px] mt-6 font-bold text-black-100">
        {title}
      </h2>
      <Link to={link}>
        <p className="px-3 text-lg text-primary hover:opacity-90 transition duration-150 ease-in-out font-semibold flex items-center">
          <span>{linkText}</span>
          <BsArrowRightShort className="w-8 h-8 text-primary" />
        </p>
      </Link>
    </>
  );
};
export default HomeTitles;
