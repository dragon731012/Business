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
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/tPdzhqj/3-D4-AB3-B0-A039-43-D7-8-EFD-B1141-FB10-ACD.jpg" alt="3-D4-AB3-B0-A039-43-D7-8-EFD-B1141-FB10-ACD" border="0"></a>
      <a href='https://postimg.cc/8J0kMWm9' target='_blank'><img src='https://i.postimg.cc/8J0kMWm9/D627-D6-FC-C42-B-4839-B4-F0-C6-D229-BB4-A68.jpg' border='0' alt='D627-D6-FC-C42-B-4839-B4-F0-C6-D229-BB4-A68'/></a>
      <a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/qqktfxhJ/D627-D6-FC-C42-B-4839-B4-F0-C6-D229-BB4-A68.jpg' border='0' alt='D627-D6-FC-C42-B-4839-B4-F0-C6-D229-BB4-A68'/></a>
      <h2>
        place an order here, and we will deliver with free shipping! Make sure
        you put your adress and what you want, or we won't know where  to deliver.
      </h2>
      <h3>--WE ONLY ACCEPT CASH--</h3>
      <h3>--WE ONLY DELIVER TO BATAVIA, IL--</h3>
      <h3>You can pay when we get there.</h3>
      <h4>Put this in top bar-theburgeranddrinkstop@gmail.com</h4>
      <h4>That is to prevent or try to prevent robot emailers.</h4>
      <title>The Burger Stop</title>
      <input id="email" type="text" placeholder="type-theburgeranddrinkstop@gmail.com" required />
      <textarea
        id="description"
        placeholder="ex burger-2,lemonade-3, ADDRESS HERE"
      />
      <button type="submit">Place Order</button>
    </form>
  );
} 
      <h2>
        place an order here, and we will deliver with free shipping! Make sure
        you put your adress and what you want, or we won't know where  to deliver.
      </h2>
      <h3>--WE ONLY ACCEPT CASH--</h3>
      <h3>--WE ONLY DELIVER TO AND AROUND BATAVIA, IL--</h3>
      <h3>You can pay when we get there.</h3>
      <h4>Put this in top bar-theburgeranddrinkstop@gmail.com</h4>
      <h4>That is to prevent or try to prevent robot emailers.</h4>
      <title>The Burger Stop</title>
      <input id="email" type="text" placeholder="type-theburgeranddrinkstop@gmail.com" required />
      <textarea
        id="description"
        placeholder="ex burger-2,lemonade-3, ADDRESS HERE"
      />
      <button type="submit">Place Order</button>
    </form>
  );
}
