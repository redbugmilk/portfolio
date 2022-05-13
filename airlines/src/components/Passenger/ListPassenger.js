import React from "react";
import Table from "../UI/Table";
import Button from "@mui/material/Button";

function ListPassenger(props) {
  const transformPassengerData = (data) =>
    data.map((value) => ({
      id: value._id,
      name: value.name,
      trips: value.trips,
      airline: value.airline[0].name,
      delete: (
        <Button onClick={(id) => props.deleteHandler(value._id)}>Delete</Button>
      ),
    }));

  return (
    <React.Fragment>
      {props.passengers.length > 0 && (
        <Table
          tableContent={transformPassengerData(props.passengers)}
          rowsPerPage={props.numberPerPage}
          count={props.totalPages}
          page={props.page}
          changePageHandler={props.changePageHandler}
          changeRowsPerPageHandler={props.changeRowsPerPageHandler}
        />
      )}
      {props.passengers.length === 0 && <p>No passenger</p>}
    </React.Fragment>
  );
}

export default ListPassenger;
