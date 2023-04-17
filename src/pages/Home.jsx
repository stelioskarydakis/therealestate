import { useEffect, useState } from "react";
import { HomeTitles, ListingItem, Slider, Title } from "../components";
import { fetchListingsFromFirestore } from "../helpers/fetchListings";

export default function Home() {
  // Places with offers
  const [offerListings, setOfferListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        const listings = await fetchListingsFromFirestore(
          "offer",
          "==",
          true,
          3
        );
        setOfferListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  // Places for rent
  const [rentListings, setRentListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        const listings = await fetchListingsFromFirestore(
          "type",
          "==",
          "rent",
          6
        );
        setRentListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  // Places for sale
  const [saleListings, setSaleListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        const listings = await fetchListingsFromFirestore(
          "type",
          "==",
          "sale",
          6
        );
        setSaleListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  return (
    <section>
      <div className="pb-5">
        <Title title="TheReal | Estate" />
      </div>
      <Slider />
      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {offerListings && offerListings.length > 0 && (
          <div className="m-2 mb-6">
            <HomeTitles
              title="Recent offers"
              link="/offers"
              linkText="Show more offers"
            />
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {offerListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="m-2 mb-6">
            <HomeTitles
              title="Places for rent"
              link="/category/rent"
              linkText="Show more places for rent"
            />
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {rentListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="m-2 mb-6">
            <HomeTitles
              title="Places for sale"
              link="/category/sale"
              linkText="Show more places for sale"
            />
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {saleListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
