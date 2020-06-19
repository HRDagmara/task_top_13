import React from "react";
import styles from "./_header.scss";
import NavBar from "../NavBar/navbar";
import { FaClipboardList, FaUserAlt, FaShoppingBasket, FaTty } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <section className={styles}>
      <header id="header">
        <div className="box-logo">
          <a href="#"><img src="http://via.placeholder.com/100x113" alt="logo" /></a>
        </div>
        <NavBar />
        <div className="box-phone">
          <IconContext.Provider
            value={{ size: '30px' }}
          >
            <FaTty />
          </IconContext.Provider>
          <IconContext.Provider
            value={{ size: '30px' }}
          >
            <div>Pomoc w zakupach <p style={{ color: "red", fontWeight: "bold" }}>94 375 3821</p></div>
            <Button className="btn-box" variant="danger" size="sm">Odwiedź nas</Button>

          </IconContext.Provider>
        </div>
        <IconContext.Provider
          value={{ size: '30px' }}
        >
          <div className="box-icons">
            <FaUserAlt />
            <FaClipboardList />
            <FaShoppingBasket />
          </div>
        </IconContext.Provider>
      </header>
    </section>
  );
};

export default Header;