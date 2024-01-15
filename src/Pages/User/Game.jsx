import React, { useState } from 'react'
import Hero from '../../components/User/Hero'
import useFetch from '../../hooks/useFetch';
import BASE_URL from '../../hooks/baseURL';
import BtnSpinner from '../../components/Auth/BtnSpinner';
import { Link } from 'react-router-dom';

export default function Game() {
  let [loader, setLoader] = useState(false);
  let providerId = localStorage.getItem('provider_id');
  let gameTypeId = localStorage.getItem('gameType_id');
  let title = localStorage.getItem('title');
  let [url, setUrl] = useState(BASE_URL+"/gamedetail/" + providerId + "/game_type/" + gameTypeId);
  let { data: games, loading, error } = useFetch(url);
  let auth = localStorage.getItem('authToken');

  const launchGame = (gameId) => {
    setLoader(true);
    //fetch api calling
    fetch(BASE_URL + "/launchGame/" + gameId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Launch Game failed");
      }
      console.log("Launch Game success");
      return response.json();
    })
    .then((data) => {
      // console.log(data.data);
      setLoader(false);
      window.location.href = data.data;
    })
    .catch((error) => {
      console.error("Launch Game error:", error);
    });
  }

  return (
    <div className='homeBody text-white container-fluid'>
      <Hero />
        <h1 className='text-center my-4'>
        {loader && <BtnSpinner />}
          {title}
        </h1>
        {
          loading && 
          <div className='text-center'>
           <BtnSpinner className="mx-auto" />
          </div>
        }

        <div className="row">
        {games && games.map((game, index) => (
            <div className="col-lg-2 col-md-3 col-6 mb-4 text-center" key={index}>
              {auth && (
                <>
                <div onClick={() => launchGame(game.id)} style={{ "cursor" : "pointer" }}>
                  <img src={game.image} className='img-fluid rounded shadow' alt="" />
                  <p className='text-white mt-3'>
                    {game.name_en}
                  </p>
                </div>
                </>
              )}
              {!auth && (
                <Link className='text-decoration-none' to={'/login'}>
                  <img src={game.image} className='img-fluid rounded shadow' alt="" />
                  <p className='text-white mt-3'>{game.name_en}</p>
                </Link>
              )}

            </div>
        ))}
        {
          games.length === 0 && 
          <h6 className='text-center'>There is no game in that provider "{title}".</h6>
        }
        </div>
    </div>
  )
}
