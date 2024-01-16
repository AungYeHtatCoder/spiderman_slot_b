import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import BASE_URL from '../../hooks/baseURL';
import BtnSpinner from '../../components/Auth/BtnSpinner';


export default function Wallet() {
  let [url, setUrl] = useState(BASE_URL+'/wallet')
  let [url1, setUrl1] = useState(BASE_URL+'/get-player-wallet-provider-code')

  let {data:wallet} = useFetch(url);
  
  const {data:providers} = useFetch(url1);

  const [provider, setProvider] = useState('');
  const [amount, setAmount] = useState('');
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);


  // const deposit1 = (e) => {
  //   e.preventDefault();
  
  //   const formData = {
  //     provider_code: provider,
  //     amount: amount
  //   };
  
  //   setLoader(true);
  
  //   fetch(BASE_URL + '/play-slot-game', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + localStorage.getItem('authToken'),
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Deposit Failed");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data.data);
  //       if (data) {
  //         wallet = data.data;
  //         // useFetch(url);
  //         setData(`ငွေသွင်း အောင်မြင်ပါသည်။`);
  //         setProvider('');
  //         setAmount('');
  //         setLoader(false);
  //       }
  //     })
  //   }

    const deposit = (e) => {
      e.preventDefault();
      const formData = { provider_code: provider, amount: amount };
    
      setLoader(true);
    
      fetch(`${BASE_URL}/play-slot-game`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
        body: JSON.stringify(formData),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Deposit Failed");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data.data);
        setProvider('');
        setAmount('');
        window.location.reload();
        // setData(`ငွေသွင်း အောင်မြင်ပါသည်။`);
      })
      .catch((error) => {
        console.error("Deposit Error:", error);
        setData(`Error: ${error.message}`);
      })
      .finally(() => {
        setLoader(false);
      });
    }
    

  return (
    <>
        <div className="container-fluid my-5">
            <h3 className='text-center mb-4'>My Wallet {provider + amount}</h3>
            <div className="row">
              <div className="col-md-3">
                <div className="bg-transparent border border-1 p-2 px-3 rounded-3 shadow d-none d-md-block">
                  {wallet && (
                    <>
                        <div className="d-flex justify-content-between">
                          <span>WALLET</span>
                          <span>
                            K
                            {parseFloat(
                              wallet.user?.balance
                            ).toLocaleString()}
                          </span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>ASIAGAMING</span>
                          <span>{wallet.ag_wallet}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>GAMEPLAY</span>
                          <span>{wallet.g8_wallet}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>BBIN</span>
                          <span>{wallet.gb_wallet}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>JDB</span>
                          <span>{wallet.jd_wallet}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>JOKER</span>
                          <span>{wallet.jk_wallet}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>KING855</span>
                          <span>{wallet.k9_wallet}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>NEW LIVE22</span>
                          <span>{wallet.l4_wallet}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>PGSOFT</span>
                          <span>{wallet.pg_wallet}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>PRAGMATIC</span>
                          <span>{wallet.pr_wallet}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>KING MAKER</span>
                          <span>{wallet.re_wallet}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>SBO</span>
                          <span>{wallet.s3_wallet}</span>
                        </div>
                    </>

                  )}
                </div>
              </div>
              <div className="col-md-9">
                <div className="bg-transparent border border-1 py-3 px-3 rounded-3 shadow mb-4">  
                <h5 className='mb-4'>Deposit (ငွေသွင်းရန်) <span className="badge text-bg-info">{data}</span> </h5>
                  <form onSubmit={deposit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="p_code" className="form-label">ဂိမ်းအမျိုးအစား ရွေးချယ်ပါ</label>
                          <select className="form-select" name="provider_code" id="p_code" onChange={(e) => setProvider(e.target.value)}>
                            <option value="">ကျေးဇူးပြု၍ ရွေးချယ်ပါ</option>
                            {providers && providers.map((provider, index) => (
                              <option key={index} value={provider.p_code}>{provider.description}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="amount" className="form-label">ငွေပမာဏ ထည့်ပါ</label>
                          <input type="number" placeholder="ငွေပမာဏ ထည့်ပါ" name="amount" className="form-control" onChange={(e) => setAmount(e.target.value)} />
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <button className="btn btn-red" type="submit">
                        {loader && <BtnSpinner/>}
                        ငွေသွင်းမည်
                      </button>
                    </div>
                  </form>
                </div>
                <div className="bg-transparent border border-1 py-3 px-3 rounded-3 shadow">  
                <h5 className='mb-4'>Withdraw (ငွေထုတ်ရန်)</h5>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="p_code" className="form-label">ဂိမ်းအမျိုးအစား ရွေးချယ်ပါ</label>
                          <select className='form-label form-select' name="" id="p_code">
                          <option value="">ကျေးဇူးပြု၍ ရွေးချယ်ပါ</option>
                            {providers && providers.map((provider, index)=>(
                              <option key={index} value={provider.p_code}>{provider.description}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="amount" className="form-label">ငွေပမာဏ ထည့်ပါ</label>
                          <input type="number" placeholder="ငွေပမာဏ ထည့်ပါ" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <button className="btn btn-red">ငွေထုတ်မည်</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
