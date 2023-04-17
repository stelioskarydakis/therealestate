import { Link, useLocation } from "react-router-dom";

const HeaderLink = ({ title, path }) => {
  const pathMatch = (route) => {
    if (route === pathname) {
      return true;
    }
  };
  let { pathname } = useLocation();

  return (
    <li
      className={`${
        pathMatch(path)
          ? "border-b-primary text-black-200"
          : "border-b-transparent text-black-100"
      } py-3 border-b-[3px]   hover:text-black-200 text-[14px] font-medium cursor-pointer`}
    >
      <Link to={path}>{title}</Link>
    </li>
  );
};
export default HeaderLink;
