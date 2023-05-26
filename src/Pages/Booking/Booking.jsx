import React, { useContext, useEffect, useState } from "react";
import { AuthData } from "../../Context/AuthContext";

const Booking = () => {
  const { user } = useContext(AuthData);
  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null);
  useEffect(() => {
    fetch(
      `https://doctor-medical-server-hayatemraan.vercel.app/orderbook/booking?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [response]);
  const handleDelete = (e) => {
    fetch(
      `https://doctor-medical-server-hayatemraan.vercel.app/orderbook/booking/${e}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => setResponse(data));
  };
  return (
    <div className="container mx-auto mt-16">
      <div className="overflow-x-auto">
        <h3 className="text-center text-3xl mb-4 font-semibold">
          My Booking Managment Portal
        </h3>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Count</th>
              <th>Location</th>
              <th>Date</th>
              <th>type</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((dm, i) => {
                return (
                  <React.Fragment key={i}>
                    <tr>
                      <th>{i + 1}</th>
                      <td>{dm.location}</td>
                      <td>{dm.date}</td>
                      <td>{dm.select}</td>
                      <td>
                        <button className="text-warning">Pending</button>
                      </td>
                      <td>
                        <button onClick={() => handleDelete(dm._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
