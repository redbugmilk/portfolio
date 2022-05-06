import Button from "@mui/material/Button";
import React, { useCallback, useEffect, useState } from "react";
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
  //const [refresh, setRefresh] = useState(false);

  const { isLoading, error, sendRequest: getPassengerData } = useRequest();
  const {
    isLoading: isDeleting,
    error: deletingError,
    sendRequest: deletePassengerData,
    cleanError: cleanDeleteError,
  } = useRequest();

  const deleteHandler = useCallback(async (id) => {
    const url = `${BASE_URL}/${id + 1}`;
    await deletePassengerData({ url, method: "DELETE" });
    fetchPassengerHandler();
  }, []);

  const transformPassengerData = (data) =>
    data.map((value) => ({
      id: value._id,
      name: value.name,
      trips: value.trips,
      airline: value.airline[0].name,
      delete: (
        <Button onClick={(id) => deleteHandler(value._id)}>Delete</Button>
      ),
    }));

  const mapPassengerData = useCallback((apiResponse) => {
    if (apiResponse.data.length > 0) {
      setPassengers(apiResponse.data);
    }
    if (apiResponse.totalPages) {
      setTotalNumberPage(apiResponse.totalPages);
    }
  }, []);

  const fetchPassengerHandler = useCallback(() => {
    const url = `${BASE_URL}?page=${page}&size=${numberPerPage}`;
    getPassengerData({ url }, mapPassengerData);
  }, [getPassengerData, mapPassengerData, page, numberPerPage]);

  useEffect(() => {
    fetchPassengerHandler();
  }, [fetchPassengerHandler]);

  return (
    <React.Fragment>
      {isDeleting && <p>Deleting user</p>}
      {deletingError && <p>{deletingError}</p>}
      {!isLoading && error && <p>Something went wrong</p>}
      {!isLoading && passengers.length > 0 && (
        <Table tableContent={transformPassengerData(passengers)} />
      )}
      {!isLoading && !error && passengers.length === 0 && <p>No passenger</p>}
      {isLoading && <p>Loading passenger information...</p>}
    </React.Fragment>
  );
}

export default Passenger;
