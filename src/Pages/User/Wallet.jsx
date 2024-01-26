import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";
import BtnSpinner from "../../components/Auth/BtnSpinner";
import axios from "axios";
import { useAuthContext } from "../../contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

export default function Wallet() {
  const { authenticated, setAuthenticated } = useAuthContext();

  const navigate = useNavigate();

  if (!authenticated) {
    navigate("/login");
  }

  let [url, setUrl] = useState(BASE_URL + "/wallet/currentWallet");

  const form = useForm({
    mode: "onTouched",
  });
  const form2 = useForm();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;
  const {
    register: register2,
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    reset: reset2,
  } = form2;

  const [wallet, setWallet] = useState(null);
  const [providers, setProviders] = useState(null);

  const { wallets, setWallets } = useAuthContext();

  const [user, setUser] = useState();
  // console.log(user);
  useEffect(() => {
    setWallets(wallet);
  }, [wallet]);

  useEffect(() => {
    if (authenticated) {
      setUser(JSON.parse(localStorage.getItem("authUser")).userData);
    }
  }, []);

  // const { data: providers } = useFetch(url1);

  const [provider, setProvider] = useState("");
  const [bank, setInputBank] = useState("");
  // console.log(wallets);
  const [amount, setAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [banks, setBank] = useState();
  // console.log(banks);
  // console.log(amount);
  const getProvider = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    };
    axios
      .get(BASE_URL + "/providers", { headers })
      .then((response) => {
        setProviders(response.data.data);
      })
      .catch((e) => console.log(e));
  };

  const getList = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    };
    axios
      .get(BASE_URL + "/wallet/currentWallet", { headers })
      .then((response) => setWallet(response.data.data));
  };

  const getBank = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    };
    axios
      .get(BASE_URL + "/bank/all", { headers })
      .then((response) => {
        setBank(response.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getList();
    getProvider();
    getBank();
  }, []);

  const deposite = (depositeData) => {
    // e.preventDefault();
    console.log(depositeData);
    const formData = { p_code: provider, cash_in: amount };
    // console.log(formData);
    setLoader(true);
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    };
    axios
      .post(BASE_URL + "/transaction/deposit", depositeData, { headers })
      .then((response) => {
        if (response.status == 200) {
          let wallet = response.data;
          getList();
          setLoader(false);
          reset();
          // localStorage.removeItem("wallet");
          // localStorage.setItem("wallet", JSON.stringify(wallet));
          toast.success("Deposite Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const withdraw = (withdrawData) => {
    console.log(withdrawData);
    // e.preventDefault();
    const formData = { user_bank_id: bank, amount: withdrawAmount };

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    };
    axios
      .post(BASE_URL + "/transaction/withdraw", formData, { headers })
      .then((response) => {
        if (response.status == 200) {
          let wallet = response.data;
          getList();
          setLoader(false);
          setAmount("");
          setInputBank("");
          toast.success("Withdraw Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="container-fluid my-5">
        <h3 className="text-center mb-4">My Wallet</h3>
        <div className="row">
          <div className="col-md-3">
            <div className="bg-transparent border border-1 p-2 px-3 rounded-3 shadow d-none d-md-block">
              {wallet && (
                <>
                  <div className="d-flex justify-content-between">
                    <span>WALLET</span>
                    <span>K{parseFloat(user?.balance).toLocaleString()}</span>
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
              <h5 className="mb-4">
                Deposit (ငွေသွင်းရန်)
                <span className="badge text-bg-info">{data}</span>
              </h5>
              <form onSubmit={handleSubmit(deposite)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="p_code" className="form-label">
                        ဂိမ်းအမျိုးအစား ရွေးချယ်ပါ
                      </label>
                      <select
                        className={`form-select ${
                          errors.p_code && "border-2 border-danger"
                        }`}
                        id="p_code"
                        {...register("p_code", {
                          required: "Provider Code is Required.",
                        })}
                      >
                        <option value="">ကျေးဇူးပြု၍ ရွေးချယ်ပါ</option>
                        {providers &&
                          providers.map((provider, index) => (
                            <option key={index} value={provider.p_code}>
                              {provider.description}
                            </option>
                          ))}
                      </select>
                      <div className="error text-danger">
                        {errors.p_code?.message}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="amount" className="form-label">
                        ငွေပမာဏ ထည့်ပါ
                      </label>
                      <input
                        type="number"
                        placeholder="ငွေပမာဏ ထည့်ပါ"
                        className={`form-control ${
                          errors.cash_in && "border-2 border-danger"
                        } `}
                        {...register("cash_in", {
                          required: "Amount is Required.",
                          min: {
                            value: 1000,
                            message: "Sorry amount can't be below 1000",
                          },
                        })}
                      />
                      <div className="error text-danger">
                        {errors.cash_in?.message}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button className="btn btn-red" type="submit">
                    {loader && <BtnSpinner />}
                    ငွေသွင်းမည်
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-transparent border border-1 py-3 px-3 rounded-3 shadow">
              <h5 className="mb-4">Withdraw (ငွေထုတ်ရန်)</h5>
              <form onSubmit={handleSubmit2(withdraw)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="p_code" className="form-label">
                        ဘဏ် ရွေးချယ်ပါ
                      </label>
                      <select
                        className={`form-label form-select ${
                          errors2.user_bank_id && "border-2 border-danger"
                        }`}
                        id="bank"
                        {...register2("user_bank_id", {
                          required: "Bank is Required.",
                        })}
                      >
                        <option value="">ကျေးဇူးပြု၍ ရွေးချယ်ပါ</option>
                        {banks &&
                          banks.map((bank, index) => (
                            <option key={index} value={bank.id}>
                              {bank.name}
                            </option>
                          ))}
                      </select>
                      <div className="error text-danger">
                        {errors2.user_bank_id?.message}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="amount" className="form-label">
                        ငွေပမာဏ ထည့်ပါ
                      </label>
                      <input
                        type="number"
                        placeholder="ငွေပမာဏ ထည့်ပါ"
                        className={`form-control ${
                          errors2.amount && "border-2 border-danger"
                        }`}
                        {...register2("amount", {
                          required: "Bank is Required.",
                        })}
                      />
                      <div className="error text-danger">
                        {errors2.amount?.message}
                      </div>
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
  );
}
