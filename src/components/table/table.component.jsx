import Table from "react-bootstrap/Table";

import "./table.styles.css";

const AAPLTable = ({ tableRows, values }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead className="table-header">
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AAPLTable;
