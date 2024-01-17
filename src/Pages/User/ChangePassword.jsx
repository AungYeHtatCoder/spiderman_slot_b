import React from "react";
import "../../assets/css/navbar.css";
const ChangePassword = () => {
  return (
    <div style={{ paddingBottom: 200 }} className="pt-2">
      <h6
        className="text-center p-3"
        style={{ color: "#fff", fontWeight: "bolder" }}
      >
        လျှို့ဝှက်နံပါတ်ပြောင်းမည်
      </h6>
      <div className="container my-4">
        <form>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="လျှို့ဝှက်နံပါတ်အဟောင်း"
              name="current_password"
              id="current_password"
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="လျှို့ဝှက်နံပါတ်အသစ်"
              name="new_password"
              id="new_password"
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="အတည်လျှို့ဝှက်နံပါတ်"
              name="new_password_confirmation"
              id="new_password_confirmation"
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
  );
};

export default ChangePassword;
