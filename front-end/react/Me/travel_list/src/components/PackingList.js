import React, { useState } from "react";
import Item from "./Item"

export default function PackingList({ items, onDeleteItem, onIsPacked, onClearAll }) {
  const [sortBy, setSortBy] = useState('input')

  if (sortBy === 'input') items

  if (sortBy === 'quantity') items = items.slice().sort((a, b) => {
    return b.quantity - a.quantity
  })

  if (sortBy === 'description') items = items.slice().sort((a, b) => {
    return a.description.localeCompare(b.description)
  })
  
  if (sortBy === 'packed') items = items.slice().sort((a, b) => {
    return Number(a.isPacked) - Number(b.isPacked)
  })

  return (<div className="list">
    <ul>{
      items.map(item => {
        return <Item item={item} onDeleteItem={onDeleteItem} onIsPacked={onIsPacked} key={item.id} />
      })}
    </ul>
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} >
        <option value="input">sort by input</option>
        <option value="quantity">sort by quantity</option>
        <option value="description">sort by description</option>
        <option value="packed">sort by packed</option>
      </select>
      <button className="clear" onClick={onClearAll}>clear</button>
    </div>
  </div>)
}