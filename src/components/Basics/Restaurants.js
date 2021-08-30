import React, { useState } from "react";
import MenuCard from "./MenuCard";
import MenuApi from "./menuapi.js";
import Navbar from "./Navbar";
import "./style.css";
const uniqueList = [
  ...new Set(
    MenuApi.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);
const Restaurants = () => {
  const [menuData, setData] = useState(MenuApi);
  const [menuList, setMenuList] = useState(uniqueList);
  const filteredItems = (category) => {
    if(category==="All"){
      setData(MenuApi);
      return;
    }
    const updatedList = MenuApi.filter((currentElement) => {
      return currentElement.category === category;
    });
    setData(updatedList);
  };
  // console.log(menuData)
  return (
    <div>
      <Navbar filteredItems={filteredItems} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </div>
  );
};

export default Restaurants;
