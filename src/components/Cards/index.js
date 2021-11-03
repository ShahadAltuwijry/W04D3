import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import "./style.css";

const concerts = [
  {
    id: 0,
    name: "imagine dragons",
    img: "https://i.pinimg.com/564x/fe/e1/21/fee12160d1c7c03b8c175e6c81658fb0.jpg",
    isFav: false,
  },
  {
    id: 1,
    name: "ColdPlay",
    img: "https://i.pinimg.com/564x/ed/0c/d1/ed0cd1fb68d9a31c12d5876e720bcca8.jpg",
    isFav: true,
  },
  {
    id: 2,
    name: "Maroon 5",
    img: "https://i.pinimg.com/564x/36/4d/18/364d18abdb515f05fa649249e9ad8bc4.jpg",
    isFav: false,
  },
];

const Cards = () => {
  const [search, setSearch] = useState("");

  const history = useHistory();
  const openPage = (id) => {
    history.push(`/CardDetails/${id}`);
  };

  const addToFav = (id) => {
    // concerts[id].isFav = !concerts[id].isFav;
    // localStorage.setItem("concerts", JSON.stringify(concerts));
  };

  {
    /*نقدر ننقل الاراي كله للوكال ستوريج ونخلي البتن يتعامل بس مع كي التفضيل في الاراي, 
  بالفيفرت بيج نحط الاراي كامل مع اظهار فقط العناصر الي فيها التفضيل */
  }

  {
    /*still didn't figure out how to do the favorite page */
  }

  return (
    <div>
      {/*start of search function */}
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <h1>Cards</h1>

      <div className="searchDiv">
        {concerts
          .filter((val) => {
            if (search === "") {
              return "no words written";
            } else if (
              val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="card">
                <img
                  className="img"
                  src={val.img}
                  alt={val.name}
                  onClick={() => {
                    openPage(val.id);
                  }}
                />
                <h2 className="name">{val.name}</h2>
                <button className="favBtn" onClick={() => addToFav(concerts)}>
                  {!concerts.isFav ? "❤" : "✘"}
                </button>
              </div>
            );
          })}
      </div>
      {/*end of search function */}
    </div>
  );
};

export default Cards;
