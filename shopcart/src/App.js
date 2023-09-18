import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { faShoppingCart } from "@fortawesme/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

function App() {
  const Items = [
    {
      id: 1,
      image: "/products/cologne.jpg",
      desc: "Unisex Cologne",
      value: 0,
    },
    {
      id: 2,
      image: "/products/iwatch.jpg",
      desc: "Apple iWatch",
      value: 0,
    },
    {
      id: 3,
      image: "/products/mug.jpg",
      desc: "Unique Mug",
      value: 0,
    },
    {
      id: 4,
      image: "/products/wallet.jpg",
      desc: "Mens Wallet",
      value: 0,
    },
  ];
  const [cartItems, setCartItems] = useState(Items);

  const handleItemAdd = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, value: item.value + 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const handleItemSubtract = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return item.value === 0
          ? { ...item, value: item.value }
          : { ...item, value: item.value - 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  return (
    <>
      <div className="component-container">
        <Navbar
          className="bg-body-tertiary text-white   py-4"
          bg="primary"
          data-bs-theme="dark"
          style={{
            width: "90%",
            margin: "1rem auto",
            fontSize: "24px",
            borderRadius: "4px",
          }}
        >
          <Container>
            <Navbar.Brand href="#home">
              <h3>Shop to React</h3>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse
              className="justify-content-end"
              style={{ gap: "1rem" }}
            >
              <FaShoppingCart />
              {cartItems.length}
              <Navbar.Text>Items</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div
          className="componennt-items-container "
          style={{ margin: "auto", width: "90%" }}
        >
          <div
            className="component-items-wrapper"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {cartItems?.map((item) => {
              return (
                <>
                  <div
                    className="cart-item"
                    key={item.id}
                    style={{
                      width: "40%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <h3>{item.desc}</h3>
                    <div
                      className="item-body"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1.5rem",
                      }}
                    >
                      <div
                        className="item-image"
                        style={{ height: "250px", width: "250px" }}
                      >
                        <img
                          src={item.image}
                          alt={item.desc}
                          style={{
                            height: "100%",
                            width: "100%",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        />
                      </div>
                      <div
                        className="item-quantity d-flex gap-4 text-l"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "2rem",
                        }}
                      >
                        <FaPlus
                          onClick={() => handleItemAdd(item.id)}
                          style={{ cursor: "pointer" }}
                        />
                        <div
                          className="quantity"
                          style={{
                            border: "4px solid #212121",
                            borderRadius: "4px",
                            padding: " 1rem",
                          }}
                        >
                          {item.value}
                        </div>

                        <FaMinus
                          onClick={() => handleItemSubtract(item.id)}
                          style={{ cursor: "pointer" }}
                        />

                        <span>quantity</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
