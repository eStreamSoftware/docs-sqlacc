import React from 'react'; 
import { MdModeEdit } from "react-icons/md";

export default function EditThisPageWrapper( {editUrl} ) {
  return (
    <a href={editUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <MdModeEdit />
    </a>
  );
}
