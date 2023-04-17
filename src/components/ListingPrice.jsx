const ListingPrice = ({ listing }) => {
  return (
    <p className="text-2xl font-bold mb-3 text-black-100 flex gap-2">
      <span className={`${listing.discountedPrice && "line-through"}`}>
        ${listing.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
      {listing.offer && (
        <span>
          $
          {listing.discountedPrice
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      )}
      {listing.type === "rent" ? " / month" : ""}
    </p>
  );
};
export default ListingPrice;
