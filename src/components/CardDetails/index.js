import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";

const concerts = [
  {
    id: 0,
    name: "imagine dragons",
    img: "https://i.pinimg.com/564x/fe/e1/21/fee12160d1c7c03b8c175e6c81658fb0.jpg",
    img2: "https://i1.wp.com/bdn-data.s3.amazonaws.com/uploads/2018/06/12309761_H23335472.JPG?w=2340&ssl=1",
  },
  {
    id: 1,
    name: "ColdPlay",
    img: "https://i.pinimg.com/564x/ed/0c/d1/ed0cd1fb68d9a31c12d5876e720bcca8.jpg",
    img2: "https://c4.wallpaperflare.com/wallpaper/321/679/593/coldplay-concert-crowd-lights-wallpaper-preview.jpg",
  },
  {
    id: 2,
    name: "Maroon 5",
    img: "https://i.pinimg.com/564x/36/4d/18/364d18abdb515f05fa649249e9ad8bc4.jpg",
    img2: "https://adventurerintraining.files.wordpress.com/2013/03/maroon5concert5.jpg",
  },
];

const CardDetails = () => {
  const { id } = useParams();
  const myItem = concerts.find((ele) => {
    return Number(id) === ele.id;
  });
  return (
    <div>
      <h1 className="cardHead">{concerts[id].name} </h1>
      <img className="img2" src={concerts[id].img2} alt={concerts[id].name} />
    </div>
  );
};

export default CardDetails;
