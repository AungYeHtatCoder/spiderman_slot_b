import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";

const Categories = ({ activeCategory, setActiveCategory, link }) => {
  let [url, setUrl] = useState(link);
  let btnUrl = BASE_URL + "/gameTypes";
  let { data: games } = useFetch(btnUrl);
  // console.log(games);

  let handleCategory = (description, id) =>{
    setActiveCategory(description);
    setUrl(`${BASE_URL}/gameTypeProviders/${id}`);
    console.log(description, url);
  }

  return (
    <>
      <div className="categories gap-3 d-flex align-items-center justify-content-center">
      {games && games.map((game, index) => (
        <div 
          key={index} // Use game.id instead of index for a unique key
          onClick={(e) => handleCategory(game.description, game.id)}
          className="category"
        >
          <img 
            className="categoryImg" 
            src={game.img_url} 
            alt={game.description} // Add alt attribute for accessibility
          />
          <p className="font-weight-bold">{game.description}</p>
        </div>
      ))}
      </div>
    </>
  );
};

export default Categories;
