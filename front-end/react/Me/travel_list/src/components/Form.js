import React, { useState } from "react";


export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(event) {
    event.preventDefault()
    const newItem =
    {
      id: Date.now(),
      description: description,
      quantity: quantity,
      isPacked: false
    }
    onAddItem(newItem);
    setDescription("");
    setQuantity(1)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select value={quantity} onChange={e => { setQuantity(+e.target.value) }}>
        {Array
          .from({ length: 20 }, (cur, indx) => { return indx + 1 })
          .map((indx) => {
            return <option value={indx} key={indx}>{indx}</option>
          })}
      </select>
      <input type="text" placeholder="text..." value={description} onChange={e => { setDescription(e.target.value) }} />
      <button>Add</button>
    </form>
  )
}
