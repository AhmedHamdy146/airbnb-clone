import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddressLink from "../components/AddressLink";
import Gallery from "../components/Gallery";
import BookingDate from "../components/BookingDate";

const BookingPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return "";
  }
  return (
    <div className="my-8">
      <h1 className="text-3xl">{booking.place.title}</h1>
      <AddressLink>{booking.place.address}</AddressLink>
      <div className="bg-gray-200 p-6 my-6 rounded-2xl flex justify-between items-center">
        <div>
          <h2 className="text-xl mb-4">Your booking information:</h2>
          <BookingDate booking={booking} className={"py-2 text-xl"} />
        </div>
        <div className="bg-primary p-6 text-white rounded-2xl">
          <div className="text-xl">TotalPrice:</div>
          <div className="text-3xl">${booking.price}</div>
        </div>
      </div>
      <Gallery place={booking.place} />
    </div>
  );
};

export default BookingPage;
