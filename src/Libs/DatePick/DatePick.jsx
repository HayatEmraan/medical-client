import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthData } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthData);
  console.log(startDate);
  const handleBook = (e) => {
    e.preventDefault();
    if (!user) {
      return <Navigate to="/login"></Navigate>;
    }
    const middle = e.target;
    const location = middle.location.value;
    const select = middle.select.value;
    const date = middle.date.value;
    const email = user?.email;
    console.log(location, date, select);
    const bookOrder = {
      email,
      location,
      date,
      select,
    };
    fetch("https://doctor-medical-server-hayatemraan.vercel.app/orderbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookOrder),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="border p-4 rounded-lg">
        <h2 className="text-3xl font-semibold my-2">Book Appoinment Now</h2>
        <form onSubmit={handleBook}>
          <div className="flex gap-4">
            <input
              className="border px-4 py-2 rounded-md"
              type="text"
              name="location"
              id=""
              placeholder="Location"
            />
            <DatePicker
              dateFormat="dd/MM/yyyy"
              name="date"
              className="border px-4 py-2 rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <select name="select" className="border px-4 py-2 rounded-md">
              <option value="Infants">Infants</option>
              <option value="Child">Child</option>
              <option value="Adult">Adult</option>
            </select>
          </div>
          <button className="text-xl text-semibold bg-purple-600 text-white px-4 py-2 rounded-md my-4">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DatePick;
