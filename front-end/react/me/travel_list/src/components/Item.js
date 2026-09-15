import React from "react";

export default function Item({ item, onDeleteItem, onIsPacked }) {
  return (<li>
    <input type="checkbox" value={item.isPacked} onChange={() => onIsPacked(item.id)} />
    <span style={item.isPacked ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description} </span>
    <button onClick={() => { onDeleteItem(item.id) }}>❌</button>
  </li>)
}