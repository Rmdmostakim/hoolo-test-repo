import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function NullTable(props) {
  return (
    <>
      <Table className="bg-light">
        <thead>
          <tr>
            <th className="text-center">
              {" "}
              No {props.name} Found! ... <Link to="/">{props.action} Now</Link>{" "}
            </th>
          </tr>
        </thead>

        {/* <tbody>
          <tr>
            <td> </td>
          </tr>
        </tbody> */}
      </Table>
    </>
  );
}

export default NullTable;
