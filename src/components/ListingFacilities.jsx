import { FaBed, FaBath, FaParking, FaChair } from "react-icons/fa";

const ListingFacilities = ({ listing }) => {
  return (
    <>
      <ul className="flex items-center space-x-2 sm:space-x-10 text-sm font-semibold mb-6">
        <li className="flex items-center whitespace-nowrap">
          <FaBed className="text-lg mr-1" />
          {+listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}
        </li>
        <li className="flex items-center whitespace-nowrap">
          <FaBath className="text-lg mr-1" />
          {+listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : "1 Bath"}
        </li>
        <li className="flex items-center whitespace-nowrap">
          <FaParking className="text-lg mr-1" />
          {listing.parking ? "Parking spot" : "No parking"}
        </li>
        <li className="flex items-center whitespace-nowrap">
          <FaChair className="text-lg mr-1" />
          {listing.furnished ? "Furnished" : "Not furnished"}
        </li>
      </ul>
    </>
  );
};
export default ListingFacilities;
