import React, { useEffect, useState } from "react";
import "../../assets/css/navbar.css";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../hooks/baseURL";
import { set } from "react-hook-form";
import userProfile from "../../assets/img/logo.png";
import HeroSideBar from "../../components/User/HeroSidebar";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import axios from "axios";
const Profile = () => {
  const { authenticated, setAuthenticated } = useAuthContext();

  const form = useForm({
    mode: "onTouched",
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const [user, setUser] = useState();
  const [userName, setUserName] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userImage, setUserImage] = useState();
  let auth = localStorage.getItem("authToken");
  const navigate = useNavigate();

  if (!authenticated) {
    navigate("/login");
  }

  if (auth) {
    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("authUser")).userData);
    }, []);
  }

  const updateProfile = (e) => {
    e.preventDefault();
    // console.log(userImage);

    const profileData = {
      profile: userImage,
      phone: userPhone,
    };

    console.log(profileData);
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    };
    axios
      .post(BASE_URL + "/profile", profileData, { headers })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    setUserName(user?.name);
    setUserPhone(user?.phone);
    // setUserImage(user?.profile);
  }, [user]);

  return (
    <>
      {auth && (
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
              <div style={{ paddingBottom: 200 }} className="pt-2">
                <div className="container">
                  <form onSubmit={updateProfile}>
                    <div className="text-center mb-4">
                      <img
                        src={userProfile}
                        width="auto"
                        height="80px"
                        className="rounded-circle mx-auto"
                        alt="userprofile"
                      />
                      <p className="mt-3">
                        <i
                          className="fas fa-wallet text-white"
                          style={{ fontSize: "20px" }}
                        ></i>
                        <span className="fw-500 ms-2">
                          K {parseFloat(user?.balance).toLocaleString()}
                        </span>
                      </p>
                    </div>

                    <div class="mb-3">
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        onChange={(e) => setUserImage(e.target.files[0])}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="အမည်"
                        name="name"
                        value={userName}
                      />
                    </div>

                    <div className="form-group mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ဖုန်းနံပါတ်"
                        name="phone"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
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
      )}
    </>
  );
};

export default Profile;
