import { getAuth, updateProfile } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { FcHome } from "react-icons/fc";
import { useEffect } from "react";
import { ListingItem, MyListings, Title } from "../components";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  function onLogout() {
    auth.signOut();
    navigate("/");
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update name in the firestore

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("Profile details updated");
    } catch (error) {
      toast.error("Could not update the profile details");
    }
  }

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  // async function onDelete(listingID) {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     await deleteDoc(doc(db, "listings", listingID));
  //     const updatedListings = listings.filter(
  //       (listing) => listing.id !== listingID
  //     );
  //     setListings(updatedListings);
  //     toast.success("Successfully deleted the listing");
  //   }
  // }
  // function onEdit(listingID) {
  //   navigate(`/edit-listing/${listingID}`);
  // }

  return (
    <section>
      <div className="max-w-6xl mx-auto flex justify-center items-center flex-col pb-8">
        <Title title="Profile" />
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              className={`mb-6 w-full px-4 py-2 text-sm text-gray-700 bg-white border-solid border border-black-100 shadow-2xl  rounded transition ease-in-out  ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
              disabled={!changeDetail}
              onChange={onChange}
            />

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-sm text-gray-700 bg-white border-solid border border-black-100 shadow-2xl rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {changeDetail ? "Apply change" : "Edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-primary hover:opacity-90 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
          <button
            type="submit"
            className="w-full bg-black-100 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-primary transition duration-150 ease-in-out hover:shadow-lg active:bg-primary"
          >
            <Link
              to="/create-listing"
              className="flex justify-center items-center"
            >
              <FcHome className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2" />
              Sell or rent your home
            </Link>
          </button>
        </div>
      </div>

      <div className="max-w-6xl px-3 mt-6 mx-auto">
        <MyListings />
      </div>
    </section>
  );
};
export default Profile;
