import React, { useState } from 'react'
import Hero from '../../components/User/Hero'
import useFetch from '../../hooks/useFetch';
import BASE_URL from '../../hooks/baseURL';
import BtnSpinner from '../../components/Auth/BtnSpinner';

export default function Game() {
  let providerId = localStorage.getItem('provider_id');
  let gameTypeId = localStorage.getItem('gameType_id');
  let title = localStorage.getItem('title');
  let [url, setUrl] = useState(BASE_URL+"/gamedetail/" + providerId + "/game_type/" + gameTypeId);
  let { data: games, loading, error } = useFetch(url);
  console.log(games);

  return (
    <div className='homeBody text-white container-fluid'>
      <Hero />
        <h1 className='text-center my-4'>{title}</h1>
        {
          loading && 
          <div className='text-center'>
           <BtnSpinner className="mx-auto" />
          </div>
        }

        <div className="row">
        {games && games.map((game, index) => (
          <>
            <div className="col-lg-2 col-md-3 col-6 mb-4 text-center" key={index}>
              <img src={game.image} className='img-fluid rounded shadow' alt="" />
              <p className='text-white mt-3'>{game.name_en}</p>
            </div>
          </>
        ))}
        {
          games.length === 0 && 
          <h6 className='text-center'>There is no game in that provider "{title}".</h6>
        }
        </div>
    </div>
  )
}
