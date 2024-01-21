import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import BASE_URL from '../../hooks/baseURL';

export default function PromotionDetail({detail, url}) {
    const [close, setClose] = useState(detail);
    let { data: promotion } = useFetch(url);
  return (
    <>
    <div className="container">
        <div>
            <button className="btn btn-light"><i className="fas fa-arrow-left me-2"></i>Back</button>
        </div>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                {promotion && (
                    <div className="card rounded-3 shadow">
                        <img src={promotion.img_url} className='img-fluid card-img-top' alt="" />
                        <div className="m-3">
                            <h4>{promotion.title}</h4>
                            <p dangerouslySetInnerHTML={{ __html: promotion.description }}></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
    </>
  )
}
