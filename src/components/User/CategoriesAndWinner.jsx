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
  let { data: play, loading, error } = useFetch(url);
  let { data: play1, loading1, error1 } = useFetch(url1);
  let { data: play2, loading2, error2 } = useFetch(url2);
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
        {activeCategory === "LIVE-CASINO" && (
          <CasinoGames providers={play.providers} loading={loading} />
        )}
        {activeCategory === "SPORTBOOK" && (
          <SportGames providers={play1.providers} loading={loading1} />
        )}
        {activeCategory === "SLOTS" && (
          <SlotGames providers={play2.providers} loading={loading2} />
        )}
      </div>
    </div>
  );
};

export default CategoriesAndWinner;
