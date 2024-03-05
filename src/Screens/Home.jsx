import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousal from "../Components/Carousal";
import { response } from "express";
export default function Home() {
   
  const [foodCat,setFoodCat]=useState([]);
  // in object map is not used we have to sue for in
  const [foodItem,setFoodItem]=useState([]);

  const loadData=async()=>{
    let  response = await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      header:{
        'Content-Type':'application/json'
      }
    } );
    response= response.json();
    console.log(response[0],response[1]);
  }
  useEffect(()=>{
    loadData()
  },[])

  return (
    <div>
      <div>
        {" "}
        <Navbar />{" "}
      </div>
      <div>
        {" "}
        <Carousal />
      </div>
      <div
        className="m-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}
