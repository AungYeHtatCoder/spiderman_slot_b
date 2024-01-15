import React from "react";
import c1 from "../../../assets/img/categories/c1.png";
import c2 from "../../../assets/img/categories/c2.png";
import c3 from "../../../assets/img/categories/c3.png";
import c4 from "../../../assets/img/categories/c4.png";
import c5 from "../../../assets/img/categories/c5.png";
import c6 from "../../../assets/img/categories/c6.png";
import useFetch from "../../../hooks/useFetch";
import BASE_URL from "../../../hooks/baseURL";
BASE_URL;
const CasinoGames = ({ providers }) => {
  console.log(providers);
  // const casinos = [c1, c2, c3, c4, c5, c6];

  // let url = BASE_URL + "/providerCodes/";
  // let { data: games, loading, error } = useFetch(url);
  return (
    <div className="px-2 px-sm-4">
      <div className="categoryGames">
        {providers &&
          providers.map((provider, index) => {
            return (
              <img
                key={index}
                className="categoryGame"
                src={provider.img_url}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CasinoGames;
