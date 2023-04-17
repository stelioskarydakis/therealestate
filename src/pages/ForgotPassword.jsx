import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";
import { Title } from "../components";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent. Check the Spam also.");
    } catch (error) {
      toast.error("Could not send reset password");
    }
  }
  return (
    <section>
      <Title title="Forgot Password" />
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="/forgot.svg"
            alt="key"
            className="w-full rounded-2xl max-w-xs mx-auto"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-sm text-gray-700 bg-white border-solid border border-black-100 shadow-2xl rounded transition ease-in-out"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have a account?
                <Link
                  to="/sign-up"
                  className="text-primary hover:text-red-700 font-bold transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-black-100 hover:text-primary transition duration-200 ease-in-out"
                >
                  Log in instead.
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-black-100 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-primary transition duration-150 ease-in-out hover:shadow-lg active:bg-primary"
              type="submit"
            >
              Sent reset email
            </button>
            <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};
export default ForgotPassword;
