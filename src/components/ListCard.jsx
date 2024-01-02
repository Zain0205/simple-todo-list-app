import React from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";

function ListCard({ task, checked, edit, dellete, id, handleCheckBox, handleEdit }) {
  return (
    <div className="list-container">
      <input onChange={() => handleCheckBox(id)} checked={checked} type="checkbox" />
      <p style={{textDecoration: checked ? "line-through" : "none"}} contentEditable={edit}>{task}</p>
      <div className="btn">
        <FaPen onClick={() => handleEdit(id)} role="button" tabIndex={0} />
      </div>
      <div className="btn2">
        <FaTrashAlt onClick={() => dellete(id)} role="button" tabIndex={0} />
      </div>
    </div>
  );
}

export default ListCard;
