import React from "react";

export const ListTable = ({ selectItem, deselectItem, removeItem, items }) => (
  <div className="listTable">
    <table>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Category</th>
        <th>Delivery Method</th>
      </tr>
      {items.map((item, index) => (
        <tr key={index}>
          <td>
            <button
              onClick={() => {
                selectItem(item.id);
              }}
            >
              Select
            </button>
            <button
              onClick={() => {
                deselectItem(item.id);
              }}
            >
              Deselect
            </button>
            <button
              onClick={() => {
                removeItem(item.id);
              }}
            >
              Remove
            </button>
          </td>
          <td>{item.name}</td>
          <td>{item.category}</td>
          <td>{item.deliveryMethod}</td>
        </tr>
      ))}
    </table>
  </div>
);

export default ListTable;
