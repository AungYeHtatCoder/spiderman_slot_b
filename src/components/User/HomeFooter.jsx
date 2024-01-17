import React from "react";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  const footer = [
    { icon: <i className="fa-solid fa-bars"></i>, title: "Menu" },
    { icon: <i className="fa-solid fa-lock"></i>, title: "Password" },
    { icon: <i className="fa-solid fa-bullhorn"></i>, title: "Promotion" },
    { icon: <i className="fa-solid fa-wallet"></i>, title: "Wallet" },
  ];
  return (
    <div className="homeFooter d-flex d-lg-none justify-content-between align-items-center">
      {footer.map((item) => {
        return (
          <Link
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
            className="footerItem text-decoration-none pt-2"
          >
            {item.icon}
            <p className="mt-2">{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default HomeFooter;
