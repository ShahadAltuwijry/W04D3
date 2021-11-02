import React from "react";
import { useHistory } from "react-router";
// import CardDetails from "./components/CardDetails";
import "./style.css";

const concerts = [
  {
    id: 0,
    name: "imagine dragons",
    img: "https://i.pinimg.com/564x/fe/e1/21/fee12160d1c7c03b8c175e6c81658fb0.jpg",
  },
  {
    id: 1,
    name: "ColdPlay",
    img: "https://i.pinimg.com/564x/ed/0c/d1/ed0cd1fb68d9a31c12d5876e720bcca8.jpg",
  },
  {
    id: 2,
    name: "Maroon 5",
    img: "https://i.pinimg.com/564x/36/4d/18/364d18abdb515f05fa649249e9ad8bc4.jpg",
  },
];

const Cards = () => {
  const history = useHistory();
  const openPage = (id) => {
    history.push(`/CardDetails/${id}`);
  };

  return (
    <div>
      <h1>Cards</h1>
      
      <div className="cardsDiv">
        {concerts.map((item, i) => {
          return (
            <div
              className="card"
              // onClick={openPage}
            >
              <img
                className="img"
                src={item.img}
                alt={item.name}
                onClick={() => {
                  openPage(item.id);
                }}
              />
              <h2 className="name">{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
