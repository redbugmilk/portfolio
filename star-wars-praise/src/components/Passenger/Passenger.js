import React, { useEffect, useState } from "react";
import useRequest from "../hooks/use-request";
import Table from "../UI/Table";
const BASE_URL = "https://api.instantwebtools.net/v1/passenger";
const content = [
  { id: 0, name: "A", trips: "as", airline: "ba" },
  { id: 1, name: "B", trips: "bs", airline: "bb" },
  { id: 2, name: "C", trips: "cs", airline: "bc" },
  { id: 3, name: "C", trips: "ds", airline: "bd" },
];

function Passenger() {
  const [passengers, setPassengers] = useState([]);
  const [numberPerPage, setNumberPerPage] = useState(20);
  const [totalNumberPage, setTotalNumberPage] = useState(0);
  const [page, setPage] = useState(0);

  const { isLoading, error, sendRequest: getPassengerData } = useRequest();
  const url = `${BASE_URL}?page=${page}&size=${numberPerPage}`;

  useEffect(() => {
    const mapPassengerData = (response) => {
      const passengers = response.data;

      if (passengers.length > 0 && response.totalPages) {
        const passengerDataMapped = passengers.map((value) => ({
          id: value._id,
          name: value.name,
          trips: value.trips,
          airline: value.airline[0].name,
        }));
        setPassengers(passengerDataMapped);
        setTotalNumberPage(response.totalPages);
      }
    };
    getPassengerData({ url }, mapPassengerData);
  }, [getPassengerData, url]);

  return (
    <React.Fragment>
      {!isLoading && error && <p>Something went wrong</p>}
      {!isLoading && passengers.length > 0 && (
        <Table tableContent={passengers} />
      )}
      {!isLoading && !error && passengers.length === 0 && <p>No passenger</p>}
      {isLoading && <p>Loading passenger information...</p>}
    </React.Fragment>
  );
}

export default Passenger;
