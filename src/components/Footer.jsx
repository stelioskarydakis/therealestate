import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 py-2 bg-black-100 mt-24">
      <Logo />
      <p className="font-semibold text-sm text-center text-primary">
        Made by Stelios &copy;2023
      </p>
    </div>
  );
};
export default Footer;
