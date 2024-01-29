import React, { useEffect, useState } from "react";
import "../../assets/css/navbar.css";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../hooks/baseURL";
import { set } from "react-hook-form";
import userProfile from "../../assets/img/logo.png";
import HeroSideBar from "../../components/User/HeroSidebar";
const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
            <div style={{ paddingBottom: 200 }} className="pt-2">
              <div className="container">
                <form>
                  <div className="text-center mb-4">
                    <img
                      src={userProfile}
                      width="auto"
                      height="80px"
                      className="rounded-circle mx-auto"
                      alt="userprofile"
                    />
                    <p className="mt-3">
                      Wallet: <span className="fw-500">K500,000</span>
                    </p>
                  </div>

                  <div class="mb-3">
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="အမည်"
                      name="name"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ဖုန်းနံပါတ်"
                      name="phone"
                    />
                  </div>

                  <div className="form-group my-2 float-end">
                    <button type="submit" className="loginBtn text-white">
                      ပြောင်းမည်
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
