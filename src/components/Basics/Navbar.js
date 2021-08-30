import React from "react";

const Navbar = ({ filteredItems, menuList }) => {
  return (
    <>
      <navbar className="navbar">
        <div className="btn-group">
          {menuList.map((curElement) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filteredItems(curElement)}
              >
                {curElement}
              </button>
            );
          })}
        </div>
      </navbar>
    </>
  );
};

export default Navbar;
