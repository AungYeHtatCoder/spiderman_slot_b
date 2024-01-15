import React, { useState } from "react";
import BtnSpinner from "../../Auth/BtnSpinner";
import { Link, Outlet } from "react-router-dom";

const CasinoGames = ({ providers, loading }) => {

  return (
    <div className="px-2 px-sm-4 py-4">
      {loading && <BtnSpinner />}
      <div className="row">
        {providers &&
          providers.map((provider, index) => {
            return (
              <div className="col-md-3 col-6 mb-4" key={index}>
                <Link className="text-decoration-none text-white text-center" to={'/games'} onClick={(e)=>{
                  localStorage.removeItem("provider_id");
                  localStorage.removeItem("gameType_id");
                  localStorage.removeItem("title");
                  localStorage.setItem("provider_id", provider.id);
                  localStorage.setItem("gameType_id", provider.pivot.game_type_id);
                  localStorage.setItem("title", provider.description);
                }}>
                <img
                  key={index}
                  className="categoryGame"
                  src={provider.img_url}
                />
                <p className="mt-0">{provider.description}</p>
                </Link>
              </div>
            );
          })}
      </div>
      <Outlet />
    </div>
  );
};

export default CasinoGames;
