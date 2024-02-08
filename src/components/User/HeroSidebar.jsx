import React from "react";
import { Link } from "react-router-dom";

const HeroSideBar = () => {
  const sidebar = [
    { icon: <i className="fa-solid fa-bars"></i>, title: "Menu" },
    { icon: <i className="fa-solid fa-wallet"></i>, title: "Wallet" },
    { icon: <i className="fa-solid fa-lock"></i>, title: "Password" },
    { icon: <i className="fa-solid fa-bullhorn"></i>, title: "Promotion" },
  ];
  return (
    <div className="d-none d-lg-flex flex-column heroSidebar shadow">
      {sidebar.map((item) => {
        return (
          <Link
            className="text-decoration-none text-white"
            to={
              item.title === "Wallet"
                ? "/wallet"
                : item.title === "Menu"
                ? "/"
                : item.title == "Promotion"
                ? "/promotion"
                : "/change-password"
            }
            key={item.title}
          >
            {item.icon}
            <p>{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default HeroSideBar;
