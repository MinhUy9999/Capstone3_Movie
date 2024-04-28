import React from "react";
import logo from "../../assets/img/header-logo.png";
import icticket from "../../assets/svg/icticket.svg";
import iccor from "../../assets/svg/iccor.svg";
import icsearch from "../../assets/svg/icsearch.svg";
import iclogin from "../../assets/svg/iclogin.svg";
import icVN from "../../assets/svg/icVN.svg";
import { Link } from "react-router-dom";
import { path } from "../../common/path";
import "./header.scss";
import Button from "../../components/Button/Button";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header ">
          <Link to={path.trangChu}>
            <img className="w-[130px] h-[46px]" src={logo} alt="" />
          </Link>
          <div className="header_btn">
            <Button
              className="btn-datVe"
              src={icticket}
              text="Đặt vé ngay"
              path="/dat-ve"
            />
            <Button
              className="btn-datBapNuoc"
              src={iccor}
              text="Đặt bắp nước"
              path="/dat-bap-nuoc"
            />
          </div>
          <div className="header_right">
            <form className="header_search">
              <input
                className="custom_input"
                type="text"
                value=""
                placeholder="Tìm phim, rạp"
              />
              <button className="header-search-form-btn active" type="submit">
                <img src={icsearch} alt="" />
              </button>
            </form>
            <div className="header_login">
              <div className="login_ic">
                <img src={iclogin} alt="" />
              </div>
              <Link to={path.dangNhap}>Đăng nhập</Link>
            </div>
            <div className="header_language">
              <div className="languge_option">
                <span className="image">
                  <img src={icVN} alt />
                </span>
                <span className="txt">VN</span>
                <i className="fas fa-caret-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
