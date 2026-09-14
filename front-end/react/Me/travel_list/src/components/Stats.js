import React from "react";

export default 
function Stats({ items }) {
  const packedItem = items.filter(item => {
    return item.isPacked
  }).length

  return (
    <footer className="stats">
      <em>You have {items.length} item in your list, and you already packed {packedItem} </em>
    </footer>
  )
}