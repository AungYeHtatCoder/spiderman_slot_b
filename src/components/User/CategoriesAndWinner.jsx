import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Winner from "./Winner";
import HomeHeroGames from "./Categories/HomeHeroGames";
import HomePageGames from "./Categories/HomePageGames";
import SlotGames from "./Categories/SlotGames";
import FishGames from "./Categories/FishGames";
import CasinoGames from "./Categories/CasinoGames";
import ArcadeGames from "./Categories/ArcadeGames";
import SportGames from "./Categories/SportGames";
import TableGames from "./Categories/TableGames";
import axios from "axios";
import BASE_URL from "../../hooks/baseURL";
import useFetch from "../../hooks/useFetch";

const CategoriesAndWinner = ({ activeCategory, setActiveCategory }) => {
  let [url, setUrl] = useState(BASE_URL + "/providerCodes/" + 2);
  let [url1, setUrl1] = useState(BASE_URL + "/providerCodes/" + 3);
  let [url2, setUrl2] = useState(BASE_URL + "/providerCodes/" + 4);
  let { data: play } = useFetch(url);
  let { data: play1 } = useFetch(url1);
  let { data: play2 } = useFetch(url2);
  // console.log(play.providers);
  return (
    <div className="categoriesAndWinner">
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        link={url}
      />
      <div
        style={{ overflowY: "scroll", overflowX: "hidden" }}
        className="mt-sm-5"
      >
        {/* <Winner/> */}
        {/* This is only visible when active categories is Home */}
        {/* {activeCategory === "Home" && <HomeHeroGames />} */}
        {/* {activeCategory === "Home" && <HomePageGames />} */}
        {/* {activeCategory === "Fishing" && <FishGames />} */}
        {/* {activeCategory === "Arcade" && <ArcadeGames />} */}
        {/* {activeCategory === "Table" && <TableGames />} */}
        {activeCategory === "LIVE-CASINO" && (
          <CasinoGames providers={play.providers} />
        )}
        {activeCategory === "SPORTBOOK" && (
          <SportGames providers={play1.providers} />
        )}
        {activeCategory === "SLOTS" && (
          <SlotGames providers={play2.providers} />
        )}
      </div>
    </div>
  );
};

export default CategoriesAndWinner;
