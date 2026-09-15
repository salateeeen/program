import React, { useState } from "react";
import "../index.css";
import Logo from "./Logo"
import PackingList from "./PackingList"
import Stats from "./Stats"
import Form from "./Form"


export default function App() {

  const [items, setItems] = useState([])

  function handleAddItem(item) {
    ///push mutate the same array
    setItems((items) => {
      return [...items, item]
    })
  }

  function handleDeleteItem(itemId) {
    ///filter create a new array
    setItems(items.filter((item) => {
      return item.id !== itemId
    }))
  }

  function handleIsPacked(itemId) {
    setItems(items.map(item => {
      if (item.id === itemId) {
        item.isPacked = !item.isPacked
        return item
      } else {
        return item
      }
    }))
  }

  function handleClearAll(itemId) {
    const confirmed = window.confirm(`Are you sure you want to clear all? `);
    if (confirmed) {
      setItems([])
    }
  }

  return <div className="app">
    <Logo />
    <Form onAddItem={handleAddItem} />
    <PackingList items={items}
      onDeleteItem={handleDeleteItem}
      onIsPacked={handleIsPacked}
      onClearAll={handleClearAll} />
    <Stats items={items} />
  </div>
}
