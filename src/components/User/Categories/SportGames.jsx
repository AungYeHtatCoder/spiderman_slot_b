import React from "react";
import sp1 from "../../../assets/img/categories/sp1.png";
import sp2 from "../../../assets/img/categories/sp2.png";
const SportGames = ({ providers }) => {
  const sports = [sp1, sp2];
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

export default SportGames;
