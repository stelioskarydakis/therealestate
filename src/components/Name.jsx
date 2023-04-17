import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
const Name = ({ userRef }) => {
  const [landlord, setLandlord] = useState(null);
  useEffect(() => {
    async function getLandlord() {
      const docRef = doc(db, "users", userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        return;
      }
    }
    getLandlord();
  }, [userRef]);
  return (
    <>
      {landlord !== null && (
        <div className="flex flex-col w-full">
          <p>By {landlord.name}</p>
        </div>
      )}
    </>
  );
};
export default Name;
