import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

export const fetchListingsFromFirestore = async (
  param1,
  param2,
  param3,
  limitNum
) => {
  const listingsRef = collection(db, "listings");
  const q = query(
    listingsRef,
    where(param1, param2, param3),
    orderBy("timestamp", "desc"),
    limit(limitNum)
  );
  const querySnap = await getDocs(q);
  const listings = [];
  querySnap.forEach((doc) => {
    return listings.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  return listings;
};

export const fetchAllListings = async (limitNum) => {
  const listingsRef = collection(db, "listings");
  const q = query(listingsRef, orderBy("timestamp", "desc"), limit(limitNum));
  const querySnap = await getDocs(q);
  let listings = [];
  querySnap.forEach((doc) => {
    return listings.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  return listings;
};
