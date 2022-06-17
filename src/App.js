import React from "react";
import "./styles.css";
export default function App() {
  function handleSubmit(e) {
    e.preventDefault();
    const inputs = [...e.target.elements];
    const res = inputs.reduce((prev, current) => {
      if (current.id) {
        prev[current.id] = current.value;
      }

      return prev;
    }, {});

    const link = document.createElement("a");
    link.href = `mailto:${res.email}?subject=${res.subject}&body=${res.description}`;
    link.click();
  }

  return (
    <form className="App" onSubmit={handleSubmit}>
      <h2>
        place an order here, and we will deliver with free shipping! Make sure
        you put your adress and what you want.
      </h2>
      <h3>--WE ONLY ACCEPT CASH--</h3>
      <h3>You can pay when we get there.</h3>
      <title>The Burger Stop</title>
      <input id="email" type="text" placeholder="email" required />
      <input
        id="Subject"
        type="The burger Stop"
        placeholder="The Burger Stop"
        required
      />
      <textarea
        id="description"
        placeholder="ex burger-2,lemonade-3, ADDRESS HERE"
      />
      <button type="submit">Place Order</button>
    </form>
  );
}
