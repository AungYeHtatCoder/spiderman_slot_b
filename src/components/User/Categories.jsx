import React, { useState } from "react";
import home from "../../assets/img/home.png";
import slot from "../../assets/img/slot.png";
import fish from "../../assets/img/fish.png";
import casino from "../../assets/img/casino.png";
import arcade from "../../assets/img/arcade.png";
import sport from "../../assets/img/sport.png";
import table from "../../assets/img/table.png";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";

const Categories = ({ activeCategory, setActiveCategory, link }) => {
  let [url, setUrl] = useState(link);
  let btnUrl = BASE_URL + "/gamelist";
  let { data: games } = useFetch(btnUrl);

  // console.log(play);
  // console.log(activeCategory);
  // const categories = [
  //   { title: "Home", img: home },
  //   { title: "Slots", img: slot },
  //   { title: "Fishing", img: fish },
  //   { title: "Casino", img: casino },
  //   { title: "Arcade", img: arcade },
  //   { title: "Sports", img: sport },
  //   { title: "Table", img: table },
  // ];
  return (
    <div className="categories gap-3 d-flex align-items-center justify-content-center">
      {games &&
        games.map((game) => {
          return (
            <div
              key={game.id}
              onClick={() => {
                setActiveCategory(game.description),
                  setUrl(BASE_URL + "/providerCodes/" + game.id);
              }}
              className="category "
            >
              <img className="categoryImg" src={game.icon} />
              <p className="font-weight-bold">{game.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Categories;
