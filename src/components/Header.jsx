import { Link } from "react-router-dom";
import { HeaderLink, Logo } from "./";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { texts } from "../constants";

const Header = () => {
  const [pageState, setPageState] = useState(texts.SIGN_IN);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setPageState(texts.PROFILE) : setPageState(texts.SIGN_IN);
    });
  }, [auth]);

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="list-none flex flex-row gap-3 sm:gap-4">
          <HeaderLink title="Home" path="/" />
          <HeaderLink title="Offers" path="/offers" />
          {pageState === texts.SIGN_IN && (
            <HeaderLink title="Sign in" path="/sign-in" />
          )}
          {pageState === texts.PROFILE && (
            <HeaderLink title="Profile" path="/profile" />
          )}
        </ul>
      </header>
    </div>
  );
};
export default Header;
