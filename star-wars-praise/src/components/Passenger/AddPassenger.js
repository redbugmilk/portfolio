import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useReducer } from "react";

const INITIAL_STATE_FORM = {
  name: "",
  trips: "",
  airline: 0,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_TRIPS":
      return { ...state, trips: action.payload };
    case "SET_AIRLINE":
      return { ...state, airline: action.payload };
    default:
      throw new Error("Action not valid");
  }
};

function PassengerForm(props) {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE_FORM);

  const transformAirline = (apiData) => {
    const airlineNames = apiData.map(({ id, name }) => ({ id, name }));
  };

  transformAirline(props.airlines);

  const onSubmitHandler = () => {
    console.log(state);
  };

  if (props.error) {
    return <p>Ohh! Something is not right</p>;
  }

  if (props.isLoading) {
    <p>This is Loading...</p>;
  }
  console.log(state.airline);
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={onSubmitHandler}
    >
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={state.name}
        onClick={(event) =>
          dispatch({ type: "SET_NAME", payload: event.currentTarget.value })
        }
      />
    </Box>
  );
}

export default PassengerForm;
