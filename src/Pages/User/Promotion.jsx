import React from "react";
import "../../assets/css/user/promotion.css";
const Promotion = () => {
  return (
    <div className="promotion pb-5" style={{ marginTop: 50, padding: 10 }}>
      <div className="card border-0 shadow mt-2">
        <img
          src="/src/assets/img/promotion/promotion1.jpg"
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text mb-4">
            စလော့နှင့် ငါးပစ်ဂိမ်းမန်ဘာသစ်အတွက် 200% ဘောနပ်
          </p>
          <div className="text-center">
            <a href="#" className="card-btn text-decoration-none text-white">
              ပိုမိုသိရှိရန်
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  d="M729.6 448H128v85.333333h601.6L597.333333 665.6l59.733334 59.733333 234.666666-234.666666L661.333333 256l-59.733333 59.733333 128 132.266667z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="card border-0 shadow mt-3">
        <img
          src="/src/assets/img/promotion/promotion1.jpg"
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text mb-4">
            စလော့နှင့် ငါးပစ်ဂိမ်းမန်ဘာသစ်အတွက် 30% ဘောနပ်
          </p>
          <div className="text-center">
            <a href="#" className="card-btn text-decoration-none text-white">
              ပိုမိုသိရှိရန်
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  d="M729.6 448H128v85.333333h601.6L597.333333 665.6l59.733334 59.733333 234.666666-234.666666L661.333333 256l-59.733333 59.733333 128 132.266667z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="card border-0 shadow mt-3 mb-5">
        <img
          src="/src/assets/img/promotion/promotion1.jpg"
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text mb-4">စလော့နှင့်ငါးဖမ်းအရှုံးပြန်အမ်း</p>
          <div className="text-center">
            <a href="#" className="card-btn text-decoration-none text-white">
              ပိုမိုသိရှိရန်
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  d="M729.6 448H128v85.333333h601.6L597.333333 665.6l59.733334 59.733333 234.666666-234.666666L661.333333 256l-59.733333 59.733333 128 132.266667z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
