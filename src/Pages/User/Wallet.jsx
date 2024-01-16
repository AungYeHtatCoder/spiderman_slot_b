import React from 'react'
import useFetch from '../../hooks/useFetch'
import BASE_URL from '../../hooks/baseURL';

export default function Wallet() {
  const {data:wallet, loading, error} = useFetch(BASE_URL+'/wallet');
  let authUser = JSON.parse(localStorage.getItem("authUser"));


  return (
    <>
        <div className="container-fluid my-4">
            <h3 className='text-center'>My Wallet</h3>
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
                              authUser.userData.balance
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
                <div className="bg-transparent border border-1 py-3 px-3 rounded-3 shadow">  
                <h5 className='mb-4'>Deposit (ငွေသွင်းရန်)</h5>
                  <form>
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-3">
                          <label htmlFor="p_code" className="form-label">ဂိမ်းအမျိုးအစား ရွေးချယ်ပါ</label>
                          <select className='form-label form-select' name="" id="p_code">
                            <option value=""></option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <label htmlFor="amount" className="form-label">ငွေပမာဏ ထည့်ပါ</label>
                          <input type="number" placeholder="ငွေပမာဏ ထည့်ပါ" className="form-control" />
                        </div>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
