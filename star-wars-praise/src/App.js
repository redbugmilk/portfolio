import React from "react";
import Table from "./components/Table";

const content = [
  { id: 0, title: "A", director: "as", producer: "ba" },
  { id: 1, title: "B", director: "bs", producer: "bb" },
  { id: 2, title: "C", director: "cs", producer: "bc" },
  { id: 3, title: "C", director: "ds", producer: "bd" },
];

function App() {
  return (
    <React.Fragment>
      <Table tableContent={content} />
    </React.Fragment>
  );
}

export default App;
