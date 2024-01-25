import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";

const Categories = ({ activeCategory, setActiveCategory, link }) => {
  let [url, setUrl] = useState(link);
  let btnUrl = BASE_URL + "/gameTypes";
  let { data: games } = useFetch(btnUrl);

  return (
    <>
      <div className="categories gap-3 d-flex align-items-center justify-content-center">
        {games && games.map((game, index) => {
          <>
          <div
                onClick={() => {
                  setActiveCategory(game.description),
                    setUrl(BASE_URL + "/providerCodes/" + game.id);
                }}
                className="category "
              >
                <img className="categoryImg" src={game.icon} />
                <p className="font-weight-bold">{game.description}</p>
          </div>
          </>
        })}
        {/* {games && (
              <>
              <div
                onClick={() => {
                  setActiveCategory(game.description),
                    setUrl(BASE_URL + "/providerCodes/" + games[0]?.id);
                }}
                className="category "
              >
                <img className="categoryImg" src={game.icon} />
                <p className="font-weight-bold">{game.description}</p>
              </div>
              <div
                onClick={() => {
                  setActiveCategory(games[1]?.description),
                    setUrl(BASE_URL + "/providerCodes/" + game.id);
                }}
                className="category "
              >
                <img className="categoryImg" src={games[1]?.icon} />
                <p className="font-weight-bold">{games[1]?.description}</p>
              </div>
              <div
                onClick={() => {
                  setActiveCategory(games[0]?.description),
                    setUrl(BASE_URL + "/providerCodes/" + games[0]?.id);
                }}
                className="category "
              >
                <img className="categoryImg" src={games[0]?.icon} />
                <p className="font-weight-bold">{games[0]?.description}</p>
              </div>
              </>
        )} */}
      </div>
    </>
  );
};

export default Categories;
