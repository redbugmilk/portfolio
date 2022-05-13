import React, { useCallback, useEffect, useReducer, useState } from "react";
import Button from "@mui/material/Button";
import useRequest from "../hooks/use-request";
import ListPassenger from "./ListPassenger";
import AddPassenger from "./AddPassenger";

const BASE_URL = "https://api.instantwebtools.net/v1/passenger";

const INITIAL_STATE = {
  passengers: [],
  numberPerPage: 5,
  totalNumberPage: 0,
  page: 0,
};

function passengerReducer(state, action) {
  switch (action.type) {
    case "SET_PASSENGER":
      return {
        ...state,
        passengers: action.payload,
      };
    case "SET_TOTAL_NUMBER_PAGE":
      return {
        ...state,
        totalNumberPage: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "SET_NUMBER_PER_PAGE":
      return {
        ...state,
        numberPerPage: action.payload,
      };
    default:
      throw new Error("Action not valid");
  }
}

function Passenger() {
  const [state, dispatch] = useReducer(passengerReducer, INITIAL_STATE);
  const [addData, setAddData] = useState(false);
  const [airline, setAirlines] = useState([]);
  const { isLoading, error, sendRequest: getPassengerData } = useRequest();
  const {
    isLoading: isDeleting,
    error: deletingError,
    sendRequest: deletePassengerData,
    cleanError: cleanDeleteError,
  } = useRequest();

  const {
    isLoading: isGettingAirlines,
    error: gettingAirlinesError,
    sendRequest: gettingAirlinesData,
    cleanError: cleanGettingAirlinesError,
  } = useRequest();

  const mapPassengerData = useCallback((apiResponse) => {
    if (apiResponse.data.length > 0) {
      dispatch({ type: "SET_PASSENGER", payload: apiResponse.data });
    }
    if (apiResponse.totalPages) {
      dispatch({
        type: "SET_TOTAL_NUMBER_PAGE",
        payload: apiResponse.totalPages,
      });
    }
  }, []);

  const changePageHandler = (event, newPage) => {
    dispatch({
      type: "SET_PAGE",
      payload: newPage,
    });
  };

  const changeRowsPerPageHandler = (event) => {
    dispatch({
      type: "SET_NUMBER_PER_PAGE",
      payload: parseInt(event.target.value),
    });
    dispatch({
      type: "SET_PAGE",
      payload: 0,
    });
  };

  const fetchPassengerHandler = useCallback(() => {
    const url = `${BASE_URL}?page=${state.page}&size=${state.numberPerPage}`;
    getPassengerData({ url }, mapPassengerData);
  }, [getPassengerData, mapPassengerData, state.page, state.numberPerPage]);

  const deleteHandler = useCallback(async (id) => {
    const url = `${BASE_URL}/${id + 1}`;
    await deletePassengerData({ url, method: "DELETE" });
    fetchPassengerHandler();
  }, []);

  const mapAirline = useCallback((apiResponse) => {
    setAirlines(apiResponse);
  }, []);

  useEffect(() => {
    const url = "https://api.instantwebtools.net/v1/airlines";
    gettingAirlinesData({ url }, mapAirline);
    fetchPassengerHandler();
  }, [fetchPassengerHandler, gettingAirlinesData, mapAirline]);

  const closeHandler = () => {
    setAddData((previousSate) => !previousSate);
  };

  const openHandler = () => {
    setAddData((previousSate) => !previousSate);
  };

  if (isLoading) {
    return <p>Loading information...</p>;
    console.log("loading");
  }

  const apiError = error || gettingAirlinesError;
  if (apiError) {
    <p>{apiError}</p>;
  }
  const onSubmitHandler = () => {
    setAddData((previousSate) => !previousSate);
  };

  return (
    <React.Fragment>
      {addData && (
        <AddPassenger airlines={airline} onSubmit={onSubmitHandler} />
      )}
      {!addData && (
        <>
          <Button onClick={openHandler}>Add a Passenger</Button>
          <ListPassenger
            passengers={state.passengers}
            numberPerPage={state.numberPerPage}
            totalPages={parseInt(state.totalNumberPage / state.numberPerPage)}
            page={state.page}
            changePageHandler={changePageHandler}
            changeRowsPerPageHandler={changeRowsPerPageHandler}
            deleteHandler={deleteHandler}
          />
        </>
      )}
    </React.Fragment>
  );
}

export default Passenger;
