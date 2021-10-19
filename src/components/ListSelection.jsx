import React from "react";

const ListSelection = ({ selectedItem }) => (
  <div className="listSelection">
    ListSelection
    <table cellPadding="10">
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Delivery Method</th>
      </tr>
      <tr>
        <td>{selectedItem.name}</td>
        <td>{selectedItem.category}</td>
        <td>{selectedItem.deliveryMethod}</td>
      </tr>
    </table>
  </div>
);

export default ListSelection;
